import express from "express";
import { JSDOM } from "jsdom";
import axios from "axios";

const app = express();
const PORT = 3000;

app.get("/api/scrape", async (req, res) => {
  try {
    const keyword = req.query.keyword;

    // Product link on Amazon store and Request URL
    const amazonUrl = `https://www.amazon.com/s?k=${encodeURIComponent(
      keyword
    )}`;

    const { data } = await axios.get(amazonUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) ...",
      },
    });

    // Creating the DOM
    const dom = new JSDOM(data);
    console.log(dom);
  } catch (e) {
    console.error(e);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
