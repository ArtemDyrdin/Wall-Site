console.log("Header included!")

function getCurrentPage() {
    const currentPathname = window.location.pathname;

    if (currentPathname.indexOf("anomalies") > -1) {
        return "anomalies";
    }
    if (currentPathname.indexOf("professors") > -1) {
        return "scientists";
    }
    if (currentPathname.indexOf("develop") > -1) {
        return "victims";
    }
    return "main";
}

function highlightButton(id) {
    document.getElementById(id).classList.add("nav--right-button_active");
}

function setText(title, subTitle) {
    document.getElementById("nav-text-desktop").innerHTML = `<span class="nav--right-title_big">${title}</span> <span class="test1">|</span><span class="test2"> <br> </span> ${subTitle}`;
    document.getElementById("nav-text-mobile").innerHTML = `<span class="nav--right-title_big">${title}</span> <span class="test1">|</span><span class="test2"> <br> </span> ${subTitle}`;
}

// <span class="nav--right-title_big">Главная</span> | Основные детали и история учреждения
switch (getCurrentPage()) {
    case "anomalies":
        highlightButton("anomalies");
        setText("Аномалии", "Классификация объектов Фонда");
        break;
    case "scientists":
        highlightButton("scientists");
        setText("Учёные", "Сотрудники фонда");
        break;
    case "victims":
        highlightButton("victims");
        setText("Жертвы", "Те, кто пыхтел над сайтом");
        break;
    default:
        highlightButton("main");
        setText("Главная", "Основные детали и история учреждения");
        break;
}
