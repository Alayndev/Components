function headerComponent(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
    <header class="header">
        <nav class="header__nav">
            <a href="./contact.html" class="header__link">Contact</a>
        </nav>
    </header>
  `;

  el.appendChild(componentEl);
}
