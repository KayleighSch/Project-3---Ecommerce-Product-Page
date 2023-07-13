const menuBtn = document.getElementById("menu-btn");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".nav_links");
const closeBtn = document.querySelector(".close-btn");
const cartBtn = document.querySelector(".cart-btn");
const indicator = document.querySelector(".indicator");
const cart = document.querySelector(".cart-wrp");
const wrp = document.querySelector(".cart-content");
const mainThumbnail = document.querySelector(".main-thumbnail");
const thumbMob = document.querySelector(".thumb-mob");
const slider = document.querySelector(".mobile-thumb");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const images = document.querySelectorAll(".preview img");
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const amount = document.querySelector(".amount");
const addBtn = document.querySelector(".add_btn");
const mainThumbnailLightBox = document.querySelector(".lightbox-wrapper .main-thumbnail");
const closeLightboxBtn = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");

let amountValue = 0;
let currentImg = 1;

indicator.style.display = "none";
function openMenu() {
  menu.classList.add("active");
  overlay.classList.add("active");
}

function closeMenu() {
  menu.classList.remove("active");
  overlay.classList.remove("active");
}

function handlePlus() {
  amountValue++;
  amount.innerText = amountValue;
}

function handleMinus() {
  if (amountValue > 0) {
    amountValue--;
  }
  amount.innerText = amountValue;
}

function nextImage() {
  if (currentImg == 4) {
    currentImg = 1;
  } else {
    currentImg++;
  }
  thumbMob.src = `./images/image-product-${currentImg}.jpg`;
}

function prevImage() {
  if (currentImg == 1) {
    currentImg = 4;
  } else {
    currentImg--;
  }
  thumbMob.src = `./images/image-product-${currentImg}.jpg`;
}

function toggleCart() {
  cart.classList.toggle("invisible");
}

function closeLightBox() {
  lightbox.classList.add("invisible");
}

function openLightBox() {
  lightbox.classList.remove("invisible");
}
function addItem() {
    if (amountValue > 0) {
        const total = 125.00 * amountValue;
    wrp.classList.remove("empty");
    wrp.innerHTML = `<div class="product">
                    <div>
                      <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
                      <div class="product-info">
                        <p class="product-title">Fall Limited Edition Sneakers</p>
                       <p><span>$125.00</span> × <span class="number">${amountValue}</span> <b>$${total}</b></p>
                      </div>
                      <button class="delete-btn" onclick="deleteItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
                    </div>
                    <button class="checkout-btn">Checkout</button>
                  </div>`;
    indicator.style.display = "block";
    indicator.innerText = amountValue;
}
}
function deleteItem() {
    wrp.classList.add("empty");
    wrp.innerHTML = `<p>Your cart is empty</p>`;
    indicator.style.display = "none";
}