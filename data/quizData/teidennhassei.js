const syunnziTeidennKanshibantaiou = {
    name: '監視盤対応（瞬時停電）',
    type: 'quiz',
    flow: [
        ['まずやることは？', '監視盤のEV・ESCの赤色運転ランプを確認'],
        ['監視盤を確認したら？', '異常の有無を防災内で大声で共有']
    ],
    firstAttention: '【停電発生】監視盤対応（瞬時停電）'
};


const syunnziTeidennGenchitaiou = {
    name: '現地対応（瞬時停電）',
    type: 'quiz',
    flow: [
        ['まずやることは？', '館内全域EV・ESCの確認'],
        ['EV・ESC確認とともにやることは？', '施設全般の異常の有無を確認'],
        ['確認後やることは？', '無線「（報告）」']
    ],
    firstAttention: '【停電発生】現地対応（瞬時停電）'
};


const kanzennTeidennKanshibantaiou = {
    name: '監視盤対応（完全停電）',
    type: 'quiz',
    flow: syunnziTeidennKanshibantaiou.flow,
    firstAttention: '【停電発生】監視盤対応（完全停電）'
};


const kanzennTeidennGenchitaiou = {
    name: '現地対応（完全停電）',
    type: 'quiz',
    flow: [
        ['まずやることは？', '<span class="strong-red">ZA08の鍵を持参</span>し、館内全域EV・ESCの確認'],
        ['EV・ESC確認とともにやることは？', '施設全般の異常の有無を確認'],
        ['確認後やることは？', '無線「（報告）」']
    ],
    firstAttention: '【停電発生】現地対応（完全停電）'
};


const kanzennTeidennHousoutaiou = {
    name: '放送対応（完全停電）',
    type: 'quiz',
    flow: [
        ['まずやることは？', '<span class="strong-red">非常ボタン（赤色ボタン）</span>を押す<br/>（非常ボタンは、完全停電や火災など、通常電源が使えず、非常電源を使うときに押す）'],
        ['非常ボタン（赤色ボタン）を押したら？', 'チャイム１ボタンを押す'],
        ['チャイム１ボタンを押したら？', 'オレンジボタン（緊急優先一斉ボタン）を押す'],
        ['オレンジボタン（緊急優先一斉ボタン）を押したら？', 'プレストボタンを押して、放送分例（黄色表紙）に従い放送実施']
        ['放送分例（黄色表紙）を読み終えたら？', 'チャイム２ボタンを押す'],
        ['チャイム２ボタンを押したら？', '非常復旧ボタン（白四角ボタン。<span class="strong-red">放送復旧ではない！</span>）を押す']
    ],
    firstAttention: '【停電発生】放送対応（完全停電）'
};


const syunnziTeidenn = {
    name: '瞬時停電（照明等数秒で復電）の場合',
    type: 'select',
    flow: [
        ['監視盤対応（瞬時停電）', syunnziTeidennKanshibantaiou],
        ['現地対応（瞬時停電）', syunnziTeidennGenchitaiou]
    ]
};


const kanzennTeidenn = {
    name: '完全停電（落雷・東電事故等を原因とする）の場合',
    type: 'select',
    flow: [
        ['監視盤対応（完全停電）', kanzennTeidennKanshibantaiou],
        ['現地対応（完全停電）', kanzennTeidennGenchitaiou],
        ['放送対応（完全停電）', kanzennTeidennHousoutaiou]
    ]
};