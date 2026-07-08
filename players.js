const playersData = [
  {
    id: "player_masaki",
    display_text: "1番 ファーストベースマン 正木智也<br>背番号31 東京都大田区出身",
    typing_kana: "いちばん ふぁーすとべーすまん まさきともや<br>せばんごう31 とうきょうとおおたくしゅっしん",
    bgm_file: "audio/masaki_cut.mp3",
    bgm_delay_ms: 1000,
    display_text_2: "1番 ファーストベースマン 正木智也", 
    typing_kana_2: "いちばん ふぁーすとべーすまん まさきともや",
    bgm_file_2: "audio/masaki2_cut.mp3", 
    bgm_delay_ms_2: 1000
  },
  {
    id: "player_yanagimachi",
    display_text: "2番 ライトフィールダー 柳町達<br>背番号32 茨城県稲敷市出身",
    typing_kana: "にばん らいとふぃーるだー やなぎまちたつる<br>せばんごう32 いばらきけんいなしきししゅっしん",
    bgm_file: "audio/yanagimachi_cut.mp3",
    bgm_delay_ms: 1000,
    display_text_2: "2番 ライトフィールダー 柳町達", 
    typing_kana_2: "にばん らいとふぃーるだー やなぎまちたつる",
    bgm_file_2: "audio/yanagimachi2_cut.mp3", 
    bgm_delay_ms_2: 1000
  },
  {
    id: "player_kondo",
    display_text: "3番 レフトフィールダー 近藤健介<br>背番号3 千葉県千葉市出身",
    typing_kana: "さんばん れふとふぃーるだー こんどうけんすけ<br>せばんごう3 ちばけんちばししゅっしん",
    bgm_file: "audio/kondo_cut.mp3",
    bgm_delay_ms: 1000,
    display_text_2: "3番 レフトフィールダー 近藤健介", 
    typing_kana_2: "さんばん れふとふぃーるだー こんどうけんすけ",
    bgm_delay_ms_2: 1000
  },
  {
    id: "player_kurihara",
    display_text: "4番 サードベースマン 栗原陵矢<br>背番号24 福井県福井市出身",
    typing_kana: "よばん さーどべーすまん くりはらりょうや<br>せばんごう24 ふくいけんふくいししゅっしん",
    bgm_file: "audio/kurihara_cut.mp3",
    bgm_delay_ms: 1000,
    display_text_2: "4番 サードベースマン 栗原陵矢", 
    typing_kana_2: "よばん さーどべーすまん くりはらりょうや",
    bgm_file_2: "audio/kurihara2_cut.mp3", 
    bgm_delay_ms_2: 1000
  },
  {
    id: "player_yanagita",
    display_text: "5番 指名打者 柳田悠岐<br>背番号9 広島県広島市出身",
    typing_kana: "ごばん しめいだしゃ やなぎたゆうき<br>せばんごう9 ひろしまけんひろしまししゅっしん",
    bgm_file: "audio/yanagita_cut.mp3",
    bgm_delay_ms: 1000,
    display_text_2: "5番 指名打者 柳田悠岐", 
    typing_kana_2: "ごばん しめいだしゃ やなぎたゆうき",
    bgm_delay_ms_2: 1000
  },
  {
    id: "player_makihara",
    display_text: "6番 セカンドベースマン 牧原大成<br>背番号8 福岡県久留米市出身",
    typing_kana: "ろくばん せかんどべーすまん まきはらたいせい<br>せばんごう8 ふくおかけんくるめししゅっしん",
    bgm_file: "audio/makihara_cut.mp3",
    bgm_delay_ms: 1000,
    display_text_2: "6番 セカンドベースマン 牧原大成", 
    typing_kana_2: "ろくばん せかんどべーすまん まきはらたいせい",
    bgm_file_2: "audio/makihara2_cut.mp3", 
    bgm_delay_ms_2: 1000
  },
  {
    id: "player_shuto",
    display_text: "7番 センターフィールダー 周東右京<br>背番号23 群馬県太田市出身",
    typing_kana: "ななばん せんたーふぃーるだー しゅうとううきょう<br>せばんごう23 ぐんまけんおおたししゅっしん",
    bgm_file: "audio/shuto_cut.mp3",
    bgm_delay_ms: 1000,
    display_text_2: "7番 センターフィールダー 周東右京", 
    typing_kana_2: "ななばん せんたーふぃーるだー しゅうとううきょう",
    bgm_file_2: "audio/shuto2_cut.mp3", 
    bgm_delay_ms_2: 1000
  },
  {
    id: "player_umino",
    display_text: "8番 キャッチャー 海野隆司<br>背番号62 岡山県岡山市出身",
    typing_kana: "はちばん きゃっちゃー うみのたかし<br>せばんごう62 おかやまけんおかやまししゅっしん",
    bgm_file: "audio/umino_cut.mp3",
    bgm_delay_ms: 1000,
    // 【2打席目：代打 中村晃 演出】
    is_pinch_hitter: true,
    pinch_hitter_intro_text: "8番 海野隆司に代わりまして",
    pinch_hitter_intro_kana: "はちばん うみのたかしにかわりまして",
    
    // 中村晃選手は最初の打席扱いになるので、背番号と出身地を含めます
    display_text_2: "中村晃<br>背番号7 埼玉県朝霞市出身",
    typing_kana_2: "なかむらあきら<br>せばんごう7 さいたまけんあさかししゅっしん",
    bgm_file_2: "audio/akira_cut.mp3",
    bgm_delay_ms_2: 3000
  },
  {
    id: "player_nomura",
    display_text: "9番 ショートストップ 野村勇<br>背番号99 兵庫県神戸市出身",
    typing_kana: "きゅうばん しょーとすとっぷ のむらいさみ<br>せばんごう99 ひょうごけんこうべししゅっしん",
    bgm_file: "audio/isami_cut.mp3",
    bgm_delay_ms: 1000,
    // ★【2打席目：代打 川瀬晃 追加】
    is_pinch_hitter: true,
    pinch_hitter_intro_text: "9番 野村勇に代わりまして",
    pinch_hitter_intro_kana: "きゅうばん のむらいさみにかわりまして",
    
    display_text_2: "川瀬晃<br>背番号0 大分県大分市出身",
    typing_kana_2: "かわせひかる<br>せばんごう0 おおいたけんおおいたししゅっしん",
    bgm_file_2: "audio/kawase_cut.mp3",
    bgm_delay_ms_2: 3000
  }
];