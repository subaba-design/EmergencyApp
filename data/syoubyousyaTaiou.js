const selection = [
    "現地急行の場合",
    "車椅子等を持っていく場合",
    "救急要請の場合"
]

const genchikyuukouFlow = [
    { "Q.まず現地に着いたら？" : "無線「現着、確認に入ります」" },
    { "Q.無線で報告することの1つ目は？" : "年齢" },
    { "Q.無線で報告することの2つ目は？" : "性別" },
    { "Q.無線で報告することの3つ目は？" : "症状" },
    { "Q.傷病者の症状を報告するときのポイントの1つ目は？" : "意識・呼吸の有無" },
    { "Q.傷病者の症状を報告するときのポイントの2つ目は？" : "その他怪我の程度と箇所" },
    { "Q.無線で報告することの4つ目は？" : "体温" },
    { "Q.無線で報告することの5つ目は？" : "既往歴（これまでかかった病気の歴）" },
    { "Q.無線で報告することの6つ目は？" : "お連れ様の有無" },
    { "Q.無線で報告することの7つ目は？" : "FAご利用 or 救急要請のどちらか？（お連れ様やご本人に確認する）" },
    { "Q.FA利用の時は？" : "必ず検温" },
    { "Q.即時救急要請のポイントは？" : "①呼吸無し、②意識無し（意識混濁を含む）、③痙攣、多量の出血、④後・側頭部を強打（←これはお連れ様やご本人に確認する）" },
    { "（Q.無線で呼ばれたとき、対応中だったら？）" : "（「対応中です」と一言返す）" }
];

const kurumaisutouwomotteikuFlow = [
    { "（Q.持っていくものは？）" : "（AED、救急セット、車椅子、毛布、体温計）" },
    { "Q.現地に着いたら？" : "無線「現着、確認に入ります」" },
    { "（Q.先着者と後着者での役割分担は？）" : "（先着者：傷病者対応　後着者：無線対応）" },
];

const kyuukyuuyouseiattendoFlow = [
    {"Q.まず現地に着いたら？" : "無線「〇〇荷捌、配置完了です」"},
    {"（Q.EV確保の際のポイントは？）" : "（寝台が入るサイズの、広いEVを確保すること。広いEVは、扉が2つのタイプ）"},
    {"Q.救急車が荷捌所に入り、救急隊と合流したら？" : "無線「救急車入庫、これよりアテンド開始」"},
    {"Q.救急隊が傷病者の元に着いたら？" : "無線「救急隊現着です」"},
    {"Q.アテンド後にやることは？" : "EV確保、無線「〇〇荷捌エレベーター、確保済みです」"},
    {"Q.傷病者が救急車の中に入ったら？" : "無線「乗り込み完了」"},
    {"Q.現地離脱するときは？" : "無線「あとは交通の方に引き継ぎます」"}
];



