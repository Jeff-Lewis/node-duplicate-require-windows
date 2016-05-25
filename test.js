
var path = require('path');

//Get baseline paths
console.log(require.main.filename);

writePaths('*** initial paths ***');

var firstA = require('./moduleA');

//writePaths('*** after module A loaded ***');

console.log('');
var uglyFolder = process.cwd() + '/childFolder';
console.log('uglyFolder: ', uglyFolder);
uglyJoin = path.join(uglyFolder, 'moduleB');
console.log('uglyJoin: ', uglyJoin);

var moduleB = require(uglyJoin);

//writePaths('*** after ' + uglyJoin + ' module B loaded ***');

var secondA = require('./moduleA');
//writePaths('*** after module A loaded again***');

console.log('firstA === secondA', firstA === secondA);

console.log('');
console.log('*** require.cache ***');
console.log(Object.keys(require.cache));

function writePaths(msg){
    console.log('');
    console.log(msg);
    console.log('cwd(): ', process.cwd());
    //console.log('__dirname: ', __dirname);    //Always the same
    //console.log('__filename: ', __filename);  //Always the same
    console.log('require.resolve(\'./moduleA\'): ', require.resolve('./moduleA'));
    console.log('require.resolve(\'./childFolder/moduleB\'): ', require.resolve('./childFolder/moduleB'));
}