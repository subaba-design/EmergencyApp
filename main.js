(() => {
    const quizStatus = {
        statusNumber: 0,
        quizData    : []
    };

    const genchikyuukouFlow = {
        name: '現地急行の場合',
        type: 'quiz',
        flow: [
            ['Q.まず現地に着いたら？', '無線「現着、確認に入ります」'],
            ['Q.無線で報告することの1つ目は？', '年齢'],
            ['Q.無線で報告することの2つ目は？', '性別'],
            ['Q.無線で報告することの3つ目は？', '症状'],
            ['Q.傷病者の症状を報告するときのポイントの1つ目は？', '意識・呼吸の有無'],
            ['Q.傷病者の症状を報告するときのポイントの2つ目は？', 'その他怪我の程度と箇所'],
            ['Q.無線で報告することの4つ目は？', '体温'],
            ['Q.無線で報告することの5つ目は？', '既往歴（これまでかかった病気の歴）'],
            ['Q.無線で報告することの6つ目は？', 'お連れ様の有無'],
            ['Q.無線で報告することの7つ目は？', 'FAご利用 or 救急要請のどちらか？（お連れ様やご本人に確認する）'],
            ['Q.FA利用の時は？', '必ず検温'],
            ['Q.即時救急要請のポイントは？', '①呼吸無し、②意識無し（意識混濁を含む）、③痙攣、多量の出血、④後・側頭部を強打（←これはお連れ様やご本人に確認する）'],
            ['（Q.無線で呼ばれたとき、対応中だったら？）', '（「対応中です」と一言返す）']
        ]
    };
    
    const kurumaisutouwomotteikuFlow = {
        name: '車椅子等を持っていく場合',
        type: 'quiz',
        flow: [
            ['（Q.持っていくものは？）', '（AED、救急セット、車椅子、毛布、体温計）'],
            ['Q.現地に着いたら？', '無線「現着、確認に入ります」'],
            ['（Q.先着者と後着者での役割分担は？）', '（先着者：傷病者対応　後着者：無線対応）']
        ]
    };
    
    const kyuukyuuyouseiattendoFlow = {
        name: '救急要請の場合',
        type: 'quiz',
        flow: [
            ['Q.まず現地に着いたら？', '無線「〇〇荷捌、配置完了です」'],
            ['（Q.EV確保の際のポイントは？）', '（寝台が入るサイズの、広いEVを確保すること。広いEVは、扉が2つのタイプ）'],
            ['Q.救急車が荷捌所に入り、救急隊と合流したら？', '無線「救急車入庫、これよりアテンド開始」'],
            ['Q.救急隊が傷病者の元に着いたら？', '無線「救急隊現着です」'],
            ['Q.アテンド後にやることは？', 'EV確保、無線「〇〇荷捌エレベーター、確保済みです」'],
            ['Q.傷病者が救急車の中に入ったら？', '無線「乗り込み完了」'],
            ['Q.現地離脱するときは？', '無線「あとは交通の方に引き継ぎます」']
        ]
    };

    const syoubyousyataiou = {
        name: '傷病者対応',
        type: 'select',
        flow: [
            ['現地急行の場合'        , genchikyuukouFlow],
            ['車椅子等を持っていく場合', kurumaisutouwomotteikuFlow],
            ['救急要請の場合'        , kyuukyuuyouseiattendoFlow]
        ]
    };

    const emergencySelection = {
        name: '一覧',
        type: 'select',
        flow: [
            ['傷病者対応', syoubyousyataiou],
            ['トイレ呼出発報'],
            ['権利主張お客様対応'],
            ['EV故障発報'],
            ['EV呼出発報'],
            ['ESC緊急停止'],
            ['応急手当'],
            ['地震発生'],
            ['停電発生']
        ]
    };





















    

    const subTitleElement = document.getElementById('sub-title');
    const selectionContainer  = document.getElementById('selects');
    const questionElement  = document.getElementById('question');


    window.addEventListener('load', (event) => {
        homeSelects();
    });


    const homeSelects = () => {
        removeAllSelects();

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
            liElement.textContent = element[0];
            selectionContainer.appendChild(liElement);

            if (obj.type === 'quiz') {
                const answerContainer = document.createElement('ul');

                const answerElement = document.createElement('li');
                answerElement.textContent = element[1];
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
    };


    const quizStart = (obj) => {
        removeAllSelects();
        quizStatus.statusNumber = 0;
        quizStatus.quizData     = obj.flow;

        console.log('クイズスタート！');
        console.log('quizStatus.quizData? : ', quizStatus.quizData);

        subTitleElement.textContent = 'クイズ：' + obj.name;
        quizAction();
    };

    const setNextQuiz = () => {
        removeAllSelects();
        
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

        const questionText = quizStatus.quizData[quizStatus.statusNumber][0];
        const answerText   = quizStatus.quizData[quizStatus.statusNumber][1];

        questionElement.textContent = questionText;

        const nextButton = document.createElement('button');
        nextButton.textContent = '次へ';
        selectionContainer.appendChild(nextButton);

        nextButton.addEventListener('click', (event) => {
            alert(answerText);
            quizStatus.statusNumber++;
            setNextQuiz();
        });  
    };
})();