document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    const elementsArray = document.getElementsByClassName("navBlockBottom");
    const pageName = document.getElementById("pageName");
    const pageDescription = document.getElementById("pageDescription");
    if (path.indexOf("main") >= 0) {
        elementsArray[0].className += " currentPage";
        pageName.innerText = "Главная";
        pageDescription.innerText = "Основные детали и история учреждения";
    }
    else if (path.indexOf("anomalies") >= 0) {
        elementsArray[1].className += " currentPage" ;
        pageName.innerText = "Аномалии";
        if (path.indexOf("infinite") >= 0) {
            pageDescription.innerText = "Бесконечно большие";
        }
        else if (path.indexOf("limited") >= 0) {
            pageDescription.innerText = "Ограниченные";
        }
        else if (path.indexOf("nothingness") >= 0) {
            pageDescription.innerText = "Ничтожества";
        }
        else if (path.indexOf("undefined") >= 0) {
            pageDescription.innerText = "Неопределенные";
        }
        else {
            pageDescription.innerText = "Классификация аномалий Фонда";
        }
    }
    else if (path.indexOf("professors") >= 0) {
        elementsArray[2].className += " currentPage" ;
        pageName.innerText = "Учёные";
        pageDescription.innerText = "Сотрудники Фонда";
    }
    else if (path.indexOf("develop") >= 0) {
        elementsArray[3].className += " currentPage" ;
        pageName.innerText = "Жертвы";
        pageDescription.innerText = "Те, кто пыхтел над сайтом";
    }
});
function menuClick() {
    const currentClassName = document.getElementsByClassName("navContainerBottom")[0].className;
    if (currentClassName === "navContainerBottom closeMenu" || currentClassName === "navContainerBottom"){
        document.getElementsByClassName("navContainerBottom")[0].className = "navContainerBottom openMenu";
    }
    else {
        document.getElementsByClassName("navContainerBottom")[0].className = "navContainerBottom closeMenu";
    }
}