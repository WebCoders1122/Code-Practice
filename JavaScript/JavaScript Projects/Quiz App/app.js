let questionArray = [
    {
        'que': 'Who is the last Prophet of ALLAH?',
        'a': 'Muhammad PBUH',
        'b': 'MOOSA A.S',
        'c': 'ADAM A.S',
        'd': 'IBRAHIM A.S',
        'correct': 'a'

    },
    {
        'que': 'Name of first wife of Prophet Muhammad PBUH is',
        'a': 'Fatima R.A',
        'b': 'Ayesha R.A',
        'c': 'Khadija R.A',
        'd': 'Hafsa R.A',
        'correct': 'c'

    },
    {
        'que' : 'Word Zakat occurs in the Holy Quran for how many times?',
        'a' : '29',
        'b' : '30',
        'c' : '31',
        'd' : '32',
        'correct' : 'd'

    },
    {
        'que' : 'In which Surah of the Holy Quran Fasting is commanded?',
        'a' : 'Al Baqarah',
        'b' : 'Al Nisa',
        'c' : 'Al Toba',
        'd' : 'Al Qayamah',
        'correct' : 'a'

    },
    {
        'que' : 'A Verse of the Holy Quran indicates the name of?',
        'a' : 'Hazrat Abu Bakar',
        'b' : 'Hazrat Umar',
        'c' : 'Hazrat Ayesha',
        'd' : 'Hazrat Zaid',
        'correct' : 'd'

    },
    {
        'que' : 'Name the wife of Prophet Muhammad (PBUH) who was daughter of Hazrat Omar Farooq (R.A)?',
        'a' : 'Hazrat Ayesha',
        'b' : 'Hazrat Hafsa',
        'c' : 'Hazrat Um e Habiba',
        'd' : 'Hazrat Amina',
        'correct' : 'b'

    },
    {
        'que' : 'At the age of __________ years, Prophet Muhammad (PBUH) married Hazrat Bibi Khadija (R.A) ?',
        'a' : '33',
        'b' : '40',
        'c' : '25',
        'd' : '50',
        'correct' : 'c'

    },
    {
        'que' : 'First migration of the Companions and relatives of the Prophet Muhammad (PBUH) was to?',
        'a' : 'Habsha',
        'b' : 'Madina',
        'c' : 'Makkah',
        'd' : 'None of these',
        'correct' : 'a'

    },
    {
        'que' : 'To which Prophet the Zabur was revealed by Allah?',
        'a' : 'Prophet Ibraheem (A.S)',
        'b' : 'Prophet Essa (A.S)',
        'c' : 'Prophet Moosa (A.S)',
        'd' : 'Prophet Dawood (A.S)',
        'correct' : 'd'

    },
    {
        'que' : 'Which companion of Prophet (PBUH) was awarded with the title of "The Sword of Allah)"',
        'a' : 'Hazrat Abu Bakr Siddique (R.A)',
        'b' : 'Hazrat Omar Farooq (R.A)',
        'c' : 'Hazrat Ali Al-Murtaza (R.A)',
        'd' : 'Hazrat Khalid bin Waleed (R.A)',
        'correct' : 'd'

    },
    {
        'que' : 'What was the relation between Prophet Ismail (A.S) and Prophet Ishaq (A.S)',
        'a' : 'They were Cousins',
        'b' : 'Father and son',
        'c' : 'They were Brothers',
        'd' : 'Father and son',
        'correct' : 'c'

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
        index = Math.floor(Math.random()* i)
        let temp = array[index];
        array[index] = array[i];
        array[i]= temp;
    }
    return array;
}

const questions = shuffle(questionArray);
console.log(questionArray);

let questionBox = document.getElementById('question');
let optInput = document.querySelectorAll('.option');
let index = 0;
let totalQue = questions.length;
let correct = 0, incorrect = 0;



// 01 function to load question
const loadQuestion = () => {
    if (index == totalQue) {
        endQuiz();
    }
    reset1();
    const data = questions[index];
    questionBox.innerText = `Q ${index + 1}: ${data.que}`;
    optInput[0].nextElementSibling.innerText = data.a;
    optInput[1].nextElementSibling.innerText = data.b;
    optInput[2].nextElementSibling.innerText = data.c;
    optInput[3].nextElementSibling.innerText = data.d;
    // console.log(data)
};


// 02 function for "submit button" to get answer of user
const submitAns = () => {
    optInput.forEach((e)=>{
        if (e.checked) {
            getAns(e.value)
        }
    }
    )
};

//03 fuction to check the value is right or wrong and load next question
const getAns = (item) => {
    const data = questions[index];
    if (item === data.correct) {
        correct++;
        console.log(correct)
    } else {
        incorrect++
        console.log(incorrect)
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
    optInput.forEach((e)=>{
        e.checked = false;
    }
    )
};


// initial call
loadQuestion();
// console.log()