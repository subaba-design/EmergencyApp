const boukado_hi_kasaiGenchitaiou = {
    name: '現地対応',
    type: 'quiz',
    flow: [
        ['まずやることは？', '無線で場所の確認し、現地で<span class="strong-red">火災か非火災かを最優先</span>で確認（傷病者よりも）<br/>無線「現着、非火災確認です」'],
        ['火災か非火災かの確認でのポイントは？', '視覚、嗅覚、聴覚を働かせる<br/>また、その場で取れた情報は逐次防災センターに無線報告する'],
        ['非火災確認の無線を入れたら？', '閉鎖状態になっている防火戸を確認<br/>（閉鎖状態になりかけて、途中で平常状態に戻っている場合もあり）'],
        ['閉鎖状態になっている防火戸を確認したら？', '防火戸の現在の状況を防災センターに無線報告']
    ],
    firstAttention: '防火戸作動！現地急行！（非火災）'
};


const boukado_hi_kasai = {
    name: '防火戸作動（非火災）',
    type: 'select',
    flow: [
        ['現地対応', boukado_hi_kasaiGenchitaiou]
    ]
};
