const products = [
    { id: 1, name: "Ruched Tube Top", cat: "tops", price: 8500, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80", badge: "New" },
    { id: 2, name: "Rhinestone Hoodie Set", cat: "tops", price: 24000, originalPrice: 28000, image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&w=600&q=80", badge: "Sale" },
    { id: 3, name: "Floral Corset Blouse", cat: "tops", price: 12500, image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&w=600&q=80", badge: "New" },
     { id: 4, name: "Tank top", cat: "tops", price: 9000, image: "https://i.pinimg.com/1200x/6d/44/58/6d4458690a838d46be90c0df1961470b.jpg" },
    { id: 5, name: "Linen Stripe Shirt", cat: "tops", price: 9800, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Crop Ribbed Tank", cat: "tops", price: 5500, image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=600&q=80" },
    { id: 7, name: "Wide Leg Denim", cat: "bottoms", price: 18500, image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=600&q=80", badge: "New" },
    { id: 8, name: "High Waist Trousers", cat: "bottoms", price: 14000, image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4d9a?auto=format&fit=crop&w=600&q=80" },
    { id: 9, name: "Pleated Mini Skirt", cat: "bottoms", price: 10500, originalPrice: 13000, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=600&q=80", badge: "Sale" },
    { id: 10, name: "Cargo Joggers", cat: "bottoms", price: 13000, image: "https://i.pinimg.com/736x/87/94/87/879487791bf001f6b2f7c462c536d157.jpg" },
    { id: 11, name: "Varsity Jacket", cat: "outerwear", price: 32000, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80", badge: "New" },
    { id: 12, name: "Oversized Blazer", cat: "outerwear", price: 27500, image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80" },
    { id: 13, name: "Leather Moto Jacket", cat: "outerwear", price: 45000, originalPrice: 52000, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80", badge: "Sale" },
    { id: 14, name: "Trench Coat", cat: "outerwear", price: 38000, image: "https://images.unsplash.com/photo-1548624313-0396c75a8b6e?auto=format&fit=crop&w=600&q=80" },
    { id: 15, name: "Star Chain Necklace", cat: "accessories", price: 4500, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80", badge: "New" },
    { id: 16, name: "Layered Pendant Set", cat: "accessories", price: 6000, image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=600&q=80" },
    { id: 17, name: "Mini Shoulder Bag", cat: "accessories", price: 16500, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80", badge: "New" },
    { id: 18, name: "Tortoise Sunglasses", cat: "accessories", price: 7800, originalPrice: 9500, image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=80", badge: "Sale" },
    { id: 19, name: "Wide Brim Hat", cat: "accessories", price: 8200, image: "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?auto=format&fit=crop&w=600&q=80" },
    { id: 20, name: "Hair Bow", cat: "accessories", price: 3000, image: "https://i.pinimg.com/1200x/ca/9c/5e/ca9c5e9ad4671304cf7c85f209b6f70f.jpg" },
    { id: 21, name: "Hair Band", cat: "accessories", price: 5000, image: "https://i.pinimg.com/1200x/eb/61/ad/eb61adee482ca0feb01f1e4a91203eac.jpg" },
    { id: 22, name: "Hair Clips", cat: "accessories", price: 3000, image: "https://i.pinimg.com/1200x/5e/c5/d6/5ec5d6484bd8bcc4f0fcd3dd2d30cc47.jpg" },
   
]

let cart = JSON.parse(localStorage.getItem("liyahCart")) || []
let wishlist = new Set(JSON.parse(localStorage.getItem("wishlist")) || [])
let currentCat = "all"
let currentSort = "default"

function formatPrice(n) {
    return "₦" + n.toLocaleString()
}

function displayProducts(list) {
    const grid = document.getElementById("product-grid")
    document.getElementById("results-count").textContent = list.length + " item" + (list.length !== 1 ? "s" : "")

    grid.innerHTML = ""

    if (list.length === 0) {
        grid.innerHTML = '<p class="no-results">No products found.</p>'
        return
    }

    list.forEach(product => {
        grid.innerHTML += `
            <div class="product-card">
                <div class="product-card__image-wrap">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ""}
                    <button class="product-card__add" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
                <p class="product-card__cat">${product.cat}</p>
                <p class="product-card__name">${product.name}</p>
                <p class="product-card__price">
                    ${formatPrice(product.price)}
                    ${product.originalPrice ? `<span class="original">${formatPrice(product.originalPrice)}</span>` : ""}
                </p>
            </div>
        `
    })
}

function getFiltered() {
    let list = currentCat === "all" ? [...products] : products.filter(p => p.cat === currentCat)
    if (currentSort === "price-asc") list.sort((a, b) => a.price - b.price)
    if (currentSort === "price-desc") list.sort((a, b) => b.price - a.price)
    if (currentSort === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name))
    return list
}

function toggleWish(e, id) {
    e.stopPropagation()
    if (wishlist.has(id)) {
        wishlist.delete(id)
    } else {
        wishlist.add(id)
    }
    localStorage.setItem("wishlist", JSON.stringify([...wishlist]))
    displayProducts(getFiltered())
}

function addToCart(id) {
    const selectedProduct = products.find(product => product.id === id)
    const existingProduct = cart.find(product => product.id === id)

    if (existingProduct) {
        existingProduct.qty++
    } else {
        cart.push({ ...selectedProduct, qty: 1 })
    }

    localStorage.setItem("liyahCart", JSON.stringify(cart))
    updateCartCount()
    renderCart()
    openCart()
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id)
    if (!item) return
    item.qty += delta
    if (item.qty <= 0) cart = cart.filter(i => i.id !== id)
    localStorage.setItem("liyahCart", JSON.stringify(cart))
    updateCartCount()
    renderCart()
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id)
    localStorage.setItem("liyahCart", JSON.stringify(cart))
    updateCartCount()
    renderCart()
}

function updateCartCount() {
    const cartCount = document.getElementById("cart-count")
    if (!cartCount) return
    const totalItems = cart.reduce((total, item) => total + item.qty, 0)
    cartCount.textContent = totalItems
}

function renderCart() {
    const container = document.getElementById("cart-items")
    const footer = document.getElementById("cart-footer")

    if (cart.length === 0) {
        container.innerHTML = '<p class="cart-empty">Your cart is empty.</p>'
        footer.style.display = "none"
        return
    }

    footer.style.display = "block"
    container.innerHTML = ""

    cart.forEach(item => {
        container.innerHTML += `
            <div class="cart-item">
                <img class="cart-item__img" src="${item.image}" alt="${item.name}">
                <div class="cart-item__info">
                    <p class="cart-item__name">${item.name}</p>
                    <p class="cart-item__price">${formatPrice(item.price)}</p>
                    <div class="cart-item__qty">
                        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
                        <span class="qty-num">${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item__remove" onclick="removeFromCart(${item.id})">✕</button>
            </div>
        `
    })

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
    document.getElementById("cart-total-price").textContent = formatPrice(total)
}

function openCart() {
    document.getElementById("cart-sidebar").classList.add("open")
    document.getElementById("cart-overlay").classList.add("open")
    document.body.style.overflow = "hidden"
}

function closeCart() {
    document.getElementById("cart-sidebar").classList.remove("open")
    document.getElementById("cart-overlay").classList.remove("open")
    document.body.style.overflow = ""
}

document.getElementById("cart-btn").addEventListener("click", openCart)
document.getElementById("cart-close").addEventListener("click", closeCart)
document.getElementById("cart-overlay").addEventListener("click", closeCart)

document.getElementById("filter-tabs").addEventListener("click", e => {
    if (!e.target.matches(".filter-tab")) return
    document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"))
    e.target.classList.add("active")
    currentCat = e.target.dataset.cat
    displayProducts(getFiltered())
})

document.getElementById("sort-select").addEventListener("change", e => {
    currentSort = e.target.value
    displayProducts(getFiltered())
})

document.getElementById("mobile-menu").addEventListener("click", () => {
    document.getElementById("nav-menu").classList.toggle("active")
})

displayProducts(getFiltered())
updateCartCount()
renderCart()