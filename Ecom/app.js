const doc = document;
const menuItems = [
  {
    name: "French Fries with Ketchup",
    price: 2.23,
    image: "plate__french-fries.png",
    alt: "French Fries",
    count: 0,
  },
  {
    name: "Salmon and Vegetables",
    price: 5.12,
    image: "plate__salmon-vegetables.png",
    alt: "Salmon and Vegetables",
    count: 0,
  },
  {
    name: "Spaghetti Meat Sauce",
    price: 7.82,
    image: "plate__spaghetti-meat-sauce.png",
    alt: "Spaghetti with Meat Sauce",
    count: 0,
  },
  {
    name: "Bacon, Eggs, and Toast",
    price: 5.99,
    image: "plate__bacon-eggs.png",
    alt: "Bacon, Eggs, and Toast",
    count: 0,
  },
  {
    name: "Chicken Salad with Parmesan",
    price: 6.98,
    image: "plate__chicken-salad.png",
    alt: "Chicken Salad with Parmesan",
    count: 0,
  },
  {
    name: "Fish Sticks and Fries",
    price: 6.34,
    image: "plate__fish-sticks-fries.png",
    alt: "Fish Sticks and Fries",
    count: 0,
  },
];
doc.querySelectorAll(".content").forEach((item, idx) => {
  if (menuItems[idx]) {
    menuItems[idx]["htmlElement"] = item;
    item.querySelector(".add")?.addEventListener("click", () => addToCart(idx));
  }
});
function addToCart(itemNum) {
  function updateMenu() {
    const cartBtn = item.querySelector(".add");
    cartBtn.remove();
    const inCartBtn = `<button class="in-cart">
    <img src="images/check.svg" alt="Check" />
    In Cart
    </button>`;
    item.insertAdjacentHTML("beforeend", inCartBtn);
  }
  function addItemToCart() {
    const itemInfo = menuItems[itemNum];
    const globalCart = doc.querySelector(".cart-summary");
    let template = `
    <li>
        <div class="plate">
            <img
            src={itemImg}
            alt={itemName}
            class="plate"
            />
            <div class="quantity">1</div>
        </div>
        <div class="content">
            <p class="menu-item">{itemName}</p>
            <p class="price">{itemPrice}</p>
        </div>
        <div class="quantity__wrapper">
            <button class="decrease">
            <img src="images/chevron.svg" />
            </button>
            <div class="quantity">1</div>
            <button class="increase">
            <img src="images/chevron.svg" />
            </button>
        </div>
        <div class="subtotal">{itemPrice}</div>
    </li>`;
    // const listEl = doc.createElement("li");

    // const plate = doc.createElement("div");
    // plate.setAttribute("class", "plate");

    // const plateImg = doc.createElement("img");
    // plateImg.setAttribute("src", itemInfo.image);
    // plateImg.setAttribute("alt", itemInfo.name);
    // plateImg.setAttribute("class", "plate");

    // const plateCount = doc.createElement("div");
    // plateCount.setAttribute("class", "quantity");
    // plateCount.innerHtml = itemInfo.count;

    // console.log(listEl, plate, plate, plateCount);

    template = template.replaceAll("{itemImg}", `"images/${itemInfo.image}"`);
    template = template.replaceAll("{itemName}", itemInfo.name);
    template = template.replaceAll("{itemPrice}", `$${itemInfo.price}`);
    globalCart.insertAdjacentHTML("beforeend", template);
  }
  const item = menuItems[itemNum]["htmlElement"];
  updateMenu();
  addItemToCart();
}
doc
  .querySelectorAll(".decrease")
  .forEach((item, idx) =>
    item.addEventListener("click", () => modifyQuantity("decrease", idx))
  );
doc
  .querySelectorAll(".increase")
  .forEach((item, idx) =>
    item.addEventListener("click", () => modifyQuantity("increase", idx))
  );

function modifyQuantity(actionType, itemNum) {
  console.log(`request to modify count of ${itemNum}`);
}
