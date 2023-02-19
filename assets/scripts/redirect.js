(() => {
  const storageKey = "lilly-redirect";

  const loadCss = () => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/styles/redirect.css";
    document.head.appendChild(link);
  };

  const createHTML = () => {
    const html = `
      <div class="lilly-redirect">
        <div class="lilly-redirect__container">
          <h1 class="lilly-redirect__title">
            Olá, bem vinda(o)!
          </h1>

          <p class="lilly-redirect__text1">
            Escolha uma opção
          </p>

          <p class="lilly-redirect__text2">
            Você gostaria de informações sobre qual Lilly?
          </p>

          <div class="lilly-redirect__ctas">
            <a href="https://lilly-estetica-poc.vercel.app/?redirect=false" 
               rel="noopener" 
               title="Acessar o site Lilly Estética" 
               class="lilly-redirect__cta lilly-redirect__cta--lilly">
              Unidades Lilly Estética
            </a>

            <span>ou</span>

            <a href="index.html" 
               rel="noopener" 
               title="Acessar o site Lilly Med" 
               class="lilly-redirect__cta lilly-redirect__cta--jk"
               data-lilly-redirect-stay>
              Lilly Med JK Iguatemi - SP
            </a>
          </div>
        </div>
      </div>
    `;

    document.body.innerHTML += html;
  };

  const isTimeToShowModal = () => {
    const storage = sessionStorage.getItem(storageKey);
    if (storage) {
      const { answered } = JSON.parse(storage);
      return !answered;
    }

    return true;
  };

  const setAnswered = () => {
    sessionStorage.setItem(storageKey, JSON.stringify({ answered: true }));
  };

  const isRedirected = !window.location.search.includes("redirect=false");

  if (isRedirected && isTimeToShowModal()) {
    loadCss();
    createHTML();

    const stay = document.querySelector("[data-lilly-redirect-stay]");
    stay.addEventListener("click", (e) => {
      e.preventDefault();

      const modalContainer = document.querySelector(".lilly-redirect");
      modalContainer.remove();

      setAnswered();
    });
  }
})();
