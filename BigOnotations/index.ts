
const students = ["Alice", "Bob", "Charlie", "David", "Eve"];

// O(n)
const searchingStudent = (studentName: string): string | undefined  => { 
    for (let i = 0; i < students.length; i++){
        if (students[i] === studentName) {
            return `Found ${studentName} at index ${i}`;
        }
    }
    return undefined;
};
// O(n)
console.log(searchingStudent("Eve"));




// O(1)
console.log("new algorithm");
const numbers = [1, 2, 3, 4, 5];

const getElement = (arr: number[], index: number) => arr[index]

console.log(getElement(numbers, 3)); 
// O(1)




// O(n^2)
console.log("new algorithm");

function findPairs(arr:number []) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(`Pair: ${arr[i]}, ${arr[j]}`);
        }
    }
}
const numbers2 = [1, 2, 3, 4, 5];

findPairs(numbers2); 
// O(n^2)
console.log("new algorithm");

