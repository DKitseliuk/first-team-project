
(() => {
    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття
      openMenuBtn: document.querySelector("[data-menu-open]"),
      // Додати атрибут data-modal-close на кнопку закриття
      closeMenuBtn: document.querySelector("[data-menu-close]"),

      // Додати атрибут data-modal на бекдроп модалки
      modal: document.querySelector("[data-modal]"),
    
    };
  
    // Відкриття меню мобільної версії
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.modal.classList.toggle("is-open");
  }  

})();
  