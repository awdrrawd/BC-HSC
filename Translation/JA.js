// ════════════════════════════════════════
//  Liko - HSC 字庫 — JA（日本語）
//  自動由 scripts/split（來源 Translation 整理）產生；一國一檔，含 UI(i18n) 與聊天(L10N) 兩套。
//  載入後註冊到共用引擎：__Sys_i18n__（UI）與 __Sys_L10N__（聊天在地化）。
//  佔位符：UI 用 {name}；L10N 用 {0}（觸發者名稱）。
// ════════════════════════════════════════
(function () {
    var L = (typeof window !== 'undefined') ? window.Liko : (globalThis.Liko);
    if (!L) { console.error('[Liko HSC JA] Liko 尚未載入'); return; }
    var UI = {
    "loaded": {
        "JA": "HSC v{v} 読み込み完了 \n/hsc help | /hsc setting | /hsc show テスト\n初回使用時・更新後は設定ページをご確認ください！"
    },
    "help": {
        "JA": "🌀 HSC v{v} コマンド一覧：\n  /hsc setting       — 設定ページを開く\n  /hsc show          — コントロールパネル表示\n  /hsc test [文字]   — 効果を今すぐ発動\n  /hsc climax        — 絶頂エフェクトのテスト"
    },
    "cmdUnknown": {
        "JA": "⚠️ [HSC] 不明なコマンド「{sub}」。/hsc help で確認してください"
    },
    "cantOpenSettings": {
        "JA": "⚠️ 設定ページを開けません（環境設定システム未準備）"
    },
    "exportDone": {
        "JA": "📤 HSC 設定をエクスポートしました (HSC-settings.json)"
    },
    "importDone": {
        "JA": "📥 HSC 設定をインポートしました"
    },
    "editedYourText": {
        "JA": "📝 {who} があなたの HSC 催眠テキストを編集しました"
    },
    "accessedYourText": {
        "JA": "👁 {who} があなたの HSC テキストを閲覧しています"
    },
    "tab_basic": {
        "JA": "基本設定"
    },
    "tab_effects": {
        "JA": "効果設定"
    },
    "tab_texts": {
        "JA": "テキスト設定"
    },
    "tab_expr": {
        "JA": "表情設定"
    },
    "tab_sounds": {
        "JA": "音効設定"
    },
    "tab_about": {
        "JA": "プラグインについて"
    },
    "exit": {
        "JA": "終了"
    },
    "info": {
        "JA": "── 説明 ──"
    },
    "cancel": {
        "JA": "キャンセル"
    },
    "confirm": {
        "JA": "確定"
    },
    "save": {
        "JA": "💾 保存"
    },
    "delete": {
        "JA": "🗑 削除"
    },
    "upload": {
        "JA": "アップロード"
    },
    "clear": {
        "JA": "クリア"
    },
    "other": {
        "JA": "その他"
    },
    "restoreDefault": {
        "JA": "デフォルトに戻す"
    },
    "export": {
        "JA": "設定をエクスポート"
    },
    "import": {
        "JA": "設定をインポート"
    },
    "enabledOn": {
        "JA": "HSC 有効"
    },
    "enabledOff": {
        "JA": "HSC 無効"
    },
    "enabledDesc": {
        "JA": "有効にするとこのプラグインはより高い没入感を提供し、不快に感じる可能性のある効果（強い閃光、画面破砕、振動など）も含まれます。ご自身の状態に応じてご利用ください。"
    },
    "intensity": {
        "JA": "催眠強度"
    },
    "depthMax": {
        "JA": "催眠深度"
    },
    "depthNone": {
        "JA": "無"
    },
    "depthLight": {
        "JA": "軽"
    },
    "depthMed": {
        "JA": "中"
    },
    "depthHeavy": {
        "JA": "重"
    },
    "interval": {
        "JA": "サイクル時間"
    },
    "minutes": {
        "JA": "分（1~99）"
    },
    "depthEffects": {
        "JA": "── 深度エフェクト ──"
    },
    "triggerTarget": {
        "JA": "発動対象"
    },
    "anyone": {
        "JA": "誰でも"
    },
    "whitelistOnly": {
        "JA": "ホワイトリストのみ"
    },
    "whitelist": {
        "JA": "ホワイトリスト"
    },
    "allowOthersOn": {
        "JA": "他人によるテキスト増減を許可：オン"
    },
    "allowOthersOff": {
        "JA": "他人によるテキスト増減を許可：オフ"
    },
    "climaxMode": {
        "JA": "絶頂モード"
    },
    "climaxOnOrgasm": {
        "JA": "オーガズム時のみ"
    },
    "climaxAlways": {
        "JA": "毎回発動"
    },
    "sec_hypnoText": {
        "JA": "催眠テキスト"
    },
    "sec_statusMsg": {
        "JA": "ステータスメッセージ"
    },
    "sec_triggerWords": {
        "JA": "トリガーワード"
    },
    "expr_edit": {
        "JA": "🎭 表情を編集"
    },
    "expr_item": {
        "JA": "表情{n}"
    },
    "expr_add": {
        "JA": "＋ エディターから追加"
    },
    "expr_hint": {
        "JA": "右側で表情を設定してから、各行の「保存」または「追加」をクリックして保存してください"
    },
    "eyebrows": {
        "JA": "眉"
    },
    "eyes": {
        "JA": "目"
    },
    "mouth": {
        "JA": "口"
    },
    "blush": {
        "JA": "赤面"
    },
    "exprNone": {
        "JA": "— なし —"
    },
    "previewLoading": {
        "JA": "プレビュー読み込み中…"
    },
    "confirmReplace": {
        "JA": "右側の内容で「{name}」のデータを置き換えますか？"
    },
    "confirmDelete": {
        "JA": "「{name}」を削除しますか？"
    },
    "confirmReset": {
        "JA": "すべてのカスタム表情を消去し、4種類の組み込みに戻しますか？"
    },
    "snd_lib": {
        "JA": "🔊 サウンドライブラリ"
    },
    "snd_preset": {
        "JA": "プリセット"
    },
    "snd_local": {
        "JA": "ローカル"
    },
    "snd_assignTo": {
        "JA": "「{label}」に割り当て：上の音効をクリック"
    },
    "snd_pickHint": {
        "JA": "枠の「その他」をクリックしてここで割り当て。直接クリックで試聴。"
    },
    "about_author": {
        "JA": "作者：莉柯莉絲(Likolisu)"
    },
    "about_dev": {
        "JA": "本プラグインは個人の趣味で開発されており、多少の不具合がある可能性があります。GitHub での報告をお待ちしています。"
    },
    "about_report": {
        "JA": "🐛 GitHub で報告"
    },
    "about_assets": {
        "JA": "── 使用素材はすべて無料素材です ──"
    },
    "intensityD": {
        "JA": "全体的な効果の強さ（0.1~3.0）。背景の深度レベルも同時に決定します（≈1軽/2中/3強、深度の上限を超えません）。スライダーをドラッグしてください。"
    },
    "depthMaxD": {
        "JA": "背景催眠の最大深度（VOICE トリガーとは別）。「無」＝背景ループを無効化。"
    },
    "intervalD": {
        "JA": "背景催眠を自動再生する間隔（1~99分）。深度が「無」の場合はループしません。"
    },
    "depthRowLight": {
        "JA": "深度：軽"
    },
    "depthRowMed": {
        "JA": "深度：中"
    },
    "depthRowHeavy": {
        "JA": "深度：強"
    },
    "fx_smoke": {
        "JA": "煙霧"
    },
    "fx_smokeD": {
        "JA": "不定期に淡いピンクの煙霧"
    },
    "fx_pant": {
        "JA": "喘ぎ"
    },
    "fx_pantD": {
        "JA": "リズミカルな吐息の白い霧"
    },
    "fx_danmaku": {
        "JA": "弾幕"
    },
    "fx_danmakuD": {
        "JA": "チャットメッセージが催眠弾幕に変化"
    },
    "fx_ghost": {
        "JA": "人影"
    },
    "fx_ghostD": {
        "JA": "背後で囁く人影＋耳元のテキスト"
    },
    "fx_figblur": {
        "JA": "人物ぼかし"
    },
    "fx_figblurD": {
        "JA": "画面はぼやけるがキャラクター／人影はクリアなまま"
    },
    "fx_sfx": {
        "JA": "効果音"
    },
    "fx_sfxD": {
        "JA": "深度サウンドを再生"
    },
    "fx_chatblur": {
        "JA": "チャットぼかし"
    },
    "fx_chatblurD": {
        "JA": "右側のチャットログをぼかす"
    },
    "fx_fade": {
        "JA": "メッセージ浮かび上がり"
    },
    "fx_fadeD": {
        "JA": "新着チャットメッセージの文字がゆっくり浮かび上がる"
    },
    "triggerTargetD": {
        "JA": "誰がトリガーワードを言うとあなたを催眠状態にできるか。「ホワイトリストのみ」の場合、リスト内のメンバーのみ有効。"
    },
    "allowEdit": {
        "JA": "テキスト編集を許可"
    },
    "allowEditD": {
        "JA": "誰があなたのプロフィールで催眠テキストを増減できるか。「自分のみ」は自分だけ編集可能；「ホワイトリストのみ」はリスト内のメンバー（自分を含む）が編集可能。"
    },
    "editOff": {
        "JA": "自分のみ"
    },
    "editAny": {
        "JA": "全員"
    },
    "editWhitelist": {
        "JA": "ホワイトリストのみ"
    },
    "editPermTitle": {
        "JA": "編集を許可する対象"
    },
    "editPermTitleD": {
        "JA": "誰があなたのプロフィールで各種コンテンツを増減できるか。「自分のみ」は自分だけ編集可能；「ホワイトリスト」はリスト内のメンバーが編集可能；「全員」は誰でも編集可能。3種類は下のホワイトリストを共有します。"
    },
    "on": {
        "JA": "オン"
    },
    "off": {
        "JA": "オフ"
    },
    "seeOthersPant": {
        "JA": "他人の喘ぎを見る"
    },
    "seeOthersPantD": {
        "JA": "オンにすると、ルーム内の他人が催眠状態になった時（催眠ブロードキャストを送信時）、相手のキャラクターに喘ぎの白い霧が表示されます。デフォルトはオフ。"
    },
    "seeOthersHypnoLabel": {
        "JA": "催眠進行度"
    },
    "seeOthersHypnoD": {
        "JA": "オンにすると、ルーム内で HSC を導入している他人の頭上に催眠進行度オーブを表示します（相手がブロードキャストする催眠値を読み取り）。デフォルトはオン。"
    },
    "seeOthersTalisLabel": {
        "JA": "催眠護符"
    },
    "seeOthersTalisD": {
        "JA": "オンにすると、ルーム内の他人が強制コントロール状態に陥った時、その頭上に催眠護符を表示します。デフォルトはオン。"
    },
    "hscOrbTip": {
        "JA": "HSC 催眠進行度：{n}%"
    },
    "hscOrbTipTime": {
        "JA": "HSC 覚醒まで {t}"
    },
    "hscOrbTipInf": {
        "JA": "HSC 催眠状態が継続中（自動覚醒なし）"
    },
    "hypnoClimaxLabel": {
        "JA": "催眠絶頂"
    },
    "tab_voice": {
        "JA": "言語催眠"
    },
    "tab_daily": {
        "JA": "日常干渉"
    },
    "tab_state": {
        "JA": "催眠状態"
    },
    "sec_effects": {
        "JA": "効果設定"
    },
    "voiceEnabledLabel": {
        "JA": "言語催眠"
    },
    "voiceEnabledD": {
        "JA": "BCX の「聞いて」または HSC の設定でテキスト・トリガーワード・催眠効果を変更できます。詳細は言語催眠タブをご確認ください。"
    },
    "dailyEnabledLabel": {
        "JA": "日常干渉"
    },
    "dailyEnabledD": {
        "JA": "周期的に発動する催眠で、トリガーワードはありません。詳細は日常干渉タブをご確認ください。"
    },
    "stateEnabledLabel": {
        "JA": "催眠状態"
    },
    "stateEnabledD": {
        "JA": "催眠度100%に達すると発動する HSC の異常状態エフェクトです。詳細は催眠状態タブをご確認ください。"
    },
    "arousalVoiceLabel": {
        "JA": "興奮値 - 言語催眠"
    },
    "arousalVoiceD": {
        "JA": "言語催眠1回ごとに増加する興奮値（0~20、0＝無効）。"
    },
    "arousalDailyLabel": {
        "JA": "興奮値 - 日常干渉"
    },
    "arousalDailyD": {
        "JA": "日常干渉1回ごとに増加する興奮値（0~20、0＝無効）。"
    },
    "hypnoVoiceLabel2": {
        "JA": "催眠値 - 言語催眠"
    },
    "hypnoVoiceD2": {
        "JA": "言語催眠1回ごとに増加する催眠値（0~20）。催眠状態がオフの場合は無効。"
    },
    "hypnoDailyLabel": {
        "JA": "催眠値 - 日常干渉"
    },
    "hypnoDailyD": {
        "JA": "日常干渉1回ごとに増加する催眠値（0~20）。催眠状態がオフの場合は無効。"
    },
    "seeOthersEffect": {
        "JA": "他人の効果を見る"
    },
    "autoWakeLabel": {
        "JA": "自動覚醒"
    },
    "autoWakeD": {
        "JA": "オン：催眠状態に入ると覚醒までのカウントダウン（15〜99分）が始まり、0で自動覚醒。オフ：自動では覚めず、覚醒ワードのみ（頭上に∞表示）。"
    },
    "hypnoExtendLabel": {
        "JA": "催眠延長"
    },
    "hypnoExtendD": {
        "JA": "オンにすると、催眠状態中に音声／日常トリガーを受けるたびに覚醒までの時間が延長されます（10〜990秒、10秒刻み；自動覚醒の基準を超えることも可）。"
    },
    "minUnit": {
        "JA": "分"
    },
    "secUnit": {
        "JA": "秒"
    },
    "showProfileBtnLabel": {
        "JA": "他人のテキストを編集"
    },
    "showProfileBtnD": {
        "JA": "他人のプロフィールに HSC テキスト編集ボタンを表示するかどうかを制御します；オフの場合は表示されません。"
    },
    "hypnoAnimLabel": {
        "JA": "催眠アニメーション"
    },
    "hypnoAnimD": {
        "JA": "催眠護符アニメーションを有効化（開発中）。"
    },
    "hypnoStyleLabel": {
        "JA": "護符スタイル"
    },
    "hypnoStyleD": {
        "JA": "催眠アニメーションで使用する護符の模様（全12種）；ここにマウスを乗せると現在のスタイルをプレビューできます。"
    },
    "hypnoStyleName": {
        "JA": "スタイル{n}"
    },
    "fx_headTalisman": {
        "JA": "頭上に護符を貼る"
    },
    "fx_headTalismanD": {
        "JA": "強制コントロール中、額に護符が常駐し継続的に振動します（独立したスイッチで、催眠アニメーションを有効にする必要はありません）。"
    },
    "fx_faceCensor": {
        "JA": "顔認識障害"
    },
    "fx_faceCensorD": {
        "JA": "強制コントロール中：「他人」の顔がはっきり見えず、蠢く落書きで覆われます。"
    },
    "fx_nameCensor": {
        "JA": "名前認識障害"
    },
    "nameCensorPlayer": {
        "JA": "キャラのみ"
    },
    "nameCensorNetwork": {
        "JA": "関係含む"
    },
    "fx_nameCensorD": {
        "JA": "強制コントロール中：「他人」の名前／IDがはっきり見えません（チャットルームの名札とプロフィールも同時にマスクされます）。"
    },
    "censorStyleLabel": {
        "JA": "落書きスタイル"
    },
    "censorStyleD": {
        "JA": "顔の落書きのスタイルで、2種類から選択します。"
    },
    "censorOff": {
        "JA": "オフ"
    },
    "censorStyleCircle": {
        "JA": "円形"
    },
    "censorStyleLine": {
        "JA": "線状"
    },
    "fx_crowd": {
        "JA": "群衆を表示"
    },
    "fx_crowdD": {
        "JA": "強制コントロール中：画面下端に見物人の列がフェードインし、見られている／囲まれている状況を演出します。"
    },
    "resetAll": {
        "JA": "デフォルトに戻す"
    },
    "resetAllD": {
        "JA": "HSC のすべての設定をデフォルト値に戻します。"
    },
    "confirmResetAll": {
        "JA": "HSC のすべての設定をデフォルト値に戻しますか？この操作は元に戻せません。"
    },
    "hypnoLabel": {
        "JA": "催眠値"
    },
    "hypnoD": {
        "JA": "催眠を受けた際に蓄積される催眠値（0~100、12秒ごとに-1）。100%で強制コントロールに入り、15%未満で解除されます。"
    },
    "hypnoVoiceLabel": {
        "JA": "言語催眠値"
    },
    "hypnoVoiceD": {
        "JA": "言語催眠1回ごとに増加（0~20、0＝無効）。"
    },
    "hypnoDepthLabel": {
        "JA": "深度催眠値"
    },
    "hypnoDepthD": {
        "JA": "深度催眠1回ごとに増加（0~10、0＝無効）。"
    },
    "sec_wakeWord": {
        "JA": "覚醒ワード"
    },
    "wakeWordD": {
        "JA": "ルーム内の「他人」がこの言葉を言うと→あなたは即座に覚醒します（催眠値が80%超の場合は80%に設定）；自分で言っても無効です。1行に1つ。"
    },
    "wakeWordPh": {
        "JA": "例：wake"
    },
    "sec_hypnoResponse": {
        "JA": "催眠応答"
    },
    "hypnoResponseD": {
        "JA": "強制コントロール中（催眠値100%）は発言が横取りされる可能性があり、代わりにここにある文の一つを発言します。1行に1文、$me＝あなたの名前。"
    },
    "hypnoResponsePh": {
        "JA": "例：はい、ご主人様"
    },
    "allowedPhrasesLabel": {
        "JA": "許可される発言"
    },
    "allowedPhrasesD": {
        "JA": "強制コントロール中、あなたの発言全体がここにある文のいずれかと完全に一致する場合、朦朧とせずに普段通り発言されます。1行に1文。"
    },
    "allowedPhrasesPh": {
        "JA": "例：はい、ご主人様"
    },
    "arousalStepLabel": {
        "JA": "興奮値"
    },
    "arousalStepD": {
        "JA": "催眠が発動するごとに増加する興奮値（0~20、0＝無効）。"
    },
    "depthEffectsHint": {
        "JA": "定期発動時にどの効果を出すか自由に選択してください。"
    },
    "expr_new": {
        "JA": "追加"
    },
    "defaultResponses": {
        "JA": "はい、ご主人様\n$meは良い子です\n$meは素直に従います\nんっ！！あぁあぁ～！"
    },
    "hs_enterForced": {
        "JA": "$meの精神は絶え間なく侵食され、視線はますます虚ろになり、最終的には完全に催眠の泥沼に沈んでしまう。"
    },
    "hs_forcedIdle": {
        "JA": "$meの両目は虚ろで呆けており、時折唇がわずかに震えるが、何も言おうとしても声が出ず、全く反応がない、まるで完全に操られた人形のようだ。"
    },
    "hs_exitForced": {
        "JA": "しばらくすると、侵食効果は徐々に$meの頭から引いていき、虚ろだった両目に少しずつ輝きが戻り、意識がゆっくりと戻り始める。"
    },
    "hs_thinking": {
        "JA": "$meはぼんやりと少し考え込んだ…"
    },
    "hs_blank": {
        "JA": "$meはただぼんやりと立ち尽くし、何も言わなかった"
    },
    "hs_pause": {
        "JA": "$meは少し間を置いてから口を開いた"
    },
    "hs_intercept": {
        "JA": "$meは何か言おうとしたが、意識がすぐに妨げられた"
    },
    "hs_lewd": {
        "JA": "$meは今、頭の中がいやらしいことでいっぱいだ"
    },
    "hs_lewdFallback": {
        "JA": "$meは無意識にオナニーを始めてしまう…"
    },
    "l10n_test": {
        "JA": "【翻訳テスト】{name} からのメッセージは HSC によってあなたの言語にリアルタイムで置き換えて表示されました ✅"
    },
    "hypnoClimaxD": {
        "JA": "オンにすると、強制コントロール（催眠値100%）に陥った際、催眠によって絶頂が1回発動します（BC本来のオーガズムフローに従い、拒否／エッジングなどの設定を尊重；興奮システムがオフの場合は作用しません）。"
    },
    "sec_stateMsgFx": {
        "JA": "メッセージ系エフェクト"
    },
    "stateDanmakuChatLabel": {
        "JA": "弾幕文字—チャット"
    },
    "stateDanmakuChatD": {
        "JA": "強制コントロール中：ルーム内の他人のチャットメッセージが漂う弾幕になります（ランダムなフォントサイズ14~20）。"
    },
    "stateDanmakuWhisperLabel": {
        "JA": "弾幕文字—内緒話"
    },
    "stateDanmakuWhisperD": {
        "JA": "強制コントロール中：ルーム内の他人からのあなたへの内緒話は、紫色の弾幕としてあなたの耳元に表示されます。"
    },
    "stateMsgSmokeLabel": {
        "JA": "メッセージ妨害"
    },
    "stateMsgSmokeD": {
        "JA": "強制コントロール中：システムのローカルメッセージと入退室メッセージを除き、各メッセージは煙で覆われ、クリックするとゆっくり晴れていきます。"
    },
    "stateMsgInterfereLabel": {
        "JA": "メッセージ干渉"
    },
    "stateMsgInterfereD": {
        "JA": "強制コントロール中：入退室メッセージは曖昧な幻覚的な描写に書き換えられます。"
    },
    "stateSmokeHint": {
        "JA": "クリックして表示"
    },
    "stateInterfereEnter": {
        "JA": "誰かが入ってきた…\n人が増えたように感じる…\n周囲が騒がしくなった気がする…\n視線が増えたように感じる…"
    },
    "stateInterfereLeave": {
        "JA": "誰かが出て行った…\n人が減ったように感じる…"
    },
    "remoteEditTitle": {
        "JA": "{name} の HSC テキストを編集"
    },
    "remoteEditHint": {
        "JA": "1行1文。$me で被催眠者を表し、$n で改行；$a で始まるステータス行は Action として送信されます。保存すると相手に送信されます（相手が編集をまだ許可している場合のみ有効）。"
    },
    "remoteEditSave": {
        "JA": "💾 保存して送信"
    },
    "remoteEditSent": {
        "JA": "📤 {name} に送信しました。相手の適用を待っています…"
    },
    "remoteEditLoading": {
        "JA": "⏳ {name} の現在のHSCテキストを読み込み中…"
    },
    "remoteEditLoadFail": {
        "JA": "⚠️ {name} の現在のテキストを取得できません（オフラインかHSC未導入の可能性）。後でもう一度お試しください"
    },
    "remoteEditOk": {
        "JA": "✅ {name} があなたの編集を適用しました"
    },
    "remoteEditDenied": {
        "JA": "⚠️ {name} はあなたの編集を適用しませんでした（あなたは相手のホワイトリストに入っていません）"
    },
    "profileEditBtn": {
        "JA": "相手の HSC テキストを編集"
    },
    "profileEditOff": {
        "JA": "相手はテキスト編集を許可していません"
    },
    "profileEditNoPerm": {
        "JA": "あなたは相手のホワイトリストに入っていないため編集できません"
    },
    "remoteEditNoPerm": {
        "JA": "この編集権限がありません"
    },
    "whitelistD": {
        "JA": "会員番号またはトークン（$owner＝ご主人様、$lover＝恋人(AFC含む)、$friend＝友達、$white＝BCホワイトリスト）、カンマまたはスペース区切り。各種「ホワイトリスト」編集権限はこのリストを共有します。"
    },
    "textsResetD": {
        "JA": "催眠テキスト／ステータスメッセージ／トリガーワードを「現在の言語」のデフォルト値にリセットします（言語切り替え後に翻訳を更新する際に使用）。"
    },
    "confirmTextsReset": {
        "JA": "現在の言語のデフォルト値であなたの催眠テキスト・ステータスメッセージ・トリガーワードを上書きしますか？"
    },
    "whitelistPh": {
        "JA": "例：12345, 67890"
    },
    "language": {
        "JA": "言語"
    },
    "languageD": {
        "JA": "UI言語。Auto＝ゲームのログイン言語に従う；手動選択も可能。"
    },
    "exportD": {
        "JA": "すべての設定をJSONファイルとしてダウンロードします。"
    },
    "importD": {
        "JA": "JSONファイルからすべての設定を復元します。"
    },
    "effectsHint": {
        "JA": "VOICE発動時の各種効果を項目ごとにオン・オフできます。項目にマウスを乗せると説明が表示されます。"
    },
    "ev_pinkFlash": {
        "JA": "ピンクの光暈"
    },
    "ev_pinkFlashD": {
        "JA": "画面にピンクの光暈が広がり、朦朧とした雰囲気を演出します。"
    },
    "ev_hypnoSpiral": {
        "JA": "催眠スパイラル"
    },
    "ev_hypnoSpiralD": {
        "JA": "頭上に回転するスパイラルが出現します。"
    },
    "ev_hypnoWaves": {
        "JA": "同心波紋"
    },
    "ev_hypnoWavesD": {
        "JA": "画面左側に外側へ広がる同心円の波紋が出現します。"
    },
    "ev_screenDistort": {
        "JA": "画面歪み"
    },
    "ev_screenDistortD": {
        "JA": "画面が軽く回転してぼやけ、意識が掻き乱されているように見えます。"
    },
    "ev_vignette": {
        "JA": "周辺減光"
    },
    "ev_vignetteD": {
        "JA": "画面の周囲が暗くなり、中央に焦点を当てます。"
    },
    "ev_danmaku": {
        "JA": "弾幕文字"
    },
    "ev_danmakuD": {
        "JA": "メインの台詞が頭上に、ナレーションは左側に散らばります（チャット履歴含む）。"
    },
    "ev_steam": {
        "JA": "喘ぎの白い霧"
    },
    "ev_steamD": {
        "JA": "口元から柔らかい白い霧が左右下方に漂います。"
    },
    "ev_expression": {
        "JA": "表情切り替え"
    },
    "ev_expressionD": {
        "JA": "催眠中はランダムな表情が適用され、終了後に元に戻ります。"
    },
    "ev_chatFade": {
        "JA": "メッセージ浮かび上がり"
    },
    "ev_chatFadeD": {
        "JA": "発動後10秒間、新着チャットメッセージの文字がゆっくり浮かび上がります（LSCGゴースト風）。"
    },
    "ev_climax": {
        "JA": "絶頂エフェクト"
    },
    "ev_climaxD": {
        "JA": "画面破砕＋赤白の閃光＋振動。"
    },
    "ev_sound": {
        "JA": "喘ぎ声"
    },
    "ev_soundD": {
        "JA": "喘ぎの効果音を再生します（音効設定が必要）。"
    },
    "ev_headshot": {
        "JA": "中央ヘッドショット"
    },
    "ev_headshotD": {
        "JA": "発動ごとに画面中央にヘッドショットを切り抜き、スパイラル／喘ぎはそれを基準にします（ページングを無視）。"
    },
    "ev_dualSound": {
        "JA": "二重効果音"
    },
    "ev_dualSoundD": {
        "JA": "声の再生と同時にトリガー音（振り子など、「催眠」カテゴリの音効を使用）を重ねます。"
    },
    "ev_emote": {
        "JA": "ステータスメッセージ"
    },
    "ev_emoteD": {
        "JA": "発動時にアクションメッセージを送信し、他人にあなたの状態を知らせます。"
    },
    "climaxModeD": {
        "JA": "「オーガズム時のみ」＝BC本当のオーガズム時のみ破砕エフェクトを再生；「毎回発動」＝催眠のたびに再生。"
    },
    "climaxEvery": {
        "JA": "毎回発動"
    },
    "climaxOrgasm": {
        "JA": "オーガズム時のみ"
    },
    "textsHint": {
        "JA": "1行1文。\n$me＝被催眠者名、$n＝改行（弾幕／人影）；\n$a で始まるステータス行は Action として送信。"
    },
    "hypnoTextD": {
        "JA": "弾幕／人影ナレーションのソース。BCX の「聞いて」と併用、被催眠者のみが見える。"
    },
    "hypnoTextPh": {
        "JA": "例：$me、いい子…$nリラックスして…"
    },
    "statusMsgD": {
        "JA": "発動時にランダムで送信されるメッセージ。先頭が $a＝Action（システム動作）、$c＝Chat（通常の発言、呻き声などに使用）、それ以外は Emote になります。"
    },
    "statusMsgPh": {
        "JA": "例：$a $meの思考がぼんやりしてきた / $c あ…んっ…"
    },
    "triggerWordsD": {
        "JA": "1行1語。これらの語を含むチャットを受信すると催眠が発動（BCXの「聞いて」は常に有効）。"
    },
    "triggerWordsPh": {
        "JA": "例：催眠　睡眠"
    },
    "soundsHint": {
        "JA": "各枠にURLを貼り付けるか、ローカルファイルを「アップロード」してください。▶で試聴、✕でクリア、「その他」で右側のライブラリから選択。空欄＝デフォルト。"
    },
    "sndCat_hypno": {
        "JA": "催眠"
    },
    "sndCat_voice": {
        "JA": "催眠2"
    },
    "sndCat_climax": {
        "JA": "絶頂"
    },
    "sndCat_depth": {
        "JA": "深度"
    },
    "sndSlotHead": {
        "JA": "{name}効果音（最大{max}）"
    },
    "sndDefaultPh": {
        "JA": "（デフォルト）{file}"
    },
    "sndUnsetPh": {
        "JA": "未設定 — URL／アップロード／その他"
    },
    "sndLocalName": {
        "JA": "ローカル音効"
    },
    "defaultTexts": {
        "JA": "リラックスして…リラックスして…\nあなたの意識は眠りに落ちていく\n私の声を聞いて\n何も考えなくていい\nどんどん深く\n従うのは気持ちいい\n沈んでいって…\nいい子…いい子だね…"
    },
    "defaultEmotes": {
        "JA": "$meの思考が混乱してきた\n$meの両目が虚ろになる…\n$meの意識が沈んでいく\n$meが少しふらついて、放心した\n$meの表情がぼんやりとしてきた"
    },
    "prefButton": {
        "JA": "HSC 設定"
    }
};
    var MSG = {
    "hs_enterForced": {
        "JA": "{0}の精神は絶え間なく侵食され、視線はますます虚ろになり、最終的には完全に催眠の泥沼に沈んでしまう。"
    },
    "hs_forcedIdle": {
        "JA": "{0}の両目は虚ろで呆けており、時折唇がわずかに震えるが、何も言おうとしても声が出ず、全く反応がない、まるで完全に操られた人形のようだ。"
    },
    "hs_exitForced": {
        "JA": "しばらくすると、侵食効果は徐々に{0}の頭から引いていき、虚ろだった両目に少しずつ輝きが戻り、意識がゆっくりと戻り始める。"
    },
    "hs_thinking": {
        "JA": "{0}はぼんやりと少し考え込んだ…"
    },
    "hs_blank": {
        "JA": "{0}はただぼんやりと立ち尽くし、何も言わなかった"
    },
    "hs_pause": {
        "JA": "{0}は少し間を置いてから口を開いた"
    },
    "hs_intercept": {
        "JA": "{0}は何か言おうとしたが、意識がすぐに妨げられた"
    },
    "hs_lewd": {
        "JA": "{0}は今、頭の中がいやらしいことでいっぱいだ"
    },
    "hs_lewdFallback": {
        "JA": "{0}は無意識にオナニーを始めてしまう…"
    },
    "l10n_test": {
        "JA": "【翻訳テスト】{0} からのメッセージは HSC によってあなたの言語にリアルタイムで置き換えて表示されました ✅"
    }
};
    if (L.__Sys_i18n__ && L.__Sys_i18n__.register) L.__Sys_i18n__.register('HSC', UI);
    if (L.__Sys_L10N__ && L.__Sys_L10N__.register) L.__Sys_L10N__.register('HSC', MSG);
})();
