// ════════════════════════════════════════
//  Liko - HSC 字庫 — KR（한국어）
//  自動由 scripts/split（來源 Translation 整理）產生；一國一檔，含 UI(i18n) 與聊天(L10N) 兩套。
//  載入後註冊到共用引擎：__Sys_i18n__（UI）與 __Sys_L10N__（聊天在地化）。
//  佔位符：UI 用 {name}；L10N 用 {0}（觸發者名稱）。
// ════════════════════════════════════════
(function () {
    var L = (typeof window !== 'undefined') ? window.Liko : (globalThis.Liko);
    if (!L) { console.error('[Liko HSC KR] Liko 尚未載入'); return; }
    var UI = {
    "loaded": {
        "KR": "HSC v{v} 로드됨 \n/hsc help | /hsc setting | /hsc show 테스트\n처음 사용하거나 업데이트 후 설정 페이지를 확인하세요!"
    },
    "help": {
        "KR": "🌀 HSC v{v} 명령어 목록：\n  /hsc setting       — 환경설정 페이지 열기\n  /hsc show          — 컨트롤 패널 표시\n  /hsc test [텍스트] — 즉시 효과 발동\n  /hsc climax        — 절정 효과 테스트"
    },
    "cmdUnknown": {
        "KR": "⚠️ [HSC] 알 수 없는 명령어 「{sub}」, /hsc help 를 입력하세요"
    },
    "cantOpenSettings": {
        "KR": "⚠️ 설정 페이지를 열 수 없습니다(환경설정 시스템 미준비)"
    },
    "exportDone": {
        "KR": "📤 HSC 설정을 내보냈습니다 (HSC-settings.json)"
    },
    "importDone": {
        "KR": "📥 HSC 설정을 가져왔습니다"
    },
    "editedYourText": {
        "KR": "📝 {who} 님이 당신의 HSC 최면 텍스트를 편집했습니다"
    },
    "accessedYourText": {
        "KR": "👁 {who} 님이 당신의 HSC 텍스트를 보고 있습니다"
    },
    "tab_basic": {
        "KR": "기본 설정"
    },
    "tab_effects": {
        "KR": "효과 설정"
    },
    "tab_texts": {
        "KR": "텍스트 설정"
    },
    "tab_expr": {
        "KR": "표정 설정"
    },
    "tab_sounds": {
        "KR": "효과음 설정"
    },
    "tab_about": {
        "KR": "플러그인 정보"
    },
    "exit": {
        "KR": "나가기"
    },
    "info": {
        "KR": "── 설명 ──"
    },
    "cancel": {
        "KR": "취소"
    },
    "confirm": {
        "KR": "확인"
    },
    "save": {
        "KR": "💾 저장"
    },
    "delete": {
        "KR": "🗑 삭제"
    },
    "upload": {
        "KR": "업로드"
    },
    "clear": {
        "KR": "지우기"
    },
    "other": {
        "KR": "기타"
    },
    "restoreDefault": {
        "KR": "기본값 복원"
    },
    "export": {
        "KR": "설정 내보내기"
    },
    "import": {
        "KR": "설정 가져오기"
    },
    "enabledOn": {
        "KR": "HSC 활성화됨"
    },
    "enabledOff": {
        "KR": "HSC 비활성화됨"
    },
    "enabledDesc": {
        "KR": "활성화하면 이 플러그인은 몰입감이 높아지며, 불편할 수 있는 효과(강한 섬광, 화면 파쇄, 흔들림 등)도 포함됩니다. 개인 상태에 맞게 사용하세요."
    },
    "intensity": {
        "KR": "최면 강도"
    },
    "depthMax": {
        "KR": "최면 깊이"
    },
    "depthNone": {
        "KR": "없음"
    },
    "depthLight": {
        "KR": "약"
    },
    "depthMed": {
        "KR": "중"
    },
    "depthHeavy": {
        "KR": "강"
    },
    "interval": {
        "KR": "주기 시간"
    },
    "minutes": {
        "KR": "분(1~99)"
    },
    "depthEffects": {
        "KR": "── 깊이 효과 ──"
    },
    "triggerTarget": {
        "KR": "발동 대상"
    },
    "anyone": {
        "KR": "누구나"
    },
    "whitelistOnly": {
        "KR": "화이트리스트만"
    },
    "whitelist": {
        "KR": "화이트리스트"
    },
    "allowOthersOn": {
        "KR": "다른 사람의 텍스트 추가/삭제 허용: 켬"
    },
    "allowOthersOff": {
        "KR": "다른 사람의 텍스트 추가/삭제 허용: 끔"
    },
    "climaxMode": {
        "KR": "절정 모드"
    },
    "climaxOnOrgasm": {
        "KR": "오르가즘 시에만"
    },
    "climaxAlways": {
        "KR": "매번 발동"
    },
    "sec_hypnoText": {
        "KR": "최면 텍스트"
    },
    "sec_statusMsg": {
        "KR": "상태 메시지"
    },
    "sec_triggerWords": {
        "KR": "트리거 단어"
    },
    "expr_edit": {
        "KR": "🎭 표정 편집"
    },
    "expr_item": {
        "KR": "표정{n}"
    },
    "expr_add": {
        "KR": "＋ 에디터에서 추가"
    },
    "expr_hint": {
        "KR": "오른쪽에서 표정을 설정한 후, 각 행의 「저장」 또는 「추가」를 클릭해 저장하세요"
    },
    "eyebrows": {
        "KR": "눈썹"
    },
    "eyes": {
        "KR": "눈"
    },
    "mouth": {
        "KR": "입"
    },
    "blush": {
        "KR": "홍조"
    },
    "exprNone": {
        "KR": "— 없음 —"
    },
    "previewLoading": {
        "KR": "미리보기 로딩 중…"
    },
    "confirmReplace": {
        "KR": "오른쪽 내용으로 「{name}」의 데이터를 교체하시겠습니까?"
    },
    "confirmDelete": {
        "KR": "「{name}」을(를) 삭제하시겠습니까?"
    },
    "confirmReset": {
        "KR": "모든 사용자 지정 표정을 지우고 기본 4종으로 복원하시겠습니까?"
    },
    "snd_lib": {
        "KR": "🔊 사운드 라이브러리"
    },
    "snd_preset": {
        "KR": "프리셋"
    },
    "snd_local": {
        "KR": "로컬"
    },
    "snd_assignTo": {
        "KR": "「{label}」에 할당: 위 효과음을 클릭"
    },
    "snd_pickHint": {
        "KR": "칸의 「기타」를 클릭하면 여기서 할당할 수 있습니다. 바로 클릭하면 미리 듣기."
    },
    "about_author": {
        "KR": "제작자: 莉柯莉絲(Likolisu)"
    },
    "about_dev": {
        "KR": "본 플러그인은 개인 취미로 개발되었으며 약간의 버그가 있을 수 있습니다. GitHub 에 제보해 주세요."
    },
    "about_report": {
        "KR": "🐛 GitHub 에 제보"
    },
    "about_assets": {
        "KR": "── 사용된 소재는 모두 무료 소재입니다 ──"
    },
    "intensityD": {
        "KR": "전체 효과 강도(0.1~3.0)이며, 배경 깊이 레벨도 함께 결정합니다(≈1약/2중/3강, 깊이 상한을 넘지 않음). 슬라이더를 드래그하세요."
    },
    "depthMaxD": {
        "KR": "배경 최면의 최대 깊이(VOICE 트리거와 별개). 「없음」＝배경 루프 비활성화."
    },
    "intervalD": {
        "KR": "배경 최면을 자동 재생하는 간격(1~99분). 깊이가 「없음」이면 반복하지 않습니다."
    },
    "depthRowLight": {
        "KR": "깊이: 약"
    },
    "depthRowMed": {
        "KR": "깊이: 중"
    },
    "depthRowHeavy": {
        "KR": "깊이: 강"
    },
    "fx_smoke": {
        "KR": "연무"
    },
    "fx_smokeD": {
        "KR": "불규칙하게 옅은 핑크색 연무"
    },
    "fx_pant": {
        "KR": "숨소리"
    },
    "fx_pantD": {
        "KR": "리듬감 있는 숨결 흰 안개"
    },
    "fx_danmaku": {
        "KR": "탄막"
    },
    "fx_danmakuD": {
        "KR": "채팅 메시지가 최면 탄막으로 변환"
    },
    "fx_ghost": {
        "KR": "그림자 형상"
    },
    "fx_ghostD": {
        "KR": "뒤에서 속삭이는 그림자 형상 + 귓가의 텍스트"
    },
    "fx_figblur": {
        "KR": "인물 흐림"
    },
    "fx_figblurD": {
        "KR": "화면은 흐려지지만 캐릭터/그림자 형상은 선명하게 유지"
    },
    "fx_sfx": {
        "KR": "효과음"
    },
    "fx_sfxD": {
        "KR": "깊이 효과음 재생"
    },
    "fx_chatblur": {
        "KR": "채팅 흐림"
    },
    "fx_chatblurD": {
        "KR": "오른쪽 채팅 로그를 흐리게"
    },
    "fx_fade": {
        "KR": "메시지 떠오름"
    },
    "fx_fadeD": {
        "KR": "새 채팅 메시지 글자가 서서히 떠오름"
    },
    "triggerTargetD": {
        "KR": "누가 트리거 단어를 말하면 당신을 최면에 빠뜨릴 수 있는지 설정. 「화이트리스트만」이면 목록에 있는 멤버만 유효."
    },
    "allowEdit": {
        "KR": "텍스트 편집 허용"
    },
    "allowEditD": {
        "KR": "누가 당신의 프로필에서 최면 텍스트를 추가/삭제할 수 있는지 설정. 「나만」은 본인만 편집 가능; 「화이트리스트만」은 목록 내 멤버(본인 포함)가 편집 가능."
    },
    "editOff": {
        "KR": "나만"
    },
    "editAny": {
        "KR": "모두"
    },
    "editWhitelist": {
        "KR": "화이트리스트만"
    },
    "editPermTitle": {
        "KR": "편집을 허용할 대상"
    },
    "editPermTitleD": {
        "KR": "누가 당신의 프로필에서 각 종류의 콘텐츠를 추가/삭제할 수 있는지 설정. 「나만」은 본인만 편집 가능; 「화이트리스트」는 목록 내 멤버가 편집 가능; 「모두」는 누구나 편집 가능. 세 종류 모두 아래 화이트리스트를 공유합니다."
    },
    "on": {
        "KR": "켬"
    },
    "off": {
        "KR": "끔"
    },
    "seeOthersPant": {
        "KR": "다른 사람의 숨소리 보기"
    },
    "seeOthersPantD": {
        "KR": "켜면 방 안의 다른 사람이 최면에 걸릴 때(최면 브로드캐스트 전송 시), 상대 캐릭터에 숨결 흰 안개가 표시됩니다. 기본값은 끔."
    },
    "seeOthersHypnoLabel": {
        "KR": "최면 진행도"
    },
    "seeOthersHypnoD": {
        "KR": "켜면 방 안에서 HSC를 사용하는 다른 사람의 머리 위에 최면 진행도 오브를 표시합니다(상대가 브로드캐스트하는 최면치를 읽음). 기본값은 켬."
    },
    "seeOthersTalisLabel": {
        "KR": "최면 부적"
    },
    "seeOthersTalisD": {
        "KR": "켜면 방 안의 다른 사람이 강제 컨트롤 상태에 빠질 때, 머리 위에 최면 부적을 표시합니다. 기본값은 켬."
    },
    "hscOrbTip": {
        "KR": "HSC 최면 진행도: {n}%"
    },
    "hscOrbTipTime": {
        "KR": "HSC 각성까지 {t}"
    },
    "hscOrbTipInf": {
        "KR": "HSC 최면 상태 지속 중(자동 각성 없음)"
    },
    "hypnoClimaxLabel": {
        "KR": "최면 절정"
    },
    "tab_voice": {
        "KR": "언어 최면"
    },
    "tab_daily": {
        "KR": "일상 간섭"
    },
    "tab_state": {
        "KR": "최면 상태"
    },
    "sec_effects": {
        "KR": "효과 설정"
    },
    "voiceEnabledLabel": {
        "KR": "언어 최면"
    },
    "voiceEnabledD": {
        "KR": "BCX의 「내 말 들어」 또는 HSC 설정으로 텍스트, 트리거 단어, 최면 효과를 수정할 수 있습니다. 자세한 내용은 언어 최면 탭을 확인하세요."
    },
    "dailyEnabledLabel": {
        "KR": "일상 간섭"
    },
    "dailyEnabledD": {
        "KR": "주기적으로 발동하는 최면이며 트리거 단어는 없습니다. 자세한 내용은 일상 간섭 탭을 확인하세요."
    },
    "stateEnabledLabel": {
        "KR": "최면 상태"
    },
    "stateEnabledD": {
        "KR": "최면도가 100%에 도달하면 발동하는 HSC의 이상 상태 효과입니다. 자세한 내용은 최면 상태 탭을 확인하세요."
    },
    "arousalVoiceLabel": {
        "KR": "흥분도 - 언어 최면"
    },
    "arousalVoiceD": {
        "KR": "언어 최면 1회당 증가하는 흥분도(0~20, 0=비활성화)."
    },
    "arousalDailyLabel": {
        "KR": "흥분도 - 일상 간섭"
    },
    "arousalDailyD": {
        "KR": "일상 간섭 1회당 증가하는 흥분도(0~20, 0=비활성화)."
    },
    "hypnoVoiceLabel2": {
        "KR": "최면치 - 언어 최면"
    },
    "hypnoVoiceD2": {
        "KR": "언어 최면 1회당 증가하는 최면치(0~20). 최면 상태가 꺼져 있으면 효과 없음."
    },
    "hypnoDailyLabel": {
        "KR": "최면치 - 일상 간섭"
    },
    "hypnoDailyD": {
        "KR": "일상 간섭 1회당 증가하는 최면치(0~20). 최면 상태가 꺼져 있으면 효과 없음."
    },
    "seeOthersEffect": {
        "KR": "다른 사람의 효과 보기"
    },
    "autoWakeLabel": {
        "KR": "자동 각성"
    },
    "autoWakeD": {
        "KR": "켬: 최면 상태에 들어가면 각성 카운트다운(15~99분)이 시작되어 0이 되면 자동 각성. 끔: 자동으로 깨지 않고 각성 단어로만 해제(머리 위에 ∞ 표시)."
    },
    "hypnoExtendLabel": {
        "KR": "최면 연장"
    },
    "hypnoExtendD": {
        "KR": "켜면 최면 상태 중 음성／일상 트리거를 받을 때마다 각성 시간이 연장됩니다(10~990초, 10초 단위; 자동 각성 기준을 초과 가능)."
    },
    "minUnit": {
        "KR": "분"
    },
    "secUnit": {
        "KR": "초"
    },
    "forcedGrowthLabel": {
        "KR": "최면치"
    },
    "forcedGrowthD": {
        "KR": "영원히 깨어나지 못하는 것을 방지: 강제 컨트롤 중 최면을 받으면 최면치 증가량이 원래의 N/10이 됩니다(기본값 1/10, 예: 원래 20 → 2)."
    },
    "showProfileBtnLabel": {
        "KR": "다른 사람의 텍스트 편집"
    },
    "showProfileBtnD": {
        "KR": "다른 사람의 프로필에 HSC 텍스트 편집 버튼을 표시할지 여부를 제어합니다; 끄면 표시되지 않습니다."
    },
    "hypnoAnimLabel": {
        "KR": "최면 애니메이션"
    },
    "hypnoAnimD": {
        "KR": "최면 부적 애니메이션 활성화(개발 중)."
    },
    "hypnoStyleLabel": {
        "KR": "부적 스타일"
    },
    "hypnoStyleD": {
        "KR": "최면 애니메이션에 사용되는 부적 문양(총 12종); 여기에 마우스를 올리면 현재 스타일을 미리 볼 수 있습니다."
    },
    "hypnoStyleName": {
        "KR": "스타일{n}"
    },
    "fx_headTalisman": {
        "KR": "머리 위에 부적 붙이기"
    },
    "fx_headTalismanD": {
        "KR": "강제 컨트롤 중 이마에 부적이 상주하며 지속적으로 진동합니다(독립적인 스위치이며 최면 애니메이션을 켤 필요는 없습니다)."
    },
    "fx_faceCensor": {
        "KR": "얼굴 인식 장애"
    },
    "fx_faceCensorD": {
        "KR": "강제 컨트롤 중: 「다른 사람」의 얼굴이 명확히 보이지 않고, 꿈틀거리는 낙서로 뒤덮입니다."
    },
    "fx_nameCensor": {
        "KR": "이름 인식 장애"
    },
    "nameCensorPlayer": {
        "KR": "캐릭터만"
    },
    "nameCensorNetwork": {
        "KR": "관계 포함"
    },
    "fx_nameCensorD": {
        "KR": "강제 컨트롤 중: 「다른 사람」의 이름/ID가 명확히 보이지 않습니다(채팅방 이름표와 프로필도 함께 가려집니다)."
    },
    "censorStyleLabel": {
        "KR": "낙서 스타일"
    },
    "censorStyleD": {
        "KR": "얼굴 낙서의 스타일이며, 둘 중 하나를 선택합니다."
    },
    "censorOff": {
        "KR": "끔"
    },
    "censorStyleCircle": {
        "KR": "원형"
    },
    "censorStyleLine": {
        "KR": "선형"
    },
    "fx_crowd": {
        "KR": "군중 표시"
    },
    "fx_crowdD": {
        "KR": "강제 컨트롤 중: 화면 아래쪽에 구경꾼들이 서서히 나타나, 지켜보고 있거나 둘러싸인 듯한 상황을 연출합니다."
    },
    "resetAll": {
        "KR": "기본값으로 복원"
    },
    "resetAllD": {
        "KR": "HSC의 모든 설정을 기본값으로 복원합니다."
    },
    "confirmResetAll": {
        "KR": "HSC의 모든 설정을 기본값으로 복원하시겠습니까? 이 작업은 되돌릴 수 없습니다."
    },
    "hypnoLabel": {
        "KR": "최면치"
    },
    "hypnoD": {
        "KR": "최면을 받을 때 누적되는 최면치(0~100, 12초마다 -1). 100%가 되면 강제 컨트롤에 들어가고, 15% 미만이 되면 해제됩니다."
    },
    "hypnoVoiceLabel": {
        "KR": "언어 최면치"
    },
    "hypnoVoiceD": {
        "KR": "언어 최면 1회당 증가(0~20, 0=비활성화)."
    },
    "hypnoDepthLabel": {
        "KR": "깊이 최면치"
    },
    "hypnoDepthD": {
        "KR": "깊이 최면 1회당 증가(0~10, 0=비활성화)."
    },
    "sec_wakeWord": {
        "KR": "각성 단어"
    },
    "wakeWordD": {
        "KR": "방 안의 「다른 사람」이 이 단어를 말하면→즉시 각성합니다(최면치가 80% 초과면 80%로 설정); 본인이 말하면 효과 없습니다. 한 줄에 하나씩."
    },
    "wakeWordPh": {
        "KR": "예: wake"
    },
    "sec_hypnoResponse": {
        "KR": "최면 응답"
    },
    "hypnoResponseD": {
        "KR": "강제 컨트롤 중(최면치 100%)에는 말이 가로채질 수 있으며, 대신 여기 있는 문장 중 하나를 말하게 됩니다. 한 줄에 한 문장, $me＝당신의 이름."
    },
    "hypnoResponsePh": {
        "KR": "예: 네, 주인님"
    },
    "allowedPhrasesLabel": {
        "KR": "허용된 발언"
    },
    "allowedPhrasesD": {
        "KR": "강제 컨트롤 중, 당신이 말하는 문장 전체가 여기 있는 문장 중 하나와 정확히 일치하면 몽롱해지지 않고 평소처럼 말합니다. 한 줄에 한 문장."
    },
    "allowedPhrasesPh": {
        "KR": "예: 네, 주인님"
    },
    "arousalStepLabel": {
        "KR": "흥분도"
    },
    "arousalStepD": {
        "KR": "최면이 발동할 때마다 증가하는 흥분도(0~20, 0=비활성화)."
    },
    "depthEffectsHint": {
        "KR": "정기적으로 발동할 때 어떤 효과를 낼지 자유롭게 선택하세요."
    },
    "expr_new": {
        "KR": "추가"
    },
    "defaultResponses": {
        "KR": "네, 주인님\n$me는 착한 아이예요\n$me는 얌전히 따를게요\n응…!! 아앙～!"
    },
    "hs_enterForced": {
        "KR": "$me의 정신이 끊임없이 잠식되어 눈빛이 점점 흐릿해지고, 결국 완전히 최면의 늪에 빠져든다."
    },
    "hs_forcedIdle": {
        "KR": "$me의 두 눈은 텅 비어 멍하고, 이따금 입술이 살짝 떨리지만 무언가 말하려 해도 소리가 나오지 않으며, 완전히 무반응 상태로 마치 완전히 조종당하는 인형 같다."
    },
    "hs_exitForced": {
        "KR": "얼마 후, 잠식 효과가 서서히 $me의 머릿속에서 물러나며 텅 비었던 두 눈에 조금씩 빛이 돌아오고, 의식이 천천히 돌아오기 시작한다."
    },
    "hs_thinking": {
        "KR": "$me가 멍하니 잠시 생각에 잠겼다…"
    },
    "hs_blank": {
        "KR": "$me는 그저 멍하니 서서 아무 말도 하지 않았다"
    },
    "hs_pause": {
        "KR": "$me는 잠시 뜸을 들이다 입을 열었다"
    },
    "hs_intercept": {
        "KR": "$me가 무언가 말하려 했지만 의식이 곧바로 흐트러졌다"
    },
    "hs_lewd": {
        "KR": "$me는 지금 머릿속이 음란한 생각으로 가득 차 있다"
    },
    "hs_lewdFallback": {
        "KR": "$me가 자기도 모르게 자위를 시작한다…"
    },
    "l10n_test": {
        "KR": "【번역 테스트】{name} 님이 보낸 메시지가 HSC에 의해 당신의 언어로 실시간 변환되어 표시되었습니다 ✅"
    },
    "hypnoClimaxD": {
        "KR": "켜면 강제 컨트롤(최면치 100%)에 빠졌을 때 최면으로 인해 절정이 한 번 발동합니다(BC 고유의 오르가즘 흐름을 따르며 거부/에징 등의 설정을 존중; 흥분 시스템이 꺼져 있으면 작동하지 않음)."
    },
    "sec_stateMsgFx": {
        "KR": "메시지 계열 효과"
    },
    "stateDanmakuChatLabel": {
        "KR": "탄막 문자—채팅"
    },
    "stateDanmakuChatD": {
        "KR": "강제 컨트롤 중: 방 안의 다른 사람 채팅 메시지가 떠다니는 탄막이 됩니다(랜덤 글자 크기 14~20)."
    },
    "stateDanmakuWhisperLabel": {
        "KR": "탄막 문자—귓속말"
    },
    "stateDanmakuWhisperD": {
        "KR": "강제 컨트롤 중: 방 안의 다른 사람이 당신에게 하는 귓속말이 보라색 탄막으로 귓가에 표시됩니다."
    },
    "stateMsgSmokeLabel": {
        "KR": "메시지 방해"
    },
    "stateMsgSmokeD": {
        "KR": "강제 컨트롤 중: 시스템 로컬 메시지와 입퇴장 메시지를 제외한 모든 메시지가 연기로 가려지며, 클릭하면 서서히 걷힙니다."
    },
    "stateMsgInterfereLabel": {
        "KR": "메시지 간섭"
    },
    "stateMsgInterfereD": {
        "KR": "강제 컨트롤 중: 입퇴장 메시지가 모호하고 몽환적인 묘사로 바뀝니다."
    },
    "stateSmokeHint": {
        "KR": "클릭하여 보기"
    },
    "stateInterfereEnter": {
        "KR": "누군가 들어왔다…\n사람이 늘어난 것 같다…\n주변이 시끄러워진 느낌…\n시선이 더 늘어난 것 같다…"
    },
    "stateInterfereLeave": {
        "KR": "누군가 나갔다…\n사람이 줄어든 것 같다…"
    },
    "remoteEditTitle": {
        "KR": "{name} 님의 HSC 텍스트 편집"
    },
    "remoteEditHint": {
        "KR": "한 줄에 한 문장. $me는 피최면자, $n은 줄바꿈; $a로 시작하는 상태 메시지는 Action으로 전송됩니다. 저장하면 상대방에게 전송됩니다(상대가 여전히 편집을 허용해야 적용됨)."
    },
    "remoteEditSave": {
        "KR": "💾 저장 후 전송"
    },
    "remoteEditSent": {
        "KR": "📤 {name} 님에게 전송했습니다. 적용을 기다리는 중…"
    },
    "remoteEditOk": {
        "KR": "✅ {name} 님이 당신의 편집을 적용했습니다"
    },
    "remoteEditDenied": {
        "KR": "⚠️ {name} 님이 당신의 편집을 적용하지 않았습니다(상대의 화이트리스트에 없음)"
    },
    "profileEditBtn": {
        "KR": "상대의 HSC 텍스트 편집"
    },
    "profileEditOff": {
        "KR": "상대가 텍스트 편집을 허용하지 않았습니다"
    },
    "profileEditNoPerm": {
        "KR": "상대의 화이트리스트에 없어 편집할 수 없습니다"
    },
    "remoteEditNoPerm": {
        "KR": "이 편집 권한이 없습니다"
    },
    "whitelistD": {
        "KR": "회원 번호 또는 토큰($owner＝주인님, $lover＝연인(AFC 포함), $friend＝친구, $white＝BC 화이트리스트), 쉼표 또는 공백으로 구분. 각종 「화이트리스트」 편집 권한은 이 목록을 공유합니다."
    },
    "textsResetD": {
        "KR": "최면 텍스트/상태 메시지/트리거 단어를 「현재 언어」의 기본값으로 재설정합니다(언어 전환 후 번역 갱신 시 사용)."
    },
    "confirmTextsReset": {
        "KR": "현재 언어의 기본값으로 최면 텍스트, 상태 메시지, 트리거 단어를 덮어쓰시겠습니까?"
    },
    "whitelistPh": {
        "KR": "예: 12345, 67890"
    },
    "language": {
        "KR": "언어"
    },
    "languageD": {
        "KR": "UI 언어. Auto＝게임 로그인 언어를 따름; 수동 선택도 가능."
    },
    "exportD": {
        "KR": "모든 설정을 JSON 파일로 다운로드합니다."
    },
    "importD": {
        "KR": "JSON 파일에서 모든 설정을 복원합니다."
    },
    "effectsHint": {
        "KR": "VOICE 발동 시 각종 효과를 항목별로 켜고 끌 수 있습니다. 항목에 마우스를 올리면 설명이 표시됩니다."
    },
    "ev_pinkFlash": {
        "KR": "핑크빛 발광"
    },
    "ev_pinkFlashD": {
        "KR": "화면에 핑크빛 광채가 번지며 몽롱한 분위기를 연출합니다."
    },
    "ev_hypnoSpiral": {
        "KR": "최면 나선"
    },
    "ev_hypnoSpiralD": {
        "KR": "머리 위에 회전하는 나선이 나타납니다."
    },
    "ev_hypnoWaves": {
        "KR": "동심원 파동"
    },
    "ev_hypnoWavesD": {
        "KR": "화면 왼쪽에 바깥으로 퍼지는 동심원 파동이 나타납니다."
    },
    "ev_screenDistort": {
        "KR": "화면 왜곡"
    },
    "ev_screenDistortD": {
        "KR": "화면이 살짝 회전하며 흐려져 의식이 흐트러진 듯한 느낌을 줍니다."
    },
    "ev_vignette": {
        "KR": "비네트"
    },
    "ev_vignetteD": {
        "KR": "화면 가장자리가 어두워지며 중앙에 초점을 맞춥니다."
    },
    "ev_danmaku": {
        "KR": "탄막 문자"
    },
    "ev_danmakuD": {
        "KR": "메인 대사는 머리 위에, 내레이션은 왼쪽에 흩어져 표시됩니다(채팅 기록 포함)."
    },
    "ev_steam": {
        "KR": "숨결 흰 안개"
    },
    "ev_steamD": {
        "KR": "입가에서 부드러운 흰 안개가 좌우 아래로 흩날립니다."
    },
    "ev_expression": {
        "KR": "표정 전환"
    },
    "ev_expressionD": {
        "KR": "최면 중에는 무작위 표정이 적용되고, 종료 후 원래대로 돌아옵니다."
    },
    "ev_chatFade": {
        "KR": "메시지 떠오름"
    },
    "ev_chatFadeD": {
        "KR": "발동 후 10초 동안 새 채팅 메시지 글자가 서서히 떠오릅니다(LSCG 고스트 스타일)."
    },
    "ev_climax": {
        "KR": "절정 효과"
    },
    "ev_climaxD": {
        "KR": "화면 파쇄 + 빨강/흰색 섬광 + 진동."
    },
    "ev_sound": {
        "KR": "숨소리 효과음"
    },
    "ev_soundD": {
        "KR": "숨소리 효과음을 재생합니다(효과음 설정 필요)."
    },
    "ev_headshot": {
        "KR": "중앙 얼굴 클로즈업"
    },
    "ev_headshotD": {
        "KR": "발동할 때마다 화면 중앙에 얼굴을 잘라내며, 나선/숨결 효과가 이를 기준으로 표시됩니다(페이징 무시)."
    },
    "ev_dualSound": {
        "KR": "이중 효과음"
    },
    "ev_dualSoundD": {
        "KR": "음성 재생과 동시에 트리거 사운드(진자 등, 「최면」 카테고리 효과음 사용)를 겹쳐 재생합니다."
    },
    "ev_emote": {
        "KR": "상태 메시지"
    },
    "ev_emoteD": {
        "KR": "발동 시 액션 메시지를 전송하여 다른 사람에게 당신의 상태를 알립니다."
    },
    "climaxModeD": {
        "KR": "「오르가즘 시에만」＝BC 실제 오르가즘 때만 파쇄 효과 재생; 「매번 발동」＝최면이 발동할 때마다 재생."
    },
    "climaxEvery": {
        "KR": "매번 발동"
    },
    "climaxOrgasm": {
        "KR": "오르가즘 시에만"
    },
    "textsHint": {
        "KR": "한 줄에 한 문장.\n$me＝피최면자 이름, $n＝줄바꿈(탄막/그림자);\n$a로 시작하는 상태 메시지는 Action으로 전송."
    },
    "hypnoTextD": {
        "KR": "탄막/그림자 내레이션 소스. BCX 「내 말 들어」와 함께 사용, 피최면자만 볼 수 있음."
    },
    "hypnoTextPh": {
        "KR": "예: $me, 착하지…$n긴장 풀어…"
    },
    "statusMsgD": {
        "KR": "발동 시 무작위로 전송되는 메시지. 앞에 $a＝Action(시스템 동작), $c＝Chat(일반 대사, 신음 등에 사용), 그 외는 Emote로 처리됩니다."
    },
    "statusMsgPh": {
        "KR": "예: $a $me의 정신이 몽롱해진다 / $c 아… 응…"
    },
    "triggerWordsD": {
        "KR": "한 줄에 하나. 이 단어가 포함된 채팅을 받으면 최면이 발동(BCX의 「내 말 들어」는 항상 작동)."
    },
    "triggerWordsPh": {
        "KR": "예: 최면  수면"
    },
    "soundsHint": {
        "KR": "각 칸에 URL을 붙여넣거나 로컬 파일을 「업로드」하세요. ▶ 미리 듣기, ✕ 지우기, 「기타」는 오른쪽 라이브러리에서 선택. 빈칸＝기본값."
    },
    "sndCat_hypno": {
        "KR": "최면"
    },
    "sndCat_voice": {
        "KR": "최면2"
    },
    "sndCat_climax": {
        "KR": "절정"
    },
    "sndCat_depth": {
        "KR": "깊이"
    },
    "sndSlotHead": {
        "KR": "{name} 효과음(최대 {max})"
    },
    "sndDefaultPh": {
        "KR": "(기본값) {file}"
    },
    "sndUnsetPh": {
        "KR": "미설정 — URL / 업로드 / 기타"
    },
    "sndLocalName": {
        "KR": "로컬 효과음"
    },
    "defaultTexts": {
        "KR": "긴장을 풀고… 풀고…\n당신의 의식이 잠들어간다\n내 목소리를 들어\n아무것도 생각하지 않아도 돼\n점점 더 깊이\n순종하는 건 기분 좋은 일\n가라앉아…\n착한 아이… 착한 아이…"
    },
    "defaultEmotes": {
        "KR": "$me의 생각이 혼란스러워졌다\n$me의 두 눈이 텅 비어간다…\n$me의 의식이 가라앉고 있다\n$me가 살짝 휘청이며 정신을 놓았다\n$me의 표정이 멍해졌다"
    },
    "prefButton": {
        "KR": "HSC 설정"
    }
};
    var MSG = {
    "hs_enterForced": {
        "KR": "{0}의 정신이 끊임없이 잠식되어 눈빛이 점점 흐릿해지고, 결국 완전히 최면의 늪에 빠져든다."
    },
    "hs_forcedIdle": {
        "KR": "{0}의 두 눈은 텅 비어 멍하고, 이따금 입술이 살짝 떨리지만 무언가 말하려 해도 소리가 나오지 않으며, 완전히 무반응 상태로 마치 완전히 조종당하는 인형 같다."
    },
    "hs_exitForced": {
        "KR": "얼마 후, 잠식 효과가 서서히 {0}의 머릿속에서 물러나며 텅 비었던 두 눈에 조금씩 빛이 돌아오고, 의식이 천천히 돌아오기 시작한다."
    },
    "hs_thinking": {
        "KR": "{0}가 멍하니 잠시 생각에 잠겼다…"
    },
    "hs_blank": {
        "KR": "{0}는 그저 멍하니 서서 아무 말도 하지 않았다"
    },
    "hs_pause": {
        "KR": "{0}는 잠시 뜸을 들이다 입을 열었다"
    },
    "hs_intercept": {
        "KR": "{0}가 무언가 말하려 했지만 의식이 곧바로 흐트러졌다"
    },
    "hs_lewd": {
        "KR": "{0}는 지금 머릿속이 음란한 생각으로 가득 차 있다"
    },
    "hs_lewdFallback": {
        "KR": "{0}가 자기도 모르게 자위를 시작한다…"
    },
    "l10n_test": {
        "KR": "【번역 테스트】{0} 님이 보낸 메시지가 HSC에 의해 당신의 언어로 실시간 변환되어 표시되었습니다 ✅"
    }
};
    if (L.__Sys_i18n__ && L.__Sys_i18n__.register) L.__Sys_i18n__.register('HSC', UI);
    if (L.__Sys_L10N__ && L.__Sys_L10N__.register) L.__Sys_L10N__.register('HSC', MSG);
})();
