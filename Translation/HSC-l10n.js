// Liko - HSC L10N 字庫（聊天訊息在地化 base；由 HSC 動態載入）
// 送出端以 __Sys_L10N__.send('HSC', key, name) 夾帶英文底本；接收端依己方語言重寫。
// {0} = 觸發者名稱（原 $me）。與 HSC-i18n.js 的對應 key 內容相同，僅 $me→{0}。
(function () {
    if (!window.Liko?.__Sys_L10N__?.register) { console.error('[Liko HSC L10N] L10N 引擎尚未載入'); return; }
    window.Liko.__Sys_L10N__.register('HSC', {
        "hs_enterForced": {
            "TW": "{0} 的精神被不斷侵蝕，眼神越來越渙散，最終徹底墜入催眠的泥沼。",
            "CN": "{0} 的精神被不断侵蚀，眼神越来越涣散，最终彻底坠入催眠的泥沼。",
            "EN": "{0}'s mind is relentlessly eroded, the gaze growing ever more vacant, until sinking completely into the mire of trance.",
            "JP": "{0}の精神は絶え間なく侵食され、視線はますます虚ろになり、最終的には完全に催眠の泥沼に沈んでしまう。",
            "KR": "{0}의 정신이 끊임없이 잠식되어 눈빛이 점점 흐릿해지고, 결국 완전히 최면의 늪에 빠져든다.",
            "DE": "{0}s Geist wird unaufhörlich zersetzt, der Blick immer leerer, bis er völlig im Sumpf der Trance versinkt.",
            "FR": "L'esprit de {0} est rongé sans relâche, le regard de plus en plus vide, jusqu'à sombrer complètement dans le marécage de la transe.",
            "RU": "Разум {0} неумолимо разрушается, взгляд всё более пустой, пока полностью не тонет в трясине транса.",
            "UA": "Розум {0} невпинно руйнується, погляд дедалі порожніший, аж поки повністю не тоне в трясовині трансу."
        },
        "hs_forcedIdle": {
            "TW": "{0} 的雙眼空洞呆滯，偶爾嘴唇會微微顫動，像是想說什麼，卻發不出任何聲音，整個人毫無反應，如同被徹底操控的人偶。",
            "CN": "{0} 的双眼空洞呆滞，偶尔嘴唇会微微颤动，像是想说什么，却发不出任何声音，整个人毫无反应，如同被彻底操控的人偶。",
            "EN": "{0} stares blankly with hollow eyes, lips occasionally trembling as if to speak, yet no sound comes out — utterly unresponsive, like a fully controlled puppet.",
            "JP": "{0}の両目は虚ろで呆けており、時折唇がわずかに震えるが、何も言おうとしても声が出ず、全く反応がない、まるで完全に操られた人形のようだ。",
            "KR": "{0}의 두 눈은 텅 비어 멍하고, 이따금 입술이 살짝 떨리지만 무언가 말하려 해도 소리가 나오지 않으며, 완전히 무반응 상태로 마치 완전히 조종당하는 인형 같다.",
            "DE": "{0} starrt mit hohlen Augen ins Leere, die Lippen zittern manchmal, als wollten sie sprechen, doch kein Laut kommt heraus — völlig reglos, wie eine ganz kontrollierte Puppe.",
            "FR": "{0} fixe le vide, les yeux creux, les lèvres tremblant parfois comme pour parler, mais aucun son ne sort — totalement inerte, telle une marionnette entièrement contrôlée.",
            "RU": "{0} смотрит в пустоту пустыми глазами, губы иногда подрагивают, будто хотят что-то сказать, но не издают ни звука — совершенно безучастна, как полностью управляемая кукла.",
            "UA": "{0} дивиться в порожнечу порожніми очима, губи інколи тремтять, наче хочуть щось сказати, та не видають ні звуку — цілком байдужа, мов повністю керована лялька."
        },
        "hs_exitForced": {
            "TW": "經過一段時間後，侵蝕效果慢慢從 {0} 的腦中退去，空洞的雙眼逐漸恢復些許光澤，意識開始緩緩回歸。",
            "CN": "经过一段时间后，侵蚀效果慢慢从 {0} 的脑中退去，空洞的双眼逐渐恢复些许光泽，意识开始缓缓回归。",
            "EN": "After a while the erosion slowly recedes from {0}'s mind, the hollow eyes regaining a faint glimmer as consciousness gradually returns.",
            "JP": "しばらくすると、侵食効果は徐々に{0}の頭から引いていき、虚ろだった両目に少しずつ輝きが戻り、意識がゆっくりと戻り始める。",
            "KR": "얼마 후, 잠식 효과가 서서히 {0}의 머릿속에서 물러나며 텅 비었던 두 눈에 조금씩 빛이 돌아오고, 의식이 천천히 돌아오기 시작한다.",
            "DE": "Nach einer Weile weicht die Zersetzung langsam aus {0}s Geist, die hohlen Augen gewinnen einen schwachen Glanz zurück, während das Bewusstsein allmählich zurückkehrt.",
            "FR": "Après un moment, l'érosion se retire lentement de l'esprit de {0}, les yeux creux retrouvant une faible lueur tandis que la conscience revient peu à peu.",
            "RU": "Спустя время разрушение медленно отступает из разума {0}, пустые глаза вновь обретают слабый блеск, а сознание постепенно возвращается.",
            "UA": "Згодом руйнування повільно відступає з розуму {0}, порожні очі знову набувають слабкого блиску, а свідомість поступово повертається."
        },
        "hs_thinking": {
            "TW": "{0} 呆呆地思考了一下…",
            "CN": "{0} 呆呆地思考了一下…",
            "EN": "{0} pauses, dazed, thinking for a moment…",
            "JP": "{0}はぼんやりと少し考え込んだ…",
            "KR": "{0}가 멍하니 잠시 생각에 잠겼다…",
            "DE": "{0} hält benommen inne und denkt einen Moment nach…",
            "FR": "{0} marque une pause, hébété, réfléchissant un instant…",
            "RU": "{0} растерянно замирает, задумавшись на мгновение…",
            "UA": "{0} розгублено завмирає, замислившись на мить…"
        },
        "hs_blank": {
            "TW": "{0} 只是呆呆地站著，什麼也沒說",
            "CN": "{0} 只是呆呆地站着，什么也没说",
            "EN": "{0} just stands there blankly, saying nothing",
            "JP": "{0}はただぼんやりと立ち尽くし、何も言わなかった",
            "KR": "{0}는 그저 멍하니 서서 아무 말도 하지 않았다",
            "DE": "{0} steht nur benommen da und sagt nichts",
            "FR": "{0} reste simplement là, hébété, sans rien dire",
            "RU": "{0} просто растерянно стоит, ничего не говоря",
            "UA": "{0} просто розгублено стоїть, нічого не кажучи"
        },
        "hs_pause": {
            "TW": "{0} 停頓了一下才開口",
            "CN": "{0} 停顿了一下才开口",
            "EN": "{0} hesitates for a moment before speaking",
            "JP": "{0}は少し間を置いてから口を開いた",
            "KR": "{0}는 잠시 뜸을 들이다 입을 열었다",
            "DE": "{0} zögert einen Moment und spricht dann",
            "FR": "{0} hésite un instant avant de parler",
            "RU": "{0} на мгновение медлит, прежде чем заговорить",
            "UA": "{0} на мить вагається, перш ніж заговорити"
        },
        "hs_intercept": {
            "TW": "{0} 想說些什麼，但意識馬上被干擾了",
            "CN": "{0} 想说些什么，但意识马上被干扰了",
            "EN": "{0} wants to say something, but the thought is instantly disrupted",
            "JP": "{0}は何か言おうとしたが、意識がすぐに妨げられた",
            "KR": "{0}가 무언가 말하려 했지만 의식이 곧바로 흐트러졌다",
            "DE": "{0} will etwas sagen, doch der Gedanke wird sofort gestört",
            "FR": "{0} veut dire quelque chose, mais la pensée est aussitôt perturbée",
            "RU": "{0} хочет что-то сказать, но мысль тут же обрывается",
            "UA": "{0} хоче щось сказати, але думка миттєво обривається"
        },
        "hs_lewd": {
            "TW": "{0} 現在滿腦子只想著淫穢的事情",
            "CN": "{0} 现在满脑子只想着淫秽的事情",
            "EN": "{0}'s head is now filled with nothing but lewd thoughts",
            "JP": "{0}は今、頭の中がいやらしいことでいっぱいだ",
            "KR": "{0}는 지금 머릿속이 음란한 생각으로 가득 차 있다",
            "DE": "{0}s Kopf ist jetzt nur noch mit unzüchtigen Gedanken gefüllt",
            "FR": "La tête de {0} n'est plus remplie que de pensées obscènes",
            "RU": "Голова {0} теперь заполнена лишь развратными мыслями",
            "UA": "Голова {0} тепер сповнена лише розпусних думок"
        },
        "hs_lewdFallback": {
            "TW": "{0} 開始不自覺地自慰起來…",
            "CN": "{0} 开始不自觉地自慰起来…",
            "EN": "{0} starts masturbating involuntarily…",
            "JP": "{0}は無意識にオナニーを始めてしまう…",
            "KR": "{0}가 자기도 모르게 자위를 시작한다…",
            "DE": "{0} beginnt unwillkürlich zu masturbieren…",
            "FR": "{0} se met à se masturber involontairement…",
            "RU": "{0} начинает непроизвольно мастурбировать…",
            "UA": "{0} починає мимоволі мастурбувати…"
        },
        "l10n_test": {
            "TW": "【翻譯測試】{0} 傳來的訊息已被 HSC 依你的語言即時替換顯示 ✅",
            "CN": "【翻译测试】{0} 传来的信息已被 HSC 依你的语言即时替换显示 ✅",
            "EN": "[Translation Test] The message from {0} has been instantly localized by HSC ✅",
            "JP": "【翻訳テスト】{0} からのメッセージは HSC によってあなたの言語にリアルタイムで置き換えて表示されました ✅",
            "KR": "【번역 테스트】{0} 님이 보낸 메시지가 HSC에 의해 당신의 언어로 실시간 변환되어 표시되었습니다 ✅",
            "DE": "[Übersetzungstest] Die Nachricht von {0} wurde von HSC sofort in deine Sprache übersetzt ✅",
            "FR": "[Test de traduction] Le message de {0} a été instantanément localisé par HSC ✅",
            "RU": "[Тест перевода] Сообщение от {0} было мгновенно локализовано HSC ✅",
            "UA": "[Тест перекладу] Повідомлення від {0} було миттєво локалізовано HSC ✅"
        }
    });
})();
