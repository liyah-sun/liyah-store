// // =========================
// // ALL PRODUCTS
// // =========================

// var products = [
//     { id: 1,  name: "Ruched Tube Top",      cat: "tops",        price: 8500,  image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80", badge: "New" },
//     { id: 2,  name: "Rhinestone Hoodie Set", cat: "tops",        price: 24000, image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&w=600&q=80", badge: "Sale" },
//     { id: 3,  name: "Floral Corset Blouse",  cat: "tops",        price: 12500, image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&w=600&q=80", badge: "New" },
//     { id: 4,  name: "Linen Stripe Shirt",    cat: "tops",        price: 9800,  image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80" },
//     { id: 5,  name: "Crop Ribbed Tank",      cat: "tops",        price: 5500,  image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=600&q=80" },
//     { id: 6,  name: "Wide Leg Denim",        cat: "bottoms",     price: 18500, image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=600&q=80", badge: "New" },
//     { id: 7,  name: "High Waist Trousers",   cat: "bottoms",     price: 14000, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80" },
//     { id: 8,  name: "Pleated Mini Skirt",    cat: "bottoms",     price: 10500, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80", badge: "Sale" },
//     { id: 9,  name: "Cargo Joggers",         cat: "bottoms",     price: 13000, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80" },
//     { id: 10, name: "Varsity Jacket",        cat: "outerwear",   price: 32000, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80", badge: "New" },
//     { id: 11, name: "Oversized Blazer",      cat: "outerwear",   price: 27500, image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80" },
//     { id: 12, name: "Leather Moto Jacket",   cat: "outerwear",   price: 45000, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80", badge: "Sale" },
//     { id: 13, name: "Trench Coat",           cat: "outerwear",   price: 38000, image: "https://images.unsplash.com/photo-1548624313-0396c75a8b6e?auto=format&fit=crop&w=600&q=80" },
//     { id: 14, name: "Star Chain Necklace",   cat: "accessories", price: 4500,  image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80", badge: "New" },
//     { id: 15, name: "Layered Pendant Set",   cat: "accessories", price: 6000,  image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=600&q=80" },
//     { id: 16, name: "Mini Shoulder Bag",     cat: "accessories", price: 16500, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80", badge: "New" },
//     { id: 17, name: "Tortoise Sunglasses",   cat: "accessories", price: 7800,  image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=80", badge: "Sale" },
//     { id: 18, name: "Wide Brim Hat",         cat: "accessories", price: 8200,  image: "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?auto=format&fit=crop&w=600&q=80" },
//     { id: 19, name: "Hair Bow",              cat: "accessories", price: 3000,  image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80" },
//     { id: 20, name: "Hair Band",             cat: "accessories", price: 5000,  image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80" },
//     { id: 21, name: "Hair Clips",            cat: "accessories", price: 3000,  image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80" }
// ];


// // =========================
// // CART (saved in browser)
// // =========================

// var cart = JSON.parse(localStorage.getItem("liyahCart") || "[]");

// function saveCart() {
//     localStorage.setItem("liyahCart", JSON.stringify(cart));
// }


// // =========================
// // DISPLAY PRODUCTS
// // =========================

// var currentCat  = "all";
// var currentSort = "default";

// function showProducts() {

//     // Filter by category
//     var list = [];
//     for (var i = 0; i < products.length; i++) {
//         if (currentCat === "all" || products[i].cat === currentCat) {
//             list.push(products[i]);
//         }
//     }

//     // Sort
//     if (currentSort === "price-asc")  list.sort(function(a, b) { return a.price - b.price; });
//     if (currentSort === "price-desc") list.sort(function(a, b) { return b.price - a.price; });
//     if (currentSort === "name-asc")   list.sort(function(a, b) { return a.name.localeCompare(b.name); });

//     // Build HTML cards
//     var html = "";
//     for (var j = 0; j < list.length; j++) {
//         var p = list[j];
//         html += '<div class="product-card">';
//         html += '  <div class="product-card__image-wrap">';
//         html += '    <img src="' + p.image + '" alt="' + p.name + '" loading="lazy">';
//         if (p.badge) html += '<span class="product-card__badge">' + p.badge + '</span>';
//         html += '    <button class="product-card__add" onclick="addToCart(' + p.id + ')">Add to Cart</button>';
//         html += '  </div>';
//         html += '  <p class="product-card__cat">' + p.cat + '</p>';
//         html += '  <p class="product-card__name">' + p.name + '</p>';
//         html += '  <p class="product-card__price">₦' + p.price.toLocaleString() + '</p>';
//         html += '</div>';
//     }

//     document.getElementById("product-grid").innerHTML = html;
//     document.getElementById("results-count").textContent = list.length + " items";
// }


// // =========================
// // ADD TO CART
// // =========================

// function addToCart(id) {

