const QRCode = require('qrcode')
const fs = require('fs')
const path = require('path')

class QRService {
  /**
   * Generate QR code as data URL
   * @param {string} text - Text to encode in QR code
   * @param {Object} options - QR code options
   * @returns {Promise<string>} - Data URL of QR code
   */
  static async generateQRDataURL(text, options = {}) {
    const defaultOptions = {
      width: 200,
      margin: 2,
      color: {
        dark: '#0B2878', // Primary color
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'H',
    }

    const qrOptions = { ...defaultOptions, ...options }

    try {
      const dataURL = await QRCode.toDataURL(text, qrOptions)
      return dataURL
    } catch (error) {
      console.error('Error generating QR code:', error)
      throw new Error('Failed to generate QR code')
    }
  }

  /**
   * Generate QR code as base64 string
   * @param {string} text - Text to encode in QR code
   * @param {Object} options - QR code options
   * @returns {Promise<string>} - Base64 string of QR code
   */
  static async generateQRBase64(text, options = {}) {
    const defaultOptions = {
      width: 200,
      margin: 2,
      color: {
        dark: '#0B2878',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'H',
    }

    const qrOptions = { ...defaultOptions, ...options }

    try {
      const base64 = await QRCode.toDataURL(text, qrOptions)
      // Remove data:image/png;base64, prefix
      return base64.replace(/^data:image\/png;base64,/, '')
    } catch (error) {
      console.error('Error generating QR code base64:', error)
      throw new Error('Failed to generate QR code')
    }
  }

  /**
   * Generate QR code and save as file
   * @param {string} text - Text to encode in QR code
   * @param {string} filename - Output filename
   * @param {Object} options - QR code options
   * @returns {Promise<string>} - File path
   */
  static async generateQRFile(text, filename, options = {}) {
    const defaultOptions = {
      width: 200,
      margin: 2,
      color: {
        dark: '#0B2878',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'H',
    }

    const qrOptions = { ...defaultOptions, ...options }
    const outputPath = path.join(__dirname, '../uploads', filename)

    try {
      // Ensure uploads directory exists
      const uploadsDir = path.dirname(outputPath)
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true })
      }

      await QRCode.toFile(outputPath, text, qrOptions)
      return outputPath
    } catch (error) {
      console.error('Error generating QR file:', error)
      throw new Error('Failed to generate QR file')
    }
  }

  /**
   * Generate QR code as SVG
   * @param {string} text - Text to encode in QR code
   * @param {Object} options - QR code options
   * @returns {Promise<string>} - SVG string
   */
  static async generateQRSVG(text, options = {}) {
    const defaultOptions = {
      width: 200,
      margin: 2,
      color: {
        dark: '#0B2878',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'H',
    }

    const qrOptions = { ...defaultOptions, ...options }

    try {
      const svg = await QRCode.toString(text, { type: 'svg', ...qrOptions })
      return svg
    } catch (error) {
      console.error('Error generating QR SVG:', error)
      throw new Error('Failed to generate QR SVG')
    }
  }
}

module.exports = QRService
