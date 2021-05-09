const activateTabs = (container) => {
    
    const nav = container.querySelector('.tab-nav'); // TAB NAVIGATION
    const links = nav.querySelectorAll('.tab-link'); // LINKS
    const contents = container.querySelectorAll('.tab-content'); // CONTENTS

    const toggleTab = (e) => {
        links.forEach((link) => {
            link.classList.remove('active'); // CLEAN UP
        })

        contents.forEach((content) => {
            content.classList.remove('active'); //CLEAN UP
        })

        const target = e.target.dataset.target; // value inside 'data-target' of target element
        const content = container.querySelector(`[data-content=${target}]`); // Find the target content
        
        e.target.classList.add('active'); //Set Active
        content.classList.add('active'); //Set Active
    }

    links.forEach((link) => {
        link.addEventListener('click', toggleTab); 
    })

}

const container = document.querySelector('#first');
activateTabs(container);