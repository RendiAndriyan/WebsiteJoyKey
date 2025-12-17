/* ============================
   JoyKey Main JavaScript File
   ============================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ============================
       Wishlist Functionality
       ============================ */
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');

    wishlistButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');

            const icon = this.querySelector('i');
            if (icon) {
                if (this.classList.contains('active')) {
                    icon.classList.remove('fa-regular');
                    icon.classList.add('fa-solid');
                } else {
                    icon.classList.remove('fa-solid');
                    icon.classList.add('fa-regular');
                }
            }
        });
    });

    /* ============================
       Detail Button
       ============================ */
    document.querySelectorAll('.detail-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            alert('Detail produk dibuka');
        });
    });

    /* ============================
       Share Functionality
       ============================ */
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            alert('Produk dibagikan!');
        });
    });

    /* ============================
       Search Functionality
       ============================ */
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-box input');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function () {
            const query = searchInput.value.trim();
            if (query) {
                alert('Mencari produk: ' + query);
            }
        });

        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    alert('Mencari produk: ' + query);
                }
            }
        });
    }

    /* ============================
       Filter Functionality
       ============================ */
    document.querySelectorAll('.filter-select').forEach(select => {
        select.addEventListener('change', function () {
            console.log('Filter kategori diperbarui:', this.value);
        });
    });

    document.querySelectorAll('.filter-input').forEach(input => {
        input.addEventListener('change', function () {
            console.log('Filter harga diperbarui:', this.value);
        });
    });

    /* ============================
       Color Selection
       ============================ */
    document.querySelectorAll('.color-dot').forEach(dot => {
        dot.addEventListener('click', function () {
            const color = this.style.backgroundColor;
            console.log('Warna dipilih:', color);
        });
    });

    /* ============================
       Product Name Click
       ============================ */
    document.querySelectorAll('.product-name').forEach(name => {
        name.addEventListener('click', function () {
            console.log('Produk diklik:', this.textContent);
        });
    });

    /* ============================
       See More Button
       ============================ */
    const seeMoreLink = document.querySelector('.see-more a');
    if (seeMoreLink) {
        seeMoreLink.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Memuat produk lebih banyak...');
        });
    }

    /* ============================
       Navigation Active State
       ============================ */
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    /* ============================
       Debug Info
       ============================ */
    console.log('JoyKey website loaded successfully!');
});
