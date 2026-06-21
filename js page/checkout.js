
    // Mobile menu
    document.getElementById("mobile-menu").addEventListener("click", function() {
        document.getElementById("nav-menu").classList.toggle("active");
    });

    var DELIVERY = 2500;

    // Load cart from localStorage
    var cart = JSON.parse(localStorage.getItem("liyahCart") || "[]");

    // If cart is empty, go back to cart page
    if (cart.length === 0) {
        window.location.href = "cart.html";
    }

    // Pre-fill name and email if user is logged in
    var user = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    if (user) {
        if (user.name)  document.getElementById("fullname").value = user.name;
        if (user.email) document.getElementById("checkout-email").value = user.email;
    }

    // Show order summary on the right
    function showSummary() {
        var html = "";
        var subtotal = 0;

        for (var i = 0; i < cart.length; i++) {
            var item = cart[i];
            subtotal += item.price * item.qty;
            html += '<div class="summary-item">';
            html += '  <img src="' + item.image + '" alt="' + item.name + '">';
            html += '  <div class="summary-item-info">';
            html += '    <p class="summary-item-name">' + item.name + '</p>';
            html += '    <p class="summary-item-qty">Qty: ' + item.qty + '</p>';
            html += '  </div>';
            html += '  <span class="summary-item-price">₦' + (item.price * item.qty).toLocaleString() + '</span>';
            html += '</div>';
        }

        document.getElementById("summary-items").innerHTML = html;
        document.getElementById("summary-subtotal").textContent = "₦" + subtotal.toLocaleString();
        document.getElementById("summary-total").textContent    = "₦" + (subtotal + DELIVERY).toLocaleString();
    }

    // Place order
    function placeOrder() {
        var fullname = document.getElementById("fullname").value.trim();
        var phone    = document.getElementById("phone").value.trim();
        var email    = document.getElementById("checkout-email").value.trim();
        var address  = document.getElementById("address").value.trim();
        var city     = document.getElementById("city").value.trim();
        var state    = document.getElementById("state").value;

        // Check all required fields
        if (!fullname || !phone || !email || !address || !city || !state) {
            alert("Please fill in all required fields.");
            return;
        }

        // Clear the cart
        localStorage.removeItem("liyahCart");

        // Show success screen
        document.getElementById("checkout-content").style.display = "none";
        document.getElementById("success-screen").style.display   = "block";
    }

    showSummary();

