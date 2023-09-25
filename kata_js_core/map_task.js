//================================================================
// Реализуйте функцию getArraysCounts, которая принимает массив в качестве аргумента.
// Функция должна вернуть Map, в котором ключи - все уникальные элементы в массиве,
// а значения - количество этих элементов в массиве.

// const getArraysCounts = (data) => data.reduce((map, element) => {
//         map.set(element, map.has(element) ? map.get(element) + 1 : 1);
//         return map
//     }, new Map());


// const obj = { name: 123 };
// const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
// const counts = getArraysCounts(data); // экземпляр Map
// console.log(counts.get(1)); // 3
// console.log(counts.get(2)); // 4
// console.log(counts.get(true)); // 2
// console.log(counts.get(obj)); // 2
// console.log(getArraysCounts(data))
//================================================================

//================================================================
// Unique
// Реализуйте функцию unique, которая принимает массив в качестве аргумента и возвращает новый массив,
// в котором содержатся только уникальные значения из исходного массива. Исходный массив не должен изменяться.
// Порядок элементов должен сохраняться.
// Используйте Set для реализации этой функции.

// const unique = (arr) => {
//     const uniSet = new Set();
//     arr.forEach(i => uniSet.add(i))
//     return Array.from(uniSet)
// }
    
// arr.reduce((uniqueObj, ell) => {
    //     uniqueObj.add(ell)
    //     return uniqueObj
    // }, new Set())

// const obj = { name: 'John' };
// const data2 = [obj, obj, obj, { name: 'John' }];
// const result = unique(data2);
// console.log(result); // [{ name: 'John' }, { name: 'John' }]

// console.log(result[0] === obj); // true
// console.log(result[1] === obj); // false

// const data1 = [1, 2, 3, 3, 4, 4];
// console.log(unique(data1)); // [1, 2, 3, 4]
//================================================================

//================================================================
// getDaysBetweenDates
// Реализуйте функцию getDaysBetweenDates которая принимает на вход две даты и возвращает количество полных дней между ними.
// Функция должна корректно работать с объектом Date
// Функция должна корректно работать со значениями в миллисекундах
// Если входные параметры - невалидные даты, то функция возвращает NaN:
// Если аргументов меньше 2-х, то функция должна пробросить исключение TypeError

// new Date();
// new Date(value);
// new Date(dateString);
// new Date(year, month[, day[, hour[, minute[, second[, millisecond]]]]]);

function getDaysBetweenDates (a, b) {
    if(arguments.length < 2) {
        throw new TypeError('null is not a Date')
    } else if (typeof a === 'number' && typeof b === 'number') {
        return Math.trunc((b - a) / 1000 / 3600 / 24)
    } else if (a === null || b === null){
        return Math.trunc((Date.parse(new Date(b)) - Date.parse(new Date(a))) / 1000 /3600/24)
    }  else return Math.trunc((Date.parse(b) - Date.parse(a)) / 1000 / 3600 / 24)
};

// console.log(getDaysBetweenDates('1-1-2020', '1-2-2020')); // -> 1
// console.log(getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0))); // -> 366
// console.log(getDaysBetweenDates(1409796000000, 1409925600000)); // -> 1
// console.log(getDaysBetweenDates('1-1-2020', 'дата')); // -> NaN
// console.log(getDaysBetweenDates(null, '1971'))
// console.log(getDaysBetweenDates(1409796000000)); // -> TypeError
// console.log(getDaysBetweenDates('1-1-2020', null)); // -> TypeError
// console.log(getDaysBetweenDates( null)); // -> TypeError
//===============================================================

//===============================================================
// IsEmpty
// Напишите функцию isEmpty, которая возвращает true,
// если у объекта нет свойств(у самого объекта, не у прототипов),
// иначе возвращает false.

// Напишите функцию isEmptyWithProtos, которая возвращает true,
// если у объекта и его прототипов(не включая Object.prototype) нет свойств,
// иначе возвращает false.

// Обрати внимание на то, что функция isEmptyWithProtos проверяет наличие свойств не только у самого объекта,
// но и у его прототипов.
// Если создать пустой объект литерально (просто через фигурные скобки как в примере {})
// то у такого объекта автоматически будет прототип Object.
// Поэтому isEmptyWithProtos возвращает false для таких объектов.

function isEmpty(obj) {
    return Object.keys(obj).length !== 0 ? false : true
}
const obj = Object.create(null);
// console.log(isEmpty(obj)); // -> true
// console.log(isEmpty({ prop: 'value' })); // -> false



// isEmptyWithProtos     
// ✓ должна возвращать true на пустой объект без прототипа (2ms)     !
// ✓ должна возвращать true на пустой объект с прототипом Object.prototype (2ms)     !
// ✓ должна возвращать true на пустой объект с пустым прототипом (2ms)     !
// ✓ должна возвращать false на объект с прототипом со свойствами (3ms)     
// ✓ должна возвращать false на не пустой объект (3ms)

