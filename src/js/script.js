window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Current month

    const currentMonth = document.querySelector('.header__month');
    const totalDays = document.querySelector('.header__total');
    const pastDays = document.querySelector('.header__past');
    const remainDays = document.querySelector('.header__remain');
    
    let month = new Date().getMonth();
    let year = new Date().getFullYear();

    const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    
    function getCurrentMonth() {
        for (let i = 0; i < months.length; i++) {
            if (i == month) {
                return months[i].toUpperCase();
            }
        }
    }

    function daysInMonth (y, m) {
        return 32 - new Date(y, m, 32).getDate();
    }

    currentMonth.textContent = getCurrentMonth();
    totalDays.textContent = daysInMonth(year, month);
    pastDays.textContent = new Date().getDate() - 1;
    remainDays.textContent = daysInMonth(year, month) - new Date().getDate() + 1;

    // Tabs

    const tabs = document.querySelector('.tabs');
    const tab = document.querySelectorAll('.tabs__tab');
    const tabImg = document.querySelectorAll('.tabs__img');
    const tabContent = document.querySelectorAll('.tabcontent');
    const tabMarker = document.querySelector('.tabs__marker');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);
    
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    showTabContent(0);

    function moveIndicator(c) {
        let top = 20;
        tabMarker.style.top = `${top}px`;
        tabMarker.style.backgroundColor = '#BE008A';
        tabMarker.style.boxShadow = '1px 1px 10px #BE008A';

        if (c == 0) {
            if (top == 120) {
                top -= 100;
            } else if (top == 220) {
                top -= 200;
                tabMarker.style.top = `${top}px`;
            }
        }

        if (c == 1) {
            if (top == 20) {
                top += 100;
                tabMarker.style.top = `${top}px`;
                tabMarker.style.backgroundColor = '#3BDA00';
                tabMarker.style.boxShadow = '1px 1px 10px #3BDA00';
            } else if (top == 220) {
                top -= 100;
                tabMarker.style.top = `${top}px`;
            }
        }

        if (c == 2) {
            if (top == 20) {
                top += 200;
                tabMarker.style.top = `${top}px`;
                tabMarker.style.backgroundColor = '#FFF400';
                tabMarker.style.boxShadow = '1px 1px 10px #FFF400';
            } else if (top == 120) {
                top += 100;
                tabMarker.style.top = `${top}px`;
            }
        }
        
    }

    moveIndicator(0);

    tabs.addEventListener('click', function(event) {
        let target = event.target;
        
        if((target && target.classList.contains('tabs__tab')) || (target && target.classList.contains('tabs__img'))) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i] || target == tabImg[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    moveIndicator(i);
                    break;
                }
            }
        }
    });


    // Add User

    const indicatorsBlock = document.querySelector('.indicators__block');
    
    const addUser = document.querySelector('.indicators__add');
    
    addUser.addEventListener('click', function() {
        let indicatorHtml = `
        <div class="indicators__department">
        <div class="indicators__department indicators_item right">
        <div class="indicators__name">Отдел</div>
        <div class="indicators__arrow">
        <img src="icons/angle-down.svg" alt="arrow" class="indicators__arrow_img">
        </div>
        <div class="indicators__edit">
        <img src="icons/pen.svg" alt="chart-bar" class="indicators__img">
        <img src="icons/check.svg" alt="check" class="indicators__img">
        <img src="icons/trash-alt.svg" alt="trash" class="indicators__img">
        </div>
        </div>
        <div class="indicators__department indicators_item blue">15 500 332 300</div>
        <div class="indicators__department indicators_item green"></div>
        <div class="indicators__department indicators_item orange"></div>
        <div class="indicators__department indicators_item red"></div>
        <div class="indicators__department indicators_item blue">100%</div>
        <div class="indicators__department indicators_item green"></div>
        <div class="indicators__department indicators_item orange"></div>
        </div>`;
        
        indicatorsBlock.insertAdjacentHTML('beforeend', indicatorHtml);
    });
    
    
    // Edit User
    
    const indicators = document.querySelector('.indicators');
    
    indicators.addEventListener('click', function(event) {
        const arrow = document.querySelectorAll('.indicators__arrow');
        const edit = document.querySelectorAll('.indicators__edit');

        if (!event.target.classList.contains('indicators__arrow_img')) {
            [].forEach.call(arrow, function(elem) {
                elem.classList.remove('arrow__active');
            });

            [].forEach.call(edit, function(elem) {
                elem.classList.remove('edit__active');
            });
            
        } else if (event.target.classList.contains('indicators__arrow_img')) {
            [].forEach.call(arrow, function(elem) {
                elem.classList.toggle('arrow__active');
            });

            [].forEach.call(edit, function(elem) {
                elem.classList.toggle('edit__active');
            });
        }
    }); 

    document.querySelector('.indicators__img').addEventListener('click', function() {
        console.log('11');
    } );
});