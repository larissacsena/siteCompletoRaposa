function iniTabNav() {
  //é como se fosse botão conteudo
  //clica em uma coisa aparece outra relacionada

  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo");

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
        tabContent[index].classList.add("ativo");
      });
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
iniTabNav();

function initAccordion() {
  const perguntas = document.querySelectorAll("dl dt");
  const respostas = document.querySelectorAll("dl dd");
  if (perguntas.length && respostas.length) {
    // respostas[0].classList.add("inativo")

    respostas.forEach((item, index) => {
      respostas[index].classList.add("inativo");
    });
    function ativaResposta(index) {
      respostas[index].classList.toggle("ativo");
      respostas[index].classList.toggle("inativo");
    }

    //dando erro:
    // perguntas.forEach((item, index) => {
    //   item.addEventListener("click", ativaResposta());
    // });
    //Meu erro foi passar ativaResposta como callback ao click, quando na verdade eu só preciso ativar a função dentro da outra função?
    perguntas.forEach((item, index) => {
      item.addEventListener("click", () => {
        ativaResposta(index);
      });
    });
  }
}

initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
  //o evento é referente ao que eu cliquei e relacionei no add event listener, no caso os links internos
  function scrollToSection(event) {
    //anula o evento que ocorre quando eu clico
    event.preventDefault();
    //O target é exatamente o elemento que eu cliquei. O currentTarget é o elemento que está ouvindo o evento
    //vou pegar o conteudo de href quando eu clicar e colocar na variavel
    const href = event.currentTarget.getAttribute("href");
    console.log(event.currentTarget);
    //ex: cliquei em animais: vou pegar tudo dentro do site que tiver a #animais, pois foi oq coloquei em href
    const section = document.querySelector(href);
    console.log(section);
    //pega o topo do elemento e põe numa variável
    //coloca o elemento na visão
    section.scrollIntoView({
      behavior: "smooth",
      //alinhamento do bloco
      block: "start",
    });

    // FORMA COM SCROLLTO
    //const topo = section.offsetTop;
    //coordenada x e y
    // window.scrollTo(0,topo)
    //passo options como objeto e defino os metodos

    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();