function isEmptyWithProtos(obj) {
    for (let prop in obj) {
        return false
    }
    return true;
}
const protoObj = Object.create(null);
const obj2 = Object.create(protoObj);
// console.log(isEmptyWithProtos(obj2)); // -> true
// console.log(isEmptyWithProtos({})); // -> true

// const testCase = Object.create(testProto);
// const checkCaseImmutability = Object.create(testProto);
// console.log(isEmptyWithProtos(testCase)) //.toBe(false);
//=========================================================

//=========================================================

// Library
// Реализуйте функционал для работы с книгами в библиотеке:

// создание книги(добавление новой книги в библиотеку)
// Выдача книги читателю
// Получение книги от читателя
// Получение у кого книга сейчас находится
// Необходимо создать контруктор объектов Book, который будет создавать объекты со следующими полями:
// name - имя книги
// author - имя автора
// year - год книги
// reader - текущий читатель книги(у кого она на руках) - если она сейчас свободна - должно быть равно null


class Book {
    constructor(options) {
        this.name = options.name;
        this.author = options.author;
        this.year = options.year;
        this.reader = null;
    }
    isAvailable() {
        return this.reader === null ? true : false;
    }
    takeBook(reader) {
        if(!this.isAvailable()) {
            return false
        } else {
            this.reader = reader;
            return true;
        }
    }
    returnBook() {
        if(!this.isAvailable()) {
            this.reader = null;
            console.log("Book is returned")
            return true;
        } else {
            console.log("Book is in library")
            return false
        }
    }
    changeBookName(newBookName) {
        if(this.isAvailable()) {
            this.name = newBookName;
            return true;
        } else false
    }
    changeAuthorName(newAuthorName) {
        if(this.isAvailable()) {
            this.author = newAuthorName;
            return true;
        } else false
    }    
    getCurrentReader() {
        return this.isAvailable() ? this.reader : this.reader;
    }
}
const book = new Book({
    name: 'War and Peace',
    author: 'Leo Tolstoy',
    year: '1863'
})

// console.log(book.getCurrentReader())
// console.log(book.takeBook('Maksim'))
// console.log(book.getCurrentReader())
// console.log(book.takeBook('Ivan'))

// console.log(book.isAvailable())
// console.log(book.returnBook())
// console.log(book.isAvailable())
// console.log(book.getCurrentReader())
// console.log(book.returnBook())
// console.log(book.returnBook())
// console.log(book.isAvailable())
// console.log(book.getCurrentReader())
// console.log(book)
// Необходимо реализовать на прототипе следующие методы работы с книгой:
// console.log(isAvailable()) // true/false - доступна ли книга для выдачи или она у кого-то на руках
// console.log(takeBook(readerName)) //должен выдавать книгу читателю, если она доступна для выдачи и записывать его имя в reader,
// возвращает true, если выдача книги возможна и она произведена, || false, если книга уже выдана
// console.log(returnBook()) //регистрирует возврат книги, устанавливает reader в null,
// возвращает true, если книга была на руках, || false если книга итак в библиотеке
// console.log(changeBookName(newBookName)) //изменяет название книги на newBookName, возвращает true/false, в зависимости от результата
// console.log(changeAuthorName(newAuthorName)) //изменяет имя автора на newAuthorName, возвращает true/false в зависимости от результата
// console.log(getCurrentReader()) //возвращает имя текущего читателя или null, если книга доступна для выдачи
//===============================================================

//===============================================================
// Prototypes Decorator
// Необходимо добавить возможность логирования в функцию add класса Addition

// Используя прототип класса Addition добавить декоратор к функции add, дающий возможность логировать ее вызов
// При этом результат выполнения add должен быть как и в оригинале, но дополнительно при вызове выводить в консоль 'called'

// Менять изначальную функцию, класс или созданный объект нельзя.
// Код можно писать только в обозначенной зоне.

class Addition {
    constructor(num) {
        this.num = num;
    }

    add (...nums) {
        const sum = (a, b) => a + b;
        return this.num + nums.reduce(sum)
    }
}
// Write you code here
function additionDecorator(func) {
    return function() {
        const res = func.apply(this, arguments);
        console.log('called')
        return res;
    }
}
Addition.prototype.add = additionDecorator(Addition.prototype.add);
// console.log(adding.add(3, 4, 6))
// End of code

// Пример:
// const startedValue = new Addition(5);
// const result = startedValue.add(3,5,6) //В консоль выводится "called"
// console.log(result) //В консоль выводится 19
//===============================================================================

