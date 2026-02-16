export type Locale = "en" | "ko" | "ja" | "zh" | "es" | "vi" | "th" | "de" | "fr" | "pt" | "ar" | "hi" | "id" | "ru" | "tr";

export interface Translations {
    nav: { noDataStored: string; sslEncrypted: string; upgrade: string };
    hero: { title: string; subtitle: string };
    upload: { heading: string; cameraSupported: string; dropHere: string; orClickToBrowse: string; fileTypes: string; maxSize: string; change: string; imageOnly: string; fileTooLarge: string };
    analyze: { button: string; analyzing: string; error: string };
    stats: { avgTime: string; avgLabel: string; anyLang: string; anyLangLabel: string; export: string; exportLabel: string };
    result: { placeholder: string; placeholderSub: string; heading: string; copy: string; copied: string; aiAnalyzing: string; summary: string; actionItems: string; keyNotes: string };
    trust: { soc2: string; encrypted: string; countries: string; gdpr: string };
    pricing: { title: string; subtitle: string; free: string; freeDesc: string; starter: string; starterDesc: string; pro: string; proDesc: string; bestValue: string; currentPlan: string; getStarted: string; upgradeBtn: string; perMonth: string; scansPerDay: string; scansPerMonth: string; unlimited: string; clipboardCopy: string; pdfTxtExport: string; priority: string; cancel: string; payments: string };
    limit: { title: string; message: string; upgrade: string; remaining: string };
    footer: { copyright: string; dataNotStored: string };
}

export const locales: Record<Locale, { flag: string; label: string }> = {
    en: { flag: "🇺🇸", label: "English" },
    ko: { flag: "🇰🇷", label: "한국어" },
    ja: { flag: "🇯🇵", label: "日本語" },
    zh: { flag: "🇨🇳", label: "中文" },
    es: { flag: "🇪🇸", label: "Español" },
    vi: { flag: "🇻🇳", label: "Tiếng Việt" },
    th: { flag: "🇹🇭", label: "ภาษาไทย" },
    de: { flag: "🇨🇭", label: "Deutsch (CH)" },
    fr: { flag: "🇫🇷", label: "Français" },
    pt: { flag: "🇧🇷", label: "Português" },
    ar: { flag: "🇸🇦", label: "العربية" },
    hi: { flag: "🇮🇳", label: "हिन्दी" },
    id: { flag: "🇮🇩", label: "Bahasa" },
    ru: { flag: "🇷🇺", label: "Русский" },
    tr: { flag: "🇹🇷", label: "Türkçe" },
};

