(function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.querySelector("#contact-form");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var body = [
      "First name: " + (data.get("first") || ""),
      "Last name: " + (data.get("last") || ""),
      "Email: " + (data.get("email") || ""),
      "Phone: " + (data.get("phone") || ""),
      "Offers: " + (data.get("offers") ? "yes" : "no"),
      "",
      String(data.get("query") || "")
    ].join("\n");
    window.location.href = "mailto:contact@solisconsultinggroup.com?subject=" +
      encodeURIComponent("Solis Consulting") + "&body=" + encodeURIComponent(body);
  });
})();
