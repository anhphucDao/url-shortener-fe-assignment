import express from "express";
import cors from "cors";
import e from "express";

const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());

const urls = [
  { Id: 1, longUrl: "https://www.google.com", shortUrl: "gg" },
  { Id: 2, longUrl: "https://www.facebook.com", shortUrl: "fb" },
];

app.post("/api/urls", (req, res) => {
  const newUrl = req.body;
  const existingUrl = urls.find((u) => u.shortUrl === newUrl.shortUrl);

  if (existingUrl) {
    return res.status(200).json(existingUrl);
  }

  urls.push(newUrl);
  res.status(201).json(newUrl);
});

app.get("/:shortUrl", (req, res) => {
  const shortUrl = req.params.shortUrl;
  const url = urls.find((u) => u.shortUrl === shortUrl);

  if (!url) {
    return res.status(404).json({ error: "URL not found!" });
  }

  res.redirect(url.longUrl);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
