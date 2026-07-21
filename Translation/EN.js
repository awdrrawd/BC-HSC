// ════════════════════════════════════════
//  Liko - HSC 字庫 — EN（English）
//  自動由 scripts/split（來源 Translation 整理）產生；一國一檔，含 UI(i18n) 與聊天(L10N) 兩套。
//  載入後註冊到共用引擎：__Sys_i18n__（UI）與 __Sys_L10N__（聊天在地化）。
//  佔位符：UI 用 {name}；L10N 用 {0}（觸發者名稱）。
// ════════════════════════════════════════
(function () {
    var L = (typeof window !== 'undefined') ? window.Liko : (globalThis.Liko);
    if (!L) { console.error('[Liko HSC EN] Liko 尚未載入'); return; }
    var UI = {
    "loaded": {
        "EN": "HSC v{v} loaded \n/hsc help | /hsc setting | /hsc show test\nRemember to check the settings page on first use or after updates!"
    },
    "help": {
        "EN": "🌀 HSC v{v} commands:\n  /hsc setting       — Open settings page\n  /hsc show          — Show control panel\n  /hsc test [text]   — Trigger effect now\n  /hsc climax        — Test climax effect"
    },
    "cmdUnknown": {
        "EN": "⚠️ [HSC] Unknown command \"{sub}\", type /hsc help"
    },
    "cantOpenSettings": {
        "EN": "⚠️ Cannot open settings (preference not ready)"
    },
    "exportDone": {
        "EN": "📤 HSC settings exported (HSC-settings.json)"
    },
    "importDone": {
        "EN": "📥 HSC settings imported"
    },
    "editedYourText": {
        "EN": "📝 {who} edited your HSC hypnosis text"
    },
    "accessedYourText": {
        "EN": "👁 {who} is viewing your HSC text"
    },
    "tab_basic": {
        "EN": "Basic"
    },
    "tab_effects": {
        "EN": "Effects"
    },
    "tab_texts": {
        "EN": "Texts"
    },
    "tab_expr": {
        "EN": "Expression"
    },
    "tab_sounds": {
        "EN": "Sounds"
    },
    "tab_about": {
        "EN": "About"
    },
    "exit": {
        "EN": "Exit"
    },
    "info": {
        "EN": "── Info ──"
    },
    "cancel": {
        "EN": "Cancel"
    },
    "confirm": {
        "EN": "Confirm"
    },
    "save": {
        "EN": "💾 Save"
    },
    "delete": {
        "EN": "🗑 Delete"
    },
    "upload": {
        "EN": "Upload"
    },
    "clear": {
        "EN": "Clear"
    },
    "other": {
        "EN": "Other"
    },
    "restoreDefault": {
        "EN": "Reset"
    },
    "export": {
        "EN": "Export"
    },
    "import": {
        "EN": "Import"
    },
    "enabledOn": {
        "EN": "HSC Enabled"
    },
    "enabledOff": {
        "EN": "HSC Disabled"
    },
    "enabledDesc": {
        "EN": "When enabled this plugin adds high-immersion effects including some that may be uncomfortable (strong flashes, screen shatter, shaking). Use at your own discretion."
    },
    "intensity": {
        "EN": "Intensity"
    },
    "depthMax": {
        "EN": "Depth"
    },
    "depthNone": {
        "EN": "Off"
    },
    "depthLight": {
        "EN": "Light"
    },
    "depthMed": {
        "EN": "Med"
    },
    "depthHeavy": {
        "EN": "Heavy"
    },
    "interval": {
        "EN": "Interval"
    },
    "minutes": {
        "EN": "min (1~99)"
    },
    "depthEffects": {
        "EN": "── Depth FX ──"
    },
    "triggerTarget": {
        "EN": "Trigger by"
    },
    "anyone": {
        "EN": "Anyone"
    },
    "whitelistOnly": {
        "EN": "Whitelist"
    },
    "whitelist": {
        "EN": "Whitelist"
    },
    "allowOthersOn": {
        "EN": "Allow others to edit my text: ON"
    },
    "allowOthersOff": {
        "EN": "Allow others to edit my text: OFF"
    },
    "climaxMode": {
        "EN": "Climax mode"
    },
    "climaxOnOrgasm": {
        "EN": "On orgasm"
    },
    "climaxAlways": {
        "EN": "Every time"
    },
    "sec_hypnoText": {
        "EN": "Hypnosis text"
    },
    "sec_statusMsg": {
        "EN": "Status message"
    },
    "sec_triggerWords": {
        "EN": "Trigger words"
    },
    "expr_edit": {
        "EN": "🎭 Edit expression"
    },
    "expr_item": {
        "EN": "Face {n}"
    },
    "expr_add": {
        "EN": "＋ Add from editor"
    },
    "expr_hint": {
        "EN": "Set up the expression on the right, then click a row's Save or Add to store it"
    },
    "eyebrows": {
        "EN": "Brows"
    },
    "eyes": {
        "EN": "Eyes"
    },
    "mouth": {
        "EN": "Mouth"
    },
    "blush": {
        "EN": "Blush"
    },
    "exprNone": {
        "EN": "— None —"
    },
    "previewLoading": {
        "EN": "Loading preview…"
    },
    "confirmReplace": {
        "EN": "Replace \"{name}\" with the editor content?"
    },
    "confirmDelete": {
        "EN": "Delete \"{name}\"?"
    },
    "confirmReset": {
        "EN": "Clear all custom faces and restore the 4 built-ins?"
    },
    "snd_lib": {
        "EN": "🔊 Sound library"
    },
    "snd_preset": {
        "EN": "Preset"
    },
    "snd_local": {
        "EN": "Local"
    },
    "snd_assignTo": {
        "EN": "Assign to \"{label}\": click a sound above"
    },
    "snd_pickHint": {
        "EN": "Click a slot's \"Other\" to assign here; click directly to preview."
    },
    "about_author": {
        "EN": "Author: Likolisu"
    },
    "about_dev": {
        "EN": "A personal hobby project; bugs may exist — please report on GitHub."
    },
    "about_report": {
        "EN": "🐛 Report on GitHub"
    },
    "about_assets": {
        "EN": "── All assets are free assets ──"
    },
    "intensityD": {
        "EN": "Overall effect strength (0.1~3.0); also sets background depth level (≈1 light/2 med/3 heavy, capped by Depth). Drag the slider."
    },
    "depthMaxD": {
        "EN": "Max background hypnosis level (separate from VOICE). \"Off\" disables the loop."
    },
    "intervalD": {
        "EN": "How often the background hypnosis plays (1~99 min). No loop when Depth is Off."
    },
    "depthRowLight": {
        "EN": "Light"
    },
    "depthRowMed": {
        "EN": "Med"
    },
    "depthRowHeavy": {
        "EN": "Heavy"
    },
    "fx_smoke": {
        "EN": "Smoke"
    },
    "fx_smokeD": {
        "EN": "Occasional pink haze"
    },
    "fx_pant": {
        "EN": "Pant"
    },
    "fx_pantD": {
        "EN": "Rhythmic breath fog"
    },
    "fx_danmaku": {
        "EN": "Danmaku"
    },
    "fx_danmakuD": {
        "EN": "Chat lines become hypno danmaku"
    },
    "fx_ghost": {
        "EN": "Ghost"
    },
    "fx_ghostD": {
        "EN": "Whispering figure behind + text at your ear"
    },
    "fx_figblur": {
        "EN": "Blur figure"
    },
    "fx_figblurD": {
        "EN": "Screen blurs while figure/ghost stay sharp"
    },
    "fx_sfx": {
        "EN": "SFX"
    },
    "fx_sfxD": {
        "EN": "Play the depth sound"
    },
    "fx_chatblur": {
        "EN": "Blur chat"
    },
    "fx_chatblurD": {
        "EN": "Blur the chat log on the right"
    },
    "fx_fade": {
        "EN": "Msg emerge"
    },
    "fx_fadeD": {
        "EN": "New chat messages slowly emerge"
    },
    "triggerTargetD": {
        "EN": "Who can trigger your hypnosis by saying a trigger word. \"Whitelist\" = only listed members."
    },
    "allowEdit": {
        "EN": "Allow text editing"
    },
    "allowEditD": {
        "EN": "Who can add/remove your hypnosis text from your profile. \"Only me\" = just you; \"Whitelist\" = listed members (incl. yourself)."
    },
    "editOff": {
        "EN": "Only me"
    },
    "editAny": {
        "EN": "Anyone"
    },
    "editWhitelist": {
        "EN": "Whitelist"
    },
    "editPermTitle": {
        "EN": "Who can edit"
    },
    "editPermTitleD": {
        "EN": "Who can add/remove each kind of content from your profile. \"Only me\" = just you; \"Whitelist\" = listed members; \"Anyone\" = everyone. All share the whitelist below."
    },
    "on": {
        "EN": "On"
    },
    "off": {
        "EN": "Off"
    },
    "seeOthersPant": {
        "EN": "See others pant"
    },
    "seeOthersPantD": {
        "EN": "When on, you see breath fog on others in the room when they get hypnotized (they broadcast it). Off by default."
    },
    "seeOthersHypnoLabel": {
        "EN": "Hypnosis progress"
    },
    "seeOthersHypnoD": {
        "EN": "When on, shows a hypnosis progress orb above other HSC users in the room (reads the value they broadcast). On by default."
    },
    "seeOthersTalisLabel": {
        "EN": "Hypnosis talisman"
    },
    "seeOthersTalisD": {
        "EN": "When on, shows a hypnosis talisman above others in the room while they are under deep control. On by default."
    },
    "hscOrbTip": {
        "EN": "HSC hypnosis progress: {n}%"
    },
    "hscOrbTipTime": {
        "EN": "HSC wakes in {t}"
    },
    "hscOrbTipInf": {
        "EN": "HSC hypnosis ongoing (no auto-wake)"
    },
    "hypnoClimaxLabel": {
        "EN": "Hypnotic climax"
    },
    "tab_voice": {
        "EN": "Voice hypnosis"
    },
    "tab_daily": {
        "EN": "Daily interference"
    },
    "tab_state": {
        "EN": "Hypnotic state"
    },
    "sec_effects": {
        "EN": "Effect settings"
    },
    "voiceEnabledLabel": {
        "EN": "Voice hypnosis"
    },
    "voiceEnabledD": {
        "EN": "Modify text, trigger words and hypnosis effects via BCX's \"Hear my voice\" or HSC's settings. Open the Voice hypnosis tab for details."
    },
    "dailyEnabledLabel": {
        "EN": "Daily interference"
    },
    "dailyEnabledD": {
        "EN": "Periodically triggered hypnosis with no trigger words. Open the Daily interference tab for details."
    },
    "stateEnabledLabel": {
        "EN": "Hypnotic state"
    },
    "stateEnabledD": {
        "EN": "HSC's altered-state effects, triggered at 100% hypnosis. Open the Hypnotic state tab for details."
    },
    "arousalVoiceLabel": {
        "EN": "Arousal – Voice"
    },
    "arousalVoiceD": {
        "EN": "Arousal added per voice hypnosis (0–20, 0 = off)."
    },
    "arousalDailyLabel": {
        "EN": "Arousal – Daily"
    },
    "arousalDailyD": {
        "EN": "Arousal added per daily interference (0–20, 0 = off)."
    },
    "hypnoVoiceLabel2": {
        "EN": "Hypnosis – Voice"
    },
    "hypnoVoiceD2": {
        "EN": "Hypnosis value added per voice hypnosis (0–20). No effect if Hypnotic state is off."
    },
    "hypnoDailyLabel": {
        "EN": "Hypnosis – Daily"
    },
    "hypnoDailyD": {
        "EN": "Hypnosis value added per daily interference (0–20). No effect if Hypnotic state is off."
    },
    "seeOthersEffect": {
        "EN": "See others' effects"
    },
    "autoWakeLabel": {
        "EN": "Auto-wake"
    },
    "autoWakeD": {
        "EN": "On: entering the hypnosis state starts a wake countdown (15–99 min); reaching 0 auto-wakes. Off: no auto-wake, only wake words release it (shows ∞ overhead)."
    },
    "hypnoExtendLabel": {
        "EN": "Hypnosis extend"
    },
    "hypnoExtendD": {
        "EN": "When on, each voice/ambient trigger during the hypnosis state extends the wake time (10–990 s, 10 s steps; can exceed the auto-wake base)."
    },
    "minUnit": {
        "EN": "min"
    },
    "secUnit": {
        "EN": "s"
    },
    "forcedGrowthLabel": {
        "EN": "Hypnosis value"
    },
    "forcedGrowthD": {
        "EN": "Prevents never waking: while under deep control, hypnosis grows by N/10 of normal (default 1/10, e.g. 20 → 2)."
    },
    "showProfileBtnLabel": {
        "EN": "Edit others' text"
    },
    "showProfileBtnD": {
        "EN": "Controls whether the HSC text-edit button shows on others' profiles; off hides it."
    },
    "hypnoAnimLabel": {
        "EN": "Hypnosis animation"
    },
    "hypnoAnimD": {
        "EN": "Enable the hypnosis talisman animation (in development)."
    },
    "hypnoStyleLabel": {
        "EN": "Talisman style"
    },
    "hypnoStyleD": {
        "EN": "The talisman pattern used by the animation (12 total); hover here to preview the current style."
    },
    "hypnoStyleName": {
        "EN": "Style {n}"
    },
    "fx_headTalisman": {
        "EN": "Head talisman"
    },
    "fx_headTalismanD": {
        "EN": "A talisman stays on the forehead and vibrates while under deep control (standalone toggle, no animation needed)."
    },
    "fx_faceCensor": {
        "EN": "Face recognition block"
    },
    "fx_faceCensorD": {
        "EN": "Under deep control: you can't make out others' faces; a writhing scribble covers them."
    },
    "fx_nameCensor": {
        "EN": "Name recognition block"
    },
    "nameCensorPlayer": {
        "EN": "Character only"
    },
    "nameCensorNetwork": {
        "EN": "Incl. relations"
    },
    "fx_nameCensorD": {
        "EN": "Under deep control: you can't read others' names/IDs (chatroom labels and profiles are masked)."
    },
    "censorStyleLabel": {
        "EN": "Scribble style"
    },
    "censorStyleD": {
        "EN": "Style of the facial scribble; pick one of two."
    },
    "censorOff": {
        "EN": "Off"
    },
    "censorStyleCircle": {
        "EN": "Circles"
    },
    "censorStyleLine": {
        "EN": "Lines"
    },
    "fx_crowd": {
        "EN": "Show crowd"
    },
    "fx_crowdD": {
        "EN": "Under deep control: a row of onlookers fades in at the bottom, evoking being watched/surrounded."
    },
    "resetAll": {
        "EN": "Reset to defaults"
    },
    "resetAllD": {
        "EN": "Reset all HSC settings to defaults."
    },
    "confirmResetAll": {
        "EN": "Reset all HSC settings to defaults? This can't be undone."
    },
    "hypnoLabel": {
        "EN": "Hypnosis value"
    },
    "hypnoD": {
        "EN": "Hypnosis value accrued when hypnotized (0–100, −1 every 12s). 100% enters deep control, below 15% releases."
    },
    "hypnoVoiceLabel": {
        "EN": "Voice hypnosis value"
    },
    "hypnoVoiceD": {
        "EN": "Added per voice hypnosis (0–20, 0 = off)."
    },
    "hypnoDepthLabel": {
        "EN": "Depth hypnosis value"
    },
    "hypnoDepthD": {
        "EN": "Added per depth hypnosis (0–10, 0 = off)."
    },
    "sec_wakeWord": {
        "EN": "Wake words"
    },
    "wakeWordD": {
        "EN": "When others in the room say this, you wake instantly (if hypnosis >80%, set to 80%); saying it yourself has no effect. One per line."
    },
    "wakeWordPh": {
        "EN": "e.g. wake"
    },
    "sec_hypnoResponse": {
        "EN": "Hypnotic response"
    },
    "hypnoResponseD": {
        "EN": "While under deep control (100%), speech may be intercepted and replaced with one of these. One per line, $me = your name."
    },
    "hypnoResponsePh": {
        "EN": "e.g. Yes, Master"
    },
    "allowedPhrasesLabel": {
        "EN": "Allowed phrases"
    },
    "allowedPhrasesD": {
        "EN": "Under deep control, if your whole sentence exactly matches one of these, it's spoken normally without the daze. One per line."
    },
    "allowedPhrasesPh": {
        "EN": "e.g. Yes, Master"
    },
    "arousalStepLabel": {
        "EN": "Arousal"
    },
    "arousalStepD": {
        "EN": "Arousal added per hypnosis trigger (0–20, 0 = off)."
    },
    "depthEffectsHint": {
        "EN": "Choose which effects appear on each scheduled trigger."
    },
    "expr_new": {
        "EN": "Add"
    },
    "defaultResponses": {
        "EN": "Yes, Master\n$me is a good girl\n$me will obey\nMmm!! Ahhh~!"
    },
    "hs_enterForced": {
        "EN": "$me's mind is relentlessly eroded, the gaze growing ever more vacant, until sinking completely into the mire of trance."
    },
    "hs_forcedIdle": {
        "EN": "$me stares blankly with hollow eyes, lips occasionally trembling as if to speak, yet no sound comes out — utterly unresponsive, like a fully controlled puppet."
    },
    "hs_exitForced": {
        "EN": "After a while the erosion slowly recedes from $me's mind, the hollow eyes regaining a faint glimmer as consciousness gradually returns."
    },
    "hs_thinking": {
        "EN": "$me pauses, dazed, thinking for a moment…"
    },
    "hs_blank": {
        "EN": "$me just stands there blankly, saying nothing"
    },
    "hs_pause": {
        "EN": "$me hesitates for a moment before speaking"
    },
    "hs_intercept": {
        "EN": "$me wants to say something, but the thought is instantly disrupted"
    },
    "hs_lewd": {
        "EN": "$me's head is now filled with nothing but lewd thoughts"
    },
    "hs_lewdFallback": {
        "EN": "$me starts masturbating involuntarily…"
    },
    "l10n_test": {
        "EN": "[Translation Test] The message from {name} has been instantly localized by HSC ✅"
    },
    "hypnoClimaxD": {
        "EN": "When on, reaching deep control (100% hypnosis) triggers an orgasm from the hypnosis (uses BC's native orgasm flow, respecting denial/edging; no effect if arousal is disabled)."
    },
    "sec_stateMsgFx": {
        "EN": "Message effects"
    },
    "stateDanmakuChatLabel": {
        "EN": "Danmaku — chat"
    },
    "stateDanmakuChatD": {
        "EN": "While in deep control: others' chat messages float across as danmaku (random size 14–20)."
    },
    "stateDanmakuWhisperLabel": {
        "EN": "Danmaku — whisper"
    },
    "stateDanmakuWhisperD": {
        "EN": "While in deep control: whispers to you appear as purple danmaku by your ear."
    },
    "stateMsgSmokeLabel": {
        "EN": "Message obstruction"
    },
    "stateMsgSmokeD": {
        "EN": "While in deep control: every message (except local system and enter/leave) is veiled by smoke; click to slowly clear it."
    },
    "stateMsgInterfereLabel": {
        "EN": "Message interference"
    },
    "stateMsgInterfereD": {
        "EN": "While in deep control: enter/leave messages are rewritten into vague, dreamlike impressions."
    },
    "stateSmokeHint": {
        "EN": "Click to reveal"
    },
    "stateInterfereEnter": {
        "EN": "Someone came in…\nFeels more crowded now…\nThe air feels noisier…\nMore eyes on you now…"
    },
    "stateInterfereLeave": {
        "EN": "Someone left…\nFeels emptier now…"
    },
    "remoteEditTitle": {
        "EN": "Edit {name}'s HSC text"
    },
    "remoteEditHint": {
        "EN": "One line per sentence. $me = the hypnotized person, $n = line break; status lines starting with $a are sent as Action. Saving sends it to them (only applies if they still allow editing)."
    },
    "remoteEditSave": {
        "EN": "💾 Save & send"
    },
    "remoteEditSent": {
        "EN": "📤 Sent to {name}, waiting for them to apply…"
    },
    "remoteEditOk": {
        "EN": "✅ {name} applied your edit"
    },
    "remoteEditDenied": {
        "EN": "⚠️ {name} did not apply your edit (you're not on their whitelist)"
    },
    "profileEditBtn": {
        "EN": "Edit their HSC text"
    },
    "profileEditOff": {
        "EN": "They don't allow text editing"
    },
    "profileEditNoPerm": {
        "EN": "Not on their whitelist — can't edit"
    },
    "remoteEditNoPerm": {
        "EN": "You can't edit this"
    },
    "whitelistD": {
        "EN": "Member numbers or tokens ($owner = owner, $lover = lovers incl. AFC, $friend = friends, $white = BC whitelist), comma/space separated. Shared by every \"Whitelist\" edit permission."
    },
    "textsResetD": {
        "EN": "Reset hypnosis text / status / trigger words to the current language's defaults (use after switching language to refresh translations)."
    },
    "confirmTextsReset": {
        "EN": "Overwrite your hypnosis text, status messages and trigger words with the current language's defaults?"
    },
    "whitelistPh": {
        "EN": "e.g. 12345, 67890"
    },
    "language": {
        "EN": "Language"
    },
    "languageD": {
        "EN": "UI language. Auto = follow game language; or pick manually."
    },
    "exportD": {
        "EN": "Download all settings as a JSON file."
    },
    "importD": {
        "EN": "Restore all settings from a JSON file."
    },
    "effectsHint": {
        "EN": "Toggle each VOICE-trigger effect; hover an item to see its description."
    },
    "ev_pinkFlash": {
        "EN": "Pink Glow"
    },
    "ev_pinkFlashD": {
        "EN": "A pink glow washes over the screen for a hazy mood."
    },
    "ev_hypnoSpiral": {
        "EN": "Hypno Spiral"
    },
    "ev_hypnoSpiralD": {
        "EN": "A spinning spiral appears above the head."
    },
    "ev_hypnoWaves": {
        "EN": "Ripple Waves"
    },
    "ev_hypnoWavesD": {
        "EN": "Concentric waves expand from the left."
    },
    "ev_screenDistort": {
        "EN": "Distortion"
    },
    "ev_screenDistortD": {
        "EN": "The screen slightly twists and blurs."
    },
    "ev_vignette": {
        "EN": "Vignette"
    },
    "ev_vignetteD": {
        "EN": "Edges darken to focus the center."
    },
    "ev_danmaku": {
        "EN": "Danmaku Text"
    },
    "ev_danmakuD": {
        "EN": "Main line over the head; narration scatters on the left (incl. chat history)."
    },
    "ev_steam": {
        "EN": "Breath Fog"
    },
    "ev_steamD": {
        "EN": "Soft fog drifts from the mouth."
    },
    "ev_expression": {
        "EN": "Expression"
    },
    "ev_expressionD": {
        "EN": "Apply a random expression while hypnotized, then restore."
    },
    "ev_chatFade": {
        "EN": "Message Emerge"
    },
    "ev_chatFadeD": {
        "EN": "For 10s after a trigger, new chat messages slowly emerge (LSCG ghost style)."
    },
    "ev_climax": {
        "EN": "Climax FX"
    },
    "ev_climaxD": {
        "EN": "Screen shatter + red/white flash + shake."
    },
    "ev_sound": {
        "EN": "Breath Sound"
    },
    "ev_soundD": {
        "EN": "Play a breath sound (needs Sound settings)."
    },
    "ev_headshot": {
        "EN": "Center Headshot"
    },
    "ev_headshotD": {
        "EN": "Crop a centered headshot each trigger; spiral/breath anchor to it (ignores paging)."
    },
    "ev_dualSound": {
        "EN": "Dual Sound"
    },
    "ev_dualSoundD": {
        "EN": "Layer a trigger sound (pendulum, etc., from the Hypno category) over the voice."
    },
    "ev_emote": {
        "EN": "Status Emote"
    },
    "ev_emoteD": {
        "EN": "Send an action message on trigger so others see your state."
    },
    "climaxModeD": {
        "EN": "\"On orgasm\" = shatter FX only on real BC orgasm; \"Every trigger\" = on every hypnosis."
    },
    "climaxEvery": {
        "EN": "Every trigger"
    },
    "climaxOrgasm": {
        "EN": "On orgasm"
    },
    "textsHint": {
        "EN": "One line per sentence.\n$me = hypnotized person, $n = line break (danmaku/shadow);\nstatus lines starting with $a are sent as Action."
    },
    "hypnoTextD": {
        "EN": "Source for danmaku/shadow narration; used together with BCX \"listen to me\", only the hypnotized sees it."
    },
    "hypnoTextPh": {
        "EN": "e.g. $me, good…$nrelax…"
    },
    "statusMsgD": {
        "EN": "Message sent at random on trigger. Prefix $a = Action (system), $c = Chat (normal speech, e.g. moans), otherwise Emote."
    },
    "statusMsgPh": {
        "EN": "e.g. $a $me's mind grows hazy / $c ah… mmh…"
    },
    "triggerWordsD": {
        "EN": "One per line. Your hypnosis triggers when chat contains any of these words (BCX's \"listen to me\" always works)."
    },
    "triggerWordsPh": {
        "EN": "e.g. hypnosis  sleep"
    },
    "soundsHint": {
        "EN": "Paste a URL or \"Upload\" a local file in each slot. ▶ preview, ✕ clear, \"Other\" picks from the right library. Blank = default."
    },
    "sndCat_hypno": {
        "EN": "Hypno"
    },
    "sndCat_voice": {
        "EN": "Hypno2"
    },
    "sndCat_climax": {
        "EN": "Climax"
    },
    "sndCat_depth": {
        "EN": "Depth"
    },
    "sndSlotHead": {
        "EN": "{name} sounds (max {max})"
    },
    "sndDefaultPh": {
        "EN": "(default) {file}"
    },
    "sndUnsetPh": {
        "EN": "Unset — URL / Upload / Other"
    },
    "sndLocalName": {
        "EN": "Local sound"
    },
    "defaultTexts": {
        "EN": "Relax… relax…\nYour mind is falling asleep\nListen to my voice\nNo need to think\nDeeper and deeper\nObeying feels good\nSink down…\nGood girl… good girl…"
    },
    "defaultEmotes": {
        "EN": "$me's mind grows hazy\n$me's eyes go blank…\n$me's awareness sinks down\n$me sways slightly, dazed\n$me's expression turns vacant"
    },
    "prefButton": {
        "EN": "HSC Settings"
    }
};
    var MSG = {
    "hs_enterForced": {
        "EN": "{0}'s mind is relentlessly eroded, the gaze growing ever more vacant, until sinking completely into the mire of trance."
    },
    "hs_forcedIdle": {
        "EN": "{0} stares blankly with hollow eyes, lips occasionally trembling as if to speak, yet no sound comes out — utterly unresponsive, like a fully controlled puppet."
    },
    "hs_exitForced": {
        "EN": "After a while the erosion slowly recedes from {0}'s mind, the hollow eyes regaining a faint glimmer as consciousness gradually returns."
    },
    "hs_thinking": {
        "EN": "{0} pauses, dazed, thinking for a moment…"
    },
    "hs_blank": {
        "EN": "{0} just stands there blankly, saying nothing"
    },
    "hs_pause": {
        "EN": "{0} hesitates for a moment before speaking"
    },
    "hs_intercept": {
        "EN": "{0} wants to say something, but the thought is instantly disrupted"
    },
    "hs_lewd": {
        "EN": "{0}'s head is now filled with nothing but lewd thoughts"
    },
    "hs_lewdFallback": {
        "EN": "{0} starts masturbating involuntarily…"
    },
    "l10n_test": {
        "EN": "[Translation Test] The message from {0} has been instantly localized by HSC ✅"
    }
};
    if (L.__Sys_i18n__ && L.__Sys_i18n__.register) L.__Sys_i18n__.register('HSC', UI);
    if (L.__Sys_L10N__ && L.__Sys_L10N__.register) L.__Sys_L10N__.register('HSC', MSG);
})();
