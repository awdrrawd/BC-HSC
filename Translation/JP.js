// ════════════════════════════════════════
//  Liko - HSC 字庫 — JP（日本語）
//  自動由 scripts/split（來源 Translation 整理）產生；一國一檔，含 UI(i18n) 與聊天(L10N) 兩套。
//  載入後註冊到共用引擎：__Sys_i18n__（UI）與 __Sys_L10N__（聊天在地化）。
//  佔位符：UI 用 {name}；L10N 用 {0}（觸發者名稱）。
// ════════════════════════════════════════
(function () {
    var L = (typeof window !== 'undefined') ? window.Liko : (globalThis.Liko);
    if (!L) { console.error('[Liko HSC JP] Liko 尚未載入'); return; }
    var UI = {
    "loaded": {
        "JP": "HSC v{v} 読み込み完了 \n/hsc help | /hsc setting | /hsc show テスト\n初回使用時・更新後は設定ページをご確認ください！"
    },
    "help": {
        "JP": "🌀 HSC v{v} コマンド一覧：\n  /hsc setting       — 設定ページを開く\n  /hsc show          — コントロールパネル表示\n  /hsc test [文字]   — 効果を今すぐ発動\n  /hsc climax        — 絶頂エフェクトのテスト"
    },
    "cmdUnknown": {
        "JP": "⚠️ [HSC] 不明なコマンド「{sub}」。/hsc help で確認してください"
    },
    "cantOpenSettings": {
        "JP": "⚠️ 設定ページを開けません（環境設定システム未準備）"
    },
    "exportDone": {
        "JP": "📤 HSC 設定をエクスポートしました (HSC-settings.json)"
    },
    "importDone": {
        "JP": "📥 HSC 設定をインポートしました"
    },
    "editedYourText": {
        "JP": "📝 {who} があなたの HSC 催眠テキストを編集しました"
    },
    "accessedYourText": {
        "JP": "👁 {who} があなたの HSC テキストを閲覧しています"
    },
    "tab_basic": {
        "JP": "基本設定"
    },
    "tab_effects": {
        "JP": "効果設定"
    },
    "tab_texts": {
        "JP": "テキスト設定"
    },
    "tab_expr": {
        "JP": "表情設定"
    },
    "tab_sounds": {
        "JP": "音効設定"
    },
    "tab_about": {
        "JP": "プラグインについて"
    },
    "exit": {
        "JP": "終了"
    },
    "info": {
        "JP": "── 説明 ──"
    },
    "cancel": {
        "JP": "キャンセル"
    },
    "confirm": {
        "JP": "確定"
    },
    "save": {
        "JP": "💾 保存"
    },
    "delete": {
        "JP": "🗑 削除"
    },
    "upload": {
        "JP": "アップロード"
    },
    "clear": {
        "JP": "クリア"
    },
    "other": {
        "JP": "その他"
    },
    "restoreDefault": {
        "JP": "デフォルトに戻す"
    },
    "export": {
        "JP": "設定をエクスポート"
    },
    "import": {
        "JP": "設定をインポート"
    },
    "enabledOn": {
        "JP": "HSC 有効"
    },
    "enabledOff": {
        "JP": "HSC 無効"
    },
    "enabledDesc": {
        "JP": "有効にするとこのプラグインはより高い没入感を提供し、不快に感じる可能性のある効果（強い閃光、画面破砕、振動など）も含まれます。ご自身の状態に応じてご利用ください。"
    },
    "intensity": {
        "JP": "催眠強度"
    },
    "depthMax": {
        "JP": "催眠深度"
    },
    "depthNone": {
        "JP": "無"
    },
    "depthLight": {
        "JP": "軽"
    },
    "depthMed": {
        "JP": "中"
    },
    "depthHeavy": {
        "JP": "重"
    },
    "interval": {
        "JP": "サイクル時間"
    },
    "minutes": {
        "JP": "分（1~99）"
    },
    "depthEffects": {
        "JP": "── 深度エフェクト ──"
    },
    "triggerTarget": {
        "JP": "発動対象"
    },
    "anyone": {
        "JP": "誰でも"
    },
    "whitelistOnly": {
        "JP": "ホワイトリストのみ"
    },
    "whitelist": {
        "JP": "ホワイトリスト"
    },
    "allowOthersOn": {
        "JP": "他人によるテキスト増減を許可：オン"
    },
    "allowOthersOff": {
        "JP": "他人によるテキスト増減を許可：オフ"
    },
    "climaxMode": {
        "JP": "絶頂モード"
    },
    "climaxOnOrgasm": {
        "JP": "オーガズム時のみ"
    },
    "climaxAlways": {
        "JP": "毎回発動"
    },
    "sec_hypnoText": {
        "JP": "催眠テキスト"
    },
    "sec_statusMsg": {
        "JP": "ステータスメッセージ"
    },
    "sec_triggerWords": {
        "JP": "トリガーワード"
    },
    "expr_edit": {
        "JP": "🎭 表情を編集"
    },
    "expr_item": {
        "JP": "表情{n}"
    },
    "expr_add": {
        "JP": "＋ エディターから追加"
    },
    "expr_hint": {
        "JP": "右側で表情を設定してから、各行の「保存」または「追加」をクリックして保存してください"
    },
    "eyebrows": {
        "JP": "眉"
    },
    "eyes": {
        "JP": "目"
    },
    "mouth": {
        "JP": "口"
    },
    "blush": {
        "JP": "赤面"
    },
    "exprNone": {
        "JP": "— なし —"
    },
    "previewLoading": {
        "JP": "プレビュー読み込み中…"
    },
    "confirmReplace": {
        "JP": "右側の内容で「{name}」のデータを置き換えますか？"
    },
    "confirmDelete": {
        "JP": "「{name}」を削除しますか？"
    },
    "confirmReset": {
        "JP": "すべてのカスタム表情を消去し、4種類の組み込みに戻しますか？"
    },
    "snd_lib": {
        "JP": "🔊 サウンドライブラリ"
    },
    "snd_preset": {
        "JP": "プリセット"
    },
    "snd_local": {
        "JP": "ローカル"
    },
    "snd_assignTo": {
        "JP": "「{label}」に割り当て：上の音効をクリック"
    },
    "snd_pickHint": {
        "JP": "枠の「その他」をクリックしてここで割り当て。直接クリックで試聴。"
    },
    "about_author": {
        "JP": "作者：莉柯莉絲(Likolisu)"
    },
    "about_dev": {
        "JP": "本プラグインは個人の趣味で開発されており、多少の不具合がある可能性があります。GitHub での報告をお待ちしています。"
    },
    "about_report": {
        "JP": "🐛 GitHub で報告"
    },
    "about_assets": {
        "JP": "── 使用素材はすべて無料素材です ──"
    },
    "intensityD": {
        "JP": "全体的な効果の強さ（0.1~3.0）。背景の深度レベルも同時に決定します（≈1軽/2中/3強、深度の上限を超えません）。スライダーをドラッグしてください。"
    },
    "depthMaxD": {
        "JP": "背景催眠の最大深度（VOICE トリガーとは別）。「無」＝背景ループを無効化。"
    },
    "intervalD": {
        "JP": "背景催眠を自動再生する間隔（1~99分）。深度が「無」の場合はループしません。"
    },
    "depthRowLight": {
        "JP": "深度：軽"
    },
    "depthRowMed": {
        "JP": "深度：中"
    },
    "depthRowHeavy": {
        "JP": "深度：強"
    },
    "fx_smoke": {
        "JP": "煙霧"
    },
    "fx_smokeD": {
        "JP": "不定期に淡いピンクの煙霧"
    },
    "fx_pant": {
        "JP": "喘ぎ"
    },
    "fx_pantD": {
        "JP": "リズミカルな吐息の白い霧"
    },
    "fx_danmaku": {
        "JP": "弾幕"
    },
    "fx_danmakuD": {
        "JP": "チャットメッセージが催眠弾幕に変化"
    },
    "fx_ghost": {
        "JP": "人影"
    },
    "fx_ghostD": {
        "JP": "背後で囁く人影＋耳元のテキスト"
    },
    "fx_figblur": {
        "JP": "人物ぼかし"
    },
    "fx_figblurD": {
        "JP": "画面はぼやけるがキャラクター／人影はクリアなまま"
    },
    "fx_sfx": {
        "JP": "効果音"
    },
    "fx_sfxD": {
        "JP": "深度サウンドを再生"
    },
    "fx_chatblur": {
        "JP": "チャットぼかし"
    },
    "fx_chatblurD": {
        "JP": "右側のチャットログをぼかす"
    },
    "fx_fade": {
        "JP": "メッセージ浮かび上がり"
    },
    "fx_fadeD": {
        "JP": "新着チャットメッセージの文字がゆっくり浮かび上がる"
    },
    "triggerTargetD": {
        "JP": "誰がトリガーワードを言うとあなたを催眠状態にできるか。「ホワイトリストのみ」の場合、リスト内のメンバーのみ有効。"
    },
    "allowEdit": {
        "JP": "テキスト編集を許可"
    },
    "allowEditD": {
        "JP": "誰があなたのプロフィールで催眠テキストを増減できるか。「自分のみ」は自分だけ編集可能；「ホワイトリストのみ」はリスト内のメンバー（自分を含む）が編集可能。"
    },
    "editOff": {
        "JP": "自分のみ"
    },
    "editAny": {
        "JP": "全員"
    },
    "editWhitelist": {
        "JP": "ホワイトリストのみ"
    },
    "editPermTitle": {
        "JP": "編集を許可する対象"
    },
    "editPermTitleD": {
        "JP": "誰があなたのプロフィールで各種コンテンツを増減できるか。「自分のみ」は自分だけ編集可能；「ホワイトリスト」はリスト内のメンバーが編集可能；「全員」は誰でも編集可能。3種類は下のホワイトリストを共有します。"
    },
    "on": {
        "JP": "オン"
    },
    "off": {
        "JP": "オフ"
    },
    "seeOthersPant": {
        "JP": "他人の喘ぎを見る"
    },
    "seeOthersPantD": {
        "JP": "オンにすると、ルーム内の他人が催眠状態になった時（催眠ブロードキャストを送信時）、相手のキャラクターに喘ぎの白い霧が表示されます。デフォルトはオフ。"
    },
    "seeOthersHypnoLabel": {
        "JP": "催眠進行度"
    },
    "seeOthersHypnoD": {
        "JP": "オンにすると、ルーム内で HSC を導入している他人の頭上に催眠進行度オーブを表示します（相手がブロードキャストする催眠値を読み取り）。デフォルトはオン。"
    },
    "seeOthersTalisLabel": {
        "JP": "催眠護符"
    },
    "seeOthersTalisD": {
        "JP": "オンにすると、ルーム内の他人が強制コントロール状態に陥った時、その頭上に催眠護符を表示します。デフォルトはオン。"
    },
    "hscOrbTip": {
        "JP": "HSC 催眠進行度：{n}%"
    },
    "hscOrbTipTime": {
        "JP": "HSC 覚醒まで {t}"
    },
    "hscOrbTipInf": {
        "JP": "HSC 催眠状態が継続中（自動覚醒なし）"
    },
    "hypnoClimaxLabel": {
        "JP": "催眠絶頂"
    },
    "tab_voice": {
        "JP": "言語催眠"
    },
    "tab_daily": {
        "JP": "日常干渉"
    },
    "tab_state": {
        "JP": "催眠状態"
    },
    "sec_effects": {
        "JP": "効果設定"
    },
    "voiceEnabledLabel": {
        "JP": "言語催眠"
    },
    "voiceEnabledD": {
        "JP": "BCX の「聞いて」または HSC の設定でテキスト・トリガーワード・催眠効果を変更できます。詳細は言語催眠タブをご確認ください。"
    },
    "dailyEnabledLabel": {
        "JP": "日常干渉"
    },
    "dailyEnabledD": {
        "JP": "周期的に発動する催眠で、トリガーワードはありません。詳細は日常干渉タブをご確認ください。"
    },
    "stateEnabledLabel": {
        "JP": "催眠状態"
    },
    "stateEnabledD": {
        "JP": "催眠度100%に達すると発動する HSC の異常状態エフェクトです。詳細は催眠状態タブをご確認ください。"
    },
    "arousalVoiceLabel": {
        "JP": "興奮値 - 言語催眠"
    },
    "arousalVoiceD": {
        "JP": "言語催眠1回ごとに増加する興奮値（0~20、0＝無効）。"
    },
    "arousalDailyLabel": {
        "JP": "興奮値 - 日常干渉"
    },
    "arousalDailyD": {
        "JP": "日常干渉1回ごとに増加する興奮値（0~20、0＝無効）。"
    },
    "hypnoVoiceLabel2": {
        "JP": "催眠値 - 言語催眠"
    },
    "hypnoVoiceD2": {
        "JP": "言語催眠1回ごとに増加する催眠値（0~20）。催眠状態がオフの場合は無効。"
    },
    "hypnoDailyLabel": {
        "JP": "催眠値 - 日常干渉"
    },
    "hypnoDailyD": {
        "JP": "日常干渉1回ごとに増加する催眠値（0~20）。催眠状態がオフの場合は無効。"
    },
    "seeOthersEffect": {
        "JP": "他人の効果を見る"
    },
    "autoWakeLabel": {
        "JP": "自動覚醒"
    },
    "autoWakeD": {
        "JP": "オン：催眠状態に入ると覚醒までのカウントダウン（15〜99分）が始まり、0で自動覚醒。オフ：自動では覚めず、覚醒ワードのみ（頭上に∞表示）。"
    },
    "hypnoExtendLabel": {
        "JP": "催眠延長"
    },
    "hypnoExtendD": {
        "JP": "オンにすると、催眠状態中に音声／日常トリガーを受けるたびに覚醒までの時間が延長されます（10〜990秒、10秒刻み；自動覚醒の基準を超えることも可）。"
    },
    "minUnit": {
        "JP": "分"
    },
    "secUnit": {
        "JP": "秒"
    },
    "forcedGrowthLabel": {
        "JP": "催眠値"
    },
    "forcedGrowthD": {
        "JP": "永遠に覚醒できなくなるのを防ぐため：強制コントロール中に催眠を受けると、催眠値の増加量は通常のN/10になります（デフォルト1/10、例：本来20 → 2）。"
    },
    "showProfileBtnLabel": {
        "JP": "他人のテキストを編集"
    },
    "showProfileBtnD": {
        "JP": "他人のプロフィールに HSC テキスト編集ボタンを表示するかどうかを制御します；オフの場合は表示されません。"
    },
    "hypnoAnimLabel": {
        "JP": "催眠アニメーション"
    },
    "hypnoAnimD": {
        "JP": "催眠護符アニメーションを有効化（開発中）。"
    },
    "hypnoStyleLabel": {
        "JP": "護符スタイル"
    },
    "hypnoStyleD": {
        "JP": "催眠アニメーションで使用する護符の模様（全12種）；ここにマウスを乗せると現在のスタイルをプレビューできます。"
    },
    "hypnoStyleName": {
        "JP": "スタイル{n}"
    },
    "fx_headTalisman": {
        "JP": "頭上に護符を貼る"
    },
    "fx_headTalismanD": {
        "JP": "強制コントロール中、額に護符が常駐し継続的に振動します（独立したスイッチで、催眠アニメーションを有効にする必要はありません）。"
    },
    "fx_faceCensor": {
        "JP": "顔認識障害"
    },
    "fx_faceCensorD": {
        "JP": "強制コントロール中：「他人」の顔がはっきり見えず、蠢く落書きで覆われます。"
    },
    "fx_nameCensor": {
        "JP": "名前認識障害"
    },
    "nameCensorPlayer": {
        "JP": "キャラのみ"
    },
    "nameCensorNetwork": {
        "JP": "関係含む"
    },
    "fx_nameCensorD": {
        "JP": "強制コントロール中：「他人」の名前／IDがはっきり見えません（チャットルームの名札とプロフィールも同時にマスクされます）。"
    },
    "censorStyleLabel": {
        "JP": "落書きスタイル"
    },
    "censorStyleD": {
        "JP": "顔の落書きのスタイルで、2種類から選択します。"
    },
    "censorOff": {
        "JP": "オフ"
    },
    "censorStyleCircle": {
        "JP": "円形"
    },
    "censorStyleLine": {
        "JP": "線状"
    },
    "fx_crowd": {
        "JP": "群衆を表示"
    },
    "fx_crowdD": {
        "JP": "強制コントロール中：画面下端に見物人の列がフェードインし、見られている／囲まれている状況を演出します。"
    },
    "resetAll": {
        "JP": "デフォルトに戻す"
    },
    "resetAllD": {
        "JP": "HSC のすべての設定をデフォルト値に戻します。"
    },
    "confirmResetAll": {
        "JP": "HSC のすべての設定をデフォルト値に戻しますか？この操作は元に戻せません。"
    },
    "hypnoLabel": {
        "JP": "催眠値"
    },
    "hypnoD": {
        "JP": "催眠を受けた際に蓄積される催眠値（0~100、12秒ごとに-1）。100%で強制コントロールに入り、15%未満で解除されます。"
    },
    "hypnoVoiceLabel": {
        "JP": "言語催眠値"
    },
    "hypnoVoiceD": {
        "JP": "言語催眠1回ごとに増加（0~20、0＝無効）。"
    },
    "hypnoDepthLabel": {
        "JP": "深度催眠値"
    },
    "hypnoDepthD": {
        "JP": "深度催眠1回ごとに増加（0~10、0＝無効）。"
    },
    "sec_wakeWord": {
        "JP": "覚醒ワード"
    },
    "wakeWordD": {
        "JP": "ルーム内の「他人」がこの言葉を言うと→あなたは即座に覚醒します（催眠値が80%超の場合は80%に設定）；自分で言っても無効です。1行に1つ。"
    },
    "wakeWordPh": {
        "JP": "例：wake"
    },
    "sec_hypnoResponse": {
        "JP": "催眠応答"
    },
    "hypnoResponseD": {
        "JP": "強制コントロール中（催眠値100%）は発言が横取りされる可能性があり、代わりにここにある文の一つを発言します。1行に1文、$me＝あなたの名前。"
    },
    "hypnoResponsePh": {
        "JP": "例：はい、ご主人様"
    },
    "allowedPhrasesLabel": {
        "JP": "許可される発言"
    },
    "allowedPhrasesD": {
        "JP": "強制コントロール中、あなたの発言全体がここにある文のいずれかと完全に一致する場合、朦朧とせずに普段通り発言されます。1行に1文。"
    },
    "allowedPhrasesPh": {
        "JP": "例：はい、ご主人様"
    },
    "arousalStepLabel": {
        "JP": "興奮値"
    },
    "arousalStepD": {
        "JP": "催眠が発動するごとに増加する興奮値（0~20、0＝無効）。"
    },
    "depthEffectsHint": {
        "JP": "定期発動時にどの効果を出すか自由に選択してください。"
    },
    "expr_new": {
        "JP": "追加"
    },
    "defaultResponses": {
        "JP": "はい、ご主人様\n$meは良い子です\n$meは素直に従います\nんっ！！あぁあぁ～！"
    },
    "hs_enterForced": {
        "JP": "$meの精神は絶え間なく侵食され、視線はますます虚ろになり、最終的には完全に催眠の泥沼に沈んでしまう。"
    },
    "hs_forcedIdle": {
        "JP": "$meの両目は虚ろで呆けており、時折唇がわずかに震えるが、何も言おうとしても声が出ず、全く反応がない、まるで完全に操られた人形のようだ。"
    },
    "hs_exitForced": {
        "JP": "しばらくすると、侵食効果は徐々に$meの頭から引いていき、虚ろだった両目に少しずつ輝きが戻り、意識がゆっくりと戻り始める。"
    },
    "hs_thinking": {
        "JP": "$meはぼんやりと少し考え込んだ…"
    },
    "hs_blank": {
        "JP": "$meはただぼんやりと立ち尽くし、何も言わなかった"
    },
    "hs_pause": {
        "JP": "$meは少し間を置いてから口を開いた"
    },
    "hs_intercept": {
        "JP": "$meは何か言おうとしたが、意識がすぐに妨げられた"
    },
    "hs_lewd": {
        "JP": "$meは今、頭の中がいやらしいことでいっぱいだ"
    },
    "hs_lewdFallback": {
        "JP": "$meは無意識にオナニーを始めてしまう…"
    },
    "l10n_test": {
        "JP": "【翻訳テスト】{name} からのメッセージは HSC によってあなたの言語にリアルタイムで置き換えて表示されました ✅"
    },
    "hypnoClimaxD": {
        "JP": "オンにすると、強制コントロール（催眠値100%）に陥った際、催眠によって絶頂が1回発動します（BC本来のオーガズムフローに従い、拒否／エッジングなどの設定を尊重；興奮システムがオフの場合は作用しません）。"
    },
    "sec_stateMsgFx": {
        "JP": "メッセージ系エフェクト"
    },
    "stateDanmakuChatLabel": {
        "JP": "弾幕文字—チャット"
    },
    "stateDanmakuChatD": {
        "JP": "強制コントロール中：ルーム内の他人のチャットメッセージが漂う弾幕になります（ランダムなフォントサイズ14~20）。"
    },
    "stateDanmakuWhisperLabel": {
        "JP": "弾幕文字—内緒話"
    },
    "stateDanmakuWhisperD": {
        "JP": "強制コントロール中：ルーム内の他人からのあなたへの内緒話は、紫色の弾幕としてあなたの耳元に表示されます。"
    },
    "stateMsgSmokeLabel": {
        "JP": "メッセージ妨害"
    },
    "stateMsgSmokeD": {
        "JP": "強制コントロール中：システムのローカルメッセージと入退室メッセージを除き、各メッセージは煙で覆われ、クリックするとゆっくり晴れていきます。"
    },
    "stateMsgInterfereLabel": {
        "JP": "メッセージ干渉"
    },
    "stateMsgInterfereD": {
        "JP": "強制コントロール中：入退室メッセージは曖昧な幻覚的な描写に書き換えられます。"
    },
    "stateSmokeHint": {
        "JP": "クリックして表示"
    },
    "stateInterfereEnter": {
        "JP": "誰かが入ってきた…\n人が増えたように感じる…\n周囲が騒がしくなった気がする…\n視線が増えたように感じる…"
    },
    "stateInterfereLeave": {
        "JP": "誰かが出て行った…\n人が減ったように感じる…"
    },
    "remoteEditTitle": {
        "JP": "{name} の HSC テキストを編集"
    },
    "remoteEditHint": {
        "JP": "1行1文。$me で被催眠者を表し、$n で改行；$a で始まるステータス行は Action として送信されます。保存すると相手に送信されます（相手が編集をまだ許可している場合のみ有効）。"
    },
    "remoteEditSave": {
        "JP": "💾 保存して送信"
    },
    "remoteEditSent": {
        "JP": "📤 {name} に送信しました。相手の適用を待っています…"
    },
    "remoteEditOk": {
        "JP": "✅ {name} があなたの編集を適用しました"
    },
    "remoteEditDenied": {
        "JP": "⚠️ {name} はあなたの編集を適用しませんでした（あなたは相手のホワイトリストに入っていません）"
    },
    "profileEditBtn": {
        "JP": "相手の HSC テキストを編集"
    },
    "profileEditOff": {
        "JP": "相手はテキスト編集を許可していません"
    },
    "profileEditNoPerm": {
        "JP": "あなたは相手のホワイトリストに入っていないため編集できません"
    },
    "remoteEditNoPerm": {
        "JP": "この編集権限がありません"
    },
    "whitelistD": {
        "JP": "会員番号またはトークン（$owner＝ご主人様、$lover＝恋人(AFC含む)、$friend＝友達、$white＝BCホワイトリスト）、カンマまたはスペース区切り。各種「ホワイトリスト」編集権限はこのリストを共有します。"
    },
    "textsResetD": {
        "JP": "催眠テキスト／ステータスメッセージ／トリガーワードを「現在の言語」のデフォルト値にリセットします（言語切り替え後に翻訳を更新する際に使用）。"
    },
    "confirmTextsReset": {
        "JP": "現在の言語のデフォルト値であなたの催眠テキスト・ステータスメッセージ・トリガーワードを上書きしますか？"
    },
    "whitelistPh": {
        "JP": "例：12345, 67890"
    },
    "language": {
        "JP": "言語"
    },
    "languageD": {
        "JP": "UI言語。Auto＝ゲームのログイン言語に従う；手動選択も可能。"
    },
    "exportD": {
        "JP": "すべての設定をJSONファイルとしてダウンロードします。"
    },
    "importD": {
        "JP": "JSONファイルからすべての設定を復元します。"
    },
    "effectsHint": {
        "JP": "VOICE発動時の各種効果を項目ごとにオン・オフできます。項目にマウスを乗せると説明が表示されます。"
    },
    "ev_pinkFlash": {
        "JP": "ピンクの光暈"
    },
    "ev_pinkFlashD": {
        "JP": "画面にピンクの光暈が広がり、朦朧とした雰囲気を演出します。"
    },
    "ev_hypnoSpiral": {
        "JP": "催眠スパイラル"
    },
    "ev_hypnoSpiralD": {
        "JP": "頭上に回転するスパイラルが出現します。"
    },
    "ev_hypnoWaves": {
        "JP": "同心波紋"
    },
    "ev_hypnoWavesD": {
        "JP": "画面左側に外側へ広がる同心円の波紋が出現します。"
    },
    "ev_screenDistort": {
        "JP": "画面歪み"
    },
    "ev_screenDistortD": {
        "JP": "画面が軽く回転してぼやけ、意識が掻き乱されているように見えます。"
    },
    "ev_vignette": {
        "JP": "周辺減光"
    },
    "ev_vignetteD": {
        "JP": "画面の周囲が暗くなり、中央に焦点を当てます。"
    },
    "ev_danmaku": {
        "JP": "弾幕文字"
    },
    "ev_danmakuD": {
        "JP": "メインの台詞が頭上に、ナレーションは左側に散らばります（チャット履歴含む）。"
    },
    "ev_steam": {
        "JP": "喘ぎの白い霧"
    },
    "ev_steamD": {
        "JP": "口元から柔らかい白い霧が左右下方に漂います。"
    },
    "ev_expression": {
        "JP": "表情切り替え"
    },
    "ev_expressionD": {
        "JP": "催眠中はランダムな表情が適用され、終了後に元に戻ります。"
    },
    "ev_chatFade": {
        "JP": "メッセージ浮かび上がり"
    },
    "ev_chatFadeD": {
        "JP": "発動後10秒間、新着チャットメッセージの文字がゆっくり浮かび上がります（LSCGゴースト風）。"
    },
    "ev_climax": {
        "JP": "絶頂エフェクト"
    },
    "ev_climaxD": {
        "JP": "画面破砕＋赤白の閃光＋振動。"
    },
    "ev_sound": {
        "JP": "喘ぎ声"
    },
    "ev_soundD": {
        "JP": "喘ぎの効果音を再生します（音効設定が必要）。"
    },
    "ev_headshot": {
        "JP": "中央ヘッドショット"
    },
    "ev_headshotD": {
        "JP": "発動ごとに画面中央にヘッドショットを切り抜き、スパイラル／喘ぎはそれを基準にします（ページングを無視）。"
    },
    "ev_dualSound": {
        "JP": "二重効果音"
    },
    "ev_dualSoundD": {
        "JP": "声の再生と同時にトリガー音（振り子など、「催眠」カテゴリの音効を使用）を重ねます。"
    },
    "ev_emote": {
        "JP": "ステータスメッセージ"
    },
    "ev_emoteD": {
        "JP": "発動時にアクションメッセージを送信し、他人にあなたの状態を知らせます。"
    },
    "climaxModeD": {
        "JP": "「オーガズム時のみ」＝BC本当のオーガズム時のみ破砕エフェクトを再生；「毎回発動」＝催眠のたびに再生。"
    },
    "climaxEvery": {
        "JP": "毎回発動"
    },
    "climaxOrgasm": {
        "JP": "オーガズム時のみ"
    },
    "textsHint": {
        "JP": "1行1文。\n$me＝被催眠者名、$n＝改行（弾幕／人影）；\n$a で始まるステータス行は Action として送信。"
    },
    "hypnoTextD": {
        "JP": "弾幕／人影ナレーションのソース。BCX の「聞いて」と併用、被催眠者のみが見える。"
    },
    "hypnoTextPh": {
        "JP": "例：$me、いい子…$nリラックスして…"
    },
    "statusMsgD": {
        "JP": "発動時にランダムで送信されるメッセージ。先頭が $a＝Action（システム動作）、$c＝Chat（通常の発言、呻き声などに使用）、それ以外は Emote になります。"
    },
    "statusMsgPh": {
        "JP": "例：$a $meの思考がぼんやりしてきた / $c あ…んっ…"
    },
    "triggerWordsD": {
        "JP": "1行1語。これらの語を含むチャットを受信すると催眠が発動（BCXの「聞いて」は常に有効）。"
    },
    "triggerWordsPh": {
        "JP": "例：催眠　睡眠"
    },
    "soundsHint": {
        "JP": "各枠にURLを貼り付けるか、ローカルファイルを「アップロード」してください。▶で試聴、✕でクリア、「その他」で右側のライブラリから選択。空欄＝デフォルト。"
    },
    "sndCat_hypno": {
        "JP": "催眠"
    },
    "sndCat_voice": {
        "JP": "催眠2"
    },
    "sndCat_climax": {
        "JP": "絶頂"
    },
    "sndCat_depth": {
        "JP": "深度"
    },
    "sndSlotHead": {
        "JP": "{name}効果音（最大{max}）"
    },
    "sndDefaultPh": {
        "JP": "（デフォルト）{file}"
    },
    "sndUnsetPh": {
        "JP": "未設定 — URL／アップロード／その他"
    },
    "sndLocalName": {
        "JP": "ローカル音効"
    },
    "defaultTexts": {
        "JP": "リラックスして…リラックスして…\nあなたの意識は眠りに落ちていく\n私の声を聞いて\n何も考えなくていい\nどんどん深く\n従うのは気持ちいい\n沈んでいって…\nいい子…いい子だね…"
    },
    "defaultEmotes": {
        "JP": "$meの思考が混乱してきた\n$meの両目が虚ろになる…\n$meの意識が沈んでいく\n$meが少しふらついて、放心した\n$meの表情がぼんやりとしてきた"
    },
    "prefButton": {
        "JP": "HSC 設定"
    }
};
    var MSG = {
    "hs_enterForced": {
        "JP": "{0}の精神は絶え間なく侵食され、視線はますます虚ろになり、最終的には完全に催眠の泥沼に沈んでしまう。"
    },
    "hs_forcedIdle": {
        "JP": "{0}の両目は虚ろで呆けており、時折唇がわずかに震えるが、何も言おうとしても声が出ず、全く反応がない、まるで完全に操られた人形のようだ。"
    },
    "hs_exitForced": {
        "JP": "しばらくすると、侵食効果は徐々に{0}の頭から引いていき、虚ろだった両目に少しずつ輝きが戻り、意識がゆっくりと戻り始める。"
    },
    "hs_thinking": {
        "JP": "{0}はぼんやりと少し考え込んだ…"
    },
    "hs_blank": {
        "JP": "{0}はただぼんやりと立ち尽くし、何も言わなかった"
    },
    "hs_pause": {
        "JP": "{0}は少し間を置いてから口を開いた"
    },
    "hs_intercept": {
        "JP": "{0}は何か言おうとしたが、意識がすぐに妨げられた"
    },
    "hs_lewd": {
        "JP": "{0}は今、頭の中がいやらしいことでいっぱいだ"
    },
    "hs_lewdFallback": {
        "JP": "{0}は無意識にオナニーを始めてしまう…"
    },
    "l10n_test": {
        "JP": "【翻訳テスト】{0} からのメッセージは HSC によってあなたの言語にリアルタイムで置き換えて表示されました ✅"
    }
};
    if (L.__Sys_i18n__ && L.__Sys_i18n__.register) L.__Sys_i18n__.register('HSC', UI);
    if (L.__Sys_L10N__ && L.__Sys_L10N__.register) L.__Sys_L10N__.register('HSC', MSG);
})();
