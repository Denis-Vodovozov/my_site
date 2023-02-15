const data = JSON.parse(dataProductJson);

const templateEl = document.querySelector(".template");
const productsWrapper = document.querySelector(".products__wrapper");

for (let i = 0; i < data.length; i++) {
  const element = data[i];

  const productEl = templateEl.content
    .querySelector(".product")
    .cloneNode(true);

  const title = productEl.querySelector(".title__and__price__h1");
  title.textContent = element.title;

  const text = productEl.querySelector(".title__and__price__text");
  text.textContent = element.text;

  const price = productEl.querySelector(".title__and__price__price");
  price.textContent = element.price;

  const image = productEl.querySelector(".product__img__main");
  image.src = element.image;
  image.alt = element.alt;

  if ([i] > 5) {
    productEl.classList.add("hidden"); //тут скрыл товары, добавил класс
  }

  productsWrapper.appendChild(productEl);
}

// const button = document.querySelector(".button");
// const productEls = document.querySelectorAll(".product");

// button.addEventListener("click", (e) => {
//   console.log(productEls);
//   productEls.classList.remove("hidden");
//   e.preventDefault();
// });

// сдесь попытался их показать опять, но скрипт не работает,
// никак не могу поняять в чем проблема, похоже с таким объектом не работает
// могли бы вы помочь? 


