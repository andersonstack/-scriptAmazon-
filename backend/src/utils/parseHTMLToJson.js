import { JSDOM } from "jsdom";

export default function parseHTMLToJson(html) {
  const dom = new JSDOM(html);
  return dom.window.document;
}
