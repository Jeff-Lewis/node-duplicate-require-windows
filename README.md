### Node loading a module twice on Windows

#### Problem:
Nodejs modules can be loaded twice on Windows due to a change in the drive letter casing.

Using only relative paths, this repo shows how the drive letter can change using `require()`.

Uppercase
`require.resolve('./moduleA')  C:\temp\node_6624\moduleA.js`

changes to

Lowercase `require.resolve('./../moduleA') c:\temp\node_6624\moduleA.js`


##### Demonstration of how node modules can be loaded twice on Windows under the following circumstances:

1) command line launching initial node module must use uppercase drive letter, ex. `C:\server.js`
2) There must be a circular reference between modules somewhere along the dependency chain where
a child module (in this example moduleB) must be require()'ed with lowercase drive letter, ex. `require(path.join('dir','moduleB'))`

#####
1) Using Windows, clone project
2) run `run.bat`

You will see at the end of the console output, `moduleA.js` was loaded twice.

```
*** require.cache ***
[ 'C:\\temp\\node_6624\\test.js',
  'C:\\temp\\node_6624\\moduleA.js',
  'c:\\temp\\node_6624\\childFolder\\moduleB.js',
  'c:\\temp\\node_6624\\moduleA.js' ]
```

See test.js for how to reproduce

##### How often does this happen?

1) WebStorm IDE by default uses uppercase letters in the command line when debugging node.
2) Loading modules by way of path.join() is common in many frameworks.

##### Why should this be fixed?

The case of the drive letter on Windows should not affect the node run-time and how modules are loaded.

##### References:
<https://github.com/nodejs/node/issues/6624>