import express from "express";
import fetchAmazonPage from "./utils/fetchAmazonPage.js";
import parseHTMLToJson from "./utils/parseHTMLToJson.js";
import extractProductsFromDOM from "./utils/produtcs.js";
import {
  badRequest,
  notFound,
  serverError,
  badGateway,
} from "./utils/httpErros.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "*",
    methods: "GET",
  })
);

app.get("/api/scrape", async (req, res) => {
  try {
    const keyword = req.query.k;

    // Check if keyword is provided
    if (!keyword) return badRequest(res, "No keyword provided");

    // Product link on Amazon store and Request URL
    const html = await fetchAmazonPage(keyword);
    // Check if product link is found
    if (!html) return notFound(res, "No products found");

    // To parse the HTML to JSON
    const document = parseHTMLToJson(html);
    // Check if HTML is parsed
    if (!document) return badGateway(res, "Failed to parse HTML");

    // To extract products from DOM
    const products = extractProductsFromDOM(document);
    // Check if products are extracted
    if (!products || products.length === 0)
      return serverError(res, "Failed to extract products");

    // Return products | Sucess
    res.json({ products });
  } catch (e) {
    console.error(e);
    serverError(res, e.message);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
