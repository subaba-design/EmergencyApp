const bousainaihappouEVkosyouFlow = {
    name: '防災内で発報した場合',
    type: 'quiz',
    flow: [
        ['防災内で、EVかESC発報（音は同じ）したら？', '「発報！！」と叫び、停止ボタンを押しに行く'],
        ['どのボタンを押す？', '受話器ボタン、EV・ESCのブザーリセットボタンを手当たり次第押す'],
        ['ボタンを押したら？', '「〇〇（発報場所）、〇〇（故障原因）です！！」と叫ぶ'],
        ['叫んだ後にやることは？', '受話器にてEV内に呼びかけ'],
        ['呼びかける文言は？', '「こちら防災センターです。お客様非常呼び出しボタンが押されましたが、何かございましたか？」'],
        ['閉じ込め事案だった場合は？', '再度防災内で閉じ込めであることを共有し、「係員がすぐに対応する」と、不安を取り除くように随時声かけ'],
        ['EVに異常がある場合は？', '再度防災内で異常があることを共有し、すみやかにお客様に降りてもらう'],
        ['お客様の返答がない場合は？', '応答があるまで２、3回呼びかけ、再度防災内で返答がないことを共有し、誰かに現地急行してもらう'],
        ['呼びかけ結果がその他の場合は？', '呼びかけによる確認の結果を再度防災内で共有'],
        ['（現地急行が不要になる条件は？）', '（受話器での対応で、お客様とEV内の異常が無いことが確認できたとき）']
    ],
    firstAttention: '防災内、EVかESC発報！（音は同じ）'
};


const EVkosyouGenchikyuukouFlow = {
    name: '現地急行の場合',
    type: 'quiz',
    flow: [
        ['まず現地に着いたら？', '無線「現着、確認に入ります」'],
        ['状況を確認したら？<br/>（例：扉が開いたり閉まったりを繰り返している。扉が閉まらない。など）', '無線「（報告）」'],
        ['閉じ込め事案だった場合は？', '防災センター本部の指示に従い行動する'],
        ['傷病者がいた場合は？', '無線「傷病者がおられます！確認に入ります！」<br/><span class="strong-red">傷病者対応に移行</span>']
    ],
    firstAttention: 'EV故障発報！現地急行！'
};