//===============================================================================
// Object Create
// В данном задании вам нужно будет реализовать полифил Object.create.
// Реализуйте аналог стандартной функции Object.create - создаёт и возвращает новый объект,
// прототипом которого является первый аргумент, переданный в функцию.
// Если передан второй аргумент - устанавливает его в качестве свойств для нового объекта.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// Ваша функция должна принимать два параметра:
// prototype (обязательный) - объект или null (но не undefined), который будет являть ся прототипом для созданного объекта.
// properties (optional) - аргумент, который установит свойства для нового объекта (будет передан в Object.defineProperties).
// Если параметры функции отсутствуют или prototype НЕ является объектом или null, то необходимо пробросить TypeError.
// В результате Object.create вернет созданный объект с внутренним свойством [[Prototype]], установленным в значение переданного в аргументе prototype.
// Если properties передан и НЕ является undefined, то будет вызван Object.defineProperties(obj, properties), где obj - объект,который должен быть возвращен из Object.create.

// Подсказки:
// Для доступа к внутреннему свойству объекта [[Prototype]] используйте методы Object.getPrototypeOf/Object.setPrototypeOf.
// В JavaScript все является объектом, кроме: null и undefined.
// NaN, Infinity, /regular expression literals/, function(){} - это всё тоже объекты.
// Пример:

const objMax = {
    firstName: 'Maks',
    age: 36,
};

const isObjAndNull = (obj => typeof obj === 'object');
Object.create = function(proto, propertiesObject = {}) {
    if(isObjAndNull(proto) && propertiesObject !== undefined){
        Object.defineProperties(propertiesObject, propertiesObject)
        return Object.setPrototypeOf(propertiesObject, proto);
    } else throw new TypeError
}

const A = {
    objectName: 'Object A',
    getObjectName: function() {
        return `This is ${this.objectName}!`;
    },
};

const B = Object.create(A, {
    objectName: {
        value: 'Object B',
    },
});

// console.log(A.getObjectName()); // This is Object A!
// console.log(B.getObjectName()); // This is Object B!

// console.log(A.hasOwnProperty('getObjectName')); // true
// console.log(A.hasOwnProperty('objectName')); // true

// console.log(B.hasOwnProperty('getObjectName')); // false
// console.log(B.hasOwnProperty('objectName')); // true
// console.log(B); // true
//=========================================================================

//=========================================================================
// Личный Счет
// Создайте 2 класса - Person для описания клиента и Account для работы с банковским счетом частного лица.
// Считаем, что отрицательный баланс счета - это нормально, обрабатывать как ошибку не надо.
// Person
// const person = new Person('Johannes', 'Helms', '1983-01-02');
// Методы
// getAge() - Возвращает возраст владельца счета
// Свойства
// firstName - Имя
// lastName - Фамилия
// fullName - Имя вместе с фамилией, вычислямое свойство (используем геттер)
// Account
// new Account(person, 1000);
// Методы
// addMoney(amount, description) - Положить деньги на аккаунт с комментарием к переводу
// withdrawMoney(amount, description) - Вывести деньги с аккаунта с комментарием к переводу
// getAmount() - Получить текущее состояние счета
// getAccountHistory() - Возвращает массив с объектами формата { timestamp: 1574434091131, target: 'in', amount: 10, description: 'ЗП' }.
//              Поле target может иметь значения in или out.
// transfer(fromAccount, toAccount, amount) - статический метод, переводит деньги с одного счета на другой
// Свойства
// person - Владелец счета

class Person {
    constructor(options) {
        this.firstName = options.name;
        this.secondName = options.surname;
        this.dateOfBirth = options.birthDate;
    }
    getAge() {
        const todayDate = new Date()
        const birthDate = new Date(this.dateOfBirth)
        return todayDate.getDate() < birthDate.getDate() ? todayDate.getFullYear() - birthDate.getFullYear() - 1 : todayDate.getFullYear() - birthDate.getFullYear()
    }
    get fullName() {
        return `${this.firstName} ${this.secondName}`
    }
}

