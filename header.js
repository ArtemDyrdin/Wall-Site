window.onload = function() {
    const path = window.location.pathname;
    const elementsArray = document.getElementsByClassName("navBlockBottom");
    const pageName = document.getElementById("pageName");
    const pageDescription = document.getElementById("pageDescription");
    if (path.indexOf("main") >= 0) {
        elementsArray[0].className = "navBlockBottom currentPage";
        pageName.innerText = "Главная";
        pageDescription.innerText = "Основные детали и история учреждения";
    } else if (path.indexOf("anomalies") >= 0) {
        elementsArray[1].className = "navBlockBottom currentPage";
        pageName.innerText = "Аномалии";
        pageDescription.innerText = "Классификация аномалий Фонда";
    } else if (path.indexOf("professors") >= 0) {
        elementsArray[2].className = "navBlockBottom currentPage";
        pageName.innerText = "Учёные";
        pageDescription.innerText = "Сотрудники Фонда";
    } else if (path.indexOf("develop") >= 0) {
        elementsArray[3].className = "navBlockBottom currentPage";
        pageName.innerText = "Жертвы";
        pageDescription.innerText = "Те, кто пыхтел над сайтом";
    }
}