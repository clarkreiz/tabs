const tabsList = document.querySelector('.tabs__list');

const selectTab = event => {
    let index = event.target.id;
    if (event.target.id) {
        document.querySelector('.tabs__section--active').classList.remove('tabs__section--active');
        document.querySelector(`#tab${index}`).classList.add('tabs__section--active');
    }
}
tabsList.addEventListener('click', selectTab);