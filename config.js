/*
  ===== SIRF YEH FILE BADALNI HAI =====
  README ka Step 4 dekho.
*/
window.KHATA_CONFIG = {
  // Aap (app bechne wale) — is email se login karne par "Admin Panel" milega
  superAdminEmail: "jokerwalbrothers@gmail.com",

  // App ka naam (customer ko yahi dikhega)
  appName: "Job Work Khata",
  sellerName: "Jokerwal Brothers",

  // Naya customer jab tak activate na ho, use ye dikhega
  priceText: "₹ ____ (one-time)",          // apni keemat likho, jaise "₹4,999 (one-time)"
  paymentLink: "",                           // Razorpay payment link (https://rzp.io/...) — na ho to khaali chhodo
  contactWhatsApp: "91XXXXXXXXXX",           // aapka WhatsApp number, 91 ke saath, bina + ke

  // Firebase console se copy kiya hua config
  firebase: {
    apiKey: "PASTE_API_KEY_HERE",
    authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
    projectId: "PASTE_PROJECT_ID",
    storageBucket: "PASTE_PROJECT_ID.appspot.com",
    messagingSenderId: "PASTE_SENDER_ID",
    appId: "PASTE_APP_ID"
  }
};
