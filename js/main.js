import  * as testCase from './test_export'

console.log(testCase.testMiner(10,8));
console.log(testCase.testNum(3,5));
console.log(testCase.testTwo(8));

console.log(testCase);
const {testMiner, testNum, testTwo} = testCase;
console.log(testMiner(8,3));
console.log(testNum(6,2));
console.log(testTwo(9));