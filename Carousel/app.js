const startSlider = (slider) => {
    const rightArrow = slider.querySelector('.arrow.right'); // next
    const leftArrow = slider.querySelector('.arrow.left'); // previous
    const cards = slider.querySelectorAll('.card'); // All cards inside slider
    let index = 0; // initial index
    const cleanUpCardClasses = () => {
        cards.forEach( card =>  card.classList.remove('active','next','prev'));
    }
    const updateCardClasses = () => {
        cleanUpCardClasses(); 
        cards[index].classList.add('active');
        (cards[index + 1] && cards[index + 1].classList.add('next')); // if next card exists add next class
        if(index === cards.length - 1 )  cards[0].classList.add('next'); // if last card is active add next to first card
        (cards[index - 1] && cards[index - 1].classList.add('prev')); // if prev card exists add prev class
        if(index === 0 )  cards[cards.length - 1 ].classList.add('prev'); // if first card is active add prev to last card
    }
    rightArrow.addEventListener('click', () => {
        index = index === (cards.length - 1) ? 0 : index + 1;
        updateCardClasses();
    });
    leftArrow.addEventListener('click', () => {
        index = index === 0 ? (cards.length - 1) : index - 1;
        updateCardClasses();
    });
}
const slider = document.getElementById('slider');
startSlider(slider);


