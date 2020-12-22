console.log("content module");

import { content } from "./content.js";

console.log(content.title);

$("#test").text(content.title);
