/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        listMovie = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkBox = addForm.querySelector('[type = "checkbox"]');

    

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newMovie = addInput.value;
        const favorite = checkBox.checked;

        movieDB.movies.push(newMovie);
        sortArr(movieDB.movies);

        addNewMovie(movieDB.movies, listMovie);
        event.target.reset();
    });

    const deleteAvd = (arr) => {
        arr.forEach(avd => {
            avd.remove();
        });
    };

    deleteAvd(avds);

    const makeChanges = () => {
        genre.textContent = 'драма';
    
        bg.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    makeChanges();

    const sortArr = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].toLowerCase();
        }
        arr.sort();
    };
    
    sortArr(movieDB.movies);

    function addNewMovie(list, parent) {
        parent.innerHTML = '';
        
        list.forEach((movie, i) => {
            
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${addThreeDot(movie)}
                <div class="delete"></div>
            </li>
            `;
        } );
    }

    addNewMovie(movieDB.movies, listMovie);
    
    function addThreeDot (name) {
        if (name.length > 20) {
            return name.slice(0, 20) + '...';
        }
        return name;
    } 
});
