const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {  const header = document.querySelector(headerSelector),        tab = document.querySelectorAll(tabSelector),        content = document.querySelectorAll(contentSelector)  function hideTabContent() {    content.forEach(item => {      item.style.display = 'none'    })    tab.forEach(item => {      item.classList.remove(activeClass) // убираем класс активности у табов    })  }  function showTabContent(i = 0) {    content[i].style.display = 'block' //т.к получаем псевдомассив, то по индексу элемента получаем нужный элемент    tab[i].classList.add(activeClass)  }  hideTabContent()  showTabContent()  // вешаем обработчик событий на область, которая совмещает в себе все табы  header.addEventListener('click', (e) => {    const target = e.target // в таргет сохраняем элемент, где произошло событие    // т.к classList, знает, что мы работает с классами, то нужно отделить точку от получаемого класса    // проверяем, действительно ли мы кликнули в один из табов    // т.е содержит ли в себе этот таб передаваемый класс    if (target &&      (target.classList.contains(tabSelector.replace(/\./, "")) ||        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))){      // если всё верно, то начинаем перебирать табы          tab.forEach((item, i) => {            if(target == item || target.parentNode == item){ // если кликнутый элемент == элементу, который сейчас перебирается              hideTabContent()              showTabContent(i)            }          })    }  })}export default tabs;