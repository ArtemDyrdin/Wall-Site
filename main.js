function titleHeaderEdit(pathArray, nameArray, flag) {
    if (flag) {
        return;
    }
    const path = window.location.pathname;
    for (let i = 0; i < pathArray.length; i++) {
        if (path.indexOf(pathArray[i]) >= 0) {
            document.getElementsByTagName("title")[0].innerText = nameArray[i];
            document.getElementsByClassName("header1")[0].innerText = nameArray[i];
            flag = true;
            break;
        }
    }
}

function bfuFinder(inputArray, outputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        let spaceIndex = inputArray[i].indexOf(' ');
        let tempAnomalyName = '';
        for (let j = 0; j < spaceIndex; j++) {
            tempAnomalyName += inputArray[i][j];
        }
        outputArray.push(tempAnomalyName);
    }
    console.log(outputArray);
}

document.addEventListener("DOMContentLoaded", () => {
    let flag = false;

    const infinitePathArray = ["canteen", "musicalEquations", "stopPoint"];
    const infiniteNameArray = ['B.F.U.-154 "Столовая"', 'B.F.U.-708 "Музыкальные уравнения"', 'B.F.U.-101 "Точка остановы"'];

    const limitedPathArray = ["AI", "crib", "everPassingStudent", "ghosts", "informer", "orchid", "servers", "tableGame", "vendingMachine"];
    const limitedNameArray = ['B.F.U.-068 "Старый ИИ Миньон"', 'B.F.U.-016 "Бесконечная шпаргалка"', 'B.F.U.-001 "Вечно сдающий студент"', 'B.F.U.-356 "Призраки ожидания"', 'B.F.U.-144 "Стукач"', 'B.F.U.-420 "Орхидея"', 'B.F.U.-888 "Серверы"', 'B.F.U.-080 "Та самая настольная игра"', 'B.F.U.-019 "Торговый автомат"'];

    const nothingnessPathArray = ["10958", "gnome"];
    const nothingnessNameArray = ['B.F.U.-10958 "Задача Танежи"', 'B.F.U.-173 "Гном"'];

    const undefinedPathArray = ['Antidemidovich', "boatman", "elevator", "faceDetector"];
    const undefinedNameArray = ['B.F.U.-003 "Антидемидович"', 'B.F.U.-1952-22.04 "Лодочник"', 'B.F.U.-004 "Лифт"', 'B.F.U.-013 "Распознаватель лиц"'];

    const path = window.location.pathname;
    const elementsArray = document.getElementsByClassName("navBlockBottom");
    const pageName = document.getElementById("pageName");
    const pageDescription = document.getElementById("pageDescription");

    if (path.indexOf("main") >= 0) {
        elementsArray[0].className += " currentPage";
        pageName.innerText = "Главная";
        pageDescription.innerText = "Основные детали и история учреждения";
    } else if (path.indexOf("anomalies") >= 0) {
        elementsArray[1].className += " currentPage";
        pageName.innerText = "Аномалии";
        if (path.indexOf("infinite") >= 0) {
            pageDescription.innerText = "Бесконечно большие";
        } else if (path.indexOf("limited") >= 0) {
            pageDescription.innerText = "Ограниченные";
        } else if (path.indexOf("nothingness") >= 0) {
            pageDescription.innerText = "Ничтожества";
        } else if (path.indexOf("undefined") >= 0) {
            pageDescription.innerText = "Неопределенные";
        } else {
            pageDescription.innerText = "Классификация аномалий Фонда";
        }
        titleHeaderEdit(infinitePathArray, infiniteNameArray, flag);
        titleHeaderEdit(undefinedPathArray, undefinedNameArray, flag);
        titleHeaderEdit(limitedPathArray, limitedNameArray, flag);
        titleHeaderEdit(nothingnessPathArray, nothingnessNameArray, flag);

    } else if (path.indexOf("professors") >= 0) {
        elementsArray[2].className += " currentPage";
        pageName.innerText = "Учёные";
        pageDescription.innerText = "Старшие сотрудники Фонда";
    } else if (path.indexOf("develop") >= 0) {
        elementsArray[3].className += " currentPage";
        pageName.innerText = "Жертвы";
        pageDescription.innerText = "Те, кто пыхтел над сайтом";
    }

    if (path.indexOf('anomaliesList.html') === -1 || path.indexOf('main.html') === -1 || path.indexOf('develop.html') === -1) {
        let bfuMas = [];
        bfuFinder(infiniteNameArray, bfuMas);
        bfuFinder(undefinedNameArray, bfuMas);
        bfuFinder(limitedNameArray, bfuMas);
        bfuFinder(nothingnessNameArray, bfuMas);
        let firstFindArea = document.getElementsByClassName('textImageContainer');
        console.log(bfuMas[bfuMas.length + 1]);
        // for (let i = 0; i < firstFindArea.length; i++) {
        //     let currentArea = firstFindArea[i].getElementsByTagName('p')[0];
        //     for (let j = 0; j < currentArea.innerText.length - 7; j++) {
        //         if (currentArea.innerText[j] === "B" && currentArea.innerText[j + 6] === "-"){
        //             let u = j + 7;
        //             let tempName = 'B.F.U.-';
        //
        //             while (currentArea.innerText[u] !== " " || currentArea.innerText[u] !== "." || currentArea.innerText[u] !== "]" || currentArea.innerText[u] !== ")" || currentArea.innerText[u] !== "█"){
        //                 tempName += currentArea.innerText[u];
        //                 u++;
        //             }
        //             console.log(tempName);
        //             for (let u = 0; u < bfuMas.length; u++){
        //                 if (tempName === bfuMas[u]){
        //                     currentArea.innerText = currentArea.innerText.slice(0, j) + tempName + currentArea.innerText.slice(j);
        //                     break;
        //                 }
        //             }
        //             j += tempName.length;
        //         }
        //     }
        // }
    }

});

function menuClick() {
    const currentClassName = document.getElementsByClassName("navContainerBottom")[0].className;
    if (currentClassName === "navContainerBottom closeMenu" || currentClassName === "navContainerBottom") {
        document.getElementsByClassName("navContainerBottom")[0].className = "navContainerBottom openMenu";
    } else {
        document.getElementsByClassName("navContainerBottom")[0].className = "navContainerBottom closeMenu";
    }
}