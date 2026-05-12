# Auth UI kit — مجلس

The detailed auth flow from the brief, rendered as iPhone screens on a design canvas.

**Screens**
1. **Splash** — olive gradient + geometric pattern, "مجلس" wordmark, tagline, ayah `«طلب العلم فريضة على كل مسلم»`, gold loading bar, version
2. **Login** — code + password fields with icons, remember-me + forgot-password, primary CTA
3. **Signup step 1 — البيانات الأساسية** — name, ID, phone, WhatsApp (optional), password, confirm, gender chips
4. **Signup step 2 — البيانات الشخصية** — marital, family size, "يعول" multi-chip, qualification, Qur'an memorization
5. **Signup step 3 — معلومات العمل** — employment chips, skill tags (add/remove), employer card with delete + add row
6. **Signup step 4 — السكن والموقع** — housing chips, district select, nearest mosque, terms consent
7. **Success** — animated check circle, "تم إنشاء الحساب!", phone confirmation, CTA to login

`index.html` mounts a `<DesignCanvas>` with all seven screens in iPhone frames; pan/zoom with the canvas, click any artboard to focus.
