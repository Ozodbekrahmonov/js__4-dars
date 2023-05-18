/*Jsda delectorlar va stillarni ishlatilishi */

let byTag = document.getElementsByTagName("h1")
let byId = document.getElementById("idRaqam")
let byClass = document.getElementsByClassName("classNomi")
let bySelector = document.querySelector(".classNomi")
let bySelectorAll = document.querySelectorAll(".classNomi")
let byAll = document.getElementsByTagName("h1").namedItem("idRaqam2")

byAll.style.backgroundColor = "green";
byAll.style.color = "yellow";
byAll.style.border = "3px solid pink";
byAll.style.width = "200px";
byAll.style.height = "200px";
byAll.style.lineHeight = "100px";

console.log(byAll);
