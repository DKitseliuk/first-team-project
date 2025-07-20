
(() => {
    const refs = {
  
      // Додати атрибут data-leave-review-open на кнопку відкриття
      openLeaveReviewBtn: document.querySelector("[data-leave-review-open]"),
      // Додати атрибут data-leave-review-close на кнопку закриття
      closeLeaveReviewBtn: document.querySelector("[data-leave-review-close]"),
             
      // Додати атрибут data-modal-leave-review на бекдроп модалки
      modalReview: document.querySelector("[data-modal-leave-review]"),
    };
  
    // Відриття форми
    refs.openLeaveReviewBtn.addEventListener("click", toggleModalReview);
    refs.closeLeaveReviewBtn.addEventListener("click", toggleModalReview);
  
  function toggleModalReview() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modalReview.classList.toggle("is-open");
  }

})();