class Account {
    constructor(person, amount) {
        this.person = person.firstName;
        this.balance = amount;
        this.history = [];
    }
    static transfer(fromAccount, toAccount, amount) {
        fromAccount.balance -= amount;
        toAccount.balance += amount;
        fromAccount.history.push(Object.create({}, {
            timestamp: {
                value: Date.now(),
                enumerable: true,
            },
            target: {
                value:'out',
                enumerable: true,
            },
            amount: {
                value: amount,
                enumerable: true,
            },
            description: {
                    value: 'transfer',
                    enumerable: true,
            },
        }));
        toAccount.history.push(Object.create({}, {
            timestamp: {
                value: Date.now(),
                enumerable: true,
            },
            target: {
                value:'in',
                enumerable: true,
            },
            amount: {
                value: amount,
                enumerable: true,
            },
            description: {
                    value: 'transfer',
                    enumerable: true,
            },
        }));
    }
    addMoney(amount, description) {
        this.balance += amount;
        this.history.push(Object.create({}, {
            timestamp: {
                value: Date.now(),
                enumerable: true,
            },
            target: {
                value:'in',
                enumerable: true,
            },
            amount: {
                value: amount,
                enumerable: true,
            },
            description: {
                    value: description,
                    enumerable: true,
            },
            
        }));
    }
    withdrawMoney(amount, description) {
        this.balance -= amount;
        this.history.push(Object.create({}, {
            timestamp: {
                value: Date.now(),
                enumerable: true,
            },
            target: {
                value:'out',
                enumerable: true,
            },
            amount: {
                value: amount,
                enumerable: true,
            },
            description: {
                value: description,
                enumerable: true,
            },
            
        }));
    }
    getAmount() {
        return this.balance;
    }
    getAccountHistory() {
        return this.history
    }

}

const alex = new Person({
    name: 'Alexey',
    surname: 'Petrov',
    birthDate: '1994-05-22'
});
const alexAccount = new Account(alex, 1000);
const helen = new Person({
    name: 'Helen',
    surname:'Smith',
    birthDate: '1990-06-06'
});
const helenAccount = new Account(helen, 400);
alexAccount.addMoney(1000, 'Зарплата');
const amount = alexAccount.getAmount();
alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
Account.transfer(alexAccount, helenAccount, 100);
helenAccount.getAmount(); // 500
alexAccount.getAmount(); // 1700
// console.log(helen.getAge())
// console.log(helenAccount)
// console.log(alexAccount)
// console.log(alexAccount.getAccountHistory())
// console.log(helenAccount.getAccountHistory())
// ===================================================================

// ===================================================================
// Calc
// Реализовать класс Calc с методами sub / add / result

// В конструкторе можем передать начальное иммутабельное значение (поумолчанию 0), потом методами add и sum прибавлять и вычитать из него.
// Вызов add/sub можно объединять в цепочку (fluent interface), методы возвращают новый объект класса.
// По вызову result() получаем результат вычислений.

// С тем, что возвращать надо экземпляр класса это пол беды,
// так а вторые пол беды - значение надо не переприсваивать,
// прибавляя/вычитая, а просто вычислять и передавать результат.
// Мыкалась я очень долго с иммутацией и пыталась впихнуть невпихуемые всевозможные методы,
// но потом как поняла, что если не переприсваивать, ничего не будет меняться в изначальном значении,
// вот так сразу и все само как-то заработало. 

class Calc {
    constructor(res = 0) {
        this.res = res;
    }
    add(val) {
        const newAdd = this.res + val;
        return new Calc(newAdd);
    }
    sub(val) { 
        const newSub = this.res - val;
        return new Calc(newSub);
    }
    result() {
        return this.res
    }
}

// Пример использования:
// const calc = new Calc();
// console.log(calc.result()); // 0
// console.log(calc.add(5).result()); // 0 + 5 = 5
// console.log(calc.add(3).sub(10).result()); // 0 + 3 - 10 = -7
// const ten = calc.add(10);
// console.log(ten.sub(5).result()); // 10 - 5 = 5
// console.log(ten.result()); // 10
// ===================================================================

// ===================================================================

// Транслятор событий
// Cоздайте класс EventEmitter для управления событиями. У этого класса должны быть следующие методы:
// .on(event, callback) - добавить обработчик события
// .off(event, callback) - удалить обработчик события
// .once(event, callback) - добавить обработчик события, который сработает единожды
// .emit(event, [...arg]) - вызвать все обработчики события event, можно передать аргументы
// Расширьте EventEmitter классом BroadcastEventEmitter так, чтобы была возможность вызвать все обработчики всех событий:
// emit("*", [...arg]) - вызвать все обработчики событий, можно передать аргументы
// Event Emitter можно перевести как “транслятор” событий.

// class EventEmitter {
//     constructor() {
//     }

//     on(eventName, callback) {
//         // code here
//     }

//     off(eventName, callback) {
//         // code here
//     }

//     once(eventName, callback) {
//         // code here
//     }

//     emit(eventName, args) {
//         // code here
//     }
// }

// class BroadcastEventEmitter extends EventEmitter {
//     emit(eventName, args) {
//         // code here
//     }
// }


// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let h1 = document.querySelector('h1');

// let emitter = new EventEmitter();

// emitter.on('event:name-changed', data => {
//     h1.innerHTML = `New value is: ${data.name}`;
// });

// button.addEventListener('click', () => {
//     emitter.emit('event:name-changed', {name: input.value});
// });




