define({
  "viewer": {
    "loading": {
      "step1": "스토리 불러오는 중",
      "step2": "데이터를 로드하는 중",
      "step3": "Tour를 초기화하는 중",
      "loadBuilder": "빌더 모드로 전환하는 중",
      "redirectSignIn": "로그인 페이지로 이동하는 중",
      "redirectSignIn2": "(로그인 후 이 페이지로 다시 돌아옵니다.)",
      "fail": "죄송합니다. Map Tour를 로드하지 못했습니다.",
      "failButton": "재시도"
    },
    "errors": {
      "boxTitle": "오류가 발생했습니다.",
      "portalSelf": "오류: 포털 구성을 가져오지 못했습니다.",
      "invalidConfig": "오류: 잘못된 구성",
      "invalidConfigOwner": "오류: 잘못된 구성(권한 있는 소유자 필요)",
      "invalidConfigNoWebmap": "오류: 잘못된 구성(웹 맵 또는 응용프로그램 식별자가 index.html에 지정되어 있지 않음)",
      "invalidConfigNoAppDev": "URL 매개변수에 웹 매핑 응용프로그램 식별자(?appid=) 또는 웹맵(?webmap=)이 지정되어 있지 않습니다. 개발 모드에서 index.html의 AppId와 웹맵 구성이 무시됩니다.",
      "createMap": "맵을 생성할 수 없음",
      "invalidApp": "오류: 스토리를 불러올 수 없습니다.",
      "noLayer": "웹 맵에 Map Tour를 위한 유효한 데이터 레이어가 없습니다.",
      "noLayerMobile": "Map Tour 빌더는 이 디스플레이 크기에서 지원되지 않습니다. 가능한 경우 빌더에 접근할 수 있도록 브라우저의 크기를 조정하거나 화면이 더 큰 기기에서 스토리를 만드세요.",
      "noLayerMobile2": "Map Tour 빌더를 사용하려면 기기를 가로 방향으로 회전하세요.",
      "noLayerView": "Map Tour 웹 응용프로그램을 시작합니다.<br />스토리가 아직 구성되지 않았습니다.",
      "appSave": "스토리를 저장하는 중 오류 발생",
      "mapSave": "웹 맵을 저장하는 동안 오류가 발생했습니다.",
      "featureServiceLoad": "피처 서비스를 로드하는 동안 오류가 발생했습니다.",
      "notAuthorized": "이 스토리에 접근할 권한 없음",
      "notAuthorizedBuilder": "Map Tour 빌더를 사용할 수 있는 권한이 없습니다.",
      "oldBrowserTitle": "브라우저가 완전히 지원되지 않습니다.",
      "noBuilderIE8": "Internet Explorer 9 이전 버전에서는 Map Tour 빌더가 지원되지 않습니다.",
      "ie10Win7Explain": "데이터 원본이 첨부 파일이 있는 피처 서비스인 경우 Map Tour 대화형 빌더는 Windows 7의 Internet Explorer 10에서 지원되지 않습니다. 첨부 파일이 있는 피처 서비스를 사용하려면 <a target='_blank' href='http://msdn.microsoft.com/ko-kr/library/ie/hh920756(v=vs.85).aspx'>문서 모드를 수동으로 Internet Explorer 9 표준 모드로 적용</a>하거나, <a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>Internet Explore 9로 다운그레이드</a>하거나, Windows 8로 업그레이드해야 합니다.",
      "oldBrowserExplain": "이 브라우저에서는 Map Tour에 업로드한 이미지에서 자동으로 미리보기를 생성할 수 없습니다. 이 브라우저를 사용하여 Map Tour를 생성할 수는 있지만 업로드한 각 이미지에 대해 별도의 미리보기 이미지를 제공해야 합니다.",
      "oldBrowserExplain2": "환경을 개선하려면 <a href='http://browsehappy.com/' target='_blank'>브라우저를 업그레이드</a>하거나 <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>Internet Explorer용 Google Chrome 프레임을 활성화</a>하세요.",
      "oldBrowserExplain3": "Map Tour 빌더는 Windows XP의 Internet Explorer 10에서 작동하지 않습니다.",
      "oldBrowserClose": "닫기",
      "noViewerIE2": "지원되지 않는 이전 브라우저를 사용하여 이 스토리를 보려고 합니다. 작동되지 않는 기능이 있거나 예기치 않은 문제가 발생할 수 있습니다. Internet Explorer 11로 업그레이드하거나 Chrome 등의 다른 브라우저를 사용하세요.",
      "noViewerIE3": "2017년 후반부터는 이 스토리를 이 브라우저에서 불러올 수 없으므로 이 스토리를 보려면 지원되는 브라우저를 사용해야 합니다.",
      "attention": "주의!"
    },
    "mobileHTML": {
      "showIntro": "제목 표시",
      "hideIntro": "제목 숨기기",
      "navList": "목록",
      "navMap": "맵",
      "navInfo": "미디어",
      "introStartBtn": "시작"
    },
    "desktopHTML": {
      "storymapsText": "스토리맵",
      "builderButton": "빌더 모드로 전환",
      "facebookTooltip": "Facebook에 공유",
      "twitterTooltip": "Twitter에 공유",
      "bitlyTooltip": "짧은 링크 가져오기",
      "bitlyStartIndex": "현재 장소에 연결",
      "tooltipAutoplayDisabled": "자동 재생 모드에서는 사용할 수 없습니다.",
      "autoplayLabel": "자동 재생 모드",
      "autoplayExplain1": "자동 재생 모드를 사용하면 스토리가 주기적으로 진행됩니다. 이 기능은 키오스크 또는 공공의 디스플레이 모니터에는 적합하지만 그 이외의 환경에서는 스토리 읽기가 더욱 어려워질 수 있습니다. 소형 디스플레이에서는 이 기능이 지원되지 않습니다.",
      "autoplayExplain2": "이 모드가 활성화되면 스토리를 재생/일시정지하고 탐색 속도를 조정하는 컨트롤이 나타납니다.",
      "takeTourText": "둘러보기",
      "backToStart": "시작으로 돌아가기"
    },
    "builderHTML": {
      "panelHeader": "스토리 구성",
      "buttonSave": "저장",
      "buttonSettings": "설정",
      "buttonShare": "공유",
      "buttonView": "보기 모드",
      "buttonItem": "웹 응용프로그램 항목 열기",
      "buttonHelp": "도움말",
      "buttonOrganize": "구성",
      "buttonOrganizeAndCover": "투어 포인트 구성 및 커버 페이지 추가",
      "buttonAdd": "추가",
      "buttonImport": "가져오기",
      "buttonImportDisabled": "이미지 업로드를 사용할 때에는 가져오기를 사용할 수 없습니다. 이미지를 업로드하려면 추가를 클릭하세요.",
      "dataEditionDisabled": "이 CSV 데이터 원본에서 데이터를 편집할 수 없음",
      "dataSourceWarning": "Map Tour 데이터 레이어가 변경되었습니다. 피처 ID가 동일하지 않은 경우 <b>구성</b>을 통해 순서 및 숨겨진 포인트를 재설정해야 합니다. 필드 이름이 다른 경우 <b>설정의 데이터 탭</b> 아래에서 필드 설정을 재설정해야 합니다.",
      "organizeWarning": "대화형 빌더 외부에 추가된 하나 이상의 포인트는 숨겨집니다.",
      "dataPicError0a": "이 Tour에는 <b>%NB%</b>개의 호환되지 않는 그림 URL이 포함되어 있습니다.",
      "dataPicError0b": "이 Tour에는 <b>%NB%</b>개의 호환되지 않는 그림 URL이 포함되어 있을 수 있습니다.",
      "dataPicError1": "이제 Map Tour에서는 그림 URL이 .jp(e)g, .png, .gif 또는 .bmp 확장명으로 끝나야 합니다.",
      "dataPicError2": "이 요구 사항은 기존에 발행된 Map Tour에는 영향을 주지 않습니다. 그러나 대화형 빌더를 사용하려면 먼저 다음 두 작업 중 하나를 수행하여 URL 문제를 해결해야 합니다.",
      "dataPicError3": "URL 편집",
      "dataPicError4": "이렇게 하면 지원되지 않는 그림 URL 끝에 <i>#isImage</i>가 추가됩니다. 대부분의 서버는 URL 추가 요소를 지원합니다. 단, 이 작업을 수행한 후에는 포인트를 통해 이동하여 업데이트된 그림 URL이 작동하는지 확인해야 합니다. 각 그림을 불러오면 이제 Map Tour를 저장할 수 있습니다. <b>그림이 손상된 경우에는 Map Tour를 저장하지 않습니다.</b> 대신 빌더를 다시 불러오고 두 번째 작업을 수행합니다.",
      "dataPicError5": "Tour를 그림으로 제한",
      "dataPicError6": "이 옵션을 사용하면 모든 URL이 이미지로 간주되지만 대화형 빌더를 사용하여 비디오를 추가할 수 없습니다. 나중에 비디오를 추가하려는 경우 이 작업을 되돌릴 수 있습니다.",
      "dataPicError7": "Map Tour는 사진으로 제한되어 있으므로 비디오를 사용할 수 없습니다. 해당 제한을 제거하기로 선택한 경우 지도 Map Tour를 저장하기 전에 사진을 올바르게 불러오는지 확인합니다. 필요한 경우 나중에 제한을 복원할 수 있습니다.",
      "dataPicError8": "그림 제한 제거",
      "dataPicError9": "이러한 URL이 비디오를 가리키는 경우 이 경고를 무시할 수 있으며, 이미지를 가리키는 경우 다음 두 작업 중 하나를 수행해야 합니다.",
      "modalCancel": "취소",
      "modalApply": "적용",
      "organizeHeader": "Tour 구성",
      "organizeGeneralCaption": "끌어서 놓기를 사용하여 Tour 포인트 정렬",
      "organizeDelete": "삭제",
      "organizeHide": "숨기기",
      "organizeReset": "순서 및 숨겨진 포인트 재설정",
      "addMaxPointReached": "아이콘 세트에 의해 권한이 부여된 최대 포인트 수에 도달하여 다른 투어 포인트를 추가할 수 없습니다.<br /><br />기존 포인트를 삭제할 경우 스토리를 다시 불러와야 합니다.",
      "addMaxPointReachedMobile": "죄송합니다. 허용된 최대 지점 수에 도달하여 이 그림을 추가할 수 없습니다.",
      "addClose": "닫기",
      "addHeader": "새 Tour 포인트 추가",
      "addTabPicture": "미디어",
      "addTabInformation": "정보",
      "addTabLocation": "위치",
      "addSelectCaption": "그림 선택 또는 드롭",
      "addNoteVideo": "동영상 사용 지침은 도움말을 참조하세요.",
      "addSelectCaptionNoFileReader": "그림 선택",
      "addChangePhoto": "그림 및 미리보기 변경",
      "addPictureResolutionIntro": "그림 해상도가 필요한 해상도보다 큼:",
      "addPictureResolutionOldBrowser": "그림 해상도가 필요한 해상도보다 큽니다. %RECOMMENDED_RES%보다 낮은 해상도를 지정하여 Map Tour 환경을 최적화하세요.",
      "addPictureResolutionResize": "%RESOLUTION%(으)로 그림 해상도 변경",
      "addPictureResolutionKeep": "원래 해상도 %RESOLUTION% 유지",
      "addSelectThumbnail": "미리보기 선택",
      "addNoThumbSelected": "미리보기를 선택하지 않음",
      "addThumbSelected": "선택함",
      "addCameraSettingsHeader": "카메라 설정",
      "addThumbnailHeader": "미리보기",
      "addLabelPicUrl": "그림",
      "addLabelThumbUrl": "미리보기",
      "addTextPlaceholderUrl": "이미지 URL 입력",
      "addTextPlaceholderUrl2": "YouTube 페이지 URL 입력",
      "addTextPlaceholderUrl3": "Vimeo 페이지 URL 입력",
      "addTextPlaceholderUrl4": "동영상 포함 URL 입력",
      "addLabelVideo": "동영상",
      "addMediaVideoOther": "기타",
      "addMediaVideoHelp": "URL을 확인하고 기본 미리보기를 가져옵니다.",
      "addMediaVideoHelpTooltip1": "확인 성공",
      "addMediaVideoHelpTooltip2": "확인 실패",
      "addMediaVideoHelpTooltip4": "동영상을 포함할 옵션을 찾고 코드에 있는 동영상 URL을 복사합니다.",
      "addLabelName": "이름",
      "addLabelDescription": "캡션",
      "addTextPlaceholder": "텍스트 입력",
      "addLocatePlaceholder": "주소 또는 장소 찾기",
      "addPinColor": "색상",
      "addLatitude": "위도",
      "addLongitude": "경도",
      "addLatitudePlaceholder": "예: 34.056",
      "addLongitudePlaceholder": "예: -117.195",
      "addUploading": "Tour 포인트를 업로드하는 중",
      "addSave": "Tour 포인트 추가",
      "addMobileUploading": "그림을 업로드하는 중",
      "addMobileName": "이름 입력",
      "addMobileNameMandatory": "오류가 발생했습니다. 이름을 입력하세요.",
      "addMobileError": "죄송하지만 문제가 발생했습니다.",
      "settingsHeader": "설정",
      "settingsTabLayout": "레이아웃",
      "settingsTabColor": "색상",
      "settingsTabLogo": "머리글",
      "settingsTabFields": "데이터",
      "settingsTabExtent": "범위",
      "settingsTabZoom": "확대/축소 수준",
      "settingsLayoutExplain": "원하는 레이아웃을 선택합니다.",
      "settingsLayoutProfessional": "3개의 패널",
      "settingsLayoutModern": "통합",
      "settingsLayoutSidePanel": "측면 패널",
      "settingsLayoutSelected": "선택한 레이아웃",
      "settingsLayoutNew": "새로 만들기!",
      "settingsLayoutSelect": "선택",
      "settingsLayoutNote": "비디오를 사용하는 포인트에는 해당 옵션의 선택이 취소된 경우에도 항상 캡션이 비디오 아래에 배치됩니다.",
      "settingsLayoutLocBtn": "'찾기' 버튼 표시",
      "settingsLayoutLocBtnHelp": "대부분의 브라우저에서 지원됩니다. 스토리맵이 HTTPS를 통해서 접근된 경우에만 나타나며 스토리가 내장된 경우에는 나타나지 않습니다.",
      "settingsColorExplain": "미리 정의된 테마를 선택하여 모양을 변경하거나 고유의 모양을 생성합니다.",
      "settingsLabelColor": "머리글, 내용, 바닥글 색상",
      "settingsLogoExplain": "머리글 로고를 사용자 지정합니다(최대 250x50 px).",
      "settingsLogoEsri": "Esri 로고",
      "settingsLogoNone": "로고 없음",
      "settingsLogoCustom": "사용자 지정 로고",
      "settingsLogoCustomPlaceholder": "이미지 URL",
      "settingsLogoCustomTargetPlaceholder": "클릭 이동 링크",
      "settingsLogoSocialExplain": "머리글 우측 상단 링크를 사용자 정의합니다.",
      "settingsLogoSocialText": "텍스트",
      "settingsLogoSocialLink": "링크",
      "settingsLogoSocialDisabled": "이 기능은 관리자가 사용하지 않도록 설정했습니다.",
      "settingsDataFieldsExplain": "사진 이름, 캡션 및 색상 필드를 선택합니다.",
      "settingsDataFieldsError": "응용프로그램에서 적합한 이름, 캡션 또는 색상 데이터를 확인할 수 없습니다. 여기에서 사용할 필드를 선택하세요. 나중에 이러한 설정을 변경할 수 있습니다.",
      "settingsFieldsLabelName": "이름",
      "settingsFieldsLabelDescription": "캡션",
      "settingsFieldsLabelColor": "색상",
      "settingsFieldsReset": "필드 선택 재설정",
      "settingsExtentExplain": "아래의 대화형 맵을 통해 Map Tour 홈 범위를 설정합니다.",
      "settingsExtentExplainBottom": "정의한 범위에 따라 맵의 홈 범위가 수정됩니다. 첫 번째 투어 포인트가 포함되지 않은 경우 이 범위는 사용되지 않습니다. 이 경우 투어는 첫 번째 포인트를 중심으로 열립니다.",
      "settingsExtentDateLineError": "범위는 180Â° 경도의 자오선을 교차할 수 없음",
      "settingsExtentDateLineError2": "범위를 계산하는 중 오류가 발생했습니다.",
      "settingsExtentDrawBtn": "새 범위 그리기",
      "settingsExtentModifyBtn": "범위 편집",
      "settingsExtentApplyBtn": "Map Tour에서 미리보기",
      "settingsExtentUseMainMap": "Map Tour 범위 사용",
      "settingsZoomExplain": "스토리 포인트에 대한 확대/축소를 설정합니다(선택).",
      "settingsLabelZoom": "축척/수준",
      "settingsZoomFirstValue": "없음",
      "settingsFieldError": "각 목록에서 필드를 선택하세요.",
      "dataTitle": "호스팅되는 Map Tour 레이어 생성",
      "dataExplain": "이미지 및 투어 포인트에 대해 새 피처 레이어가 생성됩니다. Map Tour를 공유하지 않으면 투어 레이어는 공유되지 않습니다.",
      "dataExplainPortal": "피처 레이어가 정상적으로 생성되지 않으면 ArcGIS 관리자에게 문의하세요.",
      "dataNameLbl": "레이어 이름",
      "dataFolderListLbl": "폴더",
      "dataFolderListFetching": "폴더를 불러오는 중...",
      "dataRootFolder": "루트",
      "dataNameError": "피처 서비스의 이름을 입력하세요.",
      "dataFolderError": "올바른 폴더를 선택하세요.",
      "dataSrcContainsInvalidChar": "피처 서비스 이름에 잘못된 문자(-, <, >, #, %, :, \", ?, &, +, / 또는 )가 하나 이상 포함되어 있습니다.",
      "dataSrvAlreadyExistsError": "같은 이름의 서비스가 기관 내에 이미 있습니다. 다른 이름을 선택하세요.",
      "dataBtnSave": "레이어 생성",
      "dataFooterProgress": "생성 중",
      "dataFooterSucceed": "생성이 완료되었습니다. 로드하는 중",
      "dataFooterError": "생성하지 못했습니다. 다시 시도하세요.",
      "tabError": "모든 탭에서 오류를 확인하세요.",
      "introRecordBtn": "소개",
      "introRecordActivate": "첫 번째 포인트를 소개로 사용합니다(슬라이드에는 표시되지 않음).",
      "coverRecordActivate": "첫 번째 포인트를 커버 페이지로 사용",
      "coverBuilder": "커버 페이지 구성",
      "cover": "커버",
      "showCover": "커버 표시",
      "editCover": "커버 편집",
      "coverNoVideo": "비디오는 커버 미디어에 지원되지 않습니다. 이미지를 선택하세요.",
      "coverPreview": "커버를 보려면 스토리를 저장한 다음, 스토리 보기 버튼을 사용하여 미리 봅니다.",
      "thirdPartyTerms": "서드 파티 서비스를 사용하면 서비스 약관에 동의하는 것입니다. "
    },
    "addPopupJS": {
      "uploadingPicture": "그림을 업로드하는 중",
      "uploadSuccess": "업로드 완료",
      "uploadError": "그림을 업로드하는 동안 오류가 발생했습니다.",
      "uploadError2": "피처 추가 오류(잘못된 html 태그)",
      "notJpg": "업로드할 jpeg 사진을 선택하세요.",
      "errorNoPhoto": "업로드할 이미지를 선택하세요.",
      "errorNoThumbnail": "업로드할 미리보기를 선택하세요.",
      "errorInvalidPicUrl": "유효한 그림 URL(https로 시작하고 jpg, png, gif 또는 bmp로 끝남)을 입력합니다. URL 끝에 '#isImage'를 추가하여 이 규칙을 재정의할 수 있습니다.",
      "errorInvalidThumbUrl": "유효한 썸네일(https://로 시작하고 jpg, png, gif 또는 bmp로 끝남)을 입력합니다.",
      "errorInvalidVideoUrl": "유효한 비디오 URL(https://로 시작)을 입력합니다.",
      "errorNoName": "이 Tour 포인트의 이름을 입력하세요.",
      "errorNoDescription": "이 Tour 포인트의 캡션을 입력하세요.",
      "errorNoLocation": "이 Tour 포인트의 위치를 설정하세요."
    },
    "builderJS": {
      "noPendingChange": "저장되지 않은 변경 사항 없음",
      "unSavedChangeSingular": "저장되지 않은 변경 사항 1개",
      "unSavedChangePlural": "저장되지 않은 변경 사항",
      "shareStatus1": "Tour가 저장되지 않음",
      "shareStatus2": "Tour가 공개적으로 공유됨",
      "shareStatus3": "Tour가 기관 내에서 공유됨",
      "shareStatus4": "Tour가 공유되지 않음",
      "popoverDiscard": "저장되지 않은 변경 사항을 취소하시겠습니까?",
      "yes": "예",
      "no": "아니요",
      "popoverLoseSave": "뷰어를 열면 저장되지 않은 변경 사항이 모두 손실됩니다.",
      "ok": "확인",
      "popoverSaveWhenDone": "작업을 마치면 저장하세요.",
      "closeWithPendingChange": "실행을 확인하시겠습니까? 확인하면 변경 사항이 손실됩니다.",
      "gotIt": "확인",
      "savingApplication": "스토리 저장 중",
      "saveSuccess": "스토리가 저장됨",
      "saveError": "저장하지 못했습니다. 다시 시도하세요.",
      "saveError2": "이름 또는 설명의 잘못된 html 태그로 인해 저장하지 못했습니다.",
      "saveError3": "제목은 비워 둘 수 없습니다.",
      "dragColorPicker": "나를 중심으로 이동하거나<br />내 색상 변경",
      "dataWarningExtent": "웹 맵 범위를 벗어난 데이터가 있습니다. 이러한 데이터는 Tour 포인트로 사용되지 않으므로 사용하려면 맵 범위를 변경해야 합니다.",
      "dataWarningVisibi": "Map Tour 레이어가 현재 웹 맵 범위에 표시되지 않습니다. Map Tour 레이어가 %MAPSIZE%의 큰 맵에 표시되는지 확인하세요.",
      "dataWarningEdit": "웹 맵 편집",
      "dataWarningClose": "닫기",
      "signIn": "응용프로그램을 저장하려면",
      "signInTwo": "스토리를 저장합니다.",
      "switchBM": "베이스맵 변경"
    },
    "organizePopupJS": {
      "messageStart": "Tour 포인트",
      "messageSinglePoint": "1개를 삭제하도록 선택했습니다.",
      "messageMultiPoint": "개를 삭제하도록 선택했습니다.",
      "messagePermantRemove": "이 작업을 수행하면",
      "messageRecord": "1개의 레코드가",
      "messageRecordPlural": "개의 레코드가",
      "messageConfirm": "데이터베이스에서 영구적으로 제거됩니다. 계속하시겠습니까?",
      "labelButtonShow": "보기",
      "labelButtonHide": "숨기기"
    },
    "picturePanelJS": {
      "popoverDeleteWarningPicAndThumb": "이 작업을 수행하면 그림 및 미리보기가 영구적으로 삭제됩니다.",
      "popoverDeleteWarningThumb": "이 작업을 수행하면 미리보기가 영구적으로 삭제됩니다.",
      "popoverUploadingPhoto": "그림 및 미리보기를 업로드하는 중",
      "popoverUploadingThumbnail": "미리보기를 업로드하는 중",
      "popoverUploadSuccessful": "업로드 완료",
      "popoverUploadError": "업로드하지 못했습니다. 다시 시도하세요.",
      "changePicAndThumb": "그림 변경",
      "changeThumb": "미리보기 변경",
      "selectPic": "미디어 변경",
      "selectThumb": "미리보기 변경",
      "uploadPicAndThumb": "적용"
    },
    "headerJS": {
      "editMe": "편집!",
      "templateTitle": "제목 설정",
      "templateSubtitle": "부제목 설정",
      "edit": "편집"
    },
    "crossFaderJS": {
      "setPicture": "그림 제목 설정",
      "setCaption": "그림 캡션 설정"
    },
    "importPopup": {
      "title": "가져오기",
      "prevBtn": "뒤로",
      "nextBtn": "다음"
    },
    "importPopupHome": {
      "header": "그림이 어디에 저장됩니까?"
    },
    "onlinePhotoSharingCommon": {
      "pictures": "그림",
      "videos": "동영상",
      "disabled": "이 기능은 관리자가 사용하지 않도록 설정했습니다.",
      "disabledPortal": "이 기능을 사용하려면 포털에 호스팅 서버가 있어야 합니다. Portal for ArcGiS 관리자에게 문의하세요.",
      "header1": "그림을 공개적으로 공유해야 합니다.",
      "header2": "가져오기는 처음 %NB1%개의 %MEDIA%(으)로 제한됩니다.",
      "emptyDataset": "오류입니다. 그림이 없습니다.",
      "footerImport": "가져오기",
      "selectAlbum": "공용 앨범 선택",
      "selectAlbum2": "앨범 선택",
      "pleaseChoose": "선택하세요.",
      "userLookup": "조회",
      "userLookingup": "조회 중",
      "csv": "CSV에서 참조됨",
      "advanced": "고급 옵션",
      "advancedScratchLbl": "새 Tour 시작",
      "advancedScratchTip": "투어 포인트를 추가할 빈 투어를 생성합니다. 이때 미디어가 온라인 상태여야 합니다. 이 옵션은 이미지 업로드를 지원하지 않습니다.",
      "advancedCSVLbl": "CSV 파일에서 Tour 데이터 가져오기",
      "advancedCSVTip": "미디어 온라인을 참조하는 CSV 파일에서 투어 콘텐츠를 가져옵니다. 이 옵션은 이미지 업로드를 지원하지 않습니다.",
      "advancedCommonTip": "이미지 및 동영상은 이미 온라인 상태여야 합니다.",
      "select": "선택",
      "locUse": "그림 지오로케이션 사용",
      "locExplain": "그림 위치를 사용하고 싶지 않을 수도 있습니다. 모든 그림이 앨범에서 상속되어 동일한 위치에 배치될 수 있기 때문입니다.",
      "locExplain2": "비디오 위치를 사용하고 싶지 않을 수도 있습니다. 모든 비디오가 사용자 설정에서 상속되어 동일한 위치에 배치될 수 있기 때문입니다."
    },
    "viewFlickr": {
      "title": "플리커 가져오기",
      "header": "플리커 사용자 이름을 입력하고 가져올 사진 앨범 또는 태그를 선택합니다.",
      "userInputLbl": "사용자 이름 입력",
      "signInMsg2": "사용자를 찾을 수 없습니다.",
      "selectSet": "앨범 선택",
      "selectTag": "또는 태그 선택",
      "footerImportTag": "선택한 태그 가져오기",
      "footerImportSet": "선택한 앨범 가져오기"
    },
    "viewFacebook": {
      "title": "Facebook 가져오기",
      "header": "Facebook 사용자 계정으로 인증하거나 공용 페이지를 사용하세요. 비공개 앨범을 사용하여 Facebook 사용자 인증이 필요하지 않은 공용 Map Tour를 생성할 수 있습니다. 이 경우 댓글과 좋아요가 비공개로 유지됩니다.",
      "leftHeader": "Facebook 사용자",
      "rightHeader": "Facebook 페이지",
      "pageExplain": "Facebook 페이지는 공용 브랜드/제품 또는 <b>esrigis</b>와 같은 유명 브랜드/제품입니다. 페이지 URL의 첫 번째 '/' 뒤에서 페이지 이름을 확인할 수 있습니다.",
      "pageInputLbl": "페이지 이름 입력",
      "lookupMsgError": "페이지를 찾을 수 없음"
    },
    "viewPicasa": {
      "title": "Google+ 가져오기",
      "header": "이메일 주소나 ID를 입력합니다.",
      "userInputLbl": "이메일 또는 Picasa/Google+ ID",
      "signInMsg2": "계정을 찾을 수 없음",
      "signInMsg3": "공개 앨범 없음",
      "howToFind": "<a href='https://links.esri.com/storymaps/google-photos-help' target='_blank'>자세한 정보</a>",
      "howToFind2": "Picasa 페이지의 첫 번째 '/'와 두 번째 '/' 사이의 숫자 복사"
    },
    "viewCSV": {
      "title": "CSV 가져오기",
      "uploadBtn": "CSV 파일을 선택하거나 드래그 앤 드롭",
      "resultHeaderEmpty": "CSV가 비어 있음",
      "resultHeaderSuccess": "%NB_POINTS%개의 포인트를 불러옴",
      "resultHasBeenLimited": "Tour당 %VAL3%개 포인트 제한을 적용하기 위해 가져오기가 %VAL2%개 중 %VAL1%개의 포인트로 제한되었습니다.",
      "browserSupport": "현재 브라우저는 지원되지 않습니다. CSV를 사용하려면 <a href='http://browsehappy.com/' target='_blank'>브라우저를 업그레이드</a>하거나 ArcGIS.com web map viewer(도움말 참조)를 사용해야 합니다.",
      "errorLatLng": "위도 및 경도 필드를 찾지 못했습니다. 위도의 가능한 값은 <i>%LAT%</i>이고, 경도의 가능한 값은 <i>%LONG%</i>입니다.",
      "errorFieldsExplain": "다음 필수 필드를 찾지 못해 불러오는 데 실패했습니다.",
      "errorFieldsName": "<b>이름</b> 가능한 값: %VAL%",
      "errorFieldsDesc": "<b>설명</b> 가능한 값: %VAL%",
      "errorFieldsUrl": "<b>그림 URL</b> 가능한 값: %VAL%",
      "errorFieldsThumb": "<b>미리보기 URL</b> 가능한 값: %VAL%",
      "errorFields2Explain": "CSV는 다음 속성에 대해 레이어와 동일한 속성을 사용하지 않으므로 로드하는 데 실패했습니다.",
      "errorFields2Name": "<b>이름</b> %VAL2% 대신 %VAL1%을(를) 사용합니다.",
      "errorFields2Desc": "<b>설명</b> %VAL2% 대신 %VAL1%을(를) 사용합니다.",
      "errorFields2Url": "<b>그림 URL</b> %VAL2% 대신 %VAL1%을(를) 사용합니다.",
      "errorFields2Thumb": "<b>미리보기 URL</b> %VAL2% 대신 %VAL1%을(를) 사용합니다.",
      "resultFieldsAll": "모든 속성을 가져왔습니다.",
      "resultFieldsNotAll": "다음 속성은 맵 레이어에 없으므로 가져오지 못했습니다.",
      "resultFieldsNotAll2": "다음 속성을 가져왔습니다.",
      "footerNextBtnResult": "웹 맵으로 가져오기",
      "footerProgress": "가져오기 진행 중",
      "footerSucceed": "가져오기가 완료되었습니다. 로드하는 중"
    },
    "viewYoutube": {
      "title": "YouTube 가져오기",
      "header": "공개적으로 공유된 동영상을 찾으려면 YouTube 사용자 이름을 입력하세요.",
      "pageInputLbl": "YouTube 사용자 이름 입력",
      "lookupMsgError": "사용자를 찾을 수 없습니다.",
      "howToFind": "YouTube 사용자 이름을 찾는 방법",
      "howToFind2": "동영상 아래에 사용자 이름 표시",
      "found": "찾음",
      "noData": "공개된 동영상 없음"
    },
    "viewGeoTag": {
      "title": "이미지/동영상 선택 및 찾기",
      "header": "찾은 항목을 가져옵니다. 가져와서 배치하려는 할당되지 않은 항목을 클릭합니다.",
      "headerMore": "도움말",
      "headerExplain": "<b>가져오기</b> 버튼을 클릭하면 <b>배치된</b> 탭에 나열된 이미지 또는 비디오만 가져옵니다.<br><br>이미지 또는 비디오와 함께 저장된 지오로케이션 정보를 접근할 수 있는 경우 자동으로 가져옵니다. 지오로케이션 정보가 없는 항목은 <b>찾기</b> 탭에 나열됩니다. 해당 탭에 나열된 항목을 찾으려면 해당 탭을 클릭한 다음, 맵에서 원하는 위치를 클릭합니다.<br><br><b>배치된</b> 탭에서 항목을 제거하여 가져올 수 없도록 하려면 해당 항목 위로 커서를 이동할 때 표시되는 가져오지 않음 버튼을 클릭합니다.<br><br>팁: 자체 미디어의 지오로케이션 정보를 가져오지 않는 경우 계정의 개인 정보 설정을 확인하세요. 예를 들어 플리커 계정 설정에서 EXIF 데이터가 숨겨져 있지 않은지 확인합니다. 또한 새 업로드를 위해 EXIF 데이터를 가져오는 Flickr 개인 정보 옵션이 꺼져 있으면(기본값) 플리커에서 위치를 다시 업로드하거나 수동으로 지정하지 않는 한 지오로케이션은 이미지의 플리커에 저장되지 않습니다.",
      "leftPanelTab1": "배치할 항목",
      "leftPanelTab2": "배치된 항목",
      "clickOrTap": "배치할 맵 클릭",
      "clearLoc": "위치 지우기",
      "clickDrop": "가져오지 않음",
      "footerImport": "가져오기",
      "footerProgress": "가져오기 진행 중",
      "footerSucceed": "가져오기가 완료되었습니다. 로드하는 중...",
      "loading": "로드 중",
      "error": "그림 지오로케이션을 가져오지 못했습니다. 지오로케이션이 무시되었습니다."
    },
    "initPopup": {
      "title": "Map Tour 빌더",
      "prevBtn": "뒤로",
      "nextBtn": "다음"
    },
    "initPopupHome": {
      "header1": "이미지 또는 동영상이 어디에 있습니까?",
      "header2": "이 도우미는 온라인으로 이미 저장된 미디어에서 Map Tour를 작성하도록 도와주거나, ArcGIS Online for Organizations 계정으로 Map Tour를 가져옵니다.",
      "title1": "이미 온라인 상태입니다.",
      "title2": "이미지를 업로드해야 합니다.",
      "hostedFSTooltip": "이미지를 업로드한 후 투어에 저장합니다(비디오는 지원하지 않음).",
      "hostedFsNA": "발행자이거나 호스팅되는 피처 레이어 발행 권한이 있는 다른 역할에 속해 있어야 합니다. ArcGIS 관리자에게 문의하세요.",
      "hostedFsNA2": "ArcGIS Online을 구독해야만 사용할 수 있습니다. <a href='%LINK%'>무료 평가판 등록</a>",
      "footer1": "작업을 마치면 응용프로그램 항목 페이지를 통해 Map Tour를 대상 그룹과 공유해야 합니다.",
      "footer3": "CSV 템플릿 다운로드",
      "footer4": "다운로드되지 않을 경우 \"다른 이름으로 저장\"",
      "footer4bis": "다운로드가 시작되지 않는 경우 마우스 오른쪽 버튼을 클릭한 다음 \"다른 이름으로 저장\"을 클릭하세요.",
      "footer5": "자세한 정보",
      "footerProgress": "생성 중",
      "footerSucceed": "생성이 완료되었습니다. 로드하는 중..."
    },
    "helpPopup": {
      "title": "도움말",
      "close": "닫기",
      "tab1": {
        "title": "소개",
        "moreInfo": "자세한 내용은",
        "infoSites": "<a href='https://storymaps.arcgis.com' target='_blank'>Esri 스토리맵 웹 사이트</a>의 <a href='https://storymaps.arcgis.com/en/app-list/map-tour/' target='_blank'>Map Tour 섹션</a>을 방문하세요.",
        "mtFAQ": "<a href='https://storymaps.arcgis.com/en/faq/#category4' target='_blank'>Map Tour FAQ를 참고하세요.</a>",
        "myStories": "Map Tour를 관리하고 웹 사이트에서 <a href='https://storymaps.arcgis.com/en/my-stories/' target='_blank'>내 스토리</a>에 있는 오류를 확인할 수 있습니다.",
        "div1": "Map Tour 템플릿은 시선을 사로잡는 사진 또는 미디어 요소가 있는 지리 정보를 통해 원하는 스토리를 전달하도록 디자인되었습니다.",
        "div2": "이 템플릿은 사용자가 찾아볼 수 있도록 숫자가 매겨진 순서대로 소규모 장소 집합을 제공할 수 있는 사용하기 쉽고 멋진 웹 응용프로그램을 생성합니다. 이 템플릿은 스마트폰과 태블릿을 비롯한 기기에 상관없이 모든 웹 브라우저에서 사용할 수 있도록 디자인되었습니다. <br /><br />",
        "div42": "다른 사용자가 생성하는 Map Tour의 예시를 보려면 <a href='https://storymaps.arcgis.com/' target='_blank'>스토리맵 웹 사이트</a>에서 <a href='https://links.esri.com/storymaps/map_tour_gallery' target='_blank'>갤러리를 방문</a>하세요. Twitter에서 <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>로 팔로우할 수도 있습니다.",
        "div5": "여러분의 의견에 항상 귀를 기울이겠습니다! <a href='https://links.esri.com/storymaps/forum' target='_blank'>GeoNet의 스토리맵 포럼을 방문하여 문제 및 필요한 새로운 기능에 대해 알려주세요.</a>"
      },
      "tab2": {
        "title": "데이터",
        "div1": "Map Tour를 생성할 때 고려해야 할 기본 요소는 그림을 저장할 위치를 선택하는 것입니다. Map Tour에서는 사진 공유 서비스 및 웹 서버에 저장된 사진 또는 디스크에서 업로드한 사진을 사용할 수 있습니다.",
        "div1a": "지원되는 그림 형식 및 동영상에 대한 자세한 내용은 이 탭의 마지막 섹션을 참조하세요.",
        "div2": "대화형 빌더에서는 Map Tour에서 이미지를 처리할 수 있는 두 가지 옵션을 제공합니다.",
        "div3": "<ul><li>플리커 이미지나 자신의 웹서버에 저장된 이미지와 같이 <b>이미 온라인에 있는 사진</b>을 사용할 수 있습니다. 이러한 이미지는 해당 URL을 통해 Map Tour에서 참조됩니다.</li><li><b>컴퓨터에서 Map Tour로 직접 사진을 업로드</b>할 수도 있습니다. 이 업로드 옵션을 사용하려면 사진이 첨부 파일로 저장되는 호스팅된 피처 서비스가 자동으로 생성되므로 ArcGIS 구독이 있어야 하며 발행자 또는 관리자 권한이 있어야 합니다.</li></ul>",
        "div4": "기본 사용 사례는 다음과 같습니다.",
        "div4b": "<b>사진이 아직 호스팅되지 않고</b> ArcGIS 구독이 있는 경우, 호스팅 피처 서비스를 사용하는 것이 가장 좋습니다. 공용 사진 공유 서비스와 같이 빠르게 불러오는 이미지를 생성하도록 최적화되며 ArcGIS 플랫폼의 모든 운영 관리 및 데이터 관리 기능에 접근할 수 있습니다.",
        "div5": "<b>기관의 구성원이 아닌 경우</b>: 먼저 사진 공유 웹 사이트 또는 자체 웹 서버에 그림을 업로드해야 합니다. 그런 다음 빌더를 사용하여 해당 그림의 원래 위치에서 계속 호스팅되는 그림을 사용할 수 있습니다.",
        "div6": "그림을 첨부 파일로 저장하거나 외부 그림을 참조하는 <b>기존 피처 서비스를 다시 사용하려는 경우</b>: 아래의 세부 섹션을 참조하세요.",
        "div7": "<b>이전 버전의</b> Map Tour 템플릿을 사용하고 있으며 그림 및 미리보기를 참조하는 CSV가 이미 있는 경우: CSV를 가져와서 데이터를 세부적으로 조정할 수 있습니다. 빌더에서는 위도/경도 필드를 사용하는 CSV만 지원하며 주소 기반 CSV는 웹 맵을 통해 계속 사용할 수 있습니다(아래 섹션 참조).",
        "div8": "온라인 사진 공유 서비스에서 가져오기",
        "div9a": "Facebook 지원이 중단되었습니다. ${learn}",
        "learn": "자세한 정보",
        "div9": "가져오기 작업에서는 이미 호스팅된 그림을 웹 맵 피처 컬렉션에 해당 URL을 저장하여 참조합니다. 이러한 그림은 ArcGIS Online에 저장되지 않습니다. 호스팅된 그림에 접근할 수 없는 경우 Map Tour에서 사용할 수 없으며 '그림을 사용할 수 없음' 이미지가 표시됩니다. 사진 서비스 공급자에 따라 Map Tour에서 그림의 이름, 설명 및 위치를 가져오지 못할 수 있습니다. 이러한 속성은 웹 맵에 저장되며 온라인 서비스에 대한 편집 내용이 Map Tour에 반영되지 않습니다.",
        "div10": "웹 서버에 그림 저장",
        "div11": "플리커 이미지에 접근하거나 투어에 직접 업로드하는 대신, 자신의 웹서버에서 그림을 호스팅하도록 선택하는 경우 수동으로 그림의 썸네일을 만들어야 합니다. 썸네일에 전체 해상도 그림을 사용하면 성능이 저하됩니다. URL을 통해 웹에서 직접 이미지에 접근할 경우 이 <a href='https://links.esri.com/storymaps/faq_maptour_image_size' target='_blank'>FAQ</a>를 참고하여 이미지 크기 조정에 대한 팁을 얻으세요.",
        "div12": "기존 장소 데이터 사용",
        "div13": "스프레드시트나 GIS 포인트 레이어의 장소 목록과 같은 기존 장소 데이터가 있는 경우 CSV 형식의 이 데이터를 사용하여 Map Tour를 생성할 수 있습니다. 이 경우 CSV 파일에 값으로 저장된 URL을 통해 그림에 직접 접근할 수 있어야 합니다. Map Tour 빌더를 처음 시작하는 경우 고급 옵션 대화 상자에서 CSV 템플릿을 다운로드할 수 있습니다. CSV 파일을 이 대화 상자에 업로드할 수 있습니다.",
        "div14": "필드 이름에 지원되는 값(대/소문자 구분 안 함):",
        "div151": "이름",
        "div152": "설명",
        "div153": "그림",
        "div154": "미리보기",
        "div155": "색상 ",
        "div16": "피처 서비스를 사용할 때 응용프로그램에서 일치하는 필드를 찾지 못한 경우 빌더를 통해 사용할 필드를 구성할 때까지 뷰어가 작동하지 않습니다. 웹 맵에 추가된 CSV 및 쉐이프파일 레이어에는 필수 필드가 모두 있어야 합니다. 그렇지 않으면 빌더가 작동하지 않습니다.",
        "div162": "그림을 첨부 파일로 저장하는 피처 서비스를 사용할 때는 <b>두 개의 첨부 파일이 있는 피처만 사용할 수 있습니다</b>. 첫 번째 첨부 파일은 기본 그림을 정의하고, 두 번째 첨부 파일은 미리보기를 정의합니다.",
        "div17": "그림 및 미리보기 필드는 첨부 파일이 없는 피처 서비스의 경우 필수 필드이고, 첨부 파일이 있는 피처 서비스의 경우 선택 필드입니다. 그러나 첨부 파일이 있는 피처 서비스에도 이러한 필드를 사용하는 것이 좋습니다. 서비스에서 첨부 파일을 사용할 수 있는 경우 빌더를 통해 그림을 첨부 파일로 업로드할 수 있습니다. 그렇지 않으면 그림 및 미리보기 URL만 편집할 수 있습니다.",
        "div172": "그림 및 첨부 파일 필드가 있는 경우 항상 이러한 필드가 사용되며 피처 서비스 첨부 파일이 쿼리되지 않습니다.",
        "div173": "예제 CSV 및 쉐이프파일은 다음 위치에서 다운로드할 수 있습니다.",
        "div174": "자세한 내용은 이 <a href='https://links.esri.com/storymaps/faq_map_tour_gis_data' target='_blank'>FAQ</a>를 참고하세요.",
        "div18": "CSV 또는 쉐이프파일에서 호스팅 피처 서비스 생성",
        "div19": "CSV 또는 쉐이프파일에서 호스팅 피처 서비스를 생성할 때는 기본 설정에 따라 첨부 파일을 사용할 수 없습니다. 첨부 파일을 사용하려면 피처 서비스 세부 정보 페이지를 열고 레이어 섹션에 있는 작은 화살표를 클릭합니다. 그러면 해당 옵션이 표시됩니다. 속성을 통해 참조한 그림 및 썸네일이 Map Tour에서 계속 사용됩니다. 필요한 경우 그림을 피처 서비스 첨부 파일로 업로드하려면, 그림 패널에 있는 버튼 두 개(\"그림 변경\" 및 \"썸네일 변경\")를 사용하면 됩니다.",
        "div20": "지원되는 그림 형식 및 비디오",
        "div21": "플리커 이미지에 접근하면 Map Tour에서 해당 이미지에 .jpg 파일로 자동 접근합니다. Map Tour 빌더에 이미지를 업로드하는 경우 이미지는 .jpg 또는 .jpeg 형식이어야 합니다. 웹에서 URL을 통해 이미지를 직접 참조하는 경우 지원되는 그림 형식은 .jpg, .jpeg, .png, .gif, .bmp입니다. YouTube 비디오가 바로 지원됩니다.",
        "div22": "Map Tour 템플릿에는 동영상 플레이어가 포함되어 있지 않으므로 선호하는 동영상 호스팅 서비스에서 제공하는 외부 동영상 플레이어를 사용해야 합니다(동영상을 포함하는 옵션을 찾은 후 지정진 코드에 있는 URL 복사). 동영상을 직접 호스팅하려면 <a href='http://www.videojs.com/'>Video.js</a>와 같은 동영상 플레이어가 포함된 HTML 페이지를 만들면 됩니다.",
        "div23": "대화형 빌더는 첨부 파일이 있는 피처 서비스를 사용할 때 동영상을 포함할 수 있는 대화 상자를 제공하지 않지만 대화형 빌더 외부에서 데이터를 편집하여 동영상을 포함할 수 있습니다. arcgis.com map viewer에서 외부 동영상을 가리키도록 그림 필드를 수정하고 URL 끝에 특수 매개 변수를 추가하면 미디어가 동영상으로 간주됩니다.",
        "div24": "유효한 그림 첨부 파일이 두 개 있어야 합니다. 그렇지 않으면 포인트를 사용할 수 없습니다. 그림 및 썸네일 필드 없이 피처 서비스 첨부 파일을 사용하면 비디오를 사용할 수 없습니다."
      },
      "tab3": {
        "title": "사용자 정의",
        "div1": "빌더에는 상단 패널의 설정 버튼을 통해 접근할 수 있는 여러 가지 사용자 정의 옵션이 있습니다. 필요한 옵션이 없는 경우 다운로드 가능한 버전을 다운로드하여 웹 서버에 배포하고 요구에 맞게 개선할 수 있습니다.",
        "div2": "다음과 같은 경우에 해당하지 않으면 호스팅 버전을 사용하는 것이 좋습니다.",
        "div3": "<li>머리글 배경 이미지와 같은 원하는 UI 사용자 정의 옵션이 없는 경우</li><li>응용프로그램을 개선하려는 개발자인 경우</li>",
        "div4": "웹 맵 또는 웹 매핑 응용프로그램 식별자를 통해 다운로드 버전을 구성할 수 있습니다. 기본 사용 사례는 다음과 같습니다.",
        "div41": "호스팅되는 환경에서 대화형 빌더를 사용하여 Map Tour를 빌드하고 웹 매핑 응용프로그램 식별자로 템플릿을 구성합니다. 대화형 빌더를 사용하여 정의한 설정이 적용됩니다.",
        "div42": "대화형 빌더 외부에서 웹 맵을 빌드하고 웹 맵 식별자로 템플릿을 구성합니다. 템플릿을 구성하는 방법은 설명서를 참조해야 합니다.",
        "div43": "대화형 빌더는 다운로드 가능한 버전으로 제공되지만 Internet Explorer 10 이전 버전과 같은 브라우저에는 일부 기술적 제한 사항이 있습니다.",
        "div5": "템플릿의 최신 버전을 다운로드하고 템플릿 사용 방법을 자세히 알아보려면 <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub 프로젝트 페이지</a>를 방문하세요."
      },
      "tab4": {
        "title": "팁",
        "div0": "지원되는 브라우저",
        "div0a": "Map Tour 뷰어는 IE8 이상에서 지원되고, 대화형 빌더는 IE9 이상에서 지원됩니다. 모든 주요 브라우저에서 철저히 테스트하지만 일부 문제가 발생할 수도 있습니다. 이 경우 Chrome을 사용하는 것이 좋습니다.",
        "div0b": "일부 문제가 발생한 경우 당사로 알려 주세요. 그 동안 CSV 템플릿을 사용하여 Map Tour를 빌드하면 빌더 인터페이스와의 상호 작용이 최소화됩니다.",
        "div1": "이미지",
        "div2": "하나의 Map Tour에서 다양한 크기, 도형 및 방향의 이미지를 사용할 수는 있지만 세로 방향보다는 가로 방향의 이미지를 사용하는 것을 권장합니다. 경사면 방향 비율이 4:3인 이미지가 가장 적합합니다. 캡션이 이미지와 중첩되는 세 개의 패널 및 통합 레이아웃에서 세로 방향 이미지를 사용하면 많은 이미지가 캡션에 의해 가려질 수 있습니다. 세 개의 패널 및 통합 레이아웃에서는 가능한 경우 크기와 도형이 모두 동일한 이미지를 사용하는 것을 권장합니다. 그러면 사용자가 투어를 진행할 때 크기가 다른 이미지 때문에 혼동되는 일이 발생하지 않습니다.",
        "div2a": "최대 이미지 크기는 기본 그림의 경우 너비 1000픽셀x길이 750픽셀, 미리보기의 경우 140x93으로 설정하는 것이 좋습니다.",
        "div3": "HTML 태그를 사용하여 캡션 텍스트 서식 지정",
        "div4": "캡션에 HTML 태그를 입력하여 형식과 링크를 정의할 수 있습니다. 예를 들어 다음 태그에는 초록색 하이퍼링크가 추가됩니다.",
        "div4aa": "<b>측면 패널 투어의 커버 페이지 생성</b><br>측면 패널 레이아웃은 옵션 커버 페이지를 지원하므로 멋진 전체 화면 이미지를 통해 대상 그룹의 관심을 끌 수 있습니다. 측면 패널 투어의 커버 페이지를 구성하려면 먼저 투어에 일부 또는 모든 포인트를 추가합니다. 그런 다음, 구성 버튼을 클릭하고 나타나는 대화 상자에서 커버 페이지를 정의하는 데 사용할 투어 포인트가 투어의 첫 번째 포인트인지 확인합니다. 그리고 해당 대화 상자의 '첫 번째 포인트를 커버 페이지로 사용' 체크 박스를 선택합니다. 첫 번째 투어 포인트의 이름이 커버 페이지에 표시된 제목이 되고, 해당 포인트의 캡션이 자막이 되며 해당 포인트의 이미지가 커버 페이지 이미지로 사용됩니다. 커버 페이지에는 비디오가 지원되지 않습니다. 자세한 내용은 이 <a href='https://links.esri.com/storymaps/faq_map_tour_cover_page_sp' target='_blank'>FAQ</a>를 참고하세요.</a>",
        "div4a": "적절한 Tour 부제목 작성",
        "div4b": "여유를 갖고 투어에 사용할 멋진 부제목을 작성해 보세요. 부제목을 통해 사람들의 이목을 집중시키고 투어의 내용을 전달할 수 있습니다. 투어가 소재한 국가나 시/도 정보를 대상 그룹에게 알려줄 수도 있습니다. 관련 정보를 제공하지 않으면 사람들은 투어가 진행되는 시/군/구 또는 장소를 알 수 없습니다. 부제목은 너무 길지 않게 작성하세요. 적절한 부제목이 생각나지 않으면 비워 두세요. 세 개의 패널 및 통합 레이아웃과 달리, 측면 패널 레이아웃은 머리글의 부제목을 지원하지 않습니다. 측면 패널 레이아웃에서 커버 페이지 옵션을 사용하면 투어의 첫 번째 포인트에 대한 캡션이 표지 페이지에 표시되므로 투어의 부제목 역할을 합니다.",
        "div5": "보조 레이어",
        "div6": "보조 레이어를 추가하여 Map Tour에 컨텍스트를 제공할 수 있습니다. 이러한 레이어는 Map Tour 포인트 외에 연구 영역, 투어 포인트에 연결되는 도보 또는 운전 경로 등 맵에 표시할 기타 지리적 피처를 포함할 수 있습니다. Map Tour 템플릿은 웹 맵에서 지정한 심볼을 사용하여 이러한 추가 지원 레이어를 표시하지만, 레이어에 정의된 팝업은 지원되지 않습니다. 투어에 지원 레이어를 추가하려면 작업을 저장한 후 Map Tour 빌더를 닫습니다. 그런 다음, 투어에 사용된 웹 맵을 엽니다. 이러한 지원 레이어는 ArcGIS 내 콘텐츠나 스토리맵 웹 사이트의 내 스토리 섹션에서 찾을 수 있습니다.",
        "div7": "간결하게 Tour 유지",
        "div8": "Tour당 포인트 수는 99개로 제한됩니다. 물론 대부분의 Map Tour는 그보다 훨씬 짧습니다. 대상 그룹이 너무 많은 Tour 포인트를 거치지 않도록 하세요. 자신에게는 자신의 주제가 매력적으로 느껴지겠지만 대상 그룹도 그렇게 느낄 것이라고 가정하지 마세요!",
        "div10": "포함 모드",
        "div11": "iframe을 통해 다른 웹 사이트에 템플릿을 포함하려는 경우 URL 끝에 선택적 매개변수 \"&embed\"를 추가하면 머리글가 제거됩니다.",
        "div12": "너비가 좁은 iFrame은 Map Tour를 반응형 소형 디스플레이 뷰로 전환되게 하므로 사용하지 마세요. 사용 편의성을 최대화하려면 Map Tour를 임베드할 때 사용자가 투어를 전체 화면으로 실행할 수 있도록 임베드된 투어 옆에 링크를 제공하는 것을 권장합니다."
      },
      "tab5": {
        "title": "발행",
        "div1": "작업을 마치면 ArcGIS Online에서 공유 버튼을 클릭하거나 응용프로그램 항목 페이지를 통해 대상 그룹과 Map Tour를 공유해야 합니다.",
        "div2a": "빌더로 Tour 공유",
        "div2b": "공유 버튼을 클릭하면 응용프로그램 및 웹 맵 항목이 업데이트됩니다. 피처 서비스 항목에 저장되어 있는 Tour 데이터도 업데이트됩니다. ArcGIS.com 맵 뷰어를 통해 추가한 다른 레이어는 업데이트되지 않습니다. 따라서 Tour가 원하는 대로 공유되지 않을 수 있습니다. 이미 필수 이상의 권한이 포함된 항목은 업데이트되지 않습니다.",
        "div2c": "ArcGIS Online으로 Tour 공유",
        "div2d": "ArcGIS Online을 통해 응용프로그램을 공유할 때에는 필요 시 같은 방식으로 공유되지 않는 종속 리소스(웹 맵, 피처 서비스, 장식 레이어)를 업데이트할 것인지 묻는 메시지가 표시됩니다. Map Tour가 공용이고 리소스 중 하나가 대상 그룹과 공유되지 않는 경우 사용자는 ArcGIS Online 로그인 페이지로 리디렉션됩니다.",
        "div3t": "피처 서비스 보안",
        "div3a": "Map Tour 빌더를 통해 생성된 호스팅 피처 서비스를 사용하는 경우 응용프로그램에서 서비스 보안을 관리하므로 서비스를 공개적으로 공유한 경우에도 편집 권한은 소유자에게만 유지됩니다.",
        "div3t2": "대상 그룹과 Tour를 공유하기 전에",
        "div3": "ArcGIS.com 계정에 로그인되어 있지 않을 때에는 Tour가 정상적으로 작동하는지 확인하세요. 사용하려는 URL이 로그인 페이지나 빌더 모드로 리디렉션되어서는 안 됩니다.",
        "div4": "iPad를 가로 방향으로 사용할 때 Map Tour가 어떻게 보이는지 확인하여 이 인기 장치에서 Map Tour가 올바르게 표시되는지를 확인하는 것이 좋습니다. 이렇게 하면 캡션이 그림을 너무 많이 가리는지도 확인할 수 있습니다. 또한 부제목이 화면에 맞게 표시되는지, 너무 길어서 잘리지 않는지 확인할 수 있습니다.",
        "div5a": "검색 관련 권장 사항",
        "div5b": "ArcGIS Online에서 검색하는 사용자들이 Map Tour를 쉽게 찾을 수 있도록 하려면 Tour가 소재한 시/도의 이름, 국가 이름(미국 이외 국가의 경우) 그리고 '공공 미술', '관광 안내', '유적지' 등의 테마 태그 같은 태그와 함께 '스토리맵' 태그를 웹 맵의 항목 페이지가 아닌 Map Tour의 응용프로그램 항목 페이지에 추가하는 것이 좋습니다. 이러한 태그를 추가하면 Esri에서도 갤러리에 소개하고 소셜 미디어에서 홍보할 멋진 신규 Tour의 예제를 찾을 수 있습니다. 또한 Tour의 작은 스크린샷이나 Tour 그림 중 하나와 같이 적절한 미리보기 그래픽을 응용프로그램 항목 페이지에 업로드하는 것이 좋습니다. Map Tour가 ArcGIS Online 갤러리에 추가되면 이 그림이 자동으로 사용됩니다."
      }
    },
    "share": {
      "firstSaveTitle": "투어가 저장됨",
      "manageStory": "스토리 관리",
      "manageStoryA1": "팁: %LINK1%을 사용하여 스토리에 오류가 있는지 확인하고, 공유 방법을 변경하고, 소셜 미디어에서 멋지게 보이도록 할 수 있습니다. 내 스토리 %LINK2%에 대해 자세히 알아보세요.",
      "manageStoryA1V1": "내 스토리",
      "manageStoryA1V2": "여기",
      "shareTitle": "Tour 공유",
      "sharePrivateHeader": "Tour가 공유되어 있지 않습니다. 공유하시겠습니까?",
      "sharePrivateBtn1": "공개적으로 공유",
      "sharePrivateBtn2": "내 기관과 공유",
      "sharePrivateProgress": "공유 처리 중...",
      "sharePrivateErr": "공유에 실패했습니다. 다시 시도하거나",
      "sharePrivateOk": "공유가 업데이트되었습니다. 불러오는 중...",
      "sharePreviewAsUser": "미리보기",
      "shareHeader1": "Tour가 <strong>모든 사용자에게 공개</strong>되었습니다.",
      "shareHeader2": "Tour가 기관의 구성원에게 공개되었습니다(로그인 필요).",
      "shareLinkHeader": "투어 공유",
      "shareLinkOpen": "열기",
      "shareA1": "<a href='%LINK1%' target='_blank'>응용프로그램 항목 페이지</a>의 %SHAREIMG%을(를) 사용하세요. 웹 맵의 공유도 해제하려면 <a href='%LINK2%' target='_blank'>웹 맵 항목 페이지</a>를 사용하세요.",
      "shareWarning": "<a href='%LINK%' target='_blank'>웹 맵</a>의 소유자가 아니므로 %WITH% 공유를 사용할 수 없습니다.",
      "shareWarningWith1": "공개",
      "shareWarningWith2": "기관에 공개",
      "viewStory": "스토리 보기"
    },
    "locator": {
      "error": "위치를 사용할 수 없음"
    },
    "saveErrorSocial": {
      "title": "소셜 미디어 공유 업데이트",
      "panel1": "소셜 미디어에서의 스토리의 외관이 향상되었지만 ArcGIS 웹 응용프로그램 항목 제목이 스토리 제목과 같지 않습니다.",
      "panel1tooltip": "제목, 요약 및 썸네일 이미지를 정의하면 스토리가 다음과 같이 보입니다:",
      "panel2": "소셜 미디어에서 사용할 제목:",
      "panel2q1": "스토리 제목(권장됨)",
      "panel2q1tooltip": "이 옵션을 선택하면 항목 제목이 스토리 제목과 일치하도록 수정되며 빌더에서의 후속 변경 사항이 동기화됩니다.",
      "panel2q2": "항목 제목",
      "panel3": "소셜 미디어에서의 스토리의 외관을 더욱 향상시키려면 ${MYSTORIES}을(를) 사용하여 요약 및 썸네일 이미지를 추가합니다.",
      "panel4": "이 스토리에 대해 다시 경고 안 함",
      "mystories": "내 스토리",
      "btnSave": "저장"
    },
    "bannerNotification": {
      "learnMore": "자세한 정보",
      "close": "닫기",
      "dontShowAgain": "이 메시지를 다시 표시 안 함"
    },
    "httpsTransitionNotification": {
      "bannerMsg": "웹 보안 및 스토리맵에 대한 중요 메시지",
      "s1h1": "Esri는 스토리맵의 보안을 지속적으로 강화하고 있습니다.",
      "s1p1": "스토리맵은 웹에서 실행되며 웹 커뮤니티는 더 강화된 보안을 설정하고 구현하기 위해 항상 노력하고 있습니다. 인터넷을 통해 전송되는 콘텐츠의 보안 연결을 제공하는 HTTPS는 웹 콘텐츠에 접근하는 필수 방법으로 부각되고 있어, 현재 대부분의 최신 브라우저에서는 HTTPS가 아닌 HTTP를 사용하는 경우 경고 메시지가 표시됩니다. 이 새로운 표준을 따라 스토리맵 제작 및 공유에 HTTPS 링크를 사용하고, 웹 콘텐츠를 임베드하거나 스토리맵 내 이미지에 연결할 때 HTTPS URL만 사용하는 것을 권장합니다.",
      "s1p2": "이는 스토리맵의 모든 콘텐츠(이미지, 레이어, 임베드된 앱, 웹 사이트)가 HTTP가 아닌 HTTPS로 시작하는 링크를 사용하여 접근해야 함을 의미합니다. HTTPS를 사용하면 대부분의 웹 브라우저에서 내 스토리가 안전한 것으로 나타나므로 독자에게 최상의 환경이 제공됩니다.",
      "s2h1": "해야 할 일",
      "s2p1": "Esri는 스토리맵 작성자와 독자가 쉽게 HTTPS로 전환할 수 있도록 노력하고 있습니다. 이제, 스토리맵 빌더 및 내 스토리에서 안전하지 않은 콘텐츠(HTTP)를 찾고 이를 해결하기 위한 권장 사항을 제시하는 도구가 제공됩니다. 내 스토리에서 안전하지 않은 콘텐츠를 확인하고 가능한 한 빨리 HTTPS로 업데이트하세요.",
      "action1": "닫기",
      "action2": "내 스토리 지금 확인",
      "action3": "자세한 정보"
    },
    "embedBar": {
      "share": "공유하기",
      "fullScreen": "전체 화면",
      "enlarge": "확대",
      "newTab": "새 탭에서 열기",
      "tagline": "스토리맵",
      "exitFullScreen": "전체 화면 종료"
    },
    "june2018SurveyMessage": {
      "bannerMsg": "요청을 드려도 될까요? 이 질문에 답변을 제공하면 향후 스토리맵을 향상시키는 데 도움이 됩니다.",
      "s1h1": "의견을 공유하고 향후 스토리맵을 향상시키세요.",
      "s1p1": "Esri는 귀하의 소중한 피드백을 반영하여 스토리맵을 더욱 향상시킬 수 있습니다. 이 3분 분량의 설문에 참여해 주시면 감사하겠습니다.",
      "s2p1": "항상 Esri Story Maps를 사용해 주셔서 항상 감사드립니다!",
      "action1": "닫기",
      "action2": "설문 작성"
    },
    "licenseChange2018": {
      "noAccess": "귀하의 계정(%USER_NAME%)에는 공개 상태가 아닌 스토리맵을 열 수 있는 라이선스가 없습니다. 스토리맵 또는 애드온 필수 앱 라이선스가 포함된 사용자 유형을 업무 지시하려면 기관 관리자에게 문의하세요."
    },
    "storyTellerUserType": {
      "notCreatorError": "계정(%USER_NAME%)에는 클래식 스토리맵 빌더를 사용할 수 있는 라이선스가 없습니다. Creator 사용자 유형 할당을 기관 관리자에게 요청하세요."
    }
  }
});