import express from "express";
import { JSDOM } from "jsdom";
import fetchAmazonPage from "./utils/fetchAmazonPage.js";

const app = express();
const PORT = 3000;

app.get("/api/scrape", async (req, res) => {
  try {
    const keyword = req.query.keyword;

    // Product link on Amazon store and Request URL
    const html = await fetchAmazonPage(keyword);

    // Creating the DOM
    const dom = new JSDOM(html);
    console.log(dom);
  } catch (e) {
    console.error(e);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
