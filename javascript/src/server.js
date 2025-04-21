import express from "express";
import fetchAmazonPage from "./utils/fetchAmazonPage.js";
import parseHTMLToJson from "./utils/parseHTMLToJson.js";
import extractProductsFromDOM from "./utils/produtcs.js";

const app = express();
const PORT = 3000;

app.get("/api/scrape", async (req, res) => {
  try {
    const keyword = req.query.keyword;

    // Check if keyword is provided
    if (!keyword) {
      return res.status(400).json({ error: "Keyword is required" });
    }

    // Product link on Amazon store and Request URL
    const html = await fetchAmazonPage(keyword);
    // To parse the HTML to JSON
    const document = parseHTMLToJson(html);
    // To extract products from DOM
    const products = extractProductsFromDOM(document);

    res.json({ products });
  } catch (e) {
    console.error(e);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
