/* Theme picker. Dark is the default. The choice is stored per visitor in
   localStorage; each page's <head> applies it before first paint, and this
   script adds the Dark / Light control to the brief switcher. */
(function () {
  "use strict";
  var root = document.documentElement;
  var KEY = "theme";

  function current() { return root.getAttribute("data-theme") === "light" ? "light" : "dark"; }

  function apply(theme) {
    if (theme === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
    try { localStorage.setItem(KEY, theme); } catch (e) { /* storage blocked: choice lasts this page only */ }
    var buttons = document.querySelectorAll(".theme-picker button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].getAttribute("data-theme") === theme));
    }
  }

  function mount() {
    var nav = document.querySelector(".nav-brief");
    if (!nav || nav.querySelector(".theme-picker")) return;
    var group = document.createElement("span");
    group.className = "theme-picker";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", "Colour theme");
    [["dark", "Dark"], ["light", "Light"]].forEach(function (t) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("data-theme", t[0]);
      b.setAttribute("aria-pressed", String(current() === t[0]));
      b.textContent = t[1];
      b.addEventListener("click", function () { apply(t[0]); });
      group.appendChild(b);
    });
    nav.appendChild(group);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
