function* main() {
    var x = yield 1;
    var y = yield 2;
    var z = yield 3;
}

var g = main();
console.info(typeof g);

console.log(g.next());
console.log(g.next());
console.log(g.next());