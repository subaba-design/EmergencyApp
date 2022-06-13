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


const EVkosyouhappou = {
    name: 'EV故障発報',
    type: 'select',
    flow: [
        ['防災内で発報した場合', bousainaihappouEVkosyouFlow],
        ['現地急行の場合', EVkosyouGenchikyuukouFlow]
    ]
};


const emergencySelection = {
    name: '一覧',
    type: 'select',
    flow: [
        ['傷病者対応', syoubyousyataiou],
        ['トイレ呼出発報', toireyobidashihappou],
        ['権利主張お客様対応'],
        ['EV故障発報', EVkosyouhappou],
        ['EV呼出発報'],
        ['ESC緊急停止'],
        ['応急手当'],
        ['地震発生'],
        ['停電発生']
    ]
};