class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName, callback) {
        const event = this.events[eventName]
        if(event) {
            event.push(callback);
        }
        else this.events[eventName] = [callback];
    }
    off(eventName, callback) {
        let event = this.events[eventName];
        if (!event) return;
        const funcIndex = event.indexOf(callback)
        if(funcIndex !== -1) event.splice(funcIndex, 1);
        return this;
    }
    emit(eventName, ...args) {
        const event = this.events[eventName];
        if (event) {
            event.forEach(fn => {
                fn.apply(null, args);
            });
        }
    }
    once(eventName, callback) {
        const onceWrapper = () => {
            this.off(eventName, onceWrapper);
            callback();
        }
        this.on(eventName, onceWrapper);
        return this;
    }
}

// const emitter = new EventEmitter();
// const multiplyTwo = (num) => num * 2;
// const multiplyThree = (num) => num * 3;

// const divideTwo = (num) => num / 2;
// const divideThree = (num) => num / 3;

// Добавляем для события multiplication два обработчка
// emitter.on('multiplication', multiplyTwo);
// emitter.on('multiplication', multiplyThree);

// Вызываем событие multiplication, должны вызвать все обработчики для этого события - multiplyTwo и multiplyThree
// emitter.emit('multiplication', 2);
// console.log(emitter);
// -> 4
// -> 6

// Удалим обработчик multiplyThree для события multiplication
// emitter.off('multiplication', multiplyThree);

// Еще раз вызываем событие multiplication, теперь срабатывает только один обработчик multiplyTwo
// emitter.emit('multiplication', 2);
// console.log(emitter);

// Создадим новое событие divideTwo и добавим два обработчика:
// divideTwo - срабатывает всегда, когда вызывается событие division (до тех пор, пока не удалим этот обработчик)
//  divideThree - сработает только ОДИН раз, во время первого ВЫЗОВА события division
// emitter.on('division', divideTwo);
// emitter.once('division', divideThree);

// Вызываем событие division - срабатывают обработчики divideTwo и divideThree
// emitter.emit('division', 6);
// console.log(emitter);

// -> 3
// -> 2

// Вызываем еще раз событие division - срабатывает ТОЛЬКО обработчики divideTwo
// emitter.emit('division', 6);
// -> 3
//================================================================================================

//================================================================================================
// а так просто парсите обьект в локалсторадж, и пишете в трай кэч,
// если попалет невалидный джейсон то выполнение кода перейдет в кэч,
// там создаетеся пустой обьект с тем же названием и счетчик устанавливается в значение 0,
// далее просто увеличиваете значение счетчика ))) 

function incrementCounter(counterName){
    let obj = {}
    try {
        const getStorage = JSON.parse(localStorage.getItem('counters'))
        if(getStorage){
            obj = getStorage;
            // console.log(3,obj)
        } else throw new Error('counters') 
        if(obj.hasOwnProperty(counterName)) {
            obj[counterName]++
            localStorage.setItem('counters', JSON.stringify(obj))
        }  
        else {
            obj[counterName] = 1
            localStorage.setItem('counters', JSON.stringify(obj));
        }
        return obj[counterName];
    } catch (error) {
        // console.log(1,obj)
        obj[counterName] = 1
        // console.log(1,obj)
        localStorage.setItem('counters', JSON.stringify(obj));
        return obj[counterName];
    }
}
// в localStorage 1 счетчик: bannerClick = 5
// console.log(incrementCounter('bannerClick')); // 6
// console.log(incrementCounter('bannerClose')); // 1
// console.log(incrementCounter('bannerClone')); // 1
// в localStorage 2 счетчика: bannerClick = 6, bannerClose = 1
//================================================================================================

//================================================================================================

class AttemptsLimitExceeded extends Error {
    constructor() {
        super('Max attempts limit exceed');
        this.name = 'AttemptsLimitExceeded';
    }
}

class NotFoundError extends Error {
    constructor() {
        super('Not found');
        this.name = 'NotFoundError';
    }
}

class TemporaryError extends Error {
    constructor() {
        super('TemporaryError');
        this.name = 'TemporaryError';
    }
}

function getRepeatableData(getData, key, maxRequestsNumber, count = 1) {
    try {
        return getData(key)
    } catch (error) {
        if (error instanceof NotFoundError) {
            throw error
        }
        if(error instanceof TemporaryError) {
            if(count === maxRequestsNumber && maxRequestsNumber) {
                throw new AttemptsLimitExceeded
            } else if(count === 5 && maxRequestsNumber) {
                return key
            } else {
                return (getRepeatableData(getData, key, maxRequestsNumber, count + 1))
            }
        }
    }
}

