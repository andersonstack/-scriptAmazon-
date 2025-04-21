import express from "express";
import fetchAmazonPage from "./utils/fetchAmazonPage.js";
import paserHTML from "./utils/parseJson.js";

const app = express();
const PORT = 3000;

app.get("/api/scrape", async (req, res) => {
  try {
    const keyword = req.query.keyword;

    // Product link on Amazon store and Request URL
    const html = await fetchAmazonPage(keyword);
    const document = paserHTML(html);

    res.json({ document });
  } catch (e) {
    console.error(e);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
