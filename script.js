document.getElementById("donorForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("confirmation").textContent =
    "✅ Thank you for registering as a donor!";
});
