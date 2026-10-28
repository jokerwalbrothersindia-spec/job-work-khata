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
  priceText: "₹1,499 (lifetime)",
  paymentLink: "",                           // Razorpay payment link (https://rzp.io/...) — na ho to khaali chhodo
  contactWhatsApp: "918591616363",          // aapka WhatsApp number, 91 ke saath, bina + ke

  // Firebase config (job-work-khata project)
  firebase: {
    apiKey: "AIzaSyBAu2m3KKa_Hjh-exK89nlNMHjeemutxyE",
    authDomain: "job-work-khata.firebaseapp.com",
    projectId: "job-work-khata",
    storageBucket: "job-work-khata.firebasestorage.app",
    messagingSenderId: "873586000923",
    appId: "1:873586000923:web:8a891d4c1c9daa832ae4be"
  }
};
