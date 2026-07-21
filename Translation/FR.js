// ════════════════════════════════════════
//  Liko - HSC 字庫 — FR（Français）
//  自動由 scripts/split（來源 Translation 整理）產生；一國一檔，含 UI(i18n) 與聊天(L10N) 兩套。
//  載入後註冊到共用引擎：__Sys_i18n__（UI）與 __Sys_L10N__（聊天在地化）。
//  佔位符：UI 用 {name}；L10N 用 {0}（觸發者名稱）。
// ════════════════════════════════════════
(function () {
    var L = (typeof window !== 'undefined') ? window.Liko : (globalThis.Liko);
    if (!L) { console.error('[Liko HSC FR] Liko 尚未載入'); return; }
    var UI = {
    "loaded": {
        "FR": "HSC v{v} chargé \n/hsc help | /hsc setting | /hsc show test\nPensez à vérifier les réglages lors de la première utilisation ou après une mise à jour !"
    },
    "help": {
        "FR": "🌀 HSC v{v} commandes :\n  /hsc setting       — Ouvrir les réglages\n  /hsc show          — Afficher le panneau\n  /hsc test [texte]  — Déclencher l'effet\n  /hsc climax        — Tester l'effet d'apogée"
    },
    "cmdUnknown": {
        "FR": "⚠️ [HSC] Commande inconnue « {sub} », tapez /hsc help"
    },
    "cantOpenSettings": {
        "FR": "⚠️ Impossible d'ouvrir les réglages"
    },
    "exportDone": {
        "FR": "📤 Réglages HSC exportés"
    },
    "importDone": {
        "FR": "📥 Réglages HSC importés"
    },
    "editedYourText": {
        "FR": "📝 {who} a modifié votre texte d'hypnose HSC"
    },
    "accessedYourText": {
        "FR": "👁 {who} consulte votre texte HSC"
    },
    "tab_basic": {
        "FR": "Général"
    },
    "tab_effects": {
        "FR": "Effets"
    },
    "tab_texts": {
        "FR": "Textes"
    },
    "tab_expr": {
        "FR": "Expression"
    },
    "tab_sounds": {
        "FR": "Sons"
    },
    "tab_about": {
        "FR": "À propos"
    },
    "exit": {
        "FR": "Quitter"
    },
    "info": {
        "FR": "── Info ──"
    },
    "cancel": {
        "FR": "Annuler"
    },
    "confirm": {
        "FR": "OK"
    },
    "save": {
        "FR": "💾 Enregistrer"
    },
    "delete": {
        "FR": "🗑 Supprimer"
    },
    "upload": {
        "FR": "Téléverser"
    },
    "clear": {
        "FR": "Effacer"
    },
    "other": {
        "FR": "Autre"
    },
    "restoreDefault": {
        "FR": "Réinitialiser"
    },
    "export": {
        "FR": "exporter"
    },
    "import": {
        "FR": "importer"
    },
    "enabledOn": {
        "FR": "HSC activé"
    },
    "enabledOff": {
        "FR": "HSC désactivé"
    },
    "enabledDesc": {
        "FR": "Une fois activé, ce plugin ajoute des effets immersifs, dont certains peuvent être inconfortables (flashs intenses, écran brisé, secousses). À utiliser à votre discrétion."
    },
    "intensity": {
        "FR": "Intensité"
    },
    "depthMax": {
        "FR": "Profondeur"
    },
    "depthNone": {
        "FR": "Aucun"
    },
    "depthLight": {
        "FR": "Léger"
    },
    "depthMed": {
        "FR": "Moyen"
    },
    "depthHeavy": {
        "FR": "Fort"
    },
    "interval": {
        "FR": "Intervalle"
    },
    "minutes": {
        "FR": "min (1~99)"
    },
    "depthEffects": {
        "FR": "── FX profondeur ──"
    },
    "triggerTarget": {
        "FR": "Déclencheur"
    },
    "anyone": {
        "FR": "Tous"
    },
    "whitelistOnly": {
        "FR": "Liste blanche"
    },
    "whitelist": {
        "FR": "Liste blanche"
    },
    "allowOthersOn": {
        "FR": "Autoriser autrui à modifier mon texte : OUI"
    },
    "allowOthersOff": {
        "FR": "Autoriser autrui à modifier mon texte : NON"
    },
    "climaxMode": {
        "FR": "Mode apogée"
    },
    "climaxOnOrgasm": {
        "FR": "À l'orgasme"
    },
    "climaxAlways": {
        "FR": "À chaque fois"
    },
    "sec_hypnoText": {
        "FR": "Texte d'hypnose"
    },
    "sec_statusMsg": {
        "FR": "Message d'état"
    },
    "sec_triggerWords": {
        "FR": "Mots déclencheurs"
    },
    "expr_edit": {
        "FR": "🎭 Modifier l'expression"
    },
    "expr_item": {
        "FR": "Visage {n}"
    },
    "expr_add": {
        "FR": "＋ Ajouter depuis l'éditeur"
    },
    "expr_hint": {
        "FR": "Réglez l'expression à droite, puis cliquez sur Enregistrer d'une ligne ou Ajouter"
    },
    "eyebrows": {
        "FR": "Sourcils"
    },
    "eyes": {
        "FR": "Yeux"
    },
    "mouth": {
        "FR": "Bouche"
    },
    "blush": {
        "FR": "Rougeur"
    },
    "exprNone": {
        "FR": "— Aucune —"
    },
    "previewLoading": {
        "FR": "Chargement…"
    },
    "confirmReplace": {
        "FR": "Remplacer « {name} » par le contenu de l'éditeur ?"
    },
    "confirmDelete": {
        "FR": "Supprimer « {name} » ?"
    },
    "confirmReset": {
        "FR": "Effacer tous les visages personnalisés et restaurer les 4 par défaut ?"
    },
    "snd_lib": {
        "FR": "🔊 Bibliothèque de sons"
    },
    "snd_preset": {
        "FR": "Préréglage"
    },
    "snd_local": {
        "FR": "Local"
    },
    "snd_assignTo": {
        "FR": "Affecter à « {label} » : cliquez un son ci-dessus"
    },
    "snd_pickHint": {
        "FR": "Cliquez « Autre » d'une case pour affecter ; cliquez directement pour écouter."
    },
    "about_author": {
        "FR": "Auteur : Likolisu"
    },
    "about_dev": {
        "FR": "Projet personnel ; des bugs sont possibles — signalez-les sur GitHub."
    },
    "about_report": {
        "FR": "🐛 Signaler sur GitHub"
    },
    "about_assets": {
        "FR": "── Tous les éléments sont gratuits ──"
    },
    "intensityD": {
        "FR": "Force globale (0.1~3.0) ; définit aussi le niveau de profondeur (≈1 léger/2 moyen/3 fort, limité par Profondeur). Glissez le curseur."
    },
    "depthMaxD": {
        "FR": "Niveau max d'hypnose de fond (séparé de VOICE). « Aucun » désactive la boucle."
    },
    "intervalD": {
        "FR": "Fréquence de l'hypnose de fond (1~99 min). Pas de boucle si Profondeur = Aucun."
    },
    "depthRowLight": {
        "FR": "Léger"
    },
    "depthRowMed": {
        "FR": "Moyen"
    },
    "depthRowHeavy": {
        "FR": "Fort"
    },
    "fx_smoke": {
        "FR": "Fumée"
    },
    "fx_smokeD": {
        "FR": "Brume rose occasionnelle"
    },
    "fx_pant": {
        "FR": "Halètement"
    },
    "fx_pantD": {
        "FR": "Buée de souffle rythmée"
    },
    "fx_danmaku": {
        "FR": "Danmaku"
    },
    "fx_danmakuD": {
        "FR": "Le chat devient du danmaku hypnotique"
    },
    "fx_ghost": {
        "FR": "Ombre"
    },
    "fx_ghostD": {
        "FR": "Silhouette qui murmure derrière + texte à l'oreille"
    },
    "fx_figblur": {
        "FR": "Flou perso"
    },
    "fx_figblurD": {
        "FR": "Écran flou, perso/ombre nets"
    },
    "fx_sfx": {
        "FR": "Son"
    },
    "fx_sfxD": {
        "FR": "Joue le son de profondeur"
    },
    "fx_chatblur": {
        "FR": "Flou chat"
    },
    "fx_chatblurD": {
        "FR": "Floute le journal de chat à droite"
    },
    "fx_fade": {
        "FR": "Apparition"
    },
    "fx_fadeD": {
        "FR": "Les nouveaux messages apparaissent lentement"
    },
    "triggerTargetD": {
        "FR": "Qui peut vous hypnotiser via un mot déclencheur. « Liste blanche » = membres listés seulement."
    },
    "allowEdit": {
        "FR": "Autoriser l'édition"
    },
    "allowEditD": {
        "FR": "Qui peut modifier votre texte d'hypnose. « Moi seul » = vous ; « Liste blanche » = membres listés (vous compris)."
    },
    "editOff": {
        "FR": "Moi seul"
    },
    "editAny": {
        "FR": "Tous"
    },
    "editWhitelist": {
        "FR": "Liste blanche"
    },
    "editPermTitle": {
        "FR": "Qui peut éditer"
    },
    "editPermTitleD": {
        "FR": "Qui peut modifier chaque type de contenu via votre profil. « Moi seul » = vous ; « Liste blanche » = membres listés ; « Tous » = tout le monde. Liste blanche commune ci-dessous."
    },
    "on": {
        "FR": "Oui"
    },
    "off": {
        "FR": "Non"
    },
    "seeOthersPant": {
        "FR": "Voir les autres haleter"
    },
    "seeOthersPantD": {
        "FR": "Activé, vous voyez de la buée sur les autres dans la salle quand ils sont hypnotisés (ils le diffusent). Désactivé par défaut."
    },
    "seeOthersHypnoLabel": {
        "FR": "Progression d'hypnose"
    },
    "seeOthersHypnoD": {
        "FR": "Activé, affiche une orbe de progression d'hypnose au-dessus des autres utilisateurs HSC de la salle (lit la valeur qu'ils diffusent). Activé par défaut."
    },
    "seeOthersTalisLabel": {
        "FR": "Talisman d'hypnose"
    },
    "seeOthersTalisD": {
        "FR": "Activé, affiche un talisman d'hypnose au-dessus des autres dans la salle lorsqu'ils sont sous contrôle profond. Activé par défaut."
    },
    "hscOrbTip": {
        "FR": "Progression d'hypnose HSC : {n}%"
    },
    "hscOrbTipTime": {
        "FR": "HSC se réveille dans {t}"
    },
    "hscOrbTipInf": {
        "FR": "Hypnose HSC en cours (pas de réveil auto)"
    },
    "hypnoClimaxLabel": {
        "FR": "Apogée hypnotique"
    },
    "tab_voice": {
        "FR": "Hypnose vocale"
    },
    "tab_daily": {
        "FR": "Interférence quotidienne"
    },
    "tab_state": {
        "FR": "État hypnotique"
    },
    "sec_effects": {
        "FR": "Réglages des effets"
    },
    "voiceEnabledLabel": {
        "FR": "Hypnose vocale"
    },
    "voiceEnabledD": {
        "FR": "Modifiez texte, mots déclencheurs et effets via « Entends ma voix » de BCX ou les réglages HSC. Détails dans l'onglet Hypnose vocale."
    },
    "dailyEnabledLabel": {
        "FR": "Interférence quotidienne"
    },
    "dailyEnabledD": {
        "FR": "Hypnose déclenchée périodiquement, sans mots déclencheurs. Détails dans l'onglet Interférence quotidienne."
    },
    "stateEnabledLabel": {
        "FR": "État hypnotique"
    },
    "stateEnabledD": {
        "FR": "Effets d'état altéré de HSC, déclenchés à 100 % d'hypnose. Détails dans l'onglet État hypnotique."
    },
    "arousalVoiceLabel": {
        "FR": "Excitation – Voix"
    },
    "arousalVoiceD": {
        "FR": "Excitation ajoutée par hypnose vocale (0–20, 0 = désactivé)."
    },
    "arousalDailyLabel": {
        "FR": "Excitation – Quotidien"
    },
    "arousalDailyD": {
        "FR": "Excitation ajoutée par interférence quotidienne (0–20, 0 = désactivé)."
    },
    "hypnoVoiceLabel2": {
        "FR": "Hypnose – Voix"
    },
    "hypnoVoiceD2": {
        "FR": "Valeur d'hypnose ajoutée par hypnose vocale (0–20). Sans effet si l'État hypnotique est désactivé."
    },
    "hypnoDailyLabel": {
        "FR": "Hypnose – Quotidien"
    },
    "hypnoDailyD": {
        "FR": "Valeur d'hypnose ajoutée par interférence quotidienne (0–20). Sans effet si l'État hypnotique est désactivé."
    },
    "seeOthersEffect": {
        "FR": "Voir les effets des autres"
    },
    "autoWakeLabel": {
        "FR": "Réveil auto"
    },
    "autoWakeD": {
        "FR": "Activé : entrer en état d'hypnose lance un compte à rebours de réveil (15–99 min) ; à 0, réveil auto. Désactivé : pas de réveil auto, seuls les mots de réveil (affiche ∞ au-dessus)."
    },
    "hypnoExtendLabel": {
        "FR": "Prolonger l'hypnose"
    },
    "hypnoExtendD": {
        "FR": "Activé, chaque déclencheur voix/ambiant en état d'hypnose prolonge le temps de réveil (10–990 s, pas de 10 s ; peut dépasser la base de réveil auto)."
    },
    "minUnit": {
        "FR": "min"
    },
    "secUnit": {
        "FR": "s"
    },
    "forcedGrowthLabel": {
        "FR": "Valeur d'hypnose"
    },
    "forcedGrowthD": {
        "FR": "Évite de ne jamais se réveiller : sous contrôle profond, l'hypnose croît de N/10 de la normale (défaut 1/10, ex. 20 → 2)."
    },
    "showProfileBtnLabel": {
        "FR": "Modifier le texte des autres"
    },
    "showProfileBtnD": {
        "FR": "Détermine si le bouton d'édition de texte HSC apparaît sur les profils des autres ; désactivé = masqué."
    },
    "hypnoAnimLabel": {
        "FR": "Animation d'hypnose"
    },
    "hypnoAnimD": {
        "FR": "Activer l'animation du talisman d'hypnose (en développement)."
    },
    "hypnoStyleLabel": {
        "FR": "Style du talisman"
    },
    "hypnoStyleD": {
        "FR": "Le motif de talisman utilisé par l'animation (12 au total) ; survolez pour prévisualiser."
    },
    "hypnoStyleName": {
        "FR": "Style {n}"
    },
    "fx_headTalisman": {
        "FR": "Talisman sur la tête"
    },
    "fx_headTalismanD": {
        "FR": "Un talisman reste sur le front et vibre sous contrôle profond (interrupteur indépendant, sans animation)."
    },
    "fx_faceCensor": {
        "FR": "Blocage de reconnaissance faciale"
    },
    "fx_faceCensorD": {
        "FR": "Sous contrôle profond : les visages des autres sont flous, couverts d'un gribouillis ondulant."
    },
    "fx_nameCensor": {
        "FR": "Blocage de reconnaissance des noms"
    },
    "nameCensorPlayer": {
        "FR": "Personnage seul"
    },
    "nameCensorNetwork": {
        "FR": "Avec relations"
    },
    "fx_nameCensorD": {
        "FR": "Sous contrôle profond : les noms/ID des autres sont illisibles (étiquettes de salon et profils masqués)."
    },
    "censorStyleLabel": {
        "FR": "Style de gribouillis"
    },
    "censorStyleD": {
        "FR": "Style du gribouillis facial ; choisissez parmi deux."
    },
    "censorOff": {
        "FR": "Non"
    },
    "censorStyleCircle": {
        "FR": "Cercles"
    },
    "censorStyleLine": {
        "FR": "Lignes"
    },
    "fx_crowd": {
        "FR": "Afficher la foule"
    },
    "fx_crowdD": {
        "FR": "Sous contrôle profond : une rangée de spectateurs apparaît en bas, évoquant d'être observé/entouré."
    },
    "resetAll": {
        "FR": "Réinitialiser"
    },
    "resetAllD": {
        "FR": "Réinitialiser tous les réglages HSC."
    },
    "confirmResetAll": {
        "FR": "Réinitialiser tous les réglages HSC ? Irréversible."
    },
    "hypnoLabel": {
        "FR": "Valeur d'hypnose"
    },
    "hypnoD": {
        "FR": "Valeur accumulée quand hypnotisé (0–100, −1 toutes les 12 s). 100 % = contrôle profond, sous 15 % libération."
    },
    "hypnoVoiceLabel": {
        "FR": "Valeur hypnose vocale"
    },
    "hypnoVoiceD": {
        "FR": "Ajouté par hypnose vocale (0–20, 0 = désactivé)."
    },
    "hypnoDepthLabel": {
        "FR": "Valeur hypnose profonde"
    },
    "hypnoDepthD": {
        "FR": "Ajouté par hypnose profonde (0–10, 0 = désactivé)."
    },
    "sec_wakeWord": {
        "FR": "Mots de réveil"
    },
    "wakeWordD": {
        "FR": "Quand un autre dans la salle le dit, vous vous réveillez aussitôt (si hypnose >80 %, mise à 80 %) ; le dire soi-même est sans effet. Un par ligne."
    },
    "wakeWordPh": {
        "FR": "ex. wake"
    },
    "sec_hypnoResponse": {
        "FR": "Réponse hypnotique"
    },
    "hypnoResponseD": {
        "FR": "Sous contrôle profond (100 %), la parole peut être interceptée et remplacée par l'une de ces phrases. Une par ligne, $me = votre nom."
    },
    "hypnoResponsePh": {
        "FR": "ex. Oui, Maître"
    },
    "allowedPhrasesLabel": {
        "FR": "Phrases autorisées"
    },
    "allowedPhrasesD": {
        "FR": "Sous contrôle profond, si votre phrase entière correspond exactement à l'une d'elles, elle est dite normalement sans l'hébétude. Une par ligne."
    },
    "allowedPhrasesPh": {
        "FR": "ex. Oui, Maître"
    },
    "arousalStepLabel": {
        "FR": "Excitation"
    },
    "arousalStepD": {
        "FR": "Excitation ajoutée par déclenchement (0–20, 0 = désactivé)."
    },
    "depthEffectsHint": {
        "FR": "Choisissez quels effets apparaissent à chaque déclenchement planifié."
    },
    "expr_new": {
        "FR": "Ajouter"
    },
    "defaultResponses": {
        "FR": "Oui, Maître\n$me est une gentille fille\n$me obéira\nMmm !! Ahhh~!"
    },
    "hs_enterForced": {
        "FR": "L'esprit de $me est rongé sans relâche, le regard de plus en plus vide, jusqu'à sombrer complètement dans le marécage de la transe."
    },
    "hs_forcedIdle": {
        "FR": "$me fixe le vide, les yeux creux, les lèvres tremblant parfois comme pour parler, mais aucun son ne sort — totalement inerte, telle une marionnette entièrement contrôlée."
    },
    "hs_exitForced": {
        "FR": "Après un moment, l'érosion se retire lentement de l'esprit de $me, les yeux creux retrouvant une faible lueur tandis que la conscience revient peu à peu."
    },
    "hs_thinking": {
        "FR": "$me marque une pause, hébété, réfléchissant un instant…"
    },
    "hs_blank": {
        "FR": "$me reste simplement là, hébété, sans rien dire"
    },
    "hs_pause": {
        "FR": "$me hésite un instant avant de parler"
    },
    "hs_intercept": {
        "FR": "$me veut dire quelque chose, mais la pensée est aussitôt perturbée"
    },
    "hs_lewd": {
        "FR": "La tête de $me n'est plus remplie que de pensées obscènes"
    },
    "hs_lewdFallback": {
        "FR": "$me se met à se masturber involontairement…"
    },
    "l10n_test": {
        "FR": "[Test de traduction] Le message de {name} a été instantanément localisé par HSC ✅"
    },
    "hypnoClimaxD": {
        "FR": "Activé, atteindre le contrôle profond (100 % d'hypnose) déclenche une apogée due à l'hypnose (utilise le flux natif de BC, respecte le déni/edging ; sans effet si l'excitation est désactivée)."
    },
    "sec_stateMsgFx": {
        "FR": "Effets de message"
    },
    "stateDanmakuChatLabel": {
        "FR": "Danmaku — chat"
    },
    "stateDanmakuChatD": {
        "FR": "Sous contrôle profond : les messages des autres flottent en danmaku (taille aléatoire 14–20)."
    },
    "stateDanmakuWhisperLabel": {
        "FR": "Danmaku — murmure"
    },
    "stateDanmakuWhisperD": {
        "FR": "Sous contrôle profond : les murmures apparaissent en danmaku violet près de votre oreille."
    },
    "stateMsgSmokeLabel": {
        "FR": "Obstruction des messages"
    },
    "stateMsgSmokeD": {
        "FR": "Sous contrôle profond : chaque message (sauf système local et entrée/sortie) est voilé de fumée ; cliquez pour la dissiper lentement."
    },
    "stateMsgInterfereLabel": {
        "FR": "Interférence des messages"
    },
    "stateMsgInterfereD": {
        "FR": "Sous contrôle profond : les messages d'entrée/sortie deviennent de vagues impressions oniriques."
    },
    "stateSmokeHint": {
        "FR": "Cliquer pour révéler"
    },
    "stateInterfereEnter": {
        "FR": "Quelqu'un est entré…\nÇa semble plus bondé…\nL'air devient plus bruyant…\nPlus de regards sur toi…"
    },
    "stateInterfereLeave": {
        "FR": "Quelqu'un est parti…\nÇa semble plus vide…"
    },
    "remoteEditTitle": {
        "FR": "Modifier le texte HSC de {name}"
    },
    "remoteEditHint": {
        "FR": "Une ligne par phrase. $me = la personne hypnotisée, $n = saut de ligne ; les lignes de statut commençant par $a sont envoyées en Action. L'enregistrement les leur envoie (effectif seulement si l'édition reste autorisée)."
    },
    "remoteEditSave": {
        "FR": "💾 Enregistrer et envoyer"
    },
    "remoteEditSent": {
        "FR": "📤 Envoyé à {name}, en attente d'application…"
    },
    "remoteEditOk": {
        "FR": "✅ {name} a appliqué votre modification"
    },
    "remoteEditDenied": {
        "FR": "⚠️ {name} n'a pas appliqué votre modification (vous n'êtes pas sur sa liste blanche)"
    },
    "profileEditBtn": {
        "FR": "Modifier son texte HSC"
    },
    "profileEditOff": {
        "FR": "Édition non autorisée"
    },
    "profileEditNoPerm": {
        "FR": "Pas sur leur liste blanche — édition impossible"
    },
    "remoteEditNoPerm": {
        "FR": "Vous ne pouvez pas modifier ceci"
    },
    "whitelistD": {
        "FR": "Numéros de membre ou jetons ($owner = propriétaire, $lover = amants dont AFC, $friend = amis, $white = liste blanche BC), séparés par virgule/espace. Partagé par toutes les permissions « Liste blanche »."
    },
    "textsResetD": {
        "FR": "Réinitialise texte d'hypnose / statut / mots déclencheurs aux valeurs par défaut de la langue actuelle (après changement de langue)."
    },
    "confirmTextsReset": {
        "FR": "Remplacer votre texte d'hypnose, messages de statut et mots déclencheurs par les valeurs par défaut de la langue actuelle ?"
    },
    "whitelistPh": {
        "FR": "ex. 12345, 67890"
    },
    "language": {
        "FR": "Langue"
    },
    "languageD": {
        "FR": "Langue de l'interface. Auto = langue du jeu ; ou choisir manuellement."
    },
    "exportD": {
        "FR": "Télécharger tous les réglages en JSON."
    },
    "importD": {
        "FR": "Restaurer tous les réglages depuis un JSON."
    },
    "effectsHint": {
        "FR": "Activez chaque effet VOICE ; survolez un élément pour sa description."
    },
    "ev_pinkFlash": {
        "FR": "Lueur rose"
    },
    "ev_pinkFlashD": {
        "FR": "Une lueur rose envahit l'écran pour une ambiance floue."
    },
    "ev_hypnoSpiral": {
        "FR": "Spirale hypno"
    },
    "ev_hypnoSpiralD": {
        "FR": "Une spirale tournante apparaît au-dessus de la tête."
    },
    "ev_hypnoWaves": {
        "FR": "Ondes"
    },
    "ev_hypnoWavesD": {
        "FR": "Des ondes concentriques s'étendent à gauche."
    },
    "ev_screenDistort": {
        "FR": "Distorsion"
    },
    "ev_screenDistortD": {
        "FR": "L'écran tournoie et se floute légèrement."
    },
    "ev_vignette": {
        "FR": "Vignette"
    },
    "ev_vignetteD": {
        "FR": "Les bords s'assombrissent pour centrer."
    },
    "ev_danmaku": {
        "FR": "Texte danmaku"
    },
    "ev_danmakuD": {
        "FR": "Réplique principale au-dessus ; narration dispersée à gauche (avec historique)."
    },
    "ev_steam": {
        "FR": "Buée"
    },
    "ev_steamD": {
        "FR": "Une buée douce s'échappe de la bouche."
    },
    "ev_expression": {
        "FR": "Expression"
    },
    "ev_expressionD": {
        "FR": "Expression aléatoire pendant l'hypnose, puis restaurée."
    },
    "ev_chatFade": {
        "FR": "Apparition de message"
    },
    "ev_chatFadeD": {
        "FR": "Pendant 10 s après un déclenchement, les nouveaux messages apparaissent lentement (style fantôme LSCG)."
    },
    "ev_climax": {
        "FR": "Effet climax"
    },
    "ev_climaxD": {
        "FR": "Écran brisé + flash rouge/blanc + secousse."
    },
    "ev_sound": {
        "FR": "Son de souffle"
    },
    "ev_soundD": {
        "FR": "Joue un son de souffle (réglages son requis)."
    },
    "ev_headshot": {
        "FR": "Portrait central"
    },
    "ev_headshotD": {
        "FR": "Portrait centré à chaque déclenchement ; spirale/souffle s'y ancrent (ignore la pagination)."
    },
    "ev_dualSound": {
        "FR": "Double son"
    },
    "ev_dualSoundD": {
        "FR": "Superpose un son déclencheur (pendule, etc., catégorie « Hypno ») à la voix."
    },
    "ev_emote": {
        "FR": "Statut emote"
    },
    "ev_emoteD": {
        "FR": "Envoie un message d'action au déclenchement pour montrer votre état."
    },
    "climaxModeD": {
        "FR": "« À l'orgasme » = effet seulement au vrai orgasme BC ; « Chaque déclenchement » = à chaque hypnose."
    },
    "climaxEvery": {
        "FR": "Chaque déclenchement"
    },
    "climaxOrgasm": {
        "FR": "À l'orgasme"
    },
    "textsHint": {
        "FR": "Une ligne par phrase.\n$me = personne hypnotisée, $n = saut de ligne (danmaku/ombre) ;\nles lignes de statut commençant par $a sont envoyées en Action."
    },
    "hypnoTextD": {
        "FR": "Source de la narration danmaku/ombre ; utilisée avec « écoute-moi » de BCX, visible par l'hypnotisé seul."
    },
    "hypnoTextPh": {
        "FR": "ex. $me, sage…$ndétends-toi…"
    },
    "statusMsgD": {
        "FR": "Message envoyé au hasard au déclenchement. Préfixe $a = Action (système), $c = Chat (parole, ex. gémissements), sinon Emote."
    },
    "statusMsgPh": {
        "FR": "ex. $a $me a l'esprit embrumé / $c ah… mmh…"
    },
    "triggerWordsD": {
        "FR": "Un par ligne. Votre hypnose se déclenche lorsque le chat contient l'un de ces mots (le « écoute-moi » de BCX fonctionne toujours)."
    },
    "triggerWordsPh": {
        "FR": "ex. hypnose  sommeil"
    },
    "soundsHint": {
        "FR": "Collez une URL ou « Téléverser » un fichier local. ▶ écouter, ✕ effacer, « Autre » choisit dans la bibliothèque à droite. Vide = défaut."
    },
    "sndCat_hypno": {
        "FR": "Hypno"
    },
    "sndCat_voice": {
        "FR": "Hypno2"
    },
    "sndCat_climax": {
        "FR": "Apogée"
    },
    "sndCat_depth": {
        "FR": "Profondeur"
    },
    "sndSlotHead": {
        "FR": "Sons {name} (max {max})"
    },
    "sndDefaultPh": {
        "FR": "(défaut) {file}"
    },
    "sndUnsetPh": {
        "FR": "Non défini — URL / Téléverser / Autre"
    },
    "sndLocalName": {
        "FR": "Son local"
    },
    "defaultTexts": {
        "FR": "Détends-toi… détends…\nTon esprit s'endort\nÉcoute ma voix\nNe pense à rien\nDe plus en plus profond\nObéir fait du bien\nSombre…\nGentille fille…"
    },
    "defaultEmotes": {
        "FR": "$me a l'esprit embrumé\n$me a le regard vide…\n$me sombre dans la conscience\n$me vacille légèrement, hébété·e\n$me a l'air absent"
    },
    "prefButton": {
        "FR": "Paramètres HSC"
    }
};
    var MSG = {
    "hs_enterForced": {
        "FR": "L'esprit de {0} est rongé sans relâche, le regard de plus en plus vide, jusqu'à sombrer complètement dans le marécage de la transe."
    },
    "hs_forcedIdle": {
        "FR": "{0} fixe le vide, les yeux creux, les lèvres tremblant parfois comme pour parler, mais aucun son ne sort — totalement inerte, telle une marionnette entièrement contrôlée."
    },
    "hs_exitForced": {
        "FR": "Après un moment, l'érosion se retire lentement de l'esprit de {0}, les yeux creux retrouvant une faible lueur tandis que la conscience revient peu à peu."
    },
    "hs_thinking": {
        "FR": "{0} marque une pause, hébété, réfléchissant un instant…"
    },
    "hs_blank": {
        "FR": "{0} reste simplement là, hébété, sans rien dire"
    },
    "hs_pause": {
        "FR": "{0} hésite un instant avant de parler"
    },
    "hs_intercept": {
        "FR": "{0} veut dire quelque chose, mais la pensée est aussitôt perturbée"
    },
    "hs_lewd": {
        "FR": "La tête de {0} n'est plus remplie que de pensées obscènes"
    },
    "hs_lewdFallback": {
        "FR": "{0} se met à se masturber involontairement…"
    },
    "l10n_test": {
        "FR": "[Test de traduction] Le message de {0} a été instantanément localisé par HSC ✅"
    }
};
    if (L.__Sys_i18n__ && L.__Sys_i18n__.register) L.__Sys_i18n__.register('HSC', UI);
    if (L.__Sys_L10N__ && L.__Sys_L10N__.register) L.__Sys_L10N__.register('HSC', MSG);
})();
