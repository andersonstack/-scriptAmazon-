import { JSDOM } from "jsdom";

export default function paserHTML(html) {
  const dom = new JSDOM(html);
  return dom.window.document;
}
