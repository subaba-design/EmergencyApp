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