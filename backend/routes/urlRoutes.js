const express = require('express')
const router = express.Router()
const Url = require('../models/Url')
const QRService = require('../services/qrService')
const validator = require('validator')

/**
 * @route   POST /api/shorten
 * @desc    Create a shortened URL with QR code
 * @access  Public
 */
router.post('/shorten', async (req, res) => {
  try {
    const { originalUrl } = req.body

    // Validation
    if (!originalUrl) {
      return res.status(400).json({
        success: false,
        error: 'Original URL is required',
      })
    }

    // Validate URL format
    if (!validator.isURL(originalUrl, { protocols: ['http', 'https'] })) {
      return res.status(400).json({
        success: false,
        error: 'Invalid URL format. Please include http:// or https://',
      })
    }

    // Check if URL already exists
    const existingUrl = await Url.findOne({ originalUrl })
    if (existingUrl) {
      return res.status(200).json({
        success: true,
        data: {
          shortUrl: existingUrl.shortUrl,
          shortCode: existingUrl.shortCode,
          qrCode: existingUrl.qrCode,
          originalUrl: existingUrl.originalUrl,
          clicks: existingUrl.clicks,
        },
      })
    }

    // Generate QR code
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
    const qrCodeDataURL = await QRService.generateQRDataURL(originalUrl)

    // Create new URL entry
    const newUrl = new Url({
      originalUrl,
      qrCode: qrCodeDataURL,
    })

    await newUrl.save()

    res.status(201).json({
      success: true,
      data: {
        shortUrl: newUrl.shortUrl,
        shortCode: newUrl.shortCode,
        qrCode: newUrl.qrCode,
        originalUrl: newUrl.originalUrl,
        clicks: newUrl.clicks,
        createdAt: newUrl.createdAt,
      },
    })
  } catch (error) {
    console.error('Error in /api/shorten:', error)
    res.status(500).json({
      success: false,
      error: 'Server error while creating short URL',
    })
  }
})

/**
 * @route   GET /api/stats/:shortCode
 * @desc    Get statistics for a shortened URL
 * @access  Public
 */
router.get('/stats/:shortCode', async (req, res) => {
  try {
    const { shortCode } = req.params

    if (!shortCode || shortCode.length < 4) {
      return res.status(400).json({
        success: false,
        error: 'Invalid short code',
      })
    }

    const urlData = await Url.findOne({ shortCode, isActive: true })

    if (!urlData) {
      return res.status(404).json({
        success: false,
        error: 'Short URL not found',
      })
    }

    res.status(200).json({
      success: true,
      data: {
        shortUrl: urlData.shortUrl,
        shortCode: urlData.shortCode,
        originalUrl: urlData.originalUrl,
        clicks: urlData.clicks,
        createdAt: urlData.createdAt,
        lastAccessed: urlData.lastAccessed,
        formattedCreatedAt: urlData.formattedCreatedAt,
      },
    })
  } catch (error) {
    console.error('Error in /api/stats:', error)
    res.status(500).json({
      success: false,
      error: 'Server error while fetching stats',
    })
  }
})

/**
 * @route   GET /:shortCode
 * @desc    Redirect to original URL and increment clicks
 * @access  Public
 */
router.get('/:shortCode', async (req, res) => {
  try {
    const { shortCode } = req.params
    const userAgent = req.get('User-Agent')
    const ipAddress = req.ip || req.connection.remoteAddress

    const urlData = await Url.findByShortCodeAndIncrement(shortCode, userAgent, ipAddress)

    if (!urlData) {
      return res.status(404).json({
        success: false,
        error: 'Short URL not found or expired',
      })
    }

    res.redirect(301, urlData.originalUrl)
  } catch (error) {
    console.error('Error in GET /:shortCode:', error)
    res.status(500).json({
      success: false,
      error: 'Server error during redirect',
    })
  }
})

/**
 * @route   GET /api/redirect/:shortCode
 * @desc    Redirect to original URL and increment clicks
 * @access  Public
 */
router.get('/redirect/:shortCode', async (req, res) => {
  try {
    const { shortCode } = req.params
    const userAgent = req.get('User-Agent')
    const ipAddress = req.ip || req.connection.remoteAddress

    const urlData = await Url.findByShortCodeAndIncrement(shortCode, userAgent, ipAddress)

    if (!urlData) {
      return res.status(404).json({
        success: false,
        error: 'Short URL not found or expired',
      })
    }

    res.redirect(301, urlData.originalUrl)
  } catch (error) {
    console.error('Error in /api/redirect:', error)
    res.status(500).json({
      success: false,
      error: 'Server error during redirect',
    })
  }
})

/**
 * @route   GET /api/recent
 * @desc    Get recent shortened URLs
 * @access  Public
 */
router.get('/recent', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10
    const page = parseInt(req.query.page) || 1
    const skip = (page - 1) * limit

    const recentUrls = await Url.find({ isActive: true })
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .select('shortUrl shortCode originalUrl clicks createdAt')

    const total = await Url.countDocuments({ isActive: true })

    res.status(200).json({
      success: true,
      data: {
        urls: recentUrls,
        pagination: {
          current: page,
          total: Math.ceil(total / limit),
          count: total,
        },
      },
    })
  } catch (error) {
    console.error('Error in /api/recent:', error)
    res.status(500).json({
      success: false,
      error: 'Server error while fetching recent URLs',
    })
  }
})

/**
 * @route   DELETE /api/:shortCode
 * @desc    Deactivate a shortened URL
 * @access  Public
 */
router.delete('/:shortCode', async (req, res) => {
  try {
    const { shortCode } = req.params

    const urlData = await Url.findOneAndUpdate({ shortCode }, { isActive: false }, { new: true })

    if (!urlData) {
      return res.status(404).json({
        success: false,
        error: 'Short URL not found',
      })
    }

    res.status(200).json({
      success: true,
      message: 'URL deactivated successfully',
    })
  } catch (error) {
    console.error('Error in DELETE /api/:', error)
    res.status(500).json({
      success: false,
      error: 'Server error while deactivating URL',
    })
  }
})

module.exports = router
