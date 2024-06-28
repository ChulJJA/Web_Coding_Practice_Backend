console.log('logging...');
console.clear();

//log level
console.log('log'); // dev
console.info('info'); // info
console.warn('warn'); // warning
console.error('error'); // error, user error, system error

//assert
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

//print object
const student = { name: 'chul', age: 25, company: {name: 'AC'}};
console.log(student);
console.table(student);
console.dir(student, {showHiiden: true, colors: false, depth: 2});

//measuring time
console.time('for loop');
for (let i = 0; i < 10; ++i){
    ++i;
}
console.timeEnd('for loop');

//counting
function a() {
    console.count('a function');
}
a();
console.countReset('a function');
a();

//trace
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trace();
}
f1();