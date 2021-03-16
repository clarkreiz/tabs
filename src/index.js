const tabsList = document.querySelector('.tabs__list');
tabsList.addEventListener('click', event => {
	let index = event.target.id;
   
    if (event.target.id) {
        document.querySelector('.tabs__section--active').classList.remove('tabs__section--active');
        document.querySelector(`#tab${index}`).classList.add('tabs__section--active');
        console.log(document.querySelector(`#tab${index}`));
    }
});