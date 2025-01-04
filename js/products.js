// products.js
//let products = [];

//function loadProducts() {
    // Fetch products from localStorage or API
//     products = JSON.parse(localStorage.getItem('products')) || [];
//     const container = document.getElementById('products-container');
//     container.innerHTML = ''; // Clear existing content

//     products.forEach(product => {
//         const productHTML = `
//             <div class="col-md-4">
//                 <div class="product-card">
//                     <img src="${product.image}" class="img-fluid" alt="${product.name}">
//                     <h3>${product.name}</h3>
//                     <p>$${product.price.toFixed(2)}</p>
//                     <p>${product.description}</p>
//                     <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
//                 </div>
//             </div>
//         `;
//         container.innerHTML += productHTML;
//     });
// }



// products.js
document.addEventListener('DOMContentLoaded', function() {
    loadAllProducts();
});

function loadAllProducts() {
    // Get products from localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const container = document.getElementById('products-container');
    
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing content

    if (products.length === 0) {
        container.innerHTML = '<div class="col-12 text-center">No products available</div>';
        return;
    }

    products.forEach(product => {
        const productHTML = `
            <div class="col-md-4 mb-4">
                <div class="product-card">
                    <img src="${product.image}" class="img-fluid" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <p>${product.description}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})" onclick="alert("Product added to Cart!")">Add to Cart</button>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

function addToCart(productId) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products.find(p => p.id === productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification('Product added to cart!');
    }
}
