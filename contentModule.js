import { content } from "./content.js";

console.log(content.title);
for(let key in content){
  $("#"+key).text(content[key]);
}

function gather(){
  let obj = document.getElementsByClassName("changeable");
  let str = "export let content = {";
  for(let key in obj){
    if(!!obj[key].id){
      str = str + '"' + obj[key].id + '":"' + obj[key].innerHTML + '",';
    }
  }
  str = str.replace(/,$/g,"}");

  console.log(str);
}

document.getElementById('gatherButton').addEventListener("click",()=>gather());
