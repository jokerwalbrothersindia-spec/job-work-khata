# Job Work Khata — Multi-Company App (bechne ke liye)

Ek hi app, bahut saari companies. Har company apne Gmail se login karke **sirf apna data** dekhti hai.
Aap (seller) Admin Panel se payment ke baad har company ko **Activate** karte ho.

---

## App kaise kaam karta hai

**Customer (nayi company):**
1. Link kholta hai → **Sign in with Google**.
2. **Create your company** — naam, phone, shehar daalta hai.
3. Use "Account awaiting activation" dikhega, saath mein aapki keemat, Pay button aur WhatsApp button.
4. Aap payment check karke Admin Panel se **Activate** dabate ho → customer ki screen **apne aap khul jaati hai**.

**Company ke andar 3 tarah ke user:**

| Role | Kya kar sakta hai |
|---|---|
| **Owner (malik)** | Sab kuch: users add/remove, role badalna, rate, delete, debit |
| **Manager** | Entry, delete, debit, staff add karna, rate badalna |
| **Staff** | Sirf maal dena (Issue) aur wapas lena (Receive), payment entry |

**Har entry pe dikhta hai:** kisne kiya aur kab — jaise
`↑ Issued 30 pcs · 28/10/26, 4:35 pm · by Vinod`
`↓ Received 27 pcs · 29/10/26, 11:10 am · by Ramesh`
`! Closed short by 3 pcs · … · by Ramesh` → laal alert, Owner/Manager debit kar sakte hain.

**Suraksha:**
- Ek company ka user doosri company ka data **kabhi nahi** dekh sakta — ye Firebase ke security rules mein band hai, sirf screen pe nahi.
- Aap (seller) bhi Admin Panel mein sirf company ka naam/phone/status dekhte ho, unka khata nahi.
- Ek Gmail sirf ek company se jud sakta hai.
- Activate hone se pehle koi data nahi khulta, link share ho jaye tab bhi.

---

## Setup — ek baar (20–25 minute)

### Step 1: Firebase project banao
1. **https://console.firebase.google.com** → **jokerwalbrothers@gmail.com** se login.
2. **Create a project** → naam `job-work-khata` → Google Analytics **OFF** → **Create project**.

### Step 2: Google login on karo
1. **Build → Authentication → Get started**.
2. **Sign-in method → Google → Enable** → support email chuno → **Save**.

### Step 3: Database + security rules
1. **Build → Firestore Database → Create database**.
2. Location **asia-south1 (Mumbai)** → **Next** → **Start in production mode** → **Create**.
3. **Rules** tab kholo → sab delete karo → is folder ki **`firestore.rules`** file ka poora text paste karo → **Publish**.

### Step 4: config.js bharo
1. Firebase → **⚙️ Project settings → Your apps → `</>` (Web)** → nickname `khata` → **Register app** (Hosting tick mat karna).
2. `firebaseConfig` ki 6 values (`apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`) **`config.js`** mein `PASTE_...` ki jagah daalo.
3. `config.js` mein ye bhi bharo:
   - `priceText` — jaise `"₹4,999 (one-time)"`
   - `paymentLink` — Razorpay ka Payment Link (Razorpay dashboard → Payment Links → Create). Na ho to `""` rehne do.
   - `contactWhatsApp` — aapka number, jaise `"919876543210"` (91 ke saath, bina +).
   - `superAdminEmail` — `jokerwalbrothers@gmail.com` (isse login karne par Admin Panel milega).
   > Agar superAdminEmail badla, to `firestore.rules` mein bhi wahi email badalna zaroori hai.
4. Save karo.

### Step 5: GitHub repo + upload
1. **https://github.com** (jokerwalbrothersindia-spec) → **+ → New repository**.
2. Naam: `job-work-khata` → **Public** → **Create repository**.
3. **"uploading an existing file"** → is folder ki **saari files** ek saath drag-drop karo
   (index.html, app.js, config.js, sw.js, manifest.webmanifest, sab icons, old-data.json, firestore.rules, README.md)
   → **Commit changes**.

### Step 6: GitHub Pages on karo
1. Repo → **Settings → Pages**.
2. Source: **Deploy from a branch** → Branch **main**, folder **/ (root)** → **Save**.
3. 1–2 minute baad link: **https://jokerwalbrothersindia-spec.github.io/job-work-khata/**

### Step 7: Firebase ko GitHub ka address batao (zaroori!)
Firebase → **Authentication → Settings → Authorized domains → Add domain** →
`jokerwalbrothersindia-spec.github.io` → **Add**.
> Ye chhoot gaya to login pe error aayega.

### Step 8: Apni company banao (pehli baar)
1. Link kholo → **Sign in with Google** (jokerwalbrothers@gmail.com).
2. **Create your company** → `Jokerwal Brothers`. Aapki company **turant active** ho jayegi.
3. **Settings → "Import data from the earlier app"** → purana data aa jayega (sirf aapko dikhta hai, sirf ek baar).
4. **Settings → Users** → Vinod bhai / staff ka Gmail, naam aur role (Manager/Staff) daal kar **Add user**.
5. Import ke baad GitHub repo mein **old-data.json** file kholo → 🗑️ **Delete file** → Commit. (Usme purane worker ka naam/number hai.)

---

## Pehle din ka test (2 Gmail se — zaroor karna)
Bechne se pehle ek doosre Gmail (ya ghar ke kisi ka) se ye check kar lo:
1. Doosre Gmail se login → nayi company banao → **"awaiting activation"** dikhna chahiye, koi data nahi.
2. Apne Gmail se **Settings → Admin panel** → woh company dikhegi → **Activate**.
3. Doosre phone pe app apne aap khul jana chahiye — aur **khaali** hona chahiye (aapke workers/entries nahi dikhne chahiye).
4. Doosri company mein Vinod ka Gmail add karne ki koshish karo → "already linked to another company" aana chahiye.

Kuch bhi alag dikhe to screenshot bhejo.

---

## Roz ka kaam — bechna
1. Customer ko link bhejo.
2. Woh signup karta hai → aapko WhatsApp aata hai (message mein company ka naam aur email hota hai).
3. Payment check karo → **Admin panel → Activate**. Note mein payment ID likh do.
4. Saal bhar ka plan dena ho to **Valid till** tarikh daal do — us din ke baad app "Plan expired" dikhayega (data safe rehta hai). Renew pe tarikh badha do.
5. Paisa na aaye ya band karna ho → **Pause**. Wapas chalu → **Resume**.

---

## Kharcha aur limits
- Firebase ka **free plan (Spark)**: roz ~50,000 reads, ~20,000 writes, 1 GB data. Shuru mein 10–20 chhoti companies ke liye kaafi.
- Customers badhne par Firebase mein **Blaze (pay-as-you-go)** plan lagana — card lagta hai, kharcha istemaal ke hisaab se (chhote use pe bahut kam). Budget alert zaroor lagana.
- GitHub Pages free hai.

## Bechne se pehle (salah)
- Ek simple **Privacy Policy** aur **Terms** page bana lo (customer ka data aapke Firebase mein rehta hai).
- Apna domain lagana ho (jaise `khata.jokerwalbrothers.com`) to GitHub Pages → Custom domain — aur woh domain Firebase Authorized domains mein bhi add karna.
- Automatic payment se turant activate (bina aapke click ke) ke liye server chahiye (Firebase Functions, Blaze plan). Abhi manual activate rakha hai.

## Badlav karna ho to
GitHub repo → file kholo → ✏️ Edit → **Commit changes**. 1–2 minute mein live.
Phone pe naya version na dikhe to app band karke dobara kholo.
