
// Система многоязычности
const translations = {
  en: {
    // Header
    setup: "Setup",
    cooperation: "Cooperation", 
    contacts: "Contacts",
    
    // Main title and description
    mainTitle: "CLAN-TV CONNECTION SETUP",
    mainDescription: "Interactive satellite connection setup wizard with automatic optimal satellite selection.",
    
    // Cooperation page
    ourPartners: "Our partners",
    broadcastArea: "Broadcast area",
    forAdvertisers: "For advertisers",
    emailLabel: "Email",
    messengersLabel: "Messengers",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    privacyPolicy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    termsOfUse: "Terms of Use",
    
    // Documents (page content)
    privacyDoc: `Privacy Policy\n\nThis Privacy Policy (hereinafter referred to as the "Policy") governs the procedure for processing information collected on the website clan-tv.com (hereinafter referred to as the "Website"), owned by CLAN L.L.C-FZ, registered at Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E. (hereinafter referred to as the "Company").\n\n1. General Provisions\n\n1.1. The Website is for informational purposes only and is not intended to collect users’ personal data.\n1.2. The Website does not contain feedback forms, registration, or any other tools that require users to input personal information.\n1.3. The only way to contact the Company is by sending an email to help@clan-tv.com.\n1.4. The email is sent by the user independently using their own email client, outside the Website. The Company has no access to the data entered by the user when sending the email.\n\n2. Use of Yandex.Metrica\n\n2.1. The Website uses the web analytics service "Yandex.Metrica" to analyze traffic and improve content quality.\n2.2. The service may collect anonymized data about user actions using cookies, including IP address, device and browser type, approximate location, and visit time.\n2.3. All collected data are anonymized and do not allow identification of a specific user.\n\n3. Use of Cookies\n\n3.1. The Website uses only those cookies necessary for the operation of the Yandex.Metrica analytics tool.\n3.2. The user may disable the use of cookies in their browser settings.\n\n4. Liability\n\n4.1. The Company is not responsible for user actions related to independently sending messages via email, as well as for the use of third-party resources that may be linked on the Website.\n\n5. Contact Information\n\nFor any questions related to this Policy, you may contact us at help@clan-tv.com.`,
    cookiesDoc: `Cookie Policy\n\nThis Cookie Policy (hereinafter referred to as the "Policy") explains which cookies are used on the website clan-tv.com, owned by CLAN L.L.C-FZ, registered at Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E. (hereinafter referred to as the "Company").\n\n1. What Are Cookies\n\nCookies are small text files stored on a user’s device when visiting a website. They help improve the website’s functionality and provide statistical information.\n\n2. What Cookies Are Used on the Website\n\n2.1. The Website uses only cookies necessary for the operation of the Yandex.Metrica analytics system.\n2.2. These cookies collect anonymized information about user actions (visit time, pages viewed, device and browser type).\n\n3. Managing Cookies\n\n3.1. The user can independently configure or block the use of cookies in their browser settings.\n3.2. Disabling cookies may affect the correct operation of certain website functions.`,
    termsDoc: `Terms of Use\n\nThese Terms of Use (hereinafter referred to as the "Terms") define the rules for using the website clan-tv.com, owned by CLAN L.L.C-FZ, registered at Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E. (hereinafter referred to as the "Company").\n\n1. General Provisions\n\n1.1. The Website is an informational resource providing details about the possibilities of connecting satellite television services.\n1.2. All information on the Website is provided for informational purposes only and does not constitute a public offer.\n\n2. Liability\n\n2.1. The Company is not responsible for possible errors in the published information, nor for any consequences related to the use of information posted on the Website.\n2.2. Links to third-party resources are provided solely for the convenience of users, and the Company is not responsible for their content.\n\n3. Use of Data\n\n3.1. The Website does not collect users’ personal data.\n3.2. For the purpose of analyzing website traffic statistics, the Yandex.Metrica service is used, which processes anonymized data.\n\n4. Contact Information\n\nFor any questions related to the use of the Website, you may contact us at help@clan-tv.com.`,
    tag_news: "News",
    tag_entertainment: "Entertainment",
    tag_documentary: "Documentary",
    tag_series: "Series",
    tag_info: "Informational",
    channel_rtr: "RTR-Planeta",
    channel_rossia24: "Rossiya 24",
    channel_ntv_mir: "NTV Mir",
    channel_ntv_pravo: "NTV Pravo",
    channel_ntv_serial: "NTV Serial",
    channel_ntv_style: "NTV Style",
    channel_sts: "STS",
    channel_rentv: "REN TV",
    channel_peretz: "Peretz",
    channel_izvestia: "Izvestia",
    channel_five: "Channel Five",
    contactUs: "Contact us in any conveontact Usnient way.",
    // Cooperation hero and extras
    coopHeroTitle: "Global broadcasting of Russian TV channels abroad",
    coopHeroSubtitle: "We offer an exclusive opportunity for 24/7 broadcasting of popular Russian TV channels outside Russia.",
    coopCardCoverage: "We provide a stable, high‑quality signal covering 50+ countries across three continents, reaching millions of Russian‑speaking and international viewers.",
    coopCardReliability: "Maximum reliability — broadcasting is delivered via international satellites ensuring stable reception even in remote regions.",
    coopMapHeading: "The full list of countries includes 50+ states, making our platform one of the largest for Russian‑language and international content.",
    coopMapDesc: "The interactive map shows the combined coverage area of CLAN-TV.",
    coopAdvantagesTitle: "Our advantages",
    coopAdvantage1: "✔ Global reach without borders — your channel can be watched in Europe, Asia, Africa and the Middle East.",
    coopAdvantage2: "✔ Loyal audience — over 150 million Russian‑speaking viewers living abroad.",
    coopAdvantage3: "✔ Technical reliability — high broadcast quality and a stable signal.",
    coopAdvantage4: "✔ Flexible partnership terms — tailored solutions for channels of any format.",
    
    // Progress indicators
    step1Description: "Step 1 of 3: Automatic selection of the optimal satellite",
    step2Description: "Step 2 of 3: Specify your location",
    step3Description: "Step 3 of 3: Setup instructions",
    
    // Step 1
    step1Title1: "Automatic Satellite Selection",
    step1Subtitle: "The system will automatically choose the optimal satellite based on your location.",
    westernBeam: "Western Beam",
    easternBeam: "Eastern Beam", 
    asianBeam: "Asian Beam",
    menaBeam: "MENA Beam",
    westernCoverage: "Coverage of Europe and North Africa",
    easternCoverage: "Coverage of the Middle East and Northeastern Africa",
    asianCoverage: "Coverage of Central Asia",
    menaCoverage: "Coverage of Middle East and North Africa",
    continue: "Continue",
    
    // Step 2
    step2Title: "Specify Your Location",
    step2Subtitle: "Determine your exact location for automatic selection of the satellite with the best signal level.",
    hybridMap: "Hybrid Coverage Map",
    mapDescription: "Click on the map to choose the exact location. The marker can be dragged. Purple areas indicate the general coverage of satellites with varying signal levels.",
    mapDescription1: "Interactive map shows the combined coverage area of ​​CLAN-TV.",
    loadingMap: "Loading hybrid coverage map...",
    signalLevel: "Signal Level",
    mediumSignal: "41-43 dB - Medium",
    goodSignal: "44-47 dB - Good", 
    excellentSignal: "48-54 dB - Excellent",
    automaticDetection: "Automatic Detection",
    autoDetectionDesc: "Use your device's GPS to accurately determine your coordinates.",
    detectLocation: "Detect Location",
    addressSearch: "Address Search",
    addressSearchDesc: "Enter your address or the name of your locality.",
    address: "address",
    manualCoordinates: "Manual Coordinate Entry",
    latitude: "Latitude (°N/°S)",
    longitude: "Longitude (°E/°W)",
    applyCoordinates: "Apply Coordinates",
    yourLocation: "Your Location",
    addressLabel: "Address:",
    
    // Step 3
    step3Title: "Setup Instructions",
    step3Subtitle: "Detailed instructions for setting up your satellite dish",
    downloadInstructions: "Download Instructions",
    printInstructions: "Print Instructions", 
    shareInstructions: "Share Instructions",
    emailInstructions: "Email Instructions",
    
    // Navigation
    back: "Back",
    next: "Next",
    
    // Errors
    locationError: "Location detection failed",
    coordinatesError: "Invalid coordinates",
    addressError: "Address not found",
    
    // Additional translations
    latitudeLabel: "Latitude:",
    longitudeLabel: "Longitude:",
    addressLabel: "Address:",
    
    // Step 3 translations
    setupReady: "Setup parameters are ready!",
    optimalSettings: "Optimal settings have been calculated for your location",
    satelliteInfo: "Satellite Information",
    satellite: "Satellite:",
    position: "Position:",
    signalLevel: "Signal level:",
    dishSize: "Dish size:",
    yourLocation: "Your Location",
    antennaSettings: "Antenna Settings",
    azimuth: "Azimuth",
    elevation: "Elevation",
    lnbSkew: "LNB Skew",
    rotateHorizontal: "Rotate the antenna in the horizontal plane",
    raiseLower: "Raise or lower the antenna",
    rotateLNB: "Rotate the LNB to the specified angle",
    technicalParameters: "Technical Parameters",
    frequency: "Frequency",
    symbolRate: "Symbol Rate",
    polarization: "Polarization",
    fec: "FEC",
    modulation: "Modulation",
    pilot: "Pilot",
    tip: "Tip:",
    tipText: "For precise adjustment, use a satellite signal finder. Start with the specified angles and adjust the antenna position for the maximum signal level.",
    completeGuide: "Complete Guide to Setting Up a Satellite Dish",
    stepByStep: "Step-by-step instructions for self-installation",
    generalInfo: "General Information",
    generalInfoText: "To receive satellite television, a receiving dish, a converter (LNB), and a satellite receiver are used. Trouble-free viewing is only possible with precise alignment of the dish to the satellite.",
    satDish: "Satellite dish",
    converterLNB: "Converter (LNB)",
    satReceiver: "Satellite receiver",
    recommendedSignalLevel: "Recommended signal level",
    beamLabel: "Beam:",
    locationLabel: "Location",
    recommendProfessionals: "We recommend entrusting the installation of the dish to service professionals with the necessary technical knowledge and equipment.",
    outOfCoverage: "Out of Satellite Coverage",
    outOfCoverageText: "Unfortunately, your location is outside the satellite coverage area. Please check the accuracy of the specified address or select another location.",
    downloadInstructions: "Download Instructions",
    getInstructions: "Get full setup instructions in a convenient format",
    exportData: "Export Data",
    downloadTxt: "Download TXT File",
    print: "Print",
    share: "Share",
    sendEmail: "Send via Email",
    done: "Done!",
    doneText: "Your settings are ready. The instructions include all the necessary parameters for successful satellite dish setup.",
    detecting: "Detecting...",
    locationDetected: "Location detected",
    geolocationNotSupported: "Geolocation is not supported by your browser",
    instructionsTitle: "Turksat Setup Instructions",
    instructionsCopied: "Instructions copied to clipboard!",
    clipboardFailed: "Clipboard copy failed"
    ,
    // Step-by-step setup section
    stepByStepSetupTitle: "Step-by-Step Setup Instructions",
    step0Title: "Preparation and Mounting the Dish",
    step0InstallDish: "Install the dish in the direction of the satellite. Use the interactive map on our website — it will show a line indicating the direction you should aim the dish during installation.",
    step0ChooseLocation: "Choose an elevated location with no obstructions (trees, buildings)",
    step0Amplifier: "For long cables, use a signal amplifier",
    step1Title: "Configuring the Satellite Receiver",
    step1EnterMenu: "Enter the menu of your receiver (satellite set-top box). The receiver can be external or built into the TV (depending on the TV model)",
    step1FindSection: "Find the section \"Channel Search\", \"Manual Search\", \"Installation\" or something similar",
    step1EnterParameters: "Enter the satellite parameters:",
    step1LnbLowBand: "LNB Low Band: specified on the LNB converter",
    step1LnbHighBand: "LNB High Band: specified on the LNB converter",
    step1SignalBars: "The menu will display 2 bars — Signal Level and Signal Quality",
    azimuthAdjustment: "Azimuth Adjustment",
    elevationAdjustment: "Elevation Adjustment",
    lnbAdjustment: "LNB Adjustment",
    step2LoosenBolts: "Loosen the dish mounting bolts",
    clockwise: "clockwise",
    counterclockwise: "counterclockwise",
    relativeToNorth: "relative to north",
    step2MoveLeftRight: "Slowly move the dish left and right while monitoring the signal level",
    step2TightenBolts: "Tighten the bolts when you reach the maximum signal",
    step3RaiseDish: "Raise the dish upward relative to the horizon",
    step3AdjustAngle: "Slowly adjust the angle while monitoring the signal level",
    step3FixPosition: "Fix the position when you reach the maximum signal",
    step4RotateConverter: "Rotate the converter",
    step4AdjustAngle: "Slowly adjust the angle while monitoring the signal level",
    step4FixPosition: "Fix the position when you reach the maximum signal",
    step4OldLnbNote: "For older LNBs, frequency adjustment may be required (see below)",
    troubleshootingOldLnb: "Troubleshooting Old LNB Issues",
    troubleshootingIntro: "If, after adjustment, the signal remains weak, the problem may be with the converter:",
    bestSolutionReplace: "The best solution is to replace the LNB.",
    temporarySolution: "If this is not possible, try this temporary solution:",
    tsStep1: "Go to the receiver menu → Manual Search",
    tsStep2: "Enter the channel parameters (frequency, symbol rate, polarization)",
    tsStep3: "Without saving, change the frequency ±1 MHz while monitoring signal quality",
    tsStep4: "Find the frequency with the maximum signal quality",
    tsStep5: "Save the channel at the adjusted frequency",
    importantNotesTitle: "Important Notes",
    noteQualityCable: "Use a high-quality cable of minimum length",
    noteAmplifierLong: "For long cables (>30m), install a line amplifier",
    noteOldReceiversFirmware: "Older receivers may require firmware updates",
    noteAvoidInterference: "Avoid sources of interference (cordless phones, WiFi routers)",
    noteCheckCorrosion: "Check all connections for corrosion"
  },
  
  ru: {
    // Header
    // Documents (page content)
    privacyDoc: `Политика конфиденциальности\n\nНастоящая Политика конфиденциальности (далее — «Политика») регулирует порядок обработки информации, собираемой на сайте clan-tv.com (далее — «Сайт»), принадлежащем компании CLAN L.L.C-FZ, зарегистрированной по адресу Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E. (далее — «Компания»).\n\n1. Общие положения\n\n1.1. Сайт носит исключительно информационный характер и не предназначен для сбора персональных данных пользователей.\n1.2. На Сайте отсутствуют формы обратной связи, регистрации и иные инструменты, предусматривающие ввод пользователем персональной информации.\n1.3. Единственным способом связи с Компанией является направление электронного письма по адресу help@clan-tv.com.\n1.4. Отправка письма осуществляется пользователем самостоятельно с использованием его почтового клиента, вне Сайта. Компания не имеет доступа к данным, вводимым пользователем при отправке письма.\n\n2. Использование Яндекс.Метрики\n\n2.1. На Сайте используется сервис веб-аналитики «Яндекс.Метрика» для анализа посещаемости и улучшения качества контента.\n2.2. Сервис может собирать обезличенные данные о действиях пользователей с помощью файлов cookie, включая IP-адрес, тип устройства и браузера, приблизительное местоположение и время посещения.\n2.3. Все собираемые данные являются обезличенными и не позволяют идентифицировать конкретного пользователя.\n\n3. Использование файлов cookie\n\n3.1. Сайт использует только те файлы cookie, которые необходимы для работы аналитического инструмента Яндекс.Метрика.\n3.2. Пользователь может отключить использование cookie в настройках браузера.\n\n4. Ответственность\n\n4.1. Компания не несет ответственности за действия пользователей, связанные с самостоятельной отправкой сообщений по электронной почте, а также за использование сторонних ресурсов, ссылки на которые могут быть размещены на Сайте.\n\n5. Контактная информация\n\nПо вопросам, связанным с настоящей Политикой, вы можете обратиться по адресу электронной почты: help@clan-tv.com.`,
    cookiesDoc: `Политика использования файлов cookie\n\nНастоящая Политика использования файлов cookie (далее — «Политика») объясняет, какие файлы cookie применяются на сайте clan-tv.com, принадлежащем компании CLAN L.L.C-FZ, зарегистрированной по адресу Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E. (далее — «Компания»).\n\n1. Что такое cookie\n\nФайлы cookie — это небольшие текстовые файлы, которые сохраняются на устройстве пользователя при посещении сайта. Они позволяют улучшить работу сайта и получать статистическую информацию.\n\n2. Какие cookie используются на Сайте\n\n2.1. Сайт использует исключительно файлы cookie, необходимые для работы системы аналитики Яндекс.Метрика.\n2.2. С их помощью собирается обезличенная информация о действиях пользователей (время посещения, страницы, тип устройства и браузера).\n\n3. Управление cookie\n\n3.1. Пользователь может самостоятельно настроить использование или блокировку cookie в настройках браузера.\n3.2. Отключение cookie может повлиять на корректность работы отдельных функций сайта.`,
    termsDoc: `Условия использования сайта\n\nНастоящие Условия использования (далее — «Условия») определяют порядок использования сайта clan-tv.com, принадлежащего компании CLAN L.L.C-FZ, зарегистрированной по адресу Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E. (далее — «Компания»).\n\n1. Общие положения\n\n1.1. Сайт является информационным ресурсом, предоставляющим сведения о возможностях подключения спутникового телевидения.\n1.2. Вся информация на Сайте представлена исключительно в ознакомительных целях и не является публичной офертой.\n\n2. Ответственность\n\n2.1. Компания не несет ответственности за возможные ошибки в публикуемой информации, а также за последствия, связанные с использованием информации, размещенной на Сайте.\n2.2. Ссылки на сторонние ресурсы приведены исключительно для удобства пользователей, и Компания не несет ответственности за их содержание.\n\n3. Использование данных\n\n3.1. Сайт не осуществляет сбор персональных данных пользователей.\n3.2. Для анализа статистики посещаемости используется сервис Яндекс.Метрика, который обрабатывает обезличенные данные.\n\n4. Контактная информация\n\nПо вопросам, связанным с использованием Сайта, вы можете обратиться по адресу: help@clan-tv.com.`,
    privacyPolicy: "Политика конфиденциальности",
    cookiePolicy: "Политика использования cookie",
    termsOfUse: "Условия использования сайта",
    setup: "Настройка",
    cooperation: "Сотрудничество",
    contacts: "Контакты",
    
    // Main title and description
    mainTitle: "НАСТРОЙКА ПОДКЛЮЧЕНИЯ CLAN-TV",
    mainDescription: "Интерактивный мастер настройки спутникового подключения с автоматическим выбором оптимального спутника.",
    
    // Cooperation page
    ourPartners: "Наши партнёры",
    broadcastArea: "Зона вещания",
    forAdvertisers: "Для рекламодателей",
    emailLabel: "Email",
    messengersLabel: "Мессенджеры",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    tag_news: "Новости",
    tag_entertainment: "Развлекательный",
    tag_documentary: "Документальный",
    tag_series: "Сериалы",
    tag_info: "Познавательный",
    channel_rtr: "РТР-Планета",
    channel_rossia24: "Россия 24",
    channel_ntv_mir: "НТВ Мир",
    channel_ntv_pravo: "НТВ Право",
    channel_ntv_serial: "НТВ Сериал",
    channel_ntv_style: "НТВ Стиль",
    channel_sts: "СТС",
    channel_rentv: "РЕН ТВ",
    channel_peretz: "Перец",
    channel_izvestia: "Известия",
    channel_five: "Пятый канал",
    contactUs: "Свяжитесь с нами любым удобным способом.",
    // Cooperation hero and extras
    coopHeroTitle: "Глобальное вещание российских телеканалов за рубежом",
    coopHeroSubtitle: "Мы представляем эксклюзивную возможность круглосуточного вещания популярных российских телеканалов за пределами России.",
    coopCardCoverage: "Обеспечиваем стабильный и качественный сигнал с охватом 50+ стран на трёх континентах, открывая доступ к многомиллионной русскоязычной и иностранной аудитории.",
    coopCardReliability: "Максимальная надёжность — вещание осуществляется через международные спутники, обеспечивающие стабильный приём даже в отдалённых регионах.",
    coopMapHeading: "Полный список стран включает более 50 государств, что делает нашу платформу одной из самых масштабных для русскоязычного и международного контента.",
    coopMapDesc: "Интерактивная карта показывает объединённую зону покрытия CLAN-TV.",
    coopAdvantagesTitle: "Наши преимущества",
    coopAdvantage1: "✔ Глобальный охват без ограничений – ваш канал смогут смотреть зрители в Европе, Азии, Африке и на Ближнем Востоке;",
    coopAdvantage2: "✔ Лояльная аудитория – более 150 млн русскоязычных зрителей за рубежом;",
    coopAdvantage3: "✔ Техническая надежность – высокое качество трансляции и стабильный сигнал;",
    coopAdvantage4: "✔ Гибкие условия сотрудничества – индивидуальные решения для каналов любого формата.",
    
    // Progress indicators
    step1Description: "Шаг 1 из 3: Автоматический выбор оптимального спутника",
    step2Description: "Шаг 2 из 3: Укажите ваше местоположение", 
    step3Description: "Шаг 3 из 3: Инструкции по настройке",
    
    // Step 1
    step1Title1: "Автоматический выбор спутника",
    step1Subtitle: "Система автоматически выберет оптимальный спутник на основе вашего местоположения.",
    westernBeam: "Западный луч",
    easternBeam: "Восточный луч",
    asianBeam: "Азиатский луч", 
    menaBeam: "БВСА луч",
    westernCoverage: "Покрытие Европы и Северной Африки",
    easternCoverage: "Покрытие Ближнего Востока и Северо-Восточной Африки",
    asianCoverage: "Покрытие Центральной Азии",
    menaCoverage: "Покрытие Ближнего Востока и Северной Африки",
    continue: "Продолжить",
    
    // Step 2
    step2Title: "Укажите ваше местоположение",
    step2Subtitle: "Определите точное местоположение для автоматического выбора спутника с наилучшим уровнем сигнала.",
    hybridMap: "Гибридная карта покрытия",
    mapDescription: "Нажмите на карту, чтобы выбрать точное местоположение. Маркер можно перетаскивать. Фиолетовые области указывают на общее покрытие спутников с различными уровнями сигнала.",
    mapDescription1: "Интерактивная карта показывает объединённую зону покрытия CLAN-TV.",
    loadingMap: "Загрузка гибридной карты покрытия...",
    signalLevel: "Уровень сигнала",
    mediumSignal: "41-43 дБ - Средний",
    goodSignal: "44-47 дБ - Хороший",
    excellentSignal: "48-54 дБ - Отличный", 
    automaticDetection: "Автоматическое определение",
    autoDetectionDesc: "Используйте GPS вашего устройства для точного определения координат.",
    detectLocation: "Определить местоположение",
    addressSearch: "Поиск по адресу",
    addressSearchDesc: "Введите ваш адрес или название населенного пункта.",
    address: "адрес",
    manualCoordinates: "Ручной ввод координат",
    latitude: "Широта (°С/°Ю)",
    longitude: "Долгота (°В/°З)",
    applyCoordinates: "Применить координаты",
    yourLocation: "Ваше местоположение",
    addressLabel: "Адрес:",
    
    // Step 3
    step3Title: "Инструкции по настройке",
    step3Subtitle: "Подробные инструкции по настройке спутниковой антенны",
    downloadInstructions: "Скачать инструкции",
    printInstructions: "Распечатать инструкции",
    shareInstructions: "Поделиться инструкциями", 
    emailInstructions: "Отправить по email",
    
    // Navigation
    back: "Назад",
    next: "Далее",
    
    // Errors
    locationError: "Не удалось определить местоположение",
    coordinatesError: "Неверные координаты",
    addressError: "Адрес не найден",
    
    // Additional translations
    latitudeLabel: "Широта:",
    longitudeLabel: "Долгота:",
    addressLabel: "Адрес:",
    
    // Step 3 translations
    setupReady: "Параметры настройки готовы!",
    optimalSettings: "Оптимальные настройки рассчитаны для вашего местоположения",
    satelliteInfo: "Информация о спутнике",
    satellite: "Спутник:",
    position: "Позиция:",
    signalLevel: "Уровень сигнала:",
    dishSize: "Размер антенны:",
    yourLocation: "Ваше местоположение",
    antennaSettings: "Настройки антенны",
    azimuth: "Азимут",
    elevation: "Угол места",
    lnbSkew: "Наклон LNB",
    rotateHorizontal: "Поверните антенну в горизонтальной плоскости",
    raiseLower: "Поднимите или опустите антенну",
    rotateLNB: "Поверните LNB на указанный угол",
    technicalParameters: "Технические параметры",
    frequency: "Частота",
    symbolRate: "Скорость символов",
    polarization: "Поляризация",
    fec: "FEC",
    modulation: "Модуляция",
    pilot: "Пилот",
    tip: "Совет:",
    tipText: "Для точной настройки используйте индикатор спутникового сигнала. Начните с указанных углов и отрегулируйте положение антенны для максимального уровня сигнала.",
    completeGuide: "Полное руководство по настройке спутниковой антенны",
    stepByStep: "Пошаговые инструкции для самостоятельной установки",
    generalInfo: "Общая информация",
    generalInfoText: "Для приема спутникового телевидения используется приемная антенна, конвертер (LNB) и спутниковый ресивер. Бесперебойный просмотр возможен только при точной настройке антенны на спутник.",
    satDish: "Спутниковая антенна",
    converterLNB: "Конвертер (LNB)",
    satReceiver: "Спутниковый ресивер",
    recommendedSignalLevel: "Рекомендуемый уровень сигнала",
    beamLabel: "Луч:",
    locationLabel: "Местоположение",
    recommendProfessionals: "Рекомендуем доверить установку антенны специалистам сервиса, имеющим необходимые технические знания и оборудование.",
    outOfCoverage: "Вне зоны покрытия спутника",
    outOfCoverageText: "К сожалению, ваше местоположение находится вне зоны покрытия спутника. Пожалуйста, проверьте точность указанного адреса или выберите другое местоположение.",
    downloadInstructions: "Скачать инструкции",
    getInstructions: "Получите полные инструкции по настройке в удобном формате",
    exportData: "Экспорт данных",
    downloadTxt: "Скачать TXT файл",
    print: "Печать",
    share: "Поделиться",
    sendEmail: "Отправить по email",
    done: "Готово!",
    doneText: "Ваши настройки готовы. Инструкции включают все необходимые параметры для успешной настройки спутниковой антенны.",
    detecting: "Определение...",
    locationDetected: "Местоположение определено",
    geolocationNotSupported: "Геолокация не поддерживается вашим браузером",
    instructionsTitle: "Инструкции по настройке Turksat",
    instructionsCopied: "Инструкции скопированы в буфер обмена!",
    clipboardFailed: "Не удалось скопировать в буфер обмена"
    ,
    // Step-by-step setup section
    stepByStepSetupTitle: "Пошаговая инструкция по настройке",
    step0Title: "Подготовка и установка антенны",
    step0InstallDish: "Установите антенну в направлении спутника. Используйте интерактивную карту на нашем сайте — она покажет линию направления, по которой нужно ориентировать антенну при установке.",
    step0ChooseLocation: "Выберите возвышенное место без препятствий (деревья, здания)",
    step0Amplifier: "Для длинных кабелей используйте усилитель сигнала",
    step1Title: "Настройка спутникового ресивера",
    step1EnterMenu: "Зайдите в меню вашего ресивера (спутниковой приставки). Ресивер может быть внешним или встроенным в телевизор (в зависимости от модели)",
    step1FindSection: "Найдите раздел \"Поиск каналов\", \"Ручной поиск\", \"Установка\" или похожий",
    step1EnterParameters: "Введите параметры спутника:",
    step1LnbLowBand: "Нижняя полоса LNB: указана на конвертере",
    step1LnbHighBand: "Верхняя полоса LNB: указана на конвертере",
    step1SignalBars: "В меню отображаются 2 шкалы — Уровень сигнала и Качество сигнала",
    azimuthAdjustment: "Настройка азимута",
    elevationAdjustment: "Настройка угла места",
    lnbAdjustment: "Настройка LNB",
    step2LoosenBolts: "Ослабьте крепежные болты антенны",
    clockwise: "по часовой стрелке",
    counterclockwise: "против часовой стрелки",
    relativeToNorth: "относительно севера",
    step2MoveLeftRight: "Плавно перемещайте антенну влево-вправо, контролируя уровень сигнала",
    step2TightenBolts: "Затяните болты при достижении максимального сигнала",
    step3RaiseDish: "Поднимите антенну относительно горизонта",
    step3AdjustAngle: "Плавно регулируйте угол, контролируя уровень сигнала",
    step3FixPosition: "Зафиксируйте положение при достижении максимального сигнала",
    step4RotateConverter: "Поверните конвертер",
    step4AdjustAngle: "Плавно регулируйте угол, контролируя уровень сигнала",
    step4FixPosition: "Зафиксируйте положение при достижении максимального сигнала",
    step4OldLnbNote: "Для старых LNB может потребоваться подстройка частоты (см. ниже)",
    troubleshootingOldLnb: "Устранение проблем со старым LNB",
    troubleshootingIntro: "Если после настройки сигнал остается слабым, возможно, проблема в конвертере:",
    bestSolutionReplace: "Лучшее решение — заменить LNB.",
    temporarySolution: "Если это невозможно, попробуйте временное решение:",
    tsStep1: "Зайдите в меню ресивера → Ручной поиск",
    tsStep2: "Введите параметры канала (частота, скорость символов, поляризация)",
    tsStep3: "Не сохраняя, изменяйте частоту на ±1 МГц, контролируя качество",
    tsStep4: "Найдите частоту с максимальным качеством сигнала",
    tsStep5: "Сохраните канал на настроенной частоте",
    importantNotesTitle: "Важные заметки",
    noteQualityCable: "Используйте качественный кабель минимальной длины",
    noteAmplifierLong: "Для длинных кабелей (>30м) установите линейный усилитель",
    noteOldReceiversFirmware: "Старые ресиверы могут требовать обновления прошивки",
    noteAvoidInterference: "Избегайте источников помех (радиотелефоны, WiFi роутеры)",
    noteCheckCorrosion: "Проверьте все соединения на коррозию"
  },
  
  tr: {
    // Header
    // Documents (page content)
    privacyDoc: `Gizlilik Politikası\n\nBu Gizlilik Politikası ("Politika"), clan-tv.com web sitesinde ("Site") toplanan bilgilerin işlenme usulünü düzenler. Site, CLAN L.L.C-FZ şirketine aittir ve adresi Meydan Grandstand, 6. kat, Meydan Road, Nad Al Sheba, Dubai, B.A.E.'dir ("Şirket").\n\n1. Genel Hükümler\n\n1.1. Site yalnızca bilgilendirme amaçlıdır ve kullanıcıların kişisel verilerini toplamak amacıyla tasarlanmamıştır.\n1.2. Sitede, kullanıcıların kişisel bilgi girmesini gerektiren geri bildirim formları, kayıt sistemleri veya başka araçlar bulunmamaktadır.\n1.3. Şirketle iletişime geçmenin tek yolu help@clan-tv.com adresine e-posta göndermektir.\n1.4. E-posta, kullanıcı tarafından kendi e-posta istemcisi aracılığıyla, Site dışında bağımsız olarak gönderilir. Şirket, kullanıcının e-posta gönderimi sırasında girdiği verilere erişemez.\n\n2. Yandex.Metrica Kullanımı\n\n2.1. Site, trafiği analiz etmek ve içerik kalitesini iyileştirmek için "Yandex.Metrica" web analitiği hizmetini kullanır.\n2.2. Hizmet, çerezler aracılığıyla IP adresi, cihaz ve tarayıcı türü, yaklaşık konum ve ziyaret zamanı gibi anonimleştirilmiş kullanıcı verilerini toplayabilir.\n2.3. Toplanan tüm veriler anonimdir ve belirli bir kullanıcının kimliğinin tespit edilmesine olanak tanımaz.\n\n3. Çerezlerin Kullanımı\n\n3.1. Site yalnızca Yandex.Metrica analitik aracının çalışması için gerekli olan çerezleri kullanır.\n3.2. Kullanıcı, tarayıcı ayarlarından çerez kullanımını devre dışı bırakabilir.\n\n4. Sorumluluk\n\n4.1. Şirket, kullanıcıların bağımsız olarak e-posta yoluyla mesaj göndermesiyle ilgili eylemlerden ve Sitede yer alan üçüncü taraf bağlantılarının kullanımından sorumlu değildir.\n\n5. İletişim Bilgileri\n\nBu Politika ile ilgili sorularınız için help@clan-tv.com adresinden bizimle iletişime geçebilirsiniz.`,
    cookiesDoc: `Çerez Politikası\n\nBu Çerez Politikası ("Politika"), CLAN L.L.C-FZ şirketine ait olan ve adresi Meydan Grandstand, 6. kat, Meydan Road, Nad Al Sheba, Dubai, B.A.E. olan clan-tv.com web sitesinde ("Site") hangi çerezlerin kullanıldığını açıklar ("Şirket").\n\n1. Çerez Nedir\n\nÇerezler, bir web sitesini ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, sitenin daha iyi çalışmasını sağlar ve istatistiksel bilgiler edinilmesine yardımcı olur.\n\n2. Sitede Hangi Çerezler Kullanılır\n\n2.1. Site, yalnızca Yandex.Metrica analiz sisteminin çalışması için gerekli olan çerezleri kullanır.\n2.2. Bu çerezler, kullanıcı eylemleri hakkında (ziyaret süresi, görüntülenen sayfalar, cihaz ve tarayıcı türü) anonimleştirilmiş bilgiler toplar.\n\n3. Çerezleri Yönetme\n\n3.1. Kullanıcı, tarayıcı ayarlarından çerez kullanımını yapılandırabilir veya engelleyebilir.\n3.2. Çerezlerin devre dışı bırakılması, sitenin bazı işlevlerinin doğru çalışmasını etkileyebilir.`,
    termsDoc: `Kullanım Şartları\n\nBu Kullanım Şartları ("Şartlar"), CLAN L.L.C-FZ şirketine ait olan ve adresi Meydan Grandstand, 6. kat, Meydan Road, Nad Al Sheba, Dubai, B.A.E. olan clan-tv.com web sitesinin ("Site") kullanım kurallarını belirler.\n\n1. Genel Hükümler\n\n1.1. Site, uydu televizyonu bağlantı olanakları hakkında bilgi sağlayan bir bilgi kaynağıdır.\n1.2. Sitedeki tüm bilgiler yalnızca bilgilendirme amaçlıdır ve kamuya açık bir teklif niteliği taşımaz.\n\n2. Sorumluluk\n\n2.1. Şirket, yayımlanan bilgilerdeki olası hatalardan veya Sitede yer alan bilgilerin kullanılmasından doğabilecek sonuçlardan sorumlu değildir.\n2.2. Üçüncü taraf kaynaklara verilen bağlantılar yalnızca kullanıcıların kolaylığı için sunulmuştur ve Şirket bu kaynakların içeriğinden sorumlu değildir.\n\n3. Verilerin Kullanımı\n\n3.1. Site, kullanıcıların kişisel verilerini toplamaz.\n3.2. Ziyaret istatistiklerini analiz etmek amacıyla anonim verileri işleyen Yandex.Metrica hizmeti kullanılmaktadır.\n\n4. İletişim Bilgileri\n\nSite’nin kullanımıyla ilgili sorularınız için help@clan-tv.com adresinden bizimle iletişime geçebilirsiniz.`,
    privacyPolicy: "Gizlilik Politikası",
    cookiePolicy: "Çerez Politikası",
    termsOfUse: "Kullanım Şartları",
    setup: "Kurulum",
    cooperation: "İşbirliği",
    contacts: "İletişim",
    
    // Main title and description
    mainTitle: "CLAN-TV BAĞLANTI KURULUMU",
    mainDescription: "Otomatik optimal uydu seçimi ile interaktif uydu bağlantı kurulum sihirbazı.",
    
    // Cooperation page
    ourPartners: "Ortaklarımız",
    broadcastArea: "Yayın alanı",
    forAdvertisers: "Reklamverenler için",
    emailLabel: "E-posta",
    messengersLabel: "Mesajlaşma",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    tag_news: "Haber",
    tag_entertainment: "Eğlence",
    tag_documentary: "Belgesel",
    tag_series: "Diziler",
    tag_info: "Bilgilendirici",
    channel_rtr: "RTR-Planeta",
    channel_rossia24: "Rossiya 24",
    channel_ntv_mir: "NTV Mir",
    channel_ntv_pravo: "NTV Pravo",
    channel_ntv_serial: "NTV Serial",
    channel_ntv_style: "NTV Style",
    channel_sts: "STS",
    channel_rentv: "REN TV",
    channel_peretz: "Peretz",
    channel_izvestia: "Izvestia",
    channel_five: "Beşinci Kanal",
    contactUs: "Bizimle size uygun herhangi bir yolla iletişime geçin.",
    // Cooperation hero and extras
    coopHeroTitle: "Yurtdışında Rus TV kanallarının küresel yayını",
    coopHeroSubtitle: "Rusya dışında popüler Rus TV kanallarını 7/24 yayınlama konusunda özel bir imkan sunuyoruz.",
    coopCardCoverage: "Üç kıtada 50’den fazla ülkeyi kapsayan istikrarlı ve yüksek kaliteli sinyal sağlayarak milyonlarca Rusça konuşan ve uluslararası izleyiciye erişim sunuyoruz.",
    coopCardReliability: "Maksimum güvenilirlik — yayın, uzak bölgelerde bile stabil alım sağlayan uluslararası uydular üzerinden yapılır.",
    coopMapHeading: "Ülkelerin tam listesi 50’den fazladır ve platformumuzu Rusça ve uluslararası içerik için en geniş kapsamlılardan biri yapar.",
    coopMapDesc: "İnteraktif harita, CLAN-TV’nin birleşik kapsama alanını gösterir.",
    coopAdvantagesTitle: "Avantajlarımız",
    coopAdvantage1: "✔ Sınır tanımayan küresel erişim — kanalınız Avrupa, Asya, Afrika ve Orta Doğu’da izlenebilir.",
    coopAdvantage2: "✔ Sadık izleyici kitlesi — yurtdışında 150 milyondan fazla Rusça konuşan izleyici.",
    coopAdvantage3: "✔ Teknik güvenilirlik — yüksek yayın kalitesi ve stabil sinyal.",
    coopAdvantage4: "✔ Esnek işbirliği koşulları — her formatta kanallar için bireysel çözümler.",
    
    // Progress indicators
    step1Description: "Adım 1/3: Optimal uydunun otomatik seçimi",
    step2Description: "Adım 2/3: Konumunuzu belirtin",
    step3Description: "Adım 3/3: Kurulum talimatları",
    
    // Step 1
    step1Title1: "Otomatik Uydu Seçimi",
    step1Subtitle: "Sistem konumunuza göre optimal uyduyu otomatik olarak seçecektir.",
    westernBeam: "Batı Hüzmesi",
    easternBeam: "Doğu Hüzmesi",
    asianBeam: "Asya Hüzmesi",
    menaBeam: "MENA Hüzmesi",
    westernCoverage: "Avrupa ve Kuzey Afrika kapsamı",
    easternCoverage: "Orta Doğu ve Kuzeydoğu Afrika kapsamı", 
    asianCoverage: "Orta Asya kapsamı",
    menaCoverage: "Orta Doğu ve Kuzey Afrika kapsamı",
    continue: "Devam Et",
    
    // Step 2
    step2Title: "Konumunuzu Belirtin",
    step2Subtitle: "En iyi sinyal seviyesine sahip uydunun otomatik seçimi için tam konumunuzu belirleyin.",
    hybridMap: "Hibrit Kapsama Haritası",
    mapDescription: "Tam konumu seçmek için haritaya tıklayın. İşaretçi sürüklenebilir. Mor alanlar değişen sinyal seviyelerine sahip uyduların genel kapsamasını gösterir.",
    mapDescription1: "İnteraktif harita, CLAN-TV'nin birleşik kapsama alanını göstermektedir.",
    loadingMap: "Hibrit kapsama haritası yükleniyor...",
    signalLevel: "Sinyal Seviyesi",
    mediumSignal: "41-43 dB - Orta",
    goodSignal: "44-47 dB - İyi",
    excellentSignal: "48-54 dB - Mükemmel",
    automaticDetection: "Otomatik Tespit",
    autoDetectionDesc: "Koordinatlarınızı doğru bir şekilde belirlemek için cihazınızın GPS'ini kullanın.",
    detectLocation: "Konumu Tespit Et",
    addressSearch: "Adres Arama",
    addressSearchDesc: "Adresinizi veya yerleşim yerinizin adını girin.",
    address: "adres",
    manualCoordinates: "Manuel Koordinat Girişi",
    latitude: "Enlem (°K/°G)",
    longitude: "Boylam (°D/°B)",
    applyCoordinates: "Koordinatları Uygula",
    yourLocation: "Konumunuz",
    addressLabel: "Adres:",
    
    // Step 3
    step3Title: "Kurulum Talimatları",
    step3Subtitle: "Uydu anteninizi kurmak için detaylı talimatlar",
    downloadInstructions: "Talimatları İndir",
    printInstructions: "Talimatları Yazdır",
    shareInstructions: "Talimatları Paylaş",
    emailInstructions: "E-posta ile Gönder",
    
    // Navigation
    back: "Geri",
    next: "İleri",
    
    // Errors
    locationError: "Konum tespiti başarısız",
    coordinatesError: "Geçersiz koordinatlar",
    addressError: "Adres bulunamadı",
    
    // Additional translations
    latitudeLabel: "Enlem:",
    longitudeLabel: "Boylam:",
    addressLabel: "Adres:",
    
    // Step 3 translations
    setupReady: "Kurulum parametreleri hazır!",
    optimalSettings: "Konumunuz için optimal ayarlar hesaplandı",
    satelliteInfo: "Uydu Bilgileri",
    satellite: "Uydu:",
    position: "Pozisyon:",
    signalLevel: "Sinyal seviyesi:",
    dishSize: "Anten boyutu:",
    yourLocation: "Konumunuz",
    antennaSettings: "Anten Ayarları",
    azimuth: "Azimut",
    elevation: "Yükselme",
    lnbSkew: "LNB Eğimi",
    rotateHorizontal: "Anteni yatay düzlemde döndürün",
    raiseLower: "Anteni yükseltin veya alçaltın",
    rotateLNB: "LNB'yi belirtilen açıya döndürün",
    technicalParameters: "Teknik Parametreler",
    frequency: "Frekans",
    symbolRate: "Sembol Hızı",
    polarization: "Polarizasyon",
    fec: "FEC",
    modulation: "Modülasyon",
    pilot: "Pilot",
    tip: "İpucu:",
    tipText: "Hassas ayar için uydu sinyal bulucu kullanın. Belirtilen açılarla başlayın ve maksimum sinyal seviyesi için anten pozisyonunu ayarlayın.",
    completeGuide: "Uydu Anteni Kurulum Rehberi",
    stepByStep: "Kendi kendine kurulum için adım adım talimatlar",
    generalInfo: "Genel Bilgi",
    generalInfoText: "Uydu televizyonu almak için alıcı anten, dönüştürücü (LNB) ve uydu alıcısı kullanılır. Kesintisiz izleme sadece antenin uyduya doğru hizalanmasıyla mümkündür.",
    satDish: "Uydu anteni",
    converterLNB: "Dönüştürücü (LNB)",
    satReceiver: "Uydu alıcısı",
    recommendedSignalLevel: "Önerilen sinyal seviyesi",
    beamLabel: "Hüzme:",
    locationLabel: "Konum",
    recommendProfessionals: "Anten kurulumunu gerekli teknik bilgi ve ekipmana sahip servis uzmanlarına emanet etmenizi öneririz.",
    outOfCoverage: "Uydu Kapsama Alanı Dışında",
    outOfCoverageText: "Maalesef konumunuz uydu kapsama alanının dışında. Lütfen belirtilen adresin doğruluğunu kontrol edin veya başka bir konum seçin.",
    downloadInstructions: "Talimatları İndir",
    getInstructions: "Kurulum talimatlarını uygun formatta alın",
    exportData: "Veri Dışa Aktar",
    downloadTxt: "TXT Dosyasını İndir",
    print: "Yazdır",
    share: "Paylaş",
    sendEmail: "E-posta ile Gönder",
    done: "Tamamlandı!",
    doneText: "Ayarlarınız hazır. Talimatlar başarılı uydu anteni kurulumu için gerekli tüm parametreleri içerir.",
    detecting: "Tespit ediliyor...",
    locationDetected: "Konum tespit edildi",
    geolocationNotSupported: "Geolocation tarayıcınız tarafından desteklenmiyor",
    instructionsTitle: "Turksat Kurulum Talimatları",
    instructionsCopied: "Talimatlar panoya kopyalandı!",
    clipboardFailed: "Panoya kopyalama başarısız"
    ,
    // Step-by-step setup section
    stepByStepSetupTitle: "Adım Adım Kurulum Talimatları",
    step0Title: "Hazırlık ve Antenin Montajı",
    step0InstallDish: "Anteni uydu yönüne yerleştirin. Web sitemizdeki interaktif haritayı kullanın — kurulum sırasında anteni hangi yöne çevirmeniz gerektiğini gösteren bir çizgi gösterecektir.",
    step0ChooseLocation: "Engelsiz (ağaç, bina olmayan) yükseltilmiş bir yer seçin",
    step0Amplifier: "Uzun kablolar için sinyal yükseltici kullanın",
    step1Title: "Uydu Alıcısının Yapılandırılması",
    step1EnterMenu: "Alıcınızın menüsüne girin. Alıcı harici olabilir veya TV'ye entegre olabilir (modele bağlı olarak)",
    step1FindSection: "\"Kanal Arama\", \"Manuel Arama\", \"Kurulum\" veya benzeri bölümü bulun",
    step1EnterParameters: "Uydu parametrelerini girin:",
    step1LnbLowBand: "LNB Düşük Bant: LNB üzerinde belirtilmiştir",
    step1LnbHighBand: "LNB Yüksek Bant: LNB üzerinde belirtilmiştir",
    step1SignalBars: "Menüde 2 çubuk görünecektir — Sinyal Seviyesi ve Sinyal Kalitesi",
    azimuthAdjustment: "Azimut Ayarı",
    elevationAdjustment: "Yükselme Ayarı",
    lnbAdjustment: "LNB Ayarı",
    step2LoosenBolts: "Antenin montaj cıvatalarını gevşetin",
    clockwise: "saat yönünde",
    counterclockwise: "saat yönünün tersine",
    relativeToNorth: "kuzeye göre",
    step2MoveLeftRight: "Sinyal seviyesini izleyerek anteni yavaşça sağa-sola hareket ettirin",
    step2TightenBolts: "Maksimum sinyale ulaşıldığında cıvataları sıkın",
    step3RaiseDish: "Antenin yüksekliğini ufka göre artırın",
    step3AdjustAngle: "Sinyali izleyerek açıyı yavaşça ayarlayın",
    step3FixPosition: "Maksimum sinyale ulaşıldığında konumu sabitleyin",
    step4RotateConverter: "Konvertörü döndürün",
    step4AdjustAngle: "Sinyali izleyerek açıyı yavaşça ayarlayın",
    step4FixPosition: "Maksimum sinyale ulaşıldığında konumu sabitleyin",
    step4OldLnbNote: "Eski LNB'ler için frekans ayarı gerekebilir (aşağıya bakın)",
    troubleshootingOldLnb: "Eski LNB Sorunlarını Giderme",
    troubleshootingIntro: "Ayarlamadan sonra sinyal zayıf kalırsa sorun konvertörde olabilir:",
    bestSolutionReplace: "En iyi çözüm LNB'yi değiştirmektir.",
    temporarySolution: "Bu mümkün değilse, aşağıdaki geçici çözümü deneyin:",
    tsStep1: "Alıcı menüsüne gidin → Manuel Arama",
    tsStep2: "Kanal parametrelerini girin (frekans, sembol hızı, polarizasyon)",
    tsStep3: "Kaydetmeden, sinyal kalitesini izleyerek frekansı ±1 MHz değiştirin",
    tsStep4: "Maksimum sinyal kalitesine sahip frekansı bulun",
    tsStep5: "Kanalı ayarlanan frekansta kaydedin",
    importantNotesTitle: "Önemli Notlar",
    noteQualityCable: "Minimum uzunlukta yüksek kaliteli bir kablo kullanın",
    noteAmplifierLong: ">30 m kablolar için hat yükseltici takın",
    noteOldReceiversFirmware: "Eski alıcıların yazılım güncellemesi gerekebilir",
    noteAvoidInterference: "Parazit kaynaklarından kaçının (telsiz telefonlar, WiFi yönlendiriciler)",
    noteCheckCorrosion: "Tüm bağlantıları korozyon açısından kontrol edin"
  },

  ar: {
    // Header
    setup: "الإعداد",
    cooperation: "التعاون",
    contacts: "اتصل بنا",

    // Main title and description
    mainTitle: "إعداد اتصال CLAN-TV",
    mainDescription: "معالج تفاعلي لإعداد الاتصال الفضائي مع الاختيار التلقائي للقمر الصناعي الأمثل.",

    // Cooperation page
    ourPartners: "شركاؤنا",
    broadcastArea: "منطقة البث",
    forAdvertisers: "للمعلنين",
    emailLabel: "البريد الإلكتروني",
    messengersLabel: "تطبيقات المراسلة",
    telegram: "تيليجرام",
    whatsapp: "واتساب",
    privacyPolicy: "سياسة الخصوصية",
    cookiePolicy: "سياسة ملفات تعريف الارتباط",
    termsOfUse: "شروط الاستخدام",

    // Documents (page content)
    privacyDoc: `سياسة الخصوصية\n\nتنظم سياسة الخصوصية هذه ("السياسة") إجراءات معالجة المعلومات المجمعة على موقع clan-tv.com ("الموقع")، المملوك لشركة CLAN L.L.C-FZ، المسجلة في Meydan Grandstand، الطابق السادس، Meydan Road، ند الشبا، دبي، الإمارات العربية المتحدة ("الشركة").\n\n1. أحكام عامة\n\n1.1. الموقع لأغراض إعلامية فقط وليس مخصصاً لجمع البيانات الشخصية للمستخدمين.\n1.2. لا يحتوي الموقع على نماذج ملاحظات أو تسجيل أو أي أدوات أخرى تتطلب إدخال معلومات شخصية.\n1.3. الطريقة الوحيدة للتواصل مع الشركة هي إرسال بريد إلكتروني إلى help@clan-tv.com.\n1.4. يتم إرسال البريد الإلكتروني من قبل المستخدم بشكل مستقل باستخدام عميل البريد الإلكتروني الخاص به، خارج الموقع.\n\n2. استخدام Yandex.Metrica\n\n2.1. يستخدم الموقع خدمة تحليلات الويب "Yandex.Metrica" لتحليل حركة المرور وتحسين جودة المحتوى.\n2.2. قد تجمع الخدمة بيانات مجهولة الهوية عن إجراءات المستخدمين باستخدام ملفات تعريف الارتباط.\n2.3. جميع البيانات المجمعة مجهولة الهوية ولا تسمح بتحديد هوية مستخدم معين.\n\n3. استخدام ملفات تعريف الارتباط\n\n3.1. يستخدم الموقع فقط ملفات تعريف الارتباط الضرورية لعمل أداة تحليلات Yandex.Metrica.\n3.2. يمكن للمستخدم تعطيل استخدام ملفات تعريف الارتباط في إعدادات المتصفح.\n\n4. المسؤولية\n\n4.1. الشركة غير مسؤولة عن إجراءات المستخدمين المتعلقة بإرسال رسائل البريد الإلكتروني بشكل مستقل.\n\n5. معلومات الاتصال\n\nلأي أسئلة تتعلق بهذه السياسة، يمكنكم التواصل معنا على help@clan-tv.com.`,
    cookiesDoc: `سياسة ملفات تعريف الارتباط\n\nتوضح سياسة ملفات تعريف الارتباط هذه ("السياسة") ملفات تعريف الارتباط المستخدمة على موقع clan-tv.com، المملوك لشركة CLAN L.L.C-FZ، المسجلة في Meydan Grandstand، الطابق السادس، Meydan Road، ند الشبا، دبي، الإمارات العربية المتحدة ("الشركة").\n\n1. ما هي ملفات تعريف الارتباط\n\nملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهاز المستخدم عند زيارة موقع ويب.\n\n2. ملفات تعريف الارتباط المستخدمة على الموقع\n\n2.1. يستخدم الموقع فقط ملفات تعريف الارتباط الضرورية لعمل نظام تحليلات Yandex.Metrica.\n2.2. تجمع هذه الملفات معلومات مجهولة الهوية عن إجراءات المستخدمين.\n\n3. إدارة ملفات تعريف الارتباط\n\n3.1. يمكن للمستخدم تكوين أو حظر استخدام ملفات تعريف الارتباط في إعدادات المتصفح.\n3.2. قد يؤثر تعطيل ملفات تعريف الارتباط على الأداء الصحيح لبعض وظائف الموقع.`,
    termsDoc: `شروط الاستخدام\n\nتحدد شروط الاستخدام هذه ("الشروط") قواعد استخدام موقع clan-tv.com، المملوك لشركة CLAN L.L.C-FZ، المسجلة في Meydan Grandstand، الطابق السادس، Meydan Road، ند الشبا، دبي، الإمارات العربية المتحدة ("الشركة").\n\n1. أحكام عامة\n\n1.1. الموقع هو مورد معلوماتي يوفر تفاصيل حول إمكانيات توصيل خدمات التلفزيون الفضائي.\n1.2. جميع المعلومات على الموقع مقدمة لأغراض إعلامية فقط.\n\n2. المسؤولية\n\n2.1. الشركة غير مسؤولة عن الأخطاء المحتملة في المعلومات المنشورة.\n2.2. الروابط إلى موارد الطرف الثالث مقدمة فقط لراحة المستخدمين.\n\n3. استخدام البيانات\n\n3.1. لا يجمع الموقع البيانات الشخصية للمستخدمين.\n3.2. لتحليل إحصائيات حركة المرور، يتم استخدام خدمة Yandex.Metrica.\n\n4. معلومات الاتصال\n\nلأي أسئلة تتعلق باستخدام الموقع، يمكنكم التواصل معنا على help@clan-tv.com.`,
    tag_news: "أخبار",
    tag_entertainment: "ترفيه",
    tag_documentary: "وثائقي",
    tag_series: "مسلسلات",
    tag_info: "معلوماتي",
    channel_rtr: "RTR-Planeta",
    channel_rossia24: "Rossiya 24",
    channel_ntv_mir: "NTV Mir",
    channel_ntv_pravo: "NTV Pravo",
    channel_ntv_serial: "NTV Serial",
    channel_ntv_style: "NTV Style",
    channel_sts: "STS",
    channel_rentv: "REN TV",
    channel_peretz: "Peretz",
    channel_izvestia: "Izvestia",
    channel_five: "القناة الخامسة",
    contactUs: "تواصل معنا بأي طريقة مناسبة.",
    // Cooperation hero and extras
    coopHeroTitle: "البث العالمي للقنوات التلفزيونية الروسية في الخارج",
    coopHeroSubtitle: "نقدم فرصة حصرية للبث على مدار الساعة للقنوات التلفزيونية الروسية الشهيرة خارج روسيا.",
    coopCardCoverage: "نوفر إشارة مستقرة وعالية الجودة تغطي أكثر من 50 دولة عبر ثلاث قارات، للوصول إلى ملايين المشاهدين الناطقين بالروسية والدوليين.",
    coopCardReliability: "أقصى موثوقية — يتم البث عبر أقمار صناعية دولية تضمن استقبالاً مستقراً حتى في المناطق النائية.",
    coopMapHeading: "تضم القائمة الكاملة أكثر من 50 دولة، مما يجعل منصتنا واحدة من أكبر المنصات للمحتوى الروسي والدولي.",
    coopMapDesc: "تُظهر الخريطة التفاعلية منطقة التغطية المجمعة لـ CLAN-TV.",
    coopAdvantagesTitle: "مزايانا",
    coopAdvantage1: "✔ وصول عالمي بلا حدود — يمكن مشاهدة قناتك في أوروبا وآسيا وأفريقيا والشرق الأوسط.",
    coopAdvantage2: "✔ جمهور وفي — أكثر من 150 مليون مشاهد ناطق بالروسية يعيشون في الخارج.",
    coopAdvantage3: "✔ موثوقية تقنية — جودة بث عالية وإشارة مستقرة.",
    coopAdvantage4: "✔ شروط شراكة مرنة — حلول مخصصة للقنوات بأي تنسيق.",

    // Progress indicators
    step1Description: "الخطوة 1 من 3: الاختيار التلقائي للقمر الصناعي الأمثل",
    step2Description: "الخطوة 2 من 3: حدد موقعك",
    step3Description: "الخطوة 3 من 3: تعليمات الإعداد",

    // Step 1
    step1Title1: "الاختيار التلقائي للقمر الصناعي",
    step1Subtitle: "سيختار النظام تلقائياً القمر الصناعي الأمثل بناءً على موقعك.",
    westernBeam: "الحزمة الغربية",
    easternBeam: "الحزمة الشرقية",
    asianBeam: "الحزمة الآسيوية",
    menaBeam: "حزمة الشرق الأوسط وشمال أفريقيا",
    westernCoverage: "تغطية أوروبا وشمال أفريقيا",
    easternCoverage: "تغطية الشرق الأوسط وشمال شرق أفريقيا",
    asianCoverage: "تغطية آسيا الوسطى",
    menaCoverage: "تغطية الشرق الأوسط وشمال أفريقيا",
    continue: "متابعة",

    // Step 2
    step2Title: "حدد موقعك",
    step2Subtitle: "حدد موقعك الدقيق للاختيار التلقائي للقمر الصناعي ذي أفضل مستوى إشارة.",
    hybridMap: "خريطة التغطية الهجينة",
    mapDescription: "انقر على الخريطة لاختيار الموقع الدقيق. يمكن سحب العلامة. تشير المناطق البنفسجية إلى التغطية العامة للأقمار الصناعية بمستويات إشارة متفاوتة.",
    mapDescription1: "تُظهر الخريطة التفاعلية منطقة التغطية المجمعة لـ CLAN-TV.",
    loadingMap: "جارٍ تحميل خريطة التغطية الهجينة...",
    signalLevel: "مستوى الإشارة",
    mediumSignal: "41-43 ديسيبل - متوسط",
    goodSignal: "44-47 ديسيبل - جيد",
    excellentSignal: "48-54 ديسيبل - ممتاز",
    automaticDetection: "الكشف التلقائي",
    autoDetectionDesc: "استخدم نظام تحديد المواقع (GPS) في جهازك لتحديد إحداثياتك بدقة.",
    detectLocation: "تحديد الموقع",
    addressSearch: "البحث بالعنوان",
    addressSearchDesc: "أدخل عنوانك أو اسم منطقتك.",
    address: "العنوان",
    manualCoordinates: "إدخال الإحداثيات يدوياً",
    latitude: "خط العرض (°شمال/°جنوب)",
    longitude: "خط الطول (°شرق/°غرب)",
    applyCoordinates: "تطبيق الإحداثيات",
    yourLocation: "موقعك",
    addressLabel: "العنوان:",

    // Step 3
    step3Title: "تعليمات الإعداد",
    step3Subtitle: "تعليمات مفصلة لإعداد طبق القمر الصناعي",
    downloadInstructions: "تحميل التعليمات",
    printInstructions: "طباعة التعليمات",
    shareInstructions: "مشاركة التعليمات",
    emailInstructions: "إرسال عبر البريد الإلكتروني",

    // Navigation
    back: "رجوع",
    next: "التالي",

    // Errors
    locationError: "فشل تحديد الموقع",
    coordinatesError: "إحداثيات غير صالحة",
    addressError: "لم يتم العثور على العنوان",

    // Additional translations
    latitudeLabel: "خط العرض:",
    longitudeLabel: "خط الطول:",

    // Step 3 translations
    setupReady: "معلمات الإعداد جاهزة!",
    optimalSettings: "تم حساب الإعدادات المثلى لموقعك",
    satelliteInfo: "معلومات القمر الصناعي",
    satellite: "القمر الصناعي:",
    position: "الموضع:",
    dishSize: "حجم الطبق:",
    antennaSettings: "إعدادات الهوائي",
    azimuth: "السمت",
    elevation: "الارتفاع",
    lnbSkew: "ميل LNB",
    rotateHorizontal: "قم بتدوير الهوائي في المستوى الأفقي",
    raiseLower: "ارفع أو اخفض الهوائي",
    rotateLNB: "قم بتدوير LNB إلى الزاوية المحددة",
    technicalParameters: "المعلمات التقنية",
    frequency: "التردد",
    symbolRate: "معدل الرموز",
    polarization: "الاستقطاب",
    fec: "FEC",
    modulation: "التعديل",
    pilot: "الطيار",
    tip: "نصيحة:",
    tipText: "للضبط الدقيق، استخدم مكتشف إشارة القمر الصناعي. ابدأ بالزوايا المحددة واضبط موضع الهوائي للحصول على أقصى مستوى إشارة.",
    completeGuide: "الدليل الكامل لإعداد طبق القمر الصناعي",
    stepByStep: "تعليمات خطوة بخطوة للتركيب الذاتي",
    generalInfo: "معلومات عامة",
    generalInfoText: "لاستقبال التلفزيون الفضائي، يتم استخدام طبق استقبال ومحول (LNB) وجهاز استقبال فضائي. المشاهدة بدون انقطاع ممكنة فقط مع المحاذاة الدقيقة للطبق مع القمر الصناعي.",
    satDish: "طبق القمر الصناعي",
    converterLNB: "المحول (LNB)",
    satReceiver: "جهاز الاستقبال الفضائي",
    recommendedSignalLevel: "مستوى الإشارة الموصى به",
    beamLabel: "الحزمة:",
    locationLabel: "الموقع",
    recommendProfessionals: "نوصي بتكليف متخصصي الخدمة الذين يمتلكون المعرفة التقنية والمعدات اللازمة بتركيب الطبق.",
    outOfCoverage: "خارج نطاق تغطية القمر الصناعي",
    outOfCoverageText: "للأسف، موقعك خارج منطقة تغطية القمر الصناعي. يرجى التحقق من دقة العنوان المحدد أو اختيار موقع آخر.",
    getInstructions: "احصل على تعليمات الإعداد الكاملة بتنسيق مناسب",
    exportData: "تصدير البيانات",
    downloadTxt: "تحميل ملف TXT",
    print: "طباعة",
    share: "مشاركة",
    sendEmail: "إرسال عبر البريد الإلكتروني",
    done: "تم!",
    doneText: "إعداداتك جاهزة. تتضمن التعليمات جميع المعلمات اللازمة لإعداد طبق القمر الصناعي بنجاح.",
    detecting: "جارٍ التحديد...",
    locationDetected: "تم تحديد الموقع",
    geolocationNotSupported: "تحديد الموقع الجغرافي غير مدعوم في متصفحك",
    instructionsTitle: "تعليمات إعداد Turksat",
    instructionsCopied: "تم نسخ التعليمات إلى الحافظة!",
    clipboardFailed: "فشل النسخ إلى الحافظة",

    // Step-by-step setup section
    stepByStepSetupTitle: "تعليمات الإعداد خطوة بخطوة",
    step0Title: "التحضير وتركيب الطبق",
    step0InstallDish: "قم بتركيب الطبق في اتجاه القمر الصناعي. استخدم الخريطة التفاعلية على موقعنا — ستعرض خطاً يشير إلى الاتجاه الذي يجب توجيه الطبق إليه أثناء التركيب.",
    step0ChooseLocation: "اختر مكاناً مرتفعاً بدون عوائق (أشجار، مبانٍ)",
    step0Amplifier: "للكابلات الطويلة، استخدم مضخم إشارة",
    step1Title: "تكوين جهاز الاستقبال الفضائي",
    step1EnterMenu: "ادخل قائمة جهاز الاستقبال الخاص بك. يمكن أن يكون الجهاز خارجياً أو مدمجاً في التلفزيون (حسب الطراز)",
    step1FindSection: "ابحث عن قسم \"البحث عن القنوات\" أو \"البحث اليدوي\" أو \"التثبيت\" أو ما شابه",
    step1EnterParameters: "أدخل معلمات القمر الصناعي:",
    step1LnbLowBand: "النطاق المنخفض لـ LNB: محدد على محول LNB",
    step1LnbHighBand: "النطاق العالي لـ LNB: محدد على محول LNB",
    step1SignalBars: "ستظهر في القائمة شريطان — مستوى الإشارة وجودة الإشارة",
    azimuthAdjustment: "ضبط السمت",
    elevationAdjustment: "ضبط الارتفاع",
    lnbAdjustment: "ضبط LNB",
    step2LoosenBolts: "فك براغي تثبيت الطبق",
    clockwise: "باتجاه عقارب الساعة",
    counterclockwise: "عكس اتجاه عقارب الساعة",
    relativeToNorth: "بالنسبة للشمال",
    step2MoveLeftRight: "حرّك الطبق ببطء يميناً ويساراً مع مراقبة مستوى الإشارة",
    step2TightenBolts: "أحكم البراغي عند الوصول إلى أقصى إشارة",
    step3RaiseDish: "ارفع الطبق للأعلى بالنسبة للأفق",
    step3AdjustAngle: "اضبط الزاوية ببطء مع مراقبة مستوى الإشارة",
    step3FixPosition: "ثبّت الموضع عند الوصول إلى أقصى إشارة",
    step4RotateConverter: "قم بتدوير المحول",
    step4AdjustAngle: "اضبط الزاوية ببطء مع مراقبة مستوى الإشارة",
    step4FixPosition: "ثبّت الموضع عند الوصول إلى أقصى إشارة",
    step4OldLnbNote: "بالنسبة لأجهزة LNB القديمة، قد يكون ضبط التردد مطلوباً (انظر أدناه)",
    troubleshootingOldLnb: "استكشاف مشاكل LNB القديم وإصلاحها",
    troubleshootingIntro: "إذا بقيت الإشارة ضعيفة بعد الضبط، فقد تكون المشكلة في المحول:",
    bestSolutionReplace: "الحل الأفضل هو استبدال LNB.",
    temporarySolution: "إذا لم يكن ذلك ممكناً، جرّب هذا الحل المؤقت:",
    tsStep1: "اذهب إلى قائمة جهاز الاستقبال ← البحث اليدوي",
    tsStep2: "أدخل معلمات القناة (التردد، معدل الرموز، الاستقطاب)",
    tsStep3: "بدون الحفظ، غيّر التردد ±1 ميجاهرتز مع مراقبة جودة الإشارة",
    tsStep4: "ابحث عن التردد ذي أعلى جودة إشارة",
    tsStep5: "احفظ القناة على التردد المضبوط",
    importantNotesTitle: "ملاحظات مهمة",
    noteQualityCable: "استخدم كابلاً عالي الجودة بأقل طول ممكن",
    noteAmplifierLong: "للكابلات الطويلة (أكثر من 30 متر)، قم بتركيب مضخم خطي",
    noteOldReceiversFirmware: "قد تحتاج أجهزة الاستقبال القديمة إلى تحديث البرامج الثابتة",
    noteAvoidInterference: "تجنب مصادر التداخل (الهواتف اللاسلكية، أجهزة توجيه WiFi)",
    noteCheckCorrosion: "تحقق من جميع التوصيلات بحثاً عن التآكل"
  },

  de: {
    // Header
    setup: "Einrichtung",
    cooperation: "Kooperation",
    contacts: "Kontakt",

    // Main title and description
    mainTitle: "CLAN-TV VERBINDUNGSEINRICHTUNG",
    mainDescription: "Interaktiver Assistent zur Einrichtung der Satellitenverbindung mit automatischer Auswahl des optimalen Satelliten.",

    // Cooperation page
    ourPartners: "Unsere Partner",
    broadcastArea: "Sendegebiet",
    forAdvertisers: "Für Werbetreibende",
    emailLabel: "E-Mail",
    messengersLabel: "Messenger",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    privacyPolicy: "Datenschutzrichtlinie",
    cookiePolicy: "Cookie-Richtlinie",
    termsOfUse: "Nutzungsbedingungen",

    // Documents (page content)
    privacyDoc: `Datenschutzrichtlinie\n\nDiese Datenschutzrichtlinie ("Richtlinie") regelt das Verfahren zur Verarbeitung von Informationen, die auf der Website clan-tv.com ("Website") gesammelt werden, die der CLAN L.L.C-FZ gehört, registriert unter Meydan Grandstand, 6. Etage, Meydan Road, Nad Al Sheba, Dubai, V.A.E. ("Unternehmen").\n\n1. Allgemeine Bestimmungen\n\n1.1. Die Website dient ausschließlich Informationszwecken und ist nicht zur Erfassung personenbezogener Daten der Nutzer bestimmt.\n1.2. Die Website enthält keine Feedback-Formulare, Registrierungen oder andere Tools, die die Eingabe persönlicher Informationen erfordern.\n1.3. Die einzige Möglichkeit, das Unternehmen zu kontaktieren, ist das Senden einer E-Mail an help@clan-tv.com.\n1.4. Die E-Mail wird vom Nutzer eigenständig über seinen eigenen E-Mail-Client außerhalb der Website gesendet.\n\n2. Verwendung von Yandex.Metrica\n\n2.1. Die Website verwendet den Webanalysedienst "Yandex.Metrica" zur Analyse des Datenverkehrs und zur Verbesserung der Inhaltsqualität.\n2.2. Der Dienst kann anonymisierte Daten über Nutzeraktionen mithilfe von Cookies erfassen.\n2.3. Alle erhobenen Daten sind anonymisiert und ermöglichen keine Identifizierung eines bestimmten Nutzers.\n\n3. Verwendung von Cookies\n\n3.1. Die Website verwendet nur solche Cookies, die für den Betrieb des Analysetools Yandex.Metrica erforderlich sind.\n3.2. Der Nutzer kann die Verwendung von Cookies in seinen Browsereinstellungen deaktivieren.\n\n4. Haftung\n\n4.1. Das Unternehmen haftet nicht für Nutzeraktionen im Zusammenhang mit dem eigenständigen Versenden von E-Mail-Nachrichten.\n\n5. Kontaktinformationen\n\nBei Fragen zu dieser Richtlinie können Sie uns unter help@clan-tv.com kontaktieren.`,
    cookiesDoc: `Cookie-Richtlinie\n\nDiese Cookie-Richtlinie ("Richtlinie") erläutert, welche Cookies auf der Website clan-tv.com verwendet werden, die der CLAN L.L.C-FZ gehört, registriert unter Meydan Grandstand, 6. Etage, Meydan Road, Nad Al Sheba, Dubai, V.A.E. ("Unternehmen").\n\n1. Was sind Cookies\n\nCookies sind kleine Textdateien, die auf dem Gerät eines Nutzers gespeichert werden, wenn er eine Website besucht.\n\n2. Welche Cookies werden auf der Website verwendet\n\n2.1. Die Website verwendet nur Cookies, die für den Betrieb des Analysesystems Yandex.Metrica erforderlich sind.\n2.2. Diese Cookies erfassen anonymisierte Informationen über Nutzeraktionen.\n\n3. Verwaltung von Cookies\n\n3.1. Der Nutzer kann die Verwendung von Cookies in den Browsereinstellungen konfigurieren oder blockieren.\n3.2. Das Deaktivieren von Cookies kann die korrekte Funktion bestimmter Website-Funktionen beeinträchtigen.`,
    termsDoc: `Nutzungsbedingungen\n\nDiese Nutzungsbedingungen ("Bedingungen") legen die Regeln für die Nutzung der Website clan-tv.com fest, die der CLAN L.L.C-FZ gehört, registriert unter Meydan Grandstand, 6. Etage, Meydan Road, Nad Al Sheba, Dubai, V.A.E. ("Unternehmen").\n\n1. Allgemeine Bestimmungen\n\n1.1. Die Website ist eine Informationsressource, die Details über die Möglichkeiten der Satellitenfernsehverbindung bietet.\n1.2. Alle Informationen auf der Website dienen ausschließlich Informationszwecken.\n\n2. Haftung\n\n2.1. Das Unternehmen haftet nicht für mögliche Fehler in den veröffentlichten Informationen.\n2.2. Links zu Drittressourcen werden ausschließlich zur Bequemlichkeit der Nutzer bereitgestellt.\n\n3. Datenverwendung\n\n3.1. Die Website erhebt keine personenbezogenen Daten der Nutzer.\n3.2. Zur Analyse der Website-Besuchsstatistiken wird der Dienst Yandex.Metrica verwendet.\n\n4. Kontaktinformationen\n\nBei Fragen zur Nutzung der Website können Sie uns unter help@clan-tv.com kontaktieren.`,
    tag_news: "Nachrichten",
    tag_entertainment: "Unterhaltung",
    tag_documentary: "Dokumentation",
    tag_series: "Serien",
    tag_info: "Informativ",
    channel_rtr: "RTR-Planeta",
    channel_rossia24: "Rossiya 24",
    channel_ntv_mir: "NTV Mir",
    channel_ntv_pravo: "NTV Pravo",
    channel_ntv_serial: "NTV Serial",
    channel_ntv_style: "NTV Style",
    channel_sts: "STS",
    channel_rentv: "REN TV",
    channel_peretz: "Peretz",
    channel_izvestia: "Izvestia",
    channel_five: "Kanal Fünf",
    contactUs: "Kontaktieren Sie uns auf jede bequeme Weise.",
    // Cooperation hero and extras
    coopHeroTitle: "Globale Ausstrahlung russischer TV-Kanäle im Ausland",
    coopHeroSubtitle: "Wir bieten eine exklusive Möglichkeit zur 24/7-Ausstrahlung populärer russischer TV-Kanäle außerhalb Russlands.",
    coopCardCoverage: "Wir bieten ein stabiles, hochwertiges Signal, das über 50 Länder auf drei Kontinenten abdeckt und Millionen russischsprachiger und internationaler Zuschauer erreicht.",
    coopCardReliability: "Maximale Zuverlässigkeit — die Ausstrahlung erfolgt über internationale Satelliten, die einen stabilen Empfang auch in abgelegenen Regionen gewährleisten.",
    coopMapHeading: "Die vollständige Länderliste umfasst mehr als 50 Staaten, was unsere Plattform zu einer der größten für russischsprachige und internationale Inhalte macht.",
    coopMapDesc: "Die interaktive Karte zeigt das kombinierte Abdeckungsgebiet von CLAN-TV.",
    coopAdvantagesTitle: "Unsere Vorteile",
    coopAdvantage1: "✔ Globale Reichweite ohne Grenzen — Ihr Kanal kann in Europa, Asien, Afrika und im Nahen Osten empfangen werden.",
    coopAdvantage2: "✔ Treues Publikum — über 150 Millionen russischsprachige Zuschauer im Ausland.",
    coopAdvantage3: "✔ Technische Zuverlässigkeit — hohe Sendequalität und stabiles Signal.",
    coopAdvantage4: "✔ Flexible Partnerschaftsbedingungen — maßgeschneiderte Lösungen für Kanäle jedes Formats.",

    // Progress indicators
    step1Description: "Schritt 1 von 3: Automatische Auswahl des optimalen Satelliten",
    step2Description: "Schritt 2 von 3: Geben Sie Ihren Standort an",
    step3Description: "Schritt 3 von 3: Einrichtungsanleitung",

    // Step 1
    step1Title1: "Automatische Satellitenauswahl",
    step1Subtitle: "Das System wählt automatisch den optimalen Satelliten basierend auf Ihrem Standort.",
    westernBeam: "Weststrahl",
    easternBeam: "Oststrahl",
    asianBeam: "Asienstrahl",
    menaBeam: "MENA-Strahl",
    westernCoverage: "Abdeckung von Europa und Nordafrika",
    easternCoverage: "Abdeckung des Nahen Ostens und Nordostafrikas",
    asianCoverage: "Abdeckung Zentralasiens",
    menaCoverage: "Abdeckung des Nahen Ostens und Nordafrikas",
    continue: "Weiter",

    // Step 2
    step2Title: "Geben Sie Ihren Standort an",
    step2Subtitle: "Bestimmen Sie Ihren genauen Standort für die automatische Auswahl des Satelliten mit dem besten Signalpegel.",
    hybridMap: "Hybride Abdeckungskarte",
    mapDescription: "Klicken Sie auf die Karte, um den genauen Standort auszuwählen. Der Marker kann gezogen werden. Violette Bereiche zeigen die allgemeine Abdeckung der Satelliten mit verschiedenen Signalpegeln an.",
    mapDescription1: "Die interaktive Karte zeigt das kombinierte Abdeckungsgebiet von CLAN-TV.",
    loadingMap: "Hybride Abdeckungskarte wird geladen...",
    signalLevel: "Signalpegel",
    mediumSignal: "41-43 dB - Mittel",
    goodSignal: "44-47 dB - Gut",
    excellentSignal: "48-54 dB - Ausgezeichnet",
    automaticDetection: "Automatische Erkennung",
    autoDetectionDesc: "Verwenden Sie das GPS Ihres Geräts, um Ihre Koordinaten genau zu bestimmen.",
    detectLocation: "Standort erkennen",
    addressSearch: "Adresssuche",
    addressSearchDesc: "Geben Sie Ihre Adresse oder den Namen Ihres Ortes ein.",
    address: "Adresse",
    manualCoordinates: "Manuelle Koordinateneingabe",
    latitude: "Breitengrad (°N/°S)",
    longitude: "Längengrad (°O/°W)",
    applyCoordinates: "Koordinaten anwenden",
    yourLocation: "Ihr Standort",
    addressLabel: "Adresse:",

    // Step 3
    step3Title: "Einrichtungsanleitung",
    step3Subtitle: "Detaillierte Anleitung zur Einrichtung Ihrer Satellitenschüssel",
    downloadInstructions: "Anleitung herunterladen",
    printInstructions: "Anleitung drucken",
    shareInstructions: "Anleitung teilen",
    emailInstructions: "Per E-Mail senden",

    // Navigation
    back: "Zurück",
    next: "Weiter",

    // Errors
    locationError: "Standorterkennung fehlgeschlagen",
    coordinatesError: "Ungültige Koordinaten",
    addressError: "Adresse nicht gefunden",

    // Additional translations
    latitudeLabel: "Breitengrad:",
    longitudeLabel: "Längengrad:",

    // Step 3 translations
    setupReady: "Einrichtungsparameter sind bereit!",
    optimalSettings: "Optimale Einstellungen wurden für Ihren Standort berechnet",
    satelliteInfo: "Satelliteninformationen",
    satellite: "Satellit:",
    position: "Position:",
    dishSize: "Schüsselgröße:",
    antennaSettings: "Antenneneinstellungen",
    azimuth: "Azimut",
    elevation: "Elevation",
    lnbSkew: "LNB-Neigung",
    rotateHorizontal: "Drehen Sie die Antenne in der horizontalen Ebene",
    raiseLower: "Heben oder senken Sie die Antenne",
    rotateLNB: "Drehen Sie das LNB auf den angegebenen Winkel",
    technicalParameters: "Technische Parameter",
    frequency: "Frequenz",
    symbolRate: "Symbolrate",
    polarization: "Polarisation",
    fec: "FEC",
    modulation: "Modulation",
    pilot: "Pilot",
    tip: "Tipp:",
    tipText: "Verwenden Sie für die Feinabstimmung einen Satellitensignalfinder. Beginnen Sie mit den angegebenen Winkeln und justieren Sie die Antennenposition für maximalen Signalpegel.",
    completeGuide: "Vollständige Anleitung zur Einrichtung einer Satellitenschüssel",
    stepByStep: "Schritt-für-Schritt-Anleitung zur Selbstinstallation",
    generalInfo: "Allgemeine Informationen",
    generalInfoText: "Für den Empfang von Satellitenfernsehen werden eine Empfangsschüssel, ein Konverter (LNB) und ein Satellitenreceiver verwendet. Störungsfreies Fernsehen ist nur bei präziser Ausrichtung der Schüssel auf den Satelliten möglich.",
    satDish: "Satellitenschüssel",
    converterLNB: "Konverter (LNB)",
    satReceiver: "Satellitenreceiver",
    recommendedSignalLevel: "Empfohlener Signalpegel",
    beamLabel: "Strahl:",
    locationLabel: "Standort",
    recommendProfessionals: "Wir empfehlen, die Installation der Schüssel Fachleuten mit den erforderlichen technischen Kenntnissen und der nötigen Ausrüstung anzuvertrauen.",
    outOfCoverage: "Außerhalb der Satellitenabdeckung",
    outOfCoverageText: "Leider befindet sich Ihr Standort außerhalb des Satellitenabdeckungsbereichs. Bitte überprüfen Sie die Genauigkeit der angegebenen Adresse oder wählen Sie einen anderen Standort.",
    getInstructions: "Erhalten Sie die vollständige Einrichtungsanleitung in einem praktischen Format",
    exportData: "Daten exportieren",
    downloadTxt: "TXT-Datei herunterladen",
    print: "Drucken",
    share: "Teilen",
    sendEmail: "Per E-Mail senden",
    done: "Fertig!",
    doneText: "Ihre Einstellungen sind bereit. Die Anleitung enthält alle notwendigen Parameter für eine erfolgreiche Einrichtung der Satellitenschüssel.",
    detecting: "Erkennung läuft...",
    locationDetected: "Standort erkannt",
    geolocationNotSupported: "Geolocation wird von Ihrem Browser nicht unterstützt",
    instructionsTitle: "Turksat Einrichtungsanleitung",
    instructionsCopied: "Anleitung in die Zwischenablage kopiert!",
    clipboardFailed: "Kopieren in die Zwischenablage fehlgeschlagen",

    // Step-by-step setup section
    stepByStepSetupTitle: "Schritt-für-Schritt-Einrichtungsanleitung",
    step0Title: "Vorbereitung und Montage der Schüssel",
    step0InstallDish: "Installieren Sie die Schüssel in Richtung des Satelliten. Verwenden Sie die interaktive Karte auf unserer Website — sie zeigt eine Linie an, die die Ausrichtung der Schüssel bei der Installation angibt.",
    step0ChooseLocation: "Wählen Sie einen erhöhten Standort ohne Hindernisse (Bäume, Gebäude)",
    step0Amplifier: "Verwenden Sie bei langen Kabeln einen Signalverstärker",
    step1Title: "Konfiguration des Satellitenreceivers",
    step1EnterMenu: "Rufen Sie das Menü Ihres Receivers auf. Der Receiver kann extern oder im TV eingebaut sein (je nach Modell)",
    step1FindSection: "Suchen Sie den Abschnitt \"Kanalsuche\", \"Manuelle Suche\", \"Installation\" oder Ähnliches",
    step1EnterParameters: "Geben Sie die Satellitenparameter ein:",
    step1LnbLowBand: "LNB Niederband: auf dem LNB-Konverter angegeben",
    step1LnbHighBand: "LNB Hochband: auf dem LNB-Konverter angegeben",
    step1SignalBars: "Im Menü werden 2 Balken angezeigt — Signalpegel und Signalqualität",
    azimuthAdjustment: "Azimut-Einstellung",
    elevationAdjustment: "Elevations-Einstellung",
    lnbAdjustment: "LNB-Einstellung",
    step2LoosenBolts: "Lösen Sie die Befestigungsschrauben der Schüssel",
    clockwise: "im Uhrzeigersinn",
    counterclockwise: "gegen den Uhrzeigersinn",
    relativeToNorth: "relativ zum Norden",
    step2MoveLeftRight: "Bewegen Sie die Schüssel langsam nach links und rechts und beobachten Sie den Signalpegel",
    step2TightenBolts: "Ziehen Sie die Schrauben bei maximalem Signal fest",
    step3RaiseDish: "Heben Sie die Schüssel relativ zum Horizont an",
    step3AdjustAngle: "Justieren Sie den Winkel langsam und beobachten Sie den Signalpegel",
    step3FixPosition: "Fixieren Sie die Position bei maximalem Signal",
    step4RotateConverter: "Drehen Sie den Konverter",
    step4AdjustAngle: "Justieren Sie den Winkel langsam und beobachten Sie den Signalpegel",
    step4FixPosition: "Fixieren Sie die Position bei maximalem Signal",
    step4OldLnbNote: "Bei älteren LNBs kann eine Frequenzanpassung erforderlich sein (siehe unten)",
    troubleshootingOldLnb: "Fehlerbehebung bei alten LNB-Problemen",
    troubleshootingIntro: "Wenn das Signal nach der Einstellung schwach bleibt, kann das Problem am Konverter liegen:",
    bestSolutionReplace: "Die beste Lösung ist der Austausch des LNB.",
    temporarySolution: "Wenn dies nicht möglich ist, versuchen Sie diese vorübergehende Lösung:",
    tsStep1: "Gehen Sie zum Receiver-Menü → Manuelle Suche",
    tsStep2: "Geben Sie die Kanalparameter ein (Frequenz, Symbolrate, Polarisation)",
    tsStep3: "Ändern Sie ohne zu speichern die Frequenz um ±1 MHz und beobachten Sie die Signalqualität",
    tsStep4: "Finden Sie die Frequenz mit der maximalen Signalqualität",
    tsStep5: "Speichern Sie den Kanal auf der eingestellten Frequenz",
    importantNotesTitle: "Wichtige Hinweise",
    noteQualityCable: "Verwenden Sie ein hochwertiges Kabel mit minimaler Länge",
    noteAmplifierLong: "Installieren Sie bei langen Kabeln (>30m) einen Leitungsverstärker",
    noteOldReceiversFirmware: "Ältere Receiver benötigen möglicherweise Firmware-Updates",
    noteAvoidInterference: "Vermeiden Sie Störquellen (Schnurlostelefone, WLAN-Router)",
    noteCheckCorrosion: "Überprüfen Sie alle Verbindungen auf Korrosion"
  },

  it: {
    // Header
    setup: "Configurazione",
    cooperation: "Cooperazione",
    contacts: "Contatti",

    // Main title and description
    mainTitle: "CONFIGURAZIONE CONNESSIONE CLAN-TV",
    mainDescription: "Procedura guidata interattiva per la configurazione della connessione satellitare con selezione automatica del satellite ottimale.",

    // Cooperation page
    ourPartners: "I nostri partner",
    broadcastArea: "Area di trasmissione",
    forAdvertisers: "Per gli inserzionisti",
    emailLabel: "Email",
    messengersLabel: "Messaggistica",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    privacyPolicy: "Informativa sulla privacy",
    cookiePolicy: "Politica sui cookie",
    termsOfUse: "Condizioni d'uso",

    // Documents (page content)
    privacyDoc: `Informativa sulla privacy\n\nLa presente Informativa sulla privacy ("Informativa") disciplina le modalità di trattamento delle informazioni raccolte sul sito web clan-tv.com ("Sito"), di proprietà di CLAN L.L.C-FZ, registrata presso Meydan Grandstand, 6° piano, Meydan Road, Nad Al Sheba, Dubai, E.A.U. ("Società").\n\n1. Disposizioni generali\n\n1.1. Il Sito ha finalità esclusivamente informative e non è destinato alla raccolta di dati personali degli utenti.\n1.2. Il Sito non contiene moduli di feedback, registrazione o altri strumenti che richiedano l'inserimento di informazioni personali.\n1.3. L'unico modo per contattare la Società è inviare un'email a help@clan-tv.com.\n1.4. L'email viene inviata dall'utente in modo autonomo utilizzando il proprio client di posta elettronica, al di fuori del Sito.\n\n2. Utilizzo di Yandex.Metrica\n\n2.1. Il Sito utilizza il servizio di analisi web "Yandex.Metrica" per analizzare il traffico e migliorare la qualità dei contenuti.\n2.2. Il servizio può raccogliere dati anonimi sulle azioni degli utenti tramite cookie.\n2.3. Tutti i dati raccolti sono anonimizzati e non consentono l'identificazione di un utente specifico.\n\n3. Utilizzo dei cookie\n\n3.1. Il Sito utilizza solo i cookie necessari per il funzionamento dello strumento analitico Yandex.Metrica.\n3.2. L'utente può disabilitare l'uso dei cookie nelle impostazioni del browser.\n\n4. Responsabilità\n\n4.1. La Società non è responsabile delle azioni degli utenti relative all'invio autonomo di messaggi via email.\n\n5. Informazioni di contatto\n\nPer qualsiasi domanda relativa alla presente Informativa, potete contattarci all'indirizzo help@clan-tv.com.`,
    cookiesDoc: `Politica sui cookie\n\nLa presente Politica sui cookie ("Politica") spiega quali cookie vengono utilizzati sul sito web clan-tv.com, di proprietà di CLAN L.L.C-FZ, registrata presso Meydan Grandstand, 6° piano, Meydan Road, Nad Al Sheba, Dubai, E.A.U. ("Società").\n\n1. Cosa sono i cookie\n\nI cookie sono piccoli file di testo memorizzati sul dispositivo dell'utente durante la visita di un sito web.\n\n2. Quali cookie vengono utilizzati sul Sito\n\n2.1. Il Sito utilizza esclusivamente i cookie necessari per il funzionamento del sistema analitico Yandex.Metrica.\n2.2. Questi cookie raccolgono informazioni anonime sulle azioni degli utenti.\n\n3. Gestione dei cookie\n\n3.1. L'utente può configurare o bloccare autonomamente l'uso dei cookie nelle impostazioni del browser.\n3.2. La disabilitazione dei cookie può influire sul corretto funzionamento di alcune funzioni del sito.`,
    termsDoc: `Condizioni d'uso\n\nLe presenti Condizioni d'uso ("Condizioni") definiscono le regole di utilizzo del sito web clan-tv.com, di proprietà di CLAN L.L.C-FZ, registrata presso Meydan Grandstand, 6° piano, Meydan Road, Nad Al Sheba, Dubai, E.A.U. ("Società").\n\n1. Disposizioni generali\n\n1.1. Il Sito è una risorsa informativa che fornisce dettagli sulle possibilità di connessione ai servizi di televisione satellitare.\n1.2. Tutte le informazioni sul Sito sono fornite esclusivamente a scopo informativo.\n\n2. Responsabilità\n\n2.1. La Società non è responsabile per possibili errori nelle informazioni pubblicate.\n2.2. I link a risorse di terze parti sono forniti esclusivamente per comodità degli utenti.\n\n3. Utilizzo dei dati\n\n3.1. Il Sito non raccoglie dati personali degli utenti.\n3.2. Per l'analisi delle statistiche di traffico del sito viene utilizzato il servizio Yandex.Metrica.\n\n4. Informazioni di contatto\n\nPer qualsiasi domanda relativa all'utilizzo del Sito, potete contattarci all'indirizzo help@clan-tv.com.`,
    tag_news: "Notizie",
    tag_entertainment: "Intrattenimento",
    tag_documentary: "Documentario",
    tag_series: "Serie",
    tag_info: "Informativo",
    channel_rtr: "RTR-Planeta",
    channel_rossia24: "Rossiya 24",
    channel_ntv_mir: "NTV Mir",
    channel_ntv_pravo: "NTV Pravo",
    channel_ntv_serial: "NTV Serial",
    channel_ntv_style: "NTV Style",
    channel_sts: "STS",
    channel_rentv: "REN TV",
    channel_peretz: "Peretz",
    channel_izvestia: "Izvestia",
    channel_five: "Canale Cinque",
    contactUs: "Contattateci in qualsiasi modo conveniente.",
    // Cooperation hero and extras
    coopHeroTitle: "Trasmissione globale dei canali TV russi all'estero",
    coopHeroSubtitle: "Offriamo un'opportunità esclusiva per la trasmissione 24/7 dei popolari canali TV russi al di fuori della Russia.",
    coopCardCoverage: "Forniamo un segnale stabile e di alta qualità che copre oltre 50 paesi su tre continenti, raggiungendo milioni di telespettatori russofoni e internazionali.",
    coopCardReliability: "Massima affidabilità — la trasmissione avviene tramite satelliti internazionali che garantiscono una ricezione stabile anche nelle regioni remote.",
    coopMapHeading: "L'elenco completo dei paesi comprende oltre 50 stati, rendendo la nostra piattaforma una delle più grandi per i contenuti in lingua russa e internazionali.",
    coopMapDesc: "La mappa interattiva mostra l'area di copertura combinata di CLAN-TV.",
    coopAdvantagesTitle: "I nostri vantaggi",
    coopAdvantage1: "✔ Portata globale senza confini — il vostro canale può essere guardato in Europa, Asia, Africa e Medio Oriente.",
    coopAdvantage2: "✔ Pubblico fedele — oltre 150 milioni di telespettatori russofoni che vivono all'estero.",
    coopAdvantage3: "✔ Affidabilità tecnica — alta qualità di trasmissione e segnale stabile.",
    coopAdvantage4: "✔ Condizioni di partnership flessibili — soluzioni personalizzate per canali di qualsiasi formato.",

    // Progress indicators
    step1Description: "Passo 1 di 3: Selezione automatica del satellite ottimale",
    step2Description: "Passo 2 di 3: Indica la tua posizione",
    step3Description: "Passo 3 di 3: Istruzioni di configurazione",

    // Step 1
    step1Title1: "Selezione automatica del satellite",
    step1Subtitle: "Il sistema selezionerà automaticamente il satellite ottimale in base alla tua posizione.",
    westernBeam: "Fascio occidentale",
    easternBeam: "Fascio orientale",
    asianBeam: "Fascio asiatico",
    menaBeam: "Fascio MENA",
    westernCoverage: "Copertura di Europa e Nord Africa",
    easternCoverage: "Copertura di Medio Oriente e Africa nord-orientale",
    asianCoverage: "Copertura dell'Asia centrale",
    menaCoverage: "Copertura di Medio Oriente e Nord Africa",
    continue: "Continua",

    // Step 2
    step2Title: "Indica la tua posizione",
    step2Subtitle: "Determina la tua posizione esatta per la selezione automatica del satellite con il miglior livello di segnale.",
    hybridMap: "Mappa di copertura ibrida",
    mapDescription: "Clicca sulla mappa per scegliere la posizione esatta. Il marcatore può essere trascinato. Le aree viola indicano la copertura generale dei satelliti con diversi livelli di segnale.",
    mapDescription1: "La mappa interattiva mostra l'area di copertura combinata di CLAN-TV.",
    loadingMap: "Caricamento della mappa di copertura ibrida...",
    signalLevel: "Livello del segnale",
    mediumSignal: "41-43 dB - Medio",
    goodSignal: "44-47 dB - Buono",
    excellentSignal: "48-54 dB - Eccellente",
    automaticDetection: "Rilevamento automatico",
    autoDetectionDesc: "Usa il GPS del tuo dispositivo per determinare con precisione le tue coordinate.",
    detectLocation: "Rileva posizione",
    addressSearch: "Ricerca indirizzo",
    addressSearchDesc: "Inserisci il tuo indirizzo o il nome della tua località.",
    address: "indirizzo",
    manualCoordinates: "Inserimento manuale delle coordinate",
    latitude: "Latitudine (°N/°S)",
    longitude: "Longitudine (°E/°O)",
    applyCoordinates: "Applica coordinate",
    yourLocation: "La tua posizione",
    addressLabel: "Indirizzo:",

    // Step 3
    step3Title: "Istruzioni di configurazione",
    step3Subtitle: "Istruzioni dettagliate per la configurazione della parabola satellitare",
    downloadInstructions: "Scarica istruzioni",
    printInstructions: "Stampa istruzioni",
    shareInstructions: "Condividi istruzioni",
    emailInstructions: "Invia via email",

    // Navigation
    back: "Indietro",
    next: "Avanti",

    // Errors
    locationError: "Rilevamento della posizione fallito",
    coordinatesError: "Coordinate non valide",
    addressError: "Indirizzo non trovato",

    // Additional translations
    latitudeLabel: "Latitudine:",
    longitudeLabel: "Longitudine:",

    // Step 3 translations
    setupReady: "I parametri di configurazione sono pronti!",
    optimalSettings: "Le impostazioni ottimali sono state calcolate per la tua posizione",
    satelliteInfo: "Informazioni sul satellite",
    satellite: "Satellite:",
    position: "Posizione:",
    dishSize: "Dimensione parabola:",
    antennaSettings: "Impostazioni antenna",
    azimuth: "Azimut",
    elevation: "Elevazione",
    lnbSkew: "Inclinazione LNB",
    rotateHorizontal: "Ruota l'antenna nel piano orizzontale",
    raiseLower: "Alza o abbassa l'antenna",
    rotateLNB: "Ruota l'LNB all'angolo specificato",
    technicalParameters: "Parametri tecnici",
    frequency: "Frequenza",
    symbolRate: "Symbol Rate",
    polarization: "Polarizzazione",
    fec: "FEC",
    modulation: "Modulazione",
    pilot: "Pilota",
    tip: "Suggerimento:",
    tipText: "Per una regolazione precisa, usa un cercatore di segnale satellitare. Inizia con gli angoli specificati e regola la posizione dell'antenna per il massimo livello di segnale.",
    completeGuide: "Guida completa alla configurazione della parabola satellitare",
    stepByStep: "Istruzioni passo passo per l'installazione autonoma",
    generalInfo: "Informazioni generali",
    generalInfoText: "Per ricevere la televisione satellitare, si utilizzano una parabola ricevente, un convertitore (LNB) e un ricevitore satellitare. La visione senza interruzioni è possibile solo con l'allineamento preciso della parabola al satellite.",
    satDish: "Parabola satellitare",
    converterLNB: "Convertitore (LNB)",
    satReceiver: "Ricevitore satellitare",
    recommendedSignalLevel: "Livello di segnale raccomandato",
    beamLabel: "Fascio:",
    locationLabel: "Posizione",
    recommendProfessionals: "Raccomandiamo di affidare l'installazione della parabola a professionisti del servizio con le necessarie conoscenze tecniche e attrezzature.",
    outOfCoverage: "Fuori dalla copertura satellitare",
    outOfCoverageText: "Purtroppo la tua posizione è al di fuori dell'area di copertura satellitare. Verifica l'accuratezza dell'indirizzo specificato o seleziona un'altra posizione.",
    getInstructions: "Ottieni le istruzioni complete di configurazione in un formato comodo",
    exportData: "Esporta dati",
    downloadTxt: "Scarica file TXT",
    print: "Stampa",
    share: "Condividi",
    sendEmail: "Invia via email",
    done: "Fatto!",
    doneText: "Le tue impostazioni sono pronte. Le istruzioni includono tutti i parametri necessari per una configurazione riuscita della parabola satellitare.",
    detecting: "Rilevamento in corso...",
    locationDetected: "Posizione rilevata",
    geolocationNotSupported: "La geolocalizzazione non è supportata dal tuo browser",
    instructionsTitle: "Istruzioni di configurazione Turksat",
    instructionsCopied: "Istruzioni copiate negli appunti!",
    clipboardFailed: "Copia negli appunti fallita",

    // Step-by-step setup section
    stepByStepSetupTitle: "Istruzioni di configurazione passo passo",
    step0Title: "Preparazione e montaggio della parabola",
    step0InstallDish: "Installa la parabola nella direzione del satellite. Usa la mappa interattiva sul nostro sito — mostrerà una linea che indica la direzione verso cui puntare la parabola durante l'installazione.",
    step0ChooseLocation: "Scegli una posizione elevata senza ostruzioni (alberi, edifici)",
    step0Amplifier: "Per cavi lunghi, usa un amplificatore di segnale",
    step1Title: "Configurazione del ricevitore satellitare",
    step1EnterMenu: "Accedi al menu del tuo ricevitore. Il ricevitore può essere esterno o integrato nel TV (a seconda del modello)",
    step1FindSection: "Trova la sezione \"Ricerca canali\", \"Ricerca manuale\", \"Installazione\" o simile",
    step1EnterParameters: "Inserisci i parametri del satellite:",
    step1LnbLowBand: "LNB Banda bassa: indicato sul convertitore LNB",
    step1LnbHighBand: "LNB Banda alta: indicato sul convertitore LNB",
    step1SignalBars: "Nel menu verranno visualizzate 2 barre — Livello del segnale e Qualità del segnale",
    azimuthAdjustment: "Regolazione dell'azimut",
    elevationAdjustment: "Regolazione dell'elevazione",
    lnbAdjustment: "Regolazione LNB",
    step2LoosenBolts: "Allenta i bulloni di fissaggio della parabola",
    clockwise: "in senso orario",
    counterclockwise: "in senso antiorario",
    relativeToNorth: "rispetto al nord",
    step2MoveLeftRight: "Muovi lentamente la parabola a sinistra e a destra monitorando il livello del segnale",
    step2TightenBolts: "Stringi i bulloni quando raggiungi il segnale massimo",
    step3RaiseDish: "Alza la parabola rispetto all'orizzonte",
    step3AdjustAngle: "Regola lentamente l'angolo monitorando il livello del segnale",
    step3FixPosition: "Fissa la posizione quando raggiungi il segnale massimo",
    step4RotateConverter: "Ruota il convertitore",
    step4AdjustAngle: "Regola lentamente l'angolo monitorando il livello del segnale",
    step4FixPosition: "Fissa la posizione quando raggiungi il segnale massimo",
    step4OldLnbNote: "Per gli LNB più vecchi, potrebbe essere necessaria una regolazione della frequenza (vedi sotto)",
    troubleshootingOldLnb: "Risoluzione dei problemi con LNB vecchi",
    troubleshootingIntro: "Se dopo la regolazione il segnale rimane debole, il problema potrebbe essere nel convertitore:",
    bestSolutionReplace: "La soluzione migliore è sostituire l'LNB.",
    temporarySolution: "Se non è possibile, prova questa soluzione temporanea:",
    tsStep1: "Vai al menu del ricevitore → Ricerca manuale",
    tsStep2: "Inserisci i parametri del canale (frequenza, symbol rate, polarizzazione)",
    tsStep3: "Senza salvare, modifica la frequenza di ±1 MHz monitorando la qualità del segnale",
    tsStep4: "Trova la frequenza con la massima qualità del segnale",
    tsStep5: "Salva il canale sulla frequenza regolata",
    importantNotesTitle: "Note importanti",
    noteQualityCable: "Usa un cavo di alta qualità con lunghezza minima",
    noteAmplifierLong: "Per cavi lunghi (>30m), installa un amplificatore di linea",
    noteOldReceiversFirmware: "I ricevitori più vecchi potrebbero necessitare di aggiornamenti firmware",
    noteAvoidInterference: "Evita fonti di interferenza (telefoni cordless, router WiFi)",
    noteCheckCorrosion: "Controlla tutte le connessioni per la corrosione"
  },

  es: {
    // Header
    setup: "Configuración",
    cooperation: "Cooperación",
    contacts: "Contactos",

    // Main title and description
    mainTitle: "CONFIGURACIÓN DE CONEXIÓN CLAN-TV",
    mainDescription: "Asistente interactivo de configuración de conexión satelital con selección automática del satélite óptimo.",

    // Cooperation page
    ourPartners: "Nuestros socios",
    broadcastArea: "Área de transmisión",
    forAdvertisers: "Para anunciantes",
    emailLabel: "Correo electrónico",
    messengersLabel: "Mensajería",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    privacyPolicy: "Política de privacidad",
    cookiePolicy: "Política de cookies",
    termsOfUse: "Términos de uso",

    // Documents (page content)
    privacyDoc: `Política de privacidad\n\nEsta Política de privacidad ("Política") regula el procedimiento de procesamiento de información recopilada en el sitio web clan-tv.com ("Sitio web"), propiedad de CLAN L.L.C-FZ, registrada en Meydan Grandstand, 6.° piso, Meydan Road, Nad Al Sheba, Dubái, E.A.U. ("Empresa").\n\n1. Disposiciones generales\n\n1.1. El Sitio web tiene fines exclusivamente informativos y no está destinado a la recopilación de datos personales de los usuarios.\n1.2. El Sitio web no contiene formularios de contacto, registro ni otras herramientas que requieran la introducción de información personal.\n1.3. La única forma de contactar a la Empresa es enviando un correo electrónico a help@clan-tv.com.\n1.4. El correo electrónico es enviado por el usuario de forma independiente utilizando su propio cliente de correo, fuera del Sitio web.\n\n2. Uso de Yandex.Metrica\n\n2.1. El Sitio web utiliza el servicio de análisis web "Yandex.Metrica" para analizar el tráfico y mejorar la calidad del contenido.\n2.2. El servicio puede recopilar datos anónimos sobre las acciones de los usuarios mediante cookies.\n2.3. Todos los datos recopilados son anónimos y no permiten identificar a un usuario específico.\n\n3. Uso de cookies\n\n3.1. El Sitio web utiliza únicamente las cookies necesarias para el funcionamiento de la herramienta de análisis Yandex.Metrica.\n3.2. El usuario puede desactivar el uso de cookies en la configuración de su navegador.\n\n4. Responsabilidad\n\n4.1. La Empresa no es responsable de las acciones de los usuarios relacionadas con el envío independiente de mensajes por correo electrónico.\n\n5. Información de contacto\n\nPara cualquier consulta relacionada con esta Política, puede contactarnos en help@clan-tv.com.`,
    cookiesDoc: `Política de cookies\n\nEsta Política de cookies ("Política") explica qué cookies se utilizan en el sitio web clan-tv.com, propiedad de CLAN L.L.C-FZ, registrada en Meydan Grandstand, 6.° piso, Meydan Road, Nad Al Sheba, Dubái, E.A.U. ("Empresa").\n\n1. Qué son las cookies\n\nLas cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar un sitio web.\n\n2. Qué cookies se utilizan en el Sitio web\n\n2.1. El Sitio web utiliza únicamente las cookies necesarias para el funcionamiento del sistema de análisis Yandex.Metrica.\n2.2. Estas cookies recopilan información anónima sobre las acciones de los usuarios.\n\n3. Gestión de cookies\n\n3.1. El usuario puede configurar o bloquear de forma independiente el uso de cookies en la configuración de su navegador.\n3.2. La desactivación de cookies puede afectar al correcto funcionamiento de algunas funciones del sitio web.`,
    termsDoc: `Términos de uso\n\nEstos Términos de uso ("Términos") definen las reglas de uso del sitio web clan-tv.com, propiedad de CLAN L.L.C-FZ, registrada en Meydan Grandstand, 6.° piso, Meydan Road, Nad Al Sheba, Dubái, E.A.U. ("Empresa").\n\n1. Disposiciones generales\n\n1.1. El Sitio web es un recurso informativo que proporciona detalles sobre las posibilidades de conexión a servicios de televisión por satélite.\n1.2. Toda la información del Sitio web se proporciona únicamente con fines informativos.\n\n2. Responsabilidad\n\n2.1. La Empresa no es responsable de posibles errores en la información publicada.\n2.2. Los enlaces a recursos de terceros se proporcionan únicamente para comodidad de los usuarios.\n\n3. Uso de datos\n\n3.1. El Sitio web no recopila datos personales de los usuarios.\n3.2. Para el análisis de las estadísticas de tráfico del sitio web se utiliza el servicio Yandex.Metrica.\n\n4. Información de contacto\n\nPara cualquier consulta relacionada con el uso del Sitio web, puede contactarnos en help@clan-tv.com.`,
    tag_news: "Noticias",
    tag_entertainment: "Entretenimiento",
    tag_documentary: "Documental",
    tag_series: "Series",
    tag_info: "Informativo",
    channel_rtr: "RTR-Planeta",
    channel_rossia24: "Rossiya 24",
    channel_ntv_mir: "NTV Mir",
    channel_ntv_pravo: "NTV Pravo",
    channel_ntv_serial: "NTV Serial",
    channel_ntv_style: "NTV Style",
    channel_sts: "STS",
    channel_rentv: "REN TV",
    channel_peretz: "Peretz",
    channel_izvestia: "Izvestia",
    channel_five: "Canal Cinco",
    contactUs: "Contáctenos de cualquier forma conveniente.",
    // Cooperation hero and extras
    coopHeroTitle: "Transmisión global de canales de TV rusos en el extranjero",
    coopHeroSubtitle: "Ofrecemos una oportunidad exclusiva para la transmisión 24/7 de populares canales de TV rusos fuera de Rusia.",
    coopCardCoverage: "Proporcionamos una señal estable y de alta calidad que cubre más de 50 países en tres continentes, llegando a millones de televidentes de habla rusa e internacionales.",
    coopCardReliability: "Máxima fiabilidad — la transmisión se realiza a través de satélites internacionales que garantizan una recepción estable incluso en regiones remotas.",
    coopMapHeading: "La lista completa de países incluye más de 50 estados, lo que convierte a nuestra plataforma en una de las más grandes para contenido en ruso e internacional.",
    coopMapDesc: "El mapa interactivo muestra el área de cobertura combinada de CLAN-TV.",
    coopAdvantagesTitle: "Nuestras ventajas",
    coopAdvantage1: "✔ Alcance global sin fronteras — su canal puede ser visto en Europa, Asia, África y Oriente Medio.",
    coopAdvantage2: "✔ Audiencia fiel — más de 150 millones de televidentes de habla rusa que viven en el extranjero.",
    coopAdvantage3: "✔ Fiabilidad técnica — alta calidad de transmisión y señal estable.",
    coopAdvantage4: "✔ Condiciones de asociación flexibles — soluciones personalizadas para canales de cualquier formato.",

    // Progress indicators
    step1Description: "Paso 1 de 3: Selección automática del satélite óptimo",
    step2Description: "Paso 2 de 3: Indique su ubicación",
    step3Description: "Paso 3 de 3: Instrucciones de configuración",

    // Step 1
    step1Title1: "Selección automática de satélite",
    step1Subtitle: "El sistema seleccionará automáticamente el satélite óptimo según su ubicación.",
    westernBeam: "Haz occidental",
    easternBeam: "Haz oriental",
    asianBeam: "Haz asiático",
    menaBeam: "Haz MENA",
    westernCoverage: "Cobertura de Europa y Norte de África",
    easternCoverage: "Cobertura de Oriente Medio y Noreste de África",
    asianCoverage: "Cobertura de Asia Central",
    menaCoverage: "Cobertura de Oriente Medio y Norte de África",
    continue: "Continuar",

    // Step 2
    step2Title: "Indique su ubicación",
    step2Subtitle: "Determine su ubicación exacta para la selección automática del satélite con el mejor nivel de señal.",
    hybridMap: "Mapa de cobertura híbrido",
    mapDescription: "Haga clic en el mapa para elegir la ubicación exacta. El marcador se puede arrastrar. Las áreas moradas indican la cobertura general de los satélites con diferentes niveles de señal.",
    mapDescription1: "El mapa interactivo muestra el área de cobertura combinada de CLAN-TV.",
    loadingMap: "Cargando mapa de cobertura híbrido...",
    signalLevel: "Nivel de señal",
    mediumSignal: "41-43 dB - Medio",
    goodSignal: "44-47 dB - Bueno",
    excellentSignal: "48-54 dB - Excelente",
    automaticDetection: "Detección automática",
    autoDetectionDesc: "Use el GPS de su dispositivo para determinar con precisión sus coordenadas.",
    detectLocation: "Detectar ubicación",
    addressSearch: "Búsqueda de dirección",
    addressSearchDesc: "Introduzca su dirección o el nombre de su localidad.",
    address: "dirección",
    manualCoordinates: "Entrada manual de coordenadas",
    latitude: "Latitud (°N/°S)",
    longitude: "Longitud (°E/°O)",
    applyCoordinates: "Aplicar coordenadas",
    yourLocation: "Su ubicación",
    addressLabel: "Dirección:",

    // Step 3
    step3Title: "Instrucciones de configuración",
    step3Subtitle: "Instrucciones detalladas para configurar su antena parabólica",
    downloadInstructions: "Descargar instrucciones",
    printInstructions: "Imprimir instrucciones",
    shareInstructions: "Compartir instrucciones",
    emailInstructions: "Enviar por correo electrónico",

    // Navigation
    back: "Atrás",
    next: "Siguiente",

    // Errors
    locationError: "Error al detectar la ubicación",
    coordinatesError: "Coordenadas no válidas",
    addressError: "Dirección no encontrada",

    // Additional translations
    latitudeLabel: "Latitud:",
    longitudeLabel: "Longitud:",

    // Step 3 translations
    setupReady: "¡Los parámetros de configuración están listos!",
    optimalSettings: "Se han calculado los ajustes óptimos para su ubicación",
    satelliteInfo: "Información del satélite",
    satellite: "Satélite:",
    position: "Posición:",
    dishSize: "Tamaño de la antena:",
    antennaSettings: "Ajustes de antena",
    azimuth: "Acimut",
    elevation: "Elevación",
    lnbSkew: "Inclinación del LNB",
    rotateHorizontal: "Gire la antena en el plano horizontal",
    raiseLower: "Suba o baje la antena",
    rotateLNB: "Gire el LNB al ángulo especificado",
    technicalParameters: "Parámetros técnicos",
    frequency: "Frecuencia",
    symbolRate: "Tasa de símbolos",
    polarization: "Polarización",
    fec: "FEC",
    modulation: "Modulación",
    pilot: "Piloto",
    tip: "Consejo:",
    tipText: "Para un ajuste preciso, use un buscador de señal de satélite. Comience con los ángulos especificados y ajuste la posición de la antena para el máximo nivel de señal.",
    completeGuide: "Guía completa para la configuración de la antena parabólica",
    stepByStep: "Instrucciones paso a paso para la autoinstalación",
    generalInfo: "Información general",
    generalInfoText: "Para recibir televisión por satélite se utiliza una antena receptora, un convertidor (LNB) y un receptor de satélite. La visualización sin interrupciones solo es posible con la alineación precisa de la antena al satélite.",
    satDish: "Antena parabólica",
    converterLNB: "Convertidor (LNB)",
    satReceiver: "Receptor de satélite",
    recommendedSignalLevel: "Nivel de señal recomendado",
    beamLabel: "Haz:",
    locationLabel: "Ubicación",
    recommendProfessionals: "Recomendamos confiar la instalación de la antena a profesionales del servicio con los conocimientos técnicos y el equipamiento necesarios.",
    outOfCoverage: "Fuera de la cobertura del satélite",
    outOfCoverageText: "Lamentablemente, su ubicación está fuera del área de cobertura del satélite. Verifique la precisión de la dirección indicada o seleccione otra ubicación.",
    getInstructions: "Obtenga las instrucciones completas de configuración en un formato conveniente",
    exportData: "Exportar datos",
    downloadTxt: "Descargar archivo TXT",
    print: "Imprimir",
    share: "Compartir",
    sendEmail: "Enviar por correo electrónico",
    done: "¡Listo!",
    doneText: "Sus ajustes están listos. Las instrucciones incluyen todos los parámetros necesarios para una configuración exitosa de la antena parabólica.",
    detecting: "Detectando...",
    locationDetected: "Ubicación detectada",
    geolocationNotSupported: "La geolocalización no es compatible con su navegador",
    instructionsTitle: "Instrucciones de configuración de Turksat",
    instructionsCopied: "¡Instrucciones copiadas al portapapeles!",
    clipboardFailed: "Error al copiar al portapapeles",

    // Step-by-step setup section
    stepByStepSetupTitle: "Instrucciones de configuración paso a paso",
    step0Title: "Preparación y montaje de la antena",
    step0InstallDish: "Instale la antena en la dirección del satélite. Use el mapa interactivo en nuestro sitio web — mostrará una línea que indica la dirección hacia la que debe apuntar la antena durante la instalación.",
    step0ChooseLocation: "Elija un lugar elevado sin obstrucciones (árboles, edificios)",
    step0Amplifier: "Para cables largos, use un amplificador de señal",
    step1Title: "Configuración del receptor de satélite",
    step1EnterMenu: "Acceda al menú de su receptor. El receptor puede ser externo o integrado en el TV (según el modelo)",
    step1FindSection: "Busque la sección \"Búsqueda de canales\", \"Búsqueda manual\", \"Instalación\" o similar",
    step1EnterParameters: "Introduzca los parámetros del satélite:",
    step1LnbLowBand: "Banda baja del LNB: indicada en el convertidor LNB",
    step1LnbHighBand: "Banda alta del LNB: indicada en el convertidor LNB",
    step1SignalBars: "En el menú se mostrarán 2 barras — Nivel de señal y Calidad de señal",
    azimuthAdjustment: "Ajuste de acimut",
    elevationAdjustment: "Ajuste de elevación",
    lnbAdjustment: "Ajuste del LNB",
    step2LoosenBolts: "Afloje los pernos de montaje de la antena",
    clockwise: "en sentido horario",
    counterclockwise: "en sentido antihorario",
    relativeToNorth: "respecto al norte",
    step2MoveLeftRight: "Mueva lentamente la antena a izquierda y derecha monitoreando el nivel de señal",
    step2TightenBolts: "Apriete los pernos cuando alcance la señal máxima",
    step3RaiseDish: "Eleve la antena respecto al horizonte",
    step3AdjustAngle: "Ajuste lentamente el ángulo monitoreando el nivel de señal",
    step3FixPosition: "Fije la posición cuando alcance la señal máxima",
    step4RotateConverter: "Gire el convertidor",
    step4AdjustAngle: "Ajuste lentamente el ángulo monitoreando el nivel de señal",
    step4FixPosition: "Fije la posición cuando alcance la señal máxima",
    step4OldLnbNote: "Para LNBs antiguos, puede ser necesario un ajuste de frecuencia (ver abajo)",
    troubleshootingOldLnb: "Solución de problemas con LNB antiguo",
    troubleshootingIntro: "Si después del ajuste la señal sigue siendo débil, el problema puede estar en el convertidor:",
    bestSolutionReplace: "La mejor solución es reemplazar el LNB.",
    temporarySolution: "Si no es posible, pruebe esta solución temporal:",
    tsStep1: "Vaya al menú del receptor → Búsqueda manual",
    tsStep2: "Introduzca los parámetros del canal (frecuencia, tasa de símbolos, polarización)",
    tsStep3: "Sin guardar, cambie la frecuencia ±1 MHz monitoreando la calidad de la señal",
    tsStep4: "Encuentre la frecuencia con la máxima calidad de señal",
    tsStep5: "Guarde el canal en la frecuencia ajustada",
    importantNotesTitle: "Notas importantes",
    noteQualityCable: "Use un cable de alta calidad con longitud mínima",
    noteAmplifierLong: "Para cables largos (>30m), instale un amplificador de línea",
    noteOldReceiversFirmware: "Los receptores antiguos pueden requerir actualizaciones de firmware",
    noteAvoidInterference: "Evite fuentes de interferencia (teléfonos inalámbricos, routers WiFi)",
    noteCheckCorrosion: "Revise todas las conexiones en busca de corrosión"
  },

  fr: {
    // Header
    setup: "Configuration",
    cooperation: "Coopération",
    contacts: "Contacts",

    // Main title and description
    mainTitle: "CONFIGURATION DE CONNEXION CLAN-TV",
    mainDescription: "Assistant interactif de configuration de connexion satellite avec sélection automatique du satellite optimal.",

    // Cooperation page
    ourPartners: "Nos partenaires",
    broadcastArea: "Zone de diffusion",
    forAdvertisers: "Pour les annonceurs",
    emailLabel: "E-mail",
    messengersLabel: "Messagerie",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    privacyPolicy: "Politique de confidentialité",
    cookiePolicy: "Politique de cookies",
    termsOfUse: "Conditions d'utilisation",

    // Documents (page content)
    privacyDoc: `Politique de confidentialité\n\nLa présente Politique de confidentialité ("Politique") régit la procédure de traitement des informations collectées sur le site web clan-tv.com ("Site"), propriété de CLAN L.L.C-FZ, enregistrée à Meydan Grandstand, 6e étage, Meydan Road, Nad Al Sheba, Dubaï, É.A.U. ("Société").\n\n1. Dispositions générales\n\n1.1. Le Site est à des fins d'information uniquement et n'est pas destiné à collecter les données personnelles des utilisateurs.\n1.2. Le Site ne contient pas de formulaires de contact, d'inscription ou d'autres outils nécessitant la saisie d'informations personnelles.\n1.3. Le seul moyen de contacter la Société est d'envoyer un e-mail à help@clan-tv.com.\n1.4. L'e-mail est envoyé par l'utilisateur de manière indépendante en utilisant son propre client de messagerie, en dehors du Site.\n\n2. Utilisation de Yandex.Metrica\n\n2.1. Le Site utilise le service d'analyse web "Yandex.Metrica" pour analyser le trafic et améliorer la qualité du contenu.\n2.2. Le service peut collecter des données anonymisées sur les actions des utilisateurs à l'aide de cookies.\n2.3. Toutes les données collectées sont anonymisées et ne permettent pas d'identifier un utilisateur spécifique.\n\n3. Utilisation des cookies\n\n3.1. Le Site utilise uniquement les cookies nécessaires au fonctionnement de l'outil analytique Yandex.Metrica.\n3.2. L'utilisateur peut désactiver l'utilisation des cookies dans les paramètres de son navigateur.\n\n4. Responsabilité\n\n4.1. La Société n'est pas responsable des actions des utilisateurs liées à l'envoi indépendant de messages par e-mail.\n\n5. Coordonnées\n\nPour toute question relative à cette Politique, vous pouvez nous contacter à help@clan-tv.com.`,
    cookiesDoc: `Politique de cookies\n\nLa présente Politique de cookies ("Politique") explique quels cookies sont utilisés sur le site web clan-tv.com, propriété de CLAN L.L.C-FZ, enregistrée à Meydan Grandstand, 6e étage, Meydan Road, Nad Al Sheba, Dubaï, É.A.U. ("Société").\n\n1. Qu'est-ce qu'un cookie\n\nLes cookies sont de petits fichiers texte stockés sur l'appareil de l'utilisateur lors de la visite d'un site web.\n\n2. Quels cookies sont utilisés sur le Site\n\n2.1. Le Site utilise uniquement les cookies nécessaires au fonctionnement du système analytique Yandex.Metrica.\n2.2. Ces cookies collectent des informations anonymisées sur les actions des utilisateurs.\n\n3. Gestion des cookies\n\n3.1. L'utilisateur peut configurer ou bloquer indépendamment l'utilisation des cookies dans les paramètres de son navigateur.\n3.2. La désactivation des cookies peut affecter le bon fonctionnement de certaines fonctions du site.`,
    termsDoc: `Conditions d'utilisation\n\nLes présentes Conditions d'utilisation ("Conditions") définissent les règles d'utilisation du site web clan-tv.com, propriété de CLAN L.L.C-FZ, enregistrée à Meydan Grandstand, 6e étage, Meydan Road, Nad Al Sheba, Dubaï, É.A.U. ("Société").\n\n1. Dispositions générales\n\n1.1. Le Site est une ressource d'information fournissant des détails sur les possibilités de connexion aux services de télévision par satellite.\n1.2. Toutes les informations sur le Site sont fournies à titre informatif uniquement.\n\n2. Responsabilité\n\n2.1. La Société n'est pas responsable des erreurs éventuelles dans les informations publiées.\n2.2. Les liens vers des ressources tierces sont fournis uniquement pour la commodité des utilisateurs.\n\n3. Utilisation des données\n\n3.1. Le Site ne collecte pas les données personnelles des utilisateurs.\n3.2. Pour l'analyse des statistiques de trafic du site, le service Yandex.Metrica est utilisé.\n\n4. Coordonnées\n\nPour toute question relative à l'utilisation du Site, vous pouvez nous contacter à help@clan-tv.com.`,
    tag_news: "Actualités",
    tag_entertainment: "Divertissement",
    tag_documentary: "Documentaire",
    tag_series: "Séries",
    tag_info: "Informatif",
    channel_rtr: "RTR-Planeta",
    channel_rossia24: "Rossiya 24",
    channel_ntv_mir: "NTV Mir",
    channel_ntv_pravo: "NTV Pravo",
    channel_ntv_serial: "NTV Serial",
    channel_ntv_style: "NTV Style",
    channel_sts: "STS",
    channel_rentv: "REN TV",
    channel_peretz: "Peretz",
    channel_izvestia: "Izvestia",
    channel_five: "Cinquième chaîne",
    contactUs: "Contactez-nous de la manière qui vous convient.",
    // Cooperation hero and extras
    coopHeroTitle: "Diffusion mondiale des chaînes de télévision russes à l'étranger",
    coopHeroSubtitle: "Nous offrons une opportunité exclusive de diffusion 24h/24 et 7j/7 des chaînes de télévision russes populaires en dehors de la Russie.",
    coopCardCoverage: "Nous fournissons un signal stable et de haute qualité couvrant plus de 50 pays sur trois continents, atteignant des millions de téléspectateurs russophones et internationaux.",
    coopCardReliability: "Fiabilité maximale — la diffusion est assurée par des satellites internationaux garantissant une réception stable même dans les régions éloignées.",
    coopMapHeading: "La liste complète des pays comprend plus de 50 États, faisant de notre plateforme l'une des plus grandes pour le contenu en langue russe et international.",
    coopMapDesc: "La carte interactive montre la zone de couverture combinée de CLAN-TV.",
    coopAdvantagesTitle: "Nos avantages",
    coopAdvantage1: "✔ Portée mondiale sans frontières — votre chaîne peut être regardée en Europe, en Asie, en Afrique et au Moyen-Orient.",
    coopAdvantage2: "✔ Public fidèle — plus de 150 millions de téléspectateurs russophones vivant à l'étranger.",
    coopAdvantage3: "✔ Fiabilité technique — haute qualité de diffusion et signal stable.",
    coopAdvantage4: "✔ Conditions de partenariat flexibles — solutions sur mesure pour les chaînes de tout format.",

    // Progress indicators
    step1Description: "Étape 1 sur 3 : Sélection automatique du satellite optimal",
    step2Description: "Étape 2 sur 3 : Indiquez votre position",
    step3Description: "Étape 3 sur 3 : Instructions de configuration",

    // Step 1
    step1Title1: "Sélection automatique du satellite",
    step1Subtitle: "Le système sélectionnera automatiquement le satellite optimal en fonction de votre position.",
    westernBeam: "Faisceau occidental",
    easternBeam: "Faisceau oriental",
    asianBeam: "Faisceau asiatique",
    menaBeam: "Faisceau MENA",
    westernCoverage: "Couverture de l'Europe et de l'Afrique du Nord",
    easternCoverage: "Couverture du Moyen-Orient et du Nord-Est de l'Afrique",
    asianCoverage: "Couverture de l'Asie centrale",
    menaCoverage: "Couverture du Moyen-Orient et de l'Afrique du Nord",
    continue: "Continuer",

    // Step 2
    step2Title: "Indiquez votre position",
    step2Subtitle: "Déterminez votre position exacte pour la sélection automatique du satellite avec le meilleur niveau de signal.",
    hybridMap: "Carte de couverture hybride",
    mapDescription: "Cliquez sur la carte pour choisir la position exacte. Le marqueur peut être déplacé. Les zones violettes indiquent la couverture générale des satellites avec différents niveaux de signal.",
    mapDescription1: "La carte interactive montre la zone de couverture combinée de CLAN-TV.",
    loadingMap: "Chargement de la carte de couverture hybride...",
    signalLevel: "Niveau de signal",
    mediumSignal: "41-43 dB - Moyen",
    goodSignal: "44-47 dB - Bon",
    excellentSignal: "48-54 dB - Excellent",
    automaticDetection: "Détection automatique",
    autoDetectionDesc: "Utilisez le GPS de votre appareil pour déterminer précisément vos coordonnées.",
    detectLocation: "Détecter la position",
    addressSearch: "Recherche d'adresse",
    addressSearchDesc: "Entrez votre adresse ou le nom de votre localité.",
    address: "adresse",
    manualCoordinates: "Saisie manuelle des coordonnées",
    latitude: "Latitude (°N/°S)",
    longitude: "Longitude (°E/°O)",
    applyCoordinates: "Appliquer les coordonnées",
    yourLocation: "Votre position",
    addressLabel: "Adresse :",

    // Step 3
    step3Title: "Instructions de configuration",
    step3Subtitle: "Instructions détaillées pour configurer votre parabole satellite",
    downloadInstructions: "Télécharger les instructions",
    printInstructions: "Imprimer les instructions",
    shareInstructions: "Partager les instructions",
    emailInstructions: "Envoyer par e-mail",

    // Navigation
    back: "Retour",
    next: "Suivant",

    // Errors
    locationError: "Échec de la détection de position",
    coordinatesError: "Coordonnées invalides",
    addressError: "Adresse introuvable",

    // Additional translations
    latitudeLabel: "Latitude :",
    longitudeLabel: "Longitude :",

    // Step 3 translations
    setupReady: "Les paramètres de configuration sont prêts !",
    optimalSettings: "Les réglages optimaux ont été calculés pour votre position",
    satelliteInfo: "Informations sur le satellite",
    satellite: "Satellite :",
    position: "Position :",
    dishSize: "Taille de la parabole :",
    antennaSettings: "Réglages de l'antenne",
    azimuth: "Azimut",
    elevation: "Élévation",
    lnbSkew: "Inclinaison du LNB",
    rotateHorizontal: "Tournez l'antenne dans le plan horizontal",
    raiseLower: "Montez ou baissez l'antenne",
    rotateLNB: "Tournez le LNB à l'angle spécifié",
    technicalParameters: "Paramètres techniques",
    frequency: "Fréquence",
    symbolRate: "Débit symbole",
    polarization: "Polarisation",
    fec: "FEC",
    modulation: "Modulation",
    pilot: "Pilote",
    tip: "Conseil :",
    tipText: "Pour un réglage précis, utilisez un détecteur de signal satellite. Commencez avec les angles spécifiés et ajustez la position de l'antenne pour un niveau de signal maximal.",
    completeGuide: "Guide complet de configuration de la parabole satellite",
    stepByStep: "Instructions étape par étape pour l'auto-installation",
    generalInfo: "Informations générales",
    generalInfoText: "Pour recevoir la télévision par satellite, on utilise une parabole de réception, un convertisseur (LNB) et un récepteur satellite. Un visionnage sans interruption n'est possible qu'avec un alignement précis de la parabole vers le satellite.",
    satDish: "Parabole satellite",
    converterLNB: "Convertisseur (LNB)",
    satReceiver: "Récepteur satellite",
    recommendedSignalLevel: "Niveau de signal recommandé",
    beamLabel: "Faisceau :",
    locationLabel: "Position",
    recommendProfessionals: "Nous recommandons de confier l'installation de la parabole à des professionnels disposant des connaissances techniques et de l'équipement nécessaires.",
    outOfCoverage: "Hors de la couverture satellite",
    outOfCoverageText: "Malheureusement, votre position est en dehors de la zone de couverture satellite. Veuillez vérifier l'exactitude de l'adresse indiquée ou sélectionner une autre position.",
    getInstructions: "Obtenez les instructions complètes de configuration dans un format pratique",
    exportData: "Exporter les données",
    downloadTxt: "Télécharger le fichier TXT",
    print: "Imprimer",
    share: "Partager",
    sendEmail: "Envoyer par e-mail",
    done: "Terminé !",
    doneText: "Vos réglages sont prêts. Les instructions comprennent tous les paramètres nécessaires pour une configuration réussie de la parabole satellite.",
    detecting: "Détection en cours...",
    locationDetected: "Position détectée",
    geolocationNotSupported: "La géolocalisation n'est pas prise en charge par votre navigateur",
    instructionsTitle: "Instructions de configuration Turksat",
    instructionsCopied: "Instructions copiées dans le presse-papiers !",
    clipboardFailed: "Échec de la copie dans le presse-papiers",

    // Step-by-step setup section
    stepByStepSetupTitle: "Instructions de configuration étape par étape",
    step0Title: "Préparation et montage de la parabole",
    step0InstallDish: "Installez la parabole dans la direction du satellite. Utilisez la carte interactive sur notre site — elle affichera une ligne indiquant la direction vers laquelle orienter la parabole lors de l'installation.",
    step0ChooseLocation: "Choisissez un emplacement surélevé sans obstructions (arbres, bâtiments)",
    step0Amplifier: "Pour les câbles longs, utilisez un amplificateur de signal",
    step1Title: "Configuration du récepteur satellite",
    step1EnterMenu: "Accédez au menu de votre récepteur. Le récepteur peut être externe ou intégré au téléviseur (selon le modèle)",
    step1FindSection: "Trouvez la section \"Recherche de chaînes\", \"Recherche manuelle\", \"Installation\" ou similaire",
    step1EnterParameters: "Entrez les paramètres du satellite :",
    step1LnbLowBand: "Bande basse LNB : indiquée sur le convertisseur LNB",
    step1LnbHighBand: "Bande haute LNB : indiquée sur le convertisseur LNB",
    step1SignalBars: "Le menu affichera 2 barres — Niveau de signal et Qualité du signal",
    azimuthAdjustment: "Réglage de l'azimut",
    elevationAdjustment: "Réglage de l'élévation",
    lnbAdjustment: "Réglage du LNB",
    step2LoosenBolts: "Desserrez les boulons de fixation de la parabole",
    clockwise: "dans le sens horaire",
    counterclockwise: "dans le sens antihoraire",
    relativeToNorth: "par rapport au nord",
    step2MoveLeftRight: "Déplacez lentement la parabole à gauche et à droite en surveillant le niveau de signal",
    step2TightenBolts: "Serrez les boulons lorsque vous atteignez le signal maximal",
    step3RaiseDish: "Relevez la parabole par rapport à l'horizon",
    step3AdjustAngle: "Ajustez lentement l'angle en surveillant le niveau de signal",
    step3FixPosition: "Fixez la position lorsque vous atteignez le signal maximal",
    step4RotateConverter: "Tournez le convertisseur",
    step4AdjustAngle: "Ajustez lentement l'angle en surveillant le niveau de signal",
    step4FixPosition: "Fixez la position lorsque vous atteignez le signal maximal",
    step4OldLnbNote: "Pour les anciens LNB, un réglage de fréquence peut être nécessaire (voir ci-dessous)",
    troubleshootingOldLnb: "Dépannage des problèmes d'ancien LNB",
    troubleshootingIntro: "Si après le réglage le signal reste faible, le problème peut provenir du convertisseur :",
    bestSolutionReplace: "La meilleure solution est de remplacer le LNB.",
    temporarySolution: "Si ce n'est pas possible, essayez cette solution temporaire :",
    tsStep1: "Allez dans le menu du récepteur → Recherche manuelle",
    tsStep2: "Entrez les paramètres de la chaîne (fréquence, débit symbole, polarisation)",
    tsStep3: "Sans enregistrer, modifiez la fréquence de ±1 MHz en surveillant la qualité du signal",
    tsStep4: "Trouvez la fréquence avec la qualité de signal maximale",
    tsStep5: "Enregistrez la chaîne à la fréquence réglée",
    importantNotesTitle: "Notes importantes",
    noteQualityCable: "Utilisez un câble de haute qualité de longueur minimale",
    noteAmplifierLong: "Pour les câbles longs (>30m), installez un amplificateur en ligne",
    noteOldReceiversFirmware: "Les anciens récepteurs peuvent nécessiter des mises à jour du firmware",
    noteAvoidInterference: "Évitez les sources d'interférence (téléphones sans fil, routeurs WiFi)",
    noteCheckCorrosion: "Vérifiez toutes les connexions pour la corrosion"
  }
};

// Текущий язык (по умолчанию английский)
let currentLanguage = 'en';

// Функция для переключения языка
function changeLanguage(lang) {
  currentLanguage = lang;
  updateAllTexts();
  
  // Сохраняем выбор языка в localStorage
  localStorage.setItem('selectedLanguage', lang);
  
  // Обновляем атрибут lang у html
  document.documentElement.lang = lang;
  
  // Обновляем активную кнопку языка
  updateLanguageButtons();
}

// Функция для получения перевода
function t(key) {
  return translations[currentLanguage][key] || translations['en'][key] || key;
}

// Функция для обновления всех текстов на странице
function updateAllTexts() {
  // Обновляем все элементы с атрибутом data-translate
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (element.tagName === 'INPUT' && element.placeholder) {
      element.placeholder = t(key);
    } else {
      element.textContent = t(key);
    }
  });
  
  // Обновляем описание шага
  updateStepDescription();
  
  // Обновляем динамически созданный контент, если мы на третьем шаге
  if (currentStep === 3 && satelliteData && userLocation) {
    generateConfigurationDisplay();
  }
}

// Функция для обновления кнопок языка
function updateLanguageButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === currentLanguage) {
      btn.classList.add('active');
    }
  });
}

// Функция для обновления описания шага
function updateStepDescription() {
  const stepDescription = document.getElementById('step-description');
  if (stepDescription) {
    const descriptions = [
      t('step1Description'),
      t('step2Description'), 
      t('step3Description')
    ];
    stepDescription.textContent = descriptions[currentStep - 1];
  }
}

// Инициализация языка при загрузке страницы
function initLanguage() {
  const savedLanguage = localStorage.getItem('selectedLanguage');
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  } else {
    // Определяем язык браузера
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
      currentLanguage = browserLang;
    }
  }
  
  changeLanguage(currentLanguage);
}

// Функция для создания случайных звёзд
function createRandomStars() {
  const starsContainer = document.getElementById('space-background');
  if (!starsContainer) return;

  // Отключаем звёзды на мобильных устройствах
  if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    starsContainer.innerHTML = '';
    return;
  }

  // Очищаем существующие звёзды
  starsContainer.innerHTML = '';

  // Создаём 3 слоя звёзд
  for (let layer = 1; layer <= 3; layer++) {
    const starsLayer = document.createElement('div');
    starsLayer.className = `stars stars-layer-${layer}`;

    const starsCount = layer === 1 ? 200 : (layer === 2 ? 150 : 100);
    const sizeMultiplier = layer === 1 ? 1 : (layer === 2 ? 1.5 : 2);
    const opacityBase = layer === 1 ? 0.8 : (layer === 2 ? 0.6 : 0.4);

    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';

      const size = (Math.random() * 2 * sizeMultiplier).toFixed(2);
      const left = (Math.random() * 100).toFixed(2);
      const top = (Math.random() * 100).toFixed(2);
      const opacity = (Math.random() * 0.5 + opacityBase).toFixed(2);
      const animationDelay = (Math.random() * 5).toFixed(2);
      const animationDuration = (3 + Math.random() * 7).toFixed(2);

      star.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        top: ${top}%;
        background: white;
        border-radius: 50%;
        opacity: ${opacity};
        animation: twinkle ${animationDuration}s ease-in-out ${animationDelay}s infinite alternate;
        box-shadow: 0 0 ${size * 2}px white;
      `;

      starsLayer.appendChild(star);
    }

    starsContainer.appendChild(starsLayer);
  }
}


// Вызываем функцию при загрузке и при изменении размера окна
document.addEventListener('DOMContentLoaded', createRandomStars);
window.addEventListener('resize', createRandomStars);// TURKSAT Satellite Setup Application
// Исправленная таблица размеров антенн по уровню сигнала (диапазон 41-54 дБ)
const dishSizeTable = {
  54: '45 см', 53: '50 см', 52: '50 см', 51: '55 см', 50: '60 см',
  49: '60 см', 48: '60 см', 47: '75 см', 46: '80 см', 45: '90 см',
  44: '100 см', 43: '120 см', 42: '135 см', 41: '150 см'
};

// ============ ОБЩАЯ ЗОНА ПОКРЫТИЯ TURKSAT - ТОЛЬКО ДЛЯ ВИЗУАЛИЗАЦИИ ============
// Сюда вставить полигоны покрытия
const turksatGeneralCoverage = {
  "type": "FeatureCollection",
  "features": [
    {
      // ============ ПОЛИГОН 1 - Уровень сигнала 41 дБ (300 см) ============
      "type": "Feature",
      "properties": { "signal_level": 41, "description": "Средний сигнал" },
      "geometry": {
        "coordinates": [[
          [-10.918292575717086,37.92057212895061],[-10.24756930728367,36.69592362661858],[-9.821415591611105,36.05309842440957],[-10.519367026037672,36.09981152656714],[-11.003931506779175,36.129060830557066],[-11.537351442462436,36.14987905929467],[-12.1336512540541,36.17819198180234],[-13.145419046401749,36.023879760335696],[-13.998392566349436,35.66830380167545],[-14.23063854723462,35.31112278804489],[-14.382260426293588,34.74958047378823],[-14.369070018560377,34.5446596039284],[-14.084269070134232,33.75770305719161],[-13.54664819852376,32.96760109600382],[-12.769770681229472,32.07659698902802],[-12.108840028409329,31.387030983601846],[-11.533045133971502,30.83204142289919],[-11.310190172842509,30.615391742877748],[-10.53252564140103,29.99743757146716],[-9.7738622548906,29.39848415553509],[-9.236602094838501,28.98380291867029],[-8.156357024578078,28.28616164361599],[-7.775536247260374,28.067404203261106],[-6.606272737403575,27.58478151616512],[-5.571591747078012,27.30138360339415],[-3.8217156202291336,27.36848268787561],[-3.0332948907890556,27.489083014489605],[-2.1438604143682007,27.415092042305208],[-1.3040161009811073,27.362844132939877],[-0.44265723304809146,27.28554999887526],[0.3462226121928611,27.35174478001888],[1.0526027369126318,27.608603698422897],[1.675463628141455,28.099796507941576],[2.108810359214032,28.46016379260684],[2.301162580403978,28.58012929379],[2.9851072456864585,28.855487095122466],[3.7816617742502343,28.853617018669556],[4.600562385552133,28.725131539607066],[5.528377199318066,28.35277194641741],[6.307876583396513,28.079011985765423],[7.67160741219556,27.548374306034752],[8.78880607854825,27.095846834143853],[10.301842667583927,26.63516229882886],[11.78667883070643,26.29458197479135],[12.71395884148523,26.151462203092297],[13.220229595927433,26.057823811447747],[13.901831770023524,26.02545925986919],[14.59556864808719,25.960887797169153],[15.944939528525278,25.94357638208857],[16.600449119644637,26.025652013288013],[17.25779375895436,26.04185917533721],[17.91330934032791,26.107010483422044],[18.544564445467824,26.12965570883569],[19.21976486310777,26.13246447301952],[20.577899452441795,25.907970902786218],[21.87594781507041,25.622955551234977],[22.560677562790985,25.412857727854387],[23.198300005010598,25.276457413045296],[23.500839439417824,25.16989986016561],[24.61320516207409,23.870812252024745],[26.17326375582394,21.649823100534757],[27.469650474574188,19.529192297520456],[28.32658406832401,18.284928092850436],[29.084640708948818,17.453843851908267],[29.996505943323932,16.650680433406645],[30.787521568323786,16.014178846021235],[32.69914266207377,14.906069280441006],[34.03947469332405,14.17837226159291],[35.37980672457415,13.437549785530392],[36.61027547457413,12.780679804012474],[37.906662193324024,11.721784004566702],[38.280197349573875,11.212459729663165],[39.32389852144913,10.256413224090435],[40.37858602144878,9.733680392234744],[41.180587974574024,9.537439285373344],[42.66374227144918,9.417457670180276],[44.20182820894893,9.450184138836828],[46.38810750582405,9.548344593059884],[48.28874227144931,9.690081265513951],[49.958664146448726,9.908019008643844],[51.24406453707412,10.169350540947455],[52.92497274019892,10.658759720411032],[54.990402427698804,11.689301908203726],[57.35246297457372,13.222378791483862],[59.07731649019901,14.189091146813409],[62.52702352144852,15.897261149016172],[66.14152547457408,17.864617552037608],[66.80070516207422,17.274493540622],[67.32367021286876,16.649662945276727],[67.71698867576549,15.916976705426578],[68.12238814158975,14.85892332608432],[68.39100584325115,13.933504580782254],[68.79997289720693,13.135961591750558],[69.35052576012262,12.332770352707229],[69.94440570720515,11.716058357105664],[70.51051071980912,11.098851210907162],[70.96934447611103,10.457804673279583],[71.39651526051198,9.652735474805105],[71.8078545589623,8.731567143502941],[72.12201419842195,7.872752870845521],[72.24202696863503,7.562374221209269],[72.44869545858145,7.045129674456045],[72.64946074197853,6.593979725822302],[72.89369222421855,6.154560493054912],[73.10781938358949,5.840538793777327],[73.3247462445241,5.550750446778539],[73.65670892935468,5.173077122363721],[73.88403646354713,4.937325585607913],[74.3679145989564,4.6742955717307355],[75.17088298657252,4.26200634950158],[76.47266623660073,3.897171424252059],[77.21791460032168,3.819536310884988],[77.88343195561815,3.777957077038958],[78.47450595766601,3.809587435553349],[79.36402893127654,3.8916119602721064],[79.97736756418267,3.996064123889663],[80.73545989751197,4.084139685013797],[81.44032025408369,4.28121784183266],[82.29105643140745,4.615415328708814],[83.17705072333197,5.128159306907501],[83.34156932041928,5.25039081251455],[83.55003323000707,5.4276511853045735],[83.90241637144803,5.718739038881078],[84.07721191084893,5.917554284296695],[84.41069845392063,6.264346209507211],[84.76278730051018,6.802927439864997],[84.97637876357238,7.3380596227686095],[85.1781962763341,7.943692391126883],[85.28135987189226,8.345346049772877],[85.4068536716744,8.837073095516704],[85.55487694193334,9.340576901545942],[85.6168151759139,9.539576905238583],[85.84286885416141,10.042124837565277],[85.99262274614838,10.293826133608075],[86.10041258979182,10.453925047987608],[86.24940116390408,10.676428737137579],[86.31846731698104,10.752905850775504],[86.45207814779248,10.898593003038034],[86.64651538558698,11.107026579527515],[86.75010379097252,11.21263489792992],[86.87095144482186,11.29863375239278],[87.00084131093767,11.383631374787074],[87.14308630031307,11.480984147510531],[87.35084464549611,11.616308532869082],[87.49913099989456,11.712368431634795],[87.62556729664676,11.799600476184752],[87.78654084226268,11.892938075871484],[87.97094107595771,11.954469058749302],[88.2937496906525,12.061607288313123],[88.4999116811356,12.129349021618715],[88.79877762058179,12.228396228441861],[89.1043467470896,12.29883790442483],[89.33274639019993,12.353629070904265],[89.67497116587687,12.430964614301196],[89.82534548874577,12.462876011482034],[90.00946362111605,12.492661840199052],[90.21782207011802,12.526443108880049],[90.43917029308949,12.560870039521868],[90.61895187686078,12.588873021700396],[90.8448650432802,12.62243026849499],[91.01026175885747,12.58728036063457],[91.17017446960753,12.549468047000074],[91.46363504286758,12.485020570270056],[91.77031731657159,12.379564469611076],[92.07826054891393,11.967065970784956],[92.25668998247188,11.610335290594321],[92.445921828273,10.802375915079885],[92.45264712617343,10.04931991951838],[92.30220118137328,9.082945260492583],[92.18303289647348,8.117330345581022],[92.05753078527364,7.282724443491963],[91.98314228960419,6.045948832064788],[91.94045487770704,5.345142302050523],[92.00700179675852,4.600314008394369],[92.08971373284726,3.8211121215630324],[92.1886693047595,3.229058367504231],[92.33706335323436,2.7195156100196485],[92.50327087551912,2.3160747741869834],[92.70243738217873,1.8793547705200047],[93.01696033415055,1.4660434733868188],[93.6658978778269,0.808407325335204],[94.18809062054858,0.24175026384571754],[94.94551900751549,-0.42316964920594896],[95.65343121471142,-1.0984391068181538],[96.39991646783368,-1.7842835147518261],[97.22812310425307,-2.414455266944439],[98.09050278669031,-2.8178128668742173],[98.45217129795054,-3.0014715485948527],[99.22033394983525,-3.2623973880910837],[99.87105283948505,-3.486658987013293],[100.66133188503177,-3.6750132685354484],[101.33342737745795,-3.8215954246457238],[102.25741683244516,-4.115536854929821],[102.91830722997798,-4.2734961307578585],[104.41101212269344,-4.220115239647709],[106.23838399532207,-3.895547369535603],[107.04362630820694,-3.54557322186418],[108.6284992835951,-2.9453669720940963],[109.99782765092445,-2.3688958870086143],[111.42783174739039,-1.8705450917740516],[112.5196863931844,-1.4444118161005988],[113.85886867401204,-0.954855314071521],[114.89245867823026,-0.5199948036715714],[115.81853161602102,-0.08338394927378417],[116.70450450470351,0.38612925997129904],[117.24636790216982,0.9669759906268307],[117.38546366340313,1.5686265083428672],[116.92766779401968,2.142971364908337],[115.76493196870302,3.0501686257225353],[114.83749472010693,3.859217949201615],[114.38476242393416,4.4461728703983],[114.32319119772255,4.988176307730248],[114.7098860533665,5.911584119041324],[115.21085066868903,6.816400016404218],[115.63711422634977,7.400678872563346],[115.96889984232789,7.964214542832628],[116.19082217705521,8.59257897242871],[116.02163197723125,9.13412966898918],[115.74807166022052,9.737522731171309],[115.25203819867808,10.315434897043719],[114.60439378236026,10.875965038084233],[114.1707082929513,11.477973951705575],[113.82214312507655,12.073729673429026],[113.58457564009055,12.64877956273512],[113.48776455384753,13.236162705442469],[113.53274279978815,13.815853090495201],[113.75832051618262,14.432931068657345],[114.20591469292592,15.064672972369573],[114.84762841620272,15.69709404812573],[115.73579986937712,16.334160721970203],[116.26228305690184,16.649265383006263],[116.89313636161378,16.990277158659165],[117.60795239539145,17.331853836067637],[118.23551193109009,17.577913077195625],[118.83419789701908,17.833295128284615],[119.29960571754764,18.030313202418892],[119.78822165157453,18.202842913435834],[120.43998354892541,18.39654844079237],[121.07334132800109,18.598937230240114],[121.55365850123351,18.710926292797687],[122.38469478694313,18.81702403373296],[122.65410157368296,18.853256585050673],[122.71685887381867,18.88191148476488],[122.70973423842992,19.10116028065662],[122.68260483133264,19.35346695089294],[122.63371782692627,20.222099178588696],[122.57735595483886,20.240218799264017],[122.00789906707378,20.275627778186923],[120.38649740309751,20.38718019099941],[119.72955989467867,20.458533518803357],[119.31432160501012,20.540202362204642],[118.70965023736005,20.650418703350844],[118.17639000252251,20.78121987355765],[117.46468976579006,20.873491298845003],[116.81890749780835,20.98118351732899],[115.42101676954177,21.256764398778245],[114.04412176361298,21.39298803873712],[112.59306904284071,21.57019526785531],[110.56646615303126,22.023562239879013],[108.94635740384659,22.56732762767312],[107.92812242407344,23.382203743799796],[107.71729724225084,23.921072767967395],[107.53943104480342,24.507949639109796],[107.39243888428317,25.30443846333044],[107.15198474451708,27.092290629948266],[106.98562323631214,27.738367182038147],[106.8192617281066,28.14714569246456],[106.09880086519877,28.991818302196375],[105.50925813016781,29.764403974602875],[104.99661969201152,30.245282859705938],[104.32596747554298,30.796749154659533],[103.64982209501154,31.24598181136599],[102.79240230041763,31.697763510308075],[101.82511922457407,32.1239645694173],[100.59594082872093,32.40533213943643],[99.24591282349319,32.61610916533429],[96.83150134428689,32.7673915137172],[95.38646744837554,32.88397712745608],[94.41252649831674,33.09485344938121],[93.39848248882372,33.35572895989984],[93.19412493858792,33.46063295121008],[92.61786833420923,33.784229802466406],[92.33876821139073,34.026618844547954],[92.02600118258182,34.416473606126104],[91.7740022812145,35.321364990513956],[91.37986775973037,36.00163938154341],[90.78935262301111,36.65723726683279],[90.0477754745738,37.023697562865536],[89.09196492769924,37.31383367446855],[90.69596883394875,38.48900953928815],[94.26652547457388,41.00727062317979],[97.50749227144904,43.030508642384405],[98.33146688082392,43.48018675248437],[101.71525594332404,45.29973366634217],[107.25515236133438,47.568929562577274],[112.68239845508381,48.84298831181496],[116.2859140800843,49.666370601746216],[118.03823341602184,50.07819270988902],[113.33608497852168,61.15016518700925],[107.99672950977194,61.26146506979563],[100.16347755664701,60.78704949944677],[95.59316505664724,60.803157120604396],[90.92082538915056,61.01381652212793],[89.00920429540011,61.442801288397625],[86.09782734227544,61.7724162936202],[83.01066913915044,61.87632165566779],[78.11076679540055,61.90224289906304],[75.62785663914991,61.92296404465316],[73.14494648290056,61.92296404465316],[70.77189960790015,61.9281421306966],[67.95939960790042,61.73075528139541],[64.850268748525,61.26344798038491],[62.15861835790012,60.74069378208783],[53.940844920400394,58.81924772288652],[51.56779804540071,58.4065253984243],[49.41447773290066,58.18672280932022],[47.11833515477569,58.151891776314145],[43.163257029775735,58.209924481695346],[40.87810077977585,58.16931157251778],[39.713549998525615,58.08794591724619],[38.873095896963285,58.56186959815358],[36.50925095044007,59.71584168964799],[35.330486167842146,59.9462525076542],[34.69005146336924,59.999456945925],[34.19000187230487,60.027902959980985],[33.93165149999039,60.03434501938285],[33.42593708348663,60.03348615094175],[33.10716190648449,60.02618486460142],[32.81035938573245,59.99962889889499],[32.34859028172862,59.94094091992213],[32.007670787099876,59.871102536204496],[31.611819651845686,59.73739649319099],[31.19948902440453,59.54463115760361],[30.59764423680703,59.4613773518883],[30.24196186376002,59.436903132066554],[29.89451923680716,59.40821072067202],[29.287524607900526,59.31286104621234],[28.910544872309128,59.24995975407497],[28.293979928205832,59.21602616363767],[27.798264593477338,59.21587217743483],[27.180369080270506,59.299951827886076],[26.214988218198215,59.460956501431916],[25.227634699876088,59.71012528153499],[24.08097942374126,60.039985878630986],[23.252927663231755,60.363852974443205],[22.46417409528931,60.692110321357454],[20.9911796169772,61.30066506860805],[19.679647301627956,61.89484171440735],[18.619942456948547,62.38210578670317],[17.595919009783128,62.83703813068673],[17.040887169561582,63.058154223026996],[16.61834935181942,63.2424755634761],[15.380067091964335,63.755666125329824],[14.603169121912208,64.06900567897534],[12.474298069387348,64.90723890119042],[9.949919204362091,65.72001835909981],[6.705098250034417,66.77178856882223],[2.7391140105226137,67.67729875182387],[-0.8346966653722866,68.48046693099852],[-3.0337690143370826,68.87509579365236],[-19.19467758218631,71.49930005355066],[-19.574264125254206,71.47867263972512],[-20.143627204768777,71.13351959893086],[-20.924671578892394,70.63133036411843],[-22.32660010012506,69.61956640928084],[-23.71266972716133,68.46405015686402],[-25.16523588897183,67.09423357480654],[-26.67704143081468,65.4672741838288],[-27.76253404548595,64.09822200723902],[-28.991925860634314,62.38708801708618],[-30.2438287994587,60.345967197152895],[-31.78524548998825,57.2249657368781],[-33.227785227393184,53.804598563892455],[-33.229678404713006,53.58360096066934],[-31.28055175118524,53.245875879000685],[-29.053547018171532,52.685393438709],[-26.797466526664863,51.944684833396934],[-24.451338135346067,50.829861076906084],[-21.914574975876825,49.40379397632579],[-19.167492363227396,47.428423358325254],[-16.15153461684929,45.16666664875757],[-13.916048318526288,43.41872207549477],[-13.115333458153907,42.69459494232516],[-12.468427191531504,41.929054582398074],[-11.779748424136205,40.85035624206039],[-11.457032140403799,39.78073129146697],[-11.234183162658542,38.871192808866034],[-10.918292575717086,37.92057212895061]
        ]],
        "type": "Polygon"
      }
    },
    {
      // ============ ПОЛИГОН 2 - Уровень сигнала 43 дБ (150 см) ============
      "type": "Feature", 
      "properties": { "signal_level": 43, "description": "Средний сигнал" },
      "geometry": {
        "coordinates": [[
    [85.59347504597642,9.541899526512736],[85.82986061304888,10.052920219231106],[86.22630542054017,10.688673943421886],[86.73308012822487,11.221699344784321],[87.7700492158994,11.897270122896616],[88.79174951834614,12.229697718672073],[89.89938961785339,12.47673485296948],[90.83027415900204,12.621744463718734],[91.46302806529127,12.483793160937553],[91.74888208847591,12.387792097237678],[92.05538690155768,11.966564210726927],[92.23280235917032,11.620496020736446],[92.42097616065404,10.763161262429072],[92.44142693357304,10.045238854930922],[92.02242458149216,7.290457013622833],[91.90704827920926,5.4579875029290355],[92.05661687047565,3.7556788784325166],[92.3345474982606,2.682441804864944],[92.70036875104562,1.8735739391648005],[93.00331088064799,1.4355535886560558],[94.16318660400039,0.22327273840679923],[96.36127033516532,-1.7741581175796222],[97.20803570695537,-2.4220677569455087],[98.43190092319134,-3.0017584992191715],[99.8733013047469,-3.502066516098785],[101.29453693411358,-3.8096047799970902],[102.24260569257484,-4.1071344003551165],[102.89404359166149,-4.283241743028593],[104.40314266509793,-4.208413864229964],[106.23093980582985,-3.889664819185525],[108.56835297262835,-2.9587614560600937],[109.17193233854698,-2.705229131390782],[109.83593650915282,-2.424017512190329],[111.39619535927794,-1.8749689930283329],[112.52520490139784,-1.4403360296277612],[113.84663951298205,-0.9449983357161357],[114.83331977130639,-0.5398145951957319],[115.7931915184239,-0.0915143238662679],[115.96885542281468,0.008126556768154502],[116.68184115406265,0.38238615754308825],[117.23003196343524,0.9750461314663882],[117.35771020446161,1.5645443685402294],[116.89487330876902,2.1483485435911986],[115.71993528975021,3.068038685318041],[114.81565996329006,3.856562382388411],[114.36457067198609,4.451406651941276],[114.29746751931394,4.984128574946655],[114.68444137295054,5.925166125753193],[115.19605728030581,6.827661814395852],[115.61201714772007,7.398313700706313],[115.94567845981531,7.966508955272608],[116.1653861452326,8.595843498775135],[116.00195507583163,9.13264974055803],[115.72316756111844,9.739488424129142],[115.22376854456083,10.323242806913852],[114.59781078063065,10.863655077074071],[114.15085692143072,11.470135172636848],[113.79019847079635,12.090843974727854],[113.56008376826095,12.646386667011548],[113.46311729502587,13.247794769272245],[113.50897308741564,13.815494977293723],[113.73553171645665,14.437351009246512],[114.18016695749236,15.067834526141368],[114.82471548063847,15.702339234469504],[115.70959785538554,16.335212225409116],[116.27682678814371,16.674137033194253],[116.85098191928549,16.983227462166074],[117.58500281287593,17.33266962831212],[118.41539305078032,17.664568516384133],[119.24121258909014,18.017878914101008],[119.7392872125845,18.197603159529088],[120.34784143796949,18.380774199074413],[121.06265233221835,18.60147233104757],[121.53646267848664,18.710969667625797],[122.6296531140333,18.852962421121763],[122.69567265700117,18.889467012470103],[122.66002166808423,19.342429552821095],[122.61338435104261,20.214711483240986],[122.55076799802458,20.238376927956534],[120.76232752779863,20.357909088750986],[119.67426547554125,20.466994364883405],[118.84033140535858,20.61556544815255],[118.15471276486369,20.779489168855203],[116.99496230027971,20.94175328680427],[115.39784864668187,21.253135763609336],[113.97753805767987,21.398572464994114],[112.57920012492792,21.564418234587734],[110.52569582676803,22.02816170063226],[108.92390502558477,22.564825892245427],[108.21675939970164,23.132027749781777],[107.90563081527634,23.373323039354172],[107.6951348824385,23.9186805245898],[107.54506375428826,24.38627691218033],[107.4797027960948,24.70750541517189],[107.37588968946328,25.252909730616285],[107.32690663075007,25.656141292751133],[107.24078863012642,26.30255890299793],[107.12988826926527,27.097591432045895],[106.96301918816748,27.746172447596827],[106.79956911191006,28.146742241657613],[106.41224415470703,28.602835427633387],[106.10451318561368,28.960139712891387],[105.81654736204493,29.339267872905175],[105.48715524482095,29.767532522626716],[104.99029617397765,30.233296173960635],[104.5762300171237,30.581686716372953],[104.3095544892665,30.795327812769447],[103.63134717032437,31.24471450580955],[102.78599520006496,31.696605048141464],[101.79351369143707,32.13684937874195],[100.55076359928042,32.41302725065318],[99.24758870243605,32.609350275207106],[96.90133725565832,32.76396253030356],[95.3940255917632,32.87791022480254],[94.42885065835473,33.0819336582421],[93.38677142807099,33.35004698757319],[92.60075304063969,33.77436600168021],[92.30921829729049,34.047037299637076],[91.98465648635263,34.42602612423471],[91.73717005813067,35.35001886462878],[91.34074069394623,36.005657006335696],[90.77147446708555,36.657099895188395],[90.03342849375544,37.015357846234984],[89.08482266977728,37.31550985754822],[87.50232012647007,37.523841423260194],[91.83496143234026,40.79516093833447],[95.04652618945968,42.94863550647145],[100.00877000701514,45.93190231606758],[102.84190247058358,47.51510695895169],[106.98954521897062,49.78425379589459],[109.25590221948795,50.63518700267434],[110.64335297000497,50.98113113090565],[113.75955978891253,51.663294392990316],[117.01309570938226,52.33865292279125],[116.52542801368251,53.898165354357424],[115.52479084864913,56.3183530602608],[114.96360680861616,57.599100363375776],[108.94627090329223,57.35621851093567],[102.31760783344285,57.062643238711644],[99.99204582976779,56.95221365925335],[97.20328826543056,56.89265835018959],[92.81384583486923,56.83364515582812],[89.63289949805772,56.84083128337671],[84.72330006051281,56.967780943060454],[81.2193060058029,57.11364552830528],[78.29177186907305,57.352135466218826],[73.59802433195813,57.58887956006352],[70.58098454777564,57.65213021680602],[66.65326640624865,57.53730952284529],[63.07112999898353,57.150664442514525],[59.80789382660065,56.54896049095012],[56.1273255450969,55.772126426681574],[52.6335990215328,55.06362484774648],[50.54615958787542,54.84521755050886],[48.516266512687096,54.7622067221327],[46.20072890624911,54.86955741132821],[45.73668203124947,55.059678819451506],[44.834682031249,55.4980685351911],[44.820082031249186,55.50559244844719],[43.880082031249295,55.922922104427045],[42.92158203124925,56.44730182778625],[42.08528203124913,56.74315388912314],[41.934082031249304,56.80013762384877],[40.91868203124936,57.403189114204714],[39.86798203124951,57.97003505305731],[39.67798203124906,58.081399017138494],[38.77298203124924,58.60411303811915],[37.64438203124918,59.14941095570726],[36.83098203124904,59.530774246331056],[36.47288203124917,59.698732137656826],[35.325082031249366,59.931707518495074],[34.1940820312493,60.01709213471381],[33.078782031249226,60.013781093472836],[32.00578203124952,59.86960064365933],[31.530482031249402,59.67425076241741],[31.02958203124903,59.4699725148184],[29.948282031249633,59.3965290020626],[28.906582031249208,59.22827179246376],[27.814582031249408,59.18231977841228],[26.614882031249422,59.34535944710887],[25.292982031249345,59.69140778972358],[24.044982031249315,60.038764413447595],[23.90518203124933,60.076590603141476],[23.09728203124964,60.4167273843914],[22.2595820312495,60.76559719571772],[21.384482031249362,61.13032429361937],[20.47248203124935,61.50549085154495],[19.69598203124957,61.87454100013563],[18.32578203124935,62.5071937296017],[17.199382031249407,62.98372311857617],[15.99818203124924,63.48042858799955],[14.838082031249602,63.969815888954194],[13.218982031249395,64.62418258333186],[11.813682031249161,65.11017371093097],[10.285382031249158,65.6244703136306],[8.665242031249418,66.14951170922922],[6.865312031249323,66.71369839400333],[6.756312031249493,66.747718450644],[5.15725203124957,67.11742503223695],[3.401822031249378,67.51734223217439],[1.4203820312494304,67.96503339662657],[-0.8541299687504323,68.4671236544989],[-2.9333979687505383,68.82329724612401],[-5.368937968750715,69.24139602306781],[-6.765957968750372,69.47814648359733],[-8.362457968750505,69.74882035074636],[-10.269617968750453,70.07178448487838],[-12.76681796875032,70.49320694338168],[-14.718217968750492,70.78536465134036],[-16.10411796875048,70.99883863986388],[-17.085817968750398,71.15289780145044],[-19.202217968750457,71.49263261093479],[-19.576117968750385,71.46453038003071],[-19.915517968750333,71.27062542872426],[-20.20671796875038,71.06939466339246],[-20.538717968750454,70.87529057727319],[-20.837317968750472,70.67626947816619],[-21.123517968750313,70.47574377862372],[-21.380017968750376,70.27080299262943],[-21.656017968750344,70.06957651840236],[-21.91441796875044,69.86584189241134],[-22.207417968750374,69.66802949892946],[-22.471317968750284,69.46610319079888],[-22.725117968750332,69.262873121153],[-22.960217968750356,69.05703463934293],[-23.21551796875033,68.85481007102732],[-23.46331796875042,68.65168322463788],[-23.709617968750408,68.44865770591349],[-23.94251796875041,68.24392707999847],[-24.173917968750562,68.0391974569378],[-24.380417968750322,67.83095635405844],[-24.62291796875042,67.62863733537014],[-24.798417968750453,67.41628373347707],[-25.039317968750332,67.21416749718766],[-25.22371796875034,67.00372282998363],[-25.4437179687502,66.79899947676827],[-25.629417968750438,66.5892595009843],[-25.81391796875038,66.37962100817937],[-26.027417968750367,66.17459987804028],[-26.22531796875032,65.96737209812171],[-26.407917968750336,65.75813841700096],[-26.596917968750237,65.55011011110862],[-26.769517968750353,65.33987525325843],[-26.929617968750357,65.1279356401633],[-27.11121796875039,64.91930877759131],[-27.259717968750632,64.70606706665669],[-27.440117968750396,64.4977436732346],[-27.592517968750283,64.28550793429191],[-27.7777179687504,64.07819046283657],[-27.939217968750317,63.867562777677044],[-28.068817968750405,63.65252114459979],[-28.232417968750482,63.442498098764915],[-28.408317968750392,63.234382877428054],[-28.55121796875035,63.02175344369431],[-28.707617968750455,62.811132205652726],[-28.8254179687503,62.595194121011346],[-28.975717968750356,62.384073844982694],[-29.112817968750434,62.17104842314576],[-29.27111796875047,61.96133561996573],[-29.38241796875044,61.74500171321396],[-29.502417968750354,61.529973656820275],[-29.660417968750426,61.32056600103478],[-29.769417968750282,61.10423638409818],[-29.899817968750405,60.89111903256508],[-30.038417968750355,60.67920715709548],[-30.172617968750238,60.466795030303665],[-30.288417968750213,60.25197630040456],[-30.392417968750323,60.03555370452438],[-30.511217968750305,59.821339976467684],[-30.630017968750412,59.60712774852693],[-30.734217968750244,59.39111104507771],[-30.865717968750367,59.17880816451225],[-30.96591796875036,58.962393211568006],[-31.06431796875039,58.74587949998933],[-31.196417968750367,58.533882205302135],[-31.278217968750532,58.3152647304567],[-31.38421796875041,58.09995971938508],[-31.492217968750253,57.88495728628836],[-31.614917968750337,57.672063314286945],[-31.699917968750306,57.454154626365046],[-31.795417968750343,57.237752480626575],[-31.901117968750434,57.02275652837865],[-31.98231796875039,56.804551861662866],[-32.08741796875047,56.58965954826002],[-32.183617968750426,56.373565029283725],[-32.25911796875026,56.154863845304355],[-32.35661796875045,55.939073693189826],[-32.44341796875044,55.721880768502416],[-32.532317968750405,55.50509085416491],[-32.62781796875039,55.289205540754956],[-32.70491796875047,55.07101466465734],[-32.78921796875042,54.85382873391132],[-32.861617968750394,54.63503952847006],[-32.958117968750386,54.41946220671625],[-33.04051796875036,54.20218131615385],[-33.11021796875036,53.98329722218451],[-33.21161796875062,53.76842746150832],[-33.21281796875041,53.55305792931608],[-33.21281796875041,53.55305792931608],[-31.737417968750442,53.32103864915279],[-31.108717968750383,53.19615235873697],[-30.237217968750308,52.995332474964314],[-29.044517968750263,52.66431416186441],[-27.986017968750204,52.34684159667796],[-27.14321796875038,52.05785980851544],[-26.11081796875037,51.614312922503636],[-25.2695179687505,51.19825677485199],[-24.342717968750385,50.77298012319021],[-23.549517968750376,50.36777067538063],[-22.893017968750314,49.942107565771835],[-21.84231796875064,49.342842274741585],[-20.95041796875028,48.77006935811148],[-20.817817968750465,48.68532303725451],[-20.135217968750432,48.179258621434535],[-19.529717968750603,47.68754647413962],[-18.508517968750425,46.9586729235375],[-18.087617968750507,46.62804015439032],[-17.3637179687505,46.10698019258445],[-16.707817968750543,45.59916927062149],[-16.104217968750646,45.14702300378612],[-15.54631796875041,44.70411139985324],[-15.418617968750429,44.60283564383218],[-14.782817968750358,44.11361036507677],[-14.194717968750707,43.63452353392812],[-13.665417968750631,43.166075879276875],[-13.172217968750425,42.70586044104006],[-12.592817968750417,42.078219417916955],[-12.376717968750407,41.81724274943083],[-11.877617968750638,40.97297678014196],[-11.692917968750487,40.4981742911211],[-11.578017968750533,40.16112756927085],[-11.383117968750508,39.3715666258],[-11.342917968750484,39.235030757401915],[-11.166117968750374,38.59105957962553],[-10.918217968750449,37.87032664147376],[-10.894817968750315,37.816598544535466],[-10.457517968750508,37.038560611698145],[-9.817766718750368,36.05476155195015],[-11.000734882813006,36.12982091047375],[-12.134264570313121,36.17363806676986],[-13.150787812716175,36.02114784431988],[-14.005262715275464,35.66017497239264],[-14.233962584887923,35.31090527503972],[-14.382160195449908,34.74442227475888],[-14.37254079678807,34.54837623703903],[-14.081779025649062,33.76135234434964],[-13.552026632288793,32.96839121109298],[-13.107249312561796,32.46097332032904],[-12.651485664709767,31.96938553588837],[-12.123502222463479,31.393355669221403],[-11.309874248967173,30.62389877011923],[-10.568322119978294,30.023826551941923],[-9.716906709739389,29.35752376401933],[-9.235922498423216,28.979383308572007],[-8.760431451169508,28.6773798557747],[-8.18194357774394,28.302863236786123],[-7.780089777749886,28.069250232547528],[-6.605170277462997,27.57901303470366],[-5.567579878738587,27.29777219689209],[-4.69184585107672,27.327726325080537],[-3.860057135914781,27.371159423536955],[-3.0314406430909653,27.4885960306325],[-1.3004951189019005,27.364440756926772],[-0.44057347391503815,27.284233895148102],[0.35916483558993695,27.352227583302813],[1.0523390371295385,27.605230767188782],[1.2992502372866883,27.818847174647043],[1.673942919745411,28.097821049530847],[2.1150434777944382,28.46326866833654],[2.293073660791708,28.574522233161332],[2.9902078476952973,28.85505690558689],[3.778425021561566,28.850406052964704],[4.595577964238596,28.726843412529682],[5.486277937216644,28.364733840967887],[6.329313083084963,28.067868306164844],[8.057895735364298,27.397840762208716],[8.770974469969165,27.104613936852264],[9.567145186794585,26.851062108332137],[10.351978376965857,26.61834891718861],[11.803376631733698,26.284407605052294],[12.512854415310086,26.183574589700637],[13.202880486506302,26.06382586329007],[13.90181294880978,26.02731571999573],[14.597998829082039,25.958520385748137],[15.934138322635494,25.94561269016817],[16.602208069412235,26.025154948492034],[17.276008452991988,26.04853914081938],[17.966288328759262,26.106640603470392],[18.575934249294466,26.130911596357347],[19.220913687708514,26.129797751276396],[20.535190178301015,25.918841106239984],[21.89890514545601,25.617890575612442],[22.534027220734124,25.41968839232075],[23.20485486241846,25.278606982373624],[23.849472154952775,25.041832620119987],[24.49134286545589,24.8797832578048],[25.132384091149582,24.610294267244612],[25.299354237849403,24.57794348664479],[25.8035826171866,24.024750103863482],[27.347840552219772,21.89144773645777],[28.519410245068826,20.05405881537785],[29.632538841493627,18.5491547422383],[30.559891713924106,17.575901364700137],[31.968914453124214,16.46452461965804],[33.14256926583341,15.727945471624565],[34.080959172188045,15.210483874527394],[35.53892365661528,14.526301182890846],[36.96004457070406,13.987330796587424],[37.483837449623735,13.77370273541162],[38.08631006095799,13.46845591022796],[39.47620229610369,12.995695342792446],[41.357671851176605,12.478437011991252],[43.063360156249175,12.187193171214727],[44.680660546874506,11.929279921953185],[45.566215039061674,11.811053113280984],[46.657185644530536,11.784394922228532],[47.79593266601444,11.97665695062544],[51.331614770506604,12.645172864888682],[52.03378199462788,12.914119846273039],[53.40611523437382,13.78485967682161],[54.766427310410585,15.089564440107148],[56.1277018212375,16.153478627746804],[57.742858915193594,17.30699969575452],[58.93819964416418,17.81792892343127],[61.34237990020656,17.82006634508169],[62.60398203124887,18.01151536508177],[63.86249414062396,18.482968866638338],[64.89029335937383,19.026270808457618],[66.12105087890501,17.861977536424973],[66.7448419831494,17.303789138791068],[67.00883084130034,17.000404307321574],[67.31035117987616,16.640131004553204],[67.69559706382017,15.914751559226113],[67.82880174877414,15.566967999968867],[68.10913929873206,14.834057623038646],[68.34553153618991,13.991369630133617],[68.53061328283117,13.62575635155408],[68.77711728063623,13.135324224871953],[69.32437233697864,12.340471246712854],[70.08311420972741,11.540459092986136],[70.47557992150703,11.111093941886365],[70.85980588719296,10.588710558407763],[71.06411246952929,10.238710126632297],[71.47990586827208,9.422274208814402],[71.78360962445669,8.733028865569342],[72.04091949994411,8.032589189797879],[72.20710624846065,7.59381224016402],[72.43713137581953,7.029571656338996],[72.61583522369509,6.624002019487554],[72.86045704031991,6.179612360705077],[73.1900792400759,5.706657634069193],[73.85302338299013,4.9496689386329615],[74.46510782734275,4.616494775798144],[75.15684315060147,4.261103557489848],[76.45883153294525,3.903450689500271],[77.20966843448662,3.8243847568273726],[77.8781078750904,3.7839380825276883],[78.45446939369775,3.809237130701683],[79.37140708418006,3.8897100105297358],[79.97234325917408,4.0030406305576225],[80.72159486385556,4.094292131846007],[81.43708461648126,4.295829934105758],[82.27548619026508,4.6226049140884005],[83.14663373942554,5.119084491374945],[83.86432994311774,5.702927283892917],[84.37921557934004,6.247545680033442],[84.73479263045452,6.799753705516413],[84.92480054733082,7.270751694245094],[85.17844105179313,7.963694300166523],[85.28672337525124,8.465512743056946],[85.39742988281101,8.878305174757163],[85.59347504597642,9.541899526512736]
        ]],
        "type": "Polygon"
      }
    },
    {
      // ============ ПОЛИГОН 3 - Уровень сигнала 41 дБ (120 см) ============
      "type": "Feature",
      "properties": { "signal_level": 46, "description": "Хороший сигнал" },
      "geometry": {
        "coordinates": [[
    [-0.5691908897171134,36.98535314544368],[-1.346807091933361,36.68131659437957],[-2.1505582862280255,36.43254148349733],[-2.899377839897652,36.17405261924795],[-3.7413357420762376,36.04914762006927],[-4.716633382370921,35.94640510390478],[-6.625088700840147,35.88795320116063],[-8.74112055929351,35.98047076034844],[-9.807958081809355,36.0550389889573],[-11.005309673385767,36.13061174164019],[-12.147729624337169,36.17494182082327],[-13.156521153523421,36.01944124926087],[-14.008757506928397,35.6599167750813],[-14.235127622106901,35.30534467348359],[-14.384593440410404,34.749946004490354],[-14.372271807508477,34.54180278189493],[-14.07821798142718,33.6980029531781],[-13.552940760716462,32.97130550937847],[-12.757200309499742,32.0672658480981],[-12.113480642478487,31.387012320013575],[-11.722446522332177,31.009786825159924],[-11.316410956074774,30.62078566725498],[-10.288274559739193,29.802348640172898],[-9.243342485041886,28.982588414685118],[-8.202703022654658,28.30945859454262],[-7.777762147116638,28.06697536353046],[-6.609305893161453,27.584298240422278],[-5.567746408097279,27.297995920397067],[-4.680557805691295,27.329267308372646],[-3.8454055735664108,27.370915595845883],[-3.036841221621347,27.489031459697397],[-2.2464337091374693,27.42658669351052],[-1.2863462232322689,27.362634390587317],[-0.4442046986875409,27.282221201659596],[-0.14900551190279565,27.308854307918807],[0.3430173553583875,27.34621742762923],[1.053393494103971,27.60706363885442],[1.2870286685029266,27.80980136995962],[1.6895786378237614,28.113267819553077],[2.1115969434700936,28.46053952229446],[2.2990998476076543,28.57755383764673],[2.9906492349843807,28.855188611559775],[3.774613329593773,28.85133451060778],[4.589476472054703,28.730131301610356],[5.466639280414121,28.373186301626514],[6.341223400890153,28.064568647837007],[7.118101602779652,27.76137186180865],[7.665922337613374,27.550550300878403],[8.10238411978085,27.379224088614748],[8.459699608346005,27.233884690182265],[8.76023693026528,27.10923205939509],[8.863020345934572,27.076675455029775],[9.418546689157601,26.901349253026908],[9.880206568290921,26.75781266448472],[10.331627019612485,26.624939520193898],[10.847567397487033,26.504772635480673],[11.38449996571254,26.38012336589439],[11.784275093752486,26.288484189374824],[12.754113435769806,26.14279620596651],[13.205142658866858,26.064569896602325],[13.894781195928733,26.028611198824297],[14.558327203693826,25.962851037421895],[15.931371772100668,25.94256540504391],[16.595798176445022,26.031508192729355],[17.26483734827248,26.041936595862047],[17.911903863849997,26.106931717707408],[18.57432302781747,26.135058289328548],[19.220262699597498,26.12847300812657],[20.560911705528103,25.90914868244672],[21.876841473177496,25.619708578013125],[22.538697215246184,25.42393898046842],[23.20604612137742,25.277803353458925],[23.848992763908043,25.030488456567245],[24.50292573456365,24.882927001284983],[25.141118554686074,24.622765476953983],[26.41041385977664,24.339927875540802],[27.050423287309442,24.3187846268496],[27.640994238279774,24.322808336528826],[28.41601640624847,24.352187731327724],[29.402525390623552,23.061603814438328],[30.476924999998488,21.17477310774187],[31.837936591822665,19.38766101086023],[32.77129075684834,18.389378032901558],[33.81450820312365,17.53283120103856],[36.108017633055226,16.322388612851828],[37.69840206298566,15.935163708838047],[39.374043969723644,15.659369251235622],[40.41839666747731,15.77914130244713],[41.35288608398194,15.941364944477751],[42.47609765624837,16.373282108412788],[44.32653625488047,17.25955661676545],[45.44950946044653,17.748476476913247],[47.2756076660127,18.2990248008838],[48.751472460935844,18.583708110826233],[51.155902587888185,18.91485940245537],[52.318877636716124,19.182728187257872],[53.47668427734162,19.662749994637206],[54.4243914184546,20.203443416567623],[55.833524340818094,21.237485313592426],[58.706721826170046,24.364847560703492],[59.93362802123749,25.330594881155385],[61.27039749755506,26.18953813274137],[63.052087280271174,27.01325949401857],[64.27026458129644,27.406368735642463],[65.48844188232177,27.7198836641862],[64.87804811095984,26.27828738465201],[64.1138457458473,24.476967996306936],[63.731744563291585,23.279895597969904],[63.525424630735124,21.93865670036489],[63.566087984559566,21.228048393704256],[64.02423180713424,20.037093627088378],[64.7867108585337,19.0548331405077],[65.85024318008199,18.084390021090947],[66.76331856536676,17.27085997137915],[67.29126739082135,16.64307677132475],[67.52601207375186,16.204619936749243],[67.68256534746801,15.924441527190213],[67.89954342587119,15.34557508474584],[68.20648428268238,14.471972501518865],[68.35672580473236,13.931636790938848],[68.54541947521933,13.5620490275977],[68.76625490375405,13.136449990439154],[69.18373210916276,12.529880710638212],[69.3249133954501,12.329280081129104],[70.08682222079987,11.533296572591059],[70.47829963394308,11.101543940191258],[70.93444531516809,10.460748051864924],[71.36950843233404,9.638246615461911],[71.85020572219948,8.537160522554995],[72.1278322383253,7.776606064936497],[72.48244682750534,6.9023189538967955],[72.82975234316514,6.208822085081081],[73.22374975335657,5.621721736483447],[73.84694965186537,4.936295479182292],[74.5690265034983,4.547889057686188],[75.1318015973192,4.261298931638551],[76.43807775385149,3.8949603143254787],[77.0851742228842,3.8292254169701576],[77.86136004738607,3.7772805437447605],[78.5758837984334,3.82499072169509],[79.35632551823046,3.9002846966234035],[79.9549784765305,3.997394158214809],[80.71121530548119,4.081190449762092],[81.44112011698611,4.289335494402757],[82.31879063960682,4.642470150456507],[83.13905779885674,5.118502044571824],[83.88245466679439,5.731485443148791],[84.38415231598192,6.266854603619159],[84.75034058310808,6.836527901840825],[85.18535126073658,8.019901728822719],[85.36519561950833,8.832007487393446],[85.58190978992786,9.54893963981493],[85.8229638600294,10.06732880349962],[86.21161903223422,10.682979185487167],[86.72524368686021,11.217387689445115],[87.74565417059931,11.900048695014878],[88.77842427347926,12.224726036794754],[89.98422904432762,12.495030779432206],[90.80360334660904,12.627630577921572],[91.43027047821849,12.488876888678162],[91.73833409420307,12.374349147773845],[92.04821742968772,11.968074736519757],[92.21963858961739,11.61988101164815],[92.28943621439123,11.336304188110464],[92.4156219864262,10.815927987188324],[92.41758209816062,10.042467909317391],[92.27439801107062,9.112037684478695],[92.15845991552374,8.144467542744858],[92.02830288725174,7.283374401813651],[91.94343303506207,5.944365617682087],[91.90380241125469,5.3576249252359425],[92.00726824384978,4.358112454010566],[92.05595239831332,3.8204428343054824],[92.15251953575103,3.2333026918463603],[92.22095386017494,3.007505153258649],[92.34853150292531,2.6014413686498608],[92.59759949823214,2.0429241602491643],[92.672259534553,1.8808267067711253],[92.98484567427298,1.4665056312652052],[93.12165056399282,1.3299375031292333],[93.49139071452564,0.9517219078228538],[93.9246502901919,0.4920340234776931],[94.15533188851633,0.24264079044342962],[94.42121244618149,0.009112717077891262],[94.6506042485797,-0.19387818035010038],[94.9666303235734,-0.47356348880668325],[95.11725632698247,-0.6187591385699286],[95.34409998175848,-0.8351448661511937],[95.61856246588655,-1.0964082712419354],[96.31618583838761,-1.735566163725583],[96.46465196470493,-1.8619374305292322],[97.13114589587578,-2.3640780478152754],[97.1949427950917,-2.413684222293769],[97.50455878610411,-2.5592820043943307],[97.94151341688209,-2.762172541495545],[98.41852052839779,-2.9993339716098624],[99.28841469216984,-3.2961203558860825],[99.43587035268787,-3.347615958626799],[99.67533651125298,-3.428780108387746],[99.84013240798605,-3.4867806201940637],[100.04749837648787,-3.5362416721247723],[101.31067070457246,-3.826074917623738],[102.22343771663584,-4.115648056556737],[102.88489247283898,-4.2707075961573375],[104.37922176208805,-4.221492025586957],[105.45365673609848,-4.029220113765568],[106.19920968628946,-3.8955469864742645],[107.01032997677436,-3.545040196657028],[107.46547975162592,-3.371951621467784],[108.07640185992229,-3.1407859182786537],[108.71047752182758,-2.897195106693621],[109.3759810901913,-2.613905453683692],[109.93909154877201,-2.3773541438243453],[111.16057276499794,-1.9458756554693566],[113.79295656555202,-0.9735859098424405],[114.85503192042351,-0.5174636297810936],[115.7143929162638,-0.11915879600243193],[116.29000407166411,0.1842399139389024],[116.67884764893861,0.39638809397970265],[117.21249344241409,0.9680627645265828],[117.35144030280216,1.5735343666997919],[116.89599662123413,2.157927490469848],[115.95462659100038,2.8745321754455686],[115.57595207393,3.182978045644145],[115.2714352717036,3.4444110224183047],[114.8079705149064,3.86222819772365],[114.45676181814828,4.312349662795559],[114.35274550420321,4.442498782273564],[114.28993670206279,4.991984965006776],[114.68147968543967,5.921210433616131],[114.91065346367046,6.348738054511935],[115.17706653197394,6.82544802860119],[115.59454161199592,7.400391826148756],[115.93168000420545,7.966287006710544],[116.01613284953999,8.214104257637285],[116.15497689695579,8.591935116194897],[115.98400231837226,9.149375340883424],[115.8322538140076,9.490587945660964],[115.71003121933917,9.75265142598794],[115.2734987849728,10.25310375366712],[114.5815342216985,10.866802665212855],[114.13264216819012,11.483289632524817],[113.81009288811973,12.04975840913569],[113.54986345507967,12.649271784789212],[113.4581954129808,13.236136177442653],[113.49771519672902,13.818584209508025],[113.73094513444072,14.447278655298675],[114.18000573877279,15.071961395566438],[114.8240736673232,15.708095680861302],[115.72218376043209,16.348572061174306],[116.62578701760316,16.86773450551255],[117.62552064586883,17.356445642991122],[118.18374121261019,17.56903657205923],[118.57991343950802,17.736636278840432],[119.28162068627205,18.031949246631843],[119.76974932105254,18.207511668807964],[121.05573482958121,18.60017140647168],[121.5169827619521,18.71051252697264],[122.62367747166752,18.85739278708231],[122.67963670513171,18.88449399597811],[122.68109075450181,19.088769638407392],[122.59857056083585,20.211882044386666],[122.55002822475797,20.234779499825347],[120.33168608399254,20.40275539999037],[119.67202924596104,20.465750474518064],[118.86154897147657,20.618820888844038],[118.14994565011722,20.779485150835633],[117.47905828734969,20.868510265248947],[116.50342803876455,21.04118044656437],[115.42068109096098,21.257424663413996],[113.9885715155839,21.392202102033064],[112.55432038416251,21.567228761484845],[111.47277208983652,21.809041184174646],[110.5345674609286,22.023625073428462],[108.90147757811462,22.58008958054233],[107.8972675331508,23.38859170142918],[107.66570084074738,23.972832459554215],[107.50917479676714,24.50780863343303],[107.46297325967178,24.74392728241407],[107.41836582861373,24.982405106708196],[107.25493769123015,26.052087559834995],[107.11758350492042,27.079369843537876],[106.94178971254642,27.750881429133685],[106.78247541236045,28.145923646449113],[106.16123452700448,28.87343854971583],[105.46583592680442,29.76373040338388],[105.09229585580032,30.136500932536258],[104.72974211292073,30.431722917195412],[104.30400124675572,30.79720185781975],[103.61573626253413,31.245323974049224],[103.08731980449582,31.52064376840496],[102.75321936124827,31.703345062406186],[101.80663112503204,32.12440353545895],[100.51481048987523,32.415866649028935],[99.27517491331137,32.61344790993709],[97.35984549768314,32.73333539034539],[95.36645931097864,32.88204223917345],[94.75354436582758,33.0179838559371],[93.54969790520757,33.31528670232386],[93.36757996021268,33.353798251930776],[92.58544955533125,33.78596435584578],[92.29875447007832,34.037819529374076],[91.99283331060661,34.4142105244838],[91.71671947349994,35.375790495209294],[91.33898210123687,36.007478166005555],[90.7470113305365,36.66951037352188],[90.02707746648566,37.022084592665735],[89.06324924881393,37.3137622339549],[87.21079070638388,37.574032397645674],[86.12188196864273,37.66982887673284],[83.98020943636651,37.881924742956656],[85.71769897180558,39.255776299492005],[87.3892705384945,40.60301739778305],[90.84861175466804,43.51746786284482],[93.73195329449553,46.04084992020692],[94.84168404224162,47.289593449208894],[95.51196166498733,48.1871391891018],[95.90769269172924,49.43673531580234],[95.68841255771406,50.009768677937515],[94.92026244593353,50.677035078026734],[92.79485438223034,51.33864317512263],[90.3618291310272,51.69818474714777],[85.47380597237152,51.93589590535481],[81.69984801535009,52.02674595111999],[76.87120255832899,52.09711649419837],[71.76468372994252,52.2354306857288],[68.45106013566932,52.3378432041836],[65.09349122889577,52.31828529331043],[63.5376801346222,52.23131154761705],[61.900501415663115,52.100320786060216],[60.351213321703945,51.8602361507331],[56.91206096191126,51.34178841872138],[53.214808740231945,50.83910691330151],[50.610343359372415,50.656899999983686],[50.43772304687262,50.70162284228862],[49.623023046873065,50.95395201069051],[49.07182304687327,51.093144704985306],[48.795823046873046,51.17611944994479],[47.97832304687349,51.5105257135823],[47.14192304687353,51.78661121071093],[46.29752304687308,52.079434566020915],[46.199123046873304,52.10478865304522],[45.43962304687365,52.34379941457989],[44.569523046873464,52.57569650283564],[43.684123046873616,52.67661329329319],[42.79542304687339,52.80599163877794],[41.901123046873415,52.776828857257286],[41.00862304687356,52.72571888475203],[40.122723046873645,52.57429349086818],[39.253023046873686,52.26994141025738],[38.8590230468739,52.091159576343216],[38.39822304687356,51.93462599812145],[37.54742304687315,51.682389932908166],[37.23863974609216,51.55648778988924],[36.92436328124879,51.57422435982252],[36.569554882811154,51.59466086532196],[36.098495117185955,51.6204066930119],[35.28809492187354,51.65564250734589],[34.574003515623396,51.694983205403126],[33.69485976562332,51.715689291959265],[32.866415234373285,51.748930609095176],[31.932260546873966,51.761556809574614],[31.287523046873655,52.062999515350484],[30.977423046873508,52.25811612664454],[30.151723046873567,52.8619120899516],[29.344023046873755,53.421121347841876],[28.943523046873125,53.711452543247304],[28.34812304687374,54.17085596740252],[27.731723046873284,54.639685804752645],[27.606923046873295,54.72256847259454],[26.96602304687364,55.0858713018068],[26.306223046873278,55.45599274756169],[25.562323046873246,55.94999465390125],[24.85252304687403,56.361417124410266],[24.105123046873288,56.787276469645704],[23.32862304687349,57.22326332187582],[23.122423046873692,57.356766445691285],[22.375823046873546,57.798372240816775],[21.596623046873727,58.25130876010674],[20.347423046874095,58.882962456309556],[19.84292304687356,59.11700347314819],[18.87892304687378,59.599823606930954],[17.86142304687368,60.098586359086084],[16.802223046873447,60.5900375794266],[15.735623046873853,61.04681240338074],[14.643523046873531,61.47983557388538],[13.4859230468735,61.92930189441873],[12.440623046873448,62.23733517181964],[11.34482304687399,62.556396815750595],[10.88232304687416,62.690818336655155],[9.961123046874027,62.94833533607178],[8.998933046873875,63.214474429957846],[7.942413046873732,63.41515729766167],[6.8404630468738,63.624461779905445],[5.741273046873763,63.8100097396915],[4.591883046874033,64.00468046383176],[3.5623130468739395,64.11063698877851],[2.4933930468740018,64.22371099021923],[1.3310530468739306,64.36946455213331],[0.10977404687398723,64.52544337873164],[-1.9666669531259073,64.6156627112838],[-3.1228769531257345,64.69495561095364],[-4.340136953126046,64.78467401990352],[-5.466106953125943,64.82236582249905],[-6.652316953126176,64.87028256856546],[-7.399386953125968,64.92481548818591],[-9.497696953125848,65.0847055356295],[-10.733576953125917,65.10134615802163],[-12.068176953125931,65.13422643949431],[-13.69507695312571,65.23346887738622],[-15.567476953125897,65.37100517117544],[-16.642876953125757,65.46112572089248],[-17.86017695312577,65.57299971943132],[-19.299676953125662,65.71855656321719],[-21.166176953125856,65.92857212615033],[-22.523476953125577,66.07743806707028],[-23.478176953125832,66.19332321620459],[-25.534176953125765,66.47441589365523],[-25.846876953125683,66.40604728579024],[-26.06037695312549,66.2012427120189],[-26.258276953125904,65.99423348408592],[-26.440876953125485,65.78522012572256],[-26.629876953125716,65.57741052705563],[-26.80247695312576,65.36739634256537],[-26.962576953125687,65.15567882937488],[-27.144176953125616,64.94727023641605],[-27.29267695312583,64.73425125245386],[-27.473076953125545,64.52614508403929],[-27.625476953125712,64.31413027582423],[-27.810676953125753,64.10702824821868],[-27.97217695312572,63.89661907243268],[-28.10177695312594,63.68180013546991],[-28.26537695312571,63.47199420289834],[-28.441276953125847,63.26409374383028],[-28.584176953125958,63.05168333843896],[-28.74057695312581,62.841278666261765],[-28.858376953126008,62.62556220440049],[-29.008676953125658,62.41465820222259],[-29.14577695312556,62.20185059774594],[-29.304076953125747,61.992351821431456],[-29.415376953125385,61.77623827646883],[-29.53537695312548,61.561428823570246],[-29.693376953125984,61.352233644254184],[-29.802376953125837,61.13612309602488],[-29.932776953125657,60.92322112880578],[-30.071376953125657,60.711522991796365],[-30.205576953125718,60.49932467724173],[-30.32137695312582,60.28472174040347],[-30.17817695312572,60.1445939005024],[-30.17817695312572,60.1445939005024],[-28.253676953125705,59.787059438404064],[-27.42087695312573,59.58067908934819],[-26.29597695312589,59.24369687593532],[-24.901476953125865,58.820317863187846],[-23.404576953125954,58.20650601146251],[-22.31247695312568,57.655345964933744],[-21.497776953125875,57.163928741576704],[-20.430376953125894,56.411128876195534],[-19.695276953125873,55.77891233249742],[-19.078476953125868,55.246326978567474],[-18.474976953125754,54.51681534095656],[-18.158476953125646,54.17065552836856],[-17.43827695312556,53.31889965883461],[-17.150976953126026,53.02356076268724],[-16.553576953125887,52.175940535588644],[-16.249276953125925,51.87179229206574],[-15.425976953125549,51.03742747572285],[-14.621776953126039,50.35299476982834],[-14.173976953126115,49.91618757418331],[-13.571976953126105,49.36956025336977],[-13.02807695312568,48.83656966788669],[-12.754676953126248,48.59477775245494],[-11.941876953126117,47.79135605213591],[-10.938176953126154,46.78034374985138],[-10.705976953126275,46.559508475102845],[-10.039616953126078,45.80383074620455],[-9.1656569531263,44.850592928861765],[-8.482706953125671,44.167995156834266],[-8.24430695312588,43.91301433551186],[-7.74229695312608,43.447441994840084],[-7.268576953125751,42.989390853751104],[-6.7443369531258375,42.53104628068077],[-6.247476953126121,42.07982183312043],[-5.715986953125988,41.629906751990795],[-5.210306953126206,41.186710703312556],[-4.691526953126202,40.74662703144831],[-4.196206953125985,40.31266092307546],[-3.6792269531262036,39.88070498659884],[-3.1841269531262713,39.45466592175398],[-2.691566953125874,39.032540070986315],[-2.2184969531258503,38.615729676760225],[-1.888136953125796,38.328243375513765],[-1.254886953126216,37.79194426764359],[-0.582159953126009,37.36994422051957],[-0.1348974414071408,37.08380178151738],[-0.5691908897171134,36.98535314544368]
        ]],
        "type": "Polygon"
      }
    },
    {
      // ============ ПОЛИГОН 4 - Уровень сигнала 43 дБ (100 см) ============
      "type": "Feature",
      "properties": { "signal_level": 48, "description": "Отличный сигнал" },
      "geometry": {
        "coordinates": [[
      [-0.159795,61.18000000000001],[-1.52093,61.1253],[-1.71201,61.1139],[-3.36434,61.0747],[-4.95053,60.97880000000001],[-6.72545,60.9431],[-8.219,60.76089999999999],[-9.10539,60.681],[-9.79429,60.5936],[-11.0237,60.2768],[-12.1597,59.9175],[-12.3099,59.7576],[-12.488,59.26010000000001],[-12.4757,58.49769999999999],[-12.4723,58.4734],[-12.4003,58.05319999999999],[-12.3596,57.64320000000001],[-12.2663,57.2464],[-12.1986,56.7853],[-11.9568,56.0347],[-11.8952,55.8574],[-11.6841,55.36199999999999],[-11.5119,54.8787],[-11.5011,54.8497],[-11.3127,54.3665],[-11.1579,53.8941],[-11.0942,53.71250000000001],[-10.775,52.8761],[-10.68,52.6108],[-10.3055,51.79140000000001],[-10.198,51.535],[-9.5792,50.5373],[-9.54241,50.47000000000001],[-8.74251,49.4183],[-8.31477,48.9104],[-7.914979999999999,48.3905],[-7.08129,47.3885],[-6.6776,46.9144],[-6.26593,46.4117],[-5.43322,45.4556],[-4.6317,44.5231],[-4.02991,43.8933],[-3.767929999999999,43.6044],[-2.86416,42.7008],[-2.34042,42.2493],[-1.84043,41.8046],[-1.43035,41.4854],[-0.7163299999999999,40.9176],[-0.0799621,40.4746],[0.530684,40.0381],[1.44725,39.4634],[1.95844,39.1617],[2.5867,38.8207],[3.19633,38.484],[3.67463,38.2813],[4.51051,37.9648],[4.767491425781198,37.85344614218308],[3.6276750882555535,37.525045588127334],[2.7954683355082883,37.3205918462087],[2.0195627130409206,37.13287259602166],[1.2498349994634863,36.957296342392475],[0.41605454816159637,36.710749128065785],[0.17565081831930554,36.646386269376485],[-0.31289034189772896,36.49896090494186],[-1.0544194076347764,36.19172765724847],[-2.6204846922027865,35.67852264080294],[-3.511138699633719,35.5572375154089],[-4.37432688675212,35.44925282171303],[-5.286953550433042,35.38185188362165],[-6.212245764109451,35.34047940926349],[-7.203455946535828,35.31709694461319],[-8.294535658449943,35.32181215286495],[-9.183398268313212,35.34260644189469],[-10.449057600588617,35.415066952243116],[-11.565285704226332,35.45318069924966],[-12.496620571659697,35.257483829718645],[-12.6561658883118,35.18767680972565],[-13.246457852670911,34.7715494031894],[-13.345573927196126,34.45582607884341],[-13.260836691748137,33.69586214294775],[-12.80666337840385,32.9088061908751],[-12.147436405638704,32.129466160324554],[-11.548634237561062,31.5058574508741],[-11.38997636646258,31.34218399481018],[-10.505898895757092,30.558671438711293],[-9.925157767826208,30.09028734586185],[-9.176108004642026,29.582318647526137],[-8.267372917971803,28.970747310416133],[-7.0333651599777465,28.43065157112276],[-5.950419413702446,28.11934237990345],[-5.090350155705172,28.205313284427408],[-3.3680486810033825,28.28644005726001],[-2.4533883541735797,28.108923606318385],[-1.5923106321649387,28.035895536636215],[-0.6872875976562673,27.933549191282644],[0.09123653412191754,28.029887452637777],[0.7871693774939574,28.297041400259232],[1.0442523453617822,28.509901765845115],[2.064035318371157,29.18992915924159],[2.792680596068049,29.426379597431374],[3.5768541460551004,29.425725137567525],[4.410598165693646,29.309759382275203],[5.285540915800951,28.959620153560135],[6.115551151624667,28.66442429801222],[7.1993489941458515,28.233010427523883],[7.820898794312729,27.989669431022328],[8.683736682677395,27.589574845189542],[9.630139757719089,27.256822487762268],[10.24204368781804,27.06249941548996],[11.712546434117547,26.703978609990617],[12.439558061173539,26.609078994584166],[13.12874303240895,26.494677830867992],[14.509961047819244,26.400015477889887],[15.852883287946232,26.3946028709344],[16.521597825978468,26.500724434095908],[17.191038102807113,26.53100289443654],[17.84830135542562,26.609386847314653],[18.51105777210662,26.658106438225143],[19.171897753906187,26.661746931721282],[19.79884187536474,26.582641624844992],[20.52274709518252,26.451975424867875],[21.817941377500283,26.187423053143373],[22.492408120755538,25.99926643136066],[23.14930723420576,25.885737105603738],[23.811699511718572,25.67755714712459],[24.443724443724015,25.566345089344733],[25.111299409726726,25.317454433730756],[25.787413713386606,25.19752458800423],[26.38113055610905,25.052458323297785],[27.024740999366475,24.972288869412694],[27.97290561011293,24.935166824643055],[28.951989996268306,24.899744170931594],[29.532216285863882,24.94174535110079],[30.15433878693005,24.925563087101605],[30.743502303621224,24.979495478908536],[31.16787089843743,24.973332952453173],[31.61887633313313,24.2172460759815],[32.30225659910296,22.942574630370938],[32.95793987186297,21.782564555614144],[33.207129003998,21.335283827462515],[33.808531347656206,20.39914929126799],[34.59053149414062,19.51172486650478],[35.16280598144533,19.055695877946853],[36.146575061035136,18.413470383635264],[37.135837304687506,18.01600150047833],[38.2636725585937,17.82883384303066],[39.33296127929677,17.808857073132437],[40.3967568359374,17.99925162808963],[44.662599218749534,19.868836349215194],[45.8889109374999,20.25929953844011],[47.10655224609323,20.52254880925493],[49.12183823242149,20.764612542632555],[50.966836132812375,20.32384249582907],[51.747425830078015,20.062531062650063],[52.81366005859354,20.122798451086616],[53.8951967834471,20.48110825227591],[55.04265147705065,21.075929694681474],[55.73355695800766,21.530363980109914],[56.269420654296745,22.056497280095027],[56.72591367187486,22.61410068083173],[57.1221851485818,23.0781429025236],[57.661278890913664,23.85419208797792],[57.81585114887054,24.44466827491801],[57.81661481307747,25.032360807620876],[57.90684549247615,25.812726603185155],[58.07398046874981,26.56817342411405],[58.54476679687483,27.07937748891505],[59.32317031249987,27.646952058140947],[61.77149570312483,28.93409300178851],[62.813571093749836,29.337885667254728],[64.34970507812429,29.92643707956311],[67.69374238281237,30.94415558082306],[67.20955241348457,29.965977251844095],[66.75832142853183,28.968315213002384],[64.82888482556473,24.373128665344048],[64.60363437499983,23.72491110942507],[64.44977438898005,23.131723169950433],[64.33868010264148,22.545314260934276],[64.30642097933641,21.96572613217862],[64.37108523014459,21.388366885689827],[64.55347624094495,20.821864489815777],[64.69922544130198,20.534177723888256],[64.85870755181533,20.261494755492567],[65.09379765624985,19.96781737287905],[65.30506787600534,19.69966624641969],[65.46689961919836,19.52744038779635],[65.70966908652653,19.260977405403356],[66.01736178540057,18.996062441381333],[66.41337266786472,18.66272334176949],[66.87828765868782,18.285543985234842],[67.17126488647153,18.07061176040212],[67.3351527587866,17.92904452031018],[67.84101552734352,17.373747342827482],[68.13401129841307,16.978050871162864],[68.21826683510766,16.82899576705145],[68.4401905846226,16.436604351205453],[68.690802687679,15.888799867836157],[68.81031821672252,15.564912283982915],[69.11289069352927,14.822098900339165],[69.25541615105483,14.49721674454821],[69.50912414648779,13.972134967017208],[69.74219243888098,13.550659524887637],[69.97405439453098,13.18362537454617],[70.0951435602102,13.029211381310455],[70.84108013799879,12.056891269609036],[71.32300632536435,11.360752351297705],[71.57272409667945,10.87693680881916],[71.86180916457545,10.28448636357303],[72.20307929106525,9.467373271280865],[72.55093470315443,8.561505927872338],[72.84021082916115,7.834906608456635],[73.05034354968798,7.396299389549234],[73.43361591243482,6.71003568586008],[73.6922283708218,6.30563074055053],[73.9904824096678,5.947066440827022],[74.18806278274299,5.786289149105305],[74.61086288238072,5.482364705049568],[75.25870917540622,5.1164452986269815],[75.92216766722308,4.888561980281926],[76.58990496335677,4.7065864060383165],[77.26067138061505,4.633659688246171],[77.96217553253157,4.575737521187026],[79.41898974304183,4.754819917991199],[80.90714291915674,5.11422227577203],[81.49366154670597,5.329701303235812],[81.70864327258994,5.429154779318565],[81.84122753753648,5.517583293678198],[82.42512821158702,5.882443127600507],[83.03100154188758,6.4229314893214005],[83.45472070236193,6.975576918112629],[83.77936934327131,7.508667095787098],[84.01286521343697,8.089207679276601],[84.18593627891522,8.61970365488715],[84.47384417365052,9.726159725079466],[84.65612892700811,10.26682239853568],[84.78348203974069,10.583803315659562],[84.87327393022676,10.806341968142037],[84.98503847696288,11.02600025938637],[85.18463122539498,11.372270929434416],[85.5707681784025,11.932393788577782],[85.76695601239723,12.158871692998375],[86.05617636921846,12.487055856792743],[86.25750610103975,12.682712740785778],[86.90964093008029,13.124852433168352],[87.67372524253108,13.566699883276414],[88.43231639091948,13.970167741276837],[89.34302242351018,14.29034172741106],[90.56683880766342,14.674234457384815],[91.71787029111186,14.995205847408515],[92.85263589472753,15.234114409236518],[93.94059544142802,15.21031483432448],[94.85362818754719,15.044458327670123],[94.97131965634802,15.011534497191828],[95.45377033353328,14.498461625725666],[95.66705597165603,13.930534752032923],[95.77289051113542,13.366475390605437],[95.72379212068304,12.279637057801354],[95.66575189071685,11.686775583553413],[95.54445697185281,10.76623387091608],[95.51973768458036,10.539379922298782],[95.56093636605792,9.942240377529483],[95.79314328851822,8.294933136798994],[95.93755212245846,7.743289295670387],[96.07623258226184,6.633682725351815],[96.261595348942,6.077188003053103],[96.38304635644455,5.188336890359196],[96.51924946743631,4.402876555446712],[96.75169095079445,3.6246426432893966],[97.0178320287227,2.75693130916993],[97.27155268746344,2.2071304417470676],[97.65985586573548,1.6585054070496],[98.18739780576112,1.1038148460833064],[98.49186664677967,0.8545385544155559],[98.88422611279832,0.5554767908820132],[99.7082600110355,0.05041854718817926],[101.08842097858191,-0.29609199472429576],[102.5866274351527,-0.9406613379075468],[104.18197757538691,-1.1004267849778493],[105.9252291253865,-0.8836692891461366],[107.84873502709117,-0.07768670961773405],[107.93752413192084,-0.0016531240953989717],[108.47765116970521,0.5706986088402115],[108.6141715288669,1.1381786710940476],[108.59923550188066,1.7075918903822158],[108.41977688123313,2.274350377264552],[108.08408602119651,2.7886742578596837],[107.21288762062238,3.3879186804138346],[106.5449362903609,3.964720571445168],[106.39620397093212,4.266590183110787],[106.21133774665915,4.522744607538293],[106.06535305258855,5.09536436176329],[106.02956328157389,5.656857108609059],[106.25469880352796,6.300249873916383],[106.41692520131026,6.804591120621106],[106.56181116621985,7.389818633917346],[106.63803258034822,7.955095250209584],[106.59921471349381,8.54722952210079],[106.54391735445199,9.100217923282786],[106.5261096639787,9.462191716273901],[106.51179745574977,9.820151994820176],[106.46162439522045,10.253899708737666],[106.46088981125368,10.513140016259245],[106.43065006487622,11.405920008171142],[106.60677333010155,12.164425676063427],[106.73879415299261,12.573769008877308],[106.80882755964896,13.015445985314493],[106.85139514599287,13.171206624927018],[107.08184761596398,13.755651668707921],[107.22626243693841,14.353131119561382],[107.43331609057535,14.940552292190409],[107.61703936969984,15.549443788466984],[107.88787406287514,16.130887198434372],[108.06755252111809,16.45608743613975],[108.17032668248598,16.666929933836624],[108.23190211338517,16.784957126375062],[108.30171729037811,16.963715413598457],[108.2140815368918,17.351746137186183],[108.03580857637428,17.95726724256443],[107.79933986084824,18.445086159912407],[107.76062505157223,18.549471639592635],[107.26138021872126,19.11785643616312],[107.02738848010392,19.323265091186602],[106.8389814779827,19.49490926540025],[106.59014967117412,19.6819796169853],[105.83102849862698,20.267427688719245],[105.56113419492745,20.85375328362017],[105.22806850450917,21.39405366817418],[104.98422561551466,22.06361659421117],[104.91387135005465,22.403250980457972],[104.77446076835227,23.09270296745994],[104.73306936239514,23.27842891705394],[104.66970530018811,23.762533259648215],[104.62561479295097,23.978696199388178],[104.53530393214805,24.51048247052636],[104.45116093255682,25.28538052608474],[104.41933409012483,25.755549635520183],[104.32410058869762,26.411112115165206],[104.29815921590603,26.565894779674593],[104.07935514746319,27.076713219484745],[103.81660576652038,27.53133675353022],[103.73792297148168,27.71930649607006],[103.41241017130822,28.27921346872721],[102.98136859820856,28.927235118070183],[102.70455998732723,29.256165705991954],[102.427751376446,29.545612720336905],[101.9269031394653,29.992254113908334],[101.6593127738709,30.218865794686085],[101.15551635358908,30.568618228014188],[100.79517375653529,30.783193167637716],[100.24257041729402,31.063510663408582],[99.14835006693646,31.376899293118612],[98.0036105380963,31.644061767407287],[96.70959100245817,31.76107438337779],[94.95414568557007,31.981000716342844],[94.45900212210638,32.03705475154321],[93.46947379301768,32.21457474816413],[92.40599352835696,32.450848706013836],[91.57322615432126,32.77007520158233],[90.83686566066278,33.21369420119867],[90.73221903419183,33.369764087195286],[90.44602148437485,33.96530921261202],[90.04801209031164,34.69574352125627],[89.81055524484255,35.139808330175185],[89.5730983993735,35.500627247319876],[88.9159720703123,35.99021560379798],[88.16193369140608,36.32854495577633],[86.34771464843733,36.70963980481633],[84.52600270995991,36.99582148892366],[82.68781127929506,37.15791605122125],[81.74217873534995,37.198174643348935],[80.91739580078001,37.30864931734202],[79.97095493163991,37.37145401680994],[79.18930898437488,37.46048343533742],[80.62063835788172,38.51742738908368],[82.7298823588443,40.2282233285946],[83.44721765005893,40.89683829891854],[84.55450449218736,41.91091869869821],[86.02504667968734,43.69544509291696],[86.87486132812485,45.50922076082735],[86.14875371093744,46.859425773995966],[85.7021143554687,47.20025881384427],[84.64573378906236,47.60210058815074],[82.70220722656241,48.01929072682434],[80.5774062499999,48.25734343918419],[78.54351230468644,48.374384595098796],[73.95333417968646,48.310869928128184],[72.02876386718741,48.24626480421547],[70.02297529296771,48.24385587606674],[64.6831244140624,48.38908173891377],[63.07598208007755,48.332389527010996],[61.31503115234279,48.198571030858055],[59.46333945312494,47.99601419661126],[58.620223828125,47.90276327585233],[58.29799999999999,48.14899999999999],[57.81069999999999,48.49029999999999],[57.6057,48.5833],[56.8128,48.7469],[56.0353,48.964],[55.2168,49.05749999999999],[54.3993,49.1535],[53.56490000000001,49.1846],[52.839,49.2695],[52.7482,49.2799],[51.91790000000001,49.3167],[51.1086,49.4481],[50.2908,49.5457],[49.4885,49.7421],[48.6762,49.90629999999999],[47.9522,50.143],[47.8733,50.1708],[47.0592,50.4101],[46.23810000000001,50.6559],[45.4014,50.812],[44.5604,50.9793],[43.7077,51.00999999999999],[42.8548,51.0645],[42,50.96419999999999],[41.1498,50.8342],[40.3075,50.6317],[39.475,50.389],[38.8171,50.1063],[38.6588,50.0459],[37.8414,49.8413],[37.0354,49.59129999999999],[36.2291,49.4035],[35.4185,49.2795],[34.5959,49.2434],[34.041,49.1923],[33.7793,49.1714],[33.5561,49.204],[32.9182,49.318],[32.0653,49.391],[31.16,49.6513],[30.2324,49.9396],[29.2679,50.327],[29.2566,50.3325],[28.1879,50.9334],[27.3509,51.4303],[27.0448,51.6304],[26.4756,52.09159999999999],[25.8869,52.56150000000001],[25.6863,52.7239],[25.0837,53.2267],[24.4568,53.7403],[24.1558,53.9781],[23.4717,54.4782],[22.7581,54.9901],[22.5628,55.1136],[21.7143,55.6896],[20.8199,56.28250000000001],[20.7539,56.3246],[19.9029,56.8218],[19.0092,57.3331],[18.2356,57.7763],[17.0621,58.36269999999999],[16.1942,58.68470000000001],[15.2926,59.015],[14.0681,59.4666],[14.0681,59.4666],[13.3783,59.6996],[12.5333,59.8913],[11.6632,60.0881],[10.7939,60.2661],[9.89795,60.44939999999999],[8.27647,60.6348],[6.4616,60.9157],[4.90124,60.9709],[3.17922,61.0982],[1.61848,61.0915],[-0.159795,61.18000000000001]        
    ]],  
      "type": "Polygon"
      }
    },
    {
      // ============ ПОЛИГОН 5 - Уровень сигнала 45 дБ (90 см) ============
      "type": "Feature",
      "properties": { "signal_level": 50, "description": "Отличный сигнал" },
      "geometry": {
        "coordinates": [[
    [17.282332692558814,50.69990189242389],[15.658942499766901,51.65137111141832],[13.87398460410077,52.23822658344376],[12.987011481907842,52.47250917389828],[11.825380156589906,52.612019487290816],[10.669874007657512,52.698253996057474],[9.584338098001227,52.62032025726748],[8.36696625084498,52.74606693590381],[7.4005071336675865,52.63190397144127],[6.370541185834912,52.45691755069545],[5.274657269252243,52.37546391530485],[4.36004776673211,52.169061045952866],[4.0441931470244405,52.0599938216262],[2.698724757676599,51.505499356311276],[1.9245454308287158,51.13115920492358],[1.3206541899183601,50.62637997593882],[1.0243801365080367,50.34864545099117],[0.8170671259915725,50.02062592949663],[0.5460681786603727,49.3967891885747],[0.610152239141686,48.45890851631504],[0.8811426257293593,47.49907933108089],[1.7632786305324493,46.24280344515911],[2.2176214226662494,45.61865845404924],[3.155362652300075,44.655129780420154],[4.598909111425014,43.51618653548112],[5.539246071246009,42.80309415747037],[5.767776546784557,42.6789575925451],[6.6290254535529565,42.275104027478505],[7.19855132033354,41.99993341960764],[8.35484681271288,41.66330612183307],[9.353306298234504,41.540120159576944],[10.397182838756153,41.326172934431625],[11.455447145427312,40.959792992530446],[12.443327312360967,40.77740838250354],[13.322619104842644,40.272457069303485],[14.146979256699437,39.84841155716617],[15.950279239126324,38.87863945299007],[17.205804985230117,38.217963076861544],[18.79332939929262,37.534366011277406],[20.963129203980067,36.60560803588753],[22.385423115676772,35.761219523744046],[22.72094170398007,35.60713530315804],[23.48998467273009,35.11665741128069],[24.434808891480124,34.61409960954867],[24.98412529773012,34.26822319417862],[25.624078911011367,33.932352956224435],[25.16175911548113,34.03483312119826],[23.758669675008562,34.21390144081657],[22.333949545997783,34.230322656130355],[20.893439648651594,34.18605107817262],[20.199026209272873,34.110236368803776],[19.502289666476837,34.08144517442815],[18.770658014310115,34.01331372555329],[17.326506920376946,34.043270598405606],[15.801936834383108,34.30704711772908],[14.912269507234152,34.58867491288598],[14.209997240427564,34.82541520012407],[13.584629270496052,35.12467930066514],[12.442903878689519,35.61594879577052],[11.50442555719551,36.12202162640409],[10.66006476588446,36.41359474142653],[9.716827021448468,36.81014918220933],[8.896392231261707,37.001045603982625],[7.988066816074962,37.12990905199033],[7.171355280356558,37.1173144276293],[6.376616400888168,37.06951130977763],[4.880522431013915,36.67351445511598],[1.7523786807185022,35.761242581118914],[1.080522699236206,35.45903719430297],[0.2804223452138402,35.17230292526992],[-0.3878420713085117,34.89359726168412],[-1.1366023496657587,34.647150569641774],[-1.8853626280229547,34.45458382269373],[-2.908200280620064,34.34089770949454],[-3.6091332670749283,34.2110100379746],[-5.419685394154712,33.9757273916686],[-5.657505722295583,33.926525522467855],[-6.246888550436389,33.74431860937244],[-7.0740917067180655,33.55828039705053],[-7.997425234093488,33.45015430826334],[-8.522142893281098,33.42655611748842],[-8.876572466531206,33.389128321281916],[-9.090926356187538,33.34707404761746],[-9.41917303172663,33.26794303400791],[-9.835310332265731,33.11711907807348],[-9.97819284350014,32.91899234899031],[-10.029246389274686,32.70978799197473],[-10.01353174016742,32.49312805403033],[-9.887953809810154,32.27127315888047],[-9.625046777890386,31.981005240988274],[-9.411195800992996,31.793306943087668],[-9.029612109419316,31.50655583823869],[-8.615069433470588,31.14334932948165],[-7.337446826111094,30.73821200162665],[-6.325100366181359,30.576593931767235],[-5.140164614796409,30.237660459048882],[-4.185941754036464,30.0123454133578],[-3.120003771867947,29.676087651668634],[-2.1859017271994188,29.46375379504517],[-1.2680150206748886,29.33659845386755],[-0.47868936153210107,29.459890139895812],[0.2235906555392487,29.770995248875078],[0.8929116882356777,30.19094385676291],[1.5550511410652874,30.54127246586423],[2.303601336230098,30.753921242495803],[3.0960968438949132,30.7813073886785],[3.9289029141341305,30.677898358243695],[4.7847590742537855,30.48056152278543],[5.679875458033707,30.17474032018669],[7.366007466813585,29.474589715068852],[8.501714966743146,28.923985163590096],[9.934053326047758,28.273193485290882],[10.687985923633557,28.057831918200268],[11.474877505594376,27.78342316042603],[13.64166970982762,27.51496874380136],[15.717507294391103,27.501205395368768],[17.27178350854784,27.641181472397246],[19.012827300829606,27.732109353304942],[19.635405578222702,27.662768330699386],[20.40528067890819,27.564557746064413],[21.6827875981542,27.387485434427738],[22.390666878437237,27.238894914833534],[23.01743098302295,27.162437485000986],[24.791737590007887,26.851805616133536],[25.597567095276528,26.707518243078027],[26.758697050757913,26.46783944330644],[27.61927622214457,26.274561003136007],[28.881414992829537,26.105455521505633],[29.533475313175856,26.10920828107173],[30.159983402576945,26.04478402953244],[30.786614554733024,26.08460727865046],[31.419774513429182,26.055105688484797],[32.058867127562266,26.070520178569424],[33.315360148304315,26.039329321817192],[33.938150260983484,26.00670916728609],[34.56428719341935,26.019998974175802],[35.072321098511445,26.050655341948392],[35.1794377977302,25.722706369499253],[35.38817803210519,24.47223364047814],[35.49804131335519,23.816943673009526],[35.67382256335521,22.954963510836816],[36.2231389696052,21.677235972186885],[37.02514092273019,20.812074908702545],[37.4536077196052,20.563950436229483],[38.145746391480245,20.398306915796383],[39.266351860230245,20.460444437499955],[39.71679131335522,20.553603023210908],[40.343012016480245,20.86371571551711],[41.77123467273023,21.66696681574404],[42.51830498523023,22.373788066344197],[43.649896782105245,22.832818089678078],[44.81444756335522,23.137972549022216],[47.000726860230245,23.178607018563454],[47.673639457886495,23.26745140673836],[47.92907158679273,22.776797652801157],[48.36303154773024,22.307356168332298],[48.5745183641365,22.13601907310221],[48.96898647698984,21.907987974894656],[49.501303541229,21.52858735267072],[50.2560200835421,20.920663779944995],[50.74157158679267,20.651874782314355],[51.3760320360114,20.408664932427957],[52.03109185046453,20.346506269130256],[52.71361748523021,20.382768569570267],[53.441628519195945,20.565713988668303],[54.16963955316167,20.800100792819265],[54.596816456863266,21.03531358575962],[54.936102735564894,21.239254436089965],[55.59478203601139,21.736269252624496],[56.22374932116763,22.338021022617582],[56.684488456909854,22.976581827636362],[57.13424126452705,23.672832157379403],[57.434991996948995,24.336415002597406],[57.619012993042794,24.973971751803475],[57.625098713762206,25.656951484133977],[57.46089634854408,26.306298972522303],[57.088546305607906,26.94602818631778],[56.50864114161055,27.540878155815445],[55.852208036141754,27.978228024527056],[54.66293801661046,28.636959004913773],[54.21799172754797,28.95148555973706],[53.53683938379802,29.43349182132418],[55.668187040048046,29.80786107399599],[57.52487649317302,30.390581292081798],[59.21677102442306,30.998208199603475],[61.249241727548046,31.83672291583005],[61.86447610254801,32.11765573506406],[63.42453469629801,32.788336187322344],[64.99557961817304,33.334146970047755],[66.44634109922002,33.9679812561775],[69.64336258359505,34.95980668932454],[70.03887039609506,35.11342009197829],[72.35698563047005,36.50936546675979],[74.11479813047002,38.08037833942689],[75.71880203672006,39.69451015767537],[76.92729813047002,41.346030461509244],[77.00420242734505,41.73397769632579],[76.78447586484505,42.924112221951496],[76.24614578672006,43.238182872579834],[74.59819656797005,43.542640321150614],[72.68657547422006,43.46266927591034],[70.77495438047008,43.101479642821346],[68.75347000547008,42.61653546007273],[66.86382156797005,42.28295156942627],[65.17192703672006,42.168635121226075],[63.79863602109507,42.21765341826935],[61.97490555234509,42.16046168185937],[60.46977859922006,41.98037694686195],[57.95940262265753,41.56505499680849],[55.61382156797009,41.12210733162237],[54.07573563047006,40.58824222721626],[54.27348953672004,40.92241600711136],[54.482229771095106,41.35430906568536],[54.72392898984507,41.80799788796901],[54.86675125547014,42.1522871787363],[54.9876008648451,42.5109587199198],[55.130423130470064,42.88372949866223],[55.21831375547008,43.24621464205255],[55.37212234922013,43.91707498310183],[55.3611360210951,44.76854392036541],[55.06450516172007,45.64610298660387],[54.31743484922002,46.09506172779744],[53.64726883359509,46.426537331897464],[52.22429485471539,46.66267981787562],[51.30980528165525,46.70746925302772],[50.648001255470106,46.83521955865275],[49.80205398984511,46.910560736689256],[48.54411941953263,47.28567077462447],[48.30492229612162,47.341792200364836],[46.57207352109511,47.928337605667274],[45.98406047971537,48.149398311341095],[45.154837192970035,48.25953395044289],[44.41576213987153,48.427883667403385],[43.595785160197245,48.456167835900665],[42.793279926583644,48.42928417185937],[42.021169759678536,48.332180337290396],[41.188634788085935,48.17246495672058],[39.617658842090485,47.6790563148396],[38.85967117734503,47.3753016282869],[38.304617120340204,47.21897354381149],[37.36815489103017,46.91463998574505],[36.61153266309386,46.7316096648043],[35.832937778907606,46.593412386074064],[35.024392420926254,46.53129365420447],[34.25106473981859,46.422388726426014],[33.53524305286295,46.42581248658141],[32.99240264986079,46.40947885585136],[32.71558988292108,46.40321028227745],[32.38279780929645,46.40197585516609],[31.793924046145094,46.401192214671525],[31.109472516131863,46.423597268433305],[30.64474754861868,46.47256630219461],[30.067613444745245,46.53816065423474],[29.461367623988885,46.587021938797996],[27.789447975107613,46.83977449738272],[26.906546177345042,47.079689319495166],[26.027639927345078,47.19963090196867],[25.091025619725684,47.50744342965529],[24.17366722128823,47.722873610002345],[23.149192123631973,48.19331181134282],[22.527091293553845,48.40131785774075],[21.5589211275382,48.73944087751867],[21.009604721288177,48.97504590861826],[19.880759506444488,49.47692918280598],[19.163901596288316,49.75354008626597],[18.773886947850816,49.924069154331725],[18.477256088475766,50.062178915391705],[17.282332692558814,50.69990189242389]
        ]],
        "type": "Polygon"
      }
    },
    {
      // ============ ПОЛИГОН 6 - Уровень сигнала 47 дБ (75 см) ============
      "type": "Feature",
      "properties": { "signal_level": 50, "description": "Отличный сигнал" },
      "geometry": {
        "coordinates": [[
    [76.6881,36.3831],[75.75,36.2332],[74.7789,35.9899],[74.0788,35.6843],[73.7038,35.5029],[73.1503,35.2021],[72.6081,34.9041],[72.5917,34.8941],[72.0301,34.515],[71.4817,34.1398],[71.4731,34.1333],[71.0329,33.7701],[70.6021,33.4101],[70.2662,33.077],[69.9319,32.7011],[69.3945,32.0084],[68.9303,31.3272],[68.7659,31.0465],[68.5447,30.6576],[68.1966,29.9971],[67.8833,29.3447],[67.5866,28.6994],[67.324,28.0619],[67.0557,27.43],[66.7822,26.8035],[66.7148,26.6495],[66.5172,26.1827],[66.2274,25.5662],[65.9695,24.9558],[65.7189,24.3508],[65.5047,23.7515],[65.323,23.1573],[65.224,22.57],[65.1975,21.9887],[65.2768,21.4138],[65.4148,21.0322],[65.4981,20.8465],[65.8678,20.2863],[65.889,20.2591],[66.3776,19.7327],[66.4079,19.7056],[66.9455,19.2411],[67.0289,19.1855],[67.5042,18.8725],[67.7879,18.6438],[68.0482,18.4157],[68.3766,18.0991],[68.5764,17.8618],[68.8374,17.553],[69.0819,17.1708],[69.1809,17.0058],[69.4783,16.4592],[69.5568,16.2861],[69.7222,15.9132],[69.9724,15.3691],[70.0158,15.2732],[70.2442,14.8275],[70.4976,14.341],[70.5265,14.2875],[70.8307,13.7497],[71,13.483],[71.1592,13.2136],[71.4896,12.6789],[71.5134,12.6414],[71.7822,12.1446],[72.0194,11.6903],[72.058,11.6111],[72.2969,11.0778],[72.5126,10.5577],[72.5178,10.5454],[72.7404,10.0139],[72.9344,9.48277],[73.0055,9.29344],[73.1425,8.95273],[73.3687,8.42374],[73.5241,8.0765],[73.6008,7.895470000000001],[73.8563,7.36817],[74.0751,6.9945],[74.2092,6.84247],[74.686,6.410640000000001],[74.8001,6.31979],[75.3171,5.95703],[75.6681,5.799820000000001],[75.9713,5.67875],[76.6398,5.47884],[77.3255,5.3808],[78.0266,5.36566],[78.7472,5.4588],[79.4868,5.64183],[80.0944,5.85104],[80.2476,5.91435],[81.0285,6.23355],[81.2962,6.40201],[81.8641,6.874520000000001],[81.9416,6.948530000000001],[82.3652,7.493989999999999],[82.6672,8.0392],[82.8854,8.58462],[82.8901,8.59979],[83.0564,9.13065],[83.1994,9.67773],[83.3533,10.2266],[83.527,10.7774],[83.7594,11.3317],[84.0372,11.8891],[84.4297,12.4519],[84.5214,12.5714],[84.8674,13.0187],[85.3787,13.5905],[85.7445,13.944],[86.0004,14.169],[86.6876,14.7532],[86.937,14.9456],[87.6954,15.3527],[88.045,15.5235],[88.5867,15.7479],[89.1396,15.9737],[89.1535,15.9791],[89.6991,16.1437],[90.2555,16.3093],[90.7864,16.4696],[91.32780000000001,16.631],[91.4073,16.6544],[92.0062,16.8364],[92.6192,17.0198],[93.43570000000001,17.2953],[93.9357,17.4776],[94.58200000000001,17.6346],[95.2457,17.7931],[96.0086,17.9909],[96.67900000000002,18.1933],[97.4431,18.4147],[98.23559999999999,18.6386],[98.3445,18.6877],[98.8729,19.0097],[99.4204,19.3341],[100.097,19.9665],[100.55,20.5921],[100.835,21.2129],[101.024,21.8323],[101.095,22.2307],[101.149,22.4518],[101.281,23.0755],[101.317,23.6972],[101.334,24.0289],[101.341,24.322],[101.278,24.9449],[101.174,25.3394],[101.169,25.5687],[101.08,26.1975],[100.979,26.5625],[100.916,26.8252],[100.656,27.4504],[100.587,27.5656],[100.194,28.065],[99.9643,28.337],[99.6211,28.6754],[99.2561,29.0066],[98.89439999999999,29.27819999999999],[98.46,29.5742],[97.74720000000002,29.8534],[97.4849,29.9524],[96.4681,30.2596],[95.7987,30.3727],[95.35540000000002,30.4391],[94.3004,30.6391],[93.2805,30.8406],[93.2349,30.8499],[92.28400000000002,31.0359],[91.3117,31.2285],[90.8616,31.345],[90.4088,31.4736],[89.5584,31.7588],[89.3574,31.9066],[88.9366,32.3015],[88.6339,32.5293],[88.3337,32.8558],[88.1486,33.1748],[87.9272,33.6363],[87.7847,33.8352],[87.4213,34.2869],[87.2323,34.4881],[86.815,34.8094],[86.1741,35.1092],[86.0643,35.1482],[85.301,35.4593],[84.4412,35.6357],[84.2954,35.6752],[83.6135,35.8366],[82.7097,35.92],[81.8107,35.9881],[80.9175,36.0438],[80.3899,36.1026],[80.3899,36.1026],[80.0636,36.1357],[79.2021,36.1984],[78.3839,36.3089],[77.528,36.3429],[76.6881,36.3831]
        ]],
        "type": "Polygon"
      }
    },
    {
      // ============ ПОЛИГОН 7 - Уровень сигнала 49 дБ (60 см) ============
      "type": "Feature",
      "properties": { "signal_level": 51, "description": "Отличный сигнал" },
      "geometry": {
        "coordinates": [[
    [76.2854,35.6942],[75.3466,35.5129],[74.3811,35.2443],[73.8115,34.9661],[73.2902,34.6781],[72.5071,34.1974],[72.167,33.9609],[71.5016,33.4583],[70.9746,32.9788],[70.7352,32.7425],[70.1228,32.0444],[69.6034,31.3597],[69.5921,31.3426],[69.1978,30.6879],[68.827,30.0253],[68.5068,29.3717],[68.191,28.7252],[67.9374,28.0871],[67.6684,27.4543],[67.5166,27.1251],[67.3839,26.8267],[67.1228,26.2054],[66.8252,25.588],[66.5464,24.9763],[66.2804,24.3699],[66.0292,23.7686],[65.9211,23.4384],[65.84,23.1738],[65.7576,22.6976],[65.7395,22.5859],[65.7412,22.0051],[65.85,21.4309],[66.0374,21.0124],[66.1122,20.8643],[66.517,20.3051],[66.5233,20.2978],[67.0556,19.8042],[67.1292,19.7541],[67.6152,19.4387],[67.9223,19.211],[68.1668,19.0198],[68.5933,18.6666],[68.7115,18.5538],[69.1438,18.1207],[69.2422,18.0018],[69.563,17.5732],[69.7393,17.2596],[69.8801,17.0247],[70.1467,16.4769],[70.2063,16.3322],[70.4024,15.9308],[70.6661,15.3867],[70.6747,15.3692],[70.9577,14.8449],[71.1614,14.4603],[71.2389,14.3045],[71.5177,13.7655],[71.6532,13.5286],[71.8126,13.2282],[72.0793,12.6917],[72.1485,12.5567],[72.3463,12.1564],[72.5873,11.6217],[72.6414,11.492],[72.8164,11.0879],[73.0295,10.5549],[73.1295,10.2858],[73.2324,10.0225],[73.4201,9.49095],[73.6096,8.96018],[73.6193,8.93723],[73.8241,8.43068],[74.0442,7.901810000000001],[74.1445,7.70506],[74.4029,7.37553],[74.7396,6.99944],[74.9018,6.85119],[75.363,6.48546],[75.6409,6.32974],[76.012,6.15823],[76.679,5.94185],[77.3643,5.83996],[77.8994,5.825009999999999],[78.0663,5.82068],[78.108,5.82744],[78.7924,5.953470000000001],[79.5402,6.19057],[79.9735,6.38431],[80.3184,6.580789999999999],[80.9378,6.93378],[81.1268,7.07468],[81.5223,7.48046],[81.9039,8.02605],[82.0694,8.35611],[82.1678,8.57137],[82.3632,9.11699],[82.5096,9.66324],[82.633,10.2106],[82.7859,10.7601],[82.9756,11.3124],[83.1872,11.867],[83.4758,12.4258],[83.7799,12.901],[83.8427,12.9892],[84.3002,13.5579],[84.8422,14.1323],[84.992,14.2865],[85.4099,14.7108],[86.0845,15.2966],[86.2001,15.3896],[86.882,15.8907],[87.3789,16.2049],[88.0172,16.5022],[88.4941,16.7055],[89.0406,16.8866],[89.598,17.0688],[89.8943,17.1492],[90.71430000000001,17.3641],[91.3043,17.5453],[91.90789999999998,17.7278],[92.2148,17.8244],[93.184,18.1442],[94.0086,18.4875],[94.66019999999999,18.7932],[95.6021,19.1499],[96.27260000000001,19.4928],[96.8111,19.8018],[97.2518,20.1221],[97.70669999999998,20.4446],[98.34660000000001,21.0798],[98.8093,21.7103],[99.1584,22.339],[99.3404,22.9626],[99.45209999999999,23.5858],[99.4527,23.6079],[99.5658,24.2131],[99.6341,24.8417],[99.6326,25.2875],[99.63229999999999,25.47],[99.5201,26.095],[99.40979999999999,26.4847],[99.2985,26.7168],[98.91329999999999,27.3312],[98.892,27.3574],[98.3768,27.9387],[98.24010000000001,28.0744],[97.6351,28.5351],[97.4763,28.6583],[96.5297,29.0371],[96.3718,29.0976],[95.5921,29.3948],[94.5395,29.6013],[94.48239999999998,29.6185],[93.5638,29.8556],[92.59409999999998,30.0858],[92.41379999999998,30.1294],[91.6359,30.3],[90.6928,30.5033],[90.1742,30.6316],[89.7863,30.7241],[88.8974,30.9422],[88.4641,31.1747],[88.1866,31.367],[87.4632,31.7619],[87.453,31.7711],[86.9424,32.4076],[86.9422,32.4079],[86.5048,33.0552],[86.4687,33.1048],[86.0056,33.7043],[85.9619,33.7499],[85.3342,34.2298],[85.1948,34.3368],[84.6512,34.6292],[83.8604,34.876],[83.7171,34.9271],[83.068,35.1058],[82.1873,35.1982],[81.3006,35.2606],[80.41,35.2962],[79.8642,35.357],[79.8642,35.357],[79.5698,35.3865],[78.733,35.4645],[77.9413,35.5981],[77.1065,35.6437],[76.2854,35.6942]
        ]],
        "type": "Polygon"
      }
    },
    {
      // ============ ПОЛИГОН 8 - Уровень сигнала 51 дБ (55 см) ============
      "type": "Feature",
      "properties": { "signal_level": 52, "description": "Отличный сигнал" },
      "geometry": {
        "coordinates": [[
    [43.574,47.3675],[42.7864,47.3419],[42,47.21830000000001],[41.946,47.2077],[41.2184,47.04649999999999],[40.4454,46.7721],[39.681,46.4936],[39.211,46.3089],[38.927,46.1774],[38.1783,45.9055],[37.4295,45.7149],[36.6834,45.5408],[36.1805,45.45680000000001],[35.9361,45.4088],[35.1795,45.364],[34.433,45.2492],[33.6676,45.2587],[32.9106,45.20830000000001],[32.1403,45.2231],[31.3716,45.2158],[30.5788,45.303],[29.8002,45.30909999999999],[29.0133,45.3338],[28.2131,45.3914],[27.3903,45.5063],[26.5921,45.5176],[25.7648,45.6024],[24.9323,45.6801],[24.1091,45.7125],[23.2468,45.8283],[22.4121,45.85309999999999],[21.6652,45.6566],[20.8495,45.61740000000001],[20.0838,45.459],[19.1322,45.6842],[18.4711,45.2986],[17.5772,45.37560000000001],[17.0544,45.34100000000001],[17.1022,44.6412],[16.8805,44.4912],[17.197,44.4574],[18.2376,44.0553],[18.6513,43.5454],[19.1452,43.1712],[19.6273,42.8013],[19.7297,42.6632],[20.3539,41.824],[21.0793,40.9964],[21.2792,40.6211],[21.5559,40.1965],[22.2346,39.4019],[22.5654,38.6361],[22.7816,38.3932],[23.1296,37.873],[23.6626,37.1238],[23.9631,36.8114],[24.3548,36.3798],[24.9026,35.8891],[25.1671,35.6432],[25.7487,35.218],[26.2715,34.9087],[26.5195,34.7861],[27.2691,34.3903],[27.7968,34.1746],[27.9841,34.1091],[28.679,33.8905],[29.3631,33.6938],[30.0399,33.5032],[30.2797,33.4312],[30.7092,33.3228],[31.3581,33.2483],[32.0189,33.0593],[32.24771953124992,33.007505680491626],[31.462140332031197,32.63567261840849],[30.769915180015467,32.47377019179983],[30.094169520187283,32.35354772726948],[28.729761656093512,32.33244399862224],[28.0310782318591,32.359197559476684],[27.365353791999716,32.36729699846872],[26.665136225390363,32.4307647574138],[25.959425494718467,32.52676929690067],[24.57960170304454,32.7857733030994],[23.935861895745628,32.9190144561175],[23.17035186766371,33.049618801828075],[22.461228772680315,33.13468961223779],[21.03524776754064,33.19427936763197],[19.62082715704868,33.06633087442448],[18.953476859056824,32.9798729861536],[17.59461988022362,32.85293515403953],[16.818739418650967,32.86411709161224],[16.10304433938693,32.808705045856954],[15.409321916372988,32.771823420689664],[14.703029414095008,32.65620149362777],[14.012853408268647,32.47650657058465],[13.608489255764278,32.237864422386394],[13.418358501697414,31.792385181353044],[13.115001290438714,31.529904237320846],[13.464097414796257,30.803762645953437],[13.727798878801183,30.45475915083992],[13.900863135774905,30.0901590780002],[14.61081323471004,29.55962673379202],[15.067008236419413,29.35517137132539],[16.062097680434093,29.161936141742082],[18.863400064803272,29.032321595924813],[20.880652815153883,28.753366626243338],[21.5643282377301,28.719250651158795],[22.256760375794574,28.621211215105546],[22.887247685061155,28.609731730122537],[23.57815979901524,28.574007944430953],[24.25670548670282,28.474868811850104],[25.564158959257497,28.195084989961046],[26.23440540056217,27.95602738714934],[26.870560843515246,27.78511047630786],[27.52868894271839,27.569873928290207],[28.208220036649518,27.453234497014893],[28.83281948995566,27.326658495339714],[29.4752717264649,27.300581400960546],[30.13420345516166,27.249953194432607],[30.787982252120614,27.273334807648546],[31.41988066635105,27.24675169282423],[32.0629499557494,27.27967314343083],[32.728281083678915,27.246633629605107],[33.98761211853014,27.282578109092146],[34.65028993797273,27.391196763399023],[35.30198142929037,27.568262942623644],[35.68865092811545,27.788232364066452],[35.95447081756554,27.954111163270067],[36.62773572692841,28.460606138086145],[37.331565350341656,29.137300203811648],[37.996227810668806,29.65889515958145],[38.792726208495964,30.37801571294915],[39.23691727333053,30.58360192959996],[39.50532708816508,30.755545980808154],[40.22342113189667,31.041764192129556],[40.91118078918433,31.127886833706672],[41.61104092407202,31.165643510572885],[42.28017037353498,31.008798875835854],[42.937276928710844,30.89450459096151],[43.582806938934205,30.62513765260368],[44.2722822616576,30.504957878092238],[44.981066891479344,30.587854780349478],[45.10774259643544,30.69648660572308],[45.14686060791004,31.41408429176486],[45.22509663085931,31.984631500883623],[45.36856397705072,32.884221253050995],[45.415900952148405,33.607083273911115],[45.38697871093752,33.91434710102349],[45.54389999999999,33.9813],[45.7693,34.0777],[46.4194,34.4151],[46.94189999999999,34.6776],[47.07640000000001,34.751],[47.75540000000001,35.271],[47.9302,35.3817],[48.44149999999999,35.7414],[48.9063,36.0977],[49.1471,36.2926],[49.8208,36.8248],[49.8696,36.8709],[50.6216,37.5594],[50.6247,37.5621],[51.39800000000001,38.2817],[51.42659999999999,38.3119],[52.08120000000001,39.0722],[52.2416,39.2797],[52.6161,39.8432],[53.0669,40.6259],[53.2981,41.2074],[53.3829,41.4189],[53.64850000000001,42.2263],[53.7988,43.0459],[53.7629,43.4311],[53.62860000000001,43.8727],[53.23269999999999,44.4588],[52.9333,44.7022],[52.55969999999999,44.8877],[51.8395,45.1197],[51.0906,45.215],[50.3503,45.36690000000001],[49.59490000000001,45.4344],[49.4624,45.4863],[48.863,45.675],[48.1346,45.98790000000001],[47.39879999999999,46.3022],[47.3355,46.337],[46.65440000000001,46.6106],[45.9053,46.964],[45.1365,47.1696],[44.9508,47.22010000000001],[44.9508,47.22010000000001],[44.3602,47.3424],[43.574,47.3675]
        ]],
        "type": "Polygon"
      }
    },
    {
      // ============ ПОЛИГОН 9 - Уровень сигнала 53 дБ (50 см) ============
      "type": "Feature",
      "properties": { "signal_level": 52, "description": "Отличный сигнал" },
      "geometry": {
        "coordinates": [[
    [75.8119,34.8473],[74.8655,34.6134],[73.8936,34.2864],[73.876,34.2767],[73.3096,33.9134],[72.7562,33.5536],[72.7153,33.5252],[72.2733,33.1616],[71.8409,32.8012],[71.5248,32.4955],[71.1382,32.0961],[70.5581,31.4067],[70.126,30.8297],[70.0581,30.7289],[69.6757,30.0646],[69.3272,29.4086],[69.0066,28.7603],[68.7129,28.1197],[68.4497,27.4862],[68.1284,26.8562],[68.1001,26.8048],[67.8415,26.2331],[67.5482,25.6147],[67.2451,25.0014],[66.9789,24.3942],[66.7358,23.7926],[66.5346,23.1966],[66.4349,22.6081],[66.4297,22.0264],[66.5554,21.4523],[66.7006,21.1658],[66.8826,20.8875],[67.2006,20.5194],[67.4517,20.3328],[67.7575,20.1351],[68.2296,19.7867],[68.3117,19.7278],[68.8748,19.349],[69.0405,19.2441],[69.4408,18.9711],[69.7162,18.6995],[69.9656,18.3824],[70.1695,18.1504],[70.4645,17.6499],[70.4924,17.5997],[70.7889,17.0501],[70.9316,16.7318],[71.0365,16.5011],[71.2844,15.9542],[71.3904,15.7281],[71.5361,15.409],[71.7721,14.8652],[71.8536,14.693],[72.0311,14.3238],[72.2959,13.7839],[72.3353,13.7031],[72.5717,13.2456],[72.8083,12.7079],[72.8219,12.6737],[73.0469,12.1715],[73.2547,11.6355],[73.301,11.5066],[73.4728,11.1009],[73.6703,10.5669],[73.7798,10.2145],[73.828,10.0333],[73.9841,9.50062],[74.1434,8.96891],[74.2507,8.67428],[74.3748,8.43911],[74.7147,7.91156],[74.8186,7.77911],[75.1661,7.385930000000001],[75.4263,7.15025],[75.8545,6.863460000000001],[76.066,6.741439999999999],[76.7311,6.51279],[77.4141,6.37771],[78.1214,6.40175],[78.8533,6.56267],[79.6161,6.893390000000001],[79.6533,6.91527],[80.3893,7.46269],[80.4296,7.50527],[80.926,8.00945],[81.2869,8.55529],[81.3529,8.70046],[81.52,9.10062],[81.6525,9.64556],[81.7954,10.1923],[81.8937,10.7396],[82.0275,11.2893],[82.1982,11.8418],[82.3775,12.3965],[82.6571,12.9559],[83.0282,13.5203],[83.1873,13.7529],[83.3959,14.0875],[83.882,14.6612],[84.4311,15.2232],[84.4489,15.2409],[85.1499,15.8289],[85.6092,16.2197],[85.858,16.4212],[86.2766,16.7215],[86.7035,17.0233],[86.8078,17.0905],[87.3603,17.3468],[87.9247,17.6046],[88.0487,17.6504],[89.0388,18.0062],[90.11119999999998,18.2226],[90.5648,18.3348],[91.256,18.5082],[91.8877,18.7327],[92.5361,18.959],[92.68930000000002,19.014],[93.3203,19.2846],[93.9699,19.5575],[94.17370000000001,19.6734],[94.6629,19.9936],[95.1668,20.3161],[95.5803,20.6356],[96.0061,20.9571],[96.1104,21.0696],[96.60969999999999,21.5913],[97.1136,22.225],[97.474,22.8554],[97.4922,22.9069],[97.738,23.4848],[97.91440000000001,24.1133],[97.9956,24.7403],[97.9815,25.0139],[97.9266,25.3619],[97.7234,25.9788],[97.6592,26.1147],[97.41389999999998,26.5923],[97.1324,26.9625],[96.859,27.193],[96.4083,27.5759],[96.0035,27.7765],[95.5268,27.9956],[94.6829,28.3312],[94.6176,28.3557],[93.6031,28.5662],[92.8787,28.8551],[92.72620000000002,28.9041],[91.7945,29.15],[91.0521,29.3802],[90.9029,29.4176],[89.9824,29.6222],[89.0664,29.8053],[88.7283,29.875],[88.1681,29.9851],[87.4085,30.3313],[87.1093,30.421],[86.5993,30.5912],[85.9919,31.0052],[85.9408,31.0477],[85.3525,31.5918],[85.3229,31.6239],[84.927,32.2668],[84.8968,32.3149],[84.4273,32.9082],[84.3855,32.9496],[83.8452,33.5353],[83.8261,33.5486],[83.1256,33.8593],[82.5099,34.1448],[82.4123,34.1812],[81.555,34.2796],[80.6808,34.3308],[79.8113,34.3683],[79.0032,34.4833],[78.4545,34.5626],[78.4545,34.5626],[78.1992,34.5891],[77.4266,34.7317],[76.612,34.7858],[75.8119,34.8473]
        ]],
        "type": "Polygon"
      }
    },
    {
      // ============ ПОЛИГОН 10 - Уровень сигнала 55 дБ (40 см) ============
      "type": "Feature",
      "properties": { "signal_level": 52, "description": "Отличный сигнал" },
      "geometry": {
        "coordinates": [[
    [7.86092,35.2733],[7.05649,35.2701],[6.32634,35.0521],[5.82716,34.7845],[5.68864,34.5878],[5.11443,34.0635],[5.1177,33.9534],[4.99712,33.3225],[5.48519,32.9716],[5.94357,32.5406],[6.52746,32.2578],[7.4461,31.8265],[7.65392,31.7378],[8.32343,31.4657],[9.17053,31.1527],[9.96459,30.9832],[10.7097,30.9653],[11.385,31.2022],[12.0361,31.5342],[12.134,31.5643],[12.3239,32.2801],[11.9229,33.0259],[11.566,33.3485],[11.2335,33.7929],[10.5011,34.41],[10.2832,34.5824],[10.2832,34.5824],[9.56448,34.9233],[8.67698,35.2217],[7.86092,35.2733]
        ]],
        "type": "Polygon"
      }
    },
    {
      // ============ ПОЛИГОН 11 - Уровень сигнала 58 дБ (34 см) ============
      "type": "Feature",
      "properties": { "signal_level": 52, "description": "Отличный сигнал" },
      "geometry": {
        "coordinates": [[
    [51.5473,28.1863],[51.06,28.1082],[50.8033,28.0561],[50.0408,27.3972],[49.9096,27.1859],[49.6508,26.7139],[49.4446,26.0425],[49.3609,25.3806],[49.398,24.7275],[49.4169,24.6532],[49.5748,24.0833],[49.8902,23.5186],[49.9272,23.4486],[50.2983,22.8188],[50.4125,22.6588],[50.6664,22.1932],[50.9426,21.8419],[51.2148,21.5762],[51.5329,21.3685],[52.1795,21.2062],[52.8601,21.2108],[53.5853,21.4191],[54.1925,21.659],[54.3413,21.7342],[55.1043,22.3209],[55.1866,22.4048],[55.6825,22.9787],[56.0784,23.6362],[56.2953,24.2929],[56.3107,24.9478],[56.1202,25.6003],[56.0132,25.7774],[55.5695,26.2445],[55.4343,26.358],[54.8161,26.7891],[54.5734,26.8773],[54.1496,27.0318],[53.5353,27.4706],[53.4528,27.5113],[52.8874,27.7751],[52.2343,28.0541],[51.7872,28.1328],[51.7872,28.1328],[51.5473,28.1863]
        ]],
        "type": "Polygon"
      }
    },
    {
      // ============ ПОЛИГОН 12 - Уровень сигнала 61 дБ (28 см) ============
      "type": "Feature",
      "properties": { "signal_level": 53, "description": "Отличный сигнал" },
      "geometry": {
        "coordinates": [[
    [37.7082,33.5566],[37.0059,33.5162],[36.3032,33.4397],[36.2794,33.4315],[35.595,33.231],[34.896,33.1027],[34.1933,32.8111],[33.9303,32.6782],[33.4945,32.4477],[32.8034,32.1143],[32.3381,31.9472],[32.12,31.8699],[31.4413,31.6829],[30.7655,31.6394],[30.0905,31.5796],[29.4144,31.6177],[28.7382,31.6245],[28.0611,31.64],[27.3861,31.5904],[26.7104,31.5552],[26.0325,31.5492],[25.353,31.5531],[24.6644,31.6556],[23.9625,31.8726],[23.6589,31.9978],[23.2539,32.1002],[22.5463,32.2642],[21.845,32.3327],[21.1409,32.3976],[20.4499,32.3422],[19.7613,32.2608],[19.0836,32.1021],[18.9789,32.0853],[18.4151,31.8875],[17.7571,31.615],[17.2641,31.4085],[17.2879,30.697],[17.9704,30.3117],[18.6976,30.0618],[19.0007,29.9544],[19.4091,29.8715],[20.1065,29.7449],[20.7981,29.6288],[21.4763,29.5955],[22.1509,29.5727],[22.8197,29.5868],[23.4847,29.6282],[24.1544,29.5984],[24.8302,29.4581],[25.5087,29.2185],[25.599,29.1579],[26.1863,28.9056],[26.8571,28.6104],[27.1805,28.4601],[27.5216,28.3408],[28.1776,28.1926],[28.8309,28.0447],[29.4795,28.0277],[30.1279,27.9712],[30.7751,28.0267],[31.4229,28.034],[32.0715,28.1057],[32.7196,28.0798],[33.369,28.1107],[34.0202,28.1659],[34.6774,28.3334],[35.0221,28.4615],[35.3438,28.6272],[35.9386,29.1537],[36.0351,29.2617],[36.63,29.8525],[36.7452,29.9989],[37.1882,30.5585],[37.499,31.1005],[37.6188,31.2717],[37.9416,31.9923],[38.1326,32.7202],[38.1189,33.4545],[38.1189,33.4545],[37.7082,33.5566]
        ]],
        "type": "Polygon"
      }
    },
    {
      // ============ ПОЛИГОН 12 - Уровень сигнала 61 дБ (28 см) ============
      "type": "Feature",
      "properties": { "signal_level": 53, "description": "Отличный сигнал" },
      "geometry": {
        "coordinates": [[
    [75.1988,33.6867],[75.1302,33.6653],[74.2208,33.331],[73.3251,32.8828],[73.1824,32.79],[72.5175,32.1692],[71.8746,31.4737],[71.8178,31.3929],[71.4161,30.7959],[71.036,30.1294],[70.6785,29.4711],[70.3884,28.8227],[70.168,28.1832],[69.8691,27.5465],[69.5143,26.9588],[69.4924,26.9123],[69.1845,26.2865],[68.8006,25.6629],[68.335,25.04189999999999],[68.2442,24.9148],[67.9417,24.4286],[67.604,23.8225],[67.3798,23.2249],[67.2936,22.6362],[67.3494,22.0558],[67.4677,21.7572],[67.6291,21.486],[67.9748,21.1433],[68.2012,20.9284],[68.5172,20.6789],[69.0583,20.3824],[69.0955,20.3634],[69.7028,20.1617],[70.1445,19.8464],[70.2666,19.7549],[70.8687,19.5007],[71.0583,19.3068],[71.3734,18.808],[71.3987,18.7513],[71.6659,18.1955],[71.8037,17.7566],[71.8403,17.6391],[72.0531,17.0864],[72.198,16.5335],[72.2046,16.5132],[72.4284,15.9853],[72.6422,15.4384],[72.6498,15.4196],[72.9365,14.8954],[73.1249,14.4199],[73.1667,14.3522],[73.4468,13.8117],[73.6155,13.4401],[73.7005,13.2721],[73.9014,12.7326],[74.0694,12.1938],[74.0722,12.1842],[74.2084,11.6555],[74.3149,11.1178],[74.4032,10.5811],[74.4573,10.2925],[74.531,10.0462],[74.7177,9.51337],[74.9204,8.98167],[74.9498,8.92405],[75.2094,8.4522],[75.5191,8.02013],[75.6186,7.92501],[76.1449,7.50913],[76.3534,7.40259],[76.8028,7.21698],[77.4867,7.08786],[78.2002,7.14478],[78.9449,7.37626],[79.0625,7.44236],[79.7307,7.98952],[79.7556,8.01821],[80.1617,8.53516],[80.411,9.07944],[80.5706,9.62369],[80.6874,10.1685],[80.7806,10.7144],[80.8116,11.2604],[80.8026,11.807],[80.8362,12.3561],[80.846,12.9063],[80.9248,13.4601],[80.9193,14.0135],[80.9504,14.2698],[80.9754,14.5705],[80.8783,15.1248],[80.9252,15.6856],[81.2591,16.2583],[81.5433,16.4283],[82.0399,16.85],[82.5483,17.0888],[83.3888,17.1576],[84.3098,17.5028],[84.3492,17.5161],[84.7604,17.8122],[85.1794,18.1099],[85.4806,18.2473],[86.0138,18.4832],[86.5575,18.7206],[86.6075,18.7457],[87.1337,18.9623],[87.6703,19.1803],[88.6804,19.3283],[89.2465,19.4435],[89.7569,19.5475],[90.8631,19.7484],[91.4595,19.9017],[92.0695,20.0564],[92.33820000000001,20.1769],[92.96659999999999,20.5044],[93.6151,20.8348],[93.6179,20.8367],[94.05220000000001,21.157],[94.4991,21.4794],[95.1252,22.1163],[95.53520000000002,22.74620000000001],[95.87980000000002,23.3771],[96.0222,24.0008],[96.0274,24.2414],[96.0038,24.6189],[95.8475,25.2322],[95.7703,25.4385],[95.4491,25.8341],[95.13,26.1413],[94.5602,26.4078],[94.2625,26.5463],[93.4231,26.9563],[93.3751,26.9648],[92.4125,27.1218],[91.74910000000001,27.4954],[91.632,27.5518],[90.7418,27.813],[90.11730000000001,28.0282],[89.8924,28.1025],[89.025,28.342],[88.1265,28.5117],[88.0268,28.5341],[87.2403,28.671],[86.4507,28.9508],[85.7575,29.0323],[85.5598,29.0535],[84.8152,29.3611],[84.3668,29.5902],[84.1187,29.7299],[83.5264,30.1869],[83.5006,30.2113],[82.9936,30.8078],[82.9784,30.8367],[82.7081,31.4501],[82.5891,31.664],[82.3016,32.0898],[82.0849,32.2995],[81.5575,32.7133],[81.4756,32.7621],[80.6333,32.8403],[79.793,32.9016],[78.9544,32.9445],[78.1975,33.1103],[78.0347,33.1631],[77.4538,33.2862],[76.7581,33.5375],[75.9673,33.5996],[75.3191,33.6768],[75.3191,33.6768],[75.1988,33.6867]
        ]],
        "type": "Polygon"
      }
    },{
      // ============ ПОЛИГОН 12 - Уровень сигнала 61 дБ (28 см) ============
      "type": "Feature",
      "properties": { "signal_level": 53, "description": "Отличный сигнал" },
      "geometry": {
        "coordinates": [[
    [43.5236,45.7846],[42.7608,45.7236],[42,45.5215],[41.5769,45.41220000000001],[41.2457,45.2885],[40.5016,44.9376],[39.7674,44.5804],[39.691,44.5527],[39.0449,44.1833],[38.3262,43.8767],[37.6011,43.7375],[36.8612,43.7811],[36.5785,43.7367],[36.1393,43.6397],[35.4354,43.7548],[35.3875,43.7599],[35.3588,43.7558],[34.6638,43.641],[33.9126,43.7134],[33.1674,43.7261],[32.4219,43.7265],[31.6888,43.6524],[30.9241,43.7267],[30.1861,43.6603],[29.4529,43.5697],[28.716,43.4923],[27.9653,43.4624],[27.2925,43.1434],[27.2842,43.1422],[26.5801,42.9781],[25.9042,42.6931],[25.5245,42.3926],[25.3555,42.0045],[25.2759,41.6001],[25.4209,40.8061],[25.5579,40.027],[25.783,39.2573],[26.0978,38.4973],[26.4245,37.7489],[26.5956,37.4194],[26.8561,37.0081],[27.5223,36.3651],[27.6031,36.2693],[28.338,35.6827],[28.6096,35.5345],[29.066,35.3608],[29.8004,34.9439],[30.1099,34.7997],[30.5005,34.6673],[31.1651,34.5755],[31.8521,34.2942],[32.5086,34.1922],[33.1601,34.1011],[33.8041,34.0477],[34.4419,34.031],[35.0698,34.1018],[35.6908,34.2545],[36.3148,34.3843],[36.9385,34.538],[37.3405,34.6749],[37.5575,34.7954],[38.1877,34.9073],[38.8113,35.1968],[39.4518,35.1384],[40.0912,35.0665],[40.7318,34.8289],[41.3665,34.7678],[41.7401,34.6523],[42,34.6002],[42.6317,34.5606],[43.263,34.5295],[43.8962,34.587],[44.4097,34.658],[44.5319,34.6771],[45.1711,34.7983],[45.82100000000001,35.0712],[46.3395,35.3643],[46.4841,35.4618],[47.15629999999999,35.8608],[47.4205,36.078],[47.8567,36.4838],[48.24340000000001,36.8],[48.57869999999999,37.1744],[48.97109999999999,37.5329],[49.3212,37.8925],[49.76139999999999,38.2797],[50.0849,38.6231],[50.4027,39.0365],[50.93,39.7655],[50.9589,39.8049],[51.2591,40.5818],[51.4063,41.3693],[51.28019999999999,42.0059],[51.031,42.159],[50.6053,42.3105],[49.9095,42.5082],[49.1858,42.5151],[48.47339999999999,42.6069],[47.7791,42.88],[47.7377,42.9117],[47.1087,43.4669],[46.87339999999999,43.7298],[46.4289,44.0983],[46.1919,44.5691],[45.7577,45.05439999999999],[45.0248,45.3872],[44.9597,45.4236],[44.9597,45.4236],[44.2792,45.6371],[43.5236,45.7846]
        ]],
        "type": "Polygon"
      }
    },
    {
      // ============ ПОЛИГОН 13 - Уровень сигнала 61 дБ (28 см) ============
      "type": "Feature",
      "properties": { "signal_level": 54, "description": "Отличный сигнал" },
      "geometry": {
        "coordinates": [[
          [77.665,12.8824],[77.2215,12.8123],[76.9292,12.7628],[76.1584,12.3924],[76.0425,12.2384],[75.8202,11.6904],[75.7472,11.1474],[75.713,10.6068],[75.7509,10.069],[75.7653,9.95142],[75.8527,9.5336],[76.16,9.0027],[76.2991,8.81347],[76.7461,8.47696],[76.9366,8.37141],[77.6124,8.16667],[78.3524,8.3889],[78.5436,8.50708],[79.1384,9.05571],[79.1813,9.13986],[79.3338,9.5992],[79.4466,10.1425],[79.4263,10.6483],[79.4191,10.6844],[79.2636,11.2246],[79.0788,11.7652],[78.9497,12.0403],[78.767,12.3038],[78.3546,12.7195],[77.8732,12.8286],[77.8732,12.8286],[77.665,12.8824]
        ]],
        "type": "Polygon"
      }
    },
    {
      // ============ ПОЛИГОН 16 - Уровень сигнала 64 дБ (22 см) ============
      "type": "Feature",
      "properties": { "signal_level": 54, "description": "Отличный сигнал" },
      "geometry": {
        "coordinates": [[
          [91.41039999999998,24.2102],[90.7923,24.0729],[90.18789999999998,23.9371],[89.2208,24.0135],[88.8765,23.5959],[88.6887,23.1003],[88.8306,22.988],[89.5805,22.9273],[89.8582,22.4392],[90.15610000000001,22.1754],[90.759,22.3314],[91.3756,22.4889],[91.449,22.5232],[92.0179,23.1599],[92.0014,23.4766],[91.935,23.765],[91.935,23.765],[91.41039999999998,24.2102]
        ]],
        "type": "Polygon"
      }
    }
  ]
};

// ============ ДАННЫЕ СПУТНИКОВ TURKSAT ДЛЯ РАСЧЕТОВ ============
const turksatSatellites = [
  
  {
    name: 'Turksat 6A West', position: 42.0,
    beams: {
      'Western Beam': { frequency: '11727', symbolRate: '27500', polarization: 'V', fec: '3/4', modulation: 'DVB-S2 8PSK', pilot: 'On' },
      'Europe Beam': { frequency: '11727', symbolRate: '27500', polarization: 'V', fec: '3/4', modulation: 'DVB-S2 8PSK', pilot: 'On' }
    },
    geoJson: { "type": "FeatureCollection", "features": [{
          // ПОЛИГОН 1 - Уровень сигнала 43 дБ
          "type": "Feature",
          "properties": { "signal_level": 43 },
          "geometry": {
            "coordinates": [[
              [-19.1363,71.5623],[-19.5102,71.5343],[-19.8496,71.3411],[-20.1408,71.1406],[-20.4728,70.9472],[-20.7714,70.7489],[-21.0576,70.5491],[-21.3141,70.3449],[-21.5901,70.1444],[-21.8485,69.9414],[-22.1415,69.7443],[-22.4054,69.5431],[-22.6592,69.3406],[-22.8943,69.1355],[-23.1496,68.934],[-23.3974,68.7316],[-23.6437,68.5293],[-23.8766,68.3253],[-24.108,68.1213],[-24.3145,67.9138],[-24.557,67.7122],[-24.7325,67.5006],[-24.9734,67.2992],[-25.1578,67.0895],[-25.3778,66.8855],[-25.5635,66.6765],[-25.748,66.4676],[-25.9615,66.2633],[-26.1594,66.0568],[-26.342,65.8483],[-26.531,65.641],[-26.7036,65.4315],[-26.8637,65.2203],[-27.0453,65.0124],[-27.1938,64.7999],[-27.3742,64.5923],[-27.52659999999999,64.3808],[-27.7118,64.1742],[-27.8733,63.9643],[-28.0029,63.75],[-28.1665,63.5407],[-28.3424,63.3333],[-28.4853,63.1214],[-28.6417,62.9115],[-28.7595,62.69630000000001],[-28.9098,62.48590000000001],[-29.0469,62.2736],[-29.2052,62.06460000000001],[-29.3165,61.849],[-29.4365,61.6347],[-29.5945,61.42600000000001],[-29.7035,61.2104],[-29.8339,60.998],[-29.9725,60.78679999999999],[-30.1067,60.5751],[-30.2225,60.36099999999999],[-30.3265,60.1453],[-30.4453,59.9318],[-30.5641,59.7183],[-30.6683,59.503],[-30.7998,59.2914],[-30.9,59.0757],[-30.9984,58.8599],[-31.1305,58.64860000000001],[-31.2123,58.43069999999999],[-31.3183,58.2161],[-31.4263,58.0018],[-31.549,57.78960000000001],[-31.634,57.5724],[-31.7295,57.3567],[-31.8352,57.1424],[-31.9164,56.92490000000001],[-32.0215,56.7107],[-32.1177,56.4953],[-32.1932,56.2773],[-32.2907,56.0622],[-32.3775,55.8457],[-32.4664,55.6296],[-32.5619,55.4144],[-32.639,55.19689999999999],[-32.7233,54.9804],[-32.7957,54.7623],[-32.8922,54.54740000000001],[-32.9746,54.3308],[-33.0443,54.11259999999999],[-33.1457,53.8984],[-33.1469,53.6837],[-33.1469,53.6837],[-31.6715,53.4524],[-31.0428,53.3279],[-30.1713,53.1277],[-28.9786,52.79769999999999],[-27.9201,52.4812],[-27.0773,52.1931],[-26.0449,51.7509],[-25.2036,51.3361],[-24.2768,50.9121],[-23.4836,50.50810000000001],[-22.8271,50.0837],[-21.7764,49.4862],[-20.8845,48.9151],[-20.7519,48.8306],[-20.0693,48.32599999999999],[-19.4638,47.8357],[-18.4426,47.1089],[-18.0217,46.7792],[-17.2978,46.2596],[-16.6419,45.7532],[-16.0383,45.3023],[-15.4804,44.8606],[-15.3527,44.7596],[-14.7169,44.2717],[-14.1288,43.7939],[-13.5995,43.3267],[-13.1063,42.8677],[-12.5269,42.2417],[-12.3108,41.9814],[-11.8117,41.1393],[-11.627,40.6657],[-11.5121,40.3295],[-11.3172,39.5419],[-11.277,39.4057],[-11.1002,38.7633],[-10.8523,38.0443],[-10.8289,37.9907],[-10.3916,37.2145],[-9.92763,36.4463],[-9.47008,35.8031],[-9.39556,35.6826],[-8.72454,34.9177],[-7.976900000000001,34.157],[-7.11598,33.5161],[-6.940359999999999,33.3843],[-6.270829999999999,32.9907],[-5.62674,32.602],[-4.92606,32.2888],[-4.22897,32.0806],[-3.5502,31.8749],[-2.43451,31.7331],[-1.86544,31.6609],[-1.35801,31.6001],[-1.17411,31.6139],[-0.439463,31.6563],[0.441232,31.7424],[1.36327,31.7392],[2.25681,31.7528],[3.07396,31.86809999999999],[3.94271,31.8739],[4.79283,31.8873],[4.87911,31.8867],[5.640880000000001,31.8805],[6.48234,31.86],[7.33641,31.7891],[8.15672,31.7594],[8.99774,31.6604],[9.79539,31.6268],[10.1522,31.5789],[10.6169,31.5154],[11.4062,31.4506],[12.2019,31.344],[12.982,31.2499],[13.7675,31.1136],[14.5253,31.0232],[15.2987,30.8629],[16.0477,30.7428],[16.6243,30.6049],[16.807,30.564],[17.5363,30.4486],[18.2689,30.2949],[18.9839,30.1717],[19.6937,30.0407],[20.3853,29.95],[21.0808,29.8187],[21.4435,29.77],[21.7592,29.7307],[22.4416,29.5994],[23.1117,29.4969],[23.7915,29.3213],[24.4567,29.1857],[25.1133,29.018],[25.1228,29.0157],[25.7728,28.8997],[26.4258,28.7397],[27.0621,28.6475],[27.694,28.5559],[28.3141,28.5152],[28.931,28.47790000000001],[29.5394,28.4799],[30.1516,28.439],[30.7587,28.4176],[31.3687,28.3517],[31.9732,28.3125],[32.3841,28.2275],[32.5845,28.1849],[33.1887,28.0959],[33.7947,27.9577],[34.3929,27.8762],[34.9913,27.7607],[35.582,27.7207],[36.1702,27.6964],[36.7533,27.7409],[37.3374,27.7606],[37.9183,27.8415],[38.5019,27.8608],[39.0848,27.8924],[39.6691,27.8623],[40.252,27.8718],[40.8352,27.835],[41.4172,27.9065],[42,27.9816],[42.5843,28.147],[42.5864,28.1482],[43.1712,28.3538],[43.7632,28.6717],[43.9513,28.7724],[44.3592,28.9755],[44.9618,29.3388],[45.06359999999999,29.4043],[45.5697,29.7001],[46.0336,30.0437],[46.18780000000001,30.1498],[46.8099,30.5382],[47.0107,30.69129999999999],[47.4428,30.9883],[47.9866,31.3476],[48.08149999999999,31.4067],[48.7317,31.8657],[48.93930000000001,32.0128],[49.3916,32.3295],[49.8897,32.6875],[50.06270000000001,32.8092],[50.74339999999999,33.2807],[50.8596,33.3725],[51.4473,33.8486],[51.7302,34.0655],[52.16129999999999,34.3904],[52.5732,34.7689],[52.9124,35.0834],[53.3392,35.4809],[53.6875,35.8059],[54.08650000000001,36.2035],[54.5026,36.6297],[54.8249,36.9379],[55.34190000000001,37.4429],[55.58879999999999,37.6845],[56.2221,38.315],[56.3644,38.4448],[57.1324,39.1777],[57.1768,39.2202],[57.9397,40.0081],[58.1253,40.2155],[58.709,40.8114],[59.1989,41.3628],[59.4402,41.6293],[60.1582,42.4632],[60.4217,42.7722],[60.937,43.3181],[61.6905,44.0775],[61.82079999999999,44.1975],[62.33000000000001,44.6488],[62.8542,45.1065],[62.9707,45.20799999999999],[63.5686,45.6158],[64.1833,46.0296],[64.2303,46.058],[64.8507,46.4853],[65.4904,46.91949999999999],[65.6774,47.0423],[66.2303,47.5349],[66.8046,48.0361],[67.4817,49.0298],[67.5289,50.0098],[67.3957,50.2211],[66.7571,50.7323],[66.4326,50.9407],[66.0129,51.0866],[65.06,51.099],[64.1622,51.19430000000001],[63.2071,51.17659999999999],[62.2911,51.2179],[61.3803,51.2591],[60.4885,51.3301],[59.5888,51.3762],[58.7121,51.46789999999999],[57.9635,51.4889],[57.8106,51.4928],[56.9397,51.5887],[56.0344,51.5841],[55.1605,51.6606],[54.26969999999999,51.679],[53.41550000000001,51.81530000000001],[52.5564,51.9411],[51.7222,52.1787],[51.28470000000001,52.3021],[50.8889,52.4506],[50.0758,52.8634],[49.2418,53.2419],[49.0511,53.34699999999999],[48.42459999999999,53.8045],[47.5732,54.285],[47.2572,54.4573],[46.7061,54.7998],[45.80260000000001,55.1856],[44.9006,55.6226],[44.886,55.6301],[43.946,56.0461],[42.9875,56.5688],[42.1512,56.8637],[42,56.9205],[40.9846,57.5216],[39.9339,58.0866],[39.7439,58.1976],[38.8389,58.7186],[37.7103,59.2621],[36.8969,59.6422],[36.5388,59.8096],[35.391,60.0418],[34.26,60.1269],[33.1447,60.12360000000001],[32.0717,59.97990000000001],[31.5964,59.7852],[31.0955,59.5816],[30.0142,59.5084],[28.9725,59.34069999999999],[27.8805,59.29489999999999],[26.6808,59.4574],[25.3589,59.8023],[24.1109,60.1485],[23.9711,60.1862],[23.1632,60.5252],[22.3255,60.8729],[21.4504,61.2364],[20.5384,61.6103],[19.7619,61.9781],[18.3917,62.6086],[17.2653,63.0835],[16.0641,63.5785],[14.904,64.0662],[13.2849,64.7183],[11.8796,65.2026],[10.3513,65.7151],[8.73116,66.2383],[6.931230000000001,66.8005],[6.82223,66.8344],[5.22317,67.2028],[3.46774,67.6013],[1.4863,68.0474],[-0.788212,68.5477],[-2.86748,68.9026],[-5.30302,69.3192],[-6.70004,69.5551],[-8.29654,69.8248],[-10.2037,70.1466],[-12.7009,70.5665],[-14.6523,70.8576],[-16.0382,71.0703],[-17.0199,71.2238],[-19.1363,71.5623]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 2 - Уровень сигнала 46 дБ
          "type": "Feature",
          "properties": { "signal_level": 46 },
          "geometry": {
            "coordinates": [[
              [-25.4353,66.5358],[-25.748,66.4676],[-25.9615,66.2633],[-26.1594,66.0568],[-26.342,65.8483],[-26.531,65.641],[-26.7036,65.4315],[-26.8637,65.2203],[-27.0453,65.0124],[-27.1938,64.7999],[-27.3742,64.5923],[-27.52659999999999,64.3808],[-27.7118,64.1742],[-27.8733,63.9643],[-28.0029,63.75],[-28.1665,63.5407],[-28.3424,63.3333],[-28.4853,63.1214],[-28.6417,62.9115],[-28.7595,62.69630000000001],[-28.9098,62.48590000000001],[-29.0469,62.2736],[-29.2052,62.06460000000001],[-29.3165,61.849],[-29.4365,61.6347],[-29.5945,61.42600000000001],[-29.7035,61.2104],[-29.8339,60.998],[-29.9725,60.78679999999999],[-30.1067,60.5751],[-30.2225,60.36099999999999],[-30.0793,60.22120000000001],[-30.0793,60.22120000000001],[-28.1548,59.8645],[-27.322,59.6586],[-26.1971,59.3224],[-24.8026,58.89999999999999],[-23.3057,58.2876],[-22.2136,57.7377],[-21.3989,57.2474],[-20.3315,56.4963],[-19.5964,55.8655],[-18.9796,55.33409999999999],[-18.3761,54.6062],[-18.0596,54.26080000000001],[-17.3394,53.4109],[-17.0521,53.11620000000001],[-16.4547,52.2704],[-16.1504,51.9669],[-15.3271,51.1343],[-14.5229,50.4513],[-14.0751,50.0154],[-13.4731,49.46990000000001],[-12.9292,48.938],[-12.6558,48.6967],[-11.843,47.8949],[-10.8393,46.88589999999999],[-10.6071,46.6655],[-9.94074,45.9113],[-9.06678,44.9599],[-8.38383,44.2786],[-8.14543,44.0241],[-7.64342,43.5594],[-7.169700000000001,43.1022],[-6.64546,42.6447],[-6.1486,42.1943],[-5.61711,41.7452],[-5.11143,41.3028],[-4.59265,40.8635],[-4.09733,40.4303],[-3.58035,39.9991],[-3.085249999999999,39.5738],[-2.59269,39.1524],[-2.11962,38.7363],[-1.78926,38.4493],[-1.15601,37.9139],[-0.483283,37.4926],[0.16448,37.0772],[0.548417,36.8912],[1.18436,36.56],[1.80188,36.2327],[2.11406,36.0931],[2.74207,35.8677],[3.35624,35.6448],[4.41487,35.3377],[4.47095,35.323],[5.50156,35.0854],[6.489120000000001,34.8767],[7.43979,34.6932],[8.29997,34.6413],[9.1906,34.5048],[10.0472,34.4054],[10.9167,34.2504],[11.0851,34.2206],[11.7718,34.0952],[12.627,33.9071],[13.4677,33.719],[14.3369,33.4256],[14.5962,33.3477],[15.1704,33.1822],[15.9984,32.914],[16.8128,32.644],[17.0622,32.5562],[17.6163,32.3657],[18.3929,32.1302],[19.1511,31.9175],[19.7781,31.7759],[19.8852,31.7528],[20.6216,31.5484],[21.3338,31.401],[22.0491,31.2122],[22.7483,31.0554],[22.8913,31.0049],[23.45799999999999,30.8234],[24.152,30.6243],[24.8395,30.4212],[25.3312,30.2813],[25.517,30.2324],[26.1913,30.0259],[26.8445,29.8997],[27.4927,29.7744],[28.1266,29.7077],[28.7548,29.6553],[29.3746,29.6389],[29.9973,29.5843],[30.6146,29.5477],[31.0524,29.5031],[31.2326,29.4851],[31.8465,29.4346],[32.4637,29.3311],[33.0767,29.239],[33.6886,29.1271],[34.2908,29.0941],[34.8941,29.0243],[35.4916,29.0075],[36.0847,29.0366],[36.6752,29.0989],[37.2681,29.1162],[37.8569,29.2092],[38.4499,29.2125],[39.0414,29.2447],[39.6348,29.2041],[40.2266,29.1935],[40.8187,29.1359],[41.4089,29.2076],[42,29.2627],[42.5924,29.3958],[42.5925,29.3962],[43.1872,29.5734],[43.7863,29.8356],[44.2075,30.0329],[44.3898,30.1121],[44.9993,30.4333],[45.45049999999999,30.6788],[45.6142,30.7616],[46.2388,31.17],[46.5115,31.33310000000001],[46.86799999999999,31.5345],[47.5077,31.9552],[47.57259999999999,31.9964],[48.15350000000001,32.3507],[48.6039,32.6691],[48.8134,32.8169],[49.4843,33.2944],[49.5626,33.3507],[50.1663,33.7789],[50.53250000000001,34.0433],[50.86220000000001,34.2856],[51.4073,34.7447],[51.5838,34.8935],[52.3057,35.4571],[52.3158,35.4655],[53.074,36.1784],[53.0883,36.1921],[53.8316,36.911],[53.89130000000001,36.9714],[54.5417,37.6545],[54.7447,37.8805],[55.2647,38.4108],[55.6336,38.8083],[55.98839999999999,39.1805],[56.581,39.8337],[56.7071,39.9639],[57.4097,40.7621],[57.6123,41.009],[58.07520000000001,41.5743],[58.6973,42.4015],[58.82379999999999,42.5856],[59.3082,43.2455],[59.91590000000001,44.108],[60.3193,44.6862],[60.557,44.9916],[61.1636,45.8948],[61.6801,46.81619999999999],[61.9345,47.7482],[61.7709,48.2509],[61.54019999999999,48.6707],[61.186,48.89920000000001],[60.4755,49.2853],[59.8694,49.5539],[59.7262,49.5964],[58.9221,49.78529999999999],[58.1186,49.9811],[57.2729,50.06789999999999],[56.45330000000001,50.2272],[55.58290000000001,50.235],[54.7407,50.3233],[54.6752,50.3252],[53.8798,50.34380000000001],[53.03899999999999,50.4306],[52.1931,50.4971],[51.3684,50.6569],[50.5366,50.7992],[49.7219,51.051],[49.1707,51.1899],[48.89469999999999,51.27269999999999],[48.0772,51.60640000000001],[47.2408,51.8819],[46.39639999999999,52.17410000000001],[46.298,52.19939999999999],[45.5385,52.4379],[44.6684,52.66930000000001],[43.783,52.77],[42.8943,52.8991],[42,52.87],[41.1075,52.819],[40.2216,52.6679],[39.3519,52.36419999999999],[38.9579,52.1858],[38.4971,52.0296],[37.6463,51.7779],[36.8145,51.4474],[35.9708,51.2788],[35.291,51.18060000000001],[35.1233,51.16439999999999],[34.2554,51.17309999999999],[33.9036,51.2113],[33.3608,51.29659999999999],[32.3827,51.74110000000001],[31.3864,52.1577],[31.0763,52.3524],[30.2506,52.95490000000001],[29.4429,53.5129],[29.0424,53.80259999999999],[28.447,54.261],[27.8306,54.7288],[27.7058,54.8115],[27.0649,55.17399999999999],[26.4051,55.54330000000001],[25.6612,56.0362],[24.9514,56.4467],[24.204,56.87160000000001],[23.42749999999999,57.30660000000001],[23.2213,57.4398],[22.4747,57.8804],[21.6955,58.33229999999999],[20.4463,58.96249999999999],[19.9418,59.196],[18.9778,59.6777],[17.9603,60.17529999999999],[16.9011,60.6656],[15.8345,61.1213],[14.7424,61.5533],[13.5848,62.0017],[12.5395,62.309],[11.4437,62.62730000000001],[10.9812,62.7614],[10.06,63.0183],[9.09781,63.2838],[8.04129,63.484],[6.93934,63.6928],[5.84015,63.87789999999999],[4.69076,64.0721],[3.66119,64.1778],[2.59227,64.2906],[1.42993,64.436],[0.208651,64.5916],[-1.86779,64.6816],[-3.024,64.7607],[-4.24126,64.8502],[-5.36723,64.8878],[-6.55344,64.9356],[-7.30051,64.99],[-9.39882,65.1495],[-10.6347,65.1661],[-11.9693,65.1989],[-13.5962,65.2979],[-15.4686,65.4351],[-16.544,65.525],[-17.7613,65.6366],[-19.2008,65.7818],[-21.0673,65.9913],[-22.4246,66.1398],[-23.3793,66.2554],[-25.4353,66.5358]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 3 - Уровень сигнала 48 дБ
          "type": "Feature",
          "properties": { "signal_level": 48 },
          "geometry": {
            "coordinates": [[
              [-0.159795,61.18000000000001],[-1.52093,61.1253],[-1.71201,61.1139],[-3.36434,61.0747],[-4.95053,60.97880000000001],[-6.72545,60.9431],[-8.219,60.76089999999999],[-9.10539,60.681],[-9.79429,60.5936],[-11.0237,60.2768],[-12.1597,59.9175],[-12.3099,59.7576],[-12.488,59.26010000000001],[-12.4757,58.49769999999999],[-12.4723,58.4734],[-12.4003,58.05319999999999],[-12.3596,57.64320000000001],[-12.2663,57.2464],[-12.1986,56.7853],[-11.9568,56.0347],[-11.8952,55.8574],[-11.6841,55.36199999999999],[-11.5119,54.8787],[-11.5011,54.8497],[-11.3127,54.3665],[-11.1579,53.8941],[-11.0942,53.71250000000001],[-10.775,52.8761],[-10.68,52.6108],[-10.3055,51.79140000000001],[-10.198,51.535],[-9.5792,50.5373],[-9.54241,50.47000000000001],[-8.74251,49.4183],[-8.31477,48.9104],[-7.914979999999999,48.3905],[-7.08129,47.3885],[-6.6776,46.9144],[-6.26593,46.4117],[-5.43322,45.4556],[-4.6317,44.5231],[-4.02991,43.8933],[-3.767929999999999,43.6044],[-2.86416,42.7008],[-2.34042,42.2493],[-1.84043,41.8046],[-1.43035,41.4854],[-0.7163299999999999,40.9176],[-0.0799621,40.4746],[0.530684,40.0381],[1.44725,39.4634],[1.95844,39.1617],[2.5867,38.8207],[3.19633,38.484],[3.67463,38.2813],[4.51051,37.9648],[5.13828,37.7183],[5.75205,37.4745],[6.13076,37.3683],[6.82178,37.1862],[7.842130000000001,36.9326],[8.81146,36.7259],[9.7539,36.5295],[10.6669,36.3536],[10.6931,36.3473],[11.5883,36.1269],[12.4782,35.9276],[13.3874,35.6508],[14.1843,35.4367],[14.2596,35.4162],[15.1621,35.0701],[16.0221,34.7834],[16.4456,34.6224],[16.8846,34.447],[17.7164,34.149],[18.5352,33.8462],[18.5718,33.8351],[19.3202,33.6039],[20.0968,33.3512],[20.8588,33.1101],[21.0305,33.0542],[21.6074,32.8782],[22.3429,32.6582],[23.09,32.3564],[23.2174,32.3046],[23.8236,32.0643],[24.5426,31.7923],[25.1567,31.5816],[25.2456,31.5524],[25.9494,31.2687],[26.6269,31.0766],[27.2928,30.9129],[27.598,30.8606],[27.9435,30.8053],[28.5876,30.7108],[29.2186,30.6752],[29.8539,30.5908],[30.4806,30.54339999999999],[31.1095,30.4568],[31.7326,30.3927],[32.3573,30.2889],[32.9752,30.2193],[33.5927,30.12740000000001],[34.201,30.1059],[34.4837,30.0804],[34.8106,30.049],[35.413,30.0612],[35.5545,30.0668],[36.0137,30.0843],[36.6098,30.1687],[37.2106,30.1736],[37.8075,30.2456],[38.4076,30.2494],[39.0069,30.2567],[39.6077,30.202],[40.206,30.205],[40.8049,30.1529],[41.4021,30.2118],[42,30.2558],[42.599,30.3749],[43.2004,30.5324],[43.5215,30.6699],[43.8063,30.7863],[44.4157,31.0235],[45.03119999999999,31.3213],[45.03299999999999,31.3224],[45.6518,31.6172],[46.2638,31.9837],[46.28190000000001,31.9938],[46.9174,32.3454],[47.3873,32.6545],[47.5648,32.7696],[48.21769999999999,33.1586],[48.46589999999999,33.3356],[48.8874,33.6412],[49.43769999999999,34.0254],[49.56689999999999,34.1173],[50.2624,34.6376],[50.3813,34.7254],[50.97020000000001,35.1576],[51.298,35.4363],[51.7078,35.797],[52.1445,36.1574],[52.462,36.4324],[52.9407,36.889],[53.2574,37.2038],[53.67609999999999,37.631],[54.098,38.0873],[54.363,38.3847],[55.0051,39.1499],[55.007,39.1526],[55.6562,39.9293],[55.98970000000001,40.3563],[56.2891,40.7227],[56.9045,41.5309],[57.0932,41.8137],[57.48179999999999,42.354],[58.01070000000001,43.1919],[58.4973,44.0465],[58.5607,44.1821],[58.9159,44.9171],[59.2224,45.8035],[59.3051,46.3416],[59.3506,46.703],[59.0129,47.6037],[58.96080000000001,47.6584],[58.29799999999999,48.14899999999999],[57.81069999999999,48.49029999999999],[57.6057,48.5833],[56.8128,48.7469],[56.0353,48.964],[55.2168,49.05749999999999],[54.3993,49.1535],[53.56490000000001,49.1846],[52.839,49.2695],[52.7482,49.2799],[51.91790000000001,49.3167],[51.1086,49.4481],[50.2908,49.5457],[49.4885,49.7421],[48.6762,49.90629999999999],[47.9522,50.143],[47.8733,50.1708],[47.0592,50.4101],[46.23810000000001,50.6559],[45.4014,50.812],[44.5604,50.9793],[43.7077,51.00999999999999],[42.8548,51.0645],[42,50.96419999999999],[41.1498,50.8342],[40.3075,50.6317],[39.475,50.389],[38.8171,50.1063],[38.6588,50.0459],[37.8414,49.8413],[37.0354,49.59129999999999],[36.2291,49.4035],[35.4185,49.2795],[34.5959,49.2434],[34.041,49.1923],[33.7793,49.1714],[33.5561,49.204],[32.9182,49.318],[32.0653,49.391],[31.16,49.6513],[30.2324,49.9396],[29.2679,50.327],[29.2566,50.3325],[28.1879,50.9334],[27.3509,51.4303],[27.0448,51.6304],[26.4756,52.09159999999999],[25.8869,52.56150000000001],[25.6863,52.7239],[25.0837,53.2267],[24.4568,53.7403],[24.1558,53.9781],[23.4717,54.4782],[22.7581,54.9901],[22.5628,55.1136],[21.7143,55.6896],[20.8199,56.28250000000001],[20.7539,56.3246],[19.9029,56.8218],[19.0092,57.3331],[18.2356,57.7763],[17.0621,58.36269999999999],[16.1942,58.68470000000001],[15.2926,59.015],[14.0681,59.4666],[14.0681,59.4666],[13.3783,59.6996],[12.5333,59.8913],[11.6632,60.0881],[10.7939,60.2661],[9.89795,60.44939999999999],[8.27647,60.6348],[6.4616,60.9157],[4.90124,60.9709],[3.17922,61.0982],[1.61848,61.0915],[-0.159795,61.18000000000001]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 4 - Уровень сигнала 51 дБ
          "type": "Feature",
          "properties": { "signal_level": 51 },
          "geometry": {
            "coordinates": [[
              [8.36494,52.7468],[8.19357,52.7284],[7.34996,52.6216],[6.36763,52.4553],[5.27942,52.37850000000001],[4.33133,52.16310000000001],[4.03726,52.0624],[3.51135,51.83039999999999],[2.6905,51.49710000000001],[2.09412,51.2256],[1.90957,51.1286],[1.29977,50.6172],[1.02175,50.3329],[0.807042,50.0102],[0.560941,49.4064],[0.560128,49.1975],[0.613983,48.4544],[0.743481,48.0047],[0.8818319999999998,47.5057],[1.53714,46.5442],[2.24042,45.601],[3.14289,44.6618],[3.74591,44.1874],[4.32303,43.7208],[4.95316,43.2553],[5.55801,42.7971],[5.71421,42.7064],[6.46227,42.3573],[7.18723,42.0135],[7.81138,41.8171],[8.35121,41.6705],[9.34255,41.5391],[10.3578,41.3381],[11.4556,40.9603],[12.4056,40.7915],[12.5699,40.6982],[13.6026,40.1234],[14.1727,39.8263],[14.697,39.5687],[15.2401,39.2715],[15.7727,38.9773],[15.7767,38.9748],[16.8015,38.4123],[17.328,38.1457],[17.7531,37.9609],[18.6456,37.602],[19.2894,37.3151],[19.5263,37.2238],[20.3965,36.823],[21.1782,36.5083],[21.226,36.4912],[22.0999,35.9639],[22.4339,35.7463],[22.9424,35.472],[23.6939,34.9983],[23.773,34.9545],[24.556,34.5542],[25.0145,34.2622],[25.3449,34.0678],[26.0928,33.6969],[26.4708,33.5348],[26.8127,33.4061],[27.5116,33.1748],[28.2009,32.9545],[28.8649,32.8407],[29.0458,32.7912],[29.5335,32.6706],[30.1909,32.5381],[30.8412,32.4229],[31.4823,32.3466],[32.1312,32.1815],[32.765,32.1067],[33.1787,32.0417],[33.3986,32.008],[34.0208,31.9918],[34.6435,31.9528],[35.259,31.9763],[35.8735,32.0015],[35.8814,32.0024],[36.4838,32.0785],[37.0975,32.1051],[37.7078,32.1862],[38.3224,32.1829],[38.9349,32.2193],[39.5504,32.1586],[40.1627,32.1778],[40.7759,32.1429],[41.3876,32.1972],[42,32.2356],[42.6135,32.3383],[43.2288,32.4446],[43.7581,32.6289],[43.8485,32.6608],[44.4698,32.8049],[45.0973,33.0378],[45.7092,33.3071],[45.7315,33.317],[46.37349999999999,33.638],[47.0237,33.9846],[47.039,33.9945],[47.6897,34.4438],[48.0944,34.6908],[48.36240000000001,34.8657],[49.0541,35.3819],[49.0753,35.3979],[49.76289999999999,35.9424],[49.98,36.1148],[50.4916,36.55],[50.8829,36.8442],[51.2322,37.128],[51.7001,37.5841],[52.02170000000001,37.9176],[52.41529999999999,38.3345],[52.8595,38.8462],[53.0685,39.0964],[53.6159,39.869],[53.80559999999999,40.1659],[54.11979999999999,40.6546],[54.5671,41.4536],[54.9037,42.2641],[55.1386,42.9055],[55.2085,43.0899],[55.3811,43.8744],[55.393,43.9288],[55.3522,44.7785],[55.06550000000001,45.6334],[55.0623,45.6384],[54.3922,46.0799],[53.6825,46.4138],[53.4256,46.47529999999999],[52.9233,46.56069999999999],[52.1549,46.6729],[51.3705,46.708],[50.60600000000001,46.847],[49.8271,46.9114],[49.0709,47.1301],[48.618,47.2681],[48.309,47.3434],[47.54650000000001,47.5967],[46.7775,47.8525],[46.00449999999999,48.1454],[45.8899,48.1629],[45.20980000000001,48.25260000000001],[44.4157,48.4253],[43.6113,48.4604],[42.8051,48.43360000000001],[42,48.32399999999999],[41.1994,48.1805],[41.0767,48.1426],[40.4074,47.9206],[39.6231,47.6751],[38.8501,47.372],[38.3225,47.2267],[38.0795,47.14960000000001],[37.3178,46.8989],[36.5543,46.723],[35.7897,46.58859999999999],[35.0162,46.53359999999999],[34.2518,46.4222],[33.4686,46.4266],[32.9487,46.4096],[32.689,46.4003],[31.9019,46.402],[31.108,46.4227],[30.6671,46.4724],[30.2925,46.5168],[29.4766,46.5877],[28.644,46.6968],[27.7913,46.8472],[26.8998,47.08759999999999],[26.0342,47.211],[25.0969,47.50340000000001],[24.5746,47.6225],[24.1688,47.7263],[23.1179,48.2014],[22.0927,48.5518],[21.6264,48.71589999999999],[21.0101,48.9672],[19.8374,49.49280000000001],[18.9191,49.84810000000001],[18.6461,49.9766],[17.9577,50.3473],[17.2477,50.7244],[16.8026,50.9932],[15.6458,51.6586],[14.3193,52.0877],[13.8135,52.25469999999999],[13.8135,52.25469999999999],[12.9796,52.4706],[11.7979,52.611],[10.6373,52.6979],[9.61073,52.6154],[8.36494,52.7468]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 5 - Уровень сигнала 52 дБ
          "type": "Feature",
          "properties": { "signal_level": 52 },
          "geometry": {
            "coordinates": [[
              [43.574,47.3675],[42.7864,47.3419],[42,47.21830000000001],[41.946,47.2077],[41.2184,47.04649999999999],[40.4454,46.7721],[39.681,46.4936],[39.211,46.3089],[38.927,46.1774],[38.1783,45.9055],[37.4295,45.7149],[36.6834,45.5408],[36.1805,45.45680000000001],[35.9361,45.4088],[35.1795,45.364],[34.433,45.2492],[33.6676,45.2587],[32.9106,45.20830000000001],[32.1403,45.2231],[31.3716,45.2158],[30.5788,45.303],[29.8002,45.30909999999999],[29.0133,45.3338],[28.2131,45.3914],[27.3903,45.5063],[26.5921,45.5176],[25.7648,45.6024],[24.9323,45.6801],[24.1091,45.7125],[23.2468,45.8283],[22.4121,45.85309999999999],[21.6652,45.6566],[20.8495,45.61740000000001],[20.0838,45.459],[19.1322,45.6842],[18.4711,45.2986],[17.5772,45.37560000000001],[17.0544,45.34100000000001],[17.1022,44.6412],[16.8805,44.4912],[17.197,44.4574],[18.2376,44.0553],[18.6513,43.5454],[19.1452,43.1712],[19.6273,42.8013],[19.7297,42.6632],[20.3539,41.824],[21.0793,40.9964],[21.2792,40.6211],[21.5559,40.1965],[22.2346,39.4019],[22.5654,38.6361],[22.7816,38.3932],[23.1296,37.873],[23.6626,37.1238],[23.9631,36.8114],[24.3548,36.3798],[24.9026,35.8891],[25.1671,35.6432],[25.7487,35.218],[26.2715,34.9087],[26.5195,34.7861],[27.2691,34.3903],[27.7968,34.1746],[27.9841,34.1091],[28.679,33.8905],[29.3631,33.6938],[30.0399,33.5032],[30.2797,33.4312],[30.7092,33.3228],[31.3581,33.2483],[32.0189,33.0593],[32.6652,32.945],[33.3027,32.8763],[33.9326,32.854],[34.5627,32.8116],[35.1828,32.8596],[35.803,32.9012],[36.4202,32.9784],[37.0386,33.0408],[37.6557,33.1274],[38.2774,33.1346],[38.8961,33.202],[39.5187,33.1675],[40.1387,33.197],[40.7601,33.1479],[41.3797,33.1963],[42,33.2062],[42.6209,33.2642],[42.9012,33.2939],[43.2429,33.3316],[43.8687,33.4986],[44.4962,33.6215],[45.12879999999999,33.8078],[45.54389999999999,33.9813],[45.7693,34.0777],[46.4194,34.4151],[46.94189999999999,34.6776],[47.07640000000001,34.751],[47.75540000000001,35.271],[47.9302,35.3817],[48.44149999999999,35.7414],[48.9063,36.0977],[49.1471,36.2926],[49.8208,36.8248],[49.8696,36.8709],[50.6216,37.5594],[50.6247,37.5621],[51.39800000000001,38.2817],[51.42659999999999,38.3119],[52.08120000000001,39.0722],[52.2416,39.2797],[52.6161,39.8432],[53.0669,40.6259],[53.2981,41.2074],[53.3829,41.4189],[53.64850000000001,42.2263],[53.7988,43.0459],[53.7629,43.4311],[53.62860000000001,43.8727],[53.23269999999999,44.4588],[52.9333,44.7022],[52.55969999999999,44.8877],[51.8395,45.1197],[51.0906,45.215],[50.3503,45.36690000000001],[49.59490000000001,45.4344],[49.4624,45.4863],[48.863,45.675],[48.1346,45.98790000000001],[47.39879999999999,46.3022],[47.3355,46.337],[46.65440000000001,46.6106],[45.9053,46.964],[45.1365,47.1696],[44.9508,47.22010000000001],[44.9508,47.22010000000001],[44.3602,47.3424],[43.574,47.3675]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 6 - Уровень сигнала 53 дБ
          "type": "Feature",
          "properties": { "signal_level": 53 },
          "geometry": {
            "coordinates": [[
              [43.5236,45.7846],[42.7608,45.7236],[42,45.5215],[41.5769,45.41220000000001],[41.2457,45.2885],[40.5016,44.9376],[39.7674,44.5804],[39.691,44.5527],[39.0449,44.1833],[38.3262,43.8767],[37.6011,43.7375],[36.8612,43.7811],[36.5785,43.7367],[36.1393,43.6397],[35.4354,43.7548],[35.3875,43.7599],[35.3588,43.7558],[34.6638,43.641],[33.9126,43.7134],[33.1674,43.7261],[32.4219,43.7265],[31.6888,43.6524],[30.9241,43.7267],[30.1861,43.6603],[29.4529,43.5697],[28.716,43.4923],[27.9653,43.4624],[27.2925,43.1434],[27.2842,43.1422],[26.5801,42.9781],[25.9042,42.6931],[25.5245,42.3926],[25.3555,42.0045],[25.2759,41.6001],[25.4209,40.8061],[25.5579,40.027],[25.783,39.2573],[26.0978,38.4973],[26.4245,37.7489],[26.5956,37.4194],[26.8561,37.0081],[27.5223,36.3651],[27.6031,36.2693],[28.338,35.6827],[28.6096,35.5345],[29.066,35.3608],[29.8004,34.9439],[30.1099,34.7997],[30.5005,34.6673],[31.1651,34.5755],[31.8521,34.2942],[32.5086,34.1922],[33.1601,34.1011],[33.8041,34.0477],[34.4419,34.031],[35.0698,34.1018],[35.6908,34.2545],[36.3148,34.3843],[36.9385,34.538],[37.3405,34.6749],[37.5575,34.7954],[38.1877,34.9073],[38.8113,35.1968],[39.4518,35.1384],[40.0912,35.0665],[40.7318,34.8289],[41.3665,34.7678],[41.7401,34.6523],[42,34.6002],[42.6317,34.5606],[43.263,34.5295],[43.8962,34.587],[44.4097,34.658],[44.5319,34.6771],[45.1711,34.7983],[45.82100000000001,35.0712],[46.3395,35.3643],[46.4841,35.4618],[47.15629999999999,35.8608],[47.4205,36.078],[47.8567,36.4838],[48.24340000000001,36.8],[48.57869999999999,37.1744],[48.97109999999999,37.5329],[49.3212,37.8925],[49.76139999999999,38.2797],[50.0849,38.6231],[50.4027,39.0365],[50.93,39.7655],[50.9589,39.8049],[51.2591,40.5818],[51.4063,41.3693],[51.28019999999999,42.0059],[51.031,42.159],[50.6053,42.3105],[49.9095,42.5082],[49.1858,42.5151],[48.47339999999999,42.6069],[47.7791,42.88],[47.7377,42.9117],[47.1087,43.4669],[46.87339999999999,43.7298],[46.4289,44.0983],[46.1919,44.5691],[45.7577,45.05439999999999],[45.0248,45.3872],[44.9597,45.4236],[44.9597,45.4236],[44.2792,45.6371],[43.5236,45.7846]
            ]],
            "type": "Polygon"
          }
        }] } // Вставить полигоны
  },
  {
    name: 'Turksat 6A Asia', position: 42.0,
    beams: {
      'Asia Beam': { frequency: '11747', symbolRate: '27500', polarization: 'V', fec: '3/4', modulation: 'DVB-S2 8PSK', pilot: 'On' },
      'Central Asia Beam': { frequency: '11747', symbolRate: '27500', polarization: 'V', fec: '3/4', modulation: 'DVB-S2 8PSK', pilot: 'On' }
    },
    geoJson: { "type": "FeatureCollection", "features": [{
          // ПОЛИГОН 1 - Уровень сигнала 46 дБ
          "type": "Feature",
          "properties": { "signal_level": 46 },
          "geometry": {
            "coordinates": [[
              [78.0107,38.4692],[77.0365,38.3496],[76.0235,38.1359],[75.4807,37.9378],[74.9241,37.735],[73.8183,37.2623],[73.4578,37.0759],[72.6834,36.6654],[71.9579,36.2661],[71.5772,36.0439],[70.805,35.4915],[70.3962,35.167],[69.8116,34.7389],[69.2583,34.267],[68.9861,34.0068],[68.3499,33.295],[67.9309,32.72],[67.8426,32.5984],[67.4159,31.9144],[67.046,31.2405],[66.7211,30.5762],[66.4255,29.9205],[66.147,29.2716],[66.0322,29.0051],[65.8688,28.6297],[65.6007,27.994],[65.3343,27.3641],[65.0713,26.7398],[64.8195,26.1217],[64.5729,25.5088],[64.34,24.9249],[64.3304,24.9007],[64.1077,24.2981],[63.9283,23.7014],[63.769,23.1096],[63.6706,22.5237],[63.6307,21.9432],[63.6594,21.5728],[63.6761,21.3684],[63.83090000000001,20.8001],[64.0504,20.3398],[64.1012,20.2377],[64.4546,19.6804],[64.5304,19.586],[64.9733,19.13],[65.0511,19.0576],[65.5379,18.5832],[65.5766,18.5459],[66.1137,18.0896],[66.1737,18.0402],[66.6512,17.6209],[66.7951,17.4992],[67.182,17.1],[67.2994,16.9568],[67.6461,16.4127],[67.677,16.3493],[67.8833,15.8676],[68.0746,15.3233],[68.1123,15.2002],[68.2361,14.7804],[68.4122,14.2394],[68.5407,13.9314],[68.637,13.7011],[68.939,13.166],[69.0344,13.0361],[69.3273,12.6339],[69.5691,12.3828],[69.8258,12.1051],[70.1204,11.8156],[70.3163,11.577],[70.668,11.1732],[70.7558,11.0489],[71.1182,10.52],[71.2043,10.391],[71.4062,9.9908],[71.6427,9.46143],[71.7132,9.29125],[71.8582,8.93255],[72.0531,8.40426],[72.2142,7.95699],[72.2459,7.876569999999999],[72.4568,7.34978],[72.6899,6.82384],[72.7442,6.709],[72.9746,6.29882],[73.3212,5.81517],[73.3518,5.77513],[73.8053,5.25213],[73.926,5.13627],[74.5615,4.76962],[74.6356,4.73231],[75.2085,4.45923],[75.8704,4.26056],[76.035,4.21612],[76.5414,4.07545],[77.2276,3.99969],[77.9246,3.94955],[78.6366,3.99444],[79.3606,4.05789],[80.0994,4.17424],[80.7159,4.25588],[80.849,4.27458],[81.6205,4.48908],[82.4157,4.80629],[82.4172,4.80692],[83.2465,5.30538],[83.3211,5.35352],[83.9724,5.899810000000001],[84.132,6.07853],[84.4804,6.44641],[84.8384,6.9927],[85.0531,7.53833],[85.2361,8.08482],[85.2534,8.15937],[85.3779,8.63198],[85.519,9.18055],[85.6864,9.73119],[85.9393,10.2855],[86.3135,10.8446],[86.773,11.3488],[86.8466,11.4103],[87.2792,11.6988],[87.72,11.9884],[87.852,12.0653],[88.8666,12.4015],[89.7505,12.6046],[89.8846,12.6365],[90.9112,12.7946],[91.5248,12.6582],[91.8339,12.5528],[92.16040000000001,12.1153],[92.4219,11.5617],[92.4745,11.3745],[92.51539999999999,11.0045],[92.4913,10.4454],[92.485,9.88816],[92.4213,9.33079],[92.318,8.77389],[92.2171,8.2184],[92.154,7.664879999999999],[92.0755,7.1122],[92.0521,6.561489999999999],[92.02339999999998,6.01153],[92.0152,5.46265],[92.04939999999999,4.91494],[92.0505,4.89924],[92.1043,4.36794],[92.18329999999999,3.821549999999999],[92.2897,3.27561],[92.45359999999998,2.7302],[92.69480000000001,2.18508],[92.7947,2.02008],[93.09309999999999,1.6402],[93.6298,1.09481],[93.79559999999998,0.932879],[94.1286,0.548052],[94.7227,0],[94.8672,-0.11915],[95.3272,-0.549675],[95.8919,-1.10103],[96.01910000000001,-1.22065],[96.5254,-1.65434],[97.25499999999998,-2.2102],[97.2558,-2.21079],[97.81319999999998,-2.49051],[98.38650000000001,-2.77121],[98.5529,-2.84345],[99.2247,-3.07402],[99.91880000000002,-3.30562],[100.075,-3.34069],[100.708,-3.4913],[101.362,-3.64262],[102.219,-3.92033],[102.942,-4.11368],[103.732,-4.0816],[104.557,-4.04977],[105.03,-3.94955],[105.641,-3.83543],[106.275,-3.72119],[107.024,-3.40253],[107.563,-3.20652],[108.125,-3.01018],[108.508,-2.84612],[109.16,-2.56576],[109.85,-2.28474],[110.248,-2.1157],[110.793,-1.91822],[111.367,-1.72032],[112.094,-1.45103],[112.88,-1.18092],[112.96,-1.15172],[113.672,-0.8654109999999999],[114.452,-0.578138],[115.056,-0.289533],[115.721,0],[116.16,0.249472],[116.639,0.499591],[116.804,0.581813],[117.338,1.16541],[117.485,1.74902],[117.025,2.30656],[117.008,2.32928],[116.59,2.61771],[116.208,2.90585],[115.878,3.19387],[115.572,3.48172],[115.227,3.76879],[114.907,4.0557],[114.471,4.63094],[114.405,5.21053],[114.647,5.79531],[114.925,6.38221],[114.976,6.46995],[115.284,6.972110000000001],[115.713,7.565459999999999],[116.033,8.15859],[116.274,8.75185],[116.075,9.33577],[115.808,9.91835],[115.317,10.495],[115.175,10.6109],[114.658,11.0663],[114.242,11.6445],[113.894,12.225],[113.796,12.4496],[113.658,12.8098],[113.542,13.3996],[113.595,13.9972],[113.825,14.6034],[114.262,15.2206],[114.269,15.2282],[114.898,15.8495],[115.322,16.17],[115.788,16.4936],[116.332,16.8219],[116.948,17.1549],[117.667,17.4942],[118.538,17.8425],[119.347,18.1898],[119.852,18.369],[120.481,18.5549],[121.141,18.764],[121.618,18.8761],[122.718,19.0197],[122.783,19.0497],[122.774,19.2731],[122.75,19.4958],[122.739,19.7191],[122.728,19.9424],[122.712,20.1655],[122.702,20.3888],[122.644,20.4071],[122.644,20.4071],[121.392,20.4797],[120.435,20.5456],[119.778,20.6275],[118.789,20.8082],[118.241,20.9374],[117.437,21.0499],[116.743,21.1682],[115.564,21.4156],[115.523,21.4232],[114.705,21.497],[113.966,21.575],[112.654,21.7398],[112.187,21.8489],[111.376,22.0181],[110.622,22.1904],[110.124,22.3536],[109.003,22.7238],[108.786,22.8996],[108.429,23.1912],[108.085,23.4841],[107.994,23.5594],[107.779,24.0947],[107.588,24.7155],[107.583,24.7359],[107.467,25.344],[107.373,25.978],[107.371,25.9878],[107.289,26.6164],[107.214,27.2192],[107.209,27.2589],[107.042,27.8997],[106.887,28.3017],[106.723,28.5331],[106.185,29.1224],[106.165,29.1529],[105.691,29.7822],[105.538,29.9445],[105.068,30.4042],[104.764,30.6591],[104.296,31.0181],[103.899,31.2868],[103.318,31.6191],[102.939,31.8229],[102.042,32.1997],[101.884,32.2623],[100.667,32.5525],[99.6893,32.6969],[99.3763,32.743],[98.0216,32.8333],[96.7255,32.9186],[95.5169,33.0327],[95.4426,33.0461],[94.4576,33.2441],[93.4801,33.5028],[93.33210000000001,33.5695],[92.69830000000002,33.9286],[92.3953,34.1899],[92.1059,34.5266],[92.0016,34.8595],[91.85719999999999,35.4482],[91.80379999999998,35.5515],[91.40560000000002,36.1615],[91.3559,36.2309],[90.873,36.7877],[90.6799,36.8987],[90.1152,37.1884],[89.2277,37.4486],[88.9311,37.4842],[88.2211,37.5699],[87.248,37.7025],[86.246,37.7813],[85.2982,37.8976],[85.1155,37.9104],[84.3338,37.9733],[83.411,38.0771],[82.4811,38.1522],[81.6024,38.2733],[80.8553,38.3208],[80.6915,38.334],[79.8304,38.4435],[78.9153,38.4597],[78.0107,38.4692]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 2 - Уровень сигнала 48 дБ
          "type": "Feature",
          "properties": { "signal_level": 48 },
          "geometry": {
            "coordinates": [[
              [77.3893,37.521],[76.4284,37.3817],[75.6587,37.2179],[75.4457,37.1723],[74.3644,36.746],[73.5136,36.3599],[73.277,36.2455],[72.7147,35.9322],[72.1642,35.6219],[72.0649,35.5636],[71.5511,35.2318],[71.0479,34.9029],[70.9153,34.7991],[70.0692,34.0632],[69.8179,33.8074],[69.3488,33.3449],[68.7429,32.642],[68.5053,32.3169],[68.2602,31.9536],[67.8613,31.2773],[67.5194,30.6113],[67.2055,29.9535],[66.9022,29.3029],[66.6195,28.6595],[66.5849,28.5798],[66.3475,28.0227],[66.0902,27.3923],[65.8298,26.7674],[65.5773,26.1484],[65.3209,25.5341],[65.0661,24.9249],[64.8691,24.4419],[64.8201,24.32090000000001],[64.6037,23.7226],[64.4479,23.1301],[64.3401,22.5432],[64.3071,21.9624],[64.3215,21.8106],[64.3726,21.3878],[64.5567,20.82],[64.6999,20.5349],[64.8593,20.2581],[65.1903,19.8419],[65.3006,19.7028],[65.7039,19.2664],[65.8311,19.1525],[66.2401,18.8035],[66.4784,18.6077],[66.7812,18.3582],[67.1709,18.0664],[67.3288,17.934],[67.7204,17.5231],[67.8524,17.3625],[68.1332,16.9781],[68.3463,16.6042],[68.443,16.4326],[68.6917,15.8872],[68.8022,15.5925],[68.9035,15.343],[69.1223,14.8008],[69.2537,14.5013],[69.3648,14.2607],[69.6378,13.7228],[69.7383,13.5595],[69.9733,13.1877],[70.2614,12.8232],[70.3848,12.6556],[70.7922,12.1243],[70.7956,12.1201],[71.1607,11.5933],[71.3286,11.3545],[71.4842,11.0624],[71.7448,10.5312],[71.8376,10.3367],[71.9858,10.0007],[72.1974,9.47045],[72.3356,9.11107],[72.4039,8.94109],[72.6112,8.41245],[72.8142,7.88445],[72.8451,7.813020000000001],[73.0675,7.35767],[73.3551,6.831879999999999],[73.3976,6.76196],[73.6974,6.30705],[73.9853,5.94618],[74.1845,5.783810000000001],[74.6111,5.48558],[74.9882,5.26356],[75.253,5.12382],[75.9122,4.89953],[76.4451,4.74851],[76.5824,4.70957],[77.2685,4.62862],[77.9662,4.58218],[78.6823,4.6552],[79.4107,4.75274],[79.5195,4.77766],[80.1578,4.93464],[80.9174,5.11495],[81.4923,5.33244],[81.7039,5.42735],[82.4202,5.87987],[82.5321,5.971],[83.0254,6.425830000000001],[83.4405,6.95695],[83.4515,6.97132],[83.7775,7.51697],[84.007,8.06271],[84.1901,8.60919],[84.3214,9.15607],[84.475,9.70485],[84.6568,10.2559],[84.8759,10.8096],[84.9804,11.0124],[85.1816,11.3674],[85.5715,11.9298],[86.0643,12.4976],[86.2506,12.6844],[86.8441,13.0767],[87.3324,13.3765],[87.8622,13.6675],[88.4309,13.9707],[89.3114,14.2774],[89.4967,14.3369],[90.0408,14.511],[90.59580000000001,14.6861],[91.4317,14.9179],[91.72280000000002,14.9941],[92.28989999999999,15.1155],[92.8689,15.2379],[93.9385,15.2089],[94.8621,15.0432],[94.9696,15.0112],[95.4556,14.4915],[95.64530000000002,13.9665],[95.6674,13.9269],[95.76709999999999,13.3597],[95.7486,12.7901],[95.72029999999998,12.2221],[95.664,11.6547],[95.5895,11.0884],[95.5426,10.7648],[95.528,10.5242],[95.55589999999998,9.96357],[95.6339,9.40526],[95.7158,8.84803],[95.8003,8.29168],[95.8731,8.01827],[95.942,7.73723],[96.0061,7.18187],[96.0751,6.627280000000001],[96.261,6.07515],[96.33029999999998,5.52154],[96.406,5.03435],[96.41900000000001,4.96868],[96.51220000000002,4.41614],[96.6811,3.86463],[96.85280000000002,3.31317],[97.01999999999998,2.76157],[97.2568,2.22998],[97.26810000000002,2.21027],[97.6676,1.65915],[98.1866,1.10747],[98.4217,0.906379],[98.8782,0.554694],[99.28829999999999,0.303178],[99.7082,0.05115],[99.8886,0],[100.48,-0.145272],[101.089,-0.290998],[101.711,-0.558801],[102.582,-0.9343189999999999],[103.366,-1.01791],[104.184,-1.10194],[105.029,-0.996243],[105.918,-0.890183],[106.702,-0.566197],[107.26,-0.319903],[107.844,-0.0728937],[107.942,0],[108.476,0.568923],[108.619,1.13835],[108.603,1.70758],[108.426,2.27602],[108.085,2.79449],[108.014,2.84236],[107.595,3.12338],[107.192,3.40401],[106.55,3.96559],[106.398,4.27104],[106.213,4.52929],[106.066,5.09515],[106.029,5.662720000000001],[106.236,6.23499],[106.422,6.80818],[106.562,7.381880000000001],[106.64,7.9555],[106.601,8.52762],[106.545,9.10023],[106.53,9.54452],[106.523,9.67467],[106.462,10.2491],[106.458,10.8262],[106.432,11.4041],[106.555,11.9878],[106.739,12.5754],[106.81,13.0137],[106.844,13.1625],[107.083,13.7563],[107.231,14.3491],[107.442,14.9467],[107.62,15.5455],[107.894,16.1509],[108.224,16.7618],[108.306,16.9575],[108.215,17.3602],[108.036,17.9529],[107.795,18.4426],[107.763,18.5429],[107.255,19.1225],[106.877,19.4579],[106.582,19.695],[106.198,19.979],[105.828,20.2639],[105.824,20.2654],[105.557,20.8595],[105.224,21.4045],[105.212,21.4532],[104.991,22.0562],[104.856,22.6666],[104.854,22.6777],[104.736,23.2809],[104.647,23.9002],[104.623,23.9992],[104.535,24.5212],[104.473,25.149],[104.454,25.3054],[104.419,25.7811],[104.329,26.4146],[104.297,26.5627],[104.097,27.0423],[103.815,27.5315],[103.766,27.6668],[103.411,28.2932],[103.31,28.449],[102.994,28.9189],[102.703,29.2613],[102.435,29.5378],[101.979,29.9607],[101.744,30.1504],[101.165,30.5662],[100.846,30.751],[100.251,31.0677],[99.3953,31.3121],[99.1415,31.3847],[98.0068,31.6422],[96.7577,31.7594],[96.63549999999998,31.775],[95.585,31.8995],[94.4554,32.0394],[93.5107,32.2139],[93.4159,32.2326],[92.4307,32.4506],[91.6402,32.7524],[91.5765,32.7811],[90.8384,33.2187],[90.72680000000001,33.3678],[90.4341,34.0039],[90.4148,34.035],[90.0547,34.7051],[90.0213,34.7674],[89.6666,35.3799],[89.5824,35.4931],[88.9253,35.9795],[88.8374,36.0265],[88.1555,36.3352],[87.2443,36.5222],[86.9281,36.5937],[86.3502,36.7101],[85.4187,36.8351],[84.5301,36.992],[83.6637,37.0642],[83.5931,37.07],[82.6743,37.1495],[81.7507,37.2018],[80.8851,37.3116],[79.9933,37.3674],[79.2115,37.4632],[79.2115,37.4632],[79.1481,37.471],[78.2602,37.4932],[77.3893,37.521]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 3 - Уровень сигнала 50 дБ
          "type": "Feature",
          "properties": { "signal_level": 50 },
          "geometry": {
            "coordinates": [[
              [76.6881,36.3831],[75.75,36.2332],[74.7789,35.9899],[74.0788,35.6843],[73.7038,35.5029],[73.1503,35.2021],[72.6081,34.9041],[72.5917,34.8941],[72.0301,34.515],[71.4817,34.1398],[71.4731,34.1333],[71.0329,33.7701],[70.6021,33.4101],[70.2662,33.077],[69.9319,32.7011],[69.3945,32.0084],[68.9303,31.3272],[68.7659,31.0465],[68.5447,30.6576],[68.1966,29.9971],[67.8833,29.3447],[67.5866,28.6994],[67.324,28.0619],[67.0557,27.43],[66.7822,26.8035],[66.7148,26.6495],[66.5172,26.1827],[66.2274,25.5662],[65.9695,24.9558],[65.7189,24.3508],[65.5047,23.7515],[65.323,23.1573],[65.224,22.57],[65.1975,21.9887],[65.2768,21.4138],[65.4148,21.0322],[65.4981,20.8465],[65.8678,20.2863],[65.889,20.2591],[66.3776,19.7327],[66.4079,19.7056],[66.9455,19.2411],[67.0289,19.1855],[67.5042,18.8725],[67.7879,18.6438],[68.0482,18.4157],[68.3766,18.0991],[68.5764,17.8618],[68.8374,17.553],[69.0819,17.1708],[69.1809,17.0058],[69.4783,16.4592],[69.5568,16.2861],[69.7222,15.9132],[69.9724,15.3691],[70.0158,15.2732],[70.2442,14.8275],[70.4976,14.341],[70.5265,14.2875],[70.8307,13.7497],[71,13.483],[71.1592,13.2136],[71.4896,12.6789],[71.5134,12.6414],[71.7822,12.1446],[72.0194,11.6903],[72.058,11.6111],[72.2969,11.0778],[72.5126,10.5577],[72.5178,10.5454],[72.7404,10.0139],[72.9344,9.48277],[73.0055,9.29344],[73.1425,8.95273],[73.3687,8.42374],[73.5241,8.0765],[73.6008,7.895470000000001],[73.8563,7.36817],[74.0751,6.9945],[74.2092,6.84247],[74.686,6.410640000000001],[74.8001,6.31979],[75.3171,5.95703],[75.6681,5.799820000000001],[75.9713,5.67875],[76.6398,5.47884],[77.3255,5.3808],[78.0266,5.36566],[78.7472,5.4588],[79.4868,5.64183],[80.0944,5.85104],[80.2476,5.91435],[81.0285,6.23355],[81.2962,6.40201],[81.8641,6.874520000000001],[81.9416,6.948530000000001],[82.3652,7.493989999999999],[82.6672,8.0392],[82.8854,8.58462],[82.8901,8.59979],[83.0564,9.13065],[83.1994,9.67773],[83.3533,10.2266],[83.527,10.7774],[83.7594,11.3317],[84.0372,11.8891],[84.4297,12.4519],[84.5214,12.5714],[84.8674,13.0187],[85.3787,13.5905],[85.7445,13.944],[86.0004,14.169],[86.6876,14.7532],[86.937,14.9456],[87.6954,15.3527],[88.045,15.5235],[88.5867,15.7479],[89.1396,15.9737],[89.1535,15.9791],[89.6991,16.1437],[90.2555,16.3093],[90.7864,16.4696],[91.32780000000001,16.631],[91.4073,16.6544],[92.0062,16.8364],[92.6192,17.0198],[93.43570000000001,17.2953],[93.9357,17.4776],[94.58200000000001,17.6346],[95.2457,17.7931],[96.0086,17.9909],[96.67900000000002,18.1933],[97.4431,18.4147],[98.23559999999999,18.6386],[98.3445,18.6877],[98.8729,19.0097],[99.4204,19.3341],[100.097,19.9665],[100.55,20.5921],[100.835,21.2129],[101.024,21.8323],[101.095,22.2307],[101.149,22.4518],[101.281,23.0755],[101.317,23.6972],[101.334,24.0289],[101.341,24.322],[101.278,24.9449],[101.174,25.3394],[101.169,25.5687],[101.08,26.1975],[100.979,26.5625],[100.916,26.8252],[100.656,27.4504],[100.587,27.5656],[100.194,28.065],[99.9643,28.337],[99.6211,28.6754],[99.2561,29.0066],[98.89439999999999,29.27819999999999],[98.46,29.5742],[97.74720000000002,29.8534],[97.4849,29.9524],[96.4681,30.2596],[95.7987,30.3727],[95.35540000000002,30.4391],[94.3004,30.6391],[93.2805,30.8406],[93.2349,30.8499],[92.28400000000002,31.0359],[91.3117,31.2285],[90.8616,31.345],[90.4088,31.4736],[89.5584,31.7588],[89.3574,31.9066],[88.9366,32.3015],[88.6339,32.5293],[88.3337,32.8558],[88.1486,33.1748],[87.9272,33.6363],[87.7847,33.8352],[87.4213,34.2869],[87.2323,34.4881],[86.815,34.8094],[86.1741,35.1092],[86.0643,35.1482],[85.301,35.4593],[84.4412,35.6357],[84.2954,35.6752],[83.6135,35.8366],[82.7097,35.92],[81.8107,35.9881],[80.9175,36.0438],[80.3899,36.1026],[80.3899,36.1026],[80.0636,36.1357],[79.2021,36.1984],[78.3839,36.3089],[77.528,36.3429],[76.6881,36.3831]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 4 - Уровень сигнала 51 дБ
          "type": "Feature",
          "properties": { "signal_level": 51 },
          "geometry": {
            "coordinates": [[
              [76.2854,35.6942],[75.3466,35.5129],[74.3811,35.2443],[73.8115,34.9661],[73.2902,34.6781],[72.5071,34.1974],[72.167,33.9609],[71.5016,33.4583],[70.9746,32.9788],[70.7352,32.7425],[70.1228,32.0444],[69.6034,31.3597],[69.5921,31.3426],[69.1978,30.6879],[68.827,30.0253],[68.5068,29.3717],[68.191,28.7252],[67.9374,28.0871],[67.6684,27.4543],[67.5166,27.1251],[67.3839,26.8267],[67.1228,26.2054],[66.8252,25.588],[66.5464,24.9763],[66.2804,24.3699],[66.0292,23.7686],[65.9211,23.4384],[65.84,23.1738],[65.7576,22.6976],[65.7395,22.5859],[65.7412,22.0051],[65.85,21.4309],[66.0374,21.0124],[66.1122,20.8643],[66.517,20.3051],[66.5233,20.2978],[67.0556,19.8042],[67.1292,19.7541],[67.6152,19.4387],[67.9223,19.211],[68.1668,19.0198],[68.5933,18.6666],[68.7115,18.5538],[69.1438,18.1207],[69.2422,18.0018],[69.563,17.5732],[69.7393,17.2596],[69.8801,17.0247],[70.1467,16.4769],[70.2063,16.3322],[70.4024,15.9308],[70.6661,15.3867],[70.6747,15.3692],[70.9577,14.8449],[71.1614,14.4603],[71.2389,14.3045],[71.5177,13.7655],[71.6532,13.5286],[71.8126,13.2282],[72.0793,12.6917],[72.1485,12.5567],[72.3463,12.1564],[72.5873,11.6217],[72.6414,11.492],[72.8164,11.0879],[73.0295,10.5549],[73.1295,10.2858],[73.2324,10.0225],[73.4201,9.49095],[73.6096,8.96018],[73.6193,8.93723],[73.8241,8.43068],[74.0442,7.901810000000001],[74.1445,7.70506],[74.4029,7.37553],[74.7396,6.99944],[74.9018,6.85119],[75.363,6.48546],[75.6409,6.32974],[76.012,6.15823],[76.679,5.94185],[77.3643,5.83996],[77.8994,5.825009999999999],[78.0663,5.82068],[78.108,5.82744],[78.7924,5.953470000000001],[79.5402,6.19057],[79.9735,6.38431],[80.3184,6.580789999999999],[80.9378,6.93378],[81.1268,7.07468],[81.5223,7.48046],[81.9039,8.02605],[82.0694,8.35611],[82.1678,8.57137],[82.3632,9.11699],[82.5096,9.66324],[82.633,10.2106],[82.7859,10.7601],[82.9756,11.3124],[83.1872,11.867],[83.4758,12.4258],[83.7799,12.901],[83.8427,12.9892],[84.3002,13.5579],[84.8422,14.1323],[84.992,14.2865],[85.4099,14.7108],[86.0845,15.2966],[86.2001,15.3896],[86.882,15.8907],[87.3789,16.2049],[88.0172,16.5022],[88.4941,16.7055],[89.0406,16.8866],[89.598,17.0688],[89.8943,17.1492],[90.71430000000001,17.3641],[91.3043,17.5453],[91.90789999999998,17.7278],[92.2148,17.8244],[93.184,18.1442],[94.0086,18.4875],[94.66019999999999,18.7932],[95.6021,19.1499],[96.27260000000001,19.4928],[96.8111,19.8018],[97.2518,20.1221],[97.70669999999998,20.4446],[98.34660000000001,21.0798],[98.8093,21.7103],[99.1584,22.339],[99.3404,22.9626],[99.45209999999999,23.5858],[99.4527,23.6079],[99.5658,24.2131],[99.6341,24.8417],[99.6326,25.2875],[99.63229999999999,25.47],[99.5201,26.095],[99.40979999999999,26.4847],[99.2985,26.7168],[98.91329999999999,27.3312],[98.892,27.3574],[98.3768,27.9387],[98.24010000000001,28.0744],[97.6351,28.5351],[97.4763,28.6583],[96.5297,29.0371],[96.3718,29.0976],[95.5921,29.3948],[94.5395,29.6013],[94.48239999999998,29.6185],[93.5638,29.8556],[92.59409999999998,30.0858],[92.41379999999998,30.1294],[91.6359,30.3],[90.6928,30.5033],[90.1742,30.6316],[89.7863,30.7241],[88.8974,30.9422],[88.4641,31.1747],[88.1866,31.367],[87.4632,31.7619],[87.453,31.7711],[86.9424,32.4076],[86.9422,32.4079],[86.5048,33.0552],[86.4687,33.1048],[86.0056,33.7043],[85.9619,33.7499],[85.3342,34.2298],[85.1948,34.3368],[84.6512,34.6292],[83.8604,34.876],[83.7171,34.9271],[83.068,35.1058],[82.1873,35.1982],[81.3006,35.2606],[80.41,35.2962],[79.8642,35.357],[79.8642,35.357],[79.5698,35.3865],[78.733,35.4645],[77.9413,35.5981],[77.1065,35.6437],[76.2854,35.6942]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 5 - Уровень сигнала 52 дБ
          "type": "Feature",
          "properties": { "signal_level": 52 },
          "geometry": {
            "coordinates": [[
              [75.8119,34.8473],[74.8655,34.6134],[73.8936,34.2864],[73.876,34.2767],[73.3096,33.9134],[72.7562,33.5536],[72.7153,33.5252],[72.2733,33.1616],[71.8409,32.8012],[71.5248,32.4955],[71.1382,32.0961],[70.5581,31.4067],[70.126,30.8297],[70.0581,30.7289],[69.6757,30.0646],[69.3272,29.4086],[69.0066,28.7603],[68.7129,28.1197],[68.4497,27.4862],[68.1284,26.8562],[68.1001,26.8048],[67.8415,26.2331],[67.5482,25.6147],[67.2451,25.0014],[66.9789,24.3942],[66.7358,23.7926],[66.5346,23.1966],[66.4349,22.6081],[66.4297,22.0264],[66.5554,21.4523],[66.7006,21.1658],[66.8826,20.8875],[67.2006,20.5194],[67.4517,20.3328],[67.7575,20.1351],[68.2296,19.7867],[68.3117,19.7278],[68.8748,19.349],[69.0405,19.2441],[69.4408,18.9711],[69.7162,18.6995],[69.9656,18.3824],[70.1695,18.1504],[70.4645,17.6499],[70.4924,17.5997],[70.7889,17.0501],[70.9316,16.7318],[71.0365,16.5011],[71.2844,15.9542],[71.3904,15.7281],[71.5361,15.409],[71.7721,14.8652],[71.8536,14.693],[72.0311,14.3238],[72.2959,13.7839],[72.3353,13.7031],[72.5717,13.2456],[72.8083,12.7079],[72.8219,12.6737],[73.0469,12.1715],[73.2547,11.6355],[73.301,11.5066],[73.4728,11.1009],[73.6703,10.5669],[73.7798,10.2145],[73.828,10.0333],[73.9841,9.50062],[74.1434,8.96891],[74.2507,8.67428],[74.3748,8.43911],[74.7147,7.91156],[74.8186,7.77911],[75.1661,7.385930000000001],[75.4263,7.15025],[75.8545,6.863460000000001],[76.066,6.741439999999999],[76.7311,6.51279],[77.4141,6.37771],[78.1214,6.40175],[78.8533,6.56267],[79.6161,6.893390000000001],[79.6533,6.91527],[80.3893,7.46269],[80.4296,7.50527],[80.926,8.00945],[81.2869,8.55529],[81.3529,8.70046],[81.52,9.10062],[81.6525,9.64556],[81.7954,10.1923],[81.8937,10.7396],[82.0275,11.2893],[82.1982,11.8418],[82.3775,12.3965],[82.6571,12.9559],[83.0282,13.5203],[83.1873,13.7529],[83.3959,14.0875],[83.882,14.6612],[84.4311,15.2232],[84.4489,15.2409],[85.1499,15.8289],[85.6092,16.2197],[85.858,16.4212],[86.2766,16.7215],[86.7035,17.0233],[86.8078,17.0905],[87.3603,17.3468],[87.9247,17.6046],[88.0487,17.6504],[89.0388,18.0062],[90.11119999999998,18.2226],[90.5648,18.3348],[91.256,18.5082],[91.8877,18.7327],[92.5361,18.959],[92.68930000000002,19.014],[93.3203,19.2846],[93.9699,19.5575],[94.17370000000001,19.6734],[94.6629,19.9936],[95.1668,20.3161],[95.5803,20.6356],[96.0061,20.9571],[96.1104,21.0696],[96.60969999999999,21.5913],[97.1136,22.225],[97.474,22.8554],[97.4922,22.9069],[97.738,23.4848],[97.91440000000001,24.1133],[97.9956,24.7403],[97.9815,25.0139],[97.9266,25.3619],[97.7234,25.9788],[97.6592,26.1147],[97.41389999999998,26.5923],[97.1324,26.9625],[96.859,27.193],[96.4083,27.5759],[96.0035,27.7765],[95.5268,27.9956],[94.6829,28.3312],[94.6176,28.3557],[93.6031,28.5662],[92.8787,28.8551],[92.72620000000002,28.9041],[91.7945,29.15],[91.0521,29.3802],[90.9029,29.4176],[89.9824,29.6222],[89.0664,29.8053],[88.7283,29.875],[88.1681,29.9851],[87.4085,30.3313],[87.1093,30.421],[86.5993,30.5912],[85.9919,31.0052],[85.9408,31.0477],[85.3525,31.5918],[85.3229,31.6239],[84.927,32.2668],[84.8968,32.3149],[84.4273,32.9082],[84.3855,32.9496],[83.8452,33.5353],[83.8261,33.5486],[83.1256,33.8593],[82.5099,34.1448],[82.4123,34.1812],[81.555,34.2796],[80.6808,34.3308],[79.8113,34.3683],[79.0032,34.4833],[78.4545,34.5626],[78.4545,34.5626],[78.1992,34.5891],[77.4266,34.7317],[76.612,34.7858],[75.8119,34.8473]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 6 - Уровень сигнала 53 дБ
          "type": "Feature",
          "properties": { "signal_level": 53 },
          "geometry": {
            "coordinates": [[
              [75.1988,33.6867],[75.1302,33.6653],[74.2208,33.331],[73.3251,32.8828],[73.1824,32.79],[72.5175,32.1692],[71.8746,31.4737],[71.8178,31.3929],[71.4161,30.7959],[71.036,30.1294],[70.6785,29.4711],[70.3884,28.8227],[70.168,28.1832],[69.8691,27.5465],[69.5143,26.9588],[69.4924,26.9123],[69.1845,26.2865],[68.8006,25.6629],[68.335,25.04189999999999],[68.2442,24.9148],[67.9417,24.4286],[67.604,23.8225],[67.3798,23.2249],[67.2936,22.6362],[67.3494,22.0558],[67.4677,21.7572],[67.6291,21.486],[67.9748,21.1433],[68.2012,20.9284],[68.5172,20.6789],[69.0583,20.3824],[69.0955,20.3634],[69.7028,20.1617],[70.1445,19.8464],[70.2666,19.7549],[70.8687,19.5007],[71.0583,19.3068],[71.3734,18.808],[71.3987,18.7513],[71.6659,18.1955],[71.8037,17.7566],[71.8403,17.6391],[72.0531,17.0864],[72.198,16.5335],[72.2046,16.5132],[72.4284,15.9853],[72.6422,15.4384],[72.6498,15.4196],[72.9365,14.8954],[73.1249,14.4199],[73.1667,14.3522],[73.4468,13.8117],[73.6155,13.4401],[73.7005,13.2721],[73.9014,12.7326],[74.0694,12.1938],[74.0722,12.1842],[74.2084,11.6555],[74.3149,11.1178],[74.4032,10.5811],[74.4573,10.2925],[74.531,10.0462],[74.7177,9.51337],[74.9204,8.98167],[74.9498,8.92405],[75.2094,8.4522],[75.5191,8.02013],[75.6186,7.92501],[76.1449,7.50913],[76.3534,7.40259],[76.8028,7.21698],[77.4867,7.08786],[78.2002,7.14478],[78.9449,7.37626],[79.0625,7.44236],[79.7307,7.98952],[79.7556,8.01821],[80.1617,8.53516],[80.411,9.07944],[80.5706,9.62369],[80.6874,10.1685],[80.7806,10.7144],[80.8116,11.2604],[80.8026,11.807],[80.8362,12.3561],[80.846,12.9063],[80.9248,13.4601],[80.9193,14.0135],[80.9504,14.2698],[80.9754,14.5705],[80.8783,15.1248],[80.9252,15.6856],[81.2591,16.2583],[81.5433,16.4283],[82.0399,16.85],[82.5483,17.0888],[83.3888,17.1576],[84.3098,17.5028],[84.3492,17.5161],[84.7604,17.8122],[85.1794,18.1099],[85.4806,18.2473],[86.0138,18.4832],[86.5575,18.7206],[86.6075,18.7457],[87.1337,18.9623],[87.6703,19.1803],[88.6804,19.3283],[89.2465,19.4435],[89.7569,19.5475],[90.8631,19.7484],[91.4595,19.9017],[92.0695,20.0564],[92.33820000000001,20.1769],[92.96659999999999,20.5044],[93.6151,20.8348],[93.6179,20.8367],[94.05220000000001,21.157],[94.4991,21.4794],[95.1252,22.1163],[95.53520000000002,22.74620000000001],[95.87980000000002,23.3771],[96.0222,24.0008],[96.0274,24.2414],[96.0038,24.6189],[95.8475,25.2322],[95.7703,25.4385],[95.4491,25.8341],[95.13,26.1413],[94.5602,26.4078],[94.2625,26.5463],[93.4231,26.9563],[93.3751,26.9648],[92.4125,27.1218],[91.74910000000001,27.4954],[91.632,27.5518],[90.7418,27.813],[90.11730000000001,28.0282],[89.8924,28.1025],[89.025,28.342],[88.1265,28.5117],[88.0268,28.5341],[87.2403,28.671],[86.4507,28.9508],[85.7575,29.0323],[85.5598,29.0535],[84.8152,29.3611],[84.3668,29.5902],[84.1187,29.7299],[83.5264,30.1869],[83.5006,30.2113],[82.9936,30.8078],[82.9784,30.8367],[82.7081,31.4501],[82.5891,31.664],[82.3016,32.0898],[82.0849,32.2995],[81.5575,32.7133],[81.4756,32.7621],[80.6333,32.8403],[79.793,32.9016],[78.9544,32.9445],[78.1975,33.1103],[78.0347,33.1631],[77.4538,33.2862],[76.7581,33.5375],[75.9673,33.5996],[75.3191,33.6768],[75.3191,33.6768],[75.1988,33.6867]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 7 - Уровень сигнала 54 дБ
          "type": "Feature",
          "properties": { "signal_level": 54 },
          "geometry": {
            "coordinates": [[
              [77.665,12.8824],[77.2215,12.8123],[76.9292,12.7628],[76.1584,12.3924],[76.0425,12.2384],[75.8202,11.6904],[75.7472,11.1474],[75.713,10.6068],[75.7509,10.069],[75.7653,9.95142],[75.8527,9.5336],[76.16,9.0027],[76.2991,8.81347],[76.7461,8.47696],[76.9366,8.37141],[77.6124,8.16667],[78.3524,8.3889],[78.5436,8.50708],[79.1384,9.05571],[79.1813,9.13986],[79.3338,9.5992],[79.4466,10.1425],[79.4263,10.6483],[79.4191,10.6844],[79.2636,11.2246],[79.0788,11.7652],[78.9497,12.0403],[78.767,12.3038],[78.3546,12.7195],[77.8732,12.8286],[77.8732,12.8286],[77.665,12.8824]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 8 - Уровень сигнала 54 дБ (второй полигон с тем же уровнем)
          "type": "Feature",
          "properties": { "signal_level": 54 },
          "geometry": {
            "coordinates": [[
              [91.41039999999998,24.2102],[90.7923,24.0729],[90.18789999999998,23.9371],[89.2208,24.0135],[88.8765,23.5959],[88.6887,23.1003],[88.8306,22.988],[89.5805,22.9273],[89.8582,22.4392],[90.15610000000001,22.1754],[90.759,22.3314],[91.3756,22.4889],[91.449,22.5232],[92.0179,23.1599],[92.0014,23.4766],[91.935,23.765],[91.935,23.765],[91.41039999999998,24.2102]
            ]],
            "type": "Polygon"
          }
        }] }
  },
  {
    name: 'Turksat 3A East', position: 42.0,
    beams: {
      'Eastern Beam': { frequency: '11012', symbolRate: '30000', polarization: 'H', fec: '3/4', modulation: 'DVB-S2 8PSK', pilot: 'On' },
      'Turkey Beam': { frequency: '11012', symbolRate: '30000', polarization: 'H', fec: '3/4', modulation: 'DVB-S2 8PSK', pilot: 'On' }
    },
    geoJson: { "type": "FeatureCollection", "features": [{
          // ПОЛИГОН 1 - Уровень сигнала 41 дБ
          "type": "Feature",
          "properties": { "signal_level": 41 },
          "geometry": {
            "coordinates": [[
              [12.224041996660373,47.8141826125918],[12.546750905420415,45.95418847656156],[12.821409108545426,45.205864115484246],[13.249875905420414,43.98130932431481],[13.777219655420419,42.77936014102373],[14.436399342920462,41.396453239471924],[15.007688405420472,40.27840585935095],[15.908567311670451,38.71233012306966],[16.19421184292047,38.21132444095767],[16.688596608545453,37.35684833302267],[18.743039967920534,34.179100825767094],[20.22619426479553,32.16512372663106],[22.3665418389477,29.6605476335774],[23.6299695733227,28.29849333817196],[25.4866590264477,26.444872092626763],[27.189539885822718,24.721271806917613],[28.343104338947718,23.267878410121906],[29.95260140926024,20.75310058544518],[30.855946947326444,19.506428048139448],[31.890175057199663,18.39653763909129],[32.210291838947875,18.111267390165505],[33.26497933894788,17.26880782678042],[34.57235238582286,16.549631735298384],[35.58309457332287,16.06157823878119],[36.62679574519787,15.625549168549943],[37.945155120197875,15.273913878167072],[38.92293832332286,15.103208131057363],[39.461268401447875,15.028480546437276],[40.395106292072875,14.985767162578972],[41.44979379207288,15.028480546546916],[42.55941293269788,15.273913878275431],[43.61410043269786,15.636195322863824],[44.73470590144787,16.24208908984477],[46.92098519832291,17.247695470792532],[47.832850432697896,17.52196444156407],[49.0633191826979,17.753711212318933],[50.60140512019794,17.964126933402305],[52.293299651447974,18.258282869723075],[52.61739633113545,18.363216927105],[53.43587777644794,18.614794812370402],[54.62240121394794,19.210777524711222],[55.896815276447946,20.11621731794551],[57.050379729572946,21.15042867665701],[58.830164885822946,23.146019859957338],[59.961756682697924,24.248729402017567],[61.384486174885446,25.241977856348406],[61.87063119441672,25.526414212055588],[62.79485604793231,25.936892567101403],[63.362025237385474,26.13787388070577],[65.23519418269797,26.691850867182445],[66.76229379207302,27.026875065951884],[68.42122933894801,27.400121931976027],[70.04720590144801,27.967363399642355],[70.75033090144808,28.347101574164416],[71.8050184014481,28.802917360843978],[75.48543832332314,30.871648662605228],[78.26497933894818,32.580556442985504],[80.23153207332324,33.97393722223549],[82.03328988582325,35.2816136791716],[84.07125375301078,36.886692967664175],[86.26302621394831,38.536151647589456],[88.5967391206279,40.355034238929804],[90.37652427687789,41.7438903488318],[92.18926841750289,43.15945255821083],[93.56255943312793,44.2118013587582],[97.00128013625303,46.746215233336976],[99.35235435500296,48.564562085229554],[101.0662215425031,50.21029530424004],[101.51666099562809,50.7883892763893],[101.4727156831281,51.99797142330965],[100.44000083937811,52.6442421492203],[99.69293052687811,52.91736827052494],[96.84747154250307,53.333699328575804],[93.63397056594057,53.5403474277232],[92.12335044875314,53.589400614572845],[87.79473716750314,53.68733558913167],[82.7629988862531,53.76551916528884],[78.4014266206281,53.87602934728037],[74.70452720656557,54.00566670639548],[70.20562583937809,54.19936466901738],[68.44506675734681,54.22995021002732],[66.34393150344057,54.17681339202105],[64.1741316987531,54.054176420790675],[61.954893417503115,53.8110588215835],[61.11993248000316,53.68733558913596],[59.087461776878165,53.34684987221775],[56.49468833937817,52.87750615370657],[54.268719731035205,52.52949892291482],[53.741375981035155,52.44230903833381],[51.82975488728522,52.24043819685491],[50.0334902388477,52.149293942280686],[49.280926762285205,52.15267300533918],[47.489461392446486,52.20277767240901],[46.4625866554909,52.251964572044855],[45.353314457597754,52.34485378387015],[41.502606449785254,52.71670304813752],[39.33829980916022,52.91306634590408],[37.152020512285254,53.05561743963731],[32.80692773884775,53.20759106888948],[28.956219731035244,53.306413506598325],[26.176678715410326,53.332727421968855],[24.314496098222786,53.26691206007146],[22.65006738728533,53.16799783770512],[20.623089848222804,52.98771599123858],[18.62907129353533,52.7733737403266],[16.794354496660343,52.462445198139356],[16.146161137285283,52.25729615435388],[15.118939457597806,51.96304829472416],[14.465252934160302,51.6155788325041],[13.718182621660327,51.134270845515964],[12.553631840410343,49.79500517061211],[12.224041996660373,47.8141826125918]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 2 - Уровень сигнала 43 дБ
          "type": "Feature",
          "properties": { "signal_level": 43 },
          "geometry": {
            "coordinates": [[
              [8.608152272607244,56.638697087320345],[7.024093833949373,55.85873266845748],[5.958420005824382,54.59032208156338],[5.683761802699372,52.810885396775674],[5.683761802699372,52.50357785844293],[5.969406333949389,51.452041174993795],[6.277023521449371,50.27007752791644],[7.1888887558244345,48.227900741626335],[9.078537193324431,44.84041754737616],[10.693527427699467,42.12930570545252],[11.781173912074472,40.38011534925658],[12.978683677699452,38.437181909621046],[15.21989461519946,35.015767771317435],[16.35148641207447,33.41871554611524],[17.75773641207449,31.67878485575012],[19.010177818324507,30.25881616601131],[20.405441490199497,28.624113443755462],[21.9764864120745,27.032174702597363],[23.4266817245745,25.486919672607222],[24.679123130824493,24.03236092967025],[26.239181724574493,21.814060461871044],[27.535568443324514,19.695765636533928],[28.39250203707454,18.452765440106862],[29.15055867769955,17.622481130723017],[30.06242391207454,16.820056819234047],[30.853439537074543,16.18411715828354],[32.76506063082456,15.076935391593304],[34.10539266207453,14.3498126190152],[35.44572469332453,13.60954608425258],[36.676193443324536,12.953144770269914],[37.97258016207456,11.894956263983039],[38.34611531832453,11.385950929092294],[39.389816490199536,10.43046567595363],[40.44450399019954,9.908019014785111],[41.24650594332453,9.711881554015555],[42.72966024019955,9.591962288779946],[44.267746177699536,9.624671827444422],[46.454025474574586,9.722781156272182],[48.354660240199586,9.86444309395432],[50.024582115199586,10.082263818585202],[51.30998250582462,10.34345167252177],[52.99089070894963,10.83258193214292],[55.056320396449614,11.86249492097532],[57.41838094332468,13.394531128164472],[59.14323445894971,14.360523247884457],[62.592941490199685,16.067300384540257],[66.20744344332483,18.032863909256882],[69.59123250582486,19.86216374412497],[71.65666219332485,21.114750625809467],[73.07389852144988,22.17266436327705],[74.57902547457492,23.496451017992104],[76.0841524276999,25.23736796606756],[77.56730672457488,27.130515286067073],[79.44596883394992,29.040102749925136],[81.90690633394992,31.321080949203594],[83.90641805269992,33.14188241226325],[85.99382039644992,34.96151915479948],[88.93815633394989,37.27872551270818],[90.76188680269992,38.62703289633211],[94.33244344332495,41.140293274188245],[97.5734102402,43.159329336092696],[98.39738484957498,43.60805184247436],[101.781173912075,45.42365352392063],[107.32107033008535,47.68775760252391],[112.74831642383533,48.958876849605986],[116.35183204883536,49.78032948466379],[118.10415138477285,50.191177791903755],[113.40200294727299,61.2350008817319],[108.06264747852295,61.34600040495469],[100.22939552539802,60.87286295574089],[95.65908302539805,60.888927274374645],[90.98674335790112,61.09901975179642],[89.07512226415108,61.52684659940554],[86.16374531102609,61.85556880390965],[83.07658710790109,61.9591921727118],[78.1766847641511,61.985043026190574],[75.69377460790108,62.005707891092186],[73.21086445165112,62.005707891092186],[70.83781757665112,62.010871911304235],[68.02531757665113,61.81402078303189],[64.91618671727616,61.34797796155645],[62.224536326651176,60.82663182096046],[54.006762889151204,58.91030082137574],[51.63371601415121,58.49866443399952],[49.48039570165121,58.27943828991245],[47.18425312352622,58.2446984819473],[43.22917499852621,58.302579176939375],[40.944018748526226,58.26207265858151],[35.000415232901226,57.90711441996011],[30.199389842276226,57.74886802829225],[23.099119069482235,57.62437778575504],[15.166990163232253,57.53585688237436],[12.837888600732237,57.43527165268615],[10.618650319482246,57.15573316529506],[8.608152272607244,56.638697087320345]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 3 - Уровень сигнала 45 дБ
          "type": "Feature",
          "properties": { "signal_level": 45 },
          "geometry": {
            "coordinates": [[
              [12.835861412074253,54.724820123510604],[11.186899084061748,54.10993270979978],[9.868539709061789,53.130211758770955],[9.286264318436771,52.174826804687626],[9.055551427811793,51.624326023964244],[8.967660802811782,50.05232579349977],[9.055551427811793,49.62600949926484],[9.407113927811778,48.059865218281786],[10.306857503586825,45.84208725731011],[10.889132894211816,44.65478205215159],[11.866916097336823,42.733908312656546],[12.866671956711821,40.943067210660445],[13.668673909836835,39.571151922945305],[14.756320394211816,37.76253494232687],[15.668185628586828,36.389352854842166],[16.876681722336816,34.49247925223839],[18.349440459912916,32.5310553808157],[19.437086944287923,31.180835542070213],[21.041090850537927,29.33068833469095],[23.210890655225498,27.02864406031051],[25.018141631788,25.15881291738249],[25.858595733350505,24.260613106982422],[26.803419952100516,23.036045844785583],[27.41310025532701,22.099190307025083],[28.072279942827002,21.056201068566946],[29.011610997514524,19.62625889669215],[29.62135220845202,18.84361565457274],[30.324477208452016,18.057262706145504],[31.395644200639524,17.130057403780626],[32.367934239702016,16.452758328556172],[33.5160055287645,15.789014552560511],[35.109023106889545,14.978934669420624],[36.39991666157705,14.412158048957544],[37.542494786577045,14.01025018758637],[38.21815396626459,13.682838054944293],[39.43763638813958,13.247365500848597],[40.442885411577095,12.95660980791566],[41.426161778764595,12.692477885958027],[42.45887662251464,12.48744919629799],[43.72779752095213,12.303862799374341],[45.62843228657713,12.012017874293536],[46.68311978657714,11.990386883942572],[47.73780728657712,12.14176675804886],[49.303359044389666,12.46585760501688],[51.390761388139666,12.865004035519853],[52.0883932240772,13.128951485863352],[53.434218419389694,13.983430751592817],[54.75257779438973,15.181752583614776],[56.63673306782726,16.696443743767457],[57.83424283345224,17.541571651647992],[59.048232091264744,18.009966435666417],[61.39381314595223,17.978428447012778],[62.60780240376474,18.199074131790553],[63.87123013813981,18.649988214493373],[66.63429166157734,20.202950644826903],[67.93617154438985,20.978833759635467],[69.42481900532735,22.181071033726017],[70.54115482885267,23.5334973195642],[71.29921146947765,24.642927671592986],[72.3648852976027,25.931382862181135],[73.74366947729018,27.19101725527114],[74.74171791976092,27.931570835017467],[75.57118569319839,28.55907325471693],[77.02138100569847,29.52449962177236],[79.03737221663604,30.926892485781128],[80.42164956038602,32.019122105185865],[81.9322696775736,33.213875415673186],[83.03639565413607,34.132421995340806],[84.56898842757357,35.37013084133892],[85.68410073226109,36.25157803355965],[87.16176186507356,37.38218169422351],[88.39772377913609,38.31430914314517],[89.88637124007359,39.42648489873692],[91.0069767088236,40.26064189405768],[92.74830971663616,41.523637071284746],[94.26991616194867,42.567682970845155],[95.63348790409351,43.467978248249885],[96.63324376346851,44.10470216971612],[97.76483556034349,44.82457998166278],[98.54486485721854,45.26463112799508],[99.81927891971854,45.96622354881852],[101.9239314036695,47.11572843724572],[102.87974195054453,47.60468162094928],[104.21458081773203,48.17733091958827],[105.78013257554453,48.856112546372024],[107.46653394273201,49.57936835991935],[111.16892652085708,50.60067065670577],[113.61338452866957,51.260223527384234],[116.2116511302321,51.957936695133],[117.31028394273208,52.258960502224944],[115.0251276927322,57.722045446278656],[108.56516675523221,57.46247228155971],[104.67600659898224,57.29631951320524],[99.92991284898226,57.05165839262666],[95.47771425431092,56.96612090488035],[92.5004193324359,56.942109039856284],[89.54509706681094,56.96612090488035],[85.59001894181092,57.05602715545034],[81.15154237931095,57.24114281143696],[77.59197206681095,57.51412029989805],[74.31804628556095,57.67928346876217],[71.6873320783958,57.74525057337618],[69.23738090652077,57.74525057337618],[66.67756645339577,57.651136048933004],[63.13967420791288,57.25149385427406],[60.73366834853784,56.83830773810424],[59.28347303603787,56.554213133136884],[57.04226209853786,56.08411433590194],[54.47146131728788,55.521021061254196],[52.680689832912854,55.17671300148122],[50.62624647353785,54.956039695135715],[48.659693739162876,54.880098695579875],[46.759058973537876,54.956039695135715],[45.429713270412904,55.057070576904955],[41.57351209853791,55.4086693069795],[39.4641370985379,55.48984448799303],[36.3110609266629,55.5708520212831],[32.64162733291291,55.62061956472755],[28.620631239162957,55.64547956900786],[24.876877037074273,55.61150320412261],[20.471359458949262,55.480697609473694],[16.955734458949273,55.29934185816175],[14.846359458949255,55.11714965926826],[12.835861412074253,54.724820123510604]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 4 - Уровень сигнала 46 дБ
          "type": "Feature",
          "properties": { "signal_level": 46 },
          "geometry": {
            "coordinates": [[
              [16.22945953708735,50.3336290856408],[15.059451196778955,49.516228599251384],[14.929935249405242,49.37613900272127],[14.092654321778905,47.78763910090605],[14.057197212504411,47.67974913629341],[14.087161157716464,45.88040766782729],[14.46069631396644,44.13483560930272],[14.779299829591404,43.29414937100683],[15.1088896733414,42.411071394992824],[15.581301782716444,41.38303507344115],[16.151137135798443,40.23481675693788],[17.22925100146645,38.21460254181764],[17.932376001466448,37.026177848641815],[18.67944631396645,35.818701289993015],[19.16284475146645,35.09961497917565],[19.95386037646646,33.935670607682155],[20.42077932177891,33.259936127459554],[20.92065725146646,32.62538169881871],[21.519352014863156,31.84984854109831],[22.288455103028916,30.92205284169839],[23.579348657716444,29.447496720038757],[25.12292775927892,27.887545591780363],[26.43579397021644,26.66046725096602],[27.71570119677899,25.419907024361162],[28.808840845216487,24.166306393437218],[29.533938501466498,23.15435269025414],[30.830325220216494,20.942302217646866],[31.703738306153994,19.771514873634697],[32.4343291264665,18.96867308655844],[32.9946318608415,18.408530827938563],[33.7746611577165,17.814970500505595],[34.53271779834149,17.303851275612185],[35.38965139209149,16.86535568292947],[36.13672170459149,16.52123357238197],[37.21338186084149,16.155254686708588],[38.317507837403994,15.932147767233593],[39.33099660693519,15.839112185509046],[40.43237600146645,15.87367333852408],[41.42114553271649,16.080913835594973],[42.4758330327165,16.425827807870533],[43.04712209521648,16.6960201350694],[45.442141626466494,17.83601608664845],[46.83191213427899,18.34034912003634],[47.546023462403994,18.513372389678594],[49.05201675509252,18.782240977228994],[51.26489553271651,19.052270673238286],[52.390994165529,19.308022572037135],[52.97876272021651,19.552955983184944],[53.577517603029,19.771514873933803],[54.516848657716544,20.34248881360301],[55.92309865771659,21.375141488149293],[57.45569143115408,22.971366186825218],[58.80151662646657,24.468335096018816],[60.05121145068527,25.479755504096225],[60.42200002490402,25.718847906889053],[61.60577688037273,26.438148957417123],[63.080691431154015,27.113622324199575],[65.01977834521655,27.741021922415666],[67.38183889209162,28.335634212568547],[68.94189748584162,28.796338976477067],[70.50744924365405,29.401811008338633],[71.50171193896661,29.86970104618669],[72.39160451709158,30.268653975821355],[74.27026662646658,31.29072160333767],[77.2530547124041,33.11675358108715],[78.84881887256033,34.15515822377765],[80.29077443896662,35.189855043853534],[83.27905568896658,37.368933878213554],[84.97965568600935,38.687117227213044],[87.0144072514666,40.298414036584774],[88.44348536102412,41.49651925178146],[90.77808008758662,43.46825545570601],[92.05249415008662,44.552508606908276],[93.22803125946164,45.63221627563823],[93.88171778289914,46.18440097079451],[94.58484278289906,46.93463307943828],[95.64502344696162,48.264654952109005],[96.01855860321162,49.56789680624197],[95.81531153289914,50.10437586954106],[95.0297890719616,50.78137891228175],[92.9368935641491,51.4315038457081],[91.27795801727406,51.67805711280901],[90.39630518524278,51.79401839711945],[86.9218789157116,51.991144931395226],[83.47217188446163,52.09953257789044],[79.07764063446163,52.15362735780187],[74.26562891571164,52.24813446735891],[69.90093108172384,52.40705161421023],[68.0222689723488,52.447347065873565],[66.40727873797384,52.43391936186001],[65.10090638964425,52.40927087316069],[63.124368025689684,52.28365633024189],[62.0347201442238,52.17801090218693],[58.55205412859883,51.69246104114302],[56.947305037408384,51.43303040475273],[54.78923674578637,51.101429435877876],[53.29435093584594,50.93268849624514],[50.65288420672385,50.76472391253161],[49.20818205828637,50.771691048638885],[47.906302175473854,50.81347196113921],[45.736502370786354,50.94900071955679],[43.588675222348854,51.122176138780844],[39.56767912859885,51.48715887238573],[37.1572973601868,51.66484547262546],[34.71395660739984,51.78735971187673],[29.330655826149844,51.92342225664368],[26.75799260493383,51.95420263740256],[23.76058746677485,51.845236823376105],[21.275814870558847,51.62204486445662],[19.50887848239984,51.36981123534056],[17.827970279274837,50.972683773456986],[16.22945953708735,50.3336290856408]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 5 - Уровень сигнала 52 дБ
          "type": "Feature",
          "properties": { "signal_level": 52 },
          "geometry": {
            "coordinates": [[
              [17.430369112293572,48.471622514264894],[16.489406532157417,47.52741599970305],[16.286159461844942,47.16714246510022],[15.945583289969939,45.74743705312923],[16.077419227469953,44.06113862216732],[16.439968055594946,42.82037605461665],[16.989284461844942,41.28939717270105],[17.67043680559495,39.78918396599152],[18.23073953996995,38.678491723191],[19.087673133719953,37.13789174726409],[20.263210243094992,35.250183743592004],[22.021022743095,32.771147525731],[22.943874305594996,31.612743714793222],[23.932643836844985,30.439599387561703],[25.591579383719974,28.7497949656805],[27.206569618094985,27.267781977272907],[28.382106727469974,26.123115636955458],[29.195095008719996,25.36693209102629],[30.06301493059498,24.223663208450215],[31.29348368059506,22.151922914892435],[32.172389930595074,20.63950535114868],[33.07326883684505,19.54974411763921],[34.16091532122006,18.525861054717577],[34.98488993059507,17.94847889203199],[36.10549539934507,17.379732262963003],[37.07229227434507,17.020708784876017],[38.29177469622006,16.78802646558737],[39.29153055559506,16.745689443353143],[40.37917703997007,16.830353936121703],[41.49978250872007,17.21086786402915],[42.6643332899701,17.716987159698427],[44.510036414970116,18.578253613508565],[45.850368446220095,19.09083249344605],[47.47003984097364,19.513062067655802],[49.08503007534863,19.773282424764087],[51.31525468472363,20.074600026664957],[52.52375077847369,20.437479732743498],[53.699287887848655,20.985333598001084],[54.96271562222368,21.828950659511445],[56.237810653567756,23.044072375492384],[57.88026670825528,24.891439173198112],[59.19862608325531,26.068132782895375],[60.44008116138027,26.947833012791044],[62.11000303638029,27.80111094804832],[63.955706161380284,28.492492570636763],[66.44960264575529,29.23716110580755],[69.36097959888026,30.12931506521088],[71.22865538013028,30.909255840533053],[72.7337823332553,31.654641647698323],[74.49159483325529,32.673239314001954],[76.05165342700535,33.6526876794089],[77.47987608325535,34.59376287007291],[79.02345518481778,35.64087431113159],[80.8416924895053,36.90848068937246],[82.50612120044285,38.163869001827116],[84.67592100513032,39.890453961605964],[85.60975889575532,40.66876472808381],[86.98304991138032,41.88702124161748],[88.22450498950538,43.050095374443],[89.05946592700539,43.87433282177548],[89.59779600513038,44.51456713068543],[90.71841683795836,45.84985098401498],[91.16885629108333,46.6879205675219],[91.35562386920843,47.75815438175192],[90.9711023848334,48.47176017012814],[89.52090707233343,49.426869611434824],[87.54336800983344,49.8620437340139],[85.23623910358344,50.138221999050394],[82.23697152545846,50.314420840618624],[79.11685433795846,50.38471717173548],[75.2826258223335,50.370666276080605],[72.73005172948085,50.39160870900989],[70.8898417685434,50.44074671055706],[68.3629862997934,50.538869014521005],[66.04487106541842,50.58085872476378],[64.06733200291839,50.53886901451509],[62.1612040732309,50.39863156128059],[61.09003708104342,50.300216418763696],[58.65107223729343,49.96832142825258],[56.4867655966684,49.662642963536335],[54.31147262791844,49.433900153749335],[52.960154268543455,49.311942222010124],[51.27924606541845,49.25444493229444],[49.57636520604343,49.24006007376356],[47.6647441122935,49.322715458041166],[45.7750956747935,49.43390015373388],[43.40204879979348,49.5912765321799],[40.952097627918484,49.783724684006415],[38.4801737997935,50.01789934560962],[36.151072237293484,50.18043648869314],[34.67890426854349,50.250931921205954],[31.525828096668498,50.328355959412235],[29.800974581043537,50.37053387555057],[27.510325166981037,50.41267412782023],[25.768992159168526,50.37053387555057],[23.846384737293533,50.250931921199985],[22.11054489354357,50.0391312921948],[20.418650362293555,49.719660423890986],[18.792673799793562,49.26882557600332],[17.430369112293572,48.471622514264894]
            ]],
            "type": "Polygon"
          }
        },{
          // ПОЛИГОН 6 - Уровень сигнала 52 дБ
          "type": "Feature",
          "properties": { "signal_level": 52 },
          "geometry": {
            "coordinates": [[
              [19.91164774309198,47.15941498105631],[18.734683360928987,46.056917713440335],[18.492984142179026,45.60379203454973],[18.119448985929026,43.92113482501218],[18.427066173429033,42.205494150842334],[18.844546642179036,40.918342860300854],[19.40484937655404,39.56292647747212],[20.239810314054075,37.841274357209315],[21.00885328280407,36.460671139149476],[22.04156812655406,34.94634015740705],[23.239077892179118,33.22799757408408],[24.2168610953041,32.09424662419112],[25.7439607046791,30.37626198843099],[27.07330640780412,29.062517248434286],[28.204898204679104,28.063502795579474],[30.017642345304125,26.4138189832116],[30.8745759390541,25.380393806251497],[31.643618907804118,24.186870641235362],[32.335757579679104,22.890368701457724],[33.19269117342911,21.354974217481885],[33.818911876554104,20.3947085353324],[34.598941173429104,19.501293934419333],[35.159243907804104,19.06313862790785],[36.16998609530411,18.403709966338074],[37.14776929842912,18.02573662521679],[38.25738843905411,17.82591793868323],[39.323062267179104,17.815394856587737],[40.38873609530415,17.99420149181627],[42.849673595304154,19.063138628195365],[44.673404064054154,19.875903389610254],[45.77203687655414,20.239250240332225],[47.090396251554154,20.50861060245038],[50.1775544546792,20.994313744525808],[51.34210523592924,21.25201923986941],[52.660464610929274,21.72500467337459],[53.704165782804246,22.40088936554524],[54.39630445467929,22.9005473711482],[55.19830640780425,23.75277192670983],[56.43976148592932,25.13061995845824],[57.92291578280434,26.611499080848183],[59.32916578280433,27.643623179430694],[61.75714429842939,28.92729300958377],[64.34991773592938,29.927521353138527],[67.12945875155438,30.766025930740916],[69.30617899309183,31.480729970845108],[70.58059305559183,31.959659639166574],[72.32741922746683,32.835805606047586],[74.05227274309188,33.804256304958365],[75.42556375871686,34.761770554322],[76.76589578996688,35.70820844678272],[78.35891336809186,36.83796794174299],[80.58913797746689,38.479872292741746],[82.72048563371692,40.228224142989355],[84.55520243059193,41.907634479224235],[86.02737039934192,43.69533736010524],[86.87331766496692,45.50051567505896],[86.1592063368419,46.85128532308731],[85.70876688371693,47.18938067570546],[84.6321067274669,47.60711475723785],[82.6985129774669,48.02151900861053],[80.5781516493419,48.25682845701103],[78.56765360246693,48.374076442379575],[76.34841532121689,48.33746556177842],[73.78860086809189,48.30082821490907],[72.04177469621689,48.24215339911705],[69.96535868059192,48.24215339911705],[66.65847391496693,48.344789855046486],[64.69192118059193,48.38871338502655],[63.054958289966905,48.33014020983672],[61.297145789966926,48.198102805850624],[58.550563758716926,47.89606939827316],[56.08962625871692,47.621972216579536],[54.44167703996691,47.50299360431373],[52.84865946184192,47.42849389014634],[50.7722434462169,47.42849389014634],[48.09157938371692,47.54020362633928],[46.136012977466905,47.64425044244335],[43.98269266496691,47.75549826079713],[40.554958289966905,47.940380724791616],[37.29201883684191,48.18341080061113],[34.96291727434192,48.34478985500738],[32.31521219621691,48.396030268699874],[28.579860633716955,48.491053458647976],[26.338649696216947,48.491053458647976],[24.679714149341958,48.403346094033246],[22.976833289966937,48.16136484737955],[21.33987039934199,47.77771916782331],[19.91164774309198,47.15941498105631]
            ]],
            "type": "Polygon"
          }
        },{
          // ПОЛИГОН 7 - Уровень сигнала 52 дБ
          "type": "Feature",
          "properties": { "signal_level": 52 },
          "geometry": {
            "coordinates": [[
              [24.030093517178997,45.53434472370558],[23.289267807225926,45.34266894391986],[22.575156479100922,44.92274135738067],[21.366660385350936,43.755870910706555],[21.13594749472593,42.06007850050519],[21.43257835410093,40.47699762440315],[21.89400413535094,39.25797722417075],[22.201621322850922,38.54545564724777],[23.080527572850936,36.905031606372695],[24.365927963475926,34.87591013530218],[26.112754135350926,32.841349488643814],[27.804648666600936,31.16570706730474],[30.43038108847598,28.793997552703967],[31.67183616660096,27.577247090376947],[32.550742416600976,26.524737475952033],[33.24288108847597,25.282721499749393],[34.74800804160098,21.696440898964312],[35.98946311972597,20.200026362543486],[37.07710960410097,19.461885048650906],[38.13179710410098,19.23246688456408],[39.242397441730944,19.285625495829844],[40.30807126985594,19.525384857862363],[41.57149900423094,20.159517625220257],[43.57101072298093,21.152213008333266],[44.71358884798092,21.51248308735237],[49.30587400423096,22.30188892711351],[50.503383769855986,22.628641060748663],[51.43722166048099,22.964783233826928],[52.96432126985599,24.109372426310888],[54.79903806673095,26.56519950734012],[56.150356426105986,27.842173032481114],[57.04024900423096,28.387654079069115],[58.38058103548096,29.142722821595868],[59.841762676105965,29.834773292583996],[62.544399394855986,31.024790962073926],[64.41207517610599,31.694139575809444],[65.76339353548103,32.17195553498331],[68.12545408235604,32.944186837600704],[69.79537595735601,33.489023146796654],[70.91598142610606,33.975521892920916],[72.80562986360603,35.0847419398695],[73.90426267610607,35.920221432645874],[75.18966306673106,36.96760268411838],[76.27730955110607,37.84399770109148],[77.6286279104811,38.91630734119303],[78.80047377747931,39.94165504895562],[80.48138198060431,41.578850914847116],[81.20115664097645,43.3248834788531],[80.92649843785144,44.12162718401851],[80.25633242222646,44.8920801077713],[79.76194765660146,45.11032627699041],[77.97117617222648,45.49797010496134],[76.06134351717895,45.6269219321522],[74.10577711092893,45.57293723365135],[70.20563062655394,45.224644182623344],[68.34894117342897,45.123623812754005],[66.45929273592894,45.18581154268204],[65.08600172030394,45.263450137745735],[63.240298595304004,45.30222940894264],[61.603335704678976,45.1935802054563],[60.60357984530398,45.061367765210875],[58.20856031405397,44.74906268869574],[57.38458570467899,44.67855864157216],[55.40704664217901,44.60011938693446],[53.341616954678976,44.537291113932596],[52.704409923429,44.60011938693446],[50.770816173429,44.803839383059376],[49.07892164217898,45.0380041337033],[46.85968336092899,45.20911432876831],[43.937320079679004,45.302229408898825],[41.30060132967898,45.19358020541242],[38.795718517179,45.115845542897766],[36.642398204679,45.16249914966943],[33.98370679842899,45.240169766684986],[31.08331617342899,45.41066941702566],[27.304019298428997,45.78087585911131],[25.502261485928987,45.78087585911131],[24.030093517178997,45.53434472370558]
            ]],
            "type": "Polygon"
          }
        },{
          // ПОЛИГОН 8 - Уровень сигнала 53 дБ
          "type": "Feature",
          "properties": { "signal_level": 53 },
          "geometry": {
            "coordinates": [[
              [24.8163674166008,43.17975151238554],[23.66576592273011,42.11024210436436],[23.577875297730124,41.962820777867236],[23.583368461792617,40.364732373482965],[24.01732842273012,38.78774468196176],[24.654535453980124,37.547488269630186],[25.28075615710512,36.61446520111309],[26.15966240710511,35.82217043543236],[26.972650688355106,35.00373925178507],[27.994379203980117,34.4777420832786],[28.433832328980113,34.222605673433875],[29.719232719605127,32.981555212538],[30.08178154773012,32.480114441866014],[30.631097953980166,31.5628640454383],[31.740717094605163,30.198419777257463],[33.03710381335516,28.891983486854027],[34.135736625855195,27.686148396377174],[34.9267522508552,26.486480520529167],[35.1794377977302,25.722706369499253],[35.38817803210519,24.47223364047814],[35.49804131335519,23.816943673009526],[35.67382256335521,22.954963510836816],[36.2231389696052,21.677235972186885],[37.02514092273019,20.812074908702545],[37.4536077196052,20.563950436229483],[38.145746391480245,20.398306915796383],[39.266351860230245,20.460444437499955],[39.71679131335522,20.553603023210908],[40.343012016480245,20.86371571551711],[41.77123467273023,21.66696681574404],[42.51830498523023,22.373788066344197],[43.649896782105245,22.832818089678078],[44.81444756335522,23.137972549022216],[47.000726860230245,23.178607018563454],[48.154291313355245,23.34101998326789],[49.25292412585526,23.705713884140803],[50.17577568835523,24.05929212520781],[50.81298271960526,25.284016531377773],[50.64818779773022,25.73265772752468],[49.604486625855294,26.575422293056018],[48.49486748523027,26.861537170596506],[46.12182061023028,27.245161205547436],[44.913324516480266,27.09777044667029],[44.14428154773028,26.44692849700575],[43.82567803210529,26.33808966835718],[42.59520928210529,26.100264096671197],[41.33178154773029,26.437038344907897],[41.749262016480266,27.637237986671234],[42.50731865710528,27.852278120703037],[44.89135186023028,27.83274675675781],[46.11083428210527,28.14482115170198],[46.999974149423046,28.93215779190059],[48.51608743067304,29.606452181503396],[49.79050149317302,29.78869686440425],[52.04269875879801,29.395015663871796],[53.42697610254804,29.40463608274778],[55.668187040048046,29.80786107399599],[57.52487649317302,30.390581292081798],[59.21677102442306,30.998208199603475],[61.249241727548046,31.83672291583005],[61.86447610254801,32.11765573506406],[63.42453469629801,32.788336187322344],[64.99557961817304,33.334146970047755],[66.44634109922002,33.9679812561775],[69.64336258359505,34.95980668932454],[70.03887039609506,35.11342009197829],[72.35698563047005,36.50936546675979],[74.11479813047002,38.08037833942689],[75.71880203672006,39.69451015767537],[76.92729813047002,41.346030461509244],[77.00420242734505,41.73397769632579],[76.78447586484505,42.924112221951496],[76.24614578672006,43.238182872579834],[74.59819656797005,43.542640321150614],[72.68657547422006,43.46266927591034],[70.77495438047008,43.101479642821346],[68.75347000547008,42.61653546007273],[66.86382156797005,42.28295156942627],[65.17192703672006,42.168635121226075],[63.79863602109507,42.21765341826935],[61.97490555234509,42.16046168185937],[60.46977859922006,41.98037694686195],[55.61382156797009,41.12210733162237],[52.87822586484508,40.134425363175595],[52.47173172422008,39.7454149027982],[50.834768833595106,38.81475105279034],[49.758108677345135,40.763894519375214],[49.54936844297011,41.62690775027052],[47.09941727109512,42.77051614677032],[45.66020828672013,43.07732355707494],[44.17705398984513,42.89180817465541],[42.72685867734513,42.25031100555288],[41.540335239845106,41.55267727996793],[40.63945633359513,38.44418656389901],[40.01323563047013,38.080378339103305],[38.85967117734513,36.97797073610155],[37.66216141172013,36.33178432341235],[36.222952427345106,35.64428306731173],[32.47661453672011,34.23302131812027],[31.268118442970128,33.977134506192044],[29.795950474220113,34.387999645162665],[29.356497349220117,35.707032662923886],[29.584433822850755,37.20441404917231],[30.60616233847577,40.08152403294573],[30.515525131444512,41.663817424844424],[29.589926986913298,42.56562903129059],[27.980429916600805,43.44449268998905],[26.310508041600805,43.55645620074041],[25.7831642916008,43.49250265526801],[24.8163674166008,43.17975151238554]
            ]],
            "type": "Polygon"
          }
        }] }
  },
  {
    name: 'Turksat 5A', position: 31.0,
    beams: {
      'MENA Beam': { frequency: '11012', symbolRate: '30000', polarization: 'H', fec: '3/4', modulation: 'DVB-S2 8PSK', pilot: 'On' },
    },
    geoJson: { "type": "FeatureCollection", "features": [{
          // ПОЛИГОН 1 - Уровень сигнала 47 дБ
          "type": "Feature",
          "properties": { "signal_level": 47 },
          "geometry": {
            "coordinates": [[
              [46.4039,43.5059],[47.259,43.4989],[47.2859,43.4937],[47.2859,43.4937],[47.948,42.9704],[47.9543,42.6157],[47.7781,41.7222],[47.6184,40.8478],[47.6,39.996],[47.7091,39.4496],[47.7414,39.1659],[47.9861,38.3543],[48.112,38.0485],[48.3162,37.5595],[48.5921,36.9503],[48.6732,36.7784],[49.0337,36.0095],[49.0781,35.9],[49.3959,35.252],[49.5689,34.8905],[49.7907,34.5063],[50.1051,34.0681],[50.3528,33.7771],[50.6922,33.4486],[51.1659,33.0669],[51.3135,32.9652],[51.9722,32.6203],[52.4519,32.3848],[52.6363,32.2959],[53.3072,31.9941],[53.7503,31.7128],[53.9415,31.5712],[54.5705,31.1334],[54.6889,31.0345],[55.1744,30.6172],[55.4747,30.3573],[55.7848,30.1236],[56.3072,29.6894],[56.3935,29.6254],[57.0309,29.2151],[57.2541,29.0331],[57.6437,28.7267],[58.0336,28.376],[58.234,28.167],[58.6133,27.7161],[58.7719,27.4446],[58.9333,27.0507],[59.0779,26.3834],[59.0899,26.0274],[59.0874,25.7161],[58.9562,25.0487],[58.6973,24.3818],[58.4842,23.9751],[58.3505,23.7173],[57.9335,23.056],[57.4519,22.3979],[57.2871,22.2022],[56.854,21.7417],[56.3531,21.2719],[56.1542,21.0879],[55.4901,20.5342],[55.3314,20.4364],[54.704,20.0779],[53.9627,19.7902],[53.8856,19.7739],[53.2557,19.6418],[52.5583,19.5082],[51.8839,19.4763],[51.2208,19.4848],[50.5787,19.6035],[50.2092,19.6829],[49.9437,19.7507],[49.3148,19.9225],[48.6783,20.0236],[48.0403,20.0941],[47.4005,20.1294],[46.7707,20.2216],[46.7459,20.2274],[46.1538,20.4028],[45.5765,20.8252],[45.5676,20.8355],[45.1431,21.4408],[45.032,21.7067],[44.9138,22.0641],[44.7552,22.6929],[44.5768,23.2591],[44.5524,23.3254],[44.1875,23.9593],[44.0357,24.1222],[43.5102,24.5921],[43.4488,24.6335],[42.8361,24.9427],[42.2162,25.1966],[42.1247,25.2176],[41.5847,25.3463],[40.9397,25.3554],[40.4796,25.1914],[40.2729,25.1053],[39.5953,24.6586],[39.436,24.5278],[38.9245,24.1944],[38.279,23.9928],[37.6431,23.8833],[37.0199,23.9584],[36.3941,23.9764],[35.7725,24.073],[35.1491,24.1255],[34.5278,24.2391],[33.9052,24.3288],[33.2823,24.4248],[32.6579,24.4702],[32.5603,24.4757],[32.0331,24.5054],[31.7112,24.4743],[31.4078,24.445],[30.7831,24.45],[30.1588,24.4007],[29.5342,24.3966],[28.9103,24.3507],[28.2853,24.3496],[27.6607,24.3233],[27.035,24.3171],[26.4074,24.3402],[25.7728,24.4819],[25.7034,24.4952],[25.1362,24.6123],[24.4883,24.8803],[23.8429,25.0434],[23.5168,25.1652],[23.1884,25.2793],[22.5373,25.4184],[21.8772,25.6176],[21.2175,25.7663],[20.8222,25.8572],[20.5541,25.9121],[19.8904,26.0234],[19.2232,26.1324],[18.566,26.1311],[17.9094,26.1069],[17.2559,26.0434],[16.5936,26.0267],[16.0118,25.9525],[15.9389,25.9417],[15.2674,25.9488],[14.5922,25.9566],[14.2156,25.997],[13.9022,26.0272],[13.2133,26.0657],[12.5039,26.1859],[11.7921,26.2868],[11.0605,26.451],[10.3184,26.628],[9.74627,26.7959],[9.55635,26.8538],[8.7786,27.103],[7.96874,27.4328],[7.67589,27.5432],[7.14994,27.7452],[6.31192,28.0756],[5.66004,28.3044],[5.46919,28.3714],[4.59148,28.7289],[3.77554,28.8516],[2.99059,28.8536],[2.29683,28.5776],[2.11234,28.4589],[1.67289,28.0978],[1.29045,27.8098],[1.05107,27.6062],[0.342535,27.3448],[-0.445602,27.2809],[-1.30008,27.3629],[-2.15668,27.4168],[-3.03381,27.4871],[-3.81609,27.375],[-3.84406,27.3711],[-4.69701,27.3269],[-5.57105,27.2999],[-6.34604,27.5086],[-6.61166,27.5855],[-7.78302,28.0665],[-8.19701,28.3033],[-9.24848,28.9888],[-9.35758,29.0712],[-10.3416,29.8392],[-11.1955,30.5179],[-11.312,30.6171],[-12.1223,31.3954],[-12.86,32.1793],[-13.5528,32.9708],[-14.0847,33.7616],[-14.3707,34.5446],[-14.3854,34.7495],[-14.2352,35.3055],[-14.0045,35.6607],[-13.1961,36.0058],[-13.1518,36.0205],[-12.1404,36.176],[-10.9856,36.1276],[-9.84045,36.0516],[-8.72716,35.9787],[-7.66321,35.9379],[-6.62146,35.8955],[-5.63485,35.9056],[-4.68561,35.9478],[-3.78165,36.0407],[-3.44259,36.0895],[-2.91127,36.1709],[-2.12896,36.4391],[-1.33766,36.6821],[-1.21837,36.7324],[-0.582121,36.9811],[0.22569,37.1755],[0.996099,37.3902],[1.015,37.3948],[1.82511,37.564],[2.63099,37.7306],[3.41272,37.9375],[3.7381,38.0332],[4.18054,38.1668],[4.9506,38.3852],[5.72655,38.5843],[6.5535,38.6567],[6.91519,38.6742],[7.38735,38.6975],[7.9942,38.6191],[8.27544,38.582],[9.16794,38.4237],[10.0962,38.1275],[11.0151,37.8079],[11.3397,37.6536],[11.956,37.3611],[12.876,36.9134],[13.1044,36.7869],[13.7887,36.4186],[14.6616,36.0013],[14.7818,35.9443],[15.5091,35.6216],[16.3121,35.3801],[17.0998,35.1654],[17.7252,35.0846],[17.8565,35.0683],[18.5986,35.022],[19.0672,35.0494],[19.3218,35.0644],[20.0449,35.095],[20.7576,35.1826],[21.4717,35.2553],[22.1841,35.3366],[22.8974,35.4058],[23.6066,35.5092],[24.3216,35.5569],[25.0371,35.5921],[25.7635,35.474],[26.4912,35.2799],[27.2163,35.0372],[27.7428,34.9112],[27.9321,34.8736],[28.6408,34.8044],[29.3447,34.8584],[29.515,34.9023],[30.0471,35.0812],[30.753,35.498],[30.9761,35.6643],[31.469,36.1563],[31.6966,36.4408],[32.1967,37.2299],[32.207,37.2473],[32.6907,38.0325],[32.9736,38.4305],[33.2937,38.8501],[33.7601,39.3773],[34.0445,39.6844],[34.5651,40.1961],[34.9737,40.5375],[35.384,40.8777],[36.2015,41.3124],[36.5818,41.4184],[37.0101,41.5295],[37.792,41.4597],[37.913,41.4388],[38.5664,41.3338],[39.326,41.1165],[40.097,40.9926],[40.8859,40.9782],[41.71,41.1382],[42.571,41.4402],[42.7606,41.5493],[43.5079,42.0188],[44.2112,42.477],[44.4804,42.6374],[45.4387,43.0987],[46.2749,43.4538],[46.4039,43.5059]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 2 - Уровень сигнала 48 дБ
          "type": "Feature",
          "properties": { "signal_level": 48 },
          "geometry": {
            "coordinates": [[
              [45.9632,41.964],[46.3238,41.6661],[46.3238,41.6661],[46.6175,41.3449],[46.7404,40.8143],[46.9416,39.9712],[47.009,39.8246],[47.1738,39.1447],[47.4419,38.4857],[47.4889,38.3357],[47.8159,37.5408],[47.9129,37.3189],[48.1624,36.7594],[48.3909,36.2077],[48.4915,35.9894],[48.8024,35.23],[48.8568,35.0761],[49.1323,34.4819],[49.359,34.105],[49.6152,33.7495],[49.9219,33.3857],[50.3029,33.0342],[50.5319,32.8596],[51.1685,32.4422],[51.3629,32.3421],[51.8268,32.108],[52.4901,31.7926],[52.7531,31.6722],[53.1503,31.4661],[53.7691,30.9999],[53.7739,30.9966],[54.3858,30.5299],[54.6262,30.3218],[54.9872,30.0112],[55.4825,29.6545],[55.6125,29.5725],[56.2335,29.1188],[56.4226,28.9976],[56.8702,28.713],[57.3433,28.3463],[57.4841,28.2322],[58.0032,27.6899],[58.0565,27.6187],[58.4177,27.0288],[58.541,26.7241],[58.6358,26.365],[58.6839,25.6997],[58.5813,25.0338],[58.34,24.3682],[58.0057,23.7046],[57.5954,23.044],[57.4448,22.8401],[57.0805,22.3853],[56.4583,21.7392],[56.4483,21.7285],[55.7422,21.0753],[55.5733,20.9342],[54.7742,20.4373],[54.7373,20.4192],[54.0187,20.0928],[53.3051,19.9206],[52.6042,19.7786],[51.9274,19.7425],[51.2645,19.7619],[50.6252,19.907],[49.9976,20.1122],[49.5121,20.2855],[49.3767,20.3486],[48.7473,20.5131],[48.1142,20.6367],[47.4768,20.7118],[46.9497,20.8518],[46.8552,20.8893],[46.2489,21.1771],[46.0059,21.4572],[45.7127,22.0254],[45.6899,22.079],[45.5119,22.7077],[45.3152,23.3405],[45.2516,23.4719],[45.039,23.9762],[44.723,24.4094],[44.5341,24.612],[44.134,24.9059],[43.6019,25.2446],[43.5281,25.2847],[42.9104,25.5775],[42.2917,25.8698],[42.2718,25.8757],[41.6624,26.0759],[41.0304,26.26],[40.38,26.2563],[39.7005,25.9017],[39.6267,25.8341],[39.0036,25.2375],[38.938,25.1706],[38.3345,24.8022],[37.6845,24.5515],[37.0544,24.5732],[36.4251,24.5923],[35.7996,24.6787],[35.1715,24.7017],[34.5463,24.7956],[33.92,24.8674],[33.2937,24.9516],[32.6659,24.982],[32.0383,25.0296],[31.4098,24.9669],[30.782,24.9776],[30.1546,24.9228],[29.5267,24.938],[28.8993,24.9053],[28.2705,24.9259],[27.6411,24.945],[27.0104,24.9714],[26.3762,25.0535],[26.0213,25.141],[25.7365,25.2069],[25.096,25.323],[24.4449,25.5636],[23.7979,25.6831],[23.3623,25.8213],[23.1417,25.882],[22.4879,26.0027],[21.8253,26.1822],[21.1622,26.3229],[20.4955,26.4595],[20.1247,26.5299],[19.8268,26.5789],[19.1584,26.6625],[18.4982,26.6556],[17.841,26.6088],[17.5836,26.5798],[17.1864,26.5301],[16.5226,26.4997],[15.8677,26.3968],[15.1942,26.3951],[14.5159,26.4018],[13.8267,26.4476],[13.1335,26.4904],[12.4202,26.6106],[11.7059,26.7048],[11.5634,26.7376],[10.9675,26.8811],[10.2184,27.0681],[9.44459,27.3216],[8.93805,27.4974],[8.65148,27.6083],[7.82056,27.99],[7.16165,28.2444],[6.99043,28.3138],[6.14014,28.6559],[5.28586,28.9596],[5.1505,29.0157],[4.40012,29.3105],[3.57811,29.4273],[2.78763,29.4254],[2.0736,29.1936],[2.01161,29.1569],[1.42665,28.771],[1.05088,28.5086],[0.794049,28.3037],[0.0841815,28.0327],[-0.699311,27.9371],[-1.57073,28.0362],[-2.44632,28.1107],[-3.38122,28.2858],[-4.23821,28.2505],[-5.10459,28.2076],[-5.57358,28.1561],[-5.96305,28.1206],[-6.21715,28.1915],[-7.03861,28.4332],[-8.27053,28.9721],[-8.32865,29.0099],[-9.48611,29.7861],[-9.88528,30.0609],[-10.5172,30.5658],[-11.3925,31.3465],[-12.1545,32.1305],[-12.8118,32.9179],[-13.259,33.701],[-13.3427,34.4674],[-13.2467,34.7712],[-12.6595,35.1857],[-12.5102,35.255],[-11.5548,35.4551],[-10.4325,35.4152],[-9.31855,35.3482],[-8.26115,35.3229],[-7.23831,35.315],[-6.25634,35.3389],[-5.30254,35.3801],[-4.92848,35.41],[-4.38141,35.4498],[-3.49673,35.5593],[-2.62836,35.6783],[-1.8456,35.9346],[-1.7201,35.9788],[-1.06818,36.191],[-0.321047,36.4956],[0.169496,36.6461],[0.464039,36.7207],[1.23954,36.9555],[2.03804,37.1355],[2.66089,37.2913],[2.82624,37.3265],[3.61024,37.5174],[4.37696,37.7377],[5.13027,37.9555],[5.14068,37.9585],[5.91818,38.1413],[6.73862,38.2128],[7.57078,38.2402],[8.44995,38.1258],[9.33607,37.9613],[10.1125,37.7073],[10.2576,37.6566],[11.1718,37.3221],[12.0971,36.893],[12.2477,36.8203],[13.0079,36.4449],[13.9008,35.9904],[13.9358,35.9739],[14.7629,35.5865],[15.5925,35.2559],[16.0251,35.1344],[16.3861,35.0342],[17.1647,34.8417],[17.9136,34.7652],[18.6506,34.7284],[19.3698,34.7764],[20.09,34.8062],[20.8012,34.8847],[21.514,34.9451],[22.0194,34.9848],[22.2261,35.0029],[22.9382,35.054],[23.6484,35.1141],[24.3626,35.1275],[25.0774,35.1198],[25.8015,34.9641],[25.9304,34.9271],[26.5236,34.7699],[27.2412,34.5668],[27.9506,34.4415],[28.6553,34.3619],[29.355,34.4122],[30.0539,34.5733],[30.7551,34.8883],[30.7748,34.9],[31.4639,35.4101],[31.7301,35.6649],[32.1887,36.2315],[32.3576,36.4422],[32.8781,37.2322],[32.94,37.3295],[33.4115,38.0359],[33.7181,38.4282],[34.071,38.855],[34.5141,39.3288],[34.9216,39.6916],[35.3208,40.0248],[36.1267,40.4745],[36.3428,40.5528],[36.9297,40.7576],[37.7044,40.7148],[38.4707,40.6018],[38.5232,40.5866],[39.2252,40.4123],[39.9823,40.2569],[40.7549,40.2049],[41.5549,40.2984],[42.3698,40.4396],[43.0238,40.6919],[43.24,40.806],[44.1597,41.3178],[44.6844,41.6087],[45.1072,41.8502],[45.9632,41.964]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 3 - Уровень сигнала 49 дБ
          "type": "Feature",
          "properties": { "signal_level": 49 },
          "geometry": {
            "coordinates": [[
             [44.7095,40.2373],[45.5036,40.2121],[45.7792,39.9297],[45.7792,39.9297],[46.155,39.6274],[46.398,39.1168],[46.7069,38.6929],[46.8672,38.3133],[47.2079,37.6007],[47.2415,37.5201],[47.5838,36.7385],[47.6918,36.476],[47.9022,35.9681],[48.1504,35.2814],[48.1807,35.2076],[48.4402,34.4571],[48.6033,34.0881],[48.8221,33.721],[49.1435,33.2647],[49.3704,33.0003],[49.7331,32.6569],[50.2307,32.2999],[50.3609,32.2112],[51.0086,31.8488],[51.4804,31.6229],[51.6662,31.526],[52.3202,31.1908],[52.7675,30.9564],[52.9684,30.8353],[53.575,30.3356],[53.6448,30.2822],[54.1881,29.8617],[54.4775,29.6135],[54.794,29.3648],[55.4309,28.9734],[55.4533,28.9575],[56.0682,28.5806],[56.4767,28.31],[56.6968,28.1559],[57.298,27.6603],[57.3031,27.6552],[57.7985,27.003],[57.84,26.9271],[58.0966,26.3429],[58.2251,25.6896],[58.226,25.6813],[58.1516,25.0171],[57.9366,24.3529],[57.7223,23.9072],[57.6157,23.6904],[57.1859,23.0296],[56.6529,22.371],[56.5899,22.3055],[56.0381,21.7155],[55.6684,21.3801],[55.2303,21.0598],[54.8493,20.8136],[54.0827,20.4316],[53.972,20.3978],[53.3591,20.2202],[52.6536,20.0656],[51.9745,20.0262],[51.3134,20.0665],[50.678,20.2454],[50.5107,20.3087],[50.0608,20.5258],[49.4539,20.8642],[49.3311,20.9034],[48.8345,21.1123],[48.2115,21.326],[47.6775,21.4918],[47.5894,21.5357],[47.0026,21.9938],[46.888,22.1036],[46.5353,22.729],[46.4796,22.9204],[46.3801,23.3629],[46.1972,24.0008],[46.022,24.3193],[45.7815,24.6384],[45.4427,24.8775],[44.9645,25.2723],[44.8478,25.3377],[44.2321,25.6574],[43.7709,25.9041],[43.6167,25.9864],[42.9944,26.2694],[42.5355,26.5419],[42.3823,26.6481],[41.7572,26.93],[41.2776,27.1866],[41.1369,27.2697],[40.5037,27.5051],[39.8518,27.5569],[39.1733,27.2941],[38.964,27.1515],[38.4686,26.6239],[38.3661,26.478],[37.8821,25.8126],[37.76,25.7112],[37.1123,25.559],[36.4687,25.4248],[35.8335,25.4092],[35.1984,25.3715],[34.567,25.4018],[33.9359,25.4307],[33.3057,25.4934],[32.6744,25.507],[32.0435,25.5472],[31.412,25.5055],[30.7809,25.5286],[30.1501,25.4797],[29.5184,25.5218],[28.8872,25.501],[28.2535,25.568],[27.6188,25.6241],[26.9812,25.7197],[26.5886,25.7904],[26.341,25.8302],[25.6971,25.9638],[25.0522,26.0693],[24.3997,26.2498],[23.7491,26.3537],[23.1752,26.4837],[23.0921,26.5005],[22.4354,26.6038],[21.7697,26.7682],[21.104,26.8909],[20.4356,27.0036],[19.7647,27.105],[19.0929,27.1836],[18.4311,27.1608],[17.7708,27.111],[17.1113,27.0423],[16.4467,26.9932],[15.7862,26.9045],[15.1095,26.8989],[14.4271,26.9062],[13.7377,26.931],[13.0381,26.9859],[12.3215,27.099],[11.6049,27.1829],[10.8563,27.3821],[10.6177,27.44],[10.0984,27.5833],[9.30109,27.9055],[8.55978,28.1915],[8.49296,28.2198],[7.64055,28.6451],[6.91948,28.9424],[6.79227,28.997],[5.93157,29.337],[5.05835,29.6647],[4.88409,29.7245],[4.18513,29.9429],[3.35724,30.0509],[2.5634,30.0371],[1.97015,29.8592],[1.83916,29.819],[1.17469,29.435],[0.836166,29.2134],[0.528143,28.998],[-0.182363,28.7158],[-0.973728,28.6205],[-1.85676,28.7208],[-2.76949,28.8539],[-3.75539,29.1071],[-4.69679,29.2204],[-5.61894,29.2581],[-6.53456,29.2503],[-7.61493,29.5136],[-8.006,29.696],[-8.95566,30.1666],[-9.43353,30.4969],[-10.4282,31.2829],[-11.0579,31.8674],[-11.2565,32.0691],[-11.8628,32.8511],[-12.0215,33.2127],[-12.1112,33.618],[-11.7265,34.265],[-11.5858,34.3384],[-10.8682,34.5648],[-9.7964,34.5543],[-8.74228,34.5341],[-7.74459,34.564],[-6.78225,34.6195],[-6.02484,34.7142],[-5.86922,34.7279],[-4.94434,34.7949],[-4.04378,34.8798],[-3.1788,35.006],[-2.31791,35.1214],[-1.99714,35.2214],[-1.53164,35.3583],[-0.757458,35.6075],[-0.116533,35.88],[-0.0192555,35.9175],[0.748397,36.1627],[1.49356,36.4455],[1.87037,36.5446],[2.28228,36.6314],[3.05817,36.8347],[3.83644,37.0241],[4.36074,37.1954],[4.59049,37.2597],[5.36087,37.4516],[6.13073,37.6373],[6.94324,37.7097],[7.77172,37.7262],[8.643,37.608],[9.52385,37.4313],[10.4415,37.1058],[11.098,36.8675],[11.3452,36.7701],[12.2681,36.3105],[12.9297,36.0109],[13.1555,35.9066],[14.0344,35.468],[14.7335,35.1761],[14.8747,35.1184],[15.6903,34.8182],[16.4699,34.635],[17.2361,34.4796],[17.9763,34.4272],[18.7078,34.401],[19.4225,34.4555],[20.1395,34.4848],[20.8483,34.5577],[21.5602,34.6003],[22.2714,34.6378],[22.983,34.6598],[23.6931,34.6839],[24.407,34.6528],[25.1204,34.6031],[25.8395,34.4407],[26.5558,34.2513],[26.8807,34.164],[27.2668,34.0713],[27.9698,33.9803],[28.6699,33.9053],[29.3654,33.948],[30.0606,34.0577],[30.3092,34.1469],[30.757,34.3375],[31.4595,34.7429],[31.6656,34.9004],[32.1741,35.3799],[32.4767,35.6667],[32.9076,36.2084],[33.0859,36.445],[33.6181,37.2359],[33.6712,37.3121],[34.2232,38.0411],[34.4574,38.3193],[34.9962,38.8626],[35.2548,39.0935],[36.0512,39.5917],[36.3102,39.7068],[36.846,39.9214],[37.6188,39.9592],[38.3792,39.8764],[38.9455,39.748],[39.1281,39.7094],[39.8756,39.5473],[40.6351,39.4708],[41.4149,39.5084],[42.2014,39.5615],[43.0191,39.7462],[43.4055,39.8545],[43.8658,40.0243],[44.7095,40.2373]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 4 - Уровень сигнала 50 дБ
          "type": "Feature",
          "properties": { "signal_level": 50 },
          "geometry": {
            "coordinates": [[
              [37.5285,39.13],[38.2843,39.0937],[39.0281,38.9587],[39.2142,38.9222],[39.2142,38.9222],[39.7695,38.8151],[40.5171,38.7201],[41.2788,38.7087],[42.0441,38.7041],[42.8306,38.7951],[43.6165,38.8559],[44.4232,38.9878],[45.1757,38.8583],[45.8479,38.3975],[45.9343,38.2812],[46.4471,37.6649],[46.5289,37.4953],[46.9172,36.7153],[46.9601,36.6181],[47.2248,35.9445],[47.4105,35.349],[47.4651,35.1828],[47.6898,34.4313],[47.8323,33.9857],[47.9435,33.6909],[48.3105,32.9638],[48.3247,32.9413],[48.9092,32.3081],[48.9694,32.2556],[49.5279,31.8325],[49.9639,31.5677],[50.165,31.4409],[50.8158,31.1084],[51.2727,30.8999],[51.4711,30.7943],[52.1169,30.4449],[52.4704,30.2368],[52.754,30.0641],[53.3558,29.5695],[53.3588,29.5672],[53.978,29.1246],[54.2601,28.91],[54.5968,28.6813],[55.2413,28.3266],[55.3508,28.2645],[55.8854,27.9667],[56.387,27.6231],[56.5092,27.5334],[57.0612,26.973],[57.0866,26.9405],[57.4482,26.3168],[57.5535,25.969],[57.629,25.6578],[57.6167,24.9965],[57.4387,24.3344],[57.1348,23.6731],[56.7896,23.1306],[56.7216,23.0136],[56.2253,22.3569],[55.7819,21.8971],[55.5583,21.7004],[54.9369,21.2413],[54.615,21.0417],[54.1523,20.7926],[53.4215,20.5598],[52.7105,20.3891],[52.0415,20.3464],[52.0285,20.3456],[52.0243,20.346],[51.3704,20.4145],[50.7435,20.6549],[50.2498,20.9251],[50.1373,21.0134],[49.5526,21.5017],[49.49,21.5331],[48.956,21.9126],[48.562,22.1411],[48.3568,22.305],[47.9333,22.7602],[47.8034,22.9996],[47.6139,23.3908],[47.4585,24.0298],[47.3915,24.6107],[47.3793,24.6755],[47.2142,25.3242],[46.9077,25.7623],[46.2645,25.9348],[46.1535,25.9564],[45.612,26.0387],[44.9782,26.26],[44.3443,26.4805],[44.1616,26.5743],[43.7259,26.8169],[43.1002,27.1077],[42.9468,27.2173],[42.4974,27.5921],[41.9997,27.8727],[41.875,27.9415],[41.2564,28.3432],[40.7598,28.5304],[40.6166,28.5775],[39.9589,28.6488],[39.3954,28.5089],[39.2793,28.4758],[38.589,28.1223],[38.2601,27.8147],[37.879,27.4059],[37.5315,27.1343],[37.1937,26.864],[36.5768,26.4592],[36.5239,26.4296],[35.8718,26.204],[35.2273,26.0625],[34.5889,26.0204],[33.9527,26.0061],[33.3182,26.04],[32.6834,26.0472],[32.049,26.0751],[31.4142,26.0517],[30.7797,26.0829],[30.1453,26.0488],[29.5098,26.1051],[28.8746,26.1014],[28.2363,26.1962],[27.5968,26.2732],[26.9525,26.4274],[26.8599,26.4478],[26.3066,26.5559],[25.6574,26.6965],[25.0068,26.8117],[24.3525,26.9408],[23.6968,27.046],[23.0978,27.1507],[23.0375,27.1604],[22.3783,27.2373],[21.7099,27.3786],[21.0428,27.4705],[20.3713,27.5703],[19.6985,27.6509],[19.0226,27.7279],[18.3568,27.7046],[17.6915,27.6628],[17.0249,27.6144],[16.3589,27.5484],[15.6896,27.489],[15.0072,27.4901],[14.3192,27.5023],[13.6264,27.5185],[12.9178,27.5923],[12.1967,27.6998],[11.4733,27.7881],[10.704,28.0476],[10.4092,28.126],[9.93084,28.2795],[9.11024,28.655],[8.57929,28.878],[8.27811,29.0181],[7.40822,29.4583],[6.97542,29.6357],[6.54121,29.8282],[5.66225,30.1814],[4.96274,30.4256],[4.78189,30.487],[3.92379,30.6838],[3.08737,30.7853],[2.28749,30.7628],[1.71603,30.5794],[1.56007,30.5367],[0.875164,30.194],[0.50214,29.9316],[0.225848,29.7562],[-0.482131,29.4542],[-1.27436,29.3403],[-2.17718,29.4576],[-3.14487,29.6795],[-4.19012,30.0151],[-5.15898,30.2385],[-5.21542,30.2556],[-6.31402,30.5826],[-7.35198,30.7457],[-8.54272,31.1187],[-8.62637,31.1668],[-9.60927,31.959],[-10.0217,32.7243],[-9.83208,33.1188],[-8.97878,33.3757],[-8.8845,33.3931],[-8.01653,33.4477],[-7.09392,33.5559],[-6.23499,33.7451],[-5.63697,33.9294],[-5.40961,33.9729],[-4.52903,34.0905],[-3.65634,34.2018],[-2.81316,34.3473],[-1.95868,34.4543],[-1.95752,34.4546],[-1.15699,34.6453],[-0.380905,34.874],[0.0874692,35.0953],[0.344893,35.1943],[1.09157,35.4656],[1.75469,35.7699],[1.80978,35.7899],[2.58158,35.9941],[3.33177,36.2371],[4.05871,36.4214],[4.10097,36.4301],[4.84734,36.668],[5.60788,36.8662],[6.36616,37.0628],[6.55466,37.0792],[7.17471,37.124],[7.99623,37.135],[8.86071,37.0067],[9.11519,36.9551],[9.7383,36.8075],[10.663,36.4209],[11.5488,36.101],[11.6282,36.0618],[12.4725,35.5903],[13.3318,35.2439],[13.3759,35.2235],[14.1909,34.8379],[15.0052,34.5578],[15.5442,34.3912],[15.8013,34.3097],[16.5652,34.1714],[17.3199,34.0457],[18.0502,34.0216],[18.7742,34.0134],[19.4831,34.0802],[20.1957,34.1134],[20.9006,34.1882],[21.611,34.214],[22.1461,34.2273],[22.3207,34.2315],[23.032,34.2201],[23.741,34.2112],[23.8508,34.1992],[24.4551,34.1256],[25.1663,34.0361],[25.8794,33.8764],[26.5889,33.704],[27.2926,33.5601],[27.9895,33.499],[28.6849,33.4268],[29.3759,33.4717],[30.0671,33.5434],[30.7589,33.7679],[31.4554,34.0811],[31.5578,34.1468],[32.1611,34.5911],[32.5657,34.9026],[32.8799,35.196],[33.3263,35.6702],[33.6215,36.0577],[33.9221,36.4496],[34.393,37.1077],[34.5122,37.2421],[35.1783,37.9557],[35.2881,38.0502],[35.967,38.5583],[36.4739,38.8788],[36.7604,39.0278],[37.5285,39.13]
            ]],
            "type": "Polygon"
          }
        },
        {
          // ПОЛИГОН 5 - Уровень сигнала 51 дБ
          "type": "Feature",
          "properties": { "signal_level": 51 },
          "geometry": {
            "coordinates": [[
              [38.1811,38.2072],[38.9197,38.1116],[38.9804,38.1017],[38.9804,38.1017],[39.6537,37.9849],[40.3926,37.8959],[41.1392,37.8539],[41.8908,37.8315],[42.6455,37.8139],[43.4002,37.7834],[44.1692,37.8091],[44.892,37.6073],[45.1293,37.4498],[45.5575,37.159],[45.9715,36.6839],[46.1528,36.4314],[46.3712,35.9161],[46.6202,35.1851],[46.6289,35.1551],[46.7718,34.4012],[46.9614,33.6588],[46.9908,33.5374],[47.1537,32.9262],[47.4424,32.2717],[47.4806,32.2069],[48.0111,31.5654],[48.0886,31.505],[48.6332,31.118],[49.114,30.825],[49.2627,30.7129],[49.8936,30.3203],[50.3054,30.1589],[50.5496,30.0366],[51.1919,29.6968],[51.751,29.5101],[51.8647,29.4777],[52.5085,29.1411],[52.8886,28.8582],[53.1285,28.7127],[53.7646,28.3456],[53.966,28.211],[54.3865,27.9237],[55.0407,27.6172],[55.1193,27.5733],[55.6739,27.2299],[56.0828,26.9344],[56.2868,26.7666],[56.6671,26.2862],[56.8197,26.0187],[56.9612,25.632],[57.0087,24.9736],[56.8885,24.3142],[56.6342,23.6554],[56.2609,22.998],[55.9361,22.5747],[55.732,22.3409],[55.041,21.7362],[54.9708,21.6823],[54.2359,21.2156],[53.7054,21.0156],[53.4939,20.9448],[52.7772,20.7603],[52.0954,20.7326],[51.4391,20.8247],[51.1613,20.9476],[50.8259,21.1561],[50.3438,21.554],[50.2457,21.6801],[49.8094,22.1713],[49.688,22.3394],[49.253,22.792],[49.1232,22.9567],[48.7558,23.4184],[48.5911,23.7766],[48.4791,24.0549],[48.3637,24.7001],[48.3245,25.3525],[48.2917,25.9491],[48.2852,26.0103],[48.1815,26.672],[47.8628,27.3336],[47.8605,27.3369],[47.1977,27.4658],[46.4982,27.369],[45.8224,27.3882],[45.1592,27.4703],[44.5172,27.6826],[44.0301,27.914],[43.8887,27.9908],[43.2614,28.3173],[42.9774,28.5722],[42.66,28.8517],[42.0213,29.1273],[41.8399,29.2365],[41.3918,29.4919],[40.734,29.6347],[40.0627,29.6519],[39.3747,29.4817],[38.7129,29.185],[38.6787,29.1691],[37.9663,28.5603],[37.8739,28.4886],[37.2697,28.0076],[37.0393,27.8009],[36.5816,27.4236],[36.0658,27.1201],[35.9138,27.0376],[35.258,26.7733],[34.6125,26.6633],[33.9708,26.6096],[33.3317,26.6124],[32.6931,26.614],[32.055,26.6371],[31.4166,26.6202],[30.7784,26.6524],[30.1402,26.6294],[29.5009,26.6879],[28.8615,26.7033],[28.2189,26.8108],[27.5745,26.9093],[26.9249,27.0863],[26.8143,27.1133],[26.2731,27.2394],[25.6165,27.4233],[24.96,27.5498],[24.3006,27.6728],[23.6401,27.7706],[23.291,27.8205],[22.9773,27.8617],[22.3164,27.9015],[21.6448,28.0219],[20.9768,28.0765],[20.3009,28.1728],[19.6241,28.2465],[18.9425,28.3292],[18.2695,28.3251],[17.597,28.3001],[16.9224,28.2722],[16.2495,28.2182],[15.5651,28.2163],[14.8699,28.2554],[14.1702,28.295],[13.4602,28.3633],[12.735,28.4788],[12.0099,28.5645],[11.2615,28.7236],[11.0872,28.7886],[10.4612,29.0619],[9.66432,29.3367],[9.16385,29.5498],[8.82804,29.7114],[7.96263,30.1324],[7.6155,30.3119],[7.06263,30.6065],[6.18124,30.9594],[5.74299,31.1025],[5.30458,31.2472],[4.41679,31.5205],[3.55129,31.6913],[2.68301,31.8341],[1.85225,31.8527],[1.09212,31.6804],[0.664135,31.3491],[0.439699,31.2439],[-0.194178,30.7595],[-0.291492,30.6821],[-0.881599,30.3933],[-1.68769,30.2849],[-2.64594,30.4832],[-3.6985,30.8304],[-3.7978,30.875],[-4.87633,31.6608],[-5.11357,32.4066],[-4.7172,32.7689],[-4.215,33.0907],[-3.99871,33.1473],[-3.1618,33.2963],[-2.32753,33.4326],[-1.44293,33.4506],[-0.694618,33.626],[-0.65044,33.6338],[0.159359,33.7667],[0.877878,34.0811],[1.1285,34.2741],[1.57096,34.445],[2.26307,34.8073],[2.51885,34.9569],[2.97702,35.1168],[3.70349,35.393],[4.34624,35.6271],[4.43647,35.6484],[5.16779,35.9025],[5.89963,36.1504],[6.4735,36.2952],[6.65517,36.3328],[7.46101,36.3735],[8.27419,36.3767],[9.14344,36.1965],[9.29393,36.1613],[10.0226,35.9482],[10.9475,35.504],[11.4592,35.2964],[11.8397,35.1035],[12.7357,34.6225],[13.1575,34.4714],[13.5709,34.3077],[14.3883,34.0131],[15.1652,33.848],[15.9361,33.6742],[16.6752,33.622],[16.828,33.6052],[17.4162,33.5353],[18.1335,33.5541],[18.4004,33.5632],[18.8482,33.5724],[19.5521,33.6443],[20.2604,33.677],[20.9616,33.7481],[21.6712,33.7469],[22.3792,33.7399],[23.0886,33.7002],[23.7972,33.643],[24.5081,33.5287],[25.063,33.4389],[25.2155,33.4114],[25.922,33.2544],[26.6239,33.1082],[27.3202,32.9994],[28.0109,32.9622],[28.7005,32.9146],[29.3872,32.9447],[30.0739,32.9893],[30.7608,33.1567],[31.4511,33.3879],[31.4788,33.4034],[32.1488,33.813],[32.6677,34.1493],[32.8562,34.29],[33.5779,34.8905],[33.5993,34.9071],[34.32,35.6396],[34.3558,35.6765],[35.0229,36.458],[35.0883,36.5311],[35.8303,37.2544],[35.8692,37.2877],[36.6616,37.9437],[37.0861,38.0715],[37.4264,38.1495],[38.1811,38.2072]
            ]],
            "type": "Polygon"
          }
        },{
          // ПОЛИГОН 6 - Уровень сигнала 52 дБ
          "type": "Feature",
          "properties": { "signal_level": 52 },
          "geometry": {
            "coordinates": [[
              [7.86092,35.2733],[8.67698,35.2217],[9.56448,34.9233],[10.2832,34.5824],[10.2832,34.5824],[10.5011,34.41],[11.2335,33.7929],[11.566,33.3485],[11.9229,33.0259],[12.3239,32.2801],[12.134,31.5643],[12.0361,31.5342],[11.385,31.2022],[10.7097,30.9653],[9.96459,30.9832],[9.17053,31.1527],[8.32343,31.4657],[7.65392,31.7378],[7.4461,31.8265],[6.52746,32.2578],[5.94357,32.5406],[5.48519,32.9716],[4.99712,33.3225],[5.1177,33.9534],[5.11443,34.0635],[5.68864,34.5878],[5.82716,34.7845],[6.32634,35.0521],[7.05649,35.2701],[7.86092,35.2733]
            ]],
            "type": "Polygon"
          }
        },{
          // ПОЛИГОН 7 - Уровень сигнала 52 дБ
          "type": "Feature",
          "properties": { "signal_level": 52 },
          "geometry": {
            "coordinates": [[
             [38.785,37.0074],[39.5139,36.9345],[40.2432,36.8606],[40.9764,36.8086],[41.7143,36.7774],[42.444,36.6884],[43.0452,36.5985],[43.0452,36.5985],[43.1692,36.5702],[43.8842,36.3977],[44.5526,35.9984],[44.7127,35.8652],[45.1476,35.2678],[45.2159,35.1115],[45.35,34.3577],[45.4151,33.6121],[45.3702,32.8732],[45.252,32.1416],[45.2142,31.8909],[45.1446,31.4192],[45.1057,30.7071],[44.9821,30.5873],[44.2725,30.5061],[43.5985,30.6269],[43.4975,30.6677],[42.9465,30.891],[42.2722,31.0079],[41.6046,31.1711],[40.9116,31.1318],[40.2157,31.0424],[39.5021,30.749],[39.2415,30.586],[38.7878,30.3717],[38.2391,29.8714],[38.0589,29.7143],[37.3845,29.1683],[37.3496,29.1414],[36.6461,28.4793],[36.6412,28.4752],[35.9627,27.9649],[35.7003,27.7886],[35.2937,27.5667],[34.6399,27.388],[33.9917,27.2822],[33.3477,27.2668],[32.7042,27.2453],[32.0621,27.2794],[31.4193,27.2501],[30.777,27.2725],[30.1347,27.2461],[29.4913,27.3036],[28.8475,27.3294],[28.2,27.4542],[27.5506,27.5684],[26.895,27.7732],[26.8515,27.7845],[26.2366,27.9579],[25.5713,28.1967],[24.9075,28.3431],[24.241,28.4815],[24.1908,28.4879],[23.5751,28.5695],[22.9108,28.6086],[22.2467,28.6225],[21.572,28.7175],[20.901,28.7499],[20.2191,28.8499],[19.5357,28.9313],[18.845,29.0374],[18.1608,29.0708],[17.4738,29.1002],[16.7838,29.1274],[16.0896,29.1573],[15.3729,29.2886],[15.0732,29.3564],[14.623,29.5594],[13.9021,30.0875],[13.7311,30.4583],[13.4655,30.8062],[13.1112,31.531],[13.4335,31.7984],[13.6046,32.2364],[14.0086,32.4697],[14.6954,32.6573],[15.3969,32.7729],[16.1134,32.8058],[16.8234,32.8576],[17.1395,32.8591],[17.5405,32.8567],[18.2444,32.9144],[18.9456,32.977],[19.6399,33.0751],[20.3406,33.1227],[21.0368,33.1931],[21.7442,33.165],[22.4493,33.134],[23.1575,33.0485],[23.8656,32.9297],[24.5719,32.7851],[25.0379,32.705],[25.2728,32.6577],[25.9706,32.5229],[26.6623,32.4321],[27.3503,32.3679],[28.0341,32.362],[28.7178,32.332],[29.3997,32.3446],[30.0815,32.3562],[30.763,32.4701],[31.4467,32.6338],[31.5322,32.67],[32.1356,32.9481],[32.8323,33.3319],[32.9574,33.4071],[33.5385,33.7738],[34.1415,34.1567],[34.2551,34.2399],[34.9895,34.8427],[35.1128,34.9178],[35.7376,35.4408],[36.0037,35.6913],[36.512,36.1833],[36.8312,36.4775],[37.2913,36.7732],[38.0485,37.0072],[38.785,37.0074]
            ]],
            "type": "Polygon"
          }
        },{
          // ПОЛИГОН 8 - Уровень сигнала 52 дБ
          "type": "Feature",
          "properties": { "signal_level": 52 },
          "geometry": {
            "coordinates": [[
             [51.5473,28.1863],[51.7872,28.1328],[51.7872,28.1328],[52.2343,28.0541],[52.8874,27.7751],[53.4528,27.5113],[53.5353,27.4706],[54.1496,27.0318],[54.5734,26.8773],[54.8161,26.7891],[55.4343,26.358],[55.5695,26.2445],[56.0132,25.7774],[56.1202,25.6003],[56.3107,24.9478],[56.2953,24.2929],[56.0784,23.6362],[55.6825,22.9787],[55.1866,22.4048],[55.1043,22.3209],[54.3413,21.7342],[54.1925,21.659],[53.5853,21.4191],[52.8601,21.2108],[52.1795,21.2062],[51.5329,21.3685],[51.2148,21.5762],[50.9426,21.8419],[50.6664,22.1932],[50.4125,22.6588],[50.2983,22.8188],[49.9272,23.4486],[49.8902,23.5186],[49.5748,24.0833],[49.4169,24.6532],[49.398,24.7275],[49.3609,25.3806],[49.4446,26.0425],[49.6508,26.7139],[49.9096,27.1859],[50.0408,27.3972],[50.8033,28.0561],[51.06,28.1082],[51.5473,28.1863]
            ]],
            "type": "Polygon"
          }
        },{
          // ПОЛИГОН 9 - Уровень сигнала 53 дБ
          "type": "Feature",
          "properties": { "signal_level": 53 },
          "geometry": {
            "coordinates": [[
              [37.7082,33.5566],[38.1189,33.4545],[38.1189,33.4545],[38.1326,32.7202],[37.9416,31.9923],[37.6188,31.2717],[37.499,31.1005],[37.1882,30.5585],[36.7452,29.9989],[36.63,29.8525],[36.0351,29.2617],[35.9386,29.1537],[35.3438,28.6272],[35.0221,28.4615],[34.6774,28.3334],[34.0202,28.1659],[33.369,28.1107],[32.7196,28.0798],[32.0715,28.1057],[31.4229,28.034],[30.7751,28.0267],[30.1279,27.9712],[29.4795,28.0277],[28.8309,28.0447],[28.1776,28.1926],[27.5216,28.3408],[27.1805,28.4601],[26.8571,28.6104],[26.1863,28.9056],[25.599,29.1579],[25.5087,29.2185],[24.8302,29.4581],[24.1544,29.5984],[23.4847,29.6282],[22.8197,29.5868],[22.1509,29.5727],[21.4763,29.5955],[20.7981,29.6288],[20.1065,29.7449],[19.4091,29.8715],[19.0007,29.9544],[18.6976,30.0618],[17.9704,30.3117],[17.2879,30.697],[17.2641,31.4085],[17.7571,31.615],[18.4151,31.8875],[18.9789,32.0853],[19.0836,32.1021],[19.7613,32.2608],[20.4499,32.3422],[21.1409,32.3976],[21.845,32.3327],[22.5463,32.2642],[23.2539,32.1002],[23.6589,31.9978],[23.9625,31.8726],[24.6644,31.6556],[25.353,31.5531],[26.0325,31.5492],[26.7104,31.5552],[27.3861,31.5904],[28.0611,31.64],[28.7382,31.6245],[29.4144,31.6177],[30.0905,31.5796],[30.7655,31.6394],[31.4413,31.6829],[32.12,31.8699],[32.3381,31.9472],[32.8034,32.1143],[33.4945,32.4477],[33.9303,32.6782],[34.1933,32.8111],[34.896,33.1027],[35.595,33.231],[36.2794,33.4315],[36.3032,33.4397],[37.0059,33.5162],[37.7082,33.5566]
            ]],
            "type": "Polygon"
          }
        },{
          // ПОЛИГОН 10 - Уровень сигнала 53 дБ
          "type": "Feature",
          "properties": { "signal_level": 53 },
          "geometry": {
            "coordinates": [[
              [51.8997,26.6366],[52.5792,26.5035],[53.2279,26.2291],[53.3452,26.165],[53.3452,26.165],[53.8682,25.9132],[54.5355,25.6991],[54.7375,25.5503],[55.1357,25.2096],[55.3235,24.9125],[55.4515,24.2634],[55.2987,23.6097],[54.9035,22.9533],[54.5138,22.5506],[54.1724,22.2921],[53.7115,22.0521],[52.9739,21.8101],[52.2993,21.8591],[51.6784,22.1791],[51.6377,22.2191],[51.2574,22.8447],[51.1713,23.1103],[51.0539,23.4793],[50.9191,24.1205],[50.7862,24.6701],[50.752,24.7656],[50.711,25.4194],[50.9271,26.0865],[51.1228,26.3077],[51.8997,26.6366]
            ]],
            "type": "Polygon"
          }
        }] }
  }
];

// ============ ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ============
let currentStep = 2;
let userLocation = null;
let satelliteData = null;
let mapInstance = null;
let userMarker = null;
let satelliteMarker = null;
let directionLine = null;

function addSatelliteMarker() {
  if (!mapInstance || !window.ymaps) return;

  // Добавляем маркер для спутника на 31°E
  const satCoords31 = [0.0, 31.0]; // долгота, широта
  const satelliteMarker31 = new ymaps.Placemark(satCoords31, {
    balloonContent: 'Turksat 5A (31°E)'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/satellite-icon.png',
    iconImageSize: [32, 32],
    iconImageOffset: [-16, -16]
  });

  // Добавляем маркер для спутника на 42°E
  const satCoords42 = [0.0, 42.0]; // долгота, широта
  const satelliteMarker42 = new ymaps.Placemark(satCoords42, {
    balloonContent: 'Turksat 6A West/Asia/3A East (42°E)'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/satellite-icon.png',
    iconImageSize: [32, 32],
    iconImageOffset: [-16, -16]
  });

  mapInstance.geoObjects.add(satelliteMarker31);
  mapInstance.geoObjects.add(satelliteMarker42);
}

function drawDirectionLine(userLocation, satelliteData) {
  if (!mapInstance || !window.ymaps) return;

  const userCoords = [userLocation.latitude, userLocation.longitude];
  
  // Определяем координаты спутника в зависимости от выбранного спутника
  let satCoords;
  if (satelliteData && satelliteData.name === 'Turksat 5A') {
    satCoords = [0.0, 31.0]; // Спутник на 31°E (долгота, широта)
  } else {
    satCoords = [0.0, 42.0]; // Спутник на 42°E (долгота, широта)
  }

  // Удаляем старую линию, если есть
  if (directionLine) {
    mapInstance.geoObjects.remove(directionLine);
  }

  // Рисуем линию
  directionLine = new ymaps.Polyline([userCoords, satCoords], {}, {
    strokeColor: '#ffffff',     // Цвет линии (белый)
    strokeWidth: 3,             // Толщина
    strokeOpacity: 0.8,         // Прозрачность
    geodesic: true              // Геодезическая линия (кривая по шару Земли)
  });

  mapInstance.geoObjects.add(directionLine);
}

// ============ МАТЕМАТИЧЕСКИЕ ФУНКЦИИ ============
function isPointInPolygon(point, polygon) {
  const [lng, lat] = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    if (((yi > lat) !== (yj > lat)) && (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi)) {
      inside = !inside;
    }
  }
  return inside;
}

function checkSatelliteCoverage(location, satellite) {
  if (!satellite.geoJson || !satellite.geoJson.features) return { isInCoverage: false };
  const point = [location.longitude, location.latitude];
  for (const feature of satellite.geoJson.features) {
    if (feature.geometry.type === 'Polygon' && feature.geometry.coordinates[0].length > 0) {
      if (isPointInPolygon(point, feature.geometry.coordinates[0])) {
        return { isInCoverage: true, signalLevel: feature.properties.signal_level };
      }
    }
  }
  return { isInCoverage: false };
}

function calculateSatelliteParameters(lat, lon, satLon) {
  const latRad = lat * Math.PI / 180;
  const lonRad = lon * Math.PI / 180;
  const satLonRad = satLon * Math.PI / 180;
  const deltaLon = satLonRad - lonRad;
  
  // Расчет азимута (оставляем без изменений)
  const azimuthRad = Math.atan2(Math.sin(deltaLon), Math.cos(latRad) * Math.tan(0) - Math.sin(latRad) * Math.cos(deltaLon));
  let azimuth = azimuthRad * 180 / Math.PI;
  if (azimuth < 0) azimuth += 360;

  // Расчет угла места (оставляем без изменений)
  const distance = Math.acos(Math.cos(latRad) * Math.cos(deltaLon));
  const elevation = Math.atan((Math.cos(distance) - 0.15126) / Math.sin(distance)) * 180 / Math.PI;

  // ИСПРАВЛЕННЫЙ расчет наклона LNB
  let skew;
  if (Math.abs(latRad) < 1e-5) { // обработка случая на экваторе
    skew = (Math.sin(deltaLon) > 0) ? -90 : 90;
  } else {
    // Правильная формула для расчета skew
    skew = Math.atan2(Math.sin(deltaLon), Math.tan(latRad)) * 180 / Math.PI;
    // Корректировка знака для северного полушария
    if (lat > 0) skew = -skew;
  }
  
  // Ограничиваем значение в диапазоне [-90, 90]
  skew = Math.max(-90, Math.min(90, skew));

  return { 
    azimuth: Math.round(azimuth), 
    elevation: Math.round(Math.max(0, elevation)), 
    skew: Math.round(skew) 
  };
}

function getDishSizeBySignalLevel(signalLevel) {
  const roundedLevel = Math.round(signalLevel);
  const clampedLevel = Math.max(41, Math.min(54, roundedLevel));
  return dishSizeTable[clampedLevel] || '100 см';
}

function selectBestSatellite(location) {
  let bestSatellite = null;
  let bestSignalLevel = 0;
  
  for (const satellite of turksatSatellites) {
    const coverage = checkSatelliteCoverage(location, satellite);
    if (coverage.isInCoverage && coverage.signalLevel && coverage.signalLevel > bestSignalLevel) {
      bestSatellite = satellite;
      bestSignalLevel = coverage.signalLevel;
    }
  }
  
  if (!bestSatellite) {
    return { name: 'Вне зоны покрытия', beam: '', longitude: '', azimuth: 0, elevation: 0, skew: 0, 
             frequency: '', symbolRate: '', polarization: '', fec: '', modulation: '', pilot: '', dishSize: '', isInCoverage: false };
  }
  
  const params = calculateSatelliteParameters(location.latitude, location.longitude, bestSatellite.position);
  let signalLevel = bestSignalLevel;
  
  // Корректировка для Москвы
  if (location.latitude > 55 && location.latitude < 56 && location.longitude > 37 && location.longitude < 38) {
    signalLevel = 43;
  }

  const beamName = Object.keys(bestSatellite.beams)[0];
  const beam = bestSatellite.beams[beamName];

  return {
    name: bestSatellite.name, beam: beamName, longitude: `${bestSatellite.position}°E`,
    azimuth: params.azimuth, elevation: params.elevation, skew: params.skew,
    frequency: `${beam.frequency} МГц`, symbolRate: beam.symbolRate, polarization: beam.polarization,
    fec: beam.fec, modulation: beam.modulation, pilot: beam.pilot,
    dishSize: getDishSizeBySignalLevel(signalLevel), signalLevel: signalLevel, isInCoverage: true
  };
}

// ============ ВИЗУАЛИЗАЦИИ АНТЕНН ============
function createAzimuthCompass(containerId, azimuth) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="antenna-container">
      <div class="compass-ring">
        <div class="compass-marks">
          ${[0, 45, 90, 135, 180, 225, 270, 315].map(angle => 
            `<div class="compass-mark" style="transform: translateX(-50%) rotate(${angle}deg)"></div>`
          ).join('')}
        </div>
        <div class="compass-directions">
          <div class="compass-n">N</div><div class="compass-e">E</div>
          <div class="compass-s">S</div><div class="compass-w">W</div>
        </div>
      </div>
      <div class="dish-visual" style="transform: rotate(${azimuth}deg)">
        <div class="dish-center"><div class="dish-lnb"></div></div>
        <div class="dish-pointer"></div>
      </div>
      <div class="value-display">
        <div class="value-number">${azimuth}°</div>
        <div class="value-label">Азимут</div>
      </div>
    </div>`;
}

function createElevationDish(containerId, elevation) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="antenna-container">
      <div style="position: absolute; bottom: 32px; left: 50%; width: 128px; height: 8px; background: #64748b; transform: translateX(-50%); border-radius: 4px;"></div>
      <div style="position: absolute; bottom: 40px; left: 50%; width: 8px; height: 96px; background: #64748b; transform: translateX(-50%);"></div>
      <div style="position: absolute; bottom: 80px; left: 50%; width: 96px; height: 48px; transform: translateX(-50%) rotate(${elevation}deg); transform-origin: center bottom; transition: transform 0.5s;">
        <div style="width: 100%; height: 100%; background: linear-gradient(to bottom right, #22d3ee, #3b82f6); border-radius: 48px 48px 0 0; box-shadow: 0 4px 12px rgba(34, 211, 238, 0.4); position: relative;">
          <div style="position: absolute; top: -8px; left: 50%; width: 12px; height: 24px; background: #1e293b; transform: translateX(-50%); border-radius: 6px 6px 0 0;"></div>
          <div style="position: absolute; top: 50%; left: 50%; width: 32px; height: 4px; background: #64748b; transform: translate(-50%, -50%);"></div>
        </div>
      </div>
      <div class="value-display">
        <div class="value-number">${elevation}°</div>
        <div class="value-label">Угол места</div>
      </div>
    </div>`;
}

function createLNBSkew(containerId, skew) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="antenna-container">
      <div style="position: absolute; top: 50%; left: 50%; width: 128px; height: 80px; background: linear-gradient(to bottom right, #1e293b, #334155); border-radius: 8px; transform: translate(-50%, -50%); box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);">
        <div style="position: absolute; top: 8px; left: 8px; width: 16px; height: 16px; background: #eab308; border-radius: 50%;"></div>
        <div style="position: absolute; top: 8px; right: 8px; width: 16px; height: 16px; background: #ef4444; border-radius: 50%;"></div>
        <div style="position: absolute; bottom: 8px; left: 50%; width: 24px; height: 12px; background: #64748b; border-radius: 4px; transform: translateX(-50%);"></div>
      </div>
      <div style="position: absolute; top: 50%; left: 50%; width: 64px; height: 96px; background: linear-gradient(to bottom right, #3b82f6, #06b6d4); border-radius: 8px; transform: translate(-50%, -50%) rotate(${-skew}deg); box-shadow: 0 8px 16px rgba(59, 130, 246, 0.4); transition: transform 0.5s ease;">
        <div style="position: absolute; top: -4px; left: 50%; width: 32px; height: 12px; background: #cbd5e1; border-radius: 6px 6px 0 0; transform: translateX(-50%);"></div>
        <div style="position: absolute; top: 8px; left: 50%; width: 16px; height: 32px; background: #94a3b8; border-radius: 4px; transform: translateX(-50%);"></div>
        <div style="position: absolute; bottom: 16px; left: 50%; width: 8px; height: 8px; background: #22c55e; border-radius: 50%; transform: translateX(-50%);"></div>
        <div style="position: absolute; bottom: 0; left: 50%; width: 12px; height: 32px; background: #64748b; border-radius: 0 0 4px 4px; transform: translateX(-50%);"></div>
      </div>
      <div class="value-display">
        <div class="value-number">${skew > 0 ? '+' : ''}${skew}°</div>
        <div class="value-label">Наклон LNB</div>
      </div>
    </div>`;
}

// ============ РАБОТА С КАРТОЙ ============
function initializeYandexMap() {
  if (!window.ymaps || !document.getElementById('yandex-map')) return;
  window.ymaps.ready(() => {
    try {
      if (mapInstance) mapInstance.destroy();
      mapInstance = new window.ymaps.Map('yandex-map', {
        center: [42, 35], zoom: 2, type: 'yandex#hybrid',
        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl']
      });
      addSatelliteMarker();

      mapInstance.events.add('click', (e) => {
          const coords = e.get('coords');
          const location = { latitude: coords[0], longitude: coords[1], address: `${coords[0].toFixed(6)}, ${coords[1].toFixed(6)}` };
        
          window.ymaps.geocode(coords).then((res) => {
            const firstGeoObject = res.geoObjects.get(0);
            if (firstGeoObject) location.address = firstGeoObject.getAddressLine();
            handleLocationChange(location);
          }).catch(() => {
            // даже если ошибка — продолжаем
            handleLocationChange(location);
          });
        });


      addCoverageZones();
      hideMapLoading();
    } catch (error) {
      console.error('Ошибка инициализации карты:', error);
      showMapError('Ошибка инициализации карты');
    }
  });
}

function addCoverageZones() {
    if (!mapInstance || !turksatGeneralCoverage) return;
    try {
        const coverage = turksatGeneralCoverage;
        if (coverage.features) {
            coverage.features.forEach((feature) => {
                if (feature.geometry.type === 'Polygon' && feature.geometry.coordinates[0].length > 0) {
                    const coords = feature.geometry.coordinates[0].map(coord => [coord[1], coord[0]]);
                    const signalLevel = feature.properties.signal_level || 35;
                    const colors = getSignalColor(signalLevel);
                    const description = feature.properties.description || '';

                    const polygon = new window.ymaps.Polygon(
                        [coords],
                        {
                            hintContent: `Уровень сигнала - ${signalLevel} дБ - ${description}`
                        },
                        {
                            fillColor: colors.fill,
                            strokeColor: colors.stroke,
                            strokeWidth: 1,
                            strokeOpacity: 0.8,
                            fillOpacity: 0.4
                        }
                    );

                    // Добавляем обработчик клика по зоне покрытия
                    polygon.events.add('click', (e) => {
                        const clickCoords = e.get('coords');
                        const location = {
                            latitude: clickCoords[0],
                            longitude: clickCoords[1],
                            address: `${clickCoords[0].toFixed(6)}, ${clickCoords[1].toFixed(6)}`
                        };

                        window.ymaps.geocode(clickCoords).then((res) => {
                            const firstGeoObject = res.geoObjects.get(0);
                            if (firstGeoObject) {
                                location.address = firstGeoObject.getAddressLine();
                            }
                            handleLocationChange(location);
                        }).catch(() => {
                            handleLocationChange(location);
                        });
                    });

                    mapInstance.geoObjects.add(polygon);
                }
            });
        }
    } catch (error) {
        console.error('Ошибка добавления зон покрытия:', error);
    }
}

function getSignalColor(signalLevel) {
  switch (true) {
    case signalLevel >= 60: return { fill: 'rgba(76, 29, 149, 0.4)', stroke: 'rgba(76, 29, 149, 0.7)' };
    case signalLevel >= 55: return { fill: 'rgba(91, 33, 182, 0.4)', stroke: 'rgba(91, 33, 182, 0.7)' };
    case signalLevel >= 50: return { fill: 'rgba(124, 58, 237, 0.4)', stroke: 'rgba(124, 58, 237, 0.7)' };
    case signalLevel >= 45: return { fill: 'rgba(139, 92, 246, 0.4)', stroke: 'rgba(139, 92, 246, 0.7)' };
    case signalLevel >= 40: return { fill: 'rgba(167, 139, 250, 0.4)', stroke: 'rgba(167, 139, 250, 0.7)' };
    default: return { fill: 'rgba(107, 114, 128, 0.3)', stroke: 'rgba(255, 255, 255, 0.6)' };
  }
}

function updateUserMarker(location) {
  if (!mapInstance) return;
  try {
    if (userMarker) mapInstance.geoObjects.remove(userMarker);
    userMarker = new window.ymaps.Placemark([location.latitude, location.longitude], {
      balloonContent: location.address || 'Ваше местоположение'
    }, { preset: 'islands#redCircleDotIcon', draggable: true });

    userMarker.events.add('dragend', (e) => {
      const coords = e.get('target').geometry.getCoordinates();
      const newLocation = { latitude: coords[0], longitude: coords[1], address: `${coords[0].toFixed(6)}, ${coords[1].toFixed(6)}` };
      window.ymaps.geocode(coords).then((res) => {
        const firstGeoObject = res.geoObjects.get(0);
        if (firstGeoObject) newLocation.address = firstGeoObject.getAddressLine();
        handleLocationChange(newLocation);
      }).catch(() => handleLocationChange(newLocation));
    });

    mapInstance.geoObjects.add(userMarker);
    mapInstance.setCenter([location.latitude, location.longitude], 8);
  } catch (error) {
    console.error('Ошибка обновления маркера:', error);
  }
}

function hideMapLoading() {
  const loading = document.getElementById('map-loading');
  if (loading) loading.style.display = 'none';
}

function showMapError(message) {
  hideMapLoading();
  const mapContainer = document.getElementById('yandex-map');
  if (mapContainer) {
    mapContainer.innerHTML = `<div class="absolute inset-0 flex items-center justify-center glass-card rounded-lg border border-red-500/50">
      <div class="text-center p-6">
        <i data-lucide="alert-circle" class="w-12 h-12 text-red-400 mx-auto mb-4"></i>
        <h4 class="text-red-400 mb-2">Ошибка загрузки карты</h4>
        <p class="text-muted-foreground text-sm">${message}</p>
      </div></div>`;
  }
}

// ============ ОСНОВНАЯ ЛОГИКА ПРИЛОЖЕНИЯ ============
document.addEventListener('DOMContentLoaded', function() {
  if (typeof lucide !== 'undefined') lucide.createIcons();
  updateStepIndicators();
  initializeEventListeners();
  if (window.ymaps) {
    initializeYandexMap();
  } else {
    window.addEventListener('load', () => setTimeout(initializeYandexMap, 1000));
  }
});

function initializeEventListeners() {
    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (burgerBtn) {
      burgerBtn.addEventListener('click', () => {
        if (!mobileMenu) return;
        mobileMenu.classList.toggle('hidden');
    
        const expanded = burgerBtn.getAttribute('aria-expanded') === 'true';
        burgerBtn.setAttribute('aria-expanded', (!expanded).toString());
        mobileMenu.setAttribute('aria-hidden', String(mobileMenu.classList.contains('hidden')));
      });
    }
    
    // Закрывать мобильное меню при клике по ссылке
    if (mobileMenu) {
      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          burgerBtn?.setAttribute('aria-expanded', 'false');
          mobileMenu.setAttribute('aria-hidden', 'true');
        });
      });
    }
    
    // Скрывать мобильное меню при изменении размера (чтобы не осталось открытым на десктопе)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        burgerBtn?.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
    });
    // Навигация по шагам
    document.getElementById('next-step-1')?.addEventListener('click', handleNext);
    document.getElementById('prev-btn')?.addEventListener('click', handlePrev);
    document.getElementById('next-btn')?.addEventListener('click', handleNext);

    // Геолокация
    document.getElementById('get-location')?.addEventListener('click', function() {
        handleGeolocation();
        hideApplyCoordinatesButton();
    });

    // Поиск по адресу
    document.getElementById('search-address')?.addEventListener('click', function() {
        handleAddressSearch();
        hideApplyCoordinatesButton();
    });
    
    document.getElementById('address-input')?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleAddressSearch();
            hideApplyCoordinatesButton();
        }
    });

    // Ручной ввод координат
    document.getElementById('latitude-input')?.addEventListener('input', toggleApplyCoordinatesButton);
    document.getElementById('longitude-input')?.addEventListener('input', toggleApplyCoordinatesButton);
    
    document.getElementById('apply-coordinates')?.addEventListener('click', function() {
        handleApplyCoordinates();
    });

    // Инициализация карты (если используется)
    if (typeof ymaps !== 'undefined') {
        ymaps.ready(initializeYandexMap);
    }

    // Вспомогательные функции для управления кнопкой координат
    function toggleApplyCoordinatesButton() {
        const latInput = document.getElementById('latitude-input');
        const lonInput = document.getElementById('longitude-input');
        const applyBtn = document.getElementById('apply-coordinates');
        
        if (latInput && lonInput && applyBtn) {
            const latValue = latInput.value.trim();
            const lonValue = lonInput.value.trim();
            const latValid = !isNaN(parseFloat(latValue)) && isFinite(latValue);
            const lonValid = !isNaN(parseFloat(lonValue)) && isFinite(lonValue);
            
            if (latValid && lonValid) {
                applyBtn.style.display = 'block';
                applyBtn.disabled = false;
            } else {
                applyBtn.style.display = 'none';
                applyBtn.disabled = true;
            }
        }
    }

    function hideApplyCoordinatesButton() {
        const applyBtn = document.getElementById('apply-coordinates');
        const latInput = document.getElementById('latitude-input');
        const lonInput = document.getElementById('longitude-input');
        
        if (applyBtn) {
            applyBtn.style.display = 'none';
            applyBtn.disabled = true;
        }
        if (latInput) latInput.value = '';
        if (lonInput) lonInput.value = '';
    }
}

function updateStepIndicators() {
  const indicators = document.querySelectorAll('.step-indicator');
  const lines = document.querySelectorAll('.step-line');
  
  indicators.forEach((indicator, index) => {
    const stepId = parseInt(indicator.dataset.step);
    if (currentStep >= stepId) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });

  lines.forEach((line, index) => {
    if (currentStep > index + 1) {
      line.classList.add('active');
    } else {
      line.classList.remove('active');
    }
  });

  const progressBar = document.getElementById('progress-bar');
  const stepDescription = document.getElementById('step-description');
  
  // Обновляем ширину прогресс-бара согласно новым требованиям
  if (progressBar) {
    let progressWidth;
    switch(currentStep) {
      case 1:
        progressWidth = '4%';
        break;
      case 2:
        progressWidth = '52%';
        break;
      case 3:
        progressWidth = '100%';
        break;
      default:
        progressWidth = '5%';
    }
    progressBar.style.width = progressWidth;
  }
  
  if (stepDescription) {
    const descriptions = [
      t('step1Description'),
      t('step2Description'), 
      t('step3Description')
    ];
    stepDescription.textContent = descriptions[currentStep - 1];
  }
}

function showStep(step) {
  document.querySelectorAll('.wizard-step').forEach(el => el.classList.remove('active'));
  const targetStep = document.getElementById(`step-${step}`);
  if (targetStep) targetStep.classList.add('active');
  // Ensure the viewport is at the very top on step change
  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  
  const navigation = document.getElementById('navigation');
  if (navigation) {
    navigation.classList.remove('hidden');
  }
  const prevBtn = document.getElementById('prev-btn');
  if (prevBtn) {
    prevBtn.style.display = step <= 2 ? 'none' : 'inline-flex';
  }
  
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    if (step === 3) {
      nextBtn.style.display = 'none';
    } else {
      nextBtn.style.display = 'inline-flex';
      nextBtn.disabled = !canProceed();
    }
  }
}

function canProceed() {
  switch (currentStep) {
    case 1: return true;
    case 2: return userLocation !== null;
    case 3: return satelliteData !== null && satelliteData.isInCoverage !== false;
    default: return false;
  }
}

function handleNext() {
  if (currentStep < 3 && canProceed()) {
    currentStep++;
    showStep(currentStep);
    updateStepIndicators();
    if (currentStep === 3) {
      generateConfigurationDisplay();
    }
  }
}

function handlePrev() {
  if (currentStep > 2) {
    currentStep--;
    showStep(currentStep);
    updateStepIndicators();
  }
}

function handleLocationChange(location) {
  userLocation = location;
  satelliteData = selectBestSatellite(location);
  updateLocationResult(location);
  updateUserMarker(location);
  drawDirectionLine(location, satelliteData); // Передаем данные о спутнике

  if (currentStep === 3) generateConfigurationDisplay();
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) nextBtn.disabled = !canProceed();
}

// ============ ОБРАБОТЧИКИ ГЕОЛОКАЦИИ ============
function handleGeolocation() {
  const btn = document.getElementById('get-location');
  if (btn) {
    btn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 mr-2 animate-spin"></i>${t('detecting')}`;
    btn.disabled = true;
  }

  if (!navigator.geolocation) {
    showLocationError(t('geolocationNotSupported'));
    resetGeolocationButton();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        address: `${position.coords.latitude.toFixed(6)}, ${position.coords.longitude.toFixed(6)}`
      };
      
      if (window.ymaps) {
        window.ymaps.geocode([location.latitude, location.longitude]).then((res) => {
          const firstGeoObject = res.geoObjects.get(0);
          if (firstGeoObject) location.address = firstGeoObject.getAddressLine();
          handleLocationChange(location);
          hideLocationError();
        }).catch(() => {
          handleLocationChange(location);
          hideLocationError();
        });
      } else {
        handleLocationChange(location);
        hideLocationError();
      }
      
      resetGeolocationButton();
    },
    (error) => {
      let errorMessage = 'Не удалось определить местоположение.';
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = 'Доступ к геолокации запрещен. Разрешите доступ в настройках браузера.';
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = 'Информация о местоположении недоступна.';
          break;
        case error.TIMEOUT:
          errorMessage = 'Время ожидания определения местоположения истекло.';
          break;
      }
      showLocationError(errorMessage);
      resetGeolocationButton();
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 300000 }
  );
}

function resetGeolocationButton() {
  const btn = document.getElementById('get-location');
  if (btn) {
    btn.innerHTML = `<i data-lucide="crosshair" class="w-4 h-4 mr-2"></i>${t('locationDetected')}`;
    btn.disabled = false;
    lucide.createIcons();
  }
}

function handleAddressSearch() {
  const addressInput = document.getElementById('address-input');
  const address = addressInput?.value?.trim();
  if (!address) return;

  // Проверяем, доступен ли ymaps
  if (typeof ymaps === 'undefined') {
    console.error('Яндекс.Карты не загружены');
    return;
  }

  // Ждём полной готовности
  ymaps.ready(() => {
    console.log('Ищем адрес через геокод:', address);

    ymaps.geocode(address).then(res => {
      const geoObject = res.geoObjects.get(0);
      if (!geoObject) {
        console.log('Геообъект не найден');
        return;
      }

      const coords = geoObject.geometry.getCoordinates();
      const location = {
        latitude: coords[0],
        longitude: coords[1],
        address: geoObject.getAddressLine()
      };

      console.log('Адрес найден:', location);
      handleLocationChange(location);
    }).catch(err => {
      console.error('Ошибка при геокодировании:', err);
    });
  });
}


function handleApplyCoordinates() {
  const lat = parseFloat(document.getElementById('latitude-input').value.trim());
  const lon = parseFloat(document.getElementById('longitude-input').value.trim());
  if (isNaN(lat) || isNaN(lon)) return;

  const location = { latitude: lat, longitude: lon, address: `${lat.toFixed(6)}, ${lon.toFixed(6)}` };

  window.ymaps.geocode([lat, lon]).then((res) => {
    const geoObject = res.geoObjects.get(0);
    if (geoObject) location.address = geoObject.getAddressLine();
    handleLocationChange(location);
  }).catch(() => {
    handleLocationChange(location);
  });
}

// ============ ИНТЕРФЕЙС ============
function showLocationError(message) {
  const errorEl = document.getElementById('location-error');
  const messageEl = document.getElementById('error-message');
  if (errorEl && messageEl) {
    messageEl.textContent = message;
    errorEl.classList.remove('hidden');
  }
}

function hideLocationError() {
  const errorEl = document.getElementById('location-error');
  if (errorEl) errorEl.classList.add('hidden');
}

function updateLocationResult(location) {
  const resultEl = document.getElementById('location-result');
  const latEl = document.getElementById('result-latitude');
  const lonEl = document.getElementById('result-longitude');
  const addressEl = document.getElementById('result-address');
  
  if (resultEl) resultEl.classList.remove('hidden');
  if (latEl) latEl.textContent = `${location.latitude.toFixed(6)}°`;
  if (lonEl) lonEl.textContent = `${location.longitude.toFixed(6)}°`;
  if (addressEl && location.address) addressEl.textContent = location.address;
}

// ============ ГЕНЕРАЦИЯ КОНФИГУРАЦИИ ============
function generateConfigurationDisplay() {
  const container = document.getElementById('step-3');
  if (!container || !satelliteData || !userLocation) return;

  if (satelliteData.isInCoverage === false || satelliteData.name === 'Вне зоны покрытия') {
    generateOutOfCoverageDisplay(container);
    return;
  }

  container.innerHTML = `
    <div class="space-y-6">
      <!-- Header -->
      <div style="border-bottom:1px solid var(--white-12);padding-bottom:1.5rem;margin-bottom:1rem">
        <h2 style="margin-bottom:.25rem">${t('setupReady')}</h2>
        <p class="text-muted-foreground text-sm">${t('optimalSettings')}</p>
      </div>

      <!-- Satellite + Location info -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="glass-card p-6">
          <h3 style="margin-bottom:1rem;font-size:.9rem">${t('satelliteInfo')}</h3>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-muted-foreground text-sm">${t('satellite')}</span>
              <span style="color:var(--signal);font-weight:600">${satelliteData.name}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-muted-foreground text-sm">${t('position')}</span>
              <span>${satelliteData.longitude}</span>
            </div>
            ${satelliteData.signalLevel ? `
            <div class="flex justify-between items-center">
              <span class="text-muted-foreground text-sm">${t('signalLevel')}</span>
              <span>${satelliteData.signalLevel} dB</span>
            </div>` : ''}
            <div class="flex justify-between items-center">
              <span class="text-muted-foreground text-sm">${t('dishSize')}</span>
              <span>${satelliteData.dishSize}</span>
            </div>
          </div>
        </div>
        <div class="glass-card p-6">
          <h3 style="margin-bottom:1rem;font-size:.9rem">${t('yourLocation')}</h3>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-muted-foreground text-sm">${t('latitudeLabel')}</span>
              <span style="color:var(--signal)">${userLocation.latitude.toFixed(6)}°</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-muted-foreground text-sm">${t('longitudeLabel')}</span>
              <span style="color:var(--signal)">${userLocation.longitude.toFixed(6)}°</span>
            </div>
            ${userLocation.address ? `
            <div>
              <span class="text-muted-foreground text-sm">${t('addressLabel')}</span>
              <p class="text-sm" style="margin-top:.25rem">${userLocation.address}</p>
            </div>` : ''}
          </div>
        </div>
      </div>

      <!-- Antenna settings -->
      <div style="border-top:1px solid var(--white-12);padding-top:1.5rem">
        <h3 style="margin-bottom:1.5rem">${t('antennaSettings')}</h3>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-0" style="border:1px solid var(--white-12)">
          <div style="padding:2rem;text-align:center;border-right:1px solid var(--white-12)">
            <div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--signal);margin-bottom:1.25rem">${t('azimuth')}</div>
            <div style="font-family:var(--syne);font-size:clamp(2.5rem,5vw,3.5rem);font-weight:700;color:var(--white);line-height:1;letter-spacing:-.03em">${satelliteData.azimuth}<span style="font-size:.5em;color:var(--signal)">°</span></div>
            <div style="margin-top:1.25rem;font-size:.8rem;color:var(--white-30)">${t('rotateHorizontal')}</div>
          </div>
          <div style="padding:2rem;text-align:center;border-right:1px solid var(--white-12)">
            <div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--signal);margin-bottom:1.25rem">${t('elevation')}</div>
            <div style="font-family:var(--syne);font-size:clamp(2.5rem,5vw,3.5rem);font-weight:700;color:var(--white);line-height:1;letter-spacing:-.03em">${satelliteData.elevation}<span style="font-size:.5em;color:var(--signal)">°</span></div>
            <div style="margin-top:1.25rem;font-size:.8rem;color:var(--white-30)">${t('raiseLower')}</div>
          </div>
          <div style="padding:2rem;text-align:center">
            <div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--signal);margin-bottom:1.25rem">${t('lnbSkew')}</div>
            <div style="font-family:var(--syne);font-size:clamp(2.5rem,5vw,3.5rem);font-weight:700;color:var(--white);line-height:1;letter-spacing:-.03em">${satelliteData.skew > 0 ? '+' : ''}${satelliteData.skew}<span style="font-size:.5em;color:var(--signal)">°</span></div>
            <div style="margin-top:1.25rem;font-size:.8rem;color:var(--white-30)">${t('rotateLNB')}</div>
          </div>
        </div>
      </div>

      <!-- Technical parameters -->
      <div style="border-top:1px solid var(--white-12);padding-top:1.5rem">
        ${generateTechnicalParameters()}
      </div>

      <!-- Setup guide -->
      <div style="border-top:1px solid var(--white-12);padding-top:1.5rem">
        <h3 style="margin-bottom:.5rem">${t('completeGuide')}</h3>
        <p class="text-muted-foreground text-sm" style="margin-bottom:1.5rem">${t('stepByStep')}</p>

        <div class="glass-card p-6" style="margin-bottom:1rem">
          <p class="text-sm">${t('generalInfoText')}</p>
          <p class="text-sm text-muted-foreground" style="margin-top:.75rem;font-style:italic">${t('recommendProfessionals')}</p>
        </div>

        <div class="space-y-4">
          <div class="glass-card p-6">
            <h4 style="margin-bottom:.75rem;display:flex;align-items:center;gap:.75rem">
              <span style="width:1.75rem;height:1.75rem;border:1px solid var(--signal);display:flex;align-items:center;justify-content:center;font-size:.7rem;color:var(--signal);flex-shrink:0">0</span>
              ${t('step0Title')}
            </h4>
            <ul class="space-y-2 text-sm list-disc pl-5 text-muted-foreground">
              <li>${t('step0InstallDish')}</li>
              <li>${t('step0ChooseLocation')}</li>
              <li>${t('step0Amplifier')}</li>
            </ul>
          </div>

          <div class="glass-card p-6">
            <div style="display:grid;grid-template-columns:1fr auto;gap:1.5rem;align-items:start">
              <div>
                <h4 style="margin-bottom:.75rem;display:flex;align-items:center;gap:.75rem">
                  <span style="width:1.75rem;height:1.75rem;border:1px solid var(--signal);display:flex;align-items:center;justify-content:center;font-size:.7rem;color:var(--signal);flex-shrink:0">1</span>
                  ${t('step1Title')}
                </h4>
                <ul class="space-y-2 text-sm list-disc pl-5 text-muted-foreground">
                  <li>${t('step1EnterMenu')}</li>
                  <li>${t('step1FindSection')}</li>
                  <li>${t('step1EnterParameters')}
                    <ul style="margin-top:.5rem;list-style:none;padding-left:0">
                      <li style="padding:.2rem 0">Frequency: <strong>${satelliteData.frequency}</strong></li>
                      <li style="padding:.2rem 0">Polarization: <strong>${satelliteData.polarization}</strong></li>
                      <li style="padding:.2rem 0">Symbol Rate: <strong>${satelliteData.symbolRate}</strong></li>
                      <li style="padding:.2rem 0">Modulation: <strong>${satelliteData.modulation}</strong></li>
                      <li style="padding:.2rem 0">FEC: <strong>${satelliteData.fec}</strong></li>
                      <li style="padding:.2rem 0">Pilot: <strong>${satelliteData.pilot}</strong></li>
                      <li style="padding:.2rem 0">${t('step1LnbLowBand')}</li>
                      <li style="padding:.2rem 0">${t('step1LnbHighBand')}</li>
                    </ul>
                  </li>
                  <li>${t('step1SignalBars')}</li>
                </ul>
              </div>
              <img src="img/screen1.png" alt="Receiver" style="max-width:180px;border:1px solid var(--white-12)">
            </div>
          </div>

          <div class="glass-card p-6">
            <div style="display:grid;grid-template-columns:1fr auto;gap:1.5rem;align-items:start">
              <div>
                <h4 style="margin-bottom:.75rem;display:flex;align-items:center;gap:.75rem">
                  <span style="width:1.75rem;height:1.75rem;border:1px solid var(--signal);display:flex;align-items:center;justify-content:center;font-size:.7rem;color:var(--signal);flex-shrink:0">2</span>
                  ${t('azimuthAdjustment')} (${satelliteData.azimuth}°)
                </h4>
                <ul class="space-y-2 text-sm list-disc pl-5 text-muted-foreground">
                  <li>${t('step2LoosenBolts')}</li>
                  <li>${t('step2MoveLeftRight')}</li>
                  <li>${t('step2TightenBolts')}</li>
                </ul>
              </div>
              <img src="img/screen2.png" alt="Azimuth" style="max-width:180px;border:1px solid var(--white-12)">
            </div>
          </div>

          <div class="glass-card p-6">
            <div style="display:grid;grid-template-columns:1fr auto;gap:1.5rem;align-items:start">
              <div>
                <h4 style="margin-bottom:.75rem;display:flex;align-items:center;gap:.75rem">
                  <span style="width:1.75rem;height:1.75rem;border:1px solid var(--signal);display:flex;align-items:center;justify-content:center;font-size:.7rem;color:var(--signal);flex-shrink:0">3</span>
                  ${t('elevationAdjustment')} (${satelliteData.elevation}°)
                </h4>
                <ul class="space-y-2 text-sm list-disc pl-5 text-muted-foreground">
                  <li>${t('step3RaiseDish')} ${satelliteData.elevation}°</li>
                  <li>${t('step3AdjustAngle')}</li>
                  <li>${t('step3FixPosition')}</li>
                </ul>
              </div>
              <img src="img/screen3.png" alt="Elevation" style="max-width:180px;border:1px solid var(--white-12)">
            </div>
          </div>

          <div class="glass-card p-6">
            <div style="display:grid;grid-template-columns:1fr auto;gap:1.5rem;align-items:start">
              <div>
                <h4 style="margin-bottom:.75rem;display:flex;align-items:center;gap:.75rem">
                  <span style="width:1.75rem;height:1.75rem;border:1px solid var(--signal);display:flex;align-items:center;justify-content:center;font-size:.7rem;color:var(--signal);flex-shrink:0">4</span>
                  ${t('lnbAdjustment')} (${satelliteData.skew > 0 ? '+' : ''}${satelliteData.skew}°)
                </h4>
                <ul class="space-y-2 text-sm list-disc pl-5 text-muted-foreground">
                  <li>${t('step4RotateConverter')} ${satelliteData.skew}° (${satelliteData.skew > 0 ? t('clockwise') : t('counterclockwise')})</li>
                  <li>${t('step4AdjustAngle')}</li>
                  <li>${t('step4FixPosition')}</li>
                  <li>${t('step4OldLnbNote')}</li>
                </ul>
              </div>
              <img src="img/screen4.png" alt="LNB" style="max-width:180px;border:1px solid var(--white-12)">
            </div>
          </div>
        </div>
      </div>

      <!-- Troubleshooting -->
      <div class="glass-card p-6">
        <h3 style="margin-bottom:.75rem">${t('troubleshootingOldLnb')}</h3>
        <p class="text-sm" style="margin-bottom:1rem">${t('troubleshootingIntro')}</p>
        <p class="text-sm" style="margin-bottom:1rem;color:var(--signal)">${t('bestSolutionReplace')} ${t('temporarySolution')}</p>
        <ol class="space-y-2 text-sm list-decimal pl-5 text-muted-foreground">
          <li>${t('tsStep1')}</li>
          <li>${t('tsStep2')}</li>
          <li>${t('tsStep3')}</li>
          <li>${t('tsStep4')}</li>
          <li>${t('tsStep5')}</li>
        </ol>
      </div>

      <!-- Important notes -->
      <div class="glass-card p-6">
        <h3 style="margin-bottom:.75rem">${t('importantNotesTitle')}</h3>
        <ul class="space-y-2 text-sm list-disc pl-5 text-muted-foreground">
          <li>${t('noteQualityCable')}</li>
          <li>${t('noteAmplifierLong')}</li>
          <li>${t('noteOldReceiversFirmware')}</li>
          <li>${t('noteAvoidInterference')}</li>
          <li>${t('noteCheckCorrosion')}</li>
        </ul>
      </div>

      <!-- Download -->
      ${generateDownloadSection()}
    </div>`;

  lucide.createIcons();
}


function generateOutOfCoverageDisplay(container) {
  container.innerHTML = `
    <div class="glass-card p-6" style="border-color:rgba(239,68,68,.3)">
      <h2 style="margin-bottom:.75rem;color:#f87171">${t('outOfCoverage')}</h2>
      <p class="text-sm" style="margin-bottom:1rem;color:rgba(239,68,68,.7)">${t('outOfCoverageText')}</p>
      <p class="text-sm text-muted-foreground">
        ${t('yourLocation')}: ${userLocation.address || `${userLocation.latitude.toFixed(4)}°, ${userLocation.longitude.toFixed(4)}°`}
      </p>
    </div>`;
  lucide.createIcons();
}

function generateTechnicalParameters() {
  const params = [
    { name: t('frequency'), value: satelliteData.frequency, icon: 'signal', class: 'purple' },
    { name: t('symbolRate'), value: satelliteData.symbolRate, icon: 'waves', class: 'cyan' },
    { name: t('polarization'), value: satelliteData.polarization, icon: 'rotate-ccw', class: 'emerald' },
    { name: t('fec'), value: satelliteData.fec, icon: 'target', class: 'orange' },
    { name: t('modulation'), value: satelliteData.modulation, icon: 'monitor', class: 'pink' },
    { name: t('pilot'), value: satelliteData.pilot, icon: 'navigation', class: 'amber' }
  ];

  return `
    <h3 style="margin-bottom:1rem">${t('technicalParameters')}</h3>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      ${params.map(param => `
        <div class="glass-card p-4">
          <div class="text-sm text-muted-foreground" style="margin-bottom:.25rem">${param.name}</div>
          <div style="color:var(--signal);font-weight:600">${param.value}</div>
        </div>
      `).join('')}
    </div>`;
}

function generateDownloadSection() {
  return `
    <div class="glass-card p-6">
      <h3 style="margin-bottom:1rem">${t('downloadInstructions')}</h3>
      <p class="text-muted-foreground text-sm" style="margin-bottom:1.5rem">${t('getInstructions')}</p>
      <div class="flex gap-4" style="flex-wrap:wrap">
        <button onclick="downloadInstructions()" class="btn-primary" style="flex:1;min-width:200px">
          ${t('downloadTxt')}
        </button>
        <button onclick="shareInstructions()" class="btn-outline" style="flex:1;min-width:200px">
          ${t('share')}
        </button>
      </div>
      <p class="text-sm text-muted-foreground" style="margin-top:1rem">${t('doneText')}</p>
    </div>`;
}

// ============ ЭКСПОРТ ДАННЫХ ============
function generateInstructions() {
  if (!satelliteData || !userLocation) return '';

  const lines = [];

  lines.push(`${t('instructionsTitle').toUpperCase()}`);
  lines.push('====================================================');
  lines.push('');

  lines.push(`[${t('generalInfo')}]`);
  lines.push(t('generalInfoText'));
  lines.push(`- ${t('satDish')} (${t('dishSize')}: ${satelliteData.dishSize})`);
  lines.push(`- ${t('converterLNB')}`);
  lines.push(`- ${t('satReceiver')}`);
  lines.push('');
  lines.push(`${t('recommendedSignalLevel')}: ${satelliteData.signalLevel} dB`);
  lines.push('');

  lines.push(`[${t('technicalParameters')}]`);
  lines.push(`${t('satellite')} ${satelliteData.name} (${satelliteData.longitude})`);
  lines.push(`${t('beamLabel')} ${satelliteData.beam}`);
  lines.push('---------------------------------');
  lines.push(`• ${t('frequency')}: ${satelliteData.frequency}`);
  lines.push(`• ${t('symbolRate')}: ${satelliteData.symbolRate}`);
  lines.push(`• ${t('polarization')}: ${satelliteData.polarization}`);
  lines.push(`• ${t('fec')}: ${satelliteData.fec}`);
  lines.push(`• ${t('modulation')}: ${satelliteData.modulation}`);
  lines.push(`• ${t('pilot')}: ${satelliteData.pilot}`);
  lines.push('');

  lines.push(`[${t('stepByStepSetupTitle')}]`);
  lines.push('');

  lines.push(`${t('step0Title')}`);
  lines.push('-----------------');
  lines.push(`1. ${t('step0InstallDish')}`);
  lines.push(`2. ${t('step0ChooseLocation')}`);
  lines.push(`3. ${t('step0Amplifier')}`);
  lines.push('');

  lines.push(`${t('azimuthAdjustment')} (${satelliteData.azimuth}°)`);
  lines.push('---------------------------------------------------');
  lines.push(`1. ${t('step2LoosenBolts')}`);
  lines.push(`2. ${t('step2MoveLeftRight')}`);
  lines.push(`3. ${t('step2TightenBolts')}`);
  lines.push('');

  lines.push(`${t('elevationAdjustment')} (${satelliteData.elevation}°)`);
  lines.push('--------------------------------------------------------');
  lines.push(`1. ${t('step3RaiseDish')}`);
  lines.push(`2. ${t('step3AdjustAngle')}`);
  lines.push(`3. ${t('step3FixPosition')}`);
  lines.push('');

  lines.push(`${t('lnbAdjustment')} (${satelliteData.skew > 0 ? '+' : ''}${satelliteData.skew}°)`);
  lines.push('-------------------------------------------------------------------------------');
  lines.push(`1. ${t('step4RotateConverter')}`);
  lines.push(`2. ${t('step4AdjustAngle')}`);
  lines.push(`3. ${t('step4FixPosition')}`);
  lines.push(`4. ${t('step4OldLnbNote')}`);
  lines.push('');

  lines.push(`[${t('troubleshootingOldLnb')}]`);
  lines.push(t('troubleshootingIntro'));
  lines.push(`1. ${t('tsStep1')}`);
  lines.push(`2. ${t('tsStep2')}`);
  lines.push(`3. ${t('tsStep3')}`);
  lines.push(`4. ${t('tsStep4')}`);
  lines.push(`5. ${t('tsStep5')}`);
  lines.push('');

  lines.push(`[${t('importantNotesTitle')}]`);
  lines.push(`• ${t('noteQualityCable')}`);
  lines.push(`• ${t('noteAmplifierLong')}`);
  lines.push(`• ${t('noteOldReceiversFirmware')}`);
  lines.push(`• ${t('noteAvoidInterference')}`);
  lines.push(`• ${t('noteCheckCorrosion')}`);
  lines.push('');

  lines.push(`${t('locationLabel')}: ${userLocation.address || `${userLocation.latitude.toFixed(4)}°, ${userLocation.longitude.toFixed(4)}°`}`);

  return lines.join('\n');
}


function downloadInstructions() {
  const instructions = generateInstructions();
  const blob = new Blob([instructions], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `turksat-setup-${userLocation?.address?.replace(/[^a-zA-Z0-9]/g, '-') || 'instructions'}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// function printInstructions() {
//   const instructions = generateInstructions();
//   const printWindow = window.open('', '_blank');
//   if (printWindow) {
//     printWindow.document.write(`<html><head><title>${t('instructionsTitle')}</title>
//       <style>body { font-family: monospace; margin: 20px; line-height: 1.6; }
//       h1 { color: #333; } pre { white-space: pre-wrap; }</style></head>
//       <body><pre>${instructions}</pre></body></html>`);
//     printWindow.document.close();
//     printWindow.print();
//   }
// }

function shareInstructions() {
  const instructions = generateInstructions();
  if (navigator.share) {
    navigator.share({ title: t('instructionsTitle'), text: instructions, }).catch(() => copyToClipboard(instructions));
  } else {
    copyToClipboard(instructions);
  }
}

// function emailInstructions() {
//   const instructions = generateInstructions();
//   const subject = encodeURIComponent(t('instructionsTitle'));
//   const body = encodeURIComponent(instructions);
//   window.open(`mailto:?subject=${subject}&body=${body}`);
// }

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => alert(t('instructionsCopied')));
  } else {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      alert(t('instructionsCopied'));
    } catch (err) {
              alert(t('clipboardFailed'));
    }
    document.body.removeChild(textArea);
  }
}

// ===== Cookie consent and Yandex.Metrica loader =====
(function(){
  const CONSENT_KEY = 'cookieConsent';
  const CONSENT_TS_KEY = 'cookieConsentTs';
  const METRICA_ID = 105121933;
  const texts = {
    en: { notice: 'We use cookies for Yandex.Metrica analytics to improve the site. By clicking Accept, you agree to the use of cookies.', accept: 'Accept', decline: 'Decline' },
    ru: { notice: 'Мы используем cookie для аналитики Yandex.Metrica, чтобы улучшать сайт. Нажимая «Согласен», вы разрешаете использование cookie.', accept: 'Согласен', decline: 'Отклонить' },
    tr: { notice: 'Siteyi geliştirmek için Yandex.Metrica analitiği amacıyla çerezler kullanıyoruz. Kabul ederek çerez kullanımını onaylıyorsunuz.', accept: 'Kabul Et', decline: 'Reddet' }
  };

  function getLang(){ try { return (document.documentElement.lang || 'en').slice(0,2); } catch(e){ return 'en'; } }
  function isAccepted(){ try { return localStorage.getItem(CONSENT_KEY) === 'accepted'; } catch(e){ return false; } }
  function saveConsent(v){ try { localStorage.setItem(CONSENT_KEY, v); localStorage.setItem(CONSENT_TS_KEY, String(Date.now())); } catch(e){} }

  function injectMetrica(){
    if (!isAccepted()) return;
    if (typeof ym === 'function') { try { ym(METRICA_ID, 'init', { ssr:true, clickmap:true, ecommerce:'dataLayer', accurateTrackBounce:true, trackLinks:true }); } catch(e){} return; }
    var r = 'https://mc.yandex.ru/metrika/tag.js?id='+METRICA_ID;
    for (var j=0;j<document.scripts.length;j++){ if (document.scripts[j].src === r) { return; } }
    var s = document.createElement('script'); s.async = 1; s.src = r;
    var a = document.getElementsByTagName('script')[0];
    (a && a.parentNode ? a.parentNode : document.head).insertBefore(s, a || null);
    s.addEventListener('load', function(){ if (typeof ym === 'function') { try { ym(METRICA_ID, 'init', { ssr:true, clickmap:true, ecommerce:'dataLayer', accurateTrackBounce:true, trackLinks:true }); } catch(e){} } });
  }

  function showBanner(){
    if (isAccepted() || document.getElementById('cookie-banner')) return;
    var div = document.createElement('div');
    div.id = 'cookie-banner';
    div.className = 'cookie-banner';
    document.body.appendChild(div);
    updateBannerTexts();
  }
  function hideBanner(){ var el = document.getElementById('cookie-banner'); if (el && el.parentNode) el.parentNode.removeChild(el); }

  function updateBannerTexts(){
    var el = document.getElementById('cookie-banner');
    if (!el) return;
    var lang = texts[getLang()] ? getLang() : 'en';
    var tx = texts[lang] || texts.en;
    el.innerHTML = '<p>'+tx.notice+' ' +
      '<a href="privacy.html">'+ (typeof t==='function'? t('privacyPolicy') : 'Privacy Policy') +'</a> · ' +
      '<a href="cookies.html">'+ (typeof t==='function'? t('cookiePolicy') : 'Cookie Policy') +'</a> · ' +
      '<a href="terms.html">'+ (typeof t==='function'? t('termsOfUse') : 'Terms of Use') +'</a>' +
      '</p>'+
      '<div class="cookie-actions">'+
        '<button id="cookie-accept" class="cookie-btn cookie-btn-primary">'+tx.accept+'</button>'+
        '<button id="cookie-decline" class="cookie-btn">'+tx.decline+'</button>'+
      '</div>';
    var acc = document.getElementById('cookie-accept');
    var dec = document.getElementById('cookie-decline');
    if (acc) acc.addEventListener('click', function(){ saveConsent('accepted'); hideBanner(); injectMetrica(); });
    if (dec) dec.addEventListener('click', function(){ saveConsent('declined'); hideBanner(); });
  }

  document.addEventListener('DOMContentLoaded', function(){
    if (isAccepted()) { injectMetrica(); }
    else { showBanner(); }
  });

  // Re-render cookie banner texts when site language changes
  (function(){
    var orig = window.changeLanguage;
    window.changeLanguage = function(lang){
      if (typeof orig === 'function') orig(lang);
      try {
        if (isAccepted()) return; // nothing to update if consent decided
        if (!document.getElementById('cookie-banner')) { showBanner(); return; }
        updateBannerTexts();
      } catch(e) {}
    };
  })();

  // React to changes of <html lang="..."> via MutationObserver as a fallback
  try {
    var mo = new MutationObserver(function(muts){
      for (var i=0;i<muts.length;i++){
        if (muts[i].type === 'attributes' && muts[i].attributeName === 'lang'){
          if (!isAccepted()) updateBannerTexts();
        }
      }
    });
    mo.observe(document.documentElement, { attributes:true, attributeFilter:['lang'] });
  } catch(e){}
})();

// Инициализация при переходе к шагу
window.addEventListener('load', () => {
  initLanguage();
  showStep(2);
});
