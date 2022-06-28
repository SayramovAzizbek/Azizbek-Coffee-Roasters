var modalOpenBtn = document.querySelector('.modal-open-btn')
var modalMain = document.querySelector('.modal-main')
var closeModal = document.querySelector('.close-modal-btn')

modalOpenBtn.addEventListener('click', () => {
    modalMain.classList.add('modal-main-On')
})

closeModal.addEventListener('click', () => {
modalMain.classList.remove('modal-main-On')
})

