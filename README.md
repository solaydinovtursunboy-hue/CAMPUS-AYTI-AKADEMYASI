# Campus Ayti Academy

Andijon viloyati, Oltinkoʻl tumani, Katta pochta binosi yonida (171000) joylashgan **Campus Ayti Academy** IT va Robototexnika oʻquv markazining rasmiy veb-sayti.

## GitHub va Vercelʼga joylash tartibi

### 1. GitHubʼga yuklash
1. AI Studio yuqori panelidagi **GitHub** tugmasini bosing va yangi repository yarating (yoki loyihani ZIP qilib yuklab oling).
2. Agar kompyuterdan yuklasangiz, terminalda quyidagi buyruqlarni bajaring (`node_modules` va `dist` avtomatik `.gitignore` orqali chiqarib tashlanadi):
```bash
git init
git add .
git commit -m "Campus Ayti Academy website"
git branch -M main
git remote add origin https://github.com/SIZNING_LOGININGIZ/campus-ayti-academy.git
git push -u origin main
```

### 2. Vercelʼga deploy qilish
1. [vercel.com](https://vercel.com) saytiga GitHub hisobingiz bilan kiring.
2. **Add New → Project** tugmasini bosing va GitHubʼdagi `campus-ayti-academy` reposini tanlang.
3. Loyihada `vercel.json` tayyor sozlangan:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy** tugmasini bosing — sayt 1 daqiqa ichida ishga tushadi.
