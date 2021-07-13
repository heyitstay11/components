const startSlider = (slider) => {
    const rightArrow = slider.querySelector('.arrow.right'); // next button
    const leftArrow = slider.querySelector('.arrow.left'); // previous button
    const cards = slider.querySelectorAll('.card'); // All cards inside slider
    let index = 0; // initial index
    const cleanUpCardClasses = () => {
        cards.forEach( card =>  card.classList.remove('active','next','prev'));
    }
    const updateCardClasses = () => {
        cleanUpCardClasses(); 
        cards[index].classList.add('active');
            // if last card is active add next class to first card
        index === cards.length - 1  ? cards[0].classList.add('next') : cards[index + 1].classList.add('next'); 
            // if first card is active add prev class to last card  
        index === 0 ? cards[cards.length - 1 ].classList.add('prev') : cards[index - 1].classList.add('prev');  
    }
    rightArrow.addEventListener('click', () => {
        index = index === (cards.length - 1) ? 0 : index + 1; // Increment index within limits
        updateCardClasses();
    });
    leftArrow.addEventListener('click', () => {
        index = index === 0 ? (cards.length - 1) : index - 1; // Decrement index within limits
        updateCardClasses();
    });
}
const slider = document.getElementById('slider');
startSlider(slider);