export const translations: Record<Locale, Translations> = {
    // ─── English ───
    en: {
        nav: { noDataStored: "No data stored", sslEncrypted: "SSL Encrypted", upgrade: "Upgrade" },
        hero: { title: "Your handwriting deserves\nbetter than a blurry photo.", subtitle: "Snap a photo of your notes — our AI structures them into clean, actionable documents.\nWorks with any language, any handwriting." },
        upload: { heading: "📸 Upload Image", cameraSupported: "Camera supported", dropHere: "Drop your note photo here", orClickToBrowse: "or click to browse files", fileTypes: "JPG · PNG · HEIC", maxSize: "Max 10 MB", change: "Change", imageOnly: "Only image files are supported.", fileTooLarge: "File size must be under 10 MB." },
        analyze: { button: "✏️ Organize with AI", analyzing: "Analyzing...", error: "⚠️ Error:" },
        stats: { avgTime: "~3s", avgLabel: "Avg. analysis", anyLang: "🌏", anyLangLabel: "Any language", export: "📤", exportLabel: "Copy · TXT · PDF" },
        result: { placeholder: "Results will appear here", placeholderSub: "Upload a note on the left, then click \"Organize with AI\"", heading: "Analysis Results", copy: "Copy", copied: "Copied", aiAnalyzing: "AI is analyzing your notes...", summary: "Summary", actionItems: "Action Items", keyNotes: "Key Notes" },
        trust: { soc2: "SOC 2 Compliant", encrypted: "End-to-end encrypted", countries: "190+ countries", gdpr: "GDPR Ready" },
        pricing: { title: "Simple, transparent pricing", subtitle: "Start free. Upgrade when you need more.", free: "Free", freeDesc: "Try it out, no card required", starter: "Starter", starterDesc: "For individuals & students", pro: "Pro", proDesc: "For teams & power users", bestValue: "Best Value", currentPlan: "Current Plan", getStarted: "Get Started →", upgradeBtn: "Upgrade →", perMonth: "/mo", scansPerDay: "3 scans per day", scansPerMonth: "100 scans per month", unlimited: "Unlimited scans", clipboardCopy: "Clipboard copy", pdfTxtExport: "PDF / TXT export", priority: "Priority processing", cancel: "Cancel anytime", payments: "Visa · Mastercard · Amex · PayPal · Apple Pay · Google Pay" },
        limit: { title: "Daily limit reached", message: "You've used all 3 free scans for today. Upgrade to continue.", upgrade: "Upgrade for Unlimited →", remaining: "scans remaining today" },
        footer: { copyright: "© 2026 MemoFlow AI · Powered by Gemini", dataNotStored: "Your data is never stored" },
    },
    // ─── 한국어 ───
    ko: {
        nav: { noDataStored: "데이터 저장 없음", sslEncrypted: "SSL 암호화", upgrade: "업그레이드" },
        hero: { title: "당신의 악필은 죄가 없습니다.", subtitle: "메모 사진 한 장이면, AI가 깔끔한 디지털 문서로 변환해 드립니다.\n어떤 언어, 어떤 글씨체든 상관없습니다." },
        upload: { heading: "📸 이미지 업로드", cameraSupported: "카메라 지원", dropHere: "메모 사진을 올려주세요", orClickToBrowse: "또는 클릭하여 파일 선택", fileTypes: "JPG · PNG · HEIC", maxSize: "최대 10MB", change: "다시 선택", imageOnly: "이미지 파일만 업로드할 수 있습니다.", fileTooLarge: "파일 크기는 10MB 이하만 가능합니다." },
        analyze: { button: "✏️ AI로 정리하기", analyzing: "분석 중...", error: "⚠️ 오류:" },
        stats: { avgTime: "~3초", avgLabel: "평균 분석 시간", anyLang: "🌏", anyLangLabel: "모든 언어 지원", export: "📤", exportLabel: "복사 · TXT · PDF" },
        result: { placeholder: "분석 결과가 여기에 표시됩니다", placeholderSub: "왼쪽에서 메모를 업로드하고 'AI로 정리하기'를 클릭하세요", heading: "분석 결과", copy: "복사", copied: "복사됨", aiAnalyzing: "AI가 메모를 분석하고 있어요...", summary: "주요 요약", actionItems: "실행할 일", keyNotes: "중요 참고사항" },
        trust: { soc2: "SOC 2 준수", encrypted: "종단간 암호화", countries: "190개국 이상", gdpr: "GDPR 준비 완료" },
        pricing: { title: "심플하고 투명한 요금제", subtitle: "무료로 시작하세요. 더 필요하면 업그레이드.", free: "Free", freeDesc: "카드 없이 바로 시작", starter: "Starter", starterDesc: "개인 사용자 & 학생용", pro: "Pro", proDesc: "팀 & 파워유저용", bestValue: "Best Value", currentPlan: "현재 이용 중", getStarted: "시작하기 →", upgradeBtn: "업그레이드 →", perMonth: "/월", scansPerDay: "하루 3회 분석", scansPerMonth: "월 100회 분석", unlimited: "무제한 분석", clipboardCopy: "클립보드 복사", pdfTxtExport: "PDF / TXT 다운로드", priority: "우선 처리", cancel: "언제든 해지 가능", payments: "Visa · Mastercard · Amex · PayPal · Apple Pay · Google Pay" },
        limit: { title: "일일 한도 초과", message: "오늘의 무료 3회를 모두 사용했습니다. 업그레이드하여 계속 이용하세요.", upgrade: "무제한 업그레이드 →", remaining: "오늘 남은 분석 횟수" },
        footer: { copyright: "© 2026 MemoFlow AI · Powered by Gemini", dataNotStored: "데이터를 저장하지 않습니다" },
    },
    // ─── 日本語 ───
    ja: {
        nav: { noDataStored: "データ保存なし", sslEncrypted: "SSL暗号化", upgrade: "アップグレード" },
        hero: { title: "あなたの手書きメモ、\nもっときれいにできます。", subtitle: "メモの写真を撮るだけ。AIがきれいなデジタル文書に変換します。\nどんな言語・字体でも対応。" },
        upload: { heading: "📸 画像アップロード", cameraSupported: "カメラ対応", dropHere: "メモの写真をここにドロップ", orClickToBrowse: "またはクリックして選択", fileTypes: "JPG · PNG · HEIC", maxSize: "最大10MB", change: "変更", imageOnly: "画像ファイルのみ対応しています。", fileTooLarge: "ファイルサイズは10MB以下にしてください。" },
        analyze: { button: "✏️ AIで整理する", analyzing: "分析中...", error: "⚠️ エラー:" },
        stats: { avgTime: "~3秒", avgLabel: "平均分析時間", anyLang: "🌏", anyLangLabel: "全言語対応", export: "📤", exportLabel: "コピー · TXT · PDF" },
        result: { placeholder: "分析結果がここに表示されます", placeholderSub: "左側でメモをアップロードし「AIで整理する」をクリック", heading: "分析結果", copy: "コピー", copied: "コピー済", aiAnalyzing: "AIがメモを分析中です...", summary: "要約", actionItems: "アクション項目", keyNotes: "参考事項" },
        trust: { soc2: "SOC 2準拠", encrypted: "エンドツーエンド暗号化", countries: "190ヵ国以上", gdpr: "GDPR対応" },
        pricing: { title: "シンプルで透明な料金", subtitle: "無料で始めて、必要に応じてアップグレード。", free: "Free", freeDesc: "カード不要でお試し", starter: "Starter", starterDesc: "個人・学生向け", pro: "Pro", proDesc: "チーム・ヘビーユーザー向け", bestValue: "Best Value", currentPlan: "現在のプラン", getStarted: "始める →", upgradeBtn: "アップグレード →", perMonth: "/月", scansPerDay: "1日3回分析", scansPerMonth: "月100回分析", unlimited: "無制限分析", clipboardCopy: "クリップボードコピー", pdfTxtExport: "PDF / TXT出力", priority: "優先処理", cancel: "いつでも解約可能", payments: "Visa · Mastercard · Amex · PayPal · Apple Pay · Google Pay" },
        limit: { title: "本日の上限に達しました", message: "本日の無料3回分を使い切りました。アップグレードして続けてください。", upgrade: "無制限にアップグレード →", remaining: "本日の残り回数" },
        footer: { copyright: "© 2026 MemoFlow AI · Powered by Gemini", dataNotStored: "データは保存されません" },
    },
    // ─── 中文 ───
    zh: {
        nav: { noDataStored: "不存储数据", sslEncrypted: "SSL加密", upgrade: "升级" },
        hero: { title: "你的手写笔记，\n值得更好的整理方式。", subtitle: "拍张照片，AI帮你把凌乱笔记变成清晰的数字文档。\n支持任何语言、任何字迹。" },
        upload: { heading: "📸 上传图片", cameraSupported: "支持拍照", dropHere: "将笔记照片拖放到这里", orClickToBrowse: "或点击选择文件", fileTypes: "JPG · PNG · HEIC", maxSize: "最大10MB", change: "重新选择", imageOnly: "仅支持图片文件。", fileTooLarge: "文件大小不能超过10MB。" },
        analyze: { button: "✏️ AI智能整理", analyzing: "分析中...", error: "⚠️ 错误:" },
        stats: { avgTime: "~3秒", avgLabel: "平均分析", anyLang: "🌏", anyLangLabel: "全语言支持", export: "📤", exportLabel: "复制 · TXT · PDF" },
        result: { placeholder: "分析结果将在此显示", placeholderSub: "在左侧上传笔记，然后点击「AI智能整理」", heading: "分析结果", copy: "复制", copied: "已复制", aiAnalyzing: "AI正在分析您的笔记...", summary: "摘要", actionItems: "待办事项", keyNotes: "重要备注" },
        trust: { soc2: "SOC 2合规", encrypted: "端到端加密", countries: "190+国家", gdpr: "GDPR就绪" },
        pricing: { title: "简单透明的定价", subtitle: "免费开始，按需升级。", free: "Free", freeDesc: "无需信用卡即可使用", starter: "Starter", starterDesc: "个人用户和学生", pro: "Pro", proDesc: "团队和重度用户", bestValue: "最佳选择", currentPlan: "当前方案", getStarted: "开始使用 →", upgradeBtn: "升级 →", perMonth: "/月", scansPerDay: "每天3次分析", scansPerMonth: "每月100次分析", unlimited: "无限分析", clipboardCopy: "剪贴板复制", pdfTxtExport: "PDF / TXT导出", priority: "优先处理", cancel: "随时取消", payments: "Visa · Mastercard · Amex · PayPal · Apple Pay · Google Pay" },
        limit: { title: "已达每日上限", message: "您已使用完今日3次免费分析。升级即可继续使用。", upgrade: "升级无限次 →", remaining: "今日剩余次数" },
        footer: { copyright: "© 2026 MemoFlow AI · Powered by Gemini", dataNotStored: "您的数据不会被存储" },
    },
    // ─── Español ───
    es: {
        nav: { noDataStored: "Sin almacenamiento", sslEncrypted: "SSL Cifrado", upgrade: "Mejorar" },
        hero: { title: "Tu letra merece algo mejor\nque una foto borrosa.", subtitle: "Toma una foto de tus notas: nuestra IA las convierte en documentos limpios y organizados.\nFunciona con cualquier idioma y caligrafía." },
        upload: { heading: "📸 Subir imagen", cameraSupported: "Cámara compatible", dropHere: "Arrastra tu foto de notas aquí", orClickToBrowse: "o haz clic para seleccionar", fileTypes: "JPG · PNG · HEIC", maxSize: "Máx. 10 MB", change: "Cambiar", imageOnly: "Solo se admiten archivos de imagen.", fileTooLarge: "El archivo debe ser menor de 10 MB." },
        analyze: { button: "✏️ Organizar con IA", analyzing: "Analizando...", error: "⚠️ Error:" },
        stats: { avgTime: "~3s", avgLabel: "Análisis prom.", anyLang: "🌏", anyLangLabel: "Cualquier idioma", export: "📤", exportLabel: "Copiar · TXT · PDF" },
        result: { placeholder: "Los resultados aparecerán aquí", placeholderSub: "Sube una nota a la izquierda y haz clic en \"Organizar con IA\"", heading: "Resultados del análisis", copy: "Copiar", copied: "Copiado", aiAnalyzing: "La IA está analizando tus notas...", summary: "Resumen", actionItems: "Tareas", keyNotes: "Notas clave" },
        trust: { soc2: "SOC 2", encrypted: "Cifrado de extremo a extremo", countries: "190+ países", gdpr: "GDPR Ready" },
        pricing: { title: "Precios simples y transparentes", subtitle: "Empieza gratis. Mejora cuando necesites más.", free: "Free", freeDesc: "Sin tarjeta de crédito", starter: "Starter", starterDesc: "Para individuos y estudiantes", pro: "Pro", proDesc: "Para equipos y usuarios avanzados", bestValue: "Mejor opción", currentPlan: "Plan actual", getStarted: "Empezar →", upgradeBtn: "Mejorar →", perMonth: "/mes", scansPerDay: "3 escaneos por día", scansPerMonth: "100 escaneos por mes", unlimited: "Escaneos ilimitados", clipboardCopy: "Copiar al portapapeles", pdfTxtExport: "Exportar PDF / TXT", priority: "Procesamiento prioritario", cancel: "Cancela en cualquier momento", payments: "Visa · Mastercard · Amex · PayPal · Apple Pay · Google Pay" },
        limit: { title: "Límite diario alcanzado", message: "Has usado los 3 escaneos gratuitos de hoy. Mejora para continuar.", upgrade: "Mejorar a ilimitado →", remaining: "escaneos restantes hoy" },
        footer: { copyright: "© 2026 MemoFlow AI · Powered by Gemini", dataNotStored: "Tus datos nunca se almacenan" },
    },
    // ─── Tiếng Việt ───
    vi: {
        nav: { noDataStored: "Không lưu dữ liệu", sslEncrypted: "Mã hóa SSL", upgrade: "Nâng cấp" },
        hero: { title: "Chữ viết tay của bạn\nxứng đáng được số hóa.", subtitle: "Chụp ảnh ghi chú — AI sẽ chuyển đổi thành tài liệu số gọn gàng.\nHỗ trợ mọi ngôn ngữ, mọi nét chữ." },
        upload: { heading: "📸 Tải ảnh lên", cameraSupported: "Hỗ trợ camera", dropHere: "Kéo thả ảnh ghi chú vào đây", orClickToBrowse: "hoặc nhấn để chọn tệp", fileTypes: "JPG · PNG · HEIC", maxSize: "Tối đa 10 MB", change: "Đổi ảnh", imageOnly: "Chỉ hỗ trợ tệp hình ảnh.", fileTooLarge: "Kích thước tệp phải dưới 10 MB." },
        analyze: { button: "✏️ Sắp xếp bằng AI", analyzing: "Đang phân tích...", error: "⚠️ Lỗi:" },
        stats: { avgTime: "~3s", avgLabel: "Thời gian TB", anyLang: "🌏", anyLangLabel: "Mọi ngôn ngữ", export: "📤", exportLabel: "Sao chép · TXT · PDF" },
        result: { placeholder: "Kết quả sẽ hiển thị ở đây", placeholderSub: "Tải ảnh ghi chú ở bên trái, sau đó nhấn \"Sắp xếp bằng AI\"", heading: "Kết quả phân tích", copy: "Sao chép", copied: "Đã sao chép", aiAnalyzing: "AI đang phân tích ghi chú của bạn...", summary: "Tóm tắt", actionItems: "Việc cần làm", keyNotes: "Ghi chú quan trọng" },
        trust: { soc2: "SOC 2", encrypted: "Mã hóa đầu cuối", countries: "190+ quốc gia", gdpr: "Tuân thủ GDPR" },
        pricing: { title: "Bảng giá đơn giản, minh bạch", subtitle: "Bắt đầu miễn phí. Nâng cấp khi cần.", free: "Free", freeDesc: "Dùng thử, không cần thẻ", starter: "Starter", starterDesc: "Cho cá nhân & sinh viên", pro: "Pro", proDesc: "Cho đội nhóm & người dùng chuyên sâu", bestValue: "Giá trị nhất", currentPlan: "Gói hiện tại", getStarted: "Bắt đầu →", upgradeBtn: "Nâng cấp →", perMonth: "/tháng", scansPerDay: "3 lần quét/ngày", scansPerMonth: "100 lần quét/tháng", unlimited: "Quét không giới hạn", clipboardCopy: "Sao chép clipboard", pdfTxtExport: "Xuất PDF / TXT", priority: "Xử lý ưu tiên", cancel: "Hủy bất cứ lúc nào", payments: "Visa · Mastercard · Amex · PayPal · Apple Pay · Google Pay" },
        limit: { title: "Đã đạt giới hạn hàng ngày", message: "Bạn đã sử dụng hết 3 lần quét miễn phí hôm nay. Nâng cấp để tiếp tục.", upgrade: "Nâng cấp không giới hạn →", remaining: "lần quét còn lại hôm nay" },
        footer: { copyright: "© 2026 MemoFlow AI · Powered by Gemini", dataNotStored: "Dữ liệu của bạn không bao giờ được lưu" },
    },
    // ─── ภาษาไทย ───
    th: {
        nav: { noDataStored: "ไม่จัดเก็บข้อมูล", sslEncrypted: "เข้ารหัส SSL", upgrade: "อัปเกรด" },
        hero: { title: "ลายมือของคุณ\nสมควรได้รับการจัดระเบียบ", subtitle: "ถ่ายรูปโน้ตของคุณ — AI จะแปลงเป็นเอกสารดิจิทัลที่เรียบร้อย\nรองรับทุกภาษา ทุกลายมือ" },
        upload: { heading: "📸 อัปโหลดรูปภาพ", cameraSupported: "รองรับกล้อง", dropHere: "ลากรูปโน้ตมาวางที่นี่", orClickToBrowse: "หรือคลิกเพื่อเลือกไฟล์", fileTypes: "JPG · PNG · HEIC", maxSize: "สูงสุด 10 MB", change: "เปลี่ยน", imageOnly: "รองรับเฉพาะไฟล์รูปภาพ", fileTooLarge: "ขนาดไฟล์ต้องไม่เกิน 10 MB" },
        analyze: { button: "✏️ จัดระเบียบด้วย AI", analyzing: "กำลังวิเคราะห์...", error: "⚠️ ข้อผิดพลาด:" },
        stats: { avgTime: "~3วิ", avgLabel: "เวลาเฉลี่ย", anyLang: "🌏", anyLangLabel: "ทุกภาษา", export: "📤", exportLabel: "คัดลอก · TXT · PDF" },
        result: { placeholder: "ผลลัพธ์จะแสดงที่นี่", placeholderSub: "อัปโหลดโน้ตทางซ้าย แล้วคลิก \"จัดระเบียบด้วย AI\"", heading: "ผลการวิเคราะห์", copy: "คัดลอก", copied: "คัดลอกแล้ว", aiAnalyzing: "AI กำลังวิเคราะห์โน้ตของคุณ...", summary: "สรุป", actionItems: "สิ่งที่ต้องทำ", keyNotes: "บันทึกสำคัญ" },
        trust: { soc2: "SOC 2", encrypted: "เข้ารหัสต้นทางถึงปลายทาง", countries: "190+ ประเทศ", gdpr: "พร้อม GDPR" },
        pricing: { title: "ราคาเรียบง่าย โปร่งใส", subtitle: "เริ่มต้นฟรี อัปเกรดเมื่อต้องการ", free: "Free", freeDesc: "ลองใช้ ไม่ต้องใช้บัตร", starter: "Starter", starterDesc: "สำหรับบุคคล & นักศึกษา", pro: "Pro", proDesc: "สำหรับทีม & ผู้ใช้งานหนัก", bestValue: "คุ้มค่าที่สุด", currentPlan: "แพ็กเกจปัจจุบัน", getStarted: "เริ่มต้น →", upgradeBtn: "อัปเกรด →", perMonth: "/เดือน", scansPerDay: "สแกน 3 ครั้ง/วัน", scansPerMonth: "สแกน 100 ครั้ง/เดือน", unlimited: "สแกนไม่จำกัด", clipboardCopy: "คัดลอกคลิปบอร์ด", pdfTxtExport: "ส่งออก PDF / TXT", priority: "ประมวลผลเร่งด่วน", cancel: "ยกเลิกเมื่อไหร่ก็ได้", payments: "Visa · Mastercard · Amex · PayPal · Apple Pay · Google Pay" },
        limit: { title: "ถึงขีดจำกัดรายวัน", message: "คุณใช้ 3 ครั้งฟรีของวันนี้หมดแล้ว อัปเกรดเพื่อใช้งานต่อ", upgrade: "อัปเกรดไม่จำกัด →", remaining: "ครั้งที่เหลือวันนี้" },
        footer: { copyright: "© 2026 MemoFlow AI · Powered by Gemini", dataNotStored: "ข้อมูลของคุณจะไม่ถูกจัดเก็บ" },
    },
    // ─── Deutsch (Schweiz) ───
    de: {
        nav: { noDataStored: "Keine Datenspeicherung", sslEncrypted: "SSL-verschlüsselt", upgrade: "Upgrade" },
        hero: { title: "Ihre Handschrift verdient\nmehr als ein unscharfes Foto.", subtitle: "Fotografieren Sie Ihre Notizen — unsere KI verwandelt sie in saubere, strukturierte Dokumente.\nFunktioniert mit jeder Sprache und Handschrift." },
        upload: { heading: "📸 Bild hochladen", cameraSupported: "Kamera unterstützt", dropHere: "Notiz-Foto hier ablegen", orClickToBrowse: "oder klicken zum Auswählen", fileTypes: "JPG · PNG · HEIC", maxSize: "Max. 10 MB", change: "Ändern", imageOnly: "Nur Bilddateien werden unterstützt.", fileTooLarge: "Dateigrösse darf 10 MB nicht überschreiten." },
        analyze: { button: "✏️ Mit KI organisieren", analyzing: "Analyse läuft...", error: "⚠️ Fehler:" },
        stats: { avgTime: "~3s", avgLabel: "Ø Analysezeit", anyLang: "🌏", anyLangLabel: "Jede Sprache", export: "📤", exportLabel: "Kopieren · TXT · PDF" },
        result: { placeholder: "Ergebnisse werden hier angezeigt", placeholderSub: "Laden Sie links eine Notiz hoch und klicken Sie auf \"Mit KI organisieren\"", heading: "Analyseergebnisse", copy: "Kopieren", copied: "Kopiert", aiAnalyzing: "KI analysiert Ihre Notizen...", summary: "Zusammenfassung", actionItems: "Aufgaben", keyNotes: "Wichtige Hinweise" },
        trust: { soc2: "SOC 2-konform", encrypted: "Ende-zu-Ende verschlüsselt", countries: "190+ Länder", gdpr: "DSGVO-konform" },
        pricing: { title: "Einfache, transparente Preise", subtitle: "Kostenlos starten. Bei Bedarf upgraden.", free: "Free", freeDesc: "Ohne Kreditkarte testen", starter: "Starter", starterDesc: "Für Einzelpersonen & Studenten", pro: "Pro", proDesc: "Für Teams & Power-User", bestValue: "Bestes Angebot", currentPlan: "Aktueller Plan", getStarted: "Loslegen →", upgradeBtn: "Upgrade →", perMonth: "/Mt.", scansPerDay: "3 Scans pro Tag", scansPerMonth: "100 Scans pro Monat", unlimited: "Unbegrenzte Scans", clipboardCopy: "In Zwischenablage", pdfTxtExport: "PDF / TXT Export", priority: "Prioritätsverarbeitung", cancel: "Jederzeit kündbar", payments: "Visa · Mastercard · Amex · PayPal · Apple Pay · Google Pay" },
        limit: { title: "Tageslimit erreicht", message: "Sie haben heute alle 3 kostenlosen Scans verbraucht. Upgraden Sie für mehr.", upgrade: "Unbegrenzt upgraden →", remaining: "Scans heute verbleibend" },
        footer: { copyright: "© 2026 MemoFlow AI · Powered by Gemini", dataNotStored: "Ihre Daten werden nie gespeichert" },
    },
    // ─── Français ───
    fr: {
        nav: { noDataStored: "Aucune donnée stockée", sslEncrypted: "Chiffrement SSL", upgrade: "Améliorer" },
        hero: { title: "Votre écriture mérite\nmieux qu'une photo floue.", subtitle: "Prenez une photo de vos notes — notre IA les transforme en documents clairs et structurés.\nFonctionne avec toutes les langues et écritures." },
        upload: { heading: "📸 Importer une image", cameraSupported: "Caméra supportée", dropHere: "Déposez votre photo de notes ici", orClickToBrowse: "ou cliquez pour parcourir", fileTypes: "JPG · PNG · HEIC", maxSize: "Max 10 Mo", change: "Changer", imageOnly: "Seuls les fichiers image sont acceptés.", fileTooLarge: "Le fichier doit faire moins de 10 Mo." },
        analyze: { button: "✏️ Organiser avec l'IA", analyzing: "Analyse en cours...", error: "⚠️ Erreur :" },
        stats: { avgTime: "~3s", avgLabel: "Analyse moy.", anyLang: "🌏", anyLangLabel: "Toute langue", export: "📤", exportLabel: "Copier · TXT · PDF" },
        result: { placeholder: "Les résultats s'afficheront ici", placeholderSub: "Importez une note à gauche, puis cliquez sur \"Organiser avec l'IA\"", heading: "Résultats de l'analyse", copy: "Copier", copied: "Copié", aiAnalyzing: "L'IA analyse vos notes...", summary: "Résumé", actionItems: "Actions à faire", keyNotes: "Notes clés" },
        trust: { soc2: "SOC 2 conforme", encrypted: "Chiffrement de bout en bout", countries: "190+ pays", gdpr: "Conforme RGPD" },
        pricing: { title: "Tarification simple et transparente", subtitle: "Commencez gratuitement. Améliorez quand vous en avez besoin.", free: "Free", freeDesc: "Essayez sans carte bancaire", starter: "Starter", starterDesc: "Pour les particuliers et étudiants", pro: "Pro", proDesc: "Pour les équipes et utilisateurs intensifs", bestValue: "Meilleur choix", currentPlan: "Plan actuel", getStarted: "Commencer →", upgradeBtn: "Améliorer →", perMonth: "/mois", scansPerDay: "3 scans par jour", scansPerMonth: "100 scans par mois", unlimited: "Scans illimités", clipboardCopy: "Copie presse-papiers", pdfTxtExport: "Export PDF / TXT", priority: "Traitement prioritaire", cancel: "Annulez à tout moment", payments: "Visa · Mastercard · Amex · PayPal · Apple Pay · Google Pay" },
        limit: { title: "Limite quotidienne atteinte", message: "Vous avez utilisé vos 3 scans gratuits aujourd'hui. Améliorez pour continuer.", upgrade: "Passer à l'illimité →", remaining: "scans restants aujourd'hui" },
        footer: { copyright: "© 2026 MemoFlow AI · Powered by Gemini", dataNotStored: "Vos données ne sont jamais stockées" },
    },
    // ─── Português ───
    pt: {
        nav: { noDataStored: "Sem armazenamento", sslEncrypted: "Criptografia SSL", upgrade: "Upgrade" },
        hero: { title: "Sua caligrafia merece\nalgo melhor que uma foto borrada.", subtitle: "Tire uma foto das suas anotações — nossa IA as transforma em documentos digitais organizados.\nFunciona com qualquer idioma e caligrafia." },
        upload: { heading: "📸 Enviar imagem", cameraSupported: "Câmera suportada", dropHere: "Arraste sua foto de anotações aqui", orClickToBrowse: "ou clique para selecionar", fileTypes: "JPG · PNG · HEIC", maxSize: "Máx. 10 MB", change: "Alterar", imageOnly: "Apenas arquivos de imagem são aceitos.", fileTooLarge: "O arquivo deve ter menos de 10 MB." },
        analyze: { button: "✏️ Organizar com IA", analyzing: "Analisando...", error: "⚠️ Erro:" },
        stats: { avgTime: "~3s", avgLabel: "Análise média", anyLang: "🌏", anyLangLabel: "Qualquer idioma", export: "📤", exportLabel: "Copiar · TXT · PDF" },
        result: { placeholder: "Os resultados aparecerão aqui", placeholderSub: "Envie uma anotação à esquerda e clique em \"Organizar com IA\"", heading: "Resultados da análise", copy: "Copiar", copied: "Copiado", aiAnalyzing: "A IA está analisando suas anotações...", summary: "Resumo", actionItems: "Tarefas", keyNotes: "Notas importantes" },
        trust: { soc2: "SOC 2", encrypted: "Criptografia ponta a ponta", countries: "190+ países", gdpr: "LGPD/GDPR" },
        pricing: { title: "Preços simples e transparentes", subtitle: "Comece grátis. Faça upgrade quando precisar.", free: "Free", freeDesc: "Sem cartão de crédito", starter: "Starter", starterDesc: "Para pessoas e estudantes", pro: "Pro", proDesc: "Para equipes e usuários avançados", bestValue: "Melhor valor", currentPlan: "Plano atual", getStarted: "Começar →", upgradeBtn: "Upgrade →", perMonth: "/mês", scansPerDay: "3 digitalizações/dia", scansPerMonth: "100 digitalizações/mês", unlimited: "Digitalizações ilimitadas", clipboardCopy: "Copiar para área de transferência", pdfTxtExport: "Exportar PDF / TXT", priority: "Processamento prioritário", cancel: "Cancele a qualquer momento", payments: "Visa · Mastercard · Amex · PayPal · Apple Pay · Google Pay" },
        limit: { title: "Limite diário atingido", message: "Você usou todas as 3 digitalizações gratuitas de hoje. Faça upgrade para continuar.", upgrade: "Upgrade ilimitado →", remaining: "digitalizações restantes hoje" },
        footer: { copyright: "© 2026 MemoFlow AI · Powered by Gemini", dataNotStored: "Seus dados nunca são armazenados" },
    },
    // ─── العربية ───
    ar: {
        nav: { noDataStored: "لا يتم تخزين البيانات", sslEncrypted: "تشفير SSL", upgrade: "ترقية" },
        hero: { title: "خطّك اليدوي يستحقّ\nأفضل من صورة ضبابية.", subtitle: "التقط صورة لملاحظاتك — ذكاؤنا الاصطناعي يحوّلها إلى مستندات رقمية منظّمة.\nيدعم جميع اللغات وأنماط الخط." },
        upload: { heading: "📸 رفع صورة", cameraSupported: "الكاميرا مدعومة", dropHere: "اسحب صورة الملاحظات هنا", orClickToBrowse: "أو انقر لاختيار ملف", fileTypes: "JPG · PNG · HEIC", maxSize: "الحد الأقصى 10 ميجا", change: "تغيير", imageOnly: "يُقبل فقط ملفات الصور.", fileTooLarge: "يجب ألا يتجاوز حجم الملف 10 ميجابايت." },
        analyze: { button: "✏️ تنظيم بالذكاء الاصطناعي", analyzing: "جارٍ التحليل...", error: "⚠️ خطأ:" },
        stats: { avgTime: "~3ث", avgLabel: "متوسط التحليل", anyLang: "🌏", anyLangLabel: "أي لغة", export: "📤", exportLabel: "نسخ · TXT · PDF" },
        result: { placeholder: "ستظهر النتائج هنا", placeholderSub: "ارفع ملاحظة على اليسار ثم انقر \"تنظيم بالذكاء الاصطناعي\"", heading: "نتائج التحليل", copy: "نسخ", copied: "تم النسخ", aiAnalyzing: "الذكاء الاصطناعي يحلّل ملاحظاتك...", summary: "ملخص", actionItems: "مهام", keyNotes: "ملاحظات مهمة" },
        trust: { soc2: "SOC 2", encrypted: "تشفير من طرف لطرف", countries: "190+ دولة", gdpr: "متوافق مع GDPR" },
        pricing: { title: "تسعير بسيط وشفّاف", subtitle: "ابدأ مجانًا. قم بالترقية عند الحاجة.", free: "Free", freeDesc: "بدون بطاقة ائتمان", starter: "Starter", starterDesc: "للأفراد والطلاب", pro: "Pro", proDesc: "للفرق والمستخدمين المحترفين", bestValue: "الأفضل قيمةً", currentPlan: "الخطة الحالية", getStarted: "ابدأ الآن →", upgradeBtn: "ترقية →", perMonth: "/شهر", scansPerDay: "3 مسح يوميًا", scansPerMonth: "100 مسح شهريًا", unlimited: "مسح غير محدود", clipboardCopy: "نسخ للحافظة", pdfTxtExport: "تصدير PDF / TXT", priority: "معالجة ذات أولوية", cancel: "إلغاء في أي وقت", payments: "Visa · Mastercard · Amex · PayPal · Apple Pay · Google Pay" },
        limit: { title: "تم الوصول للحد اليومي", message: "لقد استخدمت 3 مسوحات مجانية اليوم. قم بالترقية للمتابعة.", upgrade: "ترقية غير محدودة →", remaining: "المسوحات المتبقية اليوم" },
        footer: { copyright: "© 2026 MemoFlow AI · Powered by Gemini", dataNotStored: "بياناتك لا تُخزّن أبدًا" },
    },
    // ─── हिन्दी ───
    hi: {
        nav: { noDataStored: "डेटा सहेजा नहीं जाता", sslEncrypted: "SSL एन्क्रिप्टेड", upgrade: "अपग्रेड" },
        hero: { title: "आपकी हैंडराइटिंग\nबेहतर डिजिटल रूप की हकदार है।", subtitle: "अपने नोट्स की फ़ोटो लें — हमारा AI उन्हें साफ़, संरचित दस्तावेज़ में बदल देगा।\nकिसी भी भाषा, किसी भी लिखावट के साथ काम करता है।" },
        upload: { heading: "📸 चित्र अपलोड करें", cameraSupported: "कैमरा सपोर्टेड", dropHere: "नोट की फ़ोटो यहाँ ड्रॉप करें", orClickToBrowse: "या फ़ाइल चुनने के लिए क्लिक करें", fileTypes: "JPG · PNG · HEIC", maxSize: "अधिकतम 10 MB", change: "बदलें", imageOnly: "केवल इमेज फ़ाइलें स्वीकार्य हैं।", fileTooLarge: "फ़ाइल का आकार 10 MB से कम होना चाहिए।" },
        analyze: { button: "✏️ AI से व्यवस्थित करें", analyzing: "विश्लेषण हो रहा है...", error: "⚠️ त्रुटि:" },
        stats: { avgTime: "~3s", avgLabel: "औसत समय", anyLang: "🌏", anyLangLabel: "कोई भी भाषा", export: "📤", exportLabel: "कॉपी · TXT · PDF" },
        result: { placeholder: "परिणाम यहाँ दिखाई देंगे", placeholderSub: "बाईं ओर नोट अपलोड करें, फिर \"AI से व्यवस्थित करें\" पर क्लिक करें", heading: "विश्लेषण परिणाम", copy: "कॉपी", copied: "कॉपी हो गया", aiAnalyzing: "AI आपके नोट्स का विश्लेषण कर रहा है...", summary: "सारांश", actionItems: "कार्य सूची", keyNotes: "महत्वपूर्ण नोट्स" },
        trust: { soc2: "SOC 2", encrypted: "एंड-टू-एंड एन्क्रिप्टेड", countries: "190+ देश", gdpr: "GDPR तैयार" },
        pricing: { title: "सरल और पारदर्शी मूल्य निर्धारण", subtitle: "मुफ़्त में शुरू करें। ज़रूरत पड़ने पर अपग्रेड करें।", free: "Free", freeDesc: "कार्ड के बिना आज़माएँ", starter: "Starter", starterDesc: "व्यक्तियों और छात्रों के लिए", pro: "Pro", proDesc: "टीमों और पावर यूज़र के लिए", bestValue: "सर्वोत्तम मूल्य", currentPlan: "वर्तमान प्लान", getStarted: "शुरू करें →", upgradeBtn: "अपग्रेड →", perMonth: "/माह", scansPerDay: "प्रतिदिन 3 स्कैन", scansPerMonth: "प्रति माह 100 स्कैन", unlimited: "असीमित स्कैन", clipboardCopy: "क्लिपबोर्ड कॉपी", pdfTxtExport: "PDF / TXT निर्यात", priority: "प्राथमिकता प्रोसेसिंग", cancel: "कभी भी रद्द करें", payments: "Visa · Mastercard · Amex · PayPal · Apple Pay · Google Pay" },
        limit: { title: "दैनिक सीमा पूरी", message: "आपने आज के 3 मुफ़्त स्कैन उपयोग कर लिए हैं। जारी रखने के लिए अपग्रेड करें।", upgrade: "असीमित अपग्रेड →", remaining: "आज शेष स्कैन" },
        footer: { copyright: "© 2026 MemoFlow AI · Powered by Gemini", dataNotStored: "आपका डेटा कभी सहेजा नहीं जाता" },
    },
    // ─── Bahasa Indonesia ───
    id: {
        nav: { noDataStored: "Data tidak disimpan", sslEncrypted: "Enkripsi SSL", upgrade: "Upgrade" },
        hero: { title: "Tulisan tangan Anda\nlayak mendapat yang lebih baik.", subtitle: "Foto catatan Anda — AI kami menyusunnya menjadi dokumen digital yang rapi.\nMendukung semua bahasa dan gaya tulisan." },
        upload: { heading: "📸 Unggah Gambar", cameraSupported: "Kamera didukung", dropHere: "Seret foto catatan ke sini", orClickToBrowse: "atau klik untuk memilih file", fileTypes: "JPG · PNG · HEIC", maxSize: "Maks 10 MB", change: "Ganti", imageOnly: "Hanya file gambar yang didukung.", fileTooLarge: "Ukuran file harus di bawah 10 MB." },
        analyze: { button: "✏️ Rapikan dengan AI", analyzing: "Menganalisis...", error: "⚠️ Kesalahan:" },
        stats: { avgTime: "~3d", avgLabel: "Waktu rata-rata", anyLang: "🌏", anyLangLabel: "Semua bahasa", export: "📤", exportLabel: "Salin · TXT · PDF" },
        result: { placeholder: "Hasil akan muncul di sini", placeholderSub: "Unggah catatan di kiri, lalu klik \"Rapikan dengan AI\"", heading: "Hasil Analisis", copy: "Salin", copied: "Disalin", aiAnalyzing: "AI sedang menganalisis catatan Anda...", summary: "Ringkasan", actionItems: "Daftar Tugas", keyNotes: "Catatan Penting" },
        trust: { soc2: "SOC 2", encrypted: "Enkripsi ujung ke ujung", countries: "190+ negara", gdpr: "Siap GDPR" },
        pricing: { title: "Harga sederhana dan transparan", subtitle: "Mulai gratis. Upgrade saat diperlukan.", free: "Free", freeDesc: "Coba tanpa kartu kredit", starter: "Starter", starterDesc: "Untuk individu & pelajar", pro: "Pro", proDesc: "Untuk tim & pengguna aktif", bestValue: "Nilai Terbaik", currentPlan: "Paket Saat Ini", getStarted: "Mulai →", upgradeBtn: "Upgrade →", perMonth: "/bln", scansPerDay: "3 pindai per hari", scansPerMonth: "100 pindai per bulan", unlimited: "Pindai tanpa batas", clipboardCopy: "Salin ke clipboard", pdfTxtExport: "Ekspor PDF / TXT", priority: "Pemrosesan prioritas", cancel: "Batalkan kapan saja", payments: "Visa · Mastercard · Amex · PayPal · Apple Pay · Google Pay" },
        limit: { title: "Batas harian tercapai", message: "Anda telah menggunakan 3 pindai gratis hari ini. Upgrade untuk melanjutkan.", upgrade: "Upgrade tanpa batas →", remaining: "pindai tersisa hari ini" },
        footer: { copyright: "© 2026 MemoFlow AI · Powered by Gemini", dataNotStored: "Data Anda tidak pernah disimpan" },
    },
    // ─── Русский ───
    ru: {
        nav: { noDataStored: "Данные не сохраняются", sslEncrypted: "SSL-шифрование", upgrade: "Улучшить" },
        hero: { title: "Ваш почерк заслуживает\nбольшего, чем размытое фото.", subtitle: "Сфотографируйте заметки — наш ИИ превратит их в чистые, структурированные документы.\nРаботает с любым языком и почерком." },
        upload: { heading: "📸 Загрузить изображение", cameraSupported: "Камера поддерживается", dropHere: "Перетащите фото заметки сюда", orClickToBrowse: "или нажмите для выбора файла", fileTypes: "JPG · PNG · HEIC", maxSize: "Макс. 10 МБ", change: "Изменить", imageOnly: "Поддерживаются только файлы изображений.", fileTooLarge: "Размер файла не должен превышать 10 МБ." },
        analyze: { button: "✏️ Организовать с ИИ", analyzing: "Анализ...", error: "⚠️ Ошибка:" },
        stats: { avgTime: "~3с", avgLabel: "Среднее время", anyLang: "🌏", anyLangLabel: "Любой язык", export: "📤", exportLabel: "Копировать · TXT · PDF" },
        result: { placeholder: "Результаты появятся здесь", placeholderSub: "Загрузите заметку слева, затем нажмите \"Организовать с ИИ\"", heading: "Результаты анализа", copy: "Копировать", copied: "Скопировано", aiAnalyzing: "ИИ анализирует ваши заметки...", summary: "Резюме", actionItems: "Задачи", keyNotes: "Ключевые заметки" },
        trust: { soc2: "SOC 2", encrypted: "Сквозное шифрование", countries: "190+ стран", gdpr: "GDPR-готовность" },
        pricing: { title: "Простые и прозрачные цены", subtitle: "Начните бесплатно. Улучшите, когда нужно.", free: "Free", freeDesc: "Попробуйте без карты", starter: "Starter", starterDesc: "Для частных лиц и студентов", pro: "Pro", proDesc: "Для команд и продвинутых пользователей", bestValue: "Лучшая цена", currentPlan: "Текущий план", getStarted: "Начать →", upgradeBtn: "Улучшить →", perMonth: "/мес.", scansPerDay: "3 сканирования в день", scansPerMonth: "100 сканирований в месяц", unlimited: "Безлимитные сканирования", clipboardCopy: "Копирование в буфер обмена", pdfTxtExport: "Экспорт PDF / TXT", priority: "Приоритетная обработка", cancel: "Отмена в любое время", payments: "Visa · Mastercard · Amex · PayPal · Apple Pay · Google Pay" },
        limit: { title: "Дневной лимит исчерпан", message: "Вы использовали все 3 бесплатных сканирования сегодня. Улучшите для продолжения.", upgrade: "Безлимитное улучшение →", remaining: "сканирований осталось сегодня" },
        footer: { copyright: "© 2026 MemoFlow AI · Powered by Gemini", dataNotStored: "Ваши данные никогда не сохраняются" },
    },
    // ─── Türkçe ───
    tr: {
        nav: { noDataStored: "Veri saklanmaz", sslEncrypted: "SSL Şifreli", upgrade: "Yükselt" },
        hero: { title: "El yazınız bulanık bir\nfotoğraftan fazlasını hak ediyor.", subtitle: "Notlarınızın fotoğrafını çekin — yapay zekamız onları temiz, düzenli belgelere dönüştürür.\nHer dil ve her el yazısıyla çalışır." },
        upload: { heading: "📸 Görsel Yükle", cameraSupported: "Kamera desteklenir", dropHere: "Not fotoğrafınızı buraya bırakın", orClickToBrowse: "veya dosya seçmek için tıklayın", fileTypes: "JPG · PNG · HEIC", maxSize: "Maks. 10 MB", change: "Değiştir", imageOnly: "Yalnızca görsel dosyaları desteklenir.", fileTooLarge: "Dosya boyutu 10 MB'tan küçük olmalıdır." },
        analyze: { button: "✏️ Yapay Zeka ile Düzenle", analyzing: "Analiz ediliyor...", error: "⚠️ Hata:" },
        stats: { avgTime: "~3sn", avgLabel: "Ort. analiz", anyLang: "🌏", anyLangLabel: "Her dil", export: "📤", exportLabel: "Kopyala · TXT · PDF" },
        result: { placeholder: "Sonuçlar burada görünecek", placeholderSub: "Sol tarafta bir not yükleyin ve \"Yapay Zeka ile Düzenle\"ye tıklayın", heading: "Analiz Sonuçları", copy: "Kopyala", copied: "Kopyalandı", aiAnalyzing: "Yapay zeka notlarınızı analiz ediyor...", summary: "Özet", actionItems: "Yapılacaklar", keyNotes: "Önemli Notlar" },
        trust: { soc2: "SOC 2 Uyumlu", encrypted: "Uçtan uca şifreli", countries: "190+ ülke", gdpr: "KVKK/GDPR Uyumlu" },
        pricing: { title: "Basit ve şeffaf fiyatlandırma", subtitle: "Ücretsiz başlayın. İhtiyaç duyduğunuzda yükseltin.", free: "Free", freeDesc: "Kartsız deneyin", starter: "Starter", starterDesc: "Bireyler ve öğrenciler için", pro: "Pro", proDesc: "Ekipler ve güçlü kullanıcılar için", bestValue: "En İyi Değer", currentPlan: "Mevcut Plan", getStarted: "Başla →", upgradeBtn: "Yükselt →", perMonth: "/ay", scansPerDay: "Günde 3 tarama", scansPerMonth: "Ayda 100 tarama", unlimited: "Sınırsız tarama", clipboardCopy: "Panoya kopyala", pdfTxtExport: "PDF / TXT dışa aktar", priority: "Öncelikli işleme", cancel: "İstediğiniz zaman iptal edin", payments: "Visa · Mastercard · Amex · PayPal · Apple Pay · Google Pay" },
        limit: { title: "Günlük limite ulaşıldı", message: "Bugünkü 3 ücretsiz taramanızı kullandınız. Devam etmek için yükseltin.", upgrade: "Sınırsız yükselt →", remaining: "bugün kalan tarama" },
        footer: { copyright: "© 2026 MemoFlow AI · Powered by Gemini", dataNotStored: "Verileriniz asla saklanmaz" },
    },
};
