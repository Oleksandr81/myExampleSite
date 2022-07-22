/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const avds = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    bg = document.querySelector('.promo__bg'),
    listMovie = document.querySelector('.promo__interactive-list');

avds.forEach(avd => {
    avd.remove();
});

genre.textContent = 'драма';

bg.style.backgroundImage = 'url("img/bg.jpg")';

console.log(movieDB.movies.sort());

listMovie.innerHTML = '';


movieDB.movies.forEach((movie, i) => {
        
    listMovie.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${movieDB.movies[i]}
        <div class="delete"></div>
    </li>
    `;
} );

