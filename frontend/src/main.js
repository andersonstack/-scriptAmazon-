import "./css/reset.css";
import getApi from "./service/getApi";

document.querySelector("#app").innerHTML = `
  <div>
    <p>Amazon Scraper</p>
  </div>
`;

getApi();
