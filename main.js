const quizStatus = {
    statusNumber: 0,
    quizData    : [],
    question    : '',
    answer      : '',
    nextToggle  : false
};


const subTitleElement     = document.getElementById('sub-title');
const questionElement     = document.getElementById('question');
const partitionElement    = document.getElementById('partition');
const answerElement       = document.getElementById('answer');
const selectionContainer  = document.getElementById('selects');
const nextButton          = document.getElementById('next-button');



window.addEventListener('load', (event) => {
    homeSelects();  
});


const homeSelects = () => {
    removeAllSelects();

    nextButton.hidden = true;
    partitionElement.hidden = true;

    const listSelectButton = document.createElement('li');
    listSelectButton.textContent = '一覧';
    selectionContainer.appendChild(listSelectButton);

    listSelectButton.addEventListener('click', (event) => {
        showTheSelection(emergencySelection);
    });

    const randomSelectButton = document.createElement('li');
    randomSelectButton.textContent = 'ランダム';
    selectionContainer.appendChild(randomSelectButton);

    randomSelectButton.addEventListener('click', (event) => {
        // 「ランダム」ボタンを押したときの挙動
        alert('ランダム準備中！');
    });
};


const showTheSelection = (obj) => {
    removeAllSelects();

    subTitleElement.textContent = subTitleElement.textContent + ' /' + obj.name;

    obj.flow.forEach((element, index) => {
        const liElement = document.createElement('li');
        const elementNumber = index + 1;
        liElement.textContent = elementNumber + '. ' + element[0];
        selectionContainer.appendChild(liElement);

        if (obj.type === 'quiz') {
            const answerContainer = document.createElement('ul');

            const answerElement = document.createElement('li');
            answerElement.innerHTML = '→ ' +  element[1];
            answerContainer.appendChild(answerElement);

            liElement.appendChild(answerContainer);
        } else if (!element[1] || element[1].type === 'select') {
            liElement.addEventListener('click', (event) => {
                if (element[1]) {
                    showTheSelection(element[1]);
                } else {
                    alert('準備中！');
                }
            });
            
        } else if (element[1].type === 'quiz') {
            const preQuizElementContainer = document.createElement('ul');

            const preQuizElementForSelect = document.createElement('li');
            preQuizElementForSelect.textContent = 'クイズを一覧表示';
            preQuizElementContainer.appendChild(preQuizElementForSelect);

            preQuizElementForSelect.addEventListener('click', (event) => {
                showTheSelection(element[1]);
            });

            const preQuizElementForStart = document.createElement('li');
            preQuizElementForStart.textContent  = 'クイズを始める';
            preQuizElementContainer.appendChild(preQuizElementForStart);

            preQuizElementForStart.addEventListener('click', (event) => {
                quizStart(element[1]);
            });

            liElement.appendChild(preQuizElementContainer);
        }
    });
};


const removeAllSelects = () => {
    while (selectionContainer.firstChild) {
        selectionContainer.removeChild(selectionContainer.firstChild)
    }
    answerElement.innerHTML = '';
};


const quizStart = (obj) => {
    removeAllSelects();
    quizStatus.statusNumber = 0;
    quizStatus.quizData     = obj.flow;

    console.log('クイズスタート！');
    console.log('quizStatus.quizData? : ', quizStatus.quizData);

    subTitleElement.textContent = 'クイズ：' + obj.name;
    partitionElement.hidden = false;
    quizAction();
};


const setNextQuiz = () => {
    removeAllSelects();
    quizStatus.nextToggle = false;

    if (quizStatus.quizData.length > quizStatus.statusNumber) {
        quizAction();
    } else {
        alert('クイズ終了！！');
        subTitleElement.textContent = ''
        questionElement.textContent = '';
        homeSelects();
    }
};


const quizAction = () => {
    console.log('quizStatus.statusNumber? :',quizStatus.statusNumber );

    quizStatus.question = quizStatus.quizData[quizStatus.statusNumber][0];
    quizStatus.answer   = quizStatus.quizData[quizStatus.statusNumber][1];

    questionElement.textContent = 'Q. ' + quizStatus.question;
    answerElement.innerHTML = '';

    nextButton.hidden = false;
};

nextButton.addEventListener('click', (event) => {
    if (quizStatus.nextToggle) {
        quizStatus.statusNumber++;
        setNextQuiz();  
    } else {
        answerElement.innerHTML = 'A. ' + quizStatus.answer;
        quizStatus.nextToggle = true;
    }
});  