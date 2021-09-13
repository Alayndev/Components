function contactComponent(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
  <section class="contact">
    <h2 class="contact__title">Contacto</h2>

    <form class="form">
      <label for="user-name" class="form__label">NOMBRE</label>
      <input
        type="text"
        class="form__input"
        name="user-name"
        id="user-name"
      />

      <label for="email" class="form__label">EMAIL</label>
      <input
        type="email"
        class="form__input"
        name="user-email"
        id="email"
      />

      <label for="message" class="form__label">MENSAJE</label>
      <textarea
        id="message"
        name="message"
        class="form__input form__textarea-message"
      ></textarea>

      <div class="form__submit-cont">
        <button class="form__submit-button">Enviar</button>
      </div>


    </form>
  <section>

  `;

  const formEl = componentEl.querySelector(".form");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  });

  el.appendChild(componentEl);
}
