//часть1

function removeUser() { }
removeUser();

function createPost() { }
removeUser();

function addItem() { }
removeUser();

function readFile() { }
removeUser();

function getElements() { }
removeUser();

function createParentElement() { }
removeUser();

function startGame() { }
removeUser();

function sendMessage() { }
removeUser();

//часть2

function MyAge(age) { }

function myBirth(year) { }

function favoriteBook(book) { }

function favoriteCar(car) { }

function lenguage(lenguage) { }

function skill(skill) { }

function live(live) { }

function numberBrothers(number) { }

function numberSisters(sister) { }

function favoritebusuness(busuness) { }

//часть3

function pen(a) {
    return a
}

function kopebook(b) {
    return b
}

function wall(c) {
    return c
}

function window(d) {
    return d
}

function bone(e) {
    return e
}

function tooth(f) {
    return f
}

function body(g) {
    return g
}

function finger(h) {
    return h
}

function think(i) {
    return i
}

function ofcorse(k) {
    return k
}

//часть4

function add(a) {
    return a * 2
}
console.log(add(1));

function colocol(b) {
    return b * 2
}
console.log(colocol(1));

function zvanok(c) {
    return c * 2
}
console.log(zvanok(1));

function wym(d) {
    return d * 2
}
console.log(wym(1));

function pomexN(e) {
    return e * 2
}
console.log(pomexN(1));


//часть5

function masiv(arr) {
    return arr[0]
}
console.log(masiv(arr))

//часть6

function masiv2(arr) {
    return arr[arr.length - 1]
}
console.log(masiv2(arr))

//часть7 

function printMyFullName(firstname, secondname) { //название и параметры
    const fullname = firstname + secondname; //конкатенация

    return fullname;//возвращает fullname
}

console.log(printMyFullName('spider', 'man')); // выводит в кансоль


function getSumOfFirstAndLastElement(arr) { // в параметре есть масив
    if (arr.length < 2) {// если длина строки < 2 
        return 'минимум два элемента нужно жи есть';// возвращает 'текст'
    } else {//иначе
        const lastIndex = arr.length - 1;//присваение = длинна строки

        return arr[0] + arr[lastIndex];//возвращает 1 элимент масива + последний элимент
    }
}

console.log(getSumOfFirstAndLastElement([]));//выводит в кансоль масив

console.log(getSumOfFirstAndLastElement([3, 7, 12, 8]));// выводит в кансоль масив из чисел [3,7,12,8]

//часть8

/* патамучто функция не видет  text 'сss'
так как вы полняетсь код из тела функции
*/
let text = "css"; 
 
function testVariableScope() { 
  let text = "html"; 
   
  return text; 
} 
 
console.log(testVariableScope());

