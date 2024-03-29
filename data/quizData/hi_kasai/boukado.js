const boukado_hi_kasaiGenchitaiou = {
    name: '現地対応',
    type: 'quiz',
    flow: [
        ['まずやることは？', '無線で場所の確認し、現地で<span class="strong-red">火災か非火災かを最優先</span>で確認（傷病者よりも）<br/>無線「現着、非火災確認です」'],
        ['火災か非火災かの確認でのポイントは？', '視覚、嗅覚、聴覚を働かせる<br/>また、その場で取れた情報は逐次防災センターに無線報告する'],
        ['非火災確認の無線を入れたら？', '傷病者の確認<br/>傷病者がいたら、無線「傷病者がおられます！確認に入ります！」<span class="strong-red">傷病者対応に移行</span><br/>傷病者がいなかったら、無線「周辺傷病者有りません」'],
        ['傷病者確認の無線を入れたら？', '閉鎖状態になっている防火戸を確認<br/>（閉鎖状態になりかけて、途中で平常状態に戻っている場合もあり）'],
        ['閉鎖状態になっている防火戸を確認したら？', '無線「防火戸の閉鎖を確認しましたので、設備さん到着まで立哨下賜します」<br/>もし、原因が判明したらそれも報告する'],
        ['設備さんが到着したら？', '無線「現地設備さんが到着し復旧作業をしておりますので立哨続けます」'],
        ['設備さんによる復旧が完了したら？', '無線「現地防火戸設備さんにて復旧完了しましたので対応終了、立哨解除します」']
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
