function reverseSentence(sentence) {
    const words = splitWords(sentence);
    const reversedWords = [];
    const punctuation = ".,!?;";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let lastChar = word[word.length - 1];

        // Check if the last character is punctuation (.,!?;)
        let hasPunctuation = punctuation.includes(lastChar);

        if (hasPunctuation) {
            word = word.slice(0, -1); // Remove punctuation temporarily
        }

        const reversedWord = reverseWord(word);

        if (hasPunctuation) {
            reversedWords.push(reversedWord + lastChar); // Add back punctuation
        } else {
            reversedWords.push(reversedWord);
        }
    }

    return joinWords(reversedWords);
}

function splitWords(sentence) {
    return sentence.split(' ');
}

function reverseWord(word) {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

function joinWords(words) {
    return words.join(' ');
}

function getUserInput() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a sentence: ', (inputSentence) => {
        const reversedSentence = reverseSentence(inputSentence);
        console.log("Reversed sentence:", reversedSentence);
        rl.close();
    });
}

// Call the function to start taking user input
getUserInput();
