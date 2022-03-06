window.addEventListener('scroll', () => {
    //pegando o menu do html e passando para js.
    const header = document.querySelector('.header-top');
    //No header (variável) iremos adicionar uma classe CSS quando o scroll for maior que 80, o JS retira essa quando scroll for < = 80
    header.classList.toggle('scroll-active', window.scrollY > 80);
});