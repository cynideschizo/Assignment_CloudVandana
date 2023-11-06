const readline = require('readline');

function descendingOrder(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }

        if (maxIndex !== i) {
            // Swap arr[i] and arr[maxIndex]
            const temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the array elements separated by spaces: ', (input) => {
    const inputArray = input.trim().split(/\s+/).map(Number);

    descendingOrder(inputArray);

    const sortedArray = inputArray.join(', ');
    console.log("Sorted array in descending order:", sortedArray);
    rl.close();
});
