let questionArray = [
    {
        '0': 'Who is the last Prophet of ALLAH?',
        '1': 'Muhammad PBUH',
        '2': 'MOOSA A.S',
        '3': 'ADAM A.S',
        '4': 'IBRAHIM A.S',
        '5': '1'

    },
    {
        '0': 'Name of first wife of Prophet Muhammad PBUH is',
        '1': 'Fatima R.A',
        '2': 'Ayesha R.A',
        '3': 'Khadija R.A',
        '4': 'Hafsa R.A',
        '5': '3'

    },
    {
        '0': 'Word Zakat occurs in the Holy Quran for how many times?',
        '1': '29',
        '2': '30',
        '3': '31',
        '4': '32',
        '5': '4'

    },
    {
        '0': 'In which Surah of the Holy Quran Fasting is commanded?',
        '1': 'Al Baqarah',
        '2': 'Al Nisa',
        '3': 'Al Toba',
        '4': 'Al Qayamah',
        '5': '1'

    },
    {
        '0': 'A Verse of the Holy Quran indicates the name of?',
        '1': 'Hazrat Abu Bakar',
        '2': 'Hazrat Umar',
        '3': 'Hazrat Ayesha',
        '4': 'Hazrat Zaid',
        '5': '4'

    },
    {
        '0': 'Name the wife of Prophet Muhammad (PBUH) who was daughter of Hazrat Omar Farooq (R.A)?',
        '1': 'Hazrat Ayesha',
        '2': 'Hazrat Hafsa',
        '3': 'Hazrat Um e Habiba',
        '4': 'Hazrat Amina',
        '5': '2'

    },
    {
        '0': 'At the age of __________ years, Prophet Muhammad (PBUH) married Hazrat Bibi Khadija (R.A) ?',
        '1': '33',
        '2': '40',
        '3': '25',
        '4': '50',
        '5': '3'

    },
    {
        '0': 'First migration of the Companions and relatives of the Prophet Muhammad (PBUH) was to?',
        '1': 'Habsha',
        '2': 'Madina',
        '3': 'Makkah',
        '4': 'None of these',
        '5': '1'

    },
    {
        '0': 'To which Prophet the Zabur was revealed by Allah?',
        '1': 'Prophet Ibraheem (A.S)',
        '2': 'Prophet Essa (A.S)',
        '3': 'Prophet Moosa (A.S)',
        '4': 'Prophet Dawood (A.S)',
        '5': '4'

    },
    {
        '0': 'Which companion of Prophet (PBUH) was awarded with the title of "The Sword of Allah)"',
        '1': 'Hazrat Abu Bakr Siddique (R.A)',
        '2': 'Hazrat Omar Farooq (R.A)',
        '3': 'Hazrat Ali Al-Murtaza (R.A)',
        '4': 'Hazrat Khalid bin Waleed (R.A)',
        '5': '4'

    },
    {
        '0': 'What was the relation between Prophet Ismail (A.S) and Prophet Ishaq (A.S)',
        '1': 'They were Cousins',
        '2': 'Father and son',
        '3': 'They were Brothers',
        '4': 'Father and son',
        '5': '3'

    },
    // {
    //     'que' : '',
    //     'a' : '',
    //     'b' : '',
    //     'c' : '',
    //     'd' : '',
    //     'correct' : ''

    // },
];

const shuffle = (array) => {
    let index;
    for (let i = 0; i < array.length; i++) {
        index = Math.floor(Math.random() * i)
        let temp = array[index];
        array[index] = array[i];
        array[i] = temp;
    }
    return array;
}



// place for different functions
const shuffleOpt = (object) => {
    // let object = questions[0]; for explaination
    let array = [];
    for (const key in object) {
        array.push(object[key])
    }
    let previousCorrect = array[5],
        previousCorrectVlaue = array[previousCorrect];

    let shuffledArray = array.splice(1, 4);
    shuffledArray = shuffle(shuffledArray);

    let newArray = shuffledArray.splice(0, shuffledArray.length)
    newArray.unshift(array[0])
        newArray.forEach(
            function (input) {

                if (input == previousCorrectVlaue) {
                    newArray.push(newArray.indexOf(input))
                }
            }
        )
        let newObject = {...newArray}
        return newObject;
    // console.log(newObject);
}


// let questions = shuffle(questionArray);
let question = shuffle(questionArray);
console.log(question);
let questions = [];
question.forEach(
    (input)=>{
        questions.push(shuffleOpt(input))
    }
)

// console.log(questionArray);


let questionBox = document.getElementById('question');
let optInput = document.querySelectorAll('.option');
let index = 0;
let totalQue = questions.length;
let correct = 0, incorrect = 0;

// 01 function to load question
const loadQuestion = () => {
    if (index == totalQue) {
        endQuiz();
        return;
    }
    reset1();
    let data = questions[index];
    questionBox.innerText = `Q ${index + 1}: ${data[0]}`;
    optInput[0].nextElementSibling.innerText = data[1];
    optInput[1].nextElementSibling.innerText = data[2];
    optInput[2].nextElementSibling.innerText = data[3];
    optInput[3].nextElementSibling.innerText = data[4];
    // console.log(data)
};


// 02 function for "submit button" to get answer of user
const submitAns = () => {
    optInput.forEach((e) => {
        if (e.checked) {
            getAns(e.value)
        }
    }
    )
};

//03 fuction to check the value is right or wrong and load next question
const getAns = (item) => {
    const data = questions[index];
    if (item == data[5]) {
        correct++;
        console.log(data[5]);
        console.log(item)
        console.log("correct")
    } else {
        incorrect++
        console.log(data[5]);
        console.log(item)
        console.log("incorrect")
    }
    index++;
    loadQuestion();
};

// 04 end quiz function
const endQuiz = () => {
    document.getElementById('box').innerHTML =
        `    <div style="text-align: center;">
    <h2>Thank you for Participating</h2>
    <br>
    <h1> ${correct} out of ${totalQue} are correct</h1>
</div>`
};

//05 to reset value
const reset1 = () => {
    optInput.forEach((e) => {
        e.checked = false;
    }
    )
};


// initial call
loadQuestion();
shuffleOpt();

