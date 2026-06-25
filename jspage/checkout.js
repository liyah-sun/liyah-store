function placeOrder() {
    const fullname = document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("checkout-email").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value;

    if (!fullname || !phone || !email || !address || !city || !state) {
        alert("Please fill in all required fields.");
        return;
    }

    document.getElementById("checkout-content").style.display = "none";
    document.getElementById("success-screen").style.display = "block";
}