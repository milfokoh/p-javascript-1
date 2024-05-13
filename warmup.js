'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError("Передаваеммые аргументы должны быть числовыми");
  } else return a + b;
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
  if (typeof year !== 'number' || year < 0) {
    if (typeof year !== 'number') {
      throw new TypeError("Передаваеммый аргумент должен быть числом");
    } else {
      throw new RangeError("Введите положительное число");
    }
  }

  return year % 100 !== 0 ? Math.floor(year / 100) + 1 : Math.floor(year / 100) ;
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
  if (typeof hexColor !== 'string') {
    throw new TypeError('Цвет должен быть передан в виде строки');
  }

  hexColor = hexColor.replace('#', '');

  if (hexColor.length !== 6) {
      throw new RangeError('Длина шестнадцатеричного кода цвета должна составлять 6 символов');
  }

  let red = parseInt(hexColor.substring(0, 2), 16);
  let green = parseInt(hexColor.substring(2, 4), 16);
  let blue = parseInt(hexColor.substring(4, 6), 16);
  
  return `(${red}, ${green}, ${blue})`;
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
  if (typeof year !== 'number' || year < 0) {
    if (typeof year !== 'number') {
      throw new TypeError("Передаваеммый аргумент должен быть числом");
    } else {
      throw new RangeError("Введите положительное число");
    }
  }

  return n <= 1 ? n : fibonacciProblem(n - 1) + fibonacciProblem(n - 2);
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
  if (!Array.isArray(matrix)) {
    throw new TypeError("Аргумент matrix не является двумерным массивом");
  }
  let transpMatrix = [];

  for (let i=0; i < matrix[0].length; i++) {
     transpMatrix[i] = []; 

    for (let j=0; j < matrix.length; j++) {
      transpMatrix[i][j] = matrix[j][i]; 
    }
  }

    return transpMatrix;

}

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
  if (typeof n !== 'number' || typeof targetNs !== 'number') {
    throw new TypeError("Передаваеммые аргументы должены быть числом");
  }

  if (targetNs < 2 || targetNs > 36) {
    throw new RangeError("Система счисления должна быть в диапазоне от 2 до 36");
  }

  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  while (n > 0) {
    let remainder = n % targetNs;
    result = digits[remainder] + result;
    n = Math.floor(n / targetNs);
  }

  return result;

}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
  if (typeof phoneNumber !== 'string') {
    throw new TypeError("Передаваеммый аргумент должен быть строкой");
  }

  let phonePattern = /^8-800-\d{3}-\d{2}-\d{2}$/;
  return phonePattern.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
  if (typeof text !== 'string') {
    throw new TypeError("Передаваеммый аргумент должен быть строкой");
  }

  let count = 0;
  for (let i = 0; i < text.length - 1; i++) {   
    if (text[i] === ':' && text[i + 1] === '-' && text[i + 2] === ')') {
      count++;
    }    
  }

  return count;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
  for (let i = 0; i < 3; i++) {
    if (field[i][0] === field[i][1] && field[i][1] === field[i][2]) {
      return field[i][0];
    }

    if (field[0][i] === field[1][i] && field[1][i] === field[2][i]) {
      return field[0][i];
    }
  }

  if ( field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
    return field[0][0];
  }

  if ( field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
    return field[0][2];
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (field[i][j] === null) {
        return 'draw';
      }
    }
  }
}

module.exports = {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem
};
