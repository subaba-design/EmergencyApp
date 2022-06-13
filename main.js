(() => {
            const gameState = {
                quizzes         : [],
                currentIndex    : 0,
                numberOfCorrects: 0
            };


    const selectionContainer  = document.getElementById('selects');
    const questionElement  = document.getElementById('question');


    window.addEventListener('load', (event) => {
        homeSelects();
    });


    const homeSelects = async () => {
        removeSelects();

        const listSelect = document.createElement('li');
        listSelect.textContent = '一覧';
        selectionContainer.appendChild(listSelect);

        listSelect.addEventListener('click', (event) => {
            // 「一覧」ボタンを押したときの挙動
            console.log('一覧！');
        });

        const randomSelect = document.createElement('li');
        randomSelect.textContent = 'ランダム';
        selectionContainer.appendChild(randomSelect);

        randomSelect.addEventListener('click', (event) => {
            // 「ランダム」ボタンを押したときの挙動
            console.log('ランダム');
        });
    };


            const setNextQuiz = () => {
                questionElement.textContent = '';
                removeAllAnswers();

                if (gameState.currentIndex < gameState.quizzes.length) {
                    const quiz = gameState.quizzes[gameState.currentIndex];
                    makeQuiz(quiz);
                } else {
                    finishQuiz();
                }
            };


            const finishQuiz = () => {
                questionElement.textContent = `${gameState.numberOfCorrects}/${gameState.quizzes.length} corrects`;
                restartButton.hidden        = false;
            };


    const removeSelects = () => {
        while (selectionContainer.firstChild) {
            selectionContainer.removeChild(selectionContainer.firstChild)
        }
    };


            const makeQuiz = (quiz) => {
                const answers = buildAnswers(quiz);

                questionElement.textContent = unescapeHTML(quiz.question);
                answers.forEach((answer, index) => {
                    const liElement = document.createElement('li');
                    liElement.textContent = unescapeHTML(answer);
                    answersContainer.appendChild(liElement);

                    liElement.addEventListener('click', (event) => {
                        const correctAnswer = unescapeHTML(quiz.correct_answer);
                        if (correctAnswer === liElement.textContent) {
                            gameState.numberOfCorrects++;
                            alert('Correct answer!!');
                        } else {
                            alert(`Wrong answer... (The correct answer is "${correctAnswer}")`);
                        }

                        gameState.currentIndex++;
                        setNextQuiz();
                    });
                });

            };


            const buildAnswers = (quiz) => {
                const answers = [
                    quiz.correct_answer,
                    ...quiz.incorrect_answers
                ];

                return shuffle(answers);
            };


            const shuffle = (array) => {
                const copiedArray = array.slice();

                for (let i = copiedArray.length - 1; i >= 0; i--){
                    const rand = Math.floor( Math.random() * ( i + 1 ) );
                    [copiedArray[i], copiedArray[rand]] = [copiedArray[rand], copiedArray[i]];
                }

                return copiedArray;
            };


            const unescapeHTML = (str) => {
                const div = document.createElement("div");
                div.innerHTML = str.replace(/</g,"&lt;")
                                    .replace(/>/g,"&gt;")
                                    .replace(/ /g, "&nbsp;")
                                    .replace(/\r/g, "&#13;")
                                    .replace(/\n/g, "&#10;");

                return div.textContent || div.innerText;
            };


})();