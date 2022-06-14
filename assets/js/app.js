const cart = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const footer = document.querySelector("#footer");
const templateFooter = document.querySelector("#template-footer");
const buttons = document.querySelectorAll(".card .btn");
const cartObject = [];
let total = 0;

document.addEventListener('click', (e) => {
    if (e.target.matches(".card .btn-primary")) {
        addCart(e)
    }/* TO FIX: 
    if (e.target.matches(".list-group-item .btn-success")) {
        btnIncrease(e);
    }
    if (e.target.matches(".list-group-item .btn-danger")) {
        btnDecrease(e);
    } */
});

const addCart = (e) => {
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
        total += product.price;

    } else {                //sino suma
        cartObject[index].quantity++;
        total += product.price;
    }
    console.log(total)
    printCart(cartObject);
    printFooter();
}

const printCart = (array) => {
    cart.textContent = "";
    array.forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.title;
        clone.querySelector(".badge").textContent = item.quantity;
        clone.querySelector(".price").textContent = "$" + item.price * item.quantity;
        fragment.appendChild(clone);
    })
    cart.appendChild(fragment);
}

const printFooter = () => {
    footer.textContent = "";
    const clone = templateFooter.content.firstElementChild.cloneNode(true);
    clone.querySelector(".total").textContent = "$" + total;
    footer.appendChild(clone);
}

//TO FIX : buttons add y remove 💥

/* const btnIncrease = (e) => {
    const index = cartObject.findIndex(
        (item) => item.id === e.target.dataset.product
    )
    cartObject[index].quantity++;
    total += cartObject[index].price;
    printCart(cartObject);
    printFooter();
}


const btnDecrease = (e) => {
    const index = cartObject.findIndex(
        (item) => item.id === e.target.dataset.product
    )
    cartObject[index].quantity--;
    total -= cartObject[index].price;
    printCart(cartObject);

    if (cartObject[index].quantity === 0) {
        cartObject.splice(index, 1);
    }
    printFooter();
}
 */