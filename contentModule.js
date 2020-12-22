import { content } from "./content.js";

console.log(content.title);
for(let key in content){
  $("#"+key).text(content[key]);
}
