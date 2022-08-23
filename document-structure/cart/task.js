let quantity = document.getElementsByClassName('product__quantity-value');
let controlInc = document.getElementsByClassName('product__quantity-control_inc');
let controlDec = document.getElementsByClassName('product__quantity-control_dec');

for (let i = 0; i < quantity.length; i++) {

    controlInc[i].addEventListener('click', () => {
        quantity[i].textContent++;
    })
    controlDec[i].addEventListener('click', () => {
        quantity[i].textContent--;

        if (quantity[i].textContent < '1') {
            quantity[i].textContent = '1'
        }
    });

    let add = document.getElementsByClassName('product__add');

    add[i].addEventListener('click', () => {

        if (quantity[i].textContent === '0') {
            return;
        }
        let cartProducts = document.querySelector('.cart__products');
        let product = document.getElementsByClassName('product');

        for (let j = 0; j < cartProducts.children.length; j++) {
            if (cartProducts.children[j].dataset.id === product[i].dataset.id) {
                let cartProductsCount = cartProducts.children[j].querySelector('.cart__product-count').textContent;
                let newProductValue = Number(cartProductsCount) + Number(quantity[j].textContent);

                return cartProducts.children[j].querySelector('.cart__product-count').textContent = newProductValue;
            }
        }

        cartProducts.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${product[i].dataset.id}">
                <img class="cart__product-image" src="${product[i].querySelector('img').getAttribute('src')}">
                <div class="cart__product-count">${quantity[i].textContent}</div>
            </div>
            `);
    })
};