// dashboard.js
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('adminLoggedIn')) {
        window.location.href = 'login.html';
        return;
    }
    loadProductList();
});

function addProduct(event) {
    event.preventDefault();

    const newProduct = {
        id: Date.now(), // Simple way to generate unique ID
        name: document.getElementById('productName').value,
        price: parseFloat(document.getElementById('productPrice').value),
        image: document.getElementById('productImage').value,
        description: document.getElementById('productDescription').value
    };

    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    event.target.reset();
    loadProductList();
    showNotification('Product added successfully!');
}

function loadProductList() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const container = document.getElementById('product-list');
    container.innerHTML = '';

    products.forEach(product => {
        const productHTML = `
            <div class="product-item mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price.toFixed(2)}</p>
                        <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

function deleteProduct(productId) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products = products.filter(p => p.id !== productId);
    localStorage.setItem('products', JSON.stringify(products));
    loadProductList();
    showNotification('Product deleted successfully!');
}

function logout() {
    localStorage.removeItem('adminLoggedIn');
    window.location.href = 'login.html';
}