// const getData = (key) => 'hello' + key;
// const getData = (key) => {
//     console.log(key)
//     throw new TemporaryError
// };
// const res = getRepeatableData(getData, '1', 3) // 'hello1'
// console.log(res);
//================================================================================================

//================================================================================================
class ExecutionError extends Error{
    constructor(arg, stack) {
        super()
        this.arg = arg
        this.stack = stack
    }
    getArgData(){
        return this.arg
    }
}
function applyFn(dataArr, callback) {
    let succeeded = []
    let errors = [];
    dataArr.forEach((el) => {
        try {
            succeeded.push(callback(el))
        } catch (error) {
            errors.push(new ExecutionError(el, error.stack))
        }
    })
    return { succeeded, errors }
}
const dataArr = ['{"login":"login","password":"password"}','{{}'];
const callback = JSON.parse;
// const { succeeded, errors } = applyFn(dataArr, callback);

// console.log(succeeded)// [{ login: 'login', password: "password" }],
// console.log(errors) // [ExecutionError],
// console.log(errors[0].getArgData()); // '{{}'
// console.log(errors[1].getArData()); // '{{}'
//================================================================================================

// //================================================================================================
// SumFileSizes
// Напишите функцию, которая принимает имена двух файлов и вызывает функцию,
// переданную третьим параметром и передает ей первым агрументом сумму их размеров.
// Для получения рамзера файла необходимо использовать функцию getFileSize(filename, cb).

let fileSizes = {
    testFile1: 65,
    testFile2: 48,
}

function getFileSize(filename, cb) {
    setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
}

function sumFileSizes(filename1, filename2, cb) {
    getFileSize(filename1, (size1) => {
        getFileSize(filename2, (size2) => {
            cb(size1 + size2);
        });
    })
}
// console.log(sumFileSize('testFile1', 'testFile2'))
//================================================================================================

// //=============================================================================================
// getUsersInfo
// Вам нужно написать функцию, которая получает массив всех пользователей и передает его в функцию коллбэк.
// const { getUserInfo, getUsersIds } = db;
function getUsersIds(callback) {
    setTimeout(() => callback(Object.keys(data)));
};
function getUserInfo(id, callback) {
setTimeout(() => callback(data[id]), 100);
}
// getUsersIds((ids) => {
// console.log(ids); // ['id2', 'id6']
// });

// getUserInfo('someUserId', (userInfo) => {
// console.log(userInfo); // { name: 'Alex', age: 70 }
// });

function getUsersInfo(onLoad) {
    getUsersIds(ids => {
        const users = [];
        let count = 0;
        // console.log(ids)
        ids.forEach((id, index) => {
            getUserInfo(id, (userInfo) => {
                console.log(userInfo)
                users[index] = userInfo;
            });
            count++;
            if(count === ids.length) {
                // console.log(users)
                return users
            }
        })
    })
}
            
// const data = {
//     id2: { name: 'Alex', age: 70 },
//     id6: { name: 'Elon' },
//     id3: {
//         "lastName": "Ivanov",
//         "name": "Pavel",
//         "profession": "programmer",
//     },
//     id4: {
//         "name": "Petr",
//     },
//     id5: {
//         "city": "St. Petersburg",
//         "name": "Lena",
//     },
//     id7: {
//         "age": 25,
//         "hobbys": [
//             "traveling",
//             "macrame"
//         ],
//         "name": "Olesya",
//     }
// };

// console.log(getUsersInfo(data));
// getUsersInfo(data);

// ===========================================================================
// ===========================================================================

// const api = {
//     _employees: [
//         { id: 1, name: 'Alex', salary: 120000 },
//         { id: 2, name: 'Fred', salary: 110000 },
//         { id: 3, name: 'Bob', salary: 80000 },
//     ],
    
//     getEmployees() {
//         return new Promise((resolve) => {
//             resolve(this._employees.slice());
//         });
//     },
    
//     setEmployeeSalary(employeeId, newSalary) {
//         return new Promise((resolve) => {
//             this._employees = this._employees.map((employee) =>
//             employee.id !== employeeId ? employee : {
//                                                         ...employee,
//                                                         salary: newSalary,
//                                                     }
//             );
//             resolve(this._employees.find(({ id }) => id === employeeId));
//         });
//     },
    
//     notifyEmployee(employeeId, text) {
//         return new Promise((resolve) => {
//             resolve(true);
//         });
//     },
    
//     notifyAdmin(error) {
//         return new Promise((resolve) => {
//             resolve(true);
//         });
//     },
    
//     setEmployees(newEmployees) {
//         return new Promise((resolve) => {
//             this._employees = newEmployees;
//             resolve();
//         });
//     },
// };
// Давайте напишем функцию, которая будет увеличивать зарплату сотруднику с наименьшей зарплатой.

// Вам нужно

