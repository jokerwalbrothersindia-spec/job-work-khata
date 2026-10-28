/* Job Work Khata — multi-company app (Firebase) */
(function(){
"use strict";
const CFG=window.KHATA_CONFIG||{};
const SUPER=String(CFG.superAdminEmail||"").trim().toLowerCase();
const APP=CFG.appName||"Job Work Khata";
const SELLER=CFG.sellerName||"";

/* ================= TEXT (English / Hindi) ================= */
const L={
en:{
brandSub:"Job work ledger",hello:"Welcome back",you:"You",someone:"Team member",
role_owner:"Owner",role_manager:"Manager",role_staff:"Staff",
role_desc_manager:"Manager — entries, deletes, adds staff",role_desc_staff:"Staff — issue & receive only",
sync_connecting:"Connecting…",sync_live:"All changes saved · live for your team",sync_offline_saved:"Offline — entries will sync when you are back online",sync_err:"Connection lost — reload the page",
tab_home:"Home",tab_issue:"Issue",tab_receive:"Receive",tab_ledger:"Ledger",tab_setup:"Settings",
q_issue:"Issue",q_receive:"Receive",q_pay:"Payment",q_stmt:"Statement",
st_open:"Active jobs",st_out:"Pcs outside",st_short:"Shortages",st_pay:"Payable to workers",
alerts_h:"Needs attention",recent_h:"Recent activity",
loading:"Loading data…",empty_recent_t:"No entries yet",empty_recent_s:"Add job types, products and workers in Settings, then tap + to issue material.",
ev_issued:"Issued {0} pcs",ev_recv:"Received {0} pcs",ev_pay:"Paid {0}",by:"by {0}",
issue_h:"Issue material",issue_sub:"Record material handed to a worker. The job value is calculated automatically. Date, time and your name are saved with the entry.",
f_worker:"Worker",f_product:"Product",f_work:"Job type",f_pcs:"Pieces issued",f_date:"Date",f_per:"{0} per piece",f_rate:"Rate ₹ per {0}",f_note:"Note (optional)",ph_note:"e.g. lot no., colour",btn_issue:"Save issue entry",
ph_worker:"Select worker",ph_worker_none:"Add a worker in Settings first",ph_product:"Select product",ph_product_none:"Add a product in Settings first",ph_work:"Select job type",ph_work_none:"Add a job type in Settings first",all_workers:"All",unit:"unit",pcs:"pcs",
rc_h:"Receive material",rc_sub:"Record finished pieces as they come back. Each return is saved with date, time and who received it.",rc_date:"Return date",
empty_rc_t:"No material outstanding",empty_rc_s:"Jobs appear here once material has been issued.",
worker_removed:"(worker removed)",pill_open:"Active",pill_short:"Short",pill_closed:"Complete",
c_issued:"Issued",c_recv:"Received",c_bal:"Pending",rc_now:"Pieces received now",btn_record:"Record",btn_close:"Close job",
h_issued:"Issued {0} pcs",h_recv:"Received {0} pcs",h_debit:"Debit {0} pcs × {1} = {2}",h_closed_short:"Closed short by {0} pcs",
alert_short:"Shortage: {0} pcs not returned.",alert_detail:"{0} issued, only {1} received.",debit_per:"Debit ₹ per piece",btn_debit:"Apply debit",debit_total:"Total debit: {0} pcs × {1} = {2}",
btn_waive:"Close without debit",btn_reopen:"More due — reopen",note_label:"Note: ",staff_short:"A manager or owner can apply the debit.",
ledger_h:"Worker ledger",ledger_sub:"Tap a worker to see the full statement and record payments.",from:"From",to:"To",back:"All workers",
no_workers_t:"No workers yet",no_workers_s:"Add your workers in Settings.",
st_earn:"Earnings",st_debit:"Debits",st_paid:"Paid",st_bal:"Balance due",holding:"{0} currently holds {1} pcs of material.",pcs_out:"{0} pcs outside",
entries:"Statement",no_entries:"No entries in this period.",
r_issued:"Issued · {0} · {1} pcs",r_recv:"Received · {0} · {1} pcs × {2} {3} × {4}",r_debit:"Shortage debit · {0} · {1} pcs × {2}",r_pay:"Payment",bal_after:"bal {0}",
btn_remove:"Remove",confirm_remove:"Tap again to confirm",btn_copy:"Copy statement",btn_wa:"Send on WhatsApp",pay_h:"Record payment",amount:"Amount ₹",ph_paynote:"Cash / UPI",btn_pay:"Save payment",
setup_h:"Settings",setup_sub:"Your company, team, job types, products and worker rates.",
company_h:"Company",co_status:"Plan status",co_valid:"Valid till {0}",co_lifetime:"Lifetime",
team_h:"Users",team_hint_admin:"Only people on this list can open your company's data. Add each partner or staff member by their Gmail address — they sign in with Google.",team_hint_staff:"People who can use this company's khata.",
f_temail:"Gmail address",f_tname:"Name",f_trole:"Access",btn_addteam:"Add user",
mobile_how:"How to use this on your phone",
mobile_steps:["Open the app link in <b>Chrome</b> on your phone.","Tap <b>Sign in with Google</b> (one time only).","Tap <b>Install app</b> when Chrome offers it, or use the <b>⋮</b> menu → <b>Add to Home screen</b>.","Open it from the home screen icon like a normal app. Entries made without internet sync automatically later.","Use the gold <b>+</b> button to issue material and <b>Receive</b> when it comes back."],
btn_import:"Import data from the earlier app",import_hint:"One time only. Brings over the job types, products, workers and entries made in the earlier app.",
works_h:"Job types",f_wname:"Job type",f_wunit:"Unit",btn_add:"Add",unit_label:"unit: {0}",works_hint:"Example: Kadi Fitting (kadi), Moti Bharai (moti), Stone Work (stone), Packing (pcs).",
products_h:"Products",f_pname:"Product name",prod_none:"No material counts set yet",per_pc_summary:"Material required per piece",btn_save:"Save",products_hint:"Example: Choki Choker — Kadi Fitting uses 36 kadi per piece.",
workers_h:"Workers & rates",f_kname:"Worker name",f_phone:"WhatsApp number (optional)",btn_addworker:"Add worker",rate_none:"Rates not set",rates_summary:"Rates for this worker",workers_hint:"Add a worker, then set a separate rate for each job type.",
admin_only:"Only an owner or manager can change this.",
btn_google:"Sign in with Google",btn_signout:"Sign out",btn_admin:"Admin panel",back_app:"Back to app",
auth_setup_h:"Setup not finished",auth_setup_p:"Paste your Firebase details into config.js. The README file has the steps.",
auth_signin_h:"Welcome",auth_signin_p:"Sign in with your Google account to open your company's job work ledger.",
auth_loading_h:"Signing in…",auth_loading_p:"{0}",
auth_create_h:"Create your company",auth_create_p:"Signed in as {0}. Set up your company to start. Only you and the users you add will see its data.",
c_note:"Joining an existing company? Do not create a new one — ask its owner to add {0} under Settings → Users.",
f_coname:"Company name",f_cophone:"Phone",f_cocity:"City",btn_create:"Create company",
auth_pending_h:"Account awaiting activation",auth_pending_p:"{0} has been created. It will open as soon as your plan is activated.",
price_lbl:"Plan",price_note:"Pay once, then message us. Your account is activated after payment is confirmed.",btn_pay_now:"Pay now",btn_contact:"Message on WhatsApp",seller_no:"WhatsApp:",
wa_msg:"Hello, I want to activate {0} on {1}. My login email: {2}",
auth_blocked_h:"Account paused",auth_blocked_p:"Access to {0} is paused. Please contact the seller.",
auth_expired_h:"Plan expired",auth_expired_p:"The plan for {0} ended on {1}. Renew to continue — your data is safe.",
auth_error_h:"Could not load your account",auth_error_p:"Check your internet and reload the page.",
admin_h:"Admin panel",admin_sub:"Companies that signed up. Activate after payment. You see only company details here, never their khata data.",
ad_total:"Companies",ad_active:"Active",ad_pending:"Awaiting activation",ad_blocked:"Paused",ph_search:"Search name, email, phone, city",
f_valid:"Valid till (optional)",f_adnote:"Note (payment ref.)",btn_activate:"Activate",btn_block:"Pause",btn_unblock:"Resume",btn_savead:"Save",
st_pending:"Pending",st_active:"Active",st_blocked:"Paused",st_expired:"Expired",created_on:"Signed up {0}",owner_lbl:"Owner: {0}",
ad_empty:"No companies yet.",
t_fail:"Could not save. Please try again.",t_quota:"Storage limit reached.",t_offline:"Saving is unavailable right now.",t_perm:"You do not have permission for this.",t_owner:"Only an owner or manager can do this.",
t_need3:"Select worker, product and job type.",t_needpcs:"Enter the number of pieces.",t_needper:"Enter material per piece.",t_needrate:"Enter the rate.",t_issued:"Saved: {0} pcs issued to {1}",
t_needname:"Enter a name.",t_dup:"This already exists.",t_work_added:"Job type added",t_prod_added:"Product added — now set material per piece",t_worker_added:"Worker added — now set the rates",
t_needamt:"Enter an amount.",t_paid:"Payment saved",t_needrecv:"Enter the pieces received.",t_toomany:"Only {0} pcs are pending.",t_complete:"All pieces received — job complete",t_recv:"Recorded: {0} received, {1} pending",
t_closed:"Job closed",t_short:"Alert: {0} pcs short!",t_needdebit:"Enter the debit per piece.",t_debited:"Debit applied: {0}",t_waived:"Job closed without debit",t_reopened:"Job reopened",t_saved:"Saved",
t_inuse:"This has entries and cannot be removed.",t_removed:"Removed",t_copied:"Copied — paste it in WhatsApp",t_selected:"Text selected — copy it manually",
t_imported:"Imported {0} records",t_team_added:"User added — they can sign in now",t_bademail:"Enter a valid email address.",t_login_fail:"Sign-in failed. Please try again.",
t_email_taken:"This email is already linked to another company.",t_created:"Company created",t_activated:"Activated",t_blocked:"Paused",t_needco:"Enter your company name.",
stmt_title:"*{0} — Job Work Statement*",stmt_worker:"Worker",stmt_period:"Period: {0} to {1}",stmt_start:"start",stmt_today:"today"
},
hi:{
brandSub:"जॉब वर्क खाता",hello:"स्वागत है",you:"आप",someone:"टीम सदस्य",
role_owner:"मालिक",role_manager:"मैनेजर",role_staff:"स्टाफ़",
role_desc_manager:"मैनेजर — एंट्री, डिलीट, स्टाफ़ जोड़ना",role_desc_staff:"स्टाफ़ — केवल माल देना और लेना",
sync_connecting:"कनेक्ट हो रहा है…",sync_live:"सब सेव · आपकी टीम के लिए लाइव",sync_offline_saved:"ऑफ़लाइन — इंटरनेट आने पर एंट्री अपने आप सिंक होंगी",sync_err:"कनेक्शन टूट गया — पेज रीलोड करें",
tab_home:"होम",tab_issue:"जारी",tab_receive:"वापसी",tab_ledger:"खाता",tab_setup:"सेटिंग्स",
q_issue:"माल जारी",q_receive:"वापसी",q_pay:"भुगतान",q_stmt:"खाता",
st_open:"चालू जॉब",st_out:"बाहर पीस",st_short:"कमी",st_pay:"कारीगरों को देय",
alerts_h:"ध्यान दें",recent_h:"हाल की गतिविधि",
loading:"डेटा लोड हो रहा है…",empty_recent_t:"अभी कोई एंट्री नहीं",empty_recent_s:"सेटिंग्स में काम, प्रोडक्ट और कारीगर जोड़ें, फिर + दबाकर माल जारी करें।",
ev_issued:"{0} पीस जारी",ev_recv:"{0} पीस वापस",ev_pay:"भुगतान {0}",by:"{0} द्वारा",
issue_h:"माल जारी करें",issue_sub:"कारीगर को दिए गए माल की एंट्री करें। राशि अपने आप बनेगी। तारीख, समय और आपका नाम एंट्री के साथ सेव होगा।",
f_worker:"कारीगर",f_product:"प्रोडक्ट",f_work:"काम",f_pcs:"जारी पीस",f_date:"तारीख",f_per:"प्रति पीस {0}",f_rate:"दर ₹ प्रति {0}",f_note:"नोट (वैकल्पिक)",ph_note:"जैसे लॉट नं., रंग",btn_issue:"एंट्री सेव करें",
ph_worker:"कारीगर चुनें",ph_worker_none:"पहले सेटिंग्स में कारीगर जोड़ें",ph_product:"प्रोडक्ट चुनें",ph_product_none:"पहले सेटिंग्स में प्रोडक्ट जोड़ें",ph_work:"काम चुनें",ph_work_none:"पहले सेटिंग्स में काम जोड़ें",all_workers:"सभी",unit:"यूनिट",pcs:"पीस",
rc_h:"माल वापसी",rc_sub:"तैयार पीस वापस आने पर एंट्री करें। हर वापसी तारीख, समय और लेने वाले के नाम के साथ सेव होती है।",rc_date:"वापसी की तारीख",
empty_rc_t:"कोई माल बाहर नहीं",empty_rc_s:"माल जारी करने पर जॉब यहाँ दिखेंगे।",
worker_removed:"(कारीगर हटाया गया)",pill_open:"चालू",pill_short:"कमी",pill_closed:"पूरा",
c_issued:"जारी",c_recv:"वापस",c_bal:"बाकी",rc_now:"अभी आए पीस",btn_record:"दर्ज करें",btn_close:"जॉब बंद करें",
h_issued:"{0} पीस जारी",h_recv:"{0} पीस वापस",h_debit:"डेबिट {0} पीस × {1} = {2}",h_closed_short:"{0} पीस कम के साथ बंद",
alert_short:"कमी: {0} पीस वापस नहीं आए।",alert_detail:"{0} जारी किए, केवल {1} वापस आए।",debit_per:"डेबिट ₹ प्रति पीस",btn_debit:"डेबिट करें",debit_total:"कुल डेबिट: {0} पीस × {1} = {2}",
btn_waive:"बिना डेबिट बंद करें",btn_reopen:"और आना बाकी — फिर खोलें",note_label:"नोट: ",staff_short:"डेबिट मैनेजर या मालिक कर सकते हैं।",
ledger_h:"कारीगर खाता",ledger_sub:"पूरा खाता देखने और भुगतान दर्ज करने के लिए कारीगर पर टैप करें।",from:"से",to:"तक",back:"सभी कारीगर",
no_workers_t:"अभी कोई कारीगर नहीं",no_workers_s:"सेटिंग्स में अपने कारीगर जोड़ें।",
st_earn:"कमाई",st_debit:"डेबिट",st_paid:"भुगतान",st_bal:"बाकी देय",holding:"{0} के पास अभी {1} पीस माल है।",pcs_out:"{0} पीस बाहर",
entries:"खाता विवरण",no_entries:"इस अवधि में कोई एंट्री नहीं।",
r_issued:"जारी · {0} · {1} पीस",r_recv:"वापस · {0} · {1} पीस × {2} {3} × {4}",r_debit:"कमी डेबिट · {0} · {1} पीस × {2}",r_pay:"भुगतान",bal_after:"बाकी {0}",
btn_remove:"हटाएँ",confirm_remove:"पक्का करने के लिए फिर दबाएँ",btn_copy:"खाता कॉपी करें",btn_wa:"व्हाट्सऐप पर भेजें",pay_h:"भुगतान दर्ज करें",amount:"राशि ₹",ph_paynote:"नकद / UPI",btn_pay:"भुगतान सेव करें",
setup_h:"सेटिंग्स",setup_sub:"आपकी कंपनी, यूज़र, काम, प्रोडक्ट और कारीगरों की दरें।",
company_h:"कंपनी",co_status:"प्लान स्थिति",co_valid:"{0} तक मान्य",co_lifetime:"लाइफ़टाइम",
team_h:"यूज़र",team_hint_admin:"केवल इस सूची के लोग आपकी कंपनी का डेटा खोल सकते हैं। हर पार्टनर या स्टाफ़ को उनके Gmail से जोड़ें — वे Google से साइन इन करेंगे।",team_hint_staff:"इस कंपनी का खाता इस्तेमाल करने वाले लोग।",
f_temail:"Gmail पता",f_tname:"नाम",f_trole:"अनुमति",btn_addteam:"यूज़र जोड़ें",
mobile_how:"फ़ोन पर कैसे चलाएँ",
mobile_steps:["फ़ोन में ऐप का लिंक <b>Chrome</b> में खोलें।","<b>Google से साइन इन करें</b> दबाएँ (सिर्फ़ एक बार)।","Chrome में <b>Install app</b> आए तो दबाएँ, या <b>⋮</b> मेनू → <b>Add to Home screen</b> चुनें।","अब होम स्क्रीन के आइकन से इसे आम ऐप की तरह खोलें। बिना इंटरनेट की एंट्री बाद में अपने आप सिंक हो जाएँगी।","माल जारी करने के लिए सुनहरा <b>+</b> बटन और वापस आने पर <b>वापसी</b> इस्तेमाल करें।"],
btn_import:"पुराने ऐप का डेटा लाएँ",import_hint:"सिर्फ़ एक बार। पुराने ऐप के काम, प्रोडक्ट, कारीगर और एंट्री यहाँ आ जाएँगी।",
works_h:"काम के प्रकार",f_wname:"काम का नाम",f_wunit:"यूनिट",btn_add:"जोड़ें",unit_label:"यूनिट: {0}",works_hint:"उदाहरण: Kadi Fitting (kadi), Moti Bharai (moti), Stone Work (stone), Packing (pcs)।",
products_h:"प्रोडक्ट",f_pname:"प्रोडक्ट का नाम",prod_none:"अभी कोई गिनती तय नहीं",per_pc_summary:"प्रति पीस कितनी सामग्री लगती है",btn_save:"सेव करें",products_hint:"उदाहरण: Choki Choker — Kadi Fitting में प्रति पीस 36 कड़ी।",
workers_h:"कारीगर और दरें",f_kname:"कारीगर का नाम",f_phone:"व्हाट्सऐप नंबर (वैकल्पिक)",btn_addworker:"कारीगर जोड़ें",rate_none:"दर तय नहीं",rates_summary:"इस कारीगर की दरें",workers_hint:"कारीगर जोड़ें, फिर हर काम की अलग दर तय करें।",
admin_only:"इसे केवल मालिक या मैनेजर बदल सकते हैं।",
btn_google:"Google से साइन इन करें",btn_signout:"साइन आउट",btn_admin:"एडमिन पैनल",back_app:"ऐप पर वापस",
auth_setup_h:"सेटअप पूरा नहीं हुआ",auth_setup_p:"config.js में अपनी Firebase जानकारी डालें। स्टेप README फ़ाइल में हैं।",
auth_signin_h:"स्वागत है",auth_signin_p:"अपनी कंपनी का जॉब वर्क खाता खोलने के लिए Google अकाउंट से साइन इन करें।",
auth_loading_h:"साइन इन हो रहा है…",auth_loading_p:"{0}",
auth_create_h:"अपनी कंपनी बनाएँ",auth_create_p:"आप {0} से साइन इन हैं। शुरू करने के लिए अपनी कंपनी बनाएँ। इसका डेटा केवल आप और आपके जोड़े गए यूज़र देख पाएँगे।",
c_note:"किसी मौजूदा कंपनी से जुड़ना है? नई कंपनी न बनाएँ — उसके मालिक से कहें कि सेटिंग्स → यूज़र में {0} जोड़ें।",
f_coname:"कंपनी का नाम",f_cophone:"फ़ोन",f_cocity:"शहर",btn_create:"कंपनी बनाएँ",
auth_pending_h:"अकाउंट चालू होने का इंतज़ार",auth_pending_p:"{0} बन गई है। प्लान चालू होते ही यह खुल जाएगी।",
price_lbl:"प्लान",price_note:"एक बार भुगतान करें, फिर हमें मैसेज करें। भुगतान की पुष्टि के बाद अकाउंट चालू होगा।",btn_pay_now:"अभी भुगतान करें",btn_contact:"व्हाट्सऐप पर मैसेज करें",seller_no:"व्हाट्सऐप:",
wa_msg:"नमस्ते, मुझे {1} पर {0} चालू करवानी है। मेरा लॉगिन ईमेल: {2}",
auth_blocked_h:"अकाउंट रोका गया है",auth_blocked_p:"{0} का एक्सेस रोका गया है। कृपया विक्रेता से संपर्क करें।",
auth_expired_h:"प्लान समाप्त",auth_expired_p:"{0} का प्लान {1} को समाप्त हो गया। जारी रखने के लिए रिन्यू करें — आपका डेटा सुरक्षित है।",
auth_error_h:"अकाउंट लोड नहीं हुआ",auth_error_p:"इंटरनेट जाँचें और पेज रीलोड करें।",
admin_h:"एडमिन पैनल",admin_sub:"साइन-अप करने वाली कंपनियाँ। भुगतान के बाद चालू करें। यहाँ केवल कंपनी की जानकारी दिखती है, उनका खाता डेटा नहीं।",
ad_total:"कंपनियाँ",ad_active:"चालू",ad_pending:"चालू होने बाकी",ad_blocked:"रोकी गई",ph_search:"नाम, ईमेल, फ़ोन, शहर खोजें",
f_valid:"कब तक मान्य (वैकल्पिक)",f_adnote:"नोट (भुगतान रेफ़.)",btn_activate:"चालू करें",btn_block:"रोकें",btn_unblock:"फिर चालू करें",btn_savead:"सेव करें",
st_pending:"बाकी",st_active:"चालू",st_blocked:"रोकी गई",st_expired:"समाप्त",created_on:"साइन-अप {0}",owner_lbl:"मालिक: {0}",
ad_empty:"अभी कोई कंपनी नहीं।",
t_fail:"सेव नहीं हुआ, फिर से कोशिश करें।",t_quota:"स्टोरेज सीमा पूरी हो गई।",t_offline:"अभी सेव नहीं हो सकता।",t_perm:"आपके पास इसकी अनुमति नहीं है।",t_owner:"यह केवल मालिक या मैनेजर कर सकते हैं।",
t_need3:"कारीगर, प्रोडक्ट और काम चुनें।",t_needpcs:"पीस की संख्या डालें।",t_needper:"प्रति पीस सामग्री डालें।",t_needrate:"दर डालें।",t_issued:"सेव हुआ: {1} को {0} पीस जारी",
t_needname:"नाम डालें।",t_dup:"यह पहले से मौजूद है।",t_work_added:"काम जोड़ा गया",t_prod_added:"प्रोडक्ट जोड़ा गया — अब प्रति पीस सामग्री डालें",t_worker_added:"कारीगर जोड़ा गया — अब दरें तय करें",
t_needamt:"राशि डालें।",t_paid:"भुगतान सेव हुआ",t_needrecv:"वापस आए पीस डालें।",t_toomany:"केवल {0} पीस बाकी हैं।",t_complete:"सभी पीस वापस — जॉब पूरा",t_recv:"दर्ज: {0} वापस, {1} बाकी",
t_closed:"जॉब बंद",t_short:"अलर्ट: {0} पीस कम!",t_needdebit:"प्रति पीस डेबिट डालें।",t_debited:"डेबिट हुआ: {0}",t_waived:"बिना डेबिट जॉब बंद",t_reopened:"जॉब फिर खुला",t_saved:"सेव हुआ",
t_inuse:"इसकी एंट्री मौजूद हैं, इसे हटाया नहीं जा सकता।",t_removed:"हटाया गया",t_copied:"कॉपी हुआ — व्हाट्सऐप में पेस्ट करें",t_selected:"टेक्स्ट चुना गया — कॉपी कर लें",
t_imported:"{0} रिकॉर्ड आ गए",t_team_added:"यूज़र जोड़ा गया — अब वे साइन इन कर सकते हैं",t_bademail:"सही ईमेल पता डालें।",t_login_fail:"साइन इन नहीं हुआ, फिर से कोशिश करें।",
t_email_taken:"यह ईमेल पहले से किसी दूसरी कंपनी से जुड़ा है।",t_created:"कंपनी बन गई",t_activated:"चालू किया गया",t_blocked:"रोका गया",t_needco:"कंपनी का नाम डालें।",
stmt_title:"*{0} — जॉब वर्क खाता*",stmt_worker:"कारीगर",stmt_period:"अवधि: {0} से {1}",stmt_start:"शुरू",stmt_today:"आज"
}};
let lang="en";
try{const s=localStorage.getItem("jw-lang");if(s==="hi"||s==="en")lang=s}catch(e){}
const $=s=>document.querySelector(s);
function t(k){const a=arguments;const s=(L[lang][k]!=null?L[lang][k]:L.en[k]);if(s==null)return k;if(Array.isArray(s))return s;return s.replace(/\{(\d)\}/g,(m,i)=>a[+i+1]!=null?a[+i+1]:"")}

/* ================= STATE ================= */
const COLLS=["works","products","workers","jobs","payments"];
const S={works:[],products:[],workers:[],jobs:[],payments:[]};
const loaded=new Set(),PROF={};
let fs=null,auth=null,db=null,cid=null,company=null,ME=null,myId=null,myRole=null,isSuper=false;
let view="home",syncKey="sync_connecting",rcWorker="",lWorker="",TEAM=[],unsubs=[],dataUnsubs=[],importDone=true;
let authState="loading",authEmail="",COMPANIES=[],adFilter="",adUnsub=null,inAdmin=false;
const isAdmin=()=>myRole==="owner"||myRole==="manager";
const isOwner=()=>myRole==="owner";

const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const today=()=>{const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const rs=n=>"₹"+(Math.round((+n||0)*100)/100).toLocaleString("en-IN",{maximumFractionDigits:2});
const nf=n=>(Math.round((+n||0)*100)/100).toLocaleString("en-IN");
const fd=d=>{if(!d)return"";const p=String(d).split("-");return p.length<3?d:p[2]+"/"+p[1]+"/"+p[0].slice(2)};
const tm=ts=>ts?new Date(ts).toLocaleTimeString("en-IN",{hour:"numeric",minute:"2-digit"}):"";
const fdt=(d,ts)=>fd(d)+(ts?", "+tm(ts):"");
const get=(c,id)=>S[c].find(x=>x.id===id);
const byName=a=>a.slice().sort((x,y)=>String(x.name).localeCompare(String(y.name)));
const returned=j=>(j.receipts||[]).reduce((a,r)=>a+(+r.pcs||0),0);
const unitOf=wid=>{const w=get("works",wid);return w&&w.unit?w.unit:t("unit")};
const initials=n=>String(n||"?").trim().split(/[\s@.]+/).filter(Boolean).map(x=>x[0]).slice(0,2).join("").toUpperCase()||"?";
const waiting=()=>loaded.size<COLLS.length;
const emptyBox=(a,b)=>'<div class="empty"><b>'+esc(a)+'</b>'+esc(b)+'</div>';
const stat=(v,l,c)=>'<div class="stat'+(c?" "+c:"")+'"><b>'+v+'</b><span>'+esc(l)+'</span></div>';
function avatarFor(name,email){
  return "data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" fill="#2c2414"/><text x="20" y="26" text-anchor="middle" font-family="Georgia,serif" font-size="15" fill="#d6ab55">'+esc(initials(name||email))+'</text></svg>');
}
function whoName(id){if(!id)return"";if(id===myId)return t("you");const p=PROF[id];return p&&p.name?p.name:(String(id).includes("@")?String(id).split("@")[0]:t("someone"))}
function byTag(id,ts,d){if(!id&&!ts)return"";const p=id?PROF[id]:null;return '<span class="by">'+(p?'<img alt="" src="'+esc(p.avatarUrl)+'">':'')+esc((id?t("by",whoName(id)):"")+(ts?" · "+fdt(d,ts):""))+'</span>'}
function toast(msg){const el=$("#toast");el.textContent=msg;el.hidden=false;clearTimeout(toast._t);toast._t=setTimeout(()=>el.hidden=true,2800)}
function fail(e){console.error(e);toast(e&&e.code==="permission-denied"?t("t_perm"):e&&e.code==="resource-exhausted"?t("t_quota"):t("t_fail"))}
function setSync(k){syncKey=k;$("#sync").textContent=t(k)}
function keep(el,html){
  const vals={};el.querySelectorAll("input[id],select[id]").forEach(i=>vals[i.id]=i.value);
  const openD=[...el.querySelectorAll("details[id][open]")].map(d=>d.id);
  const act=document.activeElement&&el.contains(document.activeElement)?document.activeElement.id:null;
  el.innerHTML=html;
  for(const id in vals){const i=document.getElementById(id);if(i&&vals[id]!=="")i.value=vals[id]}
  openD.forEach(id=>{const d=document.getElementById(id);if(d)d.open=true});
  if(act){const a=document.getElementById(act);if(a)a.focus()}
}
function fillSelect(sel,items,ph){
  const cur=sel.value;
  sel.innerHTML=(ph?'<option value="">'+esc(ph)+'</option>':"")+items.map(i=>'<option value="'+esc(i.id)+'">'+esc(i.name)+'</option>').join("");
  if(items.some(i=>i.id===cur))sel.value=cur;
}
function companyState(c){
  if(!c)return"pending";
  if(c.status==="blocked")return"blocked";
  if(c.status!=="active")return"pending";
  if(c.validTill&&c.validTill<today())return"expired";
  return"active";
}

/* ================= LANGUAGE ================= */
function applyLang(){
  document.documentElement.lang=lang==="hi"?"hi":"en";
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>el.placeholder=t(el.dataset.i18nPh));
  document.querySelectorAll("[data-lang]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===lang?"true":"false"));
  $("#mobile-steps").innerHTML=t("mobile_steps").map(s=>"<li>"+s+"</li>").join("");
  $("#me-hello").textContent=t("hello");
  $("#t-role").innerHTML='<option value="staff">'+esc(t("role_desc_staff"))+'</option>'+(isOwner()?'<option value="manager">'+esc(t("role_desc_manager"))+'</option>':'');
  setSync(syncKey);setUnitLabels();paintAuth();
}
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>{lang=b.dataset.lang;try{localStorage.setItem("jw-lang",lang)}catch(e){}applyLang();render();renderCalc()}));

/* ================= NAVIGATION ================= */
function show(v){
  view=v;
  document.querySelectorAll("[data-view]").forEach(s=>s.hidden=s.dataset.view!==v);
  document.querySelectorAll("[data-tab]").forEach(b=>{if(b.dataset.tab===v)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current")});
  $("#nav").hidden=v==="admin";
  try{history.replaceState(null,"","#"+v)}catch(e){}
  window.scrollTo(0,0);render();
}
document.querySelectorAll("[data-tab]").forEach(b=>b.addEventListener("click",()=>{if(b.dataset.tab==="ledger")lWorker="";show(b.dataset.tab)}));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>{lWorker="";show(b.dataset.go)}));

/* ================= RENDER ================= */
function render(){
  if(view==="admin"){renderAdmin();return}
  renderSelects();
  const n=S.jobs.filter(j=>j.status==="short").length;
  $("#dot-home").dataset.n=n;$("#dot-rc").dataset.n=n;
  $("#h-co").textContent=company&&company.name?company.name:APP;
  if(view==="home")renderHome();
  if(view==="receive")renderReceive();
  if(view==="ledger")renderLedger();
  if(view==="setup")renderSetup();
}
function renderSelects(){
  const W=byName(S.workers),P=byName(S.products),K=byName(S.works);
  fillSelect($("#i-worker"),W,t(W.length?"ph_worker":"ph_worker_none"));
  fillSelect($("#i-product"),P,t(P.length?"ph_product":"ph_product_none"));
  fillSelect($("#i-work"),K,t(K.length?"ph_work":"ph_work_none"));
}
const IC={out:'<svg class="ico" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',in:'<svg class="ico" viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>',pay:'<svg class="ico" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></svg>'};

function renderHome(){
  const open=S.jobs.filter(j=>j.status==="open");
  const outPcs=S.jobs.filter(j=>j.status!=="closed").reduce((a,j)=>a+Math.max(0,(+j.pcs||0)-returned(j)),0);
  const shortJobs=S.jobs.filter(j=>j.status==="short");
  let payable=0;S.workers.forEach(w=>payable+=balance(w.id).baaki);
  $("#h-pay").textContent=rs(payable);$("#h-open").textContent=open.length;$("#h-out").textContent=nf(outPcs);$("#h-short").textContent=shortJobs.length;
  $("#h-alerts-wrap").hidden=!shortJobs.length;
  keep($("#h-alerts"),shortJobs.map(jobCard).join(""));
  const ev=[];
  S.jobs.forEach(j=>{
    const w=get("workers",j.workerId),p=get("products",j.productId),k=get("works",j.workId);
    const nm=(w?w.name:"?")+" · "+(p?p.name:"?")+" · "+(k?k.name:"?");
    ev.push({k:"out",d:j.date,ts:j.createdAt||0,t:t("ev_issued",nf(j.pcs)),n:nm,by:j.by});
    (j.receipts||[]).forEach(r=>ev.push({k:"in",d:r.d,ts:r.ts||0,t:t("ev_recv",nf(r.pcs)),n:nm,by:r.by}));
  });
  S.payments.forEach(p=>{const w=get("workers",p.workerId);ev.push({k:"pay",d:p.date,ts:p.createdAt||0,t:t("ev_pay",rs(p.amount)),n:w?w.name:"?",by:p.by})});
  ev.sort((a,b)=>(b.d||"").localeCompare(a.d||"")||b.ts-a.ts);
  $("#h-recent").innerHTML=waiting()?'<div class="meta">'+t("loading")+'</div>':
    ev.length?'<div class="list feed">'+ev.slice(0,12).map(e=>'<div class="item"><span class="dotic '+e.k+'">'+IC[e.k]+'</span><div class="grow"><div><b>'+esc(e.t)+'</b></div><div class="meta">'+esc(e.n)+'</div>'+byTag(e.by,e.ts,e.d)+'</div></div>').join("")+'</div>':
    emptyBox(t("empty_recent_t"),t("empty_recent_s"));
}

function histLine(cls,sym,text,by,d,ts){return '<div class="h"><span class="hk '+cls+'">'+sym+'</span><span><b>'+esc(text)+'</b> <span class="who2">· '+esc(fdt(d,ts))+(by?" · "+esc(t("by",whoName(by))):"")+'</span></span></div>'}
function jobCard(j){
  const w=get("workers",j.workerId),p=get("products",j.productId),k=get("works",j.workId);
  const ret=returned(j),baaki=Math.max(0,(+j.pcs||0)-ret),u=j.unit||unitOf(j.workId);
  const pill={open:"pill_open",short:"pill_short",closed:"pill_closed"}[j.status];
  const pct=j.pcs?Math.min(100,Math.round(ret/j.pcs*100)):0;
  let h='<div class="job'+(j.status==="short"?" short":"")+'">'+
   '<div class="head"><div><div class="who">'+esc(w?w.name:t("worker_removed"))+'</div>'+
   '<div class="what">'+esc(p?p.name:"?")+' · '+esc(k?k.name:"?")+'</div>'+
   '<div class="meta num">'+nf(j.perPc)+' '+esc(u)+'/pc × '+rs(j.rate)+'</div></div>'+
   '<span class="pill '+j.status+'">'+t(pill)+'</span></div>'+
   '<div class="counts"><div><b>'+nf(j.pcs)+'</b><span>'+t("c_issued")+'</span></div><div><b>'+nf(ret)+'</b><span>'+t("c_recv")+'</span></div><div class="baaki"><b>'+nf(baaki)+'</b><span>'+t("c_bal")+'</span></div></div>'+
   '<div class="bar"><i style="width:'+pct+'%"></i></div>';
  h+='<div class="hist">'+histLine("out","↑",t("h_issued",nf(j.pcs)),j.by,j.date,j.createdAt)+
    (j.receipts||[]).map(r=>histLine("in","↓",t("h_recv",nf(r.pcs)),r.by,r.d,r.ts)).join("")+
    (j.shortAt?histLine("deb","!",t("h_closed_short",nf(j.shortPcs||baaki)),j.shortBy,j.shortDate,j.shortAt):"")+
    (j.debit?histLine("deb","₹",t("h_debit",nf(j.debit.pcs),rs(j.debit.perPc),rs(j.debit.amount)),j.debit.by,j.debit.date,j.debit.ts):"")+'</div>';
  if(j.status==="open"){
    h+='<div class="inline"><label><span>'+t("rc_now")+'</span><input id="rc-'+j.id+'" type="number" inputmode="numeric" min="1" max="'+baaki+'" placeholder="'+baaki+'"></label>'+
       '<button class="primary" data-act="recv" data-id="'+j.id+'">'+t("btn_record")+'</button></div>'+
       '<div class="btns"><button class="small ghost" data-act="close" data-id="'+j.id+'">'+t("btn_close")+'</button></div>';
  }
  if(j.status==="short"){
    const sp=+j.shortPcs||baaki;
    h+='<div class="alertbox"><div><strong>'+esc(t("alert_short",nf(sp)))+'</strong> '+esc(t("alert_detail",nf(j.pcs),nf(ret)))+'</div>';
    if(isAdmin()){
      h+='<div class="inline"><label><span>'+t("debit_per")+'</span><input id="dp-'+j.id+'" type="number" inputmode="decimal" min="0" step="any" placeholder="40" data-short="'+sp+'"></label>'+
        '<button class="danger" data-act="debit" data-id="'+j.id+'">'+t("btn_debit")+'</button></div>'+
        '<div class="meta num" id="dpt-'+j.id+'">'+esc(t("debit_total",nf(sp),"₹?","—"))+'</div>'+
        '<div class="btns"><button class="small ghost" data-act="waive" data-id="'+j.id+'">'+t("btn_waive")+'</button><button class="small ghost" data-act="reopen" data-id="'+j.id+'">'+t("btn_reopen")+'</button></div>';
    }else h+='<div class="meta">'+t("staff_short")+'</div>';
    h+='</div>';
  }
  if(j.note)h+='<div class="meta">'+t("note_label")+esc(j.note)+'</div>';
  return h+'</div>';
}

function renderReceive(){
  const pending=S.jobs.filter(j=>j.status==="open"||j.status==="short");
  const wids=[...new Set(pending.map(j=>j.workerId))].map(id=>get("workers",id)).filter(Boolean);
  if(rcWorker&&!wids.some(w=>w.id===rcWorker))rcWorker="";
  $("#rc-chips").innerHTML='<button class="chip" data-chip="" aria-pressed="'+(!rcWorker)+'">'+t("all_workers")+' · '+pending.length+'</button>'+
    byName(wids).map(w=>'<button class="chip" data-chip="'+esc(w.id)+'" aria-pressed="'+(rcWorker===w.id)+'">'+esc(w.name)+' · '+pending.filter(j=>j.workerId===w.id).length+'</button>').join("");
  const js=pending.filter(j=>!rcWorker||j.workerId===rcWorker)
    .sort((a,b)=>(a.status==="short"?0:1)-(b.status==="short"?0:1)||(a.date||"").localeCompare(b.date||""));
  keep($("#rc-list"),waiting()?'<div class="meta">'+t("loading")+'</div>':js.length?js.map(jobCard).join(""):emptyBox(t("empty_rc_t"),t("empty_rc_s")));
}
$("#rc-chips").addEventListener("click",e=>{const c=e.target.closest("[data-chip]");if(!c)return;rcWorker=c.dataset.chip;renderReceive()});

/* ================= LEDGER ================= */
function ledgerRows(wid,from,to){
  const rows=[];
  S.jobs.filter(j=>j.workerId===wid).forEach(j=>{
    const p=get("products",j.productId),k=get("works",j.workId),u=j.unit||unitOf(j.workId);
    const nm=(p?p.name:"?")+" · "+(k?k.name:"?");
    rows.push({d:j.date,ts:j.createdAt||0,desc:t("r_issued",nm,nf(j.pcs)),amt:0,by:j.by});
    (j.receipts||[]).forEach(r=>rows.push({d:r.d,ts:r.ts||0,desc:t("r_recv",nm,nf(r.pcs),nf(j.perPc),u,rs(j.rate)),amt:(+r.pcs)*(+j.perPc)*(+j.rate),type:"earn",by:r.by}));
    if(j.debit)rows.push({d:j.debit.date,ts:j.debit.ts||0,desc:t("r_debit",nm,nf(j.debit.pcs),rs(j.debit.perPc)),amt:-j.debit.amount,type:"debit",by:j.debit.by});
  });
  S.payments.filter(p=>p.workerId===wid).forEach(p=>rows.push({d:p.date,ts:p.createdAt||0,desc:t("r_pay")+(p.note?" · "+p.note:""),amt:-p.amount,type:"pay",pid:p.id,by:p.by}));
  rows.sort((a,b)=>(a.d||"").localeCompare(b.d||"")||a.ts-b.ts);
  return rows.filter(r=>(!from||r.d>=from)&&(!to||r.d<=to));
}
function balance(wid,from,to){
  const r=ledgerRows(wid,from,to);let kamaai=0,debit=0,pay=0;
  r.forEach(x=>{if(x.type==="earn")kamaai+=x.amt;if(x.type==="debit")debit-=x.amt;if(x.type==="pay")pay-=x.amt});
  return{kamaai,debit,pay,baaki:kamaai-debit-pay,rows:r};
}
const outOf=wid=>S.jobs.filter(j=>j.workerId===wid&&j.status!=="closed").reduce((a,j)=>a+Math.max(0,j.pcs-returned(j)),0);
function renderLedger(){
  const W=byName(S.workers);
  if(lWorker&&!get("workers",lWorker))lWorker="";
  $("#l-listview").hidden=!!lWorker;$("#l-detail").hidden=!lWorker;
  if(!lWorker){
    keep($("#l-workers"),waiting()?'<div class="meta">'+t("loading")+'</div>':W.length?W.map(w=>{
      const b=balance(w.id),o=outOf(w.id);
      return '<button class="wcard" data-worker="'+esc(w.id)+'"><span class="init">'+esc(initials(w.name))+'</span><span class="grow"><b>'+esc(w.name)+'</b><span class="meta" style="display:block">'+(o?esc(t("pcs_out",nf(o))):"&nbsp;")+'</span></span><span class="bal">'+rs(b.baaki)+'<span class="meta" style="display:block;font-family:var(--f-body)">'+t("st_bal")+'</span></span></button>'}).join(""):emptyBox(t("no_workers_t"),t("no_workers_s")));
    return;
  }
  const w=get("workers",lWorker),el=$("#l-detail");
  const from=(document.getElementById("l-from")||{}).value||"",to=(document.getElementById("l-to")||{}).value||"";
  const b=balance(lWorker,from,to),out=outOf(lWorker);
  let h='<button class="back" data-act="lback">‹ '+t("back")+'</button>'+
    '<div style="display:flex;align-items:center;gap:12px;margin:6px 0 14px"><span class="init" style="width:52px;height:52px;font-size:1.3rem">'+esc(initials(w.name))+'</span><div style="min-width:0"><h2 style="margin:0">'+esc(w.name)+'</h2>'+(w.phone?'<div class="meta num">'+esc(w.phone)+'</div>':'')+'</div></div>'+
    '<div class="stats">'+stat(rs(b.kamaai),t("st_earn"))+stat(rs(b.debit),t("st_debit"),b.debit>0?"alert":"")+stat(rs(b.pay),t("st_paid"))+stat(rs(b.baaki),t("st_bal"),"gold")+'</div>';
  if(out)h+='<div class="notice">'+esc(t("holding",w.name,nf(out)))+'</div>';
  h+='<form class="panel" id="pay-form" autocomplete="off"><b>'+t("pay_h")+'</b><div class="row"><label><span>'+t("amount")+'</span><input id="l-amt" type="number" inputmode="decimal" min="1" step="any"></label><label><span>'+t("f_date")+'</span><input id="l-date" type="date" value="'+today()+'"></label></div><label><span>'+t("f_note")+'</span><input id="l-note" placeholder="'+esc(t("ph_paynote"))+'"></label><button class="primary block" type="submit">'+t("btn_pay")+'</button></form>';
  h+='<div class="panel"><b>'+t("entries")+'</b><div class="row"><label><span>'+t("from")+'</span><input id="l-from" type="date"></label><label><span>'+t("to")+'</span><input id="l-to" type="date"></label></div>';
  if(!b.rows.length)h+='<div class="meta">'+t("no_entries")+'</div>';
  else{
    let run=0;const items=b.rows.map(r=>{run+=r.amt;return{r,run}}).reverse();
    h+='<div>'+items.map(({r,run})=>'<div class="ent"><div class="l"><div class="meta num">'+esc(fdt(r.d,r.ts))+'</div><div>'+esc(r.desc)+'</div>'+(r.by?byTag(r.by):'')+(r.pid&&isAdmin()?' <button class="small danger" data-act="delpay" data-id="'+r.pid+'">'+t("btn_remove")+'</button>':'')+'</div><div class="r"><span class="'+(r.amt>0?"plus":r.amt<0?"minus":"")+'">'+(r.amt?(r.amt>0?"+":"−")+rs(Math.abs(r.amt)):"—")+'</span><small>'+esc(t("bal_after",rs(run)))+'</small></div></div>').join("")+'</div>';
  }
  const phone=String(w.phone||"").replace(/\D/g,"");const wa=phone?(phone.length===10?"91"+phone:phone):"";
  h+='<div class="btns"><button data-act="copy" data-id="'+esc(lWorker)+'">'+t("btn_copy")+'</button><a class="btn primary" target="_blank" rel="noopener" href="https://wa.me/'+wa+'?text='+encodeURIComponent(statementText(lWorker,from,to))+'">'+t("btn_wa")+'</a></div><textarea id="l-copybox" hidden readonly></textarea></div>';
  keep(el,h);
}
document.addEventListener("click",e=>{const c=e.target.closest("[data-worker]");if(!c)return;lWorker=c.dataset.worker;window.scrollTo(0,0);renderLedger()});
document.addEventListener("change",e=>{if(e.target.id==="l-from"||e.target.id==="l-to")renderLedger()});

/* ================= SETTINGS ================= */
const delBtn=(c,id)=>isAdmin()?'<button class="small danger" data-act="del" data-c="'+c+'" data-id="'+id+'">'+t("btn_remove")+'</button>':"";
function renderSetup(){
  $("#s-admin").hidden=!isSuper;
  const st=companyState(company);
  $("#s-company").innerHTML=company?'<div class="itemhead"><div><b style="font-size:1.1rem">'+esc(company.name)+'</b><div class="meta">'+esc([company.city,company.phone].filter(Boolean).join(" · "))+'</div></div><span class="pill '+st+'">'+t("st_"+st)+'</span></div><div class="meta">'+esc(company.validTill?t("co_valid",fd(company.validTill)):t("co_lifetime"))+' · '+esc(t("role_"+myRole))+'</div>':"";
  ["#w-form","#p-form","#k-form"].forEach(s=>$(s).hidden=!isAdmin());
  $("#t-form").hidden=!isAdmin();
  $("#t-hint").textContent=t(isAdmin()?"team_hint_admin":"team_hint_staff");
  const order={owner:0,manager:1,staff:2};
  const tl=TEAM.slice().sort((a,b)=>(order[a.role]-order[b.role])||String(a.name||a.id).localeCompare(String(b.name||b.id)));
  $("#s-team").innerHTML=tl.map(m=>{const p=PROF[m.id]||{};
    const canRemove=m.role!=="owner"&&(isOwner()||(myRole==="manager"&&m.role==="staff"));
    const roleCtl=isOwner()&&m.role!=="owner"?'<select class="rolesel" data-role-for="'+esc(m.id)+'" style="width:auto;min-height:36px;padding:6px 30px 6px 10px;font-size:.85rem"><option value="staff"'+(m.role==="staff"?" selected":"")+'>'+t("role_staff")+'</option><option value="manager"'+(m.role==="manager"?" selected":"")+'>'+t("role_manager")+'</option></select>':'<span class="role">'+t("role_"+m.role)+'</span>';
    return '<div class="item"><div style="display:flex;gap:10px;align-items:center;min-width:0"><img class="av" style="width:36px;height:36px" alt="" src="'+esc(m.id===myId&&ME?ME.avatarUrl:p.avatarUrl||avatarFor(m.name,m.id))+'"><div style="min-width:0"><b>'+esc(m.name||m.authName||m.id.split("@")[0])+'</b>'+(m.id===myId?' <span class="meta">('+t("you")+')</span>':'')+'<div class="meta" style="overflow-wrap:anywhere">'+esc(m.id)+'</div></div></div><div style="display:grid;gap:6px;justify-items:end">'+roleCtl+(canRemove?'<button class="small danger" data-act="delteam" data-id="'+esc(m.id)+'">'+t("btn_remove")+'</button>':'')+'</div></div>'}).join("");
  $("#s-import").innerHTML=isSuper&&isOwner()&&!importDone?'<div class="notice" style="display:grid;gap:10px;margin:0"><span>'+t("import_hint")+'</span><button class="primary" data-act="import" type="button">'+t("btn_import")+'</button></div>':"";
  const K=byName(S.works);
  keep($("#s-works"),K.length?K.map(k=>'<div class="item"><div><b>'+esc(k.name)+'</b> <span class="meta">'+esc(t("unit_label",k.unit||"pcs"))+'</span></div>'+delBtn("works",k.id)+'</div>').join(""):'<div class="meta">'+t(isAdmin()?"works_hint":"admin_only")+'</div>');
  const P=byName(S.products);
  keep($("#s-products"),P.length?P.map(p=>{
    const set=K.filter(k=>p.counts&&p.counts[k.id]).map(k=>esc(k.name)+": "+nf(p.counts[k.id])+" "+esc(k.unit||"")).join(" · ");
    return '<div class="item block"><div class="itemhead"><div><b>'+esc(p.name)+'</b><div class="meta">'+(set||t("prod_none"))+'</div></div>'+delBtn("products",p.id)+'</div>'+
      (K.length&&isAdmin()?'<details class="edit" id="pd-'+p.id+'"><summary>'+t("per_pc_summary")+'</summary><div class="ratebox">'+K.map(k=>'<label><span>'+esc(k.name)+' ('+esc(k.unit||t("unit"))+')</span><input id="pc-'+p.id+'-'+k.id+'" type="number" inputmode="decimal" min="0" step="any" value="'+(p.counts&&p.counts[k.id]!=null?p.counts[k.id]:"")+'"></label>').join("")+'</div><div class="btns" style="margin-top:10px"><button class="small primary" data-act="savecounts" data-id="'+p.id+'">'+t("btn_save")+'</button></div></details>':"")+'</div>'}).join(""):'<div class="meta">'+t(isAdmin()?"products_hint":"admin_only")+'</div>');
  const W=byName(S.workers);
  keep($("#s-workers"),W.length?W.map(w=>{
    const set=K.filter(k=>w.rates&&w.rates[k.id]!=null&&w.rates[k.id]!=="").map(k=>esc(k.name)+": "+rs(w.rates[k.id])+"/"+esc(k.unit||t("unit"))).join(" · ");
    return '<div class="item block"><div class="itemhead"><div style="display:flex;gap:10px;align-items:center"><span class="init" style="width:34px;height:34px;font-size:.9rem">'+esc(initials(w.name))+'</span><div style="min-width:0"><b>'+esc(w.name)+'</b>'+(w.phone?' <span class="meta num">'+esc(w.phone)+'</span>':'')+'<div class="meta">'+(set||t("rate_none"))+'</div></div></div>'+delBtn("workers",w.id)+'</div>'+
      (K.length&&isAdmin()?'<details class="edit" id="wd-'+w.id+'"><summary>'+t("rates_summary")+'</summary><div class="ratebox">'+K.map(k=>'<label><span>'+esc(k.name)+' ₹/'+esc(k.unit||t("unit"))+'</span><input id="rt-'+w.id+'-'+k.id+'" type="number" inputmode="decimal" min="0" step="any" value="'+(w.rates&&w.rates[k.id]!=null?w.rates[k.id]:"")+'"></label>').join("")+'</div><div class="btns" style="margin-top:10px"><button class="small primary" data-act="saverates" data-id="'+w.id+'">'+t("btn_save")+'</button></div></details>':"")+'</div>'}).join(""):'<div class="meta">'+t(isAdmin()?"workers_hint":"admin_only")+'</div>');
}
document.addEventListener("change",async e=>{
  const s=e.target.closest("[data-role-for]");if(!s||!isOwner())return;
  try{await db.collection("members").doc(s.dataset.roleFor).update({role:s.value});toast(t("t_saved"))}catch(err){fail(err)}
});

/* ================= ISSUE CALCULATION ================= */
function setUnitLabels(){const u=unitOf($("#i-work").value);$("#i-per-label").textContent=t("f_per",u);$("#i-rate-label").textContent=t("f_rate",u)}
function prefill(){
  const w=get("workers",$("#i-worker").value),p=get("products",$("#i-product").value),kid=$("#i-work").value;
  setUnitLabels();
  if(p&&kid)$("#i-per").value=p.counts&&p.counts[kid]!=null?p.counts[kid]:"";
  if(w&&kid)$("#i-rate").value=w.rates&&w.rates[kid]!=null&&w.rates[kid]!==""?w.rates[kid]:"";
  renderCalc();
}
function renderCalc(){
  const pcs=+$("#i-pcs").value||0,per=+$("#i-per").value||0,rate=+$("#i-rate").value||0,u=unitOf($("#i-work").value);
  const units=pcs*per;
  $("#i-calc").innerHTML='<div class="line">'+nf(pcs)+' '+t("pcs")+' × '+nf(per)+' '+esc(u)+' = '+nf(units)+' '+esc(u)+'</div><div class="line">'+nf(units)+' '+esc(u)+' × '+rs(rate)+'</div><div class="big">'+rs(units*rate)+'</div>';
}
["#i-worker","#i-product","#i-work"].forEach(s=>$(s).addEventListener("change",prefill));
["#i-pcs","#i-per","#i-rate"].forEach(s=>$(s).addEventListener("input",renderCalc));
$("#i-date").value=today();$("#rc-date").value=today();

/* ================= WRITES ================= */
function need(){if(!db){toast(t("t_offline"));return false}return true}
const by=()=>myId||null;

$("#issue-form").addEventListener("submit",async e=>{
  e.preventDefault();if(!need())return;
  const workerId=$("#i-worker").value,productId=$("#i-product").value,workId=$("#i-work").value;
  const pcs=+$("#i-pcs").value,perPc=+$("#i-per").value,rate=+$("#i-rate").value;
  if(!workerId||!productId||!workId)return toast(t("t_need3"));
  if(!(pcs>0))return toast(t("t_needpcs"));
  if(!(perPc>0))return toast(t("t_needper"));
  if($("#i-rate").value===""||!(rate>=0))return toast(t("t_needrate"));
  const btn=$("#i-save");btn.disabled=true;
  try{
    const p=get("products",productId),w=get("workers",workerId);
    if(isAdmin()){
      if(!(p.counts&&p.counts[workId]!=null))await db.doc("products/"+productId).update({["counts."+workId]:perPc});
      if(!(w.rates&&w.rates[workId]!=null&&w.rates[workId]!==""))await db.doc("workers/"+workerId).update({["rates."+workId]:rate});
    }
    await db.collection("jobs").add({workerId,productId,workId,pcs,perPc,rate,unit:unitOf(workId),date:$("#i-date").value||today(),note:$("#i-note").value.trim(),receipts:[],status:"open",createdAt:Date.now(),by:by()});
    $("#i-pcs").value="";$("#i-note").value="";renderCalc();
    toast(t("t_issued",nf(pcs),w?w.name:""));
  }catch(err){fail(err)}finally{btn.disabled=false}
});
$("#w-form").addEventListener("submit",async e=>{e.preventDefault();if(!need()||!isAdmin())return;
  const name=$("#s-wname").value.trim();if(!name)return toast(t("t_needname"));
  if(S.works.some(k=>k.name.toLowerCase()===name.toLowerCase()))return toast(t("t_dup"));
  try{await db.collection("works").add({name,unit:$("#s-wunit").value.trim()||"pcs"});$("#s-wname").value="";$("#s-wunit").value="";toast(t("t_work_added"))}catch(err){fail(err)}});
$("#p-form").addEventListener("submit",async e=>{e.preventDefault();if(!need()||!isAdmin())return;
  const name=$("#s-pname").value.trim();if(!name)return toast(t("t_needname"));
  if(S.products.some(k=>k.name.toLowerCase()===name.toLowerCase()))return toast(t("t_dup"));
  try{const r=await db.collection("products").add({name,counts:{}});$("#s-pname").value="";toast(t("t_prod_added"));setTimeout(()=>{const d=document.getElementById("pd-"+r.id);if(d)d.open=true},400)}catch(err){fail(err)}});
$("#k-form").addEventListener("submit",async e=>{e.preventDefault();if(!need()||!isAdmin())return;
  const name=$("#s-kname").value.trim();if(!name)return toast(t("t_needname"));
  try{const r=await db.collection("workers").add({name,phone:$("#s-kphone").value.trim(),rates:{}});$("#s-kname").value="";$("#s-kphone").value="";toast(t("t_worker_added"));setTimeout(()=>{const d=document.getElementById("wd-"+r.id);if(d)d.open=true},400)}catch(err){fail(err)}});
$("#t-form").addEventListener("submit",async e=>{e.preventDefault();if(!need()||!isAdmin())return;
  const email=$("#t-email").value.trim().toLowerCase(),name=$("#t-name").value.trim(),role=isOwner()?$("#t-role").value:"staff";
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return toast(t("t_bademail"));
  if(!name)return toast(t("t_needname"));
  if(TEAM.some(m=>m.id===email))return toast(t("t_dup"));
  try{
    const b=fs.batch();
    b.set(db.collection("members").doc(email),{email,name,role,addedAt:Date.now(),addedBy:myId});
    b.set(fs.collection("userIndex").doc(email),{cid,addedAt:Date.now()});
    await b.commit();
    $("#t-email").value="";$("#t-name").value="";toast(t("t_team_added"));
  }catch(err){if(err&&err.code==="permission-denied")toast(t("t_email_taken"));else fail(err)}
});
document.addEventListener("submit",async e=>{
  if(e.target.id!=="pay-form")return;e.preventDefault();if(!need())return;
  const amount=+$("#l-amt").value;if(!(amount>0))return toast(t("t_needamt"));
  try{await db.collection("payments").add({workerId:lWorker,amount,date:$("#l-date").value||today(),note:$("#l-note").value.trim(),createdAt:Date.now(),by:by()});$("#l-amt").value="";$("#l-note").value="";toast(t("t_paid"))}catch(err){fail(err)}
});
document.addEventListener("input",e=>{
  if(e.target.id&&e.target.id.startsWith("dp-")){const jid=e.target.id.slice(3),sp=+e.target.dataset.short,v=+e.target.value||0;const el=document.getElementById("dpt-"+jid);if(el)el.textContent=t("debit_total",nf(sp),rs(v),rs(sp*v))}
});
function arm(b){if(b.dataset.armed==="1")return true;b.dataset.armed="1";const o=b.textContent;b.textContent=t("confirm_remove");setTimeout(()=>{b.dataset.armed="";b.textContent=o},3000);return false}

document.addEventListener("click",async e=>{
  const b=e.target.closest("[data-act]");if(!b)return;
  const act=b.dataset.act,id=b.dataset.id;
  if(act==="lback"){lWorker="";window.scrollTo(0,0);return renderLedger()}
  if(act==="adminback"){return leaveAdmin()}
  if(act==="copy")return copyStatement(id);
  if(act==="ad-activate"||act==="ad-block"||act==="ad-save")return adminAction(act,id,b);
  if(!need())return;
  const j=get("jobs",id),rcd=$("#rc-date").value||today();
  try{
    if(act==="recv"){
      const inp=document.getElementById("rc-"+id),n=+inp.value,ret=returned(j),baaki=j.pcs-ret;
      if(!(n>0))return toast(t("t_needrecv"));
      if(n>baaki)return toast(t("t_toomany",nf(baaki)));
      const receipts=(j.receipts||[]).concat([{d:rcd,pcs:n,ts:Date.now(),by:by()}]);
      const done=ret+n>=j.pcs;b.disabled=true;
      await db.doc("jobs/"+id).update({receipts,status:done?"closed":"open"});
      inp.value="";
      toast(done?t("t_complete"):t("t_recv",nf(n),nf(baaki-n)));
    }
    if(act==="close"){
      const ret=returned(j);
      if(ret>=j.pcs){await db.doc("jobs/"+id).update({status:"closed"});return toast(t("t_closed"))}
      await db.doc("jobs/"+id).update({status:"short",shortPcs:j.pcs-ret,shortAt:Date.now(),shortBy:by(),shortDate:rcd});
      toast(t("t_short",nf(j.pcs-ret)));
    }
    if(act==="debit"){
      if(!isAdmin())return toast(t("t_owner"));
      const per=+document.getElementById("dp-"+id).value,sp=+j.shortPcs||(j.pcs-returned(j));
      if(!(per>0))return toast(t("t_needdebit"));
      await db.doc("jobs/"+id).update({status:"closed",debit:{pcs:sp,perPc:per,amount:sp*per,date:rcd,ts:Date.now(),by:by()}});
      toast(t("t_debited",rs(sp*per)));
    }
    if(act==="waive"){if(!isAdmin())return;await db.doc("jobs/"+id).update({status:"closed"});toast(t("t_waived"))}
    if(act==="reopen"){if(!isAdmin())return;await db.doc("jobs/"+id).update({status:"open",shortPcs:0,shortAt:null});toast(t("t_reopened"))}
    if(act==="savecounts"){
      const counts={};S.works.forEach(k=>{const v=document.getElementById("pc-"+id+"-"+k.id).value;if(v!=="")counts[k.id]=+v});
      await db.doc("products/"+id).update({counts});toast(t("t_saved"));
    }
    if(act==="saverates"){
      const rates={};S.works.forEach(k=>{const v=document.getElementById("rt-"+id+"-"+k.id).value;if(v!=="")rates[k.id]=+v});
      await db.doc("workers/"+id).update({rates});toast(t("t_saved"));
    }
    if(act==="del"){
      if(!isAdmin())return toast(t("t_owner"));
      const c=b.dataset.c;
      const used=c==="workers"?S.jobs.some(x=>x.workerId===id)||S.payments.some(p=>p.workerId===id):c==="products"?S.jobs.some(x=>x.productId===id):S.jobs.some(x=>x.workId===id);
      if(used)return toast(t("t_inuse"));
      if(!arm(b))return;
      await db.doc(c+"/"+id).delete();toast(t("t_removed"));
    }
    if(act==="delteam"){
      if(!isAdmin())return toast(t("t_owner"));if(!arm(b))return;
      const bt=fs.batch();bt.delete(db.collection("members").doc(id));bt.delete(fs.collection("userIndex").doc(id));await bt.commit();toast(t("t_removed"));
    }
    if(act==="import"){if(!isSuper||!isOwner())return;b.disabled=true;await importOld()}
    if(act==="delpay"){if(!isAdmin())return toast(t("t_owner"));if(!arm(b))return;await db.doc("payments/"+id).delete();toast(t("t_removed"))}
  }catch(err){fail(err)}finally{b.disabled=false}
});

function statementText(wid,from,to){
  const w=get("workers",wid),b=balance(wid,from,to);
  let s=t("stmt_title",company&&company.name?company.name:APP)+"\n"+t("stmt_worker")+": "+w.name+"\n"+(from||to?t("stmt_period",from?fd(from):t("stmt_start"),to?fd(to):t("stmt_today"))+"\n":"")+"\n";
  b.rows.forEach(r=>s+=fdt(r.d,r.ts)+"  "+r.desc+(r.amt?"  "+(r.amt>0?"+":"-")+rs(Math.abs(r.amt)):"")+"\n");
  return s+"\n"+t("st_earn")+": "+rs(b.kamaai)+"\n"+t("st_debit")+": "+rs(b.debit)+"\n"+t("st_paid")+": "+rs(b.pay)+"\n*"+t("st_bal")+": "+rs(b.baaki)+"*";
}
function copyStatement(wid){
  const s=statementText(wid,(document.getElementById("l-from")||{}).value||"",(document.getElementById("l-to")||{}).value||"");
  const box=$("#l-copybox");
  const fallback=()=>{box.hidden=false;box.value=s;box.focus();box.select();toast(t("t_selected"))};
  try{navigator.clipboard.writeText(s).then(()=>toast(t("t_copied")),fallback)}catch(e){fallback()}
}
async function importOld(){
  const r=await fetch("old-data.json",{cache:"no-store"});const data=await r.json();
  const batch=fs.batch();let n=0;
  COLLS.forEach(c=>{const g=data[c]||{};Object.keys(g).forEach(id=>{batch.set(db.collection(c).doc(id),g[id],{merge:true});n++})});
  batch.set(db.collection("meta").doc("import"),{done:true,at:Date.now(),by:myId,count:n});
  await batch.commit();toast(t("t_imported",n));
}

/* ================= SUPER ADMIN ================= */
function openAdmin(){
  if(!isSuper)return;
  inAdmin=true;$("#auth").hidden=true;
  if(!adUnsub)adUnsub=fs.collection("companies").onSnapshot(s=>{COMPANIES=s.docs.map(d=>Object.assign({id:d.id},d.data()));if(view==="admin")renderAdmin()},err=>{console.error(err);toast(t("t_perm"))});
  show("admin");
}
function leaveAdmin(){
  inAdmin=false;
  if(companyState(company)!=="active"||!cid){paintGate();return}
  show("setup");
}
$("#s-admin").addEventListener("click",openAdmin);
$("#btn-admin-open").addEventListener("click",openAdmin);
$("#ad-search").addEventListener("input",renderAdmin);
$("#ad-chips").addEventListener("click",e=>{const c=e.target.closest("[data-adf]");if(!c)return;adFilter=c.dataset.adf;renderAdmin()});
function renderAdmin(){
  const st=c=>companyState(c);
  const cnt=k=>COMPANIES.filter(c=>st(c)===k).length;
  $("#ad-stats").innerHTML=stat(COMPANIES.length,t("ad_total"))+stat(cnt("active"),t("ad_active"))+stat(cnt("pending"),t("ad_pending"),cnt("pending")?"gold":"")+stat(cnt("blocked")+cnt("expired"),t("ad_blocked"));
  $("#ad-chips").innerHTML=[["",t("all_workers")],["pending",t("st_pending")],["active",t("st_active")],["expired",t("st_expired")],["blocked",t("st_blocked")]].map(([k,l])=>'<button class="chip" data-adf="'+k+'" aria-pressed="'+(adFilter===k)+'">'+esc(l)+'</button>').join("");
  const q=$("#ad-search").value.trim().toLowerCase();
  const list=COMPANIES.filter(c=>(!adFilter||st(c)===adFilter)&&(!q||[c.name,c.ownerEmail,c.phone,c.city].join(" ").toLowerCase().includes(q)))
    .sort((a,b)=>(st(a)==="pending"?0:1)-(st(b)==="pending"?0:1)||(b.createdAt||0)-(a.createdAt||0));
  keep($("#ad-list"),list.length?list.map(c=>{const s=st(c);
    return '<div class="co"><div class="head"><div><b style="font-size:1.05rem">'+esc(c.name)+'</b><div class="meta" style="overflow-wrap:anywhere">'+esc(t("owner_lbl",c.ownerEmail))+'</div><div class="meta">'+esc([c.phone,c.city].filter(Boolean).join(" · "))+'</div><div class="meta">'+esc(t("created_on",fdt(c.createdAt?(d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"))(new Date(c.createdAt)):"",c.createdAt)))+'</div></div><span class="pill '+s+'">'+t("st_"+s)+'</span></div>'+
      '<div class="row"><label><span>'+t("f_valid")+'</span><input id="adv-'+c.id+'" type="date" value="'+esc(c.validTill||"")+'"></label><label><span>'+t("f_adnote")+'</span><input id="adn-'+c.id+'" value="'+esc(c.note||"")+'"></label></div>'+
      '<div class="btns">'+(c.status!=="active"?'<button class="primary small" data-act="ad-activate" data-id="'+c.id+'">'+t(c.status==="blocked"?"btn_unblock":"btn_activate")+'</button>':'<button class="danger small" data-act="ad-block" data-id="'+c.id+'">'+t("btn_block")+'</button>')+'<button class="small" data-act="ad-save" data-id="'+c.id+'">'+t("btn_savead")+'</button>'+
      (c.phone?'<a class="btn small" target="_blank" rel="noopener" href="https://wa.me/'+esc((String(c.phone).replace(/\D/g,"").length===10?"91":"")+String(c.phone).replace(/\D/g,""))+'">WhatsApp</a>':'')+'</div></div>'}).join(""):emptyBox(t("ad_empty"),""));
}
async function adminAction(act,id,b){
  if(!isSuper)return;
  const validTill=(document.getElementById("adv-"+id)||{}).value||"",note=(document.getElementById("adn-"+id)||{}).value||"";
  const upd={validTill,note};
  if(act==="ad-activate"){upd.status="active";upd.activatedAt=Date.now()}
  if(act==="ad-block")upd.status="blocked";
  b.disabled=true;
  try{await fs.collection("companies").doc(id).update(upd);toast(act==="ad-activate"?t("t_activated"):act==="ad-block"?t("t_blocked"):t("t_saved"))}catch(err){fail(err)}finally{b.disabled=false}
}

/* ================= SIGN-IN GATE ================= */
function paintAuth(){
  $("#a-seller").textContent=SELLER||APP;$("#a-app").textContent=APP;
  const coName=company&&company.name?company.name:"";
  $("#auth-h").textContent=t("auth_"+authState+"_h");
  $("#auth-p").textContent=t("auth_"+authState+"_p",authState==="create"||authState==="loading"?authEmail:coName,company&&company.validTill?fd(company.validTill):"");
  $("#btn-google").hidden=authState!=="signin";
  $("#a-create").hidden=authState!=="create";
  $("#c-note").textContent=t("c_note",authEmail);
  const showPay=authState==="pending"||authState==="expired";
  $("#a-pending").hidden=!(showPay||authState==="blocked");
  $("#a-price").textContent=CFG.priceText||"";
  $("#a-price").parentElement.hidden=!showPay;
  const pay=$("#a-pay");pay.hidden=!(showPay&&CFG.paymentLink);if(CFG.paymentLink)pay.href=CFG.paymentLink;
  const wa=String(CFG.contactWhatsApp||"").replace(/\D/g,"");
  $("#a-wa").hidden=!wa||/^91X/i.test(String(CFG.contactWhatsApp));
  $("#a-wa").href="https://wa.me/"+wa+"?text="+encodeURIComponent(t("wa_msg",coName,APP,authEmail));
  $("#a-wanum").textContent=wa?"+"+wa:"";$("#a-wanum").parentElement.hidden=!wa||$("#a-wa").hidden;
  $("#btn-admin-open").hidden=!(isSuper&&["create","pending","blocked","expired"].includes(authState));
  $("#btn-signout").hidden=!["create","pending","blocked","expired","error"].includes(authState);
}
function authScreen(state,email){authState=state;if(email!=null)authEmail=email;$("#auth").hidden=state==="ok"||inAdmin;paintAuth()}
function paintGate(){
  const s=companyState(company);
  if(s==="active"){authScreen("ok");startData();if(view==="admin"&&!inAdmin)show("home");else render()}
  else{stopData();authScreen(s)}
}

$("#a-create").addEventListener("submit",async e=>{
  e.preventDefault();
  const name=$("#c-name").value.trim();if(!name)return toast(t("t_needco"));
  const btn=$("#c-save");btn.disabled=true;
  try{
    const ref=fs.collection("companies").doc();
    const b=fs.batch();
    b.set(ref,{name,phone:$("#c-phone").value.trim(),city:$("#c-city").value.trim(),ownerEmail:myId,status:"pending",createdAt:Date.now()});
    b.set(ref.collection("members").doc(myId),{email:myId,name:ME.name,role:"owner",photo:ME.photo||"",authName:ME.name,addedAt:Date.now()});
    b.set(fs.collection("userIndex").doc(myId),{cid:ref.id,addedAt:Date.now()});
    await b.commit();
    if(isSuper)await ref.update({status:"active",activatedAt:Date.now(),note:"seller"});
    toast(t("t_created"));
    await enterCompany(ref.id);
  }catch(err){fail(err)}finally{btn.disabled=false}
});

function stopData(){dataUnsubs.forEach(f=>f());dataUnsubs=[];loaded.clear();COLLS.forEach(c=>S[c]=[])}
function startData(){
  if(dataUnsubs.length||!db)return;
  setSync("sync_connecting");
  dataUnsubs.push(db.collection("meta").doc("import").onSnapshot(d=>{importDone=d.exists;render()},()=>{}));
  COLLS.forEach(c=>dataUnsubs.push(db.collection(c).onSnapshot({includeMetadataChanges:true},s=>{
    S[c]=s.docs.map(d=>Object.assign({id:d.id},d.data()));loaded.add(c);
    if(!waiting())setSync(s.metadata.fromCache?"sync_offline_saved":"sync_live");
    render();
  },err=>{console.error(err);setSync("sync_err")})));
}
async function enterCompany(id){
  cid=id;
  const cref=fs.collection("companies").doc(cid);
  db={collection:c=>cref.collection(c),doc:p=>{const a=p.split("/");return cref.collection(a[0]).doc(a[1])}};
  unsubs.push(cref.collection("members").onSnapshot(s=>{
    TEAM=s.docs.map(d=>Object.assign({id:d.id},d.data()));
    const mine=TEAM.find(m=>m.id===myId);
    if(!mine&&TEAM.length){location.reload();return}
    if(mine&&mine.role!==myRole){myRole=mine.role;applyLang()}
    TEAM.forEach(m=>{if(m.id!==myId)PROF[m.id]={name:m.name||m.authName||m.id.split("@")[0],avatarUrl:m.photo||avatarFor(m.name,m.id)}});
    if(mine&&((mine.photo||"")!==(ME.photo||"")||(mine.authName||"")!==ME.name))cref.collection("members").doc(myId).update({photo:ME.photo||"",authName:ME.name}).catch(()=>{});
    render();
  },err=>console.error(err)));
  unsubs.push(cref.onSnapshot(d=>{company=d.exists?Object.assign({id:d.id},d.data()):null;paintGate()},err=>{console.error(err);authScreen("error")}));
}

/* ================= CONNECT ================= */
function boot(){
  const fc=CFG.firebase||{};
  if(!window.firebase||!fc.apiKey||/PASTE/i.test(fc.apiKey)||!SUPER){authScreen("setup");return}
  firebase.initializeApp(fc);
  auth=firebase.auth();fs=firebase.firestore();
  fs.enablePersistence({synchronizeTabs:true}).catch(()=>{});
  $("#btn-google").addEventListener("click",async()=>{
    const p=new firebase.auth.GoogleAuthProvider();p.setCustomParameters({prompt:"select_account"});
    try{await auth.signInWithPopup(p)}
    catch(e){
      if(e.code==="auth/popup-blocked"||e.code==="auth/operation-not-supported-in-this-environment")return auth.signInWithRedirect(p);
      if(e.code!=="auth/popup-closed-by-user"&&e.code!=="auth/cancelled-popup-request"){console.error(e);toast(t("t_login_fail")+" ("+e.code+")")}
    }
  });
  const signOut=()=>auth.signOut();
  $("#btn-signout").addEventListener("click",signOut);
  $("#s-signout").addEventListener("click",signOut);
  auth.onAuthStateChanged(async u=>{
    unsubs.forEach(f=>f());unsubs=[];stopData();if(adUnsub){adUnsub();adUnsub=null}
    TEAM=[];db=null;cid=null;company=null;myRole=null;inAdmin=false;
    if(!u){isSuper=false;authScreen("signin","");return}
    const email=String(u.email||"").toLowerCase();
    myId=email;isSuper=email===SUPER;
    ME={id:email,name:u.displayName||email.split("@")[0],photo:u.photoURL||"",avatarUrl:u.photoURL||avatarFor(u.displayName,email)};
    PROF[myId]=ME;
    $("#me-av").src=ME.avatarUrl;$("#me-name").textContent=ME.name;
    authScreen("loading",email);
    try{
      const ix=await fs.collection("userIndex").doc(email).get();
      if(!ix.exists){authScreen("create",email);return}
      const m=await fs.collection("companies").doc(ix.data().cid).collection("members").doc(email).get();
      if(!m.exists){authScreen("create",email);return}
      myRole=m.data().role;applyLang();
      await enterCompany(ix.data().cid);
    }catch(e){console.error(e);authScreen("error",email)}
  });
}
if("serviceWorker" in navigator&&location.protocol==="https:")window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));

applyLang();
const start=(location.hash||"").slice(1);
show(["home","issue","receive","ledger","setup"].includes(start)?start:"home");
renderCalc();
boot();
})();
