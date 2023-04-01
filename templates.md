Шаблон навигации 
```html
<nav>
    <div id="logoContainer">
        <img src="data/logo.png" alt="Логотип">
        <h1>
            Б.Ф.У.
        </h1>
        <h4>
            Безопасность. Фиксация. Удержание.
        </h4>
    </div>
    <div id="navContainer">
        <div class="navContainerTop">
            <h1 id="pageName"></h1>
            <img id="menuIcon" src="data/menuIcon.png" alt="Иконка меню" onclick="menuClick()">
            <div id="border"></div>
            <h2 id="pageDescription"></h2>
        </div>
        <div class="navContainerBottom">
            <a href="main.html">
                <div class="navBlockBottom firstPoint">
                    <h3>
                        Главная
                    </h3>
                </div>
            </a>
            <a href="anomaliesList.html">
                <div class="navBlockBottom anotherBackground">
                    <h3>
                        Аномалии
                    </h3>
                </div>
            </a>
            <a href="professors.html">
                <div class="navBlockBottom">
                    <h3>
                        Учёные
                    </h3>
                </div>
            </a>
            <a href="develop.html">
                <div class="navBlockBottom lastPoint anotherBackground">
                    <h3>
                        Жертвы сайта
                    </h3>
                </div>
            </a>
        </div>
    </div>
</nav>
```

```html

<script src="main.js"></script>
```
Шаблоны блоков с заголовками первого и второго уровней:
```html
<div class="chapter1">
    <h1 class="header1">
        Пример текста
    </h1>
</div>
```
```html
<div class="chapter2">
    <h2 class="header2">
        Пример текста
    </h2>
</div>
```
Шаблон блока с текстом слева и изображением справа. Используется только на страницах с аномалиями
```html
<div class="textImageContainer">
    <p>
        Много текста
    </p>
    <img src="condition.png"
         alt="Описание аномалии">
</div>
```