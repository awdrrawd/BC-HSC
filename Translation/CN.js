// ════════════════════════════════════════
//  Liko - HSC 字庫 — CN（简体中文）
//  自動由 scripts/split（來源 Translation 整理）產生；一國一檔，含 UI(i18n) 與聊天(L10N) 兩套。
//  載入後註冊到共用引擎：__Sys_i18n__（UI）與 __Sys_L10N__（聊天在地化）。
//  佔位符：UI 用 {name}；L10N 用 {0}（觸發者名稱）。
// ════════════════════════════════════════
(function () {
    var L = (typeof window !== 'undefined') ? window.Liko : (globalThis.Liko);
    if (!L) { console.error('[Liko HSC CN] Liko 尚未載入'); return; }
    var UI = {
    "loaded": {
        "CN": "HSC v{v} 已加载 \n/hsc help 说明 | /hsc setting 设置页 | /hsc show 效果测试\n首次使用或更新时记得前往设置页检查！"
    },
    "help": {
        "CN": "🌀 HSC v{v} 指令列表：\n  /hsc setting       — 打开偏好设置页\n  /hsc show          — 显示控制面板\n  /hsc test [文字]   — 立即触发效果\n  /hsc climax        — 测试高潮特效"
    },
    "cmdUnknown": {
        "CN": "⚠️ [HSC] 未知指令「{sub}」，输入 /hsc help 查看说明"
    },
    "cantOpenSettings": {
        "CN": "⚠️ 无法打开设置页（偏好系统未就绪）"
    },
    "exportDone": {
        "CN": "📤 HSC 设置已导出 (HSC-settings.json)"
    },
    "importDone": {
        "CN": "📥 HSC 设置已导入"
    },
    "editedYourText": {
        "CN": "📝 {who} 编辑了你的 HSC 催眠文本"
    },
    "accessedYourText": {
        "CN": "👁 {who} 正在查看你的 HSC 文本"
    },
    "tab_basic": {
        "CN": "基本设置"
    },
    "tab_effects": {
        "CN": "效果设置"
    },
    "tab_texts": {
        "CN": "文本设置"
    },
    "tab_expr": {
        "CN": "表情设置"
    },
    "tab_sounds": {
        "CN": "音效设置"
    },
    "tab_about": {
        "CN": "关于插件"
    },
    "exit": {
        "CN": "离开"
    },
    "info": {
        "CN": "── 说明 ──"
    },
    "cancel": {
        "CN": "取消"
    },
    "confirm": {
        "CN": "确定"
    },
    "save": {
        "CN": "💾 保存"
    },
    "delete": {
        "CN": "🗑 删除"
    },
    "upload": {
        "CN": "上传"
    },
    "clear": {
        "CN": "清除"
    },
    "other": {
        "CN": "其他"
    },
    "restoreDefault": {
        "CN": "还原预设"
    },
    "export": {
        "CN": "导出设置"
    },
    "import": {
        "CN": "导入设置"
    },
    "enabledOn": {
        "CN": "HSC 启用中"
    },
    "enabledOff": {
        "CN": "HSC 停用中"
    },
    "enabledDesc": {
        "CN": "开启后此插件会有更高沉浸性，并包含部分可能令人不适的效果（强闪光、画面破碎、震动等），请依个人情况使用。"
    },
    "intensity": {
        "CN": "催眠强度"
    },
    "depthMax": {
        "CN": "催眠深度"
    },
    "depthNone": {
        "CN": "无"
    },
    "depthLight": {
        "CN": "轻"
    },
    "depthMed": {
        "CN": "中"
    },
    "depthHeavy": {
        "CN": "重"
    },
    "interval": {
        "CN": "循环时间"
    },
    "minutes": {
        "CN": "分（1~99）"
    },
    "depthEffects": {
        "CN": "── 深度效果 ──"
    },
    "triggerTarget": {
        "CN": "触发对象"
    },
    "anyone": {
        "CN": "任何人"
    },
    "whitelistOnly": {
        "CN": "仅白名单"
    },
    "whitelist": {
        "CN": "白名单"
    },
    "allowOthersOn": {
        "CN": "允许他人增减我的文本：开"
    },
    "allowOthersOff": {
        "CN": "允许他人增减我的文本：关"
    },
    "climaxMode": {
        "CN": "高潮模式"
    },
    "climaxOnOrgasm": {
        "CN": "仅高潮时"
    },
    "climaxAlways": {
        "CN": "每次触发"
    },
    "sec_hypnoText": {
        "CN": "催眠文本"
    },
    "sec_statusMsg": {
        "CN": "状态信息"
    },
    "sec_triggerWords": {
        "CN": "触发词"
    },
    "expr_edit": {
        "CN": "🎭 编辑表情"
    },
    "expr_item": {
        "CN": "表情{n}"
    },
    "expr_add": {
        "CN": "＋ 新增表情"
    },
    "expr_hint": {
        "CN": "在右侧设置好表情后，点某行「保存」或「＋新增」来保存"
    },
    "eyebrows": {
        "CN": "眉毛"
    },
    "eyes": {
        "CN": "眼睛"
    },
    "mouth": {
        "CN": "嘴巴"
    },
    "blush": {
        "CN": "脸红"
    },
    "exprNone": {
        "CN": "— 无 —"
    },
    "previewLoading": {
        "CN": "预览加载中…"
    },
    "confirmReplace": {
        "CN": "会用右侧的内容替换「{name}」的数据，确定吗？"
    },
    "confirmDelete": {
        "CN": "确定删除「{name}」吗？"
    },
    "confirmReset": {
        "CN": "会清除所有自定义表情，恢复 4 组内建，确定吗？"
    },
    "snd_lib": {
        "CN": "🔊 音效库"
    },
    "snd_preset": {
        "CN": "预设"
    },
    "snd_local": {
        "CN": "本机"
    },
    "snd_assignTo": {
        "CN": "指派给「{label}」：点上面任一音效"
    },
    "snd_pickHint": {
        "CN": "点格子的「其他」后可在此指派；直接点则试听。"
    },
    "about_author": {
        "CN": "作者：莉柯莉丝(Likolisu)"
    },
    "about_dev": {
        "CN": "本插件为个人兴趣开发，可能存在些许错误，欢迎到 GitHub 回报。"
    },
    "about_report": {
        "CN": "🐛 GitHub 回报"
    },
    "about_assets": {
        "CN": "── 使用素材皆为免费素材 ──"
    },
    "intensityD": {
        "CN": "整体效果强度（0.1~3.0），同时决定背景深度等级（≈1轻/2中/3重，不超过深度上限）。可拖曳滑杆。"
    },
    "depthMaxD": {
        "CN": "背景催眠的最深程度（与 VOICE 触发分开）。「无」＝关闭背景循环。"
    },
    "intervalD": {
        "CN": "每隔几分钟自动播放一次背景催眠（1~99）。深度「无」时不循环。"
    },
    "depthRowLight": {
        "CN": "深度轻"
    },
    "depthRowMed": {
        "CN": "深度中"
    },
    "depthRowHeavy": {
        "CN": "深度重"
    },
    "fx_smoke": {
        "CN": "烟雾"
    },
    "fx_smokeD": {
        "CN": "不定时淡粉烟雾"
    },
    "fx_pant": {
        "CN": "喘气"
    },
    "fx_pantD": {
        "CN": "规律喘气白雾"
    },
    "fx_danmaku": {
        "CN": "弹幕"
    },
    "fx_danmakuD": {
        "CN": "聊天信息变催眠弹幕"
    },
    "fx_ghost": {
        "CN": "人影"
    },
    "fx_ghostD": {
        "CN": "背后低语人影＋耳边文字"
    },
    "fx_figblur": {
        "CN": "人物模糊"
    },
    "fx_figblurD": {
        "CN": "画面模糊但人物/人影保持清晰"
    },
    "fx_sfx": {
        "CN": "音效"
    },
    "fx_sfxD": {
        "CN": "播放深度音效"
    },
    "fx_chatblur": {
        "CN": "聊天模糊"
    },
    "fx_chatblurD": {
        "CN": "右侧聊天信息模糊"
    },
    "fx_fade": {
        "CN": "信息浮现"
    },
    "fx_fadeD": {
        "CN": "新进聊天信息字体慢慢浮现"
    },
    "triggerTargetD": {
        "CN": "谁说出触发词会让你进入催眠。「仅白名单」时只有名单内成员有效。"
    },
    "allowEdit": {
        "CN": "允许文本修改"
    },
    "allowEditD": {
        "CN": "谁可在你的角色资料页增减你的催眠文本。「仅自己」只有你能编辑；「仅白名单」时名单内成员（含你自己）可编辑。"
    },
    "editOff": {
        "CN": "仅自己"
    },
    "editAny": {
        "CN": "所有人"
    },
    "editWhitelist": {
        "CN": "仅白名单"
    },
    "editPermTitle": {
        "CN": "允许编辑对象"
    },
    "editPermTitleD": {
        "CN": "谁可在你的角色资料页增减各类内容。「仅自己」只有你能编辑；「白名单」名单内成员可编辑；「所有人」任何人都可编辑。三类共用下方白名单。"
    },
    "on": {
        "CN": "开"
    },
    "off": {
        "CN": "关"
    },
    "seeOthersPant": {
        "CN": "看到他人喘气"
    },
    "seeOthersPantD": {
        "CN": "开启后，当房内其他人被催眠（送出催眠广播）时，你会在对方角色身上看到喘气白雾。默认关闭。"
    },
    "seeOthersHypnoLabel": {
        "CN": "催眠进度"
    },
    "seeOthersHypnoD": {
        "CN": "开启后，在房内其他装了 HSC 的人头上显示他们的催眠进度球（读取对方公告的催眠值）。默认开启。"
    },
    "seeOthersTalisLabel": {
        "CN": "催眠符咒"
    },
    "seeOthersTalisD": {
        "CN": "开启后，当房内其他人陷入强控时，在他们头上显示催眠符咒。默认开启。"
    },
    "hscOrbTip": {
        "CN": "HSC 催眠进度为 {n}%"
    },
    "hscOrbTipTime": {
        "CN": "HSC 距离清醒还有 {t}"
    },
    "hscOrbTipInf": {
        "CN": "HSC 催眠状态持续中（无自动清醒）"
    },
    "hypnoClimaxLabel": {
        "CN": "催眠高潮"
    },
    "tab_voice": {
        "CN": "语言催眠"
    },
    "tab_daily": {
        "CN": "日常干扰"
    },
    "tab_state": {
        "CN": "催眠状态"
    },
    "sec_effects": {
        "CN": "效果设定"
    },
    "voiceEnabledLabel": {
        "CN": "语言催眠"
    },
    "voiceEnabledD": {
        "CN": "通过 BCX 的「听我声音」或 HSC 的设置来修改文本、触发词与催眠效果，请到语言催眠查阅并设置详细内容。"
    },
    "dailyEnabledLabel": {
        "CN": "日常干扰"
    },
    "dailyEnabledD": {
        "CN": "周期性的触发催眠，没有任何催眠词，请到日常干扰查阅并设置详细内容。"
    },
    "stateEnabledLabel": {
        "CN": "催眠状态"
    },
    "stateEnabledD": {
        "CN": "提供 HSC 的催眠异常状态效果，当达到催眠度 100% 时触发，请到催眠状态查阅并设置详细内容。"
    },
    "arousalVoiceLabel": {
        "CN": "兴奋值 - 语音催眠"
    },
    "arousalVoiceD": {
        "CN": "每次语音催眠增加的兴奋值（0~20，0＝停用）。"
    },
    "arousalDailyLabel": {
        "CN": "兴奋值 - 日常干扰"
    },
    "arousalDailyD": {
        "CN": "每次日常干扰增加的兴奋值（0~20，0＝停用）。"
    },
    "hypnoVoiceLabel2": {
        "CN": "催眠值 - 语音催眠"
    },
    "hypnoVoiceD2": {
        "CN": "每次语音催眠增加的催眠值（0~20）。催眠状态关闭则无效。"
    },
    "hypnoDailyLabel": {
        "CN": "催眠值 - 日常干扰"
    },
    "hypnoDailyD": {
        "CN": "每次日常干扰增加的催眠值（0~20）。催眠状态关闭则无效。"
    },
    "seeOthersEffect": {
        "CN": "看见他人效果"
    },
    "autoWakeLabel": {
        "CN": "自动清醒"
    },
    "autoWakeD": {
        "CN": "开启：进入催眠状态时给一段清醒倒计时（可拉 15~99 分钟），倒计时到 0 自动清醒。关闭：不自动醒，只能靠清醒词（头上显示 ∞）。"
    },
    "hypnoExtendLabel": {
        "CN": "催眠延长"
    },
    "hypnoExtendD": {
        "CN": "开启后，催眠状态中每次再被语音／日常触发，就把清醒时间延长一段（可拉 10~990 秒，10 秒一格；可超过自动清醒基底）。"
    },
    "minUnit": {
        "CN": "分"
    },
    "secUnit": {
        "CN": "秒"
    },
    "forcedGrowthLabel": {
        "CN": "催眠值"
    },
    "forcedGrowthD": {
        "CN": "避免永远无法清醒：强控中受到催眠时，催眠值成长为原本的 N/10（默认 1/10，例：原 20 → 2）。"
    },
    "showProfileBtnLabel": {
        "CN": "编辑他人文本"
    },
    "showProfileBtnD": {
        "CN": "控制是否在别人的 profile 显示 HSC 文本编辑按钮；关闭则不显示。"
    },
    "hypnoAnimLabel": {
        "CN": "催眠动画"
    },
    "hypnoAnimD": {
        "CN": "启用催眠符咒动画（开发中）。"
    },
    "hypnoStyleLabel": {
        "CN": "符咒样式"
    },
    "hypnoStyleD": {
        "CN": "催眠动画使用的符咒图样（共 12 种）；鼠标停在此处可预览当前样式。"
    },
    "hypnoStyleName": {
        "CN": "样式{n}"
    },
    "fx_headTalisman": {
        "CN": "头上贴符咒"
    },
    "fx_headTalismanD": {
        "CN": "强控中额头常驻符咒且持续震动（独立开关，不需开启催眠动画）。"
    },
    "fx_faceCensor": {
        "CN": "面部识别障碍"
    },
    "fx_faceCensorD": {
        "CN": "强控中：看不清「他人」的脸，脸上会盖一团蠕动的涂鸦。"
    },
    "fx_nameCensor": {
        "CN": "名称识别障碍"
    },
    "nameCensorPlayer": {
        "CN": "仅玩家"
    },
    "nameCensorNetwork": {
        "CN": "含关系网"
    },
    "fx_nameCensorD": {
        "CN": "强控中：看不清「他人」的名字／ID（聊天室名牌与 profile 一并遮蔽）。"
    },
    "censorStyleLabel": {
        "CN": "涂鸦样式"
    },
    "censorStyleD": {
        "CN": "面部涂鸦的样式，二选一。"
    },
    "censorOff": {
        "CN": "关"
    },
    "censorStyleCircle": {
        "CN": "圆圈"
    },
    "censorStyleLine": {
        "CN": "线条"
    },
    "fx_crowd": {
        "CN": "显示人群"
    },
    "fx_crowdD": {
        "CN": "强控中：画面下缘淡入一排围观人群，营造被注视／包围的情境。"
    },
    "resetAll": {
        "CN": "恢复预设"
    },
    "resetAllD": {
        "CN": "把 HSC 全部设定恢复为预设值。"
    },
    "confirmResetAll": {
        "CN": "确定要把 HSC 所有设定恢复为预设值吗？此动作无法复原。"
    },
    "hypnoLabel": {
        "CN": "催眠值"
    },
    "hypnoD": {
        "CN": "收到催眠时累积的催眠值（0~100，每 12 秒 -1）。到 100% 进入强控，低于 15% 解除。"
    },
    "hypnoVoiceLabel": {
        "CN": "语音催眠值"
    },
    "hypnoVoiceD": {
        "CN": "每次语音催眠增加（0~20，0＝停用）。"
    },
    "hypnoDepthLabel": {
        "CN": "深度催眠值"
    },
    "hypnoDepthD": {
        "CN": "每次深度催眠增加（0~10，0＝停用）。"
    },
    "sec_wakeWord": {
        "CN": "清醒词"
    },
    "wakeWordD": {
        "CN": "房内「他人」说出此词→你立即清醒（催眠值 >80% 设为 80%）；自己说无效。每行一个。"
    },
    "wakeWordPh": {
        "CN": "例：wake"
    },
    "sec_hypnoResponse": {
        "CN": "催眠回应"
    },
    "hypnoResponseD": {
        "CN": "强控（催眠值 100%）时说话有机会被拦截，改说这里的其中一句。每行一句，$me＝你的名字。"
    },
    "hypnoResponsePh": {
        "CN": "例：是的主人"
    },
    "allowedPhrasesLabel": {
        "CN": "允许说的话"
    },
    "allowedPhrasesD": {
        "CN": "强控中，若你说的整句刚好是这里的其中一句，就不会陷入思考、照常说出。每行一句。"
    },
    "allowedPhrasesPh": {
        "CN": "例：是的主人"
    },
    "arousalStepLabel": {
        "CN": "兴奋值"
    },
    "arousalStepD": {
        "CN": "每次触发催眠增加的兴奋值（0~20，0＝停用）。"
    },
    "depthEffectsHint": {
        "CN": "定时触发时要出现哪些效果，自由勾选。"
    },
    "expr_new": {
        "CN": "新增"
    },
    "defaultResponses": {
        "CN": "是的主人\n$me是个乖女孩\n$me会乖乖听话\n嗯嗯!!啊啊啊~!"
    },
    "hs_enterForced": {
        "CN": "$me 的精神被不断侵蚀，眼神越来越涣散，最终彻底坠入催眠的泥沼。"
    },
    "hs_forcedIdle": {
        "CN": "$me 的双眼空洞呆滞，偶尔嘴唇会微微颤动，像是想说什么，却发不出任何声音，整个人毫无反应，如同被彻底操控的人偶。"
    },
    "hs_exitForced": {
        "CN": "经过一段时间后，侵蚀效果慢慢从 $me 的脑中退去，空洞的双眼逐渐恢复些许光泽，意识开始缓缓回归。"
    },
    "hs_thinking": {
        "CN": "$me 呆呆地思考了一下…"
    },
    "hs_blank": {
        "CN": "$me 只是呆呆地站着，什么也没说"
    },
    "hs_pause": {
        "CN": "$me 停顿了一下才开口"
    },
    "hs_intercept": {
        "CN": "$me 想说些什么，但意识马上被干扰了"
    },
    "hs_lewd": {
        "CN": "$me 现在满脑子只想着淫秽的事情"
    },
    "hs_lewdFallback": {
        "CN": "$me 开始不自觉地自慰起来…"
    },
    "l10n_test": {
        "CN": "【翻译测试】{name} 传来的信息已被 HSC 依你的语言即时替换显示 ✅"
    },
    "hypnoClimaxD": {
        "CN": "开启后，陷入强控（催眠值 100%）时会因催眠而触发一次高潮（走 BC 原生高潮流程，尊重否认／边缘等设定；兴奋系统关闭时不作用）。"
    },
    "sec_stateMsgFx": {
        "CN": "信息类效果"
    },
    "stateDanmakuChatLabel": {
        "CN": "弹幕文字—聊天"
    },
    "stateDanmakuChatD": {
        "CN": "强控中：房内他人的聊天信息会化为漂浮弹幕（随机字号 14~20）。"
    },
    "stateDanmakuWhisperLabel": {
        "CN": "弹幕文字—悄悄话"
    },
    "stateDanmakuWhisperD": {
        "CN": "强控中：房内他人对你的悄悄话会以紫色弹幕出现在你耳边。"
    },
    "stateMsgSmokeLabel": {
        "CN": "信息妨碍"
    },
    "stateMsgSmokeD": {
        "CN": "强控中：除了系统本地信息与人员进出信息外，每则信息被烟雾遮住，点一下才慢慢散去。"
    },
    "stateMsgInterfereLabel": {
        "CN": "信息干扰"
    },
    "stateMsgInterfereD": {
        "CN": "强控中：人员进／出房间的信息被改写成模糊的幻觉叙述。"
    },
    "stateSmokeHint": {
        "CN": "点击揭示"
    },
    "stateInterfereEnter": {
        "CN": "有谁进来了\n人感觉变多了\n感觉周围变得吵杂\n感觉身上的视线变多了"
    },
    "stateInterfereLeave": {
        "CN": "有谁离开了\n人感觉变少了"
    },
    "remoteEditTitle": {
        "CN": "编辑 {name} 的 HSC 文本"
    },
    "remoteEditHint": {
        "CN": "每行一句。可用 $me 代表被催眠者、$n 换行；状态信息以 $a 开头会发 Action。保存后送给对方（对方需仍允许编辑才生效）。"
    },
    "remoteEditSave": {
        "CN": "💾 保存并送出"
    },
    "remoteEditSent": {
        "CN": "📤 已送出给 {name}，等待对方套用…"
    },
    "remoteEditOk": {
        "CN": "✅ {name} 已套用你的编辑"
    },
    "remoteEditDenied": {
        "CN": "⚠️ {name} 未套用你的编辑（你不在对方白名单）"
    },
    "profileEditBtn": {
        "CN": "编辑对方的 HSC 文本"
    },
    "profileEditOff": {
        "CN": "对方未开放编辑文本"
    },
    "profileEditNoPerm": {
        "CN": "你不在对方白名单，无法编辑"
    },
    "remoteEditNoPerm": {
        "CN": "你没有此项编辑权限"
    },
    "whitelistD": {
        "CN": "会员编号或代号（$owner＝主人、$lover＝爱人含 AFC、$friend＝好友、$white＝BC白名单），逗号或空白分隔。各类「白名单」编辑权限共用此名单。"
    },
    "textsResetD": {
        "CN": "把催眠文本／状态信息／触发词重设为「当前语言」的预设值（切换语言后可用来更新翻译）。"
    },
    "confirmTextsReset": {
        "CN": "会用当前语言的预设覆盖你的催眠文本、状态信息与触发词，确定吗？"
    },
    "whitelistPh": {
        "CN": "例：12345, 67890"
    },
    "language": {
        "CN": "语言"
    },
    "languageD": {
        "CN": "界面语言。Auto＝依游戏登录语系；也可手动选择。"
    },
    "exportD": {
        "CN": "把所有设置下载为 JSON 档。"
    },
    "importD": {
        "CN": "从 JSON 档还原所有设置。"
    },
    "effectsHint": {
        "CN": "逐项开关 VOICE 触发时的各种效果，鼠标移到项目上可看说明。"
    },
    "ev_pinkFlash": {
        "CN": "粉红晕染"
    },
    "ev_pinkFlashD": {
        "CN": "画面泛起粉红光晕，营造迷蒙氛围。"
    },
    "ev_hypnoSpiral": {
        "CN": "催眠螺旋"
    },
    "ev_hypnoSpiralD": {
        "CN": "在头部上方出现旋转螺旋。"
    },
    "ev_hypnoWaves": {
        "CN": "同心电波"
    },
    "ev_hypnoWavesD": {
        "CN": "画面左侧出现向外扩张的同心圆波。"
    },
    "ev_screenDistort": {
        "CN": "画面扭曲"
    },
    "ev_screenDistortD": {
        "CN": "画面轻微旋转模糊，像意识被搅动。"
    },
    "ev_vignette": {
        "CN": "边缘暗角"
    },
    "ev_vignetteD": {
        "CN": "画面四周变暗，聚焦中央。"
    },
    "ev_danmaku": {
        "CN": "弹幕文字"
    },
    "ev_danmakuD": {
        "CN": "主台词在头上、旁白句散落左侧（含聊天历史）。"
    },
    "ev_steam": {
        "CN": "喘气白雾"
    },
    "ev_steamD": {
        "CN": "嘴边呼出柔和白雾，向左右下方飘散。"
    },
    "ev_expression": {
        "CN": "表情切换"
    },
    "ev_expressionD": {
        "CN": "催眠时随机套用表情，结束后还原。"
    },
    "ev_chatFade": {
        "CN": "信息浮现"
    },
    "ev_chatFadeD": {
        "CN": "触发后 10 秒内，新进聊天信息字体会慢慢浮现（LSCG 幽灵风）。"
    },
    "ev_climax": {
        "CN": "高潮特效"
    },
    "ev_climaxD": {
        "CN": "画面碎裂＋红白闪光＋震动。"
    },
    "ev_sound": {
        "CN": "喘息声音"
    },
    "ev_soundD": {
        "CN": "播放喘息音效（需音效设置）。"
    },
    "ev_headshot": {
        "CN": "中央头像"
    },
    "ev_headshotD": {
        "CN": "每次触发在画面中央裁出头像，螺旋／喘气以它为基准（忽略分页）。"
    },
    "ev_dualSound": {
        "CN": "双重音效"
    },
    "ev_dualSoundD": {
        "CN": "播放说话声的同时，叠放一个触发音（钟摆等，使用「催眠」分类音效）。"
    },
    "ev_emote": {
        "CN": "状态信息"
    },
    "ev_emoteD": {
        "CN": "触发时发送一条动作信息，让他人知道你的状态。"
    },
    "climaxModeD": {
        "CN": "「仅高潮时」＝BC 真正高潮才放破碎特效；「每次触发」＝每次催眠都放。"
    },
    "climaxEvery": {
        "CN": "每次触发"
    },
    "climaxOrgasm": {
        "CN": "仅高潮时"
    },
    "textsHint": {
        "CN": "每行一句。\n$me＝被催眠者名称、$n＝换行（弹幕／人影）；\n状态信息以 $a 开头会以 Action 发送。"
    },
    "hypnoTextD": {
        "CN": "弹幕／人影旁白来源，会和 BCX 的听我声音一起使用，仅被催眠者能看见。"
    },
    "hypnoTextPh": {
        "CN": "例：$me 好乖…$n放松…"
    },
    "statusMsgD": {
        "CN": "触发催眠时随机发送的信息。开头 $a＝Action（系统动作）、$c＝Chat（一般说话，可用于呻吟），否则为 Emote。"
    },
    "statusMsgPh": {
        "CN": "例：$a $me 的思绪变得混乱了 / $c 啊…嗯…"
    },
    "triggerWordsD": {
        "CN": "每行一个，聊天接收到含指定词的信息时会触发你的催眠（BCX 的「听我声音」永远有效）。"
    },
    "triggerWordsPh": {
        "CN": "例：催眠　沉睡"
    },
    "soundsHint": {
        "CN": "每格可贴网址或「上传」本机档。「▶」试听、「✕」清除、「其他」从右侧音效库选用。空白＝默认。"
    },
    "sndCat_hypno": {
        "CN": "催眠"
    },
    "sndCat_voice": {
        "CN": "催眠2"
    },
    "sndCat_climax": {
        "CN": "高潮"
    },
    "sndCat_depth": {
        "CN": "深度"
    },
    "sndSlotHead": {
        "CN": "{name}音效（最多 {max}）"
    },
    "sndDefaultPh": {
        "CN": "（默认）{file}"
    },
    "sndUnsetPh": {
        "CN": "未设定 — 网址／上传／其他"
    },
    "sndLocalName": {
        "CN": "本机音效"
    },
    "defaultTexts": {
        "CN": "放松…放松…\n你的意识正在沉睡\n听我的声音\n什么都不用想\n越来越深沉\n顺从是舒服的\n沉沦下去吧\n好乖…好乖…"
    },
    "defaultEmotes": {
        "CN": "$me 的思绪变得混乱了\n$me 的两眼变得空洞…\n$me 的意识正在下沉\n$me 微微晃了一下，失神了\n$me 的表情变得恍惚"
    },
    "prefButton": {
        "CN": "HSC 催眠设置"
    }
};
    var MSG = {
    "hs_enterForced": {
        "CN": "{0} 的精神被不断侵蚀，眼神越来越涣散，最终彻底坠入催眠的泥沼。"
    },
    "hs_forcedIdle": {
        "CN": "{0} 的双眼空洞呆滞，偶尔嘴唇会微微颤动，像是想说什么，却发不出任何声音，整个人毫无反应，如同被彻底操控的人偶。"
    },
    "hs_exitForced": {
        "CN": "经过一段时间后，侵蚀效果慢慢从 {0} 的脑中退去，空洞的双眼逐渐恢复些许光泽，意识开始缓缓回归。"
    },
    "hs_thinking": {
        "CN": "{0} 呆呆地思考了一下…"
    },
    "hs_blank": {
        "CN": "{0} 只是呆呆地站着，什么也没说"
    },
    "hs_pause": {
        "CN": "{0} 停顿了一下才开口"
    },
    "hs_intercept": {
        "CN": "{0} 想说些什么，但意识马上被干扰了"
    },
    "hs_lewd": {
        "CN": "{0} 现在满脑子只想着淫秽的事情"
    },
    "hs_lewdFallback": {
        "CN": "{0} 开始不自觉地自慰起来…"
    },
    "l10n_test": {
        "CN": "【翻译测试】{0} 传来的信息已被 HSC 依你的语言即时替换显示 ✅"
    }
};
    if (L.__Sys_i18n__ && L.__Sys_i18n__.register) L.__Sys_i18n__.register('HSC', UI);
    if (L.__Sys_L10N__ && L.__Sys_L10N__.register) L.__Sys_L10N__.register('HSC', MSG);
})();
