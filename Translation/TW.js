// ════════════════════════════════════════
//  Liko - HSC 字庫 — TW（繁體中文）
//  自動由 scripts/split（來源 Translation 整理）產生；一國一檔，含 UI(i18n) 與聊天(L10N) 兩套。
//  載入後註冊到共用引擎：__Sys_i18n__（UI）與 __Sys_L10N__（聊天在地化）。
//  佔位符：UI 用 {name}；L10N 用 {0}（觸發者名稱）。
// ════════════════════════════════════════
(function () {
    var L = (typeof window !== 'undefined') ? window.Liko : (globalThis.Liko);
    if (!L) { console.error('[Liko HSC TW] Liko 尚未載入'); return; }
    var UI = {
    "loaded": {
        "TW": "HSC v{v} 已載入 \n/hsc help 說明 | /hsc setting 設定頁 | /hsc show 效果測試\n首次使用或更新時記得前往設定頁檢查！"
    },
    "help": {
        "TW": "🌀 HSC v{v} 指令列表：\n  /hsc setting       — 開啟偏好設定頁\n  /hsc show          — 顯示控制面板\n  /hsc test [文字]   — 立即觸發效果\n  /hsc climax        — 測試高潮特效"
    },
    "cmdUnknown": {
        "TW": "⚠️ [HSC] 未知指令「{sub}」，輸入 /hsc help 查看說明"
    },
    "cantOpenSettings": {
        "TW": "⚠️ 無法開啟設定頁（偏好系統未就緒）"
    },
    "exportDone": {
        "TW": "📤 HSC 設定已匯出 (HSC-settings.json)"
    },
    "importDone": {
        "TW": "📥 HSC 設定已匯入"
    },
    "editedYourText": {
        "TW": "📝 {who} 編輯了你的 HSC 催眠文本"
    },
    "accessedYourText": {
        "TW": "👁 {who} 正在查看你的 HSC 文本"
    },
    "tab_basic": {
        "TW": "基本設定"
    },
    "tab_effects": {
        "TW": "效果設定"
    },
    "tab_texts": {
        "TW": "文本設定"
    },
    "tab_expr": {
        "TW": "表情設定"
    },
    "tab_sounds": {
        "TW": "音效設定"
    },
    "tab_about": {
        "TW": "關於插件"
    },
    "exit": {
        "TW": "離開"
    },
    "info": {
        "TW": "── 說明 ──"
    },
    "cancel": {
        "TW": "取消"
    },
    "confirm": {
        "TW": "確定"
    },
    "save": {
        "TW": "💾 保存"
    },
    "delete": {
        "TW": "🗑 刪除"
    },
    "upload": {
        "TW": "上傳"
    },
    "clear": {
        "TW": "清除"
    },
    "other": {
        "TW": "其他"
    },
    "restoreDefault": {
        "TW": "還原預設"
    },
    "export": {
        "TW": "匯出設定"
    },
    "import": {
        "TW": "匯入設定"
    },
    "enabledOn": {
        "TW": "HSC 啟用中"
    },
    "enabledOff": {
        "TW": "HSC 停用中"
    },
    "enabledDesc": {
        "TW": "開啟後此插件會有更高沉浸性，並包含部分可能令人不適的效果（強閃光、畫面破碎、震動等），請依個人狀況使用。"
    },
    "intensity": {
        "TW": "催眠強度"
    },
    "depthMax": {
        "TW": "催眠深度"
    },
    "depthNone": {
        "TW": "無"
    },
    "depthLight": {
        "TW": "輕"
    },
    "depthMed": {
        "TW": "中"
    },
    "depthHeavy": {
        "TW": "重"
    },
    "interval": {
        "TW": "循環時間"
    },
    "minutes": {
        "TW": "分（1~99）"
    },
    "depthEffects": {
        "TW": "── 深度效果 ──"
    },
    "triggerTarget": {
        "TW": "觸發對象"
    },
    "anyone": {
        "TW": "任何人"
    },
    "whitelistOnly": {
        "TW": "僅白名單"
    },
    "whitelist": {
        "TW": "白名單"
    },
    "allowOthersOn": {
        "TW": "允許他人增減我的文本：開"
    },
    "allowOthersOff": {
        "TW": "允許他人增減我的文本：關"
    },
    "climaxMode": {
        "TW": "高潮模式"
    },
    "climaxOnOrgasm": {
        "TW": "僅高潮時"
    },
    "climaxAlways": {
        "TW": "每次觸發"
    },
    "sec_hypnoText": {
        "TW": "催眠文本"
    },
    "sec_statusMsg": {
        "TW": "狀態訊息"
    },
    "sec_triggerWords": {
        "TW": "觸發詞"
    },
    "expr_edit": {
        "TW": "🎭 編輯表情"
    },
    "expr_item": {
        "TW": "表情{n}"
    },
    "expr_add": {
        "TW": "＋ 新增表情"
    },
    "expr_hint": {
        "TW": "在右側設定好表情後，點某列「保存」或「＋新增」來儲存"
    },
    "eyebrows": {
        "TW": "眉毛"
    },
    "eyes": {
        "TW": "眼睛"
    },
    "mouth": {
        "TW": "嘴巴"
    },
    "blush": {
        "TW": "臉紅"
    },
    "exprNone": {
        "TW": "— 無 —"
    },
    "previewLoading": {
        "TW": "預覽載入中…"
    },
    "confirmReplace": {
        "TW": "會用右側的內容替換「{name}」的資料，確定嗎？"
    },
    "confirmDelete": {
        "TW": "確定刪除「{name}」嗎？"
    },
    "confirmReset": {
        "TW": "會清除所有自訂表情，恢復 4 組內建，確定嗎？"
    },
    "snd_lib": {
        "TW": "🔊 音效庫"
    },
    "snd_preset": {
        "TW": "預設"
    },
    "snd_local": {
        "TW": "本機"
    },
    "snd_assignTo": {
        "TW": "指派給「{label}」：點上面任一音效"
    },
    "snd_pickHint": {
        "TW": "點格子的「其他」後可在此指派；直接點則試聽。"
    },
    "about_author": {
        "TW": "作者：莉柯莉絲(Likolisu)"
    },
    "about_dev": {
        "TW": "本插件為個人興趣開發，可能存在些許錯誤，歡迎到 GitHub 回報。"
    },
    "about_report": {
        "TW": "🐛 GitHub 回報"
    },
    "about_assets": {
        "TW": "── 使用素材皆為免費素材 ──"
    },
    "intensityD": {
        "TW": "整體效果強度（0.1~3.0），同時決定背景深度等級（≈1輕/2中/3重，不超過深度上限）。可拖曳滑桿。"
    },
    "depthMaxD": {
        "TW": "背景催眠的最深程度（與 VOICE 觸發分開）。「無」＝關閉背景循環。"
    },
    "intervalD": {
        "TW": "每隔幾分鐘自動播放一次背景催眠（1~99）。深度「無」時不循環。"
    },
    "depthRowLight": {
        "TW": "深度輕"
    },
    "depthRowMed": {
        "TW": "深度中"
    },
    "depthRowHeavy": {
        "TW": "深度重"
    },
    "fx_smoke": {
        "TW": "煙霧"
    },
    "fx_smokeD": {
        "TW": "不定時淡粉煙霧"
    },
    "fx_pant": {
        "TW": "喘氣"
    },
    "fx_pantD": {
        "TW": "規律喘氣白霧"
    },
    "fx_danmaku": {
        "TW": "彈幕"
    },
    "fx_danmakuD": {
        "TW": "聊天訊息變催眠彈幕"
    },
    "fx_ghost": {
        "TW": "人影"
    },
    "fx_ghostD": {
        "TW": "背後低語人影＋耳邊文字"
    },
    "fx_figblur": {
        "TW": "人物模糊"
    },
    "fx_figblurD": {
        "TW": "畫面模糊但人物/人影保持清晰"
    },
    "fx_sfx": {
        "TW": "音效"
    },
    "fx_sfxD": {
        "TW": "播放深度音效"
    },
    "fx_chatblur": {
        "TW": "聊天模糊"
    },
    "fx_chatblurD": {
        "TW": "右側聊天訊息模糊"
    },
    "fx_fade": {
        "TW": "訊息浮現"
    },
    "fx_fadeD": {
        "TW": "新進聊天訊息字體慢慢浮現"
    },
    "triggerTargetD": {
        "TW": "誰說出觸發詞會讓你進入催眠。「僅白名單」時只有名單內成員有效。"
    },
    "allowEdit": {
        "TW": "允許文本修改"
    },
    "allowEditD": {
        "TW": "誰可在你的角色資料頁增減你的催眠文本。「僅自己」只有你能編輯；「僅白名單」時名單內成員（含你自己）可編輯。"
    },
    "editOff": {
        "TW": "僅自己"
    },
    "editAny": {
        "TW": "所有人"
    },
    "editWhitelist": {
        "TW": "僅白名單"
    },
    "editPermTitle": {
        "TW": "允許編輯對象"
    },
    "editPermTitleD": {
        "TW": "誰可在你的角色資料頁增減各類內容。「僅自己」只有你能編輯；「白名單」名單內成員可編輯；「所有人」任何人都可編輯。三類共用下方白名單。"
    },
    "on": {
        "TW": "開"
    },
    "off": {
        "TW": "關"
    },
    "seeOthersPant": {
        "TW": "看到他人喘氣"
    },
    "seeOthersPantD": {
        "TW": "開啟後，當房內其他人被催眠（送出催眠廣播）時，你會在對方角色身上看到喘氣白霧。預設關閉。"
    },
    "seeOthersHypnoLabel": {
        "TW": "催眠進度"
    },
    "seeOthersHypnoD": {
        "TW": "開啟後，在房內其他裝了 HSC 的人頭上顯示他們的催眠進度球（讀取對方公告的催眠值）。預設開啟。"
    },
    "seeOthersTalisLabel": {
        "TW": "催眠符咒"
    },
    "seeOthersTalisD": {
        "TW": "開啟後，當房內其他人陷入強控時，在他們頭上顯示催眠符咒。預設開啟。"
    },
    "hscOrbTip": {
        "TW": "HSC 催眠進度為 {n}%"
    },
    "hscOrbTipTime": {
        "TW": "HSC 距離清醒還有 {t}"
    },
    "hscOrbTipInf": {
        "TW": "HSC 催眠狀態持續中（無自動清醒）"
    },
    "hypnoClimaxLabel": {
        "TW": "催眠高潮"
    },
    "tab_voice": {
        "TW": "語言催眠"
    },
    "tab_daily": {
        "TW": "日常干擾"
    },
    "tab_state": {
        "TW": "催眠狀態"
    },
    "sec_effects": {
        "TW": "效果設定"
    },
    "voiceEnabledLabel": {
        "TW": "語言催眠"
    },
    "voiceEnabledD": {
        "TW": "通過 BCX 的「聽我聲音」或 HSC 的設置來修改文本、觸發詞與催眠效果，請到語言催眠查閱並設置詳細內容。"
    },
    "dailyEnabledLabel": {
        "TW": "日常干擾"
    },
    "dailyEnabledD": {
        "TW": "週期性的觸發催眠，沒有任何催眠詞，請到日常干擾查閱並設置詳細內容。"
    },
    "stateEnabledLabel": {
        "TW": "催眠狀態"
    },
    "stateEnabledD": {
        "TW": "提供 HSC 的催眠異常狀態效果，當達到催眠度 100% 時觸發，請到催眠狀態查閱並設置詳細內容。"
    },
    "arousalVoiceLabel": {
        "TW": "興奮值 - 語音催眠"
    },
    "arousalVoiceD": {
        "TW": "每次語音催眠增加的興奮值（0~20，0＝停用）。"
    },
    "arousalDailyLabel": {
        "TW": "興奮值 - 日常干擾"
    },
    "arousalDailyD": {
        "TW": "每次日常干擾增加的興奮值（0~20，0＝停用）。"
    },
    "hypnoVoiceLabel2": {
        "TW": "催眠值 - 語音催眠"
    },
    "hypnoVoiceD2": {
        "TW": "每次語音催眠增加的催眠值（0~20）。催眠狀態關閉則無效。"
    },
    "hypnoDailyLabel": {
        "TW": "催眠值 - 日常干擾"
    },
    "hypnoDailyD": {
        "TW": "每次日常干擾增加的催眠值（0~20）。催眠狀態關閉則無效。"
    },
    "seeOthersEffect": {
        "TW": "看見他人效果"
    },
    "autoWakeLabel": {
        "TW": "自動清醒"
    },
    "autoWakeD": {
        "TW": "開啟：進入催眠狀態時給一段清醒倒數（可拉 15~99 分鐘），倒數到 0 自動清醒。關閉：不自動醒，只能靠清醒詞（頭上顯示 ∞）。"
    },
    "hypnoExtendLabel": {
        "TW": "催眠延長"
    },
    "hypnoExtendD": {
        "TW": "開啟後，催眠狀態中每次再被語音／日常觸發，就把清醒時間延長一段（可拉 10~990 秒，10 秒一格；可超過自動清醒基底）。"
    },
    "minUnit": {
        "TW": "分"
    },
    "secUnit": {
        "TW": "秒"
    },
    "forcedGrowthLabel": {
        "TW": "催眠值"
    },
    "forcedGrowthD": {
        "TW": "避免永遠無法清醒：強控中受到催眠時，催眠值成長為原本的 N/10（預設 1/10，例：原 20 → 2）。"
    },
    "showProfileBtnLabel": {
        "TW": "編輯他人文本"
    },
    "showProfileBtnD": {
        "TW": "控制是否在別人的 profile 顯示 HSC 文本編輯按鈕；關閉則不顯示。"
    },
    "hypnoAnimLabel": {
        "TW": "催眠動畫"
    },
    "hypnoAnimD": {
        "TW": "啟用催眠符咒動畫（開發中）。"
    },
    "hypnoStyleLabel": {
        "TW": "符咒樣式"
    },
    "hypnoStyleD": {
        "TW": "催眠動畫使用的符咒圖樣（共 12 種）；滑鼠停在此處可預覽當前樣式。"
    },
    "hypnoStyleName": {
        "TW": "樣式{n}"
    },
    "fx_headTalisman": {
        "TW": "頭上貼符咒"
    },
    "fx_headTalismanD": {
        "TW": "強控中額頭常駐符咒且持續震動（獨立開關，不需開啟催眠動畫）。"
    },
    "fx_faceCensor": {
        "TW": "面部識別障礙"
    },
    "fx_faceCensorD": {
        "TW": "強控中：看不清「他人」的臉，臉上會蓋一團蠕動的塗鴉。"
    },
    "fx_nameCensor": {
        "TW": "名稱識別障礙"
    },
    "nameCensorPlayer": {
        "TW": "僅玩家"
    },
    "nameCensorNetwork": {
        "TW": "含關係網"
    },
    "fx_nameCensorD": {
        "TW": "強控中：看不清「他人」的名字／ID（聊天室名牌與 profile 一併遮蔽）。"
    },
    "censorStyleLabel": {
        "TW": "塗鴉樣式"
    },
    "censorStyleD": {
        "TW": "面部塗鴉的樣式，二選一。"
    },
    "censorOff": {
        "TW": "關"
    },
    "censorStyleCircle": {
        "TW": "圓圈"
    },
    "censorStyleLine": {
        "TW": "線條"
    },
    "fx_crowd": {
        "TW": "顯示人群"
    },
    "fx_crowdD": {
        "TW": "強控中：畫面下緣淡入一排圍觀人群，營造被注視／包圍的情境。"
    },
    "resetAll": {
        "TW": "恢復預設"
    },
    "resetAllD": {
        "TW": "把 HSC 全部設定恢復為預設值。"
    },
    "confirmResetAll": {
        "TW": "確定要把 HSC 所有設定恢復為預設值嗎？此動作無法復原。"
    },
    "hypnoLabel": {
        "TW": "催眠值"
    },
    "hypnoD": {
        "TW": "收到催眠時累積的催眠值（0~100，每 12 秒 -1）。到 100% 進入強控，低於 15% 解除。"
    },
    "hypnoVoiceLabel": {
        "TW": "語音催眠值"
    },
    "hypnoVoiceD": {
        "TW": "每次語音催眠增加（0~20，0＝停用）。"
    },
    "hypnoDepthLabel": {
        "TW": "深度催眠值"
    },
    "hypnoDepthD": {
        "TW": "每次深度催眠增加（0~10，0＝停用）。"
    },
    "sec_wakeWord": {
        "TW": "清醒詞"
    },
    "wakeWordD": {
        "TW": "房內「他人」說出此詞→你立即清醒（催眠值 >80% 設為 80%）；自己說無效。每行一個。"
    },
    "wakeWordPh": {
        "TW": "例：wake"
    },
    "sec_hypnoResponse": {
        "TW": "催眠回應"
    },
    "hypnoResponseD": {
        "TW": "強控（催眠值 100%）時說話有機會被攔截，改說這裡的其中一句。每行一句，$me＝你的名字。"
    },
    "hypnoResponsePh": {
        "TW": "例：是的主人"
    },
    "allowedPhrasesLabel": {
        "TW": "允許說的話"
    },
    "allowedPhrasesD": {
        "TW": "強控中，若你說的整句剛好是這裡的其中一句，就不會陷入思考、照常說出。每行一句。"
    },
    "allowedPhrasesPh": {
        "TW": "例：是的主人"
    },
    "arousalStepLabel": {
        "TW": "興奮值"
    },
    "arousalStepD": {
        "TW": "每次觸發催眠增加的興奮值（0~20，0＝停用）。"
    },
    "depthEffectsHint": {
        "TW": "定時觸發時要出現哪些效果，自由勾選。"
    },
    "expr_new": {
        "TW": "新增"
    },
    "defaultResponses": {
        "TW": "是的主人\n$me是個乖女孩\n$me會乖乖聽話\n嗯嗯!!阿啊啊~!"
    },
    "hs_enterForced": {
        "TW": "$me 的精神被不斷侵蝕，眼神越來越渙散，最終徹底墜入催眠的泥沼。"
    },
    "hs_forcedIdle": {
        "TW": "$me 的雙眼空洞呆滯，偶爾嘴唇會微微顫動，像是想說什麼，卻發不出任何聲音，整個人毫無反應，如同被徹底操控的人偶。"
    },
    "hs_exitForced": {
        "TW": "經過一段時間後，侵蝕效果慢慢從 $me 的腦中退去，空洞的雙眼逐漸恢復些許光澤，意識開始緩緩回歸。"
    },
    "hs_thinking": {
        "TW": "$me 呆呆地思考了一下…"
    },
    "hs_blank": {
        "TW": "$me 只是呆呆地站著，什麼也沒說"
    },
    "hs_pause": {
        "TW": "$me 停頓了一下才開口"
    },
    "hs_intercept": {
        "TW": "$me 想說些什麼，但意識馬上被干擾了"
    },
    "hs_lewd": {
        "TW": "$me 現在滿腦子只想著淫穢的事情"
    },
    "hs_lewdFallback": {
        "TW": "$me 開始不自覺地自慰起來…"
    },
    "l10n_test": {
        "TW": "【翻譯測試】{name} 傳來的訊息已被 HSC 依你的語言即時替換顯示 ✅"
    },
    "hypnoClimaxD": {
        "TW": "開啟後，陷入強控（催眠值 100%）時會因催眠而觸發一次高潮（走 BC 原生高潮流程，尊重否認／邊緣等設定；興奮系統關閉時不作用）。"
    },
    "sec_stateMsgFx": {
        "TW": "訊息類效果"
    },
    "stateDanmakuChatLabel": {
        "TW": "彈幕文字—聊天"
    },
    "stateDanmakuChatD": {
        "TW": "強控中：房內他人的聊天訊息會化為漂浮彈幕（隨機字級 14~20）。"
    },
    "stateDanmakuWhisperLabel": {
        "TW": "彈幕文字—悄悄話"
    },
    "stateDanmakuWhisperD": {
        "TW": "強控中：房內他人對你的悄悄話會以紫色彈幕出現在你耳邊。"
    },
    "stateMsgSmokeLabel": {
        "TW": "訊息妨礙"
    },
    "stateMsgSmokeD": {
        "TW": "強控中：除了系統本地訊息與人員進出訊息外，每則訊息被煙霧遮住，點一下才慢慢散去。"
    },
    "stateMsgInterfereLabel": {
        "TW": "信息干擾"
    },
    "stateMsgInterfereD": {
        "TW": "強控中：人員進／出房間的訊息被改寫成模糊的幻覺敘述。"
    },
    "stateSmokeHint": {
        "TW": "點擊揭示"
    },
    "stateInterfereEnter": {
        "TW": "有誰進來了\n人感覺變多了\n感覺周圍變的吵雜\n感覺身上的視線變多了"
    },
    "stateInterfereLeave": {
        "TW": "有誰離開了\n人感覺變少了"
    },
    "remoteEditTitle": {
        "TW": "編輯 {name} 的 HSC 文本"
    },
    "remoteEditHint": {
        "TW": "每行一句。可用 $me 代表被催眠者、$n 換行；狀態訊息以 $a 開頭會發 Action。儲存後送給對方（對方需仍允許編輯才生效）。"
    },
    "remoteEditSave": {
        "TW": "💾 儲存並送出"
    },
    "remoteEditSent": {
        "TW": "📤 已送出給 {name}，等待對方套用…"
    },
    "remoteEditOk": {
        "TW": "✅ {name} 已套用你的編輯"
    },
    "remoteEditDenied": {
        "TW": "⚠️ {name} 未套用你的編輯（你不在對方白名單）"
    },
    "profileEditBtn": {
        "TW": "編輯對方的 HSC 文本"
    },
    "profileEditOff": {
        "TW": "對方未開放編輯文本"
    },
    "profileEditNoPerm": {
        "TW": "你不在對方白名單，無法編輯"
    },
    "remoteEditNoPerm": {
        "TW": "你沒有此項編輯權限"
    },
    "whitelistD": {
        "TW": "會員編號或代號（$owner＝主人、$lover＝愛人含 AFC、$friend＝好友、$white＝BC白名單），逗號或空白分隔。各類「白名單」編輯權限共用此名單。"
    },
    "textsResetD": {
        "TW": "把催眠文本／狀態訊息／觸發詞重設為「目前語言」的預設值（切換語言後可用來更新翻譯）。"
    },
    "confirmTextsReset": {
        "TW": "會用目前語言的預設覆蓋你的催眠文本、狀態訊息與觸發詞，確定嗎？"
    },
    "whitelistPh": {
        "TW": "例：12345, 67890"
    },
    "language": {
        "TW": "語言"
    },
    "languageD": {
        "TW": "介面語言。Auto＝依遊戲登入語系；也可手動選擇。"
    },
    "exportD": {
        "TW": "把所有設定下載為 JSON 檔。"
    },
    "importD": {
        "TW": "從 JSON 檔還原所有設定。"
    },
    "effectsHint": {
        "TW": "逐項開關 VOICE 觸發時的各種效果，滑鼠移到項目上可看說明。"
    },
    "ev_pinkFlash": {
        "TW": "粉紅暈染"
    },
    "ev_pinkFlashD": {
        "TW": "畫面泛起粉紅光暈，營造迷濛氛圍。"
    },
    "ev_hypnoSpiral": {
        "TW": "催眠螺旋"
    },
    "ev_hypnoSpiralD": {
        "TW": "在頭部上方出現旋轉螺旋。"
    },
    "ev_hypnoWaves": {
        "TW": "同心電波"
    },
    "ev_hypnoWavesD": {
        "TW": "畫面左側出現向外擴張的同心圓波。"
    },
    "ev_screenDistort": {
        "TW": "畫面扭曲"
    },
    "ev_screenDistortD": {
        "TW": "畫面輕微旋轉模糊，像意識被攪動。"
    },
    "ev_vignette": {
        "TW": "邊緣暗角"
    },
    "ev_vignetteD": {
        "TW": "畫面四周變暗，聚焦中央。"
    },
    "ev_danmaku": {
        "TW": "彈幕文字"
    },
    "ev_danmakuD": {
        "TW": "主台詞在頭上、旁白句散落左側（含聊天歷史）。"
    },
    "ev_steam": {
        "TW": "喘氣白霧"
    },
    "ev_steamD": {
        "TW": "嘴邊呼出柔和白霧，向左右下方飄散。"
    },
    "ev_expression": {
        "TW": "表情切換"
    },
    "ev_expressionD": {
        "TW": "催眠時隨機套用表情，結束後還原。"
    },
    "ev_chatFade": {
        "TW": "訊息浮現"
    },
    "ev_chatFadeD": {
        "TW": "觸發後 10 秒內，新進聊天訊息字體會慢慢浮現（LSCG 幽靈風）。"
    },
    "ev_climax": {
        "TW": "高潮特效"
    },
    "ev_climaxD": {
        "TW": "畫面碎裂＋紅白閃光＋震動。"
    },
    "ev_sound": {
        "TW": "喘息聲音"
    },
    "ev_soundD": {
        "TW": "播放喘息音效（需音效設定）。"
    },
    "ev_headshot": {
        "TW": "中央頭像"
    },
    "ev_headshotD": {
        "TW": "每次觸發在畫面中央裁出頭像，螺旋／喘氣以它為基準（忽略分頁）。"
    },
    "ev_dualSound": {
        "TW": "雙重音效"
    },
    "ev_dualSoundD": {
        "TW": "播放說話聲的同時，疊放一個觸發音（鐘擺等，使用「催眠」分類音效）。"
    },
    "ev_emote": {
        "TW": "狀態訊息"
    },
    "ev_emoteD": {
        "TW": "觸發時發送一條動作訊息，讓他人知道你的狀態。"
    },
    "climaxModeD": {
        "TW": "「僅高潮時」＝BC 真正高潮才放破碎特效；「每次觸發」＝每次催眠都放。"
    },
    "climaxEvery": {
        "TW": "每次觸發"
    },
    "climaxOrgasm": {
        "TW": "僅高潮時"
    },
    "textsHint": {
        "TW": "每行一句。\n$me＝被催眠者名稱、$n＝換行（彈幕／人影）；\n狀態訊息以 $a 開頭會以 Action 發送。"
    },
    "hypnoTextD": {
        "TW": "彈幕／人影旁白來源，會和 BCX 的聽我聲音一起使用，僅被催眠者能看見。"
    },
    "hypnoTextPh": {
        "TW": "例：$me 好乖…$n放鬆…"
    },
    "statusMsgD": {
        "TW": "觸發催眠時隨機發送的訊息。開頭 $a＝Action（系統動作）、$c＝Chat（一般說話，可用於呻吟），否則為 Emote。"
    },
    "statusMsgPh": {
        "TW": "例：$a $me 的思緒變得混亂了 / $c 啊…嗯…"
    },
    "triggerWordsD": {
        "TW": "每行一個，聊天接收到含指定詞的訊息時會觸發你的催眠（BCX 的「聽我聲音」永遠有效）。"
    },
    "triggerWordsPh": {
        "TW": "例：催眠　沉睡"
    },
    "soundsHint": {
        "TW": "每格可貼網址或「上傳」本機檔。「▶」試聽、「✕」清除、「其他」從右側音效庫選用。空白＝預設。"
    },
    "sndCat_hypno": {
        "TW": "催眠"
    },
    "sndCat_voice": {
        "TW": "催眠2"
    },
    "sndCat_climax": {
        "TW": "高潮"
    },
    "sndCat_depth": {
        "TW": "深度"
    },
    "sndSlotHead": {
        "TW": "{name}音效（最多 {max}）"
    },
    "sndDefaultPh": {
        "TW": "（預設）{file}"
    },
    "sndUnsetPh": {
        "TW": "未設定 — 網址／上傳／其他"
    },
    "sndLocalName": {
        "TW": "本機音效"
    },
    "defaultTexts": {
        "TW": "放鬆…放鬆…\n你的意識正在沉睡\n聽我的聲音\n什麼都不用想\n越來越深沉\n順從是舒服的\n沉淪下去吧\n好乖…好乖…"
    },
    "defaultEmotes": {
        "TW": "$me 的思緒變得混亂了\n$me 的兩眼變得空洞…\n$me 的意識正在下沉\n$me 微微晃了一下，失神了\n$me 的表情變得恍惚"
    },
    "prefButton": {
        "TW": "HSC 催眠設定"
    }
};
    var MSG = {
    "hs_enterForced": {
        "TW": "{0} 的精神被不斷侵蝕，眼神越來越渙散，最終徹底墜入催眠的泥沼。"
    },
    "hs_forcedIdle": {
        "TW": "{0} 的雙眼空洞呆滯，偶爾嘴唇會微微顫動，像是想說什麼，卻發不出任何聲音，整個人毫無反應，如同被徹底操控的人偶。"
    },
    "hs_exitForced": {
        "TW": "經過一段時間後，侵蝕效果慢慢從 {0} 的腦中退去，空洞的雙眼逐漸恢復些許光澤，意識開始緩緩回歸。"
    },
    "hs_thinking": {
        "TW": "{0} 呆呆地思考了一下…"
    },
    "hs_blank": {
        "TW": "{0} 只是呆呆地站著，什麼也沒說"
    },
    "hs_pause": {
        "TW": "{0} 停頓了一下才開口"
    },
    "hs_intercept": {
        "TW": "{0} 想說些什麼，但意識馬上被干擾了"
    },
    "hs_lewd": {
        "TW": "{0} 現在滿腦子只想著淫穢的事情"
    },
    "hs_lewdFallback": {
        "TW": "{0} 開始不自覺地自慰起來…"
    },
    "l10n_test": {
        "TW": "【翻譯測試】{0} 傳來的訊息已被 HSC 依你的語言即時替換顯示 ✅"
    }
};
    if (L.__Sys_i18n__ && L.__Sys_i18n__.register) L.__Sys_i18n__.register('HSC', UI);
    if (L.__Sys_L10N__ && L.__Sys_L10N__.register) L.__Sys_L10N__.register('HSC', MSG);
})();
