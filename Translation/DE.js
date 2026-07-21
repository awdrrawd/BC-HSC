// ════════════════════════════════════════
//  Liko - HSC 字庫 — DE（Deutsch）
//  自動由 scripts/split（來源 Translation 整理）產生；一國一檔，含 UI(i18n) 與聊天(L10N) 兩套。
//  載入後註冊到共用引擎：__Sys_i18n__（UI）與 __Sys_L10N__（聊天在地化）。
//  佔位符：UI 用 {name}；L10N 用 {0}（觸發者名稱）。
// ════════════════════════════════════════
(function () {
    var L = (typeof window !== 'undefined') ? window.Liko : (globalThis.Liko);
    if (!L) { console.error('[Liko HSC DE] Liko 尚未載入'); return; }
    var UI = {
    "loaded": {
        "DE": "HSC v{v} geladen \n/hsc help | /hsc setting | /hsc show Test\nBei Erstnutzung oder nach Updates bitte die Einstellungen prüfen!"
    },
    "help": {
        "DE": "🌀 HSC v{v} Befehle:\n  /hsc setting       — Einstellungen öffnen\n  /hsc show          — Bedienfeld anzeigen\n  /hsc test [Text]   — Effekt jetzt auslösen\n  /hsc climax        — Höhepunkt-Effekt testen"
    },
    "cmdUnknown": {
        "DE": "⚠️ [HSC] Unbekannter Befehl „{sub}\", /hsc help eingeben"
    },
    "cantOpenSettings": {
        "DE": "⚠️ Einstellungen können nicht geöffnet werden"
    },
    "exportDone": {
        "DE": "📤 HSC-Einstellungen exportiert"
    },
    "importDone": {
        "DE": "📥 HSC-Einstellungen importiert"
    },
    "editedYourText": {
        "DE": "📝 {who} hat deinen HSC-Hypnosetext bearbeitet"
    },
    "accessedYourText": {
        "DE": "👁 {who} sieht deinen HSC-Text an"
    },
    "tab_basic": {
        "DE": "Allgemein"
    },
    "tab_effects": {
        "DE": "Effekte"
    },
    "tab_texts": {
        "DE": "Texte"
    },
    "tab_expr": {
        "DE": "Mimik"
    },
    "tab_sounds": {
        "DE": "Töne"
    },
    "tab_about": {
        "DE": "Über"
    },
    "exit": {
        "DE": "Schließen"
    },
    "info": {
        "DE": "── Info ──"
    },
    "cancel": {
        "DE": "Abbrechen"
    },
    "confirm": {
        "DE": "OK"
    },
    "save": {
        "DE": "💾 Speichern"
    },
    "delete": {
        "DE": "🗑 Löschen"
    },
    "upload": {
        "DE": "Hochladen"
    },
    "clear": {
        "DE": "Leeren"
    },
    "other": {
        "DE": "Andere"
    },
    "restoreDefault": {
        "DE": "Zurücksetzen"
    },
    "export": {
        "DE": "exportieren"
    },
    "import": {
        "DE": "importieren"
    },
    "enabledOn": {
        "DE": "HSC aktiv"
    },
    "enabledOff": {
        "DE": "HSC inaktiv"
    },
    "enabledDesc": {
        "DE": "Aktiviert bietet dieses Plugin intensive Effekte, darunter möglicherweise unangenehme (starke Blitze, zersplitterndes Bild, Erschütterung). Nutze es nach eigenem Ermessen."
    },
    "intensity": {
        "DE": "Intensität"
    },
    "depthMax": {
        "DE": "Tiefe"
    },
    "depthNone": {
        "DE": "Aus"
    },
    "depthLight": {
        "DE": "Leicht"
    },
    "depthMed": {
        "DE": "Mittel"
    },
    "depthHeavy": {
        "DE": "Stark"
    },
    "interval": {
        "DE": "Intervall"
    },
    "minutes": {
        "DE": "Min. (1~99)"
    },
    "depthEffects": {
        "DE": "── Tiefen-FX ──"
    },
    "triggerTarget": {
        "DE": "Auslöser"
    },
    "anyone": {
        "DE": "Jeder"
    },
    "whitelistOnly": {
        "DE": "Nur Whitelist"
    },
    "whitelist": {
        "DE": "Whitelist"
    },
    "allowOthersOn": {
        "DE": "Andere dürfen meinen Text ändern: AN"
    },
    "allowOthersOff": {
        "DE": "Andere dürfen meinen Text ändern: AUS"
    },
    "climaxMode": {
        "DE": "Höhepunkt-Modus"
    },
    "climaxOnOrgasm": {
        "DE": "Bei Orgasmus"
    },
    "climaxAlways": {
        "DE": "Jedes Mal"
    },
    "sec_hypnoText": {
        "DE": "Hypnosetext"
    },
    "sec_statusMsg": {
        "DE": "Statusnachricht"
    },
    "sec_triggerWords": {
        "DE": "Auslösewörter"
    },
    "expr_edit": {
        "DE": "🎭 Mimik bearbeiten"
    },
    "expr_item": {
        "DE": "Mimik {n}"
    },
    "expr_add": {
        "DE": "＋ Aus Editor hinzufügen"
    },
    "expr_hint": {
        "DE": "Mimik rechts einstellen, dann „Speichern\" einer Zeile oder „Hinzufügen\" klicken"
    },
    "eyebrows": {
        "DE": "Brauen"
    },
    "eyes": {
        "DE": "Augen"
    },
    "mouth": {
        "DE": "Mund"
    },
    "blush": {
        "DE": "Erröten"
    },
    "exprNone": {
        "DE": "— Keine —"
    },
    "previewLoading": {
        "DE": "Vorschau lädt…"
    },
    "confirmReplace": {
        "DE": "„{name}\" durch den Editor-Inhalt ersetzen?"
    },
    "confirmDelete": {
        "DE": "„{name}\" löschen?"
    },
    "confirmReset": {
        "DE": "Alle eigenen Mimiken löschen und die 4 Standardwerte wiederherstellen?"
    },
    "snd_lib": {
        "DE": "🔊 Tonbibliothek"
    },
    "snd_preset": {
        "DE": "Vorgabe"
    },
    "snd_local": {
        "DE": "Lokal"
    },
    "snd_assignTo": {
        "DE": "„{label}\" zuweisen: oben einen Ton anklicken"
    },
    "snd_pickHint": {
        "DE": "Auf „Andere\" eines Felds klicken zum Zuweisen; direkt klicken zum Anhören."
    },
    "about_author": {
        "DE": "Autor: Likolisu"
    },
    "about_dev": {
        "DE": "Ein persönliches Hobbyprojekt; Fehler möglich — bitte auf GitHub melden."
    },
    "about_report": {
        "DE": "🐛 Auf GitHub melden"
    },
    "about_assets": {
        "DE": "── Alle Materialien sind kostenlos ──"
    },
    "intensityD": {
        "DE": "Gesamtstärke (0.1~3.0); bestimmt auch die Tiefenstufe (≈1 leicht/2 mittel/3 stark, max. = Tiefe). Schieberegler ziehen."
    },
    "depthMaxD": {
        "DE": "Max. Hintergrund-Hypnosestufe (getrennt von VOICE). „Aus\" deaktiviert die Schleife."
    },
    "intervalD": {
        "DE": "Wie oft die Hintergrundhypnose abspielt (1~99 Min.). Keine Schleife bei Tiefe „Aus\"."
    },
    "depthRowLight": {
        "DE": "Leicht"
    },
    "depthRowMed": {
        "DE": "Mittel"
    },
    "depthRowHeavy": {
        "DE": "Stark"
    },
    "fx_smoke": {
        "DE": "Rauch"
    },
    "fx_smokeD": {
        "DE": "Gelegentlicher rosa Nebel"
    },
    "fx_pant": {
        "DE": "Hecheln"
    },
    "fx_pantD": {
        "DE": "Rhythmischer Atemnebel"
    },
    "fx_danmaku": {
        "DE": "Danmaku"
    },
    "fx_danmakuD": {
        "DE": "Chat-Zeilen werden Hypno-Danmaku"
    },
    "fx_ghost": {
        "DE": "Schemen"
    },
    "fx_ghostD": {
        "DE": "Flüsternde Gestalt dahinter + Text am Ohr"
    },
    "fx_figblur": {
        "DE": "Figur unscharf"
    },
    "fx_figblurD": {
        "DE": "Bild unscharf, Figur/Schemen bleiben scharf"
    },
    "fx_sfx": {
        "DE": "Ton"
    },
    "fx_sfxD": {
        "DE": "Tiefen-Ton abspielen"
    },
    "fx_chatblur": {
        "DE": "Chat unscharf"
    },
    "fx_chatblurD": {
        "DE": "Chat-Log rechts unscharf"
    },
    "fx_fade": {
        "DE": "Einblendung"
    },
    "fx_fadeD": {
        "DE": "Neue Chatnachrichten blenden langsam ein"
    },
    "triggerTargetD": {
        "DE": "Wer dich per Auslösewort hypnotisieren kann. „Whitelist\" = nur gelistete Mitglieder."
    },
    "allowEdit": {
        "DE": "Text-Bearbeitung erlauben"
    },
    "allowEditD": {
        "DE": "Wer deinen Hypnosetext im Profil ändern darf. „Nur ich\" = nur du; „Whitelist\" = gelistete (inkl. dir)."
    },
    "editOff": {
        "DE": "Nur ich"
    },
    "editAny": {
        "DE": "Jeder"
    },
    "editWhitelist": {
        "DE": "Whitelist"
    },
    "editPermTitle": {
        "DE": "Wer darf bearbeiten"
    },
    "editPermTitleD": {
        "DE": "Wer welche Inhalte in deinem Profil ändern darf. „Nur ich\" = nur du; „Whitelist\" = gelistete; „Jeder\" = alle. Teilen sich die Whitelist unten."
    },
    "on": {
        "DE": "An"
    },
    "off": {
        "DE": "Aus"
    },
    "seeOthersPant": {
        "DE": "Andere hecheln sehen"
    },
    "seeOthersPantD": {
        "DE": "Aktiviert siehst du Atemnebel an anderen im Raum, wenn sie hypnotisiert werden (sie senden es). Standardmäßig aus."
    },
    "seeOthersHypnoLabel": {
        "DE": "Hypnose-Fortschritt"
    },
    "seeOthersHypnoD": {
        "DE": "Aktiviert zeigt eine Hypnose-Fortschrittskugel über anderen HSC-Nutzern im Raum (liest ihren gesendeten Wert). Standardmäßig an."
    },
    "seeOthersTalisLabel": {
        "DE": "Hypnose-Talisman"
    },
    "seeOthersTalisD": {
        "DE": "Aktiviert zeigt einen Hypnose-Talisman über anderen im Raum, während sie unter tiefer Kontrolle stehen. Standardmäßig an."
    },
    "hscOrbTip": {
        "DE": "HSC-Hypnose-Fortschritt: {n}%"
    },
    "hscOrbTipTime": {
        "DE": "HSC wacht in {t} auf"
    },
    "hscOrbTipInf": {
        "DE": "HSC-Hypnose andauernd (kein Auto-Aufwachen)"
    },
    "hypnoClimaxLabel": {
        "DE": "Hypnotischer Höhepunkt"
    },
    "tab_voice": {
        "DE": "Sprachhypnose"
    },
    "tab_daily": {
        "DE": "Alltagsstörung"
    },
    "tab_state": {
        "DE": "Hypnosezustand"
    },
    "sec_effects": {
        "DE": "Effekteinstellungen"
    },
    "voiceEnabledLabel": {
        "DE": "Sprachhypnose"
    },
    "voiceEnabledD": {
        "DE": "Text, Auslösewörter und Hypnoseeffekte über BCX's „Hör meine Stimme\" oder HSC einstellen. Details im Tab Sprachhypnose."
    },
    "dailyEnabledLabel": {
        "DE": "Alltagsstörung"
    },
    "dailyEnabledD": {
        "DE": "Zeitgesteuert ausgelöste Hypnose ohne Auslösewörter. Details im Tab Alltagsstörung."
    },
    "stateEnabledLabel": {
        "DE": "Hypnosezustand"
    },
    "stateEnabledD": {
        "DE": "HSCs Effekte des veränderten Zustands, ausgelöst bei 100 % Hypnose. Details im Tab Hypnosezustand."
    },
    "arousalVoiceLabel": {
        "DE": "Erregung – Stimme"
    },
    "arousalVoiceD": {
        "DE": "Erregung pro Sprachhypnose (0–20, 0 = aus)."
    },
    "arousalDailyLabel": {
        "DE": "Erregung – Alltag"
    },
    "arousalDailyD": {
        "DE": "Erregung pro Alltagsstörung (0–20, 0 = aus)."
    },
    "hypnoVoiceLabel2": {
        "DE": "Hypnose – Stimme"
    },
    "hypnoVoiceD2": {
        "DE": "Hypnosewert pro Sprachhypnose (0–20). Ohne Wirkung, wenn Hypnosezustand aus ist."
    },
    "hypnoDailyLabel": {
        "DE": "Hypnose – Alltag"
    },
    "hypnoDailyD": {
        "DE": "Hypnosewert pro Alltagsstörung (0–20). Ohne Wirkung, wenn Hypnosezustand aus ist."
    },
    "seeOthersEffect": {
        "DE": "Andere Effekte sehen"
    },
    "autoWakeLabel": {
        "DE": "Auto-Aufwachen"
    },
    "autoWakeD": {
        "DE": "An: Beim Eintritt in den Hypnosezustand startet ein Aufwach-Countdown (15–99 Min); bei 0 automatisches Aufwachen. Aus: kein Auto-Aufwachen, nur Aufwachworte (∞ über dem Kopf)."
    },
    "hypnoExtendLabel": {
        "DE": "Hypnose verlängern"
    },
    "hypnoExtendD": {
        "DE": "Aktiviert verlängert jeder Sprach-/Alltags-Auslöser im Hypnosezustand die Aufwachzeit (10–990 s, 10-s-Schritte; kann die Auto-Aufwach-Basis überschreiten)."
    },
    "minUnit": {
        "DE": "Min"
    },
    "secUnit": {
        "DE": "Sek"
    },
    "forcedGrowthLabel": {
        "DE": "Hypnosewert"
    },
    "forcedGrowthD": {
        "DE": "Verhindert ewiges Nicht-Aufwachen: unter tiefer Kontrolle wächst Hypnose um N/10 des Normalwerts (Standard 1/10, z. B. 20 → 2)."
    },
    "showProfileBtnLabel": {
        "DE": "Text anderer bearbeiten"
    },
    "showProfileBtnD": {
        "DE": "Legt fest, ob der HSC-Textbearbeiten-Button in fremden Profilen erscheint; aus = versteckt."
    },
    "hypnoAnimLabel": {
        "DE": "Hypnose-Animation"
    },
    "hypnoAnimD": {
        "DE": "Hypnose-Talisman-Animation aktivieren (in Entwicklung)."
    },
    "hypnoStyleLabel": {
        "DE": "Talisman-Stil"
    },
    "hypnoStyleD": {
        "DE": "Das vom Animation genutzte Talisman-Muster (12 gesamt); hier schweben für Vorschau."
    },
    "hypnoStyleName": {
        "DE": "Stil {n}"
    },
    "fx_headTalisman": {
        "DE": "Kopf-Talisman"
    },
    "fx_headTalismanD": {
        "DE": "Ein Talisman bleibt auf der Stirn und vibriert unter tiefer Kontrolle (eigener Schalter, keine Animation nötig)."
    },
    "fx_faceCensor": {
        "DE": "Gesichtserkennung blockiert"
    },
    "fx_faceCensorD": {
        "DE": "Unter tiefer Kontrolle: fremde Gesichter sind unkenntlich, überdeckt von einem wabernden Gekritzel."
    },
    "fx_nameCensor": {
        "DE": "Namenserkennung blockiert"
    },
    "nameCensorPlayer": {
        "DE": "Nur Charakter"
    },
    "nameCensorNetwork": {
        "DE": "Inkl. Beziehungen"
    },
    "fx_nameCensorD": {
        "DE": "Unter tiefer Kontrolle: fremde Namen/IDs sind unlesbar (Chat-Namensschilder und Profile werden verdeckt)."
    },
    "censorStyleLabel": {
        "DE": "Gekritzel-Stil"
    },
    "censorStyleD": {
        "DE": "Stil des Gesichts-Gekritzels; eines von zweien wählen."
    },
    "censorOff": {
        "DE": "Aus"
    },
    "censorStyleCircle": {
        "DE": "Kreise"
    },
    "censorStyleLine": {
        "DE": "Linien"
    },
    "fx_crowd": {
        "DE": "Menge zeigen"
    },
    "fx_crowdD": {
        "DE": "Unter tiefer Kontrolle: unten blendet eine Reihe Zuschauer ein — beobachtet/umringt."
    },
    "resetAll": {
        "DE": "Auf Standard zurücksetzen"
    },
    "resetAllD": {
        "DE": "Alle HSC-Einstellungen auf Standard zurücksetzen."
    },
    "confirmResetAll": {
        "DE": "Alle HSC-Einstellungen zurücksetzen? Nicht widerrufbar."
    },
    "hypnoLabel": {
        "DE": "Hypnosewert"
    },
    "hypnoD": {
        "DE": "Beim Hypnotisieren angesammelter Wert (0–100, −1 alle 12 s). 100 % = tiefe Kontrolle, unter 15 % Auflösung."
    },
    "hypnoVoiceLabel": {
        "DE": "Sprachhypnose-Wert"
    },
    "hypnoVoiceD": {
        "DE": "Pro Sprachhypnose (0–20, 0 = aus)."
    },
    "hypnoDepthLabel": {
        "DE": "Tiefenhypnose-Wert"
    },
    "hypnoDepthD": {
        "DE": "Pro Tiefenhypnose (0–10, 0 = aus)."
    },
    "sec_wakeWord": {
        "DE": "Aufwachwörter"
    },
    "wakeWordD": {
        "DE": "Sagen andere im Raum dies, wachst du sofort auf (bei Hypnose >80 % auf 80 % gesetzt); selbst gesagt wirkungslos. Eines pro Zeile."
    },
    "wakeWordPh": {
        "DE": "z. B. wake"
    },
    "sec_hypnoResponse": {
        "DE": "Hypnotische Antwort"
    },
    "hypnoResponseD": {
        "DE": "Unter tiefer Kontrolle (100 %) kann Sprache abgefangen und durch eine dieser Zeilen ersetzt werden. Eine pro Zeile, $me = dein Name."
    },
    "hypnoResponsePh": {
        "DE": "z. B. Ja, Meister"
    },
    "allowedPhrasesLabel": {
        "DE": "Erlaubte Sätze"
    },
    "allowedPhrasesD": {
        "DE": "Unter tiefer Kontrolle: stimmt dein ganzer Satz genau mit einem hier überein, wird er normal gesagt, ohne Benommenheit. Einer pro Zeile."
    },
    "allowedPhrasesPh": {
        "DE": "z. B. Ja, Meister"
    },
    "arousalStepLabel": {
        "DE": "Erregung"
    },
    "arousalStepD": {
        "DE": "Erregung pro Hypnose-Auslösung (0–20, 0 = aus)."
    },
    "depthEffectsHint": {
        "DE": "Wähle, welche Effekte bei jeder zeitgesteuerten Auslösung erscheinen."
    },
    "expr_new": {
        "DE": "Hinzufügen"
    },
    "defaultResponses": {
        "DE": "Ja, Meister\n$me ist ein braves Mädchen\n$me wird gehorchen\nMmm!! Ahhh~!"
    },
    "hs_enterForced": {
        "DE": "$mes Geist wird unaufhörlich zersetzt, der Blick immer leerer, bis er völlig im Sumpf der Trance versinkt."
    },
    "hs_forcedIdle": {
        "DE": "$me starrt mit hohlen Augen ins Leere, die Lippen zittern manchmal, als wollten sie sprechen, doch kein Laut kommt heraus — völlig reglos, wie eine ganz kontrollierte Puppe."
    },
    "hs_exitForced": {
        "DE": "Nach einer Weile weicht die Zersetzung langsam aus $mes Geist, die hohlen Augen gewinnen einen schwachen Glanz zurück, während das Bewusstsein allmählich zurückkehrt."
    },
    "hs_thinking": {
        "DE": "$me hält benommen inne und denkt einen Moment nach…"
    },
    "hs_blank": {
        "DE": "$me steht nur benommen da und sagt nichts"
    },
    "hs_pause": {
        "DE": "$me zögert einen Moment und spricht dann"
    },
    "hs_intercept": {
        "DE": "$me will etwas sagen, doch der Gedanke wird sofort gestört"
    },
    "hs_lewd": {
        "DE": "$mes Kopf ist jetzt nur noch mit unzüchtigen Gedanken gefüllt"
    },
    "hs_lewdFallback": {
        "DE": "$me beginnt unwillkürlich zu masturbieren…"
    },
    "l10n_test": {
        "DE": "[Übersetzungstest] Die Nachricht von {name} wurde von HSC sofort in deine Sprache übersetzt ✅"
    },
    "hypnoClimaxD": {
        "DE": "Aktiviert löst das Erreichen tiefer Kontrolle (100 % Hypnose) einen Höhepunkt durch die Hypnose aus (nutzt BCs nativen Höhepunkt-Ablauf, respektiert Verweigerung/Edging; ohne Wirkung bei deaktivierter Erregung)."
    },
    "sec_stateMsgFx": {
        "DE": "Nachrichteneffekte"
    },
    "stateDanmakuChatLabel": {
        "DE": "Danmaku — Chat"
    },
    "stateDanmakuChatD": {
        "DE": "Bei tiefer Kontrolle: Chatnachrichten anderer schweben als Danmaku vorbei (Zufallsgröße 14–20)."
    },
    "stateDanmakuWhisperLabel": {
        "DE": "Danmaku — Flüstern"
    },
    "stateDanmakuWhisperD": {
        "DE": "Bei tiefer Kontrolle: Flüstern an dich erscheint als lila Danmaku an deinem Ohr."
    },
    "stateMsgSmokeLabel": {
        "DE": "Nachrichten-Störung"
    },
    "stateMsgSmokeD": {
        "DE": "Bei tiefer Kontrolle: jede Nachricht (außer lokalen System- und Betreten/Verlassen-Meldungen) wird von Rauch verdeckt; klicken, um sie langsam zu lüften."
    },
    "stateMsgInterfereLabel": {
        "DE": "Nachrichten-Interferenz"
    },
    "stateMsgInterfereD": {
        "DE": "Bei tiefer Kontrolle: Betreten/Verlassen-Meldungen werden zu vagen, traumartigen Eindrücken umgeschrieben."
    },
    "stateSmokeHint": {
        "DE": "Klicken zum Aufdecken"
    },
    "stateInterfereEnter": {
        "DE": "Jemand kam herein…\nFühlt sich voller an…\nDie Luft wird lauter…\nMehr Blicke auf dir…"
    },
    "stateInterfereLeave": {
        "DE": "Jemand ging…\nFühlt sich leerer an…"
    },
    "remoteEditTitle": {
        "DE": "HSC-Text von {name} bearbeiten"
    },
    "remoteEditHint": {
        "DE": "Eine Zeile pro Satz. $me = hypnotisierte Person, $n = Zeilenumbruch; Statuszeilen mit $a werden als Aktion gesendet. Speichern sendet es an sie (nur wirksam, wenn weiterhin erlaubt)."
    },
    "remoteEditSave": {
        "DE": "💾 Speichern & senden"
    },
    "remoteEditSent": {
        "DE": "📤 An {name} gesendet, warte auf Anwendung…"
    },
    "remoteEditOk": {
        "DE": "✅ {name} hat deine Änderung übernommen"
    },
    "remoteEditDenied": {
        "DE": "⚠️ {name} hat deine Änderung nicht übernommen (du bist nicht auf der Whitelist)"
    },
    "profileEditBtn": {
        "DE": "Ihren HSC-Text bearbeiten"
    },
    "profileEditOff": {
        "DE": "Bearbeitung nicht erlaubt"
    },
    "profileEditNoPerm": {
        "DE": "Nicht auf der Whitelist — keine Bearbeitung"
    },
    "remoteEditNoPerm": {
        "DE": "Keine Berechtigung hierfür"
    },
    "whitelistD": {
        "DE": "Mitgliedsnummern oder Kürzel ($owner = Besitzer, $lover = Geliebte inkl. AFC, $friend = Freunde, $white = BC-Whitelist), durch Komma/Leerzeichen getrennt. Von allen „Whitelist\"-Rechten geteilt."
    },
    "textsResetD": {
        "DE": "Hypnosetext / Status / Auslösewörter auf die Standardwerte der aktuellen Sprache zurücksetzen (nach Sprachwechsel für neue Übersetzungen)."
    },
    "confirmTextsReset": {
        "DE": "Deinen Hypnosetext, Statusnachrichten und Auslösewörter mit den Standardwerten der aktuellen Sprache überschreiben?"
    },
    "whitelistPh": {
        "DE": "z. B. 12345, 67890"
    },
    "language": {
        "DE": "Sprache"
    },
    "languageD": {
        "DE": "UI-Sprache. Auto = Spielsprache; oder manuell wählen."
    },
    "exportD": {
        "DE": "Alle Einstellungen als JSON-Datei herunterladen."
    },
    "importD": {
        "DE": "Alle Einstellungen aus JSON-Datei wiederherstellen."
    },
    "effectsHint": {
        "DE": "Jeden VOICE-Effekt einzeln schalten; Maus über ein Element zeigt die Beschreibung."
    },
    "ev_pinkFlash": {
        "DE": "Rosa Schimmer"
    },
    "ev_pinkFlashD": {
        "DE": "Ein rosa Schimmer legt sich über den Bildschirm."
    },
    "ev_hypnoSpiral": {
        "DE": "Hypno-Spirale"
    },
    "ev_hypnoSpiralD": {
        "DE": "Eine drehende Spirale über dem Kopf."
    },
    "ev_hypnoWaves": {
        "DE": "Wellen"
    },
    "ev_hypnoWavesD": {
        "DE": "Konzentrische Wellen breiten sich links aus."
    },
    "ev_screenDistort": {
        "DE": "Verzerrung"
    },
    "ev_screenDistortD": {
        "DE": "Der Bildschirm dreht und verschwimmt leicht."
    },
    "ev_vignette": {
        "DE": "Vignette"
    },
    "ev_vignetteD": {
        "DE": "Ränder verdunkeln, Fokus auf die Mitte."
    },
    "ev_danmaku": {
        "DE": "Danmaku-Text"
    },
    "ev_danmakuD": {
        "DE": "Hauptzeile über dem Kopf; Erzählung links verteilt (inkl. Chatverlauf)."
    },
    "ev_steam": {
        "DE": "Atemnebel"
    },
    "ev_steamD": {
        "DE": "Sanfter Nebel steigt vom Mund auf."
    },
    "ev_expression": {
        "DE": "Ausdruck"
    },
    "ev_expressionD": {
        "DE": "Zufälliger Ausdruck während der Hypnose, danach zurück."
    },
    "ev_chatFade": {
        "DE": "Nachrichten-Einblendung"
    },
    "ev_chatFadeD": {
        "DE": "10 s nach dem Auslösen blenden neue Chatnachrichten langsam ein (LSCG-Geist-Stil)."
    },
    "ev_climax": {
        "DE": "Höhepunkt-FX"
    },
    "ev_climaxD": {
        "DE": "Bildbruch + rot/weißer Blitz + Beben."
    },
    "ev_sound": {
        "DE": "Atemton"
    },
    "ev_soundD": {
        "DE": "Atemton abspielen (Ton-Einstellungen nötig)."
    },
    "ev_headshot": {
        "DE": "Zentrales Porträt"
    },
    "ev_headshotD": {
        "DE": "Bei jedem Auslöser ein zentriertes Porträt; Spirale/Atem daran ausgerichtet (ignoriert Seiten)."
    },
    "ev_dualSound": {
        "DE": "Doppelton"
    },
    "ev_dualSoundD": {
        "DE": "Einen Auslöseton (Pendel usw. aus „Hypno\") über die Stimme legen."
    },
    "ev_emote": {
        "DE": "Status-Emote"
    },
    "ev_emoteD": {
        "DE": "Beim Auslösen eine Aktionsnachricht senden, damit andere deinen Zustand sehen."
    },
    "climaxModeD": {
        "DE": "„Bei Orgasmus\" = Bruch-FX nur bei echtem BC-Orgasmus; „Jeder Auslöser\" = bei jeder Hypnose."
    },
    "climaxEvery": {
        "DE": "Jeder Auslöser"
    },
    "climaxOrgasm": {
        "DE": "Bei Orgasmus"
    },
    "textsHint": {
        "DE": "Eine Zeile pro Satz.\n$me = hypnotisierte Person, $n = Zeilenumbruch (Danmaku/Schemen);\nStatuszeilen mit $a werden als Aktion gesendet."
    },
    "hypnoTextD": {
        "DE": "Quelle für Danmaku/Schemen-Erzählung; zusammen mit BCX „hör mir zu\", nur der Hypnotisierte sieht es."
    },
    "hypnoTextPh": {
        "DE": "z. B. $me, brav…$nentspann dich…"
    },
    "statusMsgD": {
        "DE": "Zufällig gesendete Nachricht beim Auslösen. Präfix $a = Aktion (System), $c = Chat (normale Rede, z. B. Stöhnen), sonst Emote."
    },
    "statusMsgPh": {
        "DE": "z. B. $a $me wird benommen / $c ah… mmh…"
    },
    "triggerWordsD": {
        "DE": "Eines pro Zeile. Deine Hypnose wird ausgelöst, wenn der Chat eines dieser Wörter enthält (BCX's \"hör mir zu\" funktioniert immer)."
    },
    "triggerWordsPh": {
        "DE": "z. B. Hypnose  Schlaf"
    },
    "soundsHint": {
        "DE": "URL einfügen oder lokale Datei „Hochladen\". ▶ Vorhören, ✕ Löschen, „Andere\" wählt aus der Bibliothek rechts. Leer = Standard."
    },
    "sndCat_hypno": {
        "DE": "Hypno"
    },
    "sndCat_voice": {
        "DE": "Hypno2"
    },
    "sndCat_climax": {
        "DE": "Höhepunkt"
    },
    "sndCat_depth": {
        "DE": "Tiefe"
    },
    "sndSlotHead": {
        "DE": "{name}-Töne (max. {max})"
    },
    "sndDefaultPh": {
        "DE": "(Standard) {file}"
    },
    "sndUnsetPh": {
        "DE": "Nicht gesetzt — URL / Hochladen / Andere"
    },
    "sndLocalName": {
        "DE": "Lokaler Ton"
    },
    "defaultTexts": {
        "DE": "Entspann dich… entspann…\nDein Geist schläft ein\nHöre meine Stimme\nDenk an nichts\nTiefer und tiefer\nGehorchen fühlt sich gut an\nSink hinab…\nBraves Mädchen…"
    },
    "defaultEmotes": {
        "DE": "$me wird benommen\n$me Augen werden leer…\n$me Bewusstsein sinkt\n$me schwankt leicht, benommen\n$me Miene wird abwesend"
    },
    "prefButton": {
        "DE": "HSC-Einstellungen"
    }
};
    var MSG = {
    "hs_enterForced": {
        "DE": "{0}s Geist wird unaufhörlich zersetzt, der Blick immer leerer, bis er völlig im Sumpf der Trance versinkt."
    },
    "hs_forcedIdle": {
        "DE": "{0} starrt mit hohlen Augen ins Leere, die Lippen zittern manchmal, als wollten sie sprechen, doch kein Laut kommt heraus — völlig reglos, wie eine ganz kontrollierte Puppe."
    },
    "hs_exitForced": {
        "DE": "Nach einer Weile weicht die Zersetzung langsam aus {0}s Geist, die hohlen Augen gewinnen einen schwachen Glanz zurück, während das Bewusstsein allmählich zurückkehrt."
    },
    "hs_thinking": {
        "DE": "{0} hält benommen inne und denkt einen Moment nach…"
    },
    "hs_blank": {
        "DE": "{0} steht nur benommen da und sagt nichts"
    },
    "hs_pause": {
        "DE": "{0} zögert einen Moment und spricht dann"
    },
    "hs_intercept": {
        "DE": "{0} will etwas sagen, doch der Gedanke wird sofort gestört"
    },
    "hs_lewd": {
        "DE": "{0}s Kopf ist jetzt nur noch mit unzüchtigen Gedanken gefüllt"
    },
    "hs_lewdFallback": {
        "DE": "{0} beginnt unwillkürlich zu masturbieren…"
    },
    "l10n_test": {
        "DE": "[Übersetzungstest] Die Nachricht von {0} wurde von HSC sofort in deine Sprache übersetzt ✅"
    }
};
    if (L.__Sys_i18n__ && L.__Sys_i18n__.register) L.__Sys_i18n__.register('HSC', UI);
    if (L.__Sys_L10N__ && L.__Sys_L10N__.register) L.__Sys_L10N__.register('HSC', MSG);
})();
