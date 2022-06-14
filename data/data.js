const syoubyousyataiou = {
    name: '傷病者対応',
    type: 'select',
    flow: [
        ['現地急行の場合'        , genchikyuukouFlow],
        ['車椅子等を持っていく場合', kurumaisutouwomotteikuFlow],
        ['救急要請の場合'        , kyuukyuuyouseiattendoFlow]
    ]
};


const toireyobidashihappou = {
    name: 'トイレ呼出発報',
    type: 'select',
    flow: [
        ['防災内で発報した場合', bousainaihappouToireFlow],
        ['優先トイレ発報、現地急行の場合', yuusentoireGenchikyuukouFlow],
        ['女子トイレ発報、現地急行の場合', joshitoireGenchikyuukouFlow]
    ]
};


const kenrisutyou = {
    name: '拾得物権利主張',
    type: 'select',
    flow: [
        
        ['巡回時、お客様から直接現金含む拾得物を渡された場合（権利主張はまだ）', preKenrisyutyou],
        ['対応手順', kenrisyutyouFlow],
        ['所有権主張の説明', syoyuukenKenrisyutyou],
        ['報労金の権利の主張の場合', houroukinKenrisyutyou]
    ]
};


const EVkosyouhappou = {
    name: 'EV故障発報',
    type: 'select',
    flow: [
        ['防災内で発報した場合', bousainaihappouEVkosyouFlow],
        ['現地急行の場合', EVkosyouGenchikyuukouFlow]
    ]
};


const EVyobidashihappou = {
    name: 'EV呼出発報',
    type: 'select',
    flow: [
        ['防災内で発報した場合', bousainaihappouEVyobidashiFlow],
        ['現地急行の場合（受話器対応での応答がない場合）', EVyobidashiOutouNashiGenchikyuukouFlow],
        ['現地急行の場合（受話器対応での応答があった場合）', EVyobidashiOutouAriGenchikyuukouFlow]
    ]
};


const ESCkinnkyuuteishi = {
    name: 'EV呼出発報',
    type: 'select',
    flow: [
        ['防災内で発報した場合', bousainaihappouESCteishiFlow],
        ['現地急行の場合', ESCteishiGenchikyuukouFlow]
    ]
};


const oukyuuteate = {
    name: '応急手当',
    type: 'select',
    flow: [
        ['止血方法', shiketuhouhou],
        ['擦り傷（出血が少量の浅い傷）', surikizu],
        ['切り傷（包丁やナイフ、ガラスなどで切った直線的な傷）', kirikizu],
        ['指の切断', yubinosetudan],
        ['刺し傷', sashikizu],
        ['心配蘇生方法', shinpaisosei],
        ['AEDの使用と心肺蘇生（傷病者の反応がない場合）（急性アルコール中毒も含む）', AED],
        ['過呼吸（過換気症候群）の対処法', kakokyuu],
    ]
};


const zishinnhassei = {
    name: '地震発生',
    type: 'select',
    flow: [
        ['速報なしで、震度2以下の場合', sokuhouNashiUnder2],
        ['速報なしで、震度3以上の場合', sokuhouNashiOver3],
        ['緊急地震速報受信', kinnkyuuzishinnsokuhoujushin]
    ]
};


const emergencySelection = {
    name: '一覧',
    type: 'select',
    flow: [
        ['傷病者対応', syoubyousyataiou],
        ['トイレ呼出発報', toireyobidashihappou],
        ['権利主張お客様対応', kenrisutyou],
        ['EV故障発報', EVkosyouhappou],
        ['EV呼出発報', EVyobidashihappou],
        ['ESC緊急停止', ESCkinnkyuuteishi],
        ['応急手当', oukyuuteate],
        ['地震発生', zishinnhassei],
        ['停電発生']
    ]
};

// ①<br/>②<br/>③<br/>④<br/>⑤<br/>⑥<br/>⑦<br/>⑧
// <br/>
// <span class="strong-red"></span>