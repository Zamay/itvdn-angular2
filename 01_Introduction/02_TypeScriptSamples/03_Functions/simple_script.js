// Определяем функцию Add, которая принимает два числовых параметра и возвращает число.
function Add(a, b) {
    var sum = a + b;
    return sum;
}
console.log(Add(10, 20));
// Строки кода ниже содержат ошибку. Напротив каждой строки находиться ошибка, которую выдаст tsc компилятор
//console.log(Add(10, "20"));     // Argument of type 'string' is not assignable to parameter of type 'number'
//console.log(Add(10));           // Supplied parameters do not match any signature of call target.
//let test: string = Add(1, 2);   // Supplied parameters do not match any signature of call target. 
//# sourceMappingURL=simple_script.js.map