const cart = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const buttons = document.querySelectorAll(".card .btn");

const cartObject = [];
let total = 0;

const addCart = (e) => {
    console.log(e.target.dataset.product)
    const product = {
        title: e.target.dataset.product,
        id: e.target.dataset.product,
        price: Number(e.target.dataset.price),
        quantity: 1
    };

    const index = cartObject.findIndex(     //si no existe da -1
        (item) => item.id === product.id
    )

    if (index === -1) {     //-1 pushea el prod
        cartObject.push(product);
    } else {                //sino suma
        cartObject[index].quantity++;
    }
    console.log(cartObject);
    printCart(cartObject);
}

const printCart = (array) => {
    cart.textContent = "";
    array.forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.title;
        clone.querySelector(".badge").textContent = item.quantity;
        fragment.appendChild(clone);
    })
    cart.appendChild(fragment);
}

buttons.forEach((btn) => btn.addEventListener("click", addCart));