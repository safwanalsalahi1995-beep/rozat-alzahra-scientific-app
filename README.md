# روضة الزهراء العلمية

تطبيق تعليمي تفاعلي للأطفال يضم:
- القرآن الكريم
- الأذكار وعبادات اليوم
- الأخلاق والسلوك
- الصحة والنظافة
- العلوم والمنطق
- التقييمات والاختبارات
- نظام نقاط وهدية حديقة

## التشغيل محليًا

```bash
npm install
npm run dev
```

## بناء التطبيق

```bash
npm run build
```

## تحويل المشروع إلى تطبيق Android APK

```bash
npm install
npx cap add android
npm run android:sync
npx cap open android
```

ثم من Android Studio:
1. افتح مجلد `android`
2. اختر `Build > Generate Signed Bundle / APK`
3. اختر `APK`
4. وقّع التطبيق
5. أنشئ الملف النهائي

## معلومات المشروع

- الاسم: روضة الزهراء العلمية
- النوع: تطبيق ويب/mobile app
- المنصة: Android via Capacitor
- الميزة الأساسية: تعليم تفاعلي، آيات، أذكار، أسئلة، ألعاب، متتبع التقدم
