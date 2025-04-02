// Current Date in Top Banner
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('current-date').textContent = currentDate.toLocaleDateString('en-US', options);

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active');
    
    // Toggle overlay when mobile menu is active
    const overlay = document.getElementById('cart-overlay');
    if (mobileMenu.classList.contains('active')) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
}

function toggleMobileDropdown() {
    const dropdownContent = document.querySelector('.mobile-dropdown-content');
    dropdownContent.classList.toggle('active');
}

// Shopping Cart Toggle
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
}

// Close Cart
function closeCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
}

// Product Data
const products = [
    {
        id: 1,
        name: "Classic Aviator Sunglasses",
        price: 25.99,
        originalPrice: 35.99,
        category: "sunglasses",
        image: "images/sunglass.jpg",
        rating: 4,
        description: "These classic aviator sunglasses feature UV400 protection lenses and a lightweight metal frame for all-day comfort.",
        colors: ["Black", "Gold", "Silver"],
        inStock: true
    },
    {
        id: 2,
        name: "Floral Eau de Parfume",
        price: 39.99,
        originalPrice: 49.99,
        category: "perfumes",
        image: "images/perfume.jpg",
        rating: 5,
        description: "A delicate floral fragrance with notes of jasmine, rose, and vanilla. Long-lasting scent perfect for everyday wear.",
        sizes: ["30ml", "50ml", "100ml"],
        inStock: true
    },
    {
        id: 3,
        name: "Hydrating Moisturizing Cream",
        price: 15.99,
        originalPrice: 19.99,
        category: "creams",
        image: "images/cream1.jpg",
        rating: 4,
        description: "Deeply hydrating cream with hyaluronic acid and vitamin E. Suitable for all skin types, non-greasy formula.",
        skinType: ["Dry", "Normal", "Combination"],
        inStock: true
    },
    {
        id: 4,
        name: "Girls' Summer Floral Dress",
        price: 29.99,
        originalPrice: 39.99,
        category: "girls-fashion",
        image: "images/watch1.jpg",
        rating: 5,
        description: "Lightweight cotton dress with beautiful floral print. Perfect for summer days and special occasions.",
        sizes: ["2-4 Years", "4-6 Years", "6-8 Years"],
        inStock: true
    },
    {
        id: 5,
        name: "Round Retro Sunglasses",
        price: 22.99,
        originalPrice: 29.99,
        category: "sunglasses",
        image: "images/sun.jpg",
        rating: 4,
        description: "Vintage-inspired round sunglasses with UV protection lenses. Comes with a protective case.",
        colors: ["Tortoise", "Black", "Red"],
        inStock: true
    },
    {
        id: 6,
        name: "Citrus Fresh Cologne",
        price: 34.99,
        originalPrice: 44.99,
        category: "perfumes",
        image: "images/perfume1.jpg",
        rating: 4,
        description: "Fresh and energizing citrus fragrance with notes of bergamot, lemon, and cedarwood.",
        sizes: ["50ml", "100ml"],
        inStock: true
    },
    {
        id: 7,
        name: "Anti-Aging Night Cream",
        price: 24.99,
        originalPrice: 29.99,
        category: "creams",
        image: "images/cream.jpg",
        rating: 5,
        description: "Rich night cream with retinol and peptides to reduce fine lines and wrinkles while you sleep.",
        skinType: ["Mature", "Dry", "Normal"],
        inStock: true
    },
    {
        id: 8,
        name: "Girls' Denim Jacket",
        price: 35.99,
        originalPrice: 45.99,
        category: "girls-fashion",
        image: "images/jacket1.jpg",
        rating: 4,
        description: "Classic denim jacket with adjustable cuffs and fun embroidery details. Machine washable.",
        sizes: ["3-4 Years", "5-6 Years", "7-8 Years"],
        inStock: true
    },
    {
        id: 9,
        name: "Classic Aviator Sunglasses",
        price: 25.99,
        originalPrice: 35.99,
        category: "sunglasses",
        image: "images/sunglass1.jpg",
        rating: 4,
        description: "These classic aviator sunglasses feature UV400 protection lenses and a lightweight metal frame for all-day comfort.",
        colors: ["Black", "Gold", "Silver"],
        inStock: true
    },
    {
        id: 10,
        name: "Classic Aviator Sunglasses",
        price: 25.99,
        originalPrice: 35.99,
        category: "sunglasses",
        image: "images/sunglass2.jpg",
        rating: 4,
        description: "These classic aviator sunglasses feature UV400 protection lenses and a lightweight metal frame for all-day comfort.",
        colors: ["Black", "Gold", "Silver"],
        inStock: true
    },
    {
        id: 11,
        name: "Citrus Fresh Cologne",
        price: 34.99,
        originalPrice: 44.99,
        category: "perfumes",
        image: "images/perfume2.jpg",
        rating: 4,
        description: "Fresh and energizing citrus fragrance with notes of bergamot, lemon, and cedarwood.",
        sizes: ["50ml", "100ml"],
        inStock: true
    },
    {
        id: 12,
        name: "Citrus Fresh Cologne",
        price: 34.99,
        originalPrice: 44.99,
        category: "perfumes",
        image: "images/perfume3.jpg",
        rating: 4,
        description: "Fresh and energizing citrus fragrance with notes of bergamot, lemon, and cedarwood.",
        sizes: ["50ml", "100ml"],
        inStock: true
    },
    {
        id: 13,
        name: "Anti-Aging Night Cream",
        price: 24.99,
        originalPrice: 29.99,
        category: "creams",
        image: "images/cream2.jpg",
        rating: 5,
        description: "Rich night cream with retinol and peptides to reduce fine lines and wrinkles while you sleep.",
        skinType: ["Mature", "Dry", "Normal"],
        inStock: true
    },
    {
        id: 14,
        name: "Anti-Aging daily Cream",
        price: 24.99,
        originalPrice: 29.99,
        category: "creams",
        image: "images/cream3.jpg",
        rating: 5,
        description: "Rich night cream with retinol and peptides to reduce fine lines and wrinkles while you sleep.",
        skinType: ["Mature", "Dry", "Normal"],
        inStock: true
    },
    {
        id: 15,
        name: "Girls' fashion watch",
        price: 29.99,
        originalPrice: 39.99,
        category: "girls-fashion",
        image: "images/watch.jpg",
        rating: 5,
        description: "Lightweight cotton dress with beautiful floral print. Perfect for summer days and special occasions.",
        sizes: ["2-4 Years", "4-6 Years", "6-8 Years"],
        inStock: true
    },
    {
        id: 16,
        name: "Girls' Denim Jacket",
        price: 35.99,
        originalPrice: 45.99,
        category: "girls-fashion",
        image: "images/jacket2.jpg",
        rating: 4,
        description: "Classic denim jacket with adjustable cuffs and fun embroidery details. Machine washable.",
        sizes: ["3-4 Years", "5-6 Years", "7-8 Years"],
        inStock: true
    },
   
];

// Display Products
function displayProducts(productsToShow = products) {
    const container = document.getElementById('product-display');
    if (!container) return;
    
    container.innerHTML = productsToShow.map(product => `
        <div class="product-card">
            ${product.originalPrice ? `<span class="product-badge">Sale</span>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(product.rating)}${product.rating < 5 ? '<i class="far fa-star"></i>'.repeat(5 - product.rating) : ''}
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="quick-view" onclick="showQuickView(${product.id})">
                        <i class="fas fa-eye"></i> Quick View
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter Products by Category
function filterProducts(category) {
    if (category === 'all') {
        displayProducts();
        return;
    }
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Display All Products
function displayAllProducts() {
    displayProducts();
}

// Search Products
function searchProducts() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm.trim() === '') {
        displayProducts();
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        (product.description && product.description.toLowerCase().includes(searchTerm))
    );
    
    displayProducts(filteredProducts);
}

// Shopping Cart Functions
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    showCartNotification();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    
    if (!cartItemsContainer || !cartCount || !cartSubtotal || !cartTotal) return;
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <button class="cta-btn" onclick="toggleCart()">Continue Shopping</button>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <span class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</span>
                </div>
            </div>
        `).join('');
    }
    
    // Update totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 5;
    const total = subtotal + shipping;
    
    cartSubtotal.textContent = subtotal.toFixed(2);
    document.getElementById('cart-shipping').textContent = shipping.toFixed(2);
    cartTotal.textContent = total.toFixed(2);
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
    }
    
    updateCart();
}

function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <p>Item added to cart</p>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Quick View Modal
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('quick-view-modal');
    const content = document.querySelector('.quick-view-product');
    
    if (!product || !modal || !content) return;
    
    content.innerHTML = `
        <div class="quick-view-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="quick-view-details">
            <h2>${product.name}</h2>
            <div class="quick-view-rating">
                ${'<i class="fas fa-star"></i>'.repeat(product.rating)}${product.rating < 5 ? '<i class="far fa-star"></i>'.repeat(5 - product.rating) : ''}
                <span>(${product.rating}/5)</span>
            </div>
            <div class="quick-view-price">
                $${product.price.toFixed(2)}
                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <p class="quick-view-description">${product.description}</p>
            
            ${product.colors ? `
                <div class="quick-view-option">
                    <h4>Colors:</h4>
                    <div class="color-options">
                        ${product.colors.map(color => `
                            <span class="color-option">${color}</span>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${product.sizes ? `
                <div class="quick-view-option">
                    <h4>Sizes:</h4>
                    <div class="size-options">
                        ${product.sizes.map(size => `
                            <span class="size-option">${size}</span>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${product.skinType ? `
                <div class="quick-view-option">
                    <h4>Skin Type:</h4>
                    <p>${product.skinType.join(', ')}</p>
                </div>
            ` : ''}
            
            <div class="quantity-selector">
                <h4>Quantity:</h4>
                <button onclick="this.nextElementSibling.stepDown()">-</button>
                <input type="number" min="1" value="1" id="quick-view-qty">
                <button onclick="this.previousElementSibling.stepUp()">+</button>
            </div>
            
            <div class="quick-view-actions">
                <button class="cta-btn" onclick="addToCartFromQuickView(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="cta-btn secondary" onclick="toggleCart()">
                    <i class="fas fa-shopping-bag"></i> View Cart
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function addToCartFromQuickView(productId) {
    const quantityInput = document.getElementById('quick-view-qty');
    if (!quantityInput) return;
    
    const quantity = parseInt(quantityInput.value) || 1;
    
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    
    updateCart();
    closeQuickView();
    showCartNotification();
}

function closeQuickView() {
    const modal = document.getElementById('quick-view-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Countdown Timer for Special Offer
function updateCountdown() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) return;
    
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 3); // 3 days from now
    
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Close modals when clicking outside
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }
    
    const quickViewModal = document.getElementById('quick-view-modal');
    if (quickViewModal) {
        quickViewModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeQuickView();
            }
        });
    }
    
    // Search when pressing Enter
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});

// Add styles for cart notification
const style = document.createElement('style');
style.textContent = `
    .cart-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1100;
    }
    
    .cart-notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .cart-notification i {
        font-size: 1.2rem;
    }
`;
document.head.appendChild(style);