'use strict';

function getQuest() {
  let countTry = 10;

  const getRandomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randNum = getRandomNum(1, 100);

  const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  };

  const isNull = function (argNull) {
    return argNull === null;
  };

  const isTrim = function (argTrim) {
    return argTrim.trim() !== argTrim;
  };

  const testTry = function (moreLess) {
    countTry--;
    if (countTry === 0) {
      const endTryLess = confirm('Попытки закончились, хотите сыграть еще?');
      if (endTryLess) {
        getQuest();
      } else {
        alert('Игра окончена');
      }
    } else {
      alert(`Загаданное число ${moreLess}, осталось ${countTry} попыток`);
      testQuest();
    }
  };

  const testQuest = function () {
    const someNum = prompt('Угадай число от 1 до 100');
    if (isNull(someNum)) {
      alert('Игра окончена');
    } else if (!isNumber(someNum)) {
      alert('Введи число!');
      testQuest();
    } else if (isTrim(someNum)) {
      alert('Введи число без пробелов!');
      testQuest();
    } else if (!(someNum >= 1 && someNum <= 100)) {
      alert('Введи число от 1 до 100!');
      testQuest();
    } else {
      if (someNum > randNum) {
        testTry('меньше');
      } else if (someNum < randNum) {
        testTry('больше');
      } else {
        const questFinish = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
        if (questFinish) {
          getQuest();
        } else {
          alert('Игра окончена');
        }
      }
    }
  };
  testQuest();
}

getQuest();