//     // If not logged in, save product and send to signup
//     if (!localStorage.getItem("loggedInUser")) {
//         localStorage.setItem("pendingProductId", id);
//         localStorage.setItem("returnTo", window.location.href);
//         window.location.href = "./signup.html";
//         return;
//     }

//     // Find the product
//     var product;
//     for (var i = 0; i < products.length; i++) {
//         if (products[i].id === id) { product = products[i]; break; }
//     }

//     // If already in cart, increase qty. Otherwise add it.
//     var found = false;
//     for (var j = 0; j < cart.length; j++) {
//         if (cart[j].id === id) { cart[j].qty++; found = true; break; }
//     }
//     if (!found) {
//         cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
//     }

//     saveCart();
//     showCart();
//     openCart();
// }


// // =========================
// // CHANGE QTY / REMOVE ITEM
// // =========================

// function changeQty(id, delta) {
//     for (var i = 0; i < cart.length; i++) {
//         if (cart[i].id === id) {
//             cart[i].qty += delta;
//             if (cart[i].qty <= 0) cart.splice(i, 1); // remove if qty is 0
//             break;
//         }
//     }
//     saveCart();
//     showCart();
// }

// function removeItem(id) {
//     for (var i = 0; i < cart.length; i++) {
//         if (cart[i].id === id) { cart.splice(i, 1); break; }
//     }
//     saveCart();
//     showCart();
// }


// // =========================
// // SHOW CART SIDEBAR
// // =========================

// function showCart() {

//     // Update cart count number on the button
//     var totalQty = 0;
//     for (var i = 0; i < cart.length; i++) totalQty += cart[i].qty;
//     document.getElementById("cart-count").textContent = totalQty;

//     var itemsBox = document.getElementById("cart-items");
//     var footer   = document.getElementById("cart-footer");

//     if (cart.length === 0) {
//         itemsBox.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
//         footer.style.display = "none";
//         return;
//     }

//     footer.style.display = "block";

//     var html = "";
//     for (var j = 0; j < cart.length; j++) {
//         var item = cart[j];
//         html += '<div class="cart-item">';
//         html += '  <img class="cart-item__img" src="' + item.image + '" alt="' + item.name + '">';
//         html += '  <div class="cart-item__info">';
//         html += '    <p class="cart-item__name">'  + item.name + '</p>';
//         html += '    <p class="cart-item__price">₦' + item.price.toLocaleString() + '</p>';
//         html += '    <div class="cart-item__qty">';
//         html += '      <button class="qty-btn" onclick="changeQty(' + item.id + ', -1)">−</button>';
//         html += '      <span class="qty-num">' + item.qty + '</span>';
//         html += '      <button class="qty-btn" onclick="changeQty(' + item.id + ', 1)">+</button>';
//         html += '    </div>';
//         html += '  </div>';
//         html += '  <button class="cart-item__remove" onclick="removeItem(' + item.id + ')">✕</button>';
//         html += '</div>';
//     }
//     itemsBox.innerHTML = html;

//     // Show total
//     var total = 0;
//     for (var k = 0; k < cart.length; k++) total += cart[k].price * cart[k].qty;
//     document.getElementById("cart-total-price").textContent = "₦" + total.toLocaleString();
// }

// function openCart() {
//     document.getElementById("cart-sidebar").classList.add("open");
//     document.getElementById("cart-overlay").classList.add("open");
//     document.body.style.overflow = "hidden";
// }

// function closeCart() {
//     document.getElementById("cart-sidebar").classList.remove("open");
//     document.getElementById("cart-overlay").classList.remove("open");
//     document.body.style.overflow = "";
// }


// // =========================
// // BUTTONS & FILTERS
// // =========================

// document.getElementById("cart-btn").addEventListener("click", openCart);
// document.getElementById("cart-close").addEventListener("click", closeCart);
// document.getElementById("cart-overlay").addEventListener("click", closeCart);

// document.getElementById("filter-tabs").addEventListener("click", function(e) {
//     if (!e.target.matches(".filter-tab")) return;
//     document.querySelectorAll(".filter-tab").forEach(function(t) { t.classList.remove("active"); });
//     e.target.classList.add("active");
//     currentCat = e.target.getAttribute("data-cat");
//     showProducts();
// });

// document.getElementById("sort-select").addEventListener("change", function(e) {
//     currentSort = e.target.value;
//     showProducts();
// });

// document.getElementById("mobile-menu").addEventListener("click", function() {
//     document.getElementById("nav-menu").classList.toggle("active");
// });


// // =========================
// // RUN WHEN PAGE LOADS
// // =========================

// showProducts();
// showCart();

// // If user just came back from signup, add their pending product
// var pendingId = localStorage.getItem("pendingProductId");
// if (pendingId) {
//     localStorage.removeItem("pendingProductId");
//     addToCart(Number(pendingId));
// }