
console.log('module B loading');

console.log('require.resolve(\'./../moduleA\')', require.resolve('./../moduleA'));

var moduleA = require('./../moduleA');
