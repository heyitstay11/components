const show_More_Less = (article) => {
    const button = article.querySelector('.toggle-btn');
    const more = article.querySelector('.content');
    button.addEventListener('click', () => {
        let text = more.classList.toggle('active') ? 'Less': 'More';
        button.innerText = `Show ${text}`;
    })
}
const article = document.querySelector('.article');
show_More_Less(article);