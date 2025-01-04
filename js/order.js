// order.js
document.addEventListener('DOMContentLoaded', function() {
    loadCartItems();
});

function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-items');
    const orderTotal = document.getElementById('order-total');
    container.innerHTML = '';

    let total = 0;
    cartItems.forEach((item, index) => {
        total += item.price;
        const itemHTML = `
            <div class="cart-item">
                <div class="row align-items-center">
                    <div class="col-md-3">
                        <img src="${item.image}" class="img-fluid" alt="${item.name}">
                    </div>
                    <div class="col-md-6">
                        <h4>${item.name}</h4>
                        <p>${item.description}</p>
                    </div>
                    <div class="col-md-2">
                        <p>$${item.price.toFixed(2)}</p>
                    </div>
                    <div class="col-md-1">
                        <button class="btn btn-danger" onclick="removeFromCart(${index})">×</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += itemHTML;
    });

    orderTotal.innerHTML = `
        <p>Subtotal: $${total.toFixed(2)}</p>
        <p>Tax (10%): $${(total * 0.1).toFixed(2)}</p>
        <h4>Total: $${(total * 1.1).toFixed(2)}</h4>
    `;
}

function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    loadCartItems();
    updateCartCount();
}

function processOrder() {
    // In a real application, this would submit to a backend
    alert('Order processed successfully!');
    localStorage.removeItem('cart');
    loadCartItems();
    updateCartCount();
}
