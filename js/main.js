// main.js
// document.addEventListener('DOMContentLoaded', function() {
//     loadFeaturedProducts();
//     updateCartCount();
// });

// function loadFeaturedProducts() {
//     // In a real application, this would fetch from an API
//     const products = [
//         {
//             id: 1,
//             name: "Premium Holder",
//             price: 29.99,
//             image: "images/product1.jpg",
//             description: "High-quality premium holder"
//         },
//         {
//             id: 2,
//             name: "Standard Holder",
//             price: 19.99,
//             image: "images/product2.jpg",
//             description: "Reliable standard holder"
//         }
//     ];

//     const container = document.getElementById('featured-products');
//     container.innerHTML = ''; // Clear existing content
    
//     products.forEach(product => {
//         const productHTML = `
//             <div class="col-md-4">
//                 <div class="product-card">
//                     <img src="${product.image}" class="img-fluid" alt="${product.name}">
//                     <h3>${product.name}</h3>
//                     <p>$${product.price.toFixed(2)}</p>
//                     <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
//                 </div>
//             </div>
//         `;
//         container.innerHTML += productHTML;
//     });
// }




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
