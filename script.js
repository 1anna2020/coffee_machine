"use strict"

let balance = document.querySelector(".balance");

function buyCoffee(name, cost) {
  let afterBuyValue = +balance.value - cost;
  if ( (balance.value - cost) < 0 || Number.isNaN(afterBuyValue)) { //value - отвечает за то, что мы туда записали, cost - цена; || или ; return - сворачивает функцию и повторяет заново; если мы пишем без равно - возвращает значение, если с равно - обращает в функцию, но не точно)
    alert("Недостаточно средств!");
    return;
}
balance.value = (+balance.value - cost).toFixed(2); //до двух точек после запятой
alert("Ваш " + name + " готовится!");
}