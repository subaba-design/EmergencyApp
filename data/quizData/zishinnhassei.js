const sokuhouNashiUnder2Kanshibantaiou = {
    name: '監視盤対応（速報なし震度2以下）',
    type: 'quiz',
    flow: [
        ['まずやることは？', '監視盤のEV・ESCの赤色運転ランプを確認'],
        ['ランプが消えて地震管制が点灯していたら？', '防災内で大声で共有'],
        ['EVが地震管制だったら？', '①受話器にてお声がけ、お客様の有無を確認<br/>②確認内容を防災内で大声で共有<br/>（受話器越しに状況がわかった（中のお客と連絡が取れた）場合のみ、現地確認はいらない）'],
        ['ESCが地震管制だったら？', '<span class="strong-red">ESC緊急停止対応</span>へ']
    ],
    firstAttention: '【地震発生】監視盤対応（速報なし震度2以下）'
};


const sokuhouNashiUnder2Genchitaiou = {
    name: '現地対応（速報なし震度2以下）',
    type: 'quiz',
    flow: [
        ['まずやることは？', '館内全域EV・ESCの確認'],
        ['EV・ESC確認とともにやることは？', '施設全般の異常の有無を確認'],
        ['確認後やることは？', '無線「（報告）」']
    ],
    firstAttention: '【地震発生】現地対応（速報なし震度2以下）'
};


const sokuhouNashiUnder2Housoutaiou = {
    name: '放送対応（速報なし震度2以下）',
    type: 'quiz',
    flow: [
        ['まずやることは？', '<span class="strong-red">館内放送はなし！</span>']
    ],
    firstAttention: '【地震発生】放送対応（速報なし震度2以下）'
};


const sokuhouNashiOver3Kanshibantaiou = {
    name: '監視盤対応（速報なし震度3以上）',
    type: 'quiz',
    flow: sokuhouNashiUnder2Kanshibantaiou.flow,
    firstAttention: '【地震発生】監視盤対応（速報なし震度3以上）'
};


const sokuhouNashiOver3Genchitaiou = {
    name: '現地対応（速報なし震度3以上）',
    type: 'quiz',
    flow: [
        ['まずやることは？', '<span class="strong-red">ZA-01、3、4のいずれかの鍵を持参</span>し、館内全域EV・ESCの確認'],
        ['EV・ESC確認とともにやることは？', '施設全般の異常の有無を確認'],
        ['確認後やることは？', '無線「（報告）」']
    ],
    firstAttention: '【地震発生】現地対応（速報なし震度3以上）'
};


const sokuhouNashiOver3Housoutaiou = {
    name: '放送対応（速報なし震度3以上）',
    type: 'quiz',
    flow: [
        ['まずやることは？', '館内放送を実施するか確認<br/>（OPCが判断、<span class="strong-red">ただし震度4なら自動で放送が開始</span>される）'],
        ['放送実施になったら？', '一斉ボタン（黄色ボタン）を押す'],
        ['一斉ボタン（黄色ボタン）を押したら？', '放送分例（緑表紙）に従い放送実施']
    ],
    firstAttention: '【地震発生】放送対応（速報なし震度3以上）'
};


const kinnkyuuzishinnsokuhoujushinKanshibantaiou = {
    name: '監視盤対応（緊急地震速報受信）',
    type: 'quiz',
    flow: [
        ...sokuhouNashiUnder2Kanshibantaiou.flow,
        ['震度が大きくなったら？', '<span class="strong-red">全館避難指示等全館地区隊</span>を巻き込んでの対応になることも']
    ],
    firstAttention: '【地震発生】監視盤対応（緊急地震速報受信）'
};


const kinnkyuuzishinnsokuhoujushinGenchitaiou = {
    name: '現地対応（緊急地震速報受信）',
    type: 'quiz',
    flow: [
        ...sokuhouNashiOver3Genchitaiou.flow,
        ['震度が大きくなったら？', '<span class="strong-red">全館避難指示等全館地区隊</span>を巻き込んでの対応になることも']
    ],
    firstAttention: '【地震発生】現地対応（緊急地震速報受信）'
};


const kinnkyuuzishinnsokuhoujushinHousoutaiou = {
    name: '放送対応（緊急地震速報受信）',
    type: 'quiz',
    flow: [
        ['まずやることは？', '一斉ボタン（黄色ボタン）を押す'],
        ['一斉ボタン（黄色ボタン）を押したら？', '放送分例（<span class="strong-red">緊急地震速報受信対応マニュアル</span>）に従い放送実施'],
        ['震度が大きくなったら？', '<span class="strong-red">全館避難指示等全館地区隊</span>を巻き込んでの対応になることも']
    ],
    firstAttention: '【地震発生】放送対応（緊急地震速報受信）'
};

const sokuhouNashiUnder2 = {
    name: '速報なしで、震度2以下の場合',
    type: 'select',
    flow: [
        ['監視盤対応（速報なし震度2以下）', sokuhouNashiUnder2Kanshibantaiou],
        ['現地対応（速報なし震度2以下）', sokuhouNashiUnder2Genchitaiou],
        ['放送対応（速報なし震度2以下）', sokuhouNashiUnder2Housoutaiou]
    ]
};


const sokuhouNashiOver3 = {
    name: '速報なしで、震度3以上の場合',
    type: 'select',
    flow: [
        ['監視盤対応（速報なし震度3以上）', sokuhouNashiOver3Kanshibantaiou],
        ['現地対応（速報なし震度3以上）', sokuhouNashiOver3Genchitaiou],
        ['放送対応（速報なし震度3以上）', sokuhouNashiOver3Housoutaiou]
    ]
};


const kinnkyuuzishinnsokuhoujushin = {
    name: '緊急地震速報受信',
    type: 'select',
    flow: [
        ['監視盤対応（緊急地震速報受信）', kinnkyuuzishinnsokuhoujushinKanshibantaiou],
        ['現地対応（緊急地震速報受信）', kinnkyuuzishinnsokuhoujushinGenchitaiou],
        ['放送対応（緊急地震速報受信）', kinnkyuuzishinnsokuhoujushinHousoutaiou]
    ]
};