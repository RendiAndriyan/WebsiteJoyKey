// Wishlist Functionality
const wishlistButtons = document.querySelectorAll('.wishlist-btn');
const wishlist = {};

wishlistButtons.forEach(btn => {
    const id = btn.getAttribute('data-id');
    wishlist[id] = false;

    btn.addEventListener('click', function() {
        wishlist[id] = !wishlist[id];
        
        if (wishlist[id]) {
            this.classList.add('active');
        } else {
            this.classList.remove('active');
        }
    });
});

// Share Functionality
const shareButtons = document.querySelectorAll('.share-btn');

shareButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Produk dibagikan!');
    });
});

// Search Functionality
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');

searchBtn.addEventListener('click', function() {
    const query = searchInput.value.trim();
    if (query) {
        alert('Mencari produk: ' + query);
    }
});

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = this.value.trim();
        if (query) {
            alert('Mencari produk: ' + query);
        }
    }
});

// Filter Functionality
const filterSelects = document.querySelectorAll('.filter-select');
const filterInputs = document.querySelectorAll('.filter-input');

filterSelects.forEach(select => {
    select.addEventListener('change', function() {
        console.log('Filter kategori diperbarui: ' + this.value);
    });
});

filterInputs.forEach(input => {
    input.addEventListener('change', function() {
        console.log('Filter harga diperbarui: ' + this.value);
    });
});

// Color Dots Click
const colorDots = document.querySelectorAll('.color-dot');

colorDots.forEach(dot => {
    dot.addEventListener('click', function() {
        const color = this.style.backgroundColor;
        console.log('Warna dipilih: ' + color);
    });
});

// Product Name Click
const productNames = document.querySelectorAll('.product-name');

productNames.forEach(name => {
    name.addEventListener('click', function() {
        console.log('Produk diklik: ' + this.textContent);
    });
});

// See More Link
const seeMoreLink = document.querySelector('.see-more a');

seeMoreLink.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Memuat produk lebih banyak...');
});

// Navigation Active State
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

console.log('JoyKey website loaded successfully!');