// Получает данные по всем работникам
// Находит работника с наименьшей зарплатой
// Отправляет запрос на повышение зарплаты этому сотруднику на 20%
// Если запрос прошел успешно - отправить сотруднику уведомление об увеличении ЗП текстом: Hello, <имя>! Congratulations, your new salary is <новая ЗП>!
// Если запрос завершился неудачей - отправить данные об ошибке администратору

function increaseSalary() {
    return new Promise(function(resolve, reject) {
    resolve(api.getEmployees())
    .then((emp) => {
        if (emp.length === 0) { // проверяем, что массив не пустой
            throw new Error('No employees found');
        }
        const [minSalaryEmployee] = emp.reduce(([minEmployee, minSalary], employee) => {
            const { salary } = employee
            return salary < minSalary ? [employee, salary] : [minEmployee, minSalary];
        }, [null, Infinity]);
        const { id, salary: oldSalary } = minSalaryEmployee;
        const increasedSalary = oldSalary * 1.2;
        return { id, salary: increasedSalary };
    })
    .then(({id, salary}) => api.setEmployeeSalary(id, salary))
    .then(({name, id, salary}) => api.notifyEmployee(id, `Hello, ${name}! Congratulations, your new salary is ${salary}!`))
    .catch(error => {
        api.notifyAdmin(error)
        .then(() => {

            return Promise.reject(error);
        })
    })
})
    // Write your code here
}
// console.log(increaseSalary())
// increaseSalary()
// console.log(api.getEmployees()); // Возвращает массив с объектами {id: 343, name: 'Alex', salary: 20000}
// api.setEmployeeSalary(employeeId, newSalary); // Принимает id сотрудника и новую зарплату. Возвращает новые данные по сотруднику.
// api.notifyEmployee(employeeId, text); // Принимает id сотрудника и текст уведомления
// api.notifyAdmin(error); // Принимает ошибку

// ==============================================================================
// ==============================================================================
// PromiseRace
// Напишите функцию, которая принимает массив промисов и возвращает результат того,
// который завершился первым. При этом если первый промис выдал ошибку - необходимо вернуть ее.

function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            promise.then((data) => {
                if (data instanceof Error){
                    reject(data)
                } else if(data) {
                    resolve(data)
                }
            })
        });
    })
    .then((data) => {
        console.log(data)
        return data
    })
    .catch((error) => {
        console.log(error)
        throw new Error;
    })
}

// const firstPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(300), 300)
// );

// const secondPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(400), 400)
// );

// const thirdPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(100), 100)
// );
// const err = new Error('our test error');
// const fourthPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(err), 3000)
// );

// promiseRace([firstPromise, secondPromise, thirdPromise]); // 100
// promiseRace([fourthPromise]); // Error

// ==============================================================================
// ==============================================================================
function promiseAll(promises) {
    return new Promise((resolve, reject, arrProm = []) => {
        if(promises.length === 0) resolve(arrProm)
        let count = 0;
    promises.forEach((promise, index) => {
        promise.then((el) => {
            count += 1;
            arrProm[index] = el
            if(count === promises.length) resolve(arrProm)
            });
        });
    })
};

// const firstPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(300), 300)
// );

// const secondPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(200), 200)
// );

// const thirdPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(100), 100)
// );

// promiseAll([firstPromise, secondPromise, thirdPromise])
//     .then(console.log); // [300, 200, 100]

// ==============================================================================
// ==============================================================================
// increaseSalary
// 1. Получает данные по всем работникам
// 2. Считаем среднее-арифметическое по ЗП
// 3. Тем сотрудникам, у которых ЗП меньше средней - повышаем на 20%, у кого больше - на 10%
// 4. Если запрос прошел успешно - отправлять сотруднику уведомление об увеличении ЗП текcтом: Hello, <имя>! Congratulations, your new salary is <новая ЗП>!
// 5. Если запрос завершился неудачей - отправлять данные ошибки администратору
// 6. По итогу отправить суммарное ЗП работников после повышения в бухгалтерию
// Должна всегда возвращать resolved промис с числовым значением, сколько зарплат успешно повышено.

