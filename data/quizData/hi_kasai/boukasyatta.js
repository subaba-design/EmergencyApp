const boukasyatta_hi_kasai_kyouyoubu = {
    name: '共用部（館内通路）防火シャッターが降下した場合',
    type: 'quiz',
    flow: [
        ['まずやることは？', '無線で場所の確認し、現地で<span class="strong-red">火災か非火災かを最優先</span>で確認（傷病者よりも）<br/>無線「現着、非火災確認です」'],
        ['火災か非火災かの確認でのポイントは？', '視覚、嗅覚、聴覚を働かせる<br/>また、その場で取れた情報は逐次防災センターに無線報告する'],
        ['非火災確認の無線を入れたら？', '傷病者の確認<br/>傷病者がいたら、無線「傷病者がおられます！確認に入ります！」<br/><span class="strong-red">傷病者対応に移行</span>'],
        ['傷病者がいなかったら？', '無線「シャッター降下確認、怪我人有りません、お客様広報実施します」<br/>お客様広報を実施し、設備チームのシャッター巻き上げ完了を待つ'],
        ['お客様広報を実施し、設備チームのシャッター巻き上げが完了したら？', '無線「設備チームにてシャッター巻き上げ完了し現場対応終了です」']
    ],
    firstAttention: '防火シャッター降下！現地急行！（非火災、共用部（館内通路）防火シャッターが降下）'
};


const boukasyatta_hi_kasai_tenpo_hanpei = {
    name: '各店舗入口にある防火シャッターが降下、半閉状態（お客様が出られる状態）の場合',
    type: 'quiz',
    flow: boukasyatta_hi_kasai_kyouyoubu.flow,
    firstAttention: '防火シャッター降下！現地急行！（非火災、各店舗入口にある防火シャッターが降下、半閉状態、お客様が出られる）'
};


const boukasyatta_hi_kasai_tenpo_zenpei = {
    name: '各店舗入口にある防火シャッターが降下、完全閉鎖状態（お客様が出られない状態）の場合',
    type: 'quiz',
    flow: [
        ['まずやることは？', '無線で場所の確認し、現地で<span class="strong-red">火災か非火災かを最優先</span>で確認（傷病者よりも）<br/>無線「現着、非火災確認です」'],
        ['火災か非火災かの確認でのポイントは？', '視覚、嗅覚、聴覚を働かせる<br/>また、その場で取れた情報は逐次防災センターに無線報告する'],
        ['非火災確認の無線を入れたら？', '傷病者の確認<br/>傷病者がいたら、無線「傷病者がおられます！確認に入ります！」<br/><span class="strong-red">傷病者対応に移行</span>'],
        ['傷病者がいなかったら？', '無線「シャッター降下確認、怪我人有りません。<br/>店舗前に警備1名を残し店舗バック通路から入って店内状況を確認報告します」><span class="strong-red">二手に分かれる</span>'],
        ['シャッター前にて広報実施者は何をする？', '無線「お客様広報実施します」<br/>お客様広報を実施し、設備チームのシャッター巻き上げ完了を待つ'],
        ['店舗内のお客様対応者は何をする？①', '火災か非火災、傷病者の有無を確認「現地非火災確認、ケガ人いません。店舗従業員様に詳細を伺います」'],
        ['店舗内のお客様対応者は何をする？②', 'お客様の人数等を無線で報告無線「店舗内お客様○組○名様おられますので、お買い物が終了次第バック通路よりアテンドします」<span class="strong-red">一組ずつアテンドし、残留者は従業員と待機してもらう</span>'],
        ['店舗内のお客様対応者は何をする？③', 'お客様クリアを従業員に確認後「従業員様より店舗内お客様クリアを確認しました。店舗内での対応は終了いたします」<br/>→シャッター前広報の応援に向かう'],
        ['設備チームのシャッター巻き上げが完了したら？', '無線「設備チームにてシャッター巻き上げ完了し現場対応終了です」']
    ],
    firstAttention: '防火シャッター降下！現地急行！（非火災、各店舗入口にある防火シャッターが降下、完全閉鎖状態、お客様が出られない）'
};


const boukasyatta_hi_kasai = {
    name: '防火シャッター降下（非火災）',
    type: 'select',
    flow: [
        ['共用部（館内通路）防火シャッターが降下した場合', boukasyatta_hi_kasai_kyouyoubu],
        ['各店舗入口にある防火シャッターが降下、半閉状態（お客様が出られる状態）の場合', boukasyatta_hi_kasai_tenpo_hanpei],
        ['各店舗入口にある防火シャッターが降下、完全閉鎖状態（お客様が出られない状態）の場合', boukasyatta_hi_kasai_tenpo_zenpei]
    ]
};
