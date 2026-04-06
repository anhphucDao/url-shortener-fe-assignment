const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const { nanoid } = require("nanoid"); 

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/shortener");

const urlSchema = new mongoose.Schema({
    longUrl: String,
    shortUrl: String,
    clicks: { type: Number, default: 0 }
});
const Url = mongoose.model("Url", urlSchema);

app.get("/urls", async (req, res) => {
    const allUrls = await Url.find();
    res.json(allUrls);
});


app.post("/urls", async (req, res) => {
    const { longUrl } = req.body;
    if (!longUrl) return res.status(400).json({ message: "Miss URL" });

    const slug = nanoid(6); // 6 random chars
    const newUrl = new Url({ longUrl, shortUrl: slug });
    await newUrl.save();

    res.status(201).json(newUrl);
});


app.get("/:slug", async (req, res) => {
    const url = await Url.findOne({ shortUrl: req.params.slug });
    if (!url) return res.status(404).send("Link không tồn tại");
    
    url.clicks++; 
    await url.save();
    
    res.redirect(url.longUrl);
});

app.listen(port, () => console.log(`http://localhost:${port}`));