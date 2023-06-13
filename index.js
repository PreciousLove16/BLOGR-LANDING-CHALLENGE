const navToggle = document.querySelector(".nav-toggle");
const dropDownBtns = document.querySelectorAll(".drop-down-btn");

const openNav = () => {
    document.body.classList.toggle("nav-open");
};

const toggleArrow = (e) => {
    const results = [];
    let target = e.target;
    let arrow = null;
    let innerTxt = null;
    if (target.classList.contains("arrow-img")) {
        arrow = target;
        target = arrow.parentNode;
        innerTxt = target.innerText.toLowerCase();
    } else {
        innerTxt = target.innerText.toLowerCase();
        const className = `${innerTxt}-arrow`;
        arrow = document.querySelector(`.${className}`);
    }
    arrow.classList.toggle("toggle-arrow");
    results.push(target);
    results.push(innerTxt);
    return results;
};

const toggleDropDown = (e) => {
    const [target, innerTxt] = toggleArrow(e);
    const dropDowns = document.querySelectorAll(".container-drop-down");
    dropDowns.forEach((element) => {
        if (element.id === innerTxt) {
            element.classList.toggle("open-drop-down");
        }
    });
};

navToggle.addEventListener("click", openNav);
dropDownBtns.forEach((btn) => {
    btn.addEventListener("click", toggleDropDown);
});