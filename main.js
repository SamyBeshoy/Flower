// nav menu
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// nav menu

// products
let products_boxs = document.querySelector(".products-boxs");
for (let i = 0; i < 6; i++) {
    let products_box = document.createElement("div");
    products_box.style.cssText = `
    box-shadow: rgb(0, 0, 0) 0px 0px 8px 0px;
    width: fit-content;
    margin: 15px;
    `;
    let box_discount = document.createElement("h5");
    box_discount.innerHTML = "- 10%";
    box_discount.style.cssText = `
    padding: 15px;
    background-color: #ff00ff2b;
    width: fit-content;
    `;
    products_box.appendChild(box_discount);
    let center_content = document.createElement("div");
    center_content.style.cssText = `    
    text-align: center;
    padding: 2em;
    `;
    let box_img = document.createElement("img");
    box_img.style.cssText = `
    width: 15em;
    `;
    box_img.src = "img/5.jpg";
    center_content.appendChild(box_img);
    let box_name = document.createElement("div");
    box_name.style.cssText = `
    font-weight: bold;
    font-size: 1.5em;
    `;
    box_name.innerHTML = "Flower Pot";
    center_content.appendChild(box_name);
    let box_price = document.createElement("span");
    box_price.innerHTML = "$12.99 ";
    center_content.appendChild(box_price);
    let box_price2 = document.createElement("span");
    box_price2.style.cssText = `
    text-decoration: line-through;
    `;
    box_price2.innerHTML = "$15.99";
    center_content.appendChild(box_price2);
    products_box.appendChild(center_content);
    products_boxs.appendChild(products_box);
};
// products