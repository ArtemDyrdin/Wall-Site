Шаблон навигации (нет меню)
```html
<nav>
    <div id="logoContainer">
        <img src="/data/logo.png" alt="Логотип">
        <h1>
            Б.Ф.У
        </h1>
        <h4>
            Безопасность. Фиксация. Удержание
        </h4>
    </div>
    <div id="navContainer">

    </div>
</nav>
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