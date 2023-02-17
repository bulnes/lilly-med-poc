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
            <a href="index.html" 
               rel="noopener" 
               title="Acessar o site Lilly Estética" 
               class="lilly-redirect__cta lilly-redirect__cta--lilly">
              Unidades Lilly Estética
            </a>

            <span>ou</span>

            <a href="https://lillymed.com.br" 
               rel="noopener" 
               title="Acessar o site Lilly Med" 
               class="lilly-redirect__cta lilly-redirect__cta--jk">
              Lilly Med JK Iguatemi - SP
            </a>
          </div>
        </div>
      </div>
    `;

    document.body.innerHTML += html;
  };

  const isTimeToShowModal = () => {
    const storage = localStorage.getItem(storageKey);

    if (storage) {
      const { lastAccess } = JSON.parse(storage);

      const now = new Date().getTime();
      const diff = now - lastAccess;

      if (diff < 1000 * 60 * 60 * 24) {
        return false;
      }

      return true;
    }

    return true;
  };

  const setTimeAccessed = () => {
    const lastAccess = new Date().getTime();
    localStorage.setItem(storageKey, JSON.stringify({ lastAccess }));
  };

  if (isTimeToShowModal()) {
    loadCss();
    createHTML();
  }

  setTimeAccessed();
})();
