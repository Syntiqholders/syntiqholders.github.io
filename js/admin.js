// admin.js
function adminLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // In a real application, this would verify credentials with a backend
    if (username === 'admin' && password === 'password') {
        localStorage.setItem('adminLoggedIn', 'true');
        window.location.href = '../admin/dashboard.html';
    } else {
        alert('Invalid credentials');
    }
}


// main.js
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedProducts();
    updateCartCount();
});

function loadFeaturedProducts() {
    // Get products from localStorage instead of hardcoded data
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const container = document.getElementById('featured-products');
    
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing content
    
    // Display first 3 products as featured
    const featuredProducts = products.slice(0, 3);
    
    if (featuredProducts.length === 0) {
        container.innerHTML = '<div class="col-12 text-center">No products available</div>';
        return;
    }

    featuredProducts.forEach(product => {
        const productHTML = `
            <div class="col-md-4">
                <div class="product-card">
                    <img src="${product.image}" class="img-fluid" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <p>${product.description}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

