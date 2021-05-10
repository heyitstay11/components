const activateAccordion = (container) => {
    const titles = container.querySelectorAll('.accordion-title'); 

    titles.forEach((title) => {
        title.addEventListener('click', () => {
            title.classList.toggle('active');
            title.parentElement.querySelector('.accordion-content').classList.toggle('active')
    })})
}
const container = document.getElementById('container');
activateAccordion(container);
