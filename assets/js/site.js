(function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var nav = document.querySelector(".site-nav");
  if (nav && !document.querySelector(".page-hero")) {
    var paintNav = function () {
      nav.classList.toggle("is-solid", window.scrollY > 24);
    };
    paintNav();
    window.addEventListener("scroll", paintNav, { passive: true });
  }

  var slogan = document.querySelector("#hero-slogan");
  if (slogan && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var lines = [
      "We Are Solis Consulting",
      "Relationships drive opportunity.",
      "We build the infrastructure behind them.",
      "One engine. Multiple applications.",
      "An NCSSM alumni founding team."
    ];
    var line = 0;
    window.setInterval(function () {
      slogan.classList.add("is-out");
      window.setTimeout(function () {
        line = (line + 1) % lines.length;
        slogan.textContent = lines[line];
        slogan.classList.remove("is-out");
      }, 600);
    }, 3400);
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
