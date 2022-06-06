(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // const expanded = refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    // refs.openModalBtn.setAttribute('aria-expanded', !expanded);

    document.body.classList.toggle('modal-is-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