// async function increaseSalary() {
//     let count = 0;
//     let newBudget = 0;
//     const employeesData = await api.getEmployees();
//     console.log(1)
//     let sumSalary = 0;
//     employeesData.forEach(async employee => {
//         sumSalary = (await employee.salary) + sumSalary
//     });
//     console.log(2)
//     try{
//         const average = Math.trunc(sumSalary / employeesData.length);
//         console.log(3)
//         employeesData.forEach(async employee => {
//             console.log(4)
//             let { id, name, salary } = employee;
//             salary < average ? salary = salary * 1.2 : salary = salary * 1.1;
//             newBudget += salary;
//             console.log(4.5)
//             await api.setEmployeeSalary(id, salary);
//             console.log(4.7)
//             await api.notifyEmployee(id, `Hello, ${name}! Congratulations, your new salary is ${salary}!`);
//             console.log(4.8)
//             // await api.notifyEmployee(id, `Hello, ${name}! Congratulations, your new salary is ${salary}!`);
//             const newNewEmpData = await api.getEmployees()
//             console.log(5)
//             count ++;
//             console.log(6)
//         });
//         const newEmpData = await api.getEmployees()
//         const newEEmpData = await api.getEmployees()
//         await api.sendBudgetToAccounting(newBudget);
//         console.log(7)
//         // console.log('ok')
//     }
//     catch(error){
//         console.log('NOT ok')
//         await api.notifyAdmin(error)
//     }
//     console.log(8)
//     console.log(count)
//         return count;
// }

// async function increaseSalary() {
//     const employeesData = await api.getEmployees()
//     let count = 0;
//     let sumSalary = 0;
//     employeesData.forEach(async employee => { sumSalary = sumSalary + (employee.salary) })
//     const average = Math.trunc(sumSalary / employeesData.length);
//     const allIncreasedSalaryes = employeesData.reduce(async (accum, employee) => {
//         try {
//             employee.salary < average ? employee.salary = employee.salary * 1.2 : employee.salary = employee.salary * 1.1;
//             console.log(average)
//             await api.setEmployeeSalary(employee.id, employee.salary);
//             await api.notifyEmployee(employee.id, `Hello, ${employee.name}! Congratulations, your new salary is ${employee.salary}!`);
//             accum = (await accum) + employee.salary
//             count++;
//         }
//         catch(error) {
//             await api.notifyAdmin(error)
//         }
//         return accum;
//     }, 0)
//     await api.sendBudgetToAccounting(await allIncreasedSalaryes)
//     return count;
// }

// const api = {
//     _employees: [
//         { id: 1, name: 'Alex', salary: 120000 },
//         { id: 2, name: 'Fred', salary: 110000 },
//         { id: 3, name: 'Bob', salary: 80000 },
//     ],

//     getEmployees() {
//         return new Promise((resolve) => {
//             resolve(this._employees.slice());
//         });
//     },

//     setEmployeeSalary(employeeId, newSalary) {
//         return new Promise((resolve) => {
//             const updatedEmployees = this._employees.map((employee) =>
//                 employee.id !== employeeId
//                     ? employee
//                     : {
//                         ...employee,
//                         salary: newSalary,
//                     }
//             );
//             this._employees = updatedEmployees;
//             resolve(this._employees.find(({ id }) => id === employeeId));
//             // throw new Error
//         });
//     },

//     notifyEmployee(employeeId, text) {
//         return new Promise((resolve) => {
//             resolve(true);
//             // resolve(false);
//         });
//     },

//     notifyAdmin(error) {
//         return new Promise((resolve) => {
//             resolve();
//         });
//     },

//     setEmployees(newEmployees) {
//         return new Promise((resolve) => {
//             this._employees = newEmployees;
//             resolve();
//         });
//     },

//     sendBudgetToAccounting(newBudget) {
//         return new Promise((resolve) => {
//             resolve();
//         });
//     },
// };

// increaseSalary()

// api.getEmployees(); // Возвращает массив с объектами {id: 343, name: 'Alex', salary: 20000}
// api.setEmployeeSalary(employeeId, newSalary); // Принимает id сотрудника и новую зарплату. Возвращает новые данные по сотруднику.
// api.notifyEmployee(employeeId, text); // Принимает id сотрудника и текст уведомления
// api.notifyAdmin(error); // Принимает ошибку
// api.sendBudgetToAccounting(summarySalaries); // Принимает суммарную ЗП

//============================================================================================
//============================================================================================
// PromisesInSeries
// Напишите функцию, которая принимает массив асинхронных функций
// и последовательно(следующая начинается, когда закончилась предыдущая) вызывает их,
// передавая в аргументы результат вызова предыдущей функции.

async function promisesInSeries(asyncFns) {
    let res = undefined;
    for(let item of asyncFns) {
        res = await item(res)
    }
    return res
}
const firstPromise = () =>
    new Promise((resolve) => setTimeout(() => resolve(300), 300));

const secondPromise = () =>
    new Promise((resolve) => setTimeout(() => resolve(200), 200));

const thirdPromise = () =>
    new Promise((resolve) => setTimeout(() => resolve(100), 100));

console.log(promisesInSeries([firstPromise, secondPromise, thirdPromise]));
// promisesInSeries([firstPromise, secondPromise, thirdPromise]);
// Выполнит resolve(300) через 300 мс, потом resolve(200) через 200 мс, потом resolve(100) через 100 мс