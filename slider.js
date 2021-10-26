import data from "./data.js";

//style
const CSS = {
  container: {
    width: "900px",
    height: "600px",
    background: "#FFF3F5",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto",
    overflowX: "hidden",
  },
  card: {
    margin: "5%",
    overflow: "auto",
    overflowX: "hidden",
  },
  header: {
    position: "relative",
    top: "10px",
    left: "40px",
  },
  btn: {
    width: "30px",
    height: "30px",
    position: "relative",
    top: "-280px",
  },
  prev: {
    left: "10px",
  },
  next: {
    left: "830px",
  },
  slider: {
    position: "relative",
    height: 350,
    background: "#fff",
    left: 0,
    width: "250%",
    transition: "0.8s ease-in-out",
  },
  productContainer: {
    margin: "1%",
    float: "left",
    width: "8%",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  image: {
    height: "100%",
    width: "100%",
  },

  title: {},
  price: {
    color: "red",
    textAlign: "center",
  },
};

//Creating HTML element with jquery
$("<div/>", { id: "container" }).css(CSS.container).appendTo("body"); //our container part
$("<h1>You might also like</h1>", { id: "header" }) //header
  .css(CSS.header)
  .appendTo("#container");
$("<div/>", { id: "card" }).css(CSS.card).appendTo("#container"); //card
$("<div/>", { id: "slider" }).css(CSS.slider).appendTo("#card"); //slider
$("<button  id='prev'><</button>") //prev button
  .css($.extend(CSS.btn, CSS.prev))
  .appendTo("#container");
$("<button id='next'>></button>") //next button
  .css($.extend(CSS.btn, CSS.next))
  .appendTo("#container");

//Here we put item into product-container
for (let i = 0; i < data.length; i++) {
  $("<div/>", { class: `product-container${i}` })
    .css(CSS.productContainer)
    .click(() => window.open(data[i].link))
    .appendTo("#slider");
  $(`<img src=${data[i].img}></img>`, { class: "image" })
    .css(CSS.image)
    .appendTo(document.getElementsByClassName(`product-container${i}`));
  $(`<p>${data[i].title}</p>`, { class: "title" })
    .css(CSS.title)
    .appendTo(document.getElementsByClassName(`product-container${i}`));
  $(`<p>${data[i].price}</p>`, {
    class: "price",
  })
    .css(CSS.price)
    .appendTo(document.getElementsByClassName(`product-container${i}`));
}

//This is slider button function
let x = 0;
$("#next").click(function () {
  x = x <= 125 ? x + 25 : 0;
  $("#slider").css("left", -x + "%");
});

$("#prev").click(function () {
  x = x >= 25 ? x - 25 : 150;
  $("#slider").css("left", -x + "%");
});
