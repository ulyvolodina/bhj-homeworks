const hasTooltip = document.querySelectorAll(`.has-tooltip`);

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].insertAdjacentHTML(`afterEnd`, `<div class="tooltip">${hasTooltip[i].title}</div>`);

    hasTooltip[i].addEventListener(`click`, (elem) => {
        elem.preventDefault();

        const tooltipList = document.querySelectorAll(`.tooltip`);
        if (tooltipList[i].classList.contains(`tooltip_active`)) {
            tooltipList[i].classList.remove(`tooltip_active`);
        } else {
            tooltipList[i].classList.add(`tooltip_active`);
            
            let place = hasTooltip[i].getBoundingClientRect();
            
            tooltipList[i].style.left = place.left + "px";
            tooltipList[i].style.top = place.top + 20 + "px";
        }
    })
};