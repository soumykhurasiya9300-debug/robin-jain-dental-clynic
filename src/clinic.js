// Dr. Robin Jain Dental Care — Interactive Logic
(function () {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const CFG = { wa: '919425387555', phone: '09425387555' };

  /* ============================================================
     I18N
     ============================================================ */
  const I18N = {
    en: {
      'announce': 'Open today · <b>Painless dentistry</b> · 5.0★ from 22 Google reviews · Call 094253 87555',
      'nav.about': 'About', 'nav.services': 'Treatments', 'nav.process': 'Process', 'nav.gallery': 'Clinic', 'nav.reviews': 'Reviews', 'nav.visit': 'Visit', 'nav.faq': 'FAQ',
      'cta.book': 'Book Appointment', 'cta.bookNow': 'Book Appointment', 'cta.viewServices': 'View Treatments',
      'cta.call': 'Call the Clinic', 'cta.confirmAppt': 'Confirm Appointment Request',
      'cta.sendWa': 'Send on WhatsApp', 'cta.another': 'Book Another', 'cta.directions': 'Get Directions',
      'cta.chat': 'Chat with us', 'scroll': 'Scroll',
      'hero.reviews': '22 Google reviews', 'hero.hindi': 'डॉ रॉबिन जैन डेंटल केयर · जबलपुर',
      'hero.status': 'Opens at 11:00 AM', 'hero.statusSub': 'Mon – Sat · Ukhri Road, Jabalpur',
      'hero.t1': 'Gentle dentistry.', 'hero.t2': 'Honest advice.', 'hero.t3': 'Lasting smiles.',
      'hero.sub': 'A modern, hygienic dental clinic on Ukhri Main Road — led by Dr. Robin Jain. Clear explanations, painless treatment, and a calm environment that puts even the most anxious patients at ease.',
      'stat.rating': 'Google Rating', 'stat.reviews': 'Patient Reviews', 'stat.treatments': 'Treatments Offered', 'stat.painless': 'Painless Focus',
      'trust1.t': 'Rated by Patients', 'trust1.d': '22 verified Google reviews with a perfect 5-star score.',
      'trust2.t': 'Years of Practice', 'trust2.d': 'Dr. Robin Jain brings years of surgical & restorative experience.',
      'trust3.t': 'Sterilised Setup', 'trust3.d': 'Autoclaved instruments, single-use disposables, hygienic protocol.',
      'trust4.t': 'Transparent Pricing', 'trust4.d': 'Full cost explained before treatment begins. No hidden charges.',
      'story.eyebrow': 'Meet Your Dentist', 'story.h1': "You'll always know", 'story.h2': "what's happening.", 'story.open': 'Accepting Patients',
      'story.p1': "At Dr. Robin Jain Dental Care, every visit starts the same way — with a conversation. Dr. Jain walks you through what he sees, what your options are, and what each one means. <b>No jargon. No pressure. No rushed decisions.</b>",
      'story.p2': 'Patients often describe the treatment as genuinely painless, and the clinic as calm and spotless. From a simple cleaning to a full implant, every procedure follows the same careful, gentle protocol — with follow-ups to make sure you healed well.',
      'story.p3': 'The clinic is located on Ukhri Main Road, next to the MPEB power house and Go Gas pump in Vijay Nagar — easy to reach, with parking available.',
      'story.role': 'BDS · Dental Surgeon · Implantologist',
      'pillar1.t': 'Painless Care', 'pillar1.d': 'Modern anaesthesia & gentle technique for a truly comfortable visit.',
      'pillar2.t': 'Clear Advice', 'pillar2.d': 'Every option explained in plain language before we begin.',
      'pillar3.t': 'Clean Clinic', 'pillar3.d': 'Sterilised instruments & single-use disposables for every patient.',
      'svc.eyebrow': 'Treatments', 'svc.h1': 'Complete dental care,', 'svc.h2': 'under one roof.',
      'svc.lead': 'From routine check-ups to full-mouth rehabilitation — every treatment performed in-clinic with modern equipment.',
      'proc.eyebrow': 'How It Works', 'proc.h1': 'A calm, clear', 'proc.h2': 'four-step visit.',
      'proc1.t': 'Consultation', 'proc1.d': 'We listen first — your symptoms, your history, your concerns. No treatment until you understand it.',
      'proc2.t': 'Diagnosis', 'proc2.d': "Digital X-rays and clinical examination to see exactly what's happening beneath the surface.",
      'proc3.t': 'Treatment', 'proc3.d': 'Gentle, sterilised, painless procedure — with modern anaesthesia and calm hands.',
      'proc4.t': 'Aftercare', 'proc4.d': 'Clear home-care instructions and a scheduled follow-up to make sure you healed well.',
      'gal.eyebrow': 'Inside The Clinic', 'gal.h1': 'Clean, calm,', 'gal.h2': 'and modern.',
      'gal.lead': 'A glimpse of the space where your smile gets the attention it deserves.',
      'rev.eyebrow': 'Patient Voices', 'rev.h1': '22 reviews.', 'rev.h2': 'A perfect five.', 'rev.based': 'Based on 22 Google reviews',
      'faq.eyebrow': 'Common Questions', 'faq.h1': 'Before you', 'faq.h2': 'visit us.',
      'faq.lead': "Still unsure about something? Call us at 094253 87555 — we're happy to answer any question, even if you're not booking yet.",
      'appt.eyebrow': 'Book a Visit', 'appt.h1': 'Reserve your', 'appt.h2': 'appointment slot.',
      'appt.lead': "Fill in the form and we'll confirm your slot on WhatsApp within minutes during clinic hours. For emergencies, please call directly.",
      'appt.addrT': 'Clinic Address', 'appt.callT': 'Call / WhatsApp', 'appt.hoursT': 'Clinic Hours',
      'appt.hours': 'Mon – Sat · 11:00 AM – 8:30 PM<br>Sunday · By appointment',
      'appt.emergT': 'Dental Emergency', 'appt.emerg': 'Severe pain, swelling or trauma — call us immediately.',
      'appt.orCall': 'or call us directly at', 'appt.thanks': 'Appointment request received!',
      'appt.thanksSub': "We've saved your request. The clinic will confirm your slot shortly on WhatsApp or phone.",
      'f.name': 'Full Name', 'f.namePh': 'e.g. Nehal Jain', 'f.phone': 'Phone', 'f.phonePh': '10-digit number',
      'f.date': 'Preferred Date', 'f.time': 'Preferred Time', 'f.treatment': 'Treatment Needed', 'f.select': 'Select…',
      't.checkup': 'General Check-up & Cleaning', 't.rct': 'Root Canal Treatment', 't.implant': 'Dental Implant',
      't.braces': 'Braces / Aligners', 't.whitening': 'Teeth Whitening', 't.crown': 'Crown / Bridge',
      't.kids': 'Kids Dentistry', 't.pain': 'Tooth Pain / Emergency', 't.other': 'Other / Not Sure',
      'f.visit': 'Visit Type', 'f.v1': 'First Visit', 'f.v2': 'Follow-up', 'f.v3': 'Second Opinion',
      'f.notes': 'Describe Your Concern', 'f.notesPh': 'Briefly describe the issue, or any special requirements…',
      'visit.eyebrow': 'Find Us', 'visit.h1': 'Right on', 'visit.h2': 'Ukhri Main Road.',
      'visit.lead': 'Beside MPEB Power House, next to Go Gas Auto Pump — Vijay Nagar, Jabalpur.',
      'foot.about': 'A modern dental clinic in Vijay Nagar, Jabalpur — offering painless treatment, clear advice and honest pricing. Rated 5.0★ by 22 patients.',
      'foot.explore': 'Explore', 'foot.contact': 'Contact', 'foot.hours': 'Clinic Hours', 'foot.today': 'Today',
      'foot.monsat': 'Mon – Sat', 'foot.sun': 'Sunday', 'foot.byappt': 'By Appointment', 'foot.directions': 'Get Directions',
      'foot.addr': 'Ukhri Main Road, beside MPEB Power House, next to Go Gas Auto Pump, Vijay Nagar, Jabalpur 482002',
      'foot.rights': 'All rights reserved.', 'foot.admin': 'Admin',
      'err.required': 'This field is required', 'err.phone': 'Enter a valid 10-digit number',
      'err.name': 'Please enter your name', 'err.past': 'Please choose a future date',
      'wa.default': "Hello Dr. Robin Jain Dental Care, I'd like to book an appointment."
    },
    hi: {
      'announce': 'आज खुला · <b>दर्द रहित इलाज</b> · 22 गूगल समीक्षाओं से 5.0★ · कॉल करें 094253 87555',
      'nav.about': 'परिचय', 'nav.services': 'उपचार', 'nav.process': 'प्रक्रिया', 'nav.gallery': 'क्लिनिक', 'nav.reviews': 'समीक्षाएं', 'nav.visit': 'पहुंचें', 'nav.faq': 'सामान्य प्रश्न',
      'cta.book': 'अपॉइंटमेंट बुक करें', 'cta.bookNow': 'अपॉइंटमेंट बुक करें', 'cta.viewServices': 'उपचार देखें',
      'cta.call': 'क्लिनिक पर कॉल करें', 'cta.confirmAppt': 'अपॉइंटमेंट अनुरोध भेजें',
      'cta.sendWa': 'व्हाट्सएप पर भेजें', 'cta.another': 'दूसरी बुकिंग', 'cta.directions': 'रास्ता देखें',
      'cta.chat': 'हमसे बात करें', 'scroll': 'स्क्रॉल',
      'hero.reviews': '22 गूगल समीक्षाएं', 'hero.hindi': 'डॉ रॉबिन जैन डेंटल केयर · जबलपुर',
      'hero.status': 'सुबह 11:00 बजे खुलता है', 'hero.statusSub': 'सोम – शनि · उखरी रोड, जबलपुर',
      'hero.t1': 'सौम्य दंत चिकित्सा।', 'hero.t2': 'सच्ची सलाह।', 'hero.t3': 'टिकती मुस्कान।',
      'hero.sub': 'उखरी मेन रोड पर एक आधुनिक, स्वच्छ डेंटल क्लिनिक — डॉ रॉबिन जैन के नेतृत्व में। स्पष्ट जानकारी, दर्द रहित इलाज, और एक शांत माहौल जो घबराए मरीज़ों को भी सहज बनाता है।',
      'stat.rating': 'गूगल रेटिंग', 'stat.reviews': 'मरीज़ों की राय', 'stat.treatments': 'उपचार', 'stat.painless': 'दर्द रहित पर ध्यान',
      'trust1.t': 'मरीज़ों द्वारा रेटेड', 'trust1.d': '22 सत्यापित गूगल समीक्षाएं, पूरा 5 स्टार स्कोर।',
      'trust2.t': 'वर्षों का अनुभव', 'trust2.d': 'डॉ रॉबिन जैन के पास वर्षों का सर्जिकल और रिस्टोरेटिव अनुभव है।',
      'trust3.t': 'स्टरलाइज़्ड सेटअप', 'trust3.d': 'ऑटोक्लेव उपकरण, सिंगल-यूज़ डिस्पोज़ेबल्स, स्वच्छ प्रोटोकॉल।',
      'trust4.t': 'पारदर्शी कीमत', 'trust4.d': 'इलाज से पहले पूरी कीमत बताई जाती है। कोई छिपा शुल्क नहीं।',
      'story.eyebrow': 'अपने दंत चिकित्सक से मिलें', 'story.h1': 'आपको हमेशा पता रहेगा', 'story.h2': 'क्या हो रहा है।', 'story.open': 'मरीज़ स्वीकार कर रहे हैं',
      'story.p1': 'डॉ रॉबिन जैन डेंटल केयर में हर मुलाक़ात एक बातचीत से शुरू होती है। डॉ जैन आपको बताते हैं कि वे क्या देख रहे हैं, आपके विकल्प क्या हैं और हर एक का मतलब क्या है। <b>कोई कठिन शब्द नहीं। कोई दबाव नहीं। कोई जल्दबाज़ी नहीं।</b>',
      'story.p2': 'मरीज़ अक्सर इलाज को वाकई दर्द रहित बताते हैं, और क्लिनिक को शांत और साफ़-सुथरा। साधारण सफ़ाई से लेकर पूरे इम्प्लांट तक, हर प्रक्रिया एक ही सावधान, सौम्य तरीके से की जाती है।',
      'story.p3': 'क्लिनिक उखरी मेन रोड पर, MPEB पावर हाउस और गो गैस पंप के पास, विजय नगर में स्थित है — पहुंचने में आसान, पार्किंग उपलब्ध।',
      'story.role': 'बीडीएस · डेंटल सर्जन · इम्प्लांटोलॉजिस्ट',
      'pillar1.t': 'दर्द रहित देखभाल', 'pillar1.d': 'आधुनिक एनेस्थीसिया और सौम्य तकनीक से आरामदायक मुलाक़ात।',
      'pillar2.t': 'स्पष्ट सलाह', 'pillar2.d': 'शुरू करने से पहले हर विकल्प आसान भाषा में समझाया जाता है।',
      'pillar3.t': 'स्वच्छ क्लिनिक', 'pillar3.d': 'हर मरीज़ के लिए स्टरलाइज़्ड उपकरण और सिंगल-यूज़ डिस्पोज़ेबल्स।',
      'svc.eyebrow': 'उपचार', 'svc.h1': 'पूरी दंत चिकित्सा,', 'svc.h2': 'एक ही जगह।',
      'svc.lead': 'नियमित जांच से लेकर पूरे मुंह के इलाज तक — हर उपचार आधुनिक उपकरणों के साथ क्लिनिक में ही।',
      'proc.eyebrow': 'यह कैसे होता है', 'proc.h1': 'एक शांत, स्पष्ट', 'proc.h2': 'चार-चरणीय मुलाक़ात।',
      'proc1.t': 'परामर्श', 'proc1.d': 'हम पहले सुनते हैं — आपके लक्षण, इतिहास और चिंताएं। जब तक आप समझ न लें, इलाज शुरू नहीं होता।',
      'proc2.t': 'निदान', 'proc2.d': 'डिजिटल एक्स-रे और क्लिनिकल जांच से पता लगाते हैं कि असल में क्या हो रहा है।',
      'proc3.t': 'उपचार', 'proc3.d': 'सौम्य, स्टरलाइज़्ड, दर्द रहित प्रक्रिया — आधुनिक एनेस्थीसिया और शांत हाथों के साथ।',
      'proc4.t': 'देखभाल', 'proc4.d': 'घर पर देखभाल के स्पष्ट निर्देश और एक फॉलो-अप, ताकि आप ठीक से ठीक हों।',
      'gal.eyebrow': 'क्लिनिक के अंदर', 'gal.h1': 'साफ़, शांत,', 'gal.h2': 'और आधुनिक।',
      'gal.lead': 'उस जगह की एक झलक जहां आपकी मुस्कान को पूरा ध्यान मिलता है।',
      'rev.eyebrow': 'मरीज़ों की आवाज़', 'rev.h1': '22 समीक्षाएं।', 'rev.h2': 'पूरा पांच।', 'rev.based': '22 गूगल समीक्षाओं पर आधारित',
      'faq.eyebrow': 'सामान्य प्रश्न', 'faq.h1': 'आने से पहले', 'faq.h2': 'जान लें।',
      'faq.lead': 'कुछ और पूछना है? 094253 87555 पर कॉल करें — बुकिंग न हो तो भी हम खुशी से जवाब देंगे।',
      'appt.eyebrow': 'मुलाक़ात बुक करें', 'appt.h1': 'अपना', 'appt.h2': 'अपॉइंटमेंट सुरक्षित करें।',
      'appt.lead': 'फॉर्म भरें और क्लिनिक के समय में हम कुछ मिनटों में व्हाट्सएप पर पुष्टि करेंगे। इमरजेंसी के लिए सीधे कॉल करें।',
      'appt.addrT': 'क्लिनिक का पता', 'appt.callT': 'कॉल / व्हाट्सएप', 'appt.hoursT': 'क्लिनिक का समय',
      'appt.hours': 'सोम – शनि · सुबह 11:00 – रात 8:30<br>रविवार · अपॉइंटमेंट से',
      'appt.emergT': 'डेंटल इमरजेंसी', 'appt.emerg': 'तेज़ दर्द, सूजन या चोट — तुरंत कॉल करें।',
      'appt.orCall': 'या सीधे कॉल करें', 'appt.thanks': 'अपॉइंटमेंट अनुरोध मिल गया!',
      'appt.thanksSub': 'हमने आपका अनुरोध सुरक्षित कर लिया। क्लिनिक जल्द ही व्हाट्सएप या फोन पर पुष्टि करेगा।',
      'f.name': 'पूरा नाम', 'f.namePh': 'जैसे नेहल जैन', 'f.phone': 'फ़ोन', 'f.phonePh': '10 अंकों का नंबर',
      'f.date': 'पसंदीदा तारीख़', 'f.time': 'पसंदीदा समय', 'f.treatment': 'किस उपचार की ज़रूरत है', 'f.select': 'चुनें…',
      't.checkup': 'सामान्य जांच और सफ़ाई', 't.rct': 'रूट कैनाल उपचार', 't.implant': 'डेंटल इम्प्लांट',
      't.braces': 'ब्रेसेस / अलाइनर्स', 't.whitening': 'दांत सफ़ेद करना', 't.crown': 'क्राउन / ब्रिज',
      't.kids': 'बच्चों की दंत चिकित्सा', 't.pain': 'दांत दर्द / इमरजेंसी', 't.other': 'अन्य / पता नहीं',
      'f.visit': 'मुलाक़ात का प्रकार', 'f.v1': 'पहली मुलाक़ात', 'f.v2': 'फॉलो-अप', 'f.v3': 'दूसरी राय',
      'f.notes': 'अपनी समस्या बताएं', 'f.notesPh': 'संक्षेप में समस्या या कोई विशेष आवश्यकता बताएं…',
      'visit.eyebrow': 'हमें खोजें', 'visit.h1': 'उखरी मेन रोड पर', 'visit.h2': 'ही स्थित।',
      'visit.lead': 'MPEB पावर हाउस के पास, गो गैस ऑटो पंप के बगल में — विजय नगर, जबलपुर।',
      'foot.about': 'विजय नगर, जबलपुर का एक आधुनिक डेंटल क्लिनिक — दर्द रहित इलाज, स्पष्ट सलाह और ईमानदार कीमत। 22 मरीज़ों ने 5.0★ दिया।',
      'foot.explore': 'देखें', 'foot.contact': 'संपर्क', 'foot.hours': 'क्लिनिक का समय', 'foot.today': 'आज',
      'foot.monsat': 'सोम – शनि', 'foot.sun': 'रविवार', 'foot.byappt': 'अपॉइंटमेंट से', 'foot.directions': 'रास्ता देखें',
      'foot.addr': 'उखरी मेन रोड, MPEB पावर हाउस के पास, गो गैस ऑटो पंप के बगल में, विजय नगर, जबलपुर 482002',
      'foot.rights': 'सर्वाधिकार सुरक्षित।', 'foot.admin': 'एडमिन',
      'err.required': 'यह फ़ील्ड आवश्यक है', 'err.phone': 'सही 10 अंकों का नंबर डालें',
      'err.name': 'कृपया अपना नाम लिखें', 'err.past': 'कृपया भविष्य की तारीख़ चुनें',
      'wa.default': 'नमस्ते डॉ रॉबिन जैन डेंटल केयर, मुझे अपॉइंटमेंट बुक करना है।'
    }
  };

  let LANG = localStorage.getItem('rjdc_lang') || 'en';
  const t = k => (I18N[LANG] && I18N[LANG][k]) || (I18N.en[k]) || k;

  /* ============================================================
     DATA SEEDS
     ============================================================ */
  const SERVICES_SEED = [
    { id: 'sv1', icon: '🦷', name: 'Dental Implants', hi: 'डेंटल इम्प्लांट',
      desc: 'Permanent titanium implants to replace missing teeth — restored with a natural-looking crown.',
      tags: ['Permanent', 'Natural look'] },
    { id: 'sv2', icon: '🔬', name: 'Root Canal Treatment', hi: 'रूट कैनाल उपचार',
      desc: 'Painless, single-sitting RCT with rotary endodontics to save your natural tooth.',
      tags: ['Painless', 'Single sitting'] },
    { id: 'sv3', icon: '✨', name: 'Teeth Whitening', hi: 'दांत सफ़ेद करना',
      desc: 'Safe, clinical-grade whitening that removes stains and brightens your smile noticeably.',
      tags: ['Quick', 'Visible results'] },
    { id: 'sv4', icon: '😁', name: 'Braces & Aligners', hi: 'ब्रेसेस और अलाइनर्स',
      desc: 'Metal, ceramic and clear aligner options to straighten teeth at any age.',
      tags: ['Metal', 'Ceramic', 'Clear'] },
    { id: 'sv5', icon: '👑', name: 'Crowns & Bridges', hi: 'क्राउन और ब्रिज',
      desc: 'Zirconia and metal-ceramic crowns crafted for a natural fit and long-term durability.',
      tags: ['Zirconia', 'Custom fit'] },
    { id: 'sv6', icon: '🪥', name: 'Scaling & Polishing', hi: 'स्केलिंग और पॉलिशिंग',
      desc: 'Deep cleaning to remove tartar, treat gum inflammation and freshen your breath.',
      tags: ['Gum health', 'Every 6 months'] },
    { id: 'sv7', icon: '🧒', name: 'Kids Dentistry', hi: 'बच्चों की दंत चिकित्सा',
      desc: 'Gentle, friendly care for children — fluoride, sealants and cavity treatment.',
      tags: ['Kid-friendly', 'Preventive'] },
    { id: 'sv8', icon: '🚨', name: 'Emergency Dental Care', hi: 'इमरजेंसी डेंटल केयर',
      desc: 'Severe pain, broken tooth, swelling or trauma — call us immediately for same-day attention.',
      tags: ['Same day', 'Priority'] },
    { id: 'sv9', icon: '💎', name: 'Smile Design', hi: 'स्माइल डिज़ाइन',
      desc: 'Veneers and cosmetic reshaping to design a balanced, confident smile tailored to your face.',
      tags: ['Veneers', 'Aesthetic'] }
  ];

  const GALLERY = [
    { img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80', cap: 'Treatment Room', cls: 'g-a' },
    { img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80', cap: 'Sterilised Setup', cls: 'g-b' },
    { img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80', cap: 'Modern Chair', cls: 'g-c' },
    { img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80', cap: 'Precision Tools', cls: 'g-d' },
    { img: 'https://images.unsplash.com/photo-1606265752439-1f18756aa8bf?auto=format&fit=crop&w=1400&q=80', cap: 'Reception', cls: 'g-e' },
    { img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80', cap: 'Diagnostics', cls: 'g-f' },
    { img: 'https://images.unsplash.com/photo-1588776813677-77aaf5595b83?auto=format&fit=crop&w=1000&q=80', cap: 'Consultation', cls: 'g-d' },
    { img: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1000&q=80', cap: 'Equipment', cls: 'g-b' }
  ];

  const REVIEWS = [
    { name: 'Satya Pandey', n: '6 reviews', stars: 5, when: '2 months ago',
      text: 'One of the best dental clinics in Jabalpur. Specially if you are looking for a top-class dentist near Ukhri Road — this is the place.' },
    { name: 'Nehal Jain', n: '10 reviews', stars: 5, when: 'a year ago',
      text: "Robin sir explains everything in a way that's easy to understand, which made me feel at ease. The treatment was completely painless, and I never felt rushed at any point. Honestly one of the best dental experiences I've had — I truly recommend him." },
    { name: 'Gaytri Uddey', n: '2 reviews', stars: 5, when: '2 months ago',
      text: 'The best clinic in Jabalpur. The clinic is very clean and well maintained. The staff is polite and helpful. The doctors are experienced and caring.' }
  ];

  const FAQS = [
    { q: 'Is the treatment really painless?',
      a: 'Yes — we use modern local anaesthesia and gentle technique, so most patients feel pressure but no sharp pain. For anxious patients, we take extra time and explain every step before starting.' },
    { q: 'Do I need an appointment, or can I walk in?',
      a: "Walk-ins are welcome during clinic hours, but we strongly recommend booking by phone or WhatsApp so you don't have to wait. Emergency cases are always prioritised." },
    { q: 'How much does a consultation cost?',
      a: 'The initial consultation and examination is very affordable, and you will be told the full cost of any recommended treatment before it begins. No hidden charges, ever.' },
    { q: 'Do you treat children?',
      a: 'Absolutely. We offer gentle, kid-friendly dentistry including fluoride application, sealants and cavity treatment. Our team is used to putting young patients at ease.' },
    { q: 'How long does a root canal take?',
      a: 'Most root canals at our clinic are completed in a single sitting of 45–60 minutes using rotary endodontics. Complex cases may need a second visit.' },
    { q: 'Where exactly is the clinic?',
      a: 'We are on Ukhri Main Road, beside MPEB Electric Power House and next to the Go Gas Auto Pump, in Vijay Nagar, Jabalpur — towards Shatabdipuram. Parking is available.' }
  ];

  /* ============================================================
     STORAGE
     ============================================================ */
  const DB = {
    get(k, fb) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch (e) { return fb; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  const KEYS = {
    appt: 'rjdc_appointments', services: 'rjdc_services', settings: 'rjdc_settings',
    session: 'rjdc_session', attempts: 'rjdc_attempts', log: 'rjdc_activity'
  };

  if (!DB.get(KEYS.services)) DB.set(KEYS.services, SERVICES_SEED);
  if (!DB.get(KEYS.settings)) {
    DB.set(KEYS.settings, {
      wa: CFG.wa, phone: CFG.phone,
      announce: I18N.en['announce'],
      floatWa: true, ig: 'https://instagram.com', fb: 'https://facebook.com'
    });
  }

  const getSettings = () => DB.get(KEYS.settings, {});
  const getServices = () => DB.get(KEYS.services, SERVICES_SEED);
  const getAppts = () => DB.get(KEYS.appt, []);

  function logActivity(action, target) {
    const logs = DB.get(KEYS.log, []);
    logs.unshift({ user: 'Admin', action, target, at: new Date().toISOString() });
    DB.set(KEYS.log, logs.slice(0, 300));
  }

  function toast(msg, type = '') {
    const el = document.createElement('div');
    el.className = 'toast ' + type;
    el.textContent = msg;
    const container = $('#toasts');
    if (container) container.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateY(12px)'; el.style.transition = '.4s'; }, 2600);
    setTimeout(() => el.remove(), 3100);
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  function fmtDate(iso, withTime) {
    if (!iso) return '—';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '—';
    const base = d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
    return withTime ? base + ' · ' + d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : base;
  }

  function emptyState(icon, title, sub) {
    return `<div class="empty"><div class="ic">${icon}</div><h4>${title}</h4><p>${sub}</p></div>`;
  }

  /* ============================================================
     PRELOADER / INTRO SPLASH
     ============================================================ */
  (function () {
    const mark = $('#preMark'), bar = $('#preBar'), num = $('#preNum');
    const preBg = $('#preBg');
    if (!mark) return;

    // Preload image for instant rendering
    const img1 = new Image();
    img1.src = '/intro-bg.jpg';

    const word = 'Dr. Robin Jain';
    mark.innerHTML = word.split('').map(c => `<span>${c === ' ' ? '&nbsp;' : c}</span>`).join('');
    if (window.gsap) {
      window.gsap.set('#preMark span', { y: '110%' });
      window.gsap.set(bar, { scaleX: 0 });
      window.gsap.from('.pre-content', { opacity: 0, scale: 0.94, y: 15, duration: 1.0, ease: 'power2.out' });
      window.gsap.from('.pre-zoom-bar', { opacity: 0, y: -15, duration: 0.8, delay: 0.2, ease: 'power2.out' });
    }

    // Interactive Zoom in/out & frame fit controls
    let zoomLevel = 1.0;
    let isFitContain = false;
    const zoomVal = $('#preZoomVal');

    function applyZoom() {
      if (!preBg) return;
      if (isFitContain) {
        preBg.style.backgroundSize = 'contain';
        preBg.style.transform = `scale(${zoomLevel})`;
        if (zoomVal) zoomVal.textContent = 'Fit';
      } else {
        preBg.style.backgroundSize = 'cover';
        preBg.style.transform = `scale(${zoomLevel})`;
        if (zoomVal) zoomVal.textContent = `${Math.round(zoomLevel * 100)}%`;
      }
    }

    $('#preZoomIn')?.addEventListener('click', () => {
      isFitContain = false;
      zoomLevel = Math.min(2.2, +(zoomLevel + 0.15).toFixed(2));
      applyZoom();
      pauseAutoFinish();
    });

    $('#preZoomOut')?.addEventListener('click', () => {
      isFitContain = false;
      zoomLevel = Math.max(0.65, +(zoomLevel - 0.15).toFixed(2));
      applyZoom();
      pauseAutoFinish();
    });

    $('#preZoomFit')?.addEventListener('click', () => {
      isFitContain = !isFitContain;
      zoomLevel = 1.0;
      applyZoom();
      pauseAutoFinish();
    });

    // Pacing: smooth progress to ensure comfortable visibility
    let p = 0;
    let isFinished = false;
    let pausedByUser = false;

    function pauseAutoFinish() {
      pausedByUser = true;
      const enterBtn = $('#preEnterBtn');
      if (enterBtn) {
        enterBtn.textContent = 'Enter Clinic →';
        enterBtn.style.background = 'var(--teal)';
        enterBtn.style.color = '#fff';
      }
    }

    const tick = setInterval(() => {
      if (pausedByUser) return;
      p += Math.random() * 4.5 + 2.2;
      if (p >= 100) {
        p = 100;
        clearInterval(tick);
        finish();
      }
      if (num) num.textContent = String(Math.floor(p)).padStart(2, '0');
    }, 110);

    $('#preEnterBtn')?.addEventListener('click', () => {
      clearInterval(tick);
      finish();
    });

    function finish() {
      if (isFinished) return;
      isFinished = true;
      if (num) num.textContent = '100';

      if (window.gsap) {
        window.gsap.timeline()
          .to('#preMark span', { y: 0, duration: 0.8, stagger: 0.025, ease: 'expo.out' }, 0)
          .to('#pre .pre-hi', { opacity: 1, duration: 0.5 }, 0.2)
          .to(bar, { scaleX: 1, duration: 0.8, ease: 'power2.inOut' }, 0)
          .to('.pre-content', { opacity: 0, y: -16, duration: 0.55, ease: 'power2.in' }, 0.4)
          .to('.pre-zoom-bar', { opacity: 0, y: -10, duration: 0.4 }, 0.4)
          .to('#preBg', { opacity: 0, duration: 0.7, ease: 'power2.inOut' }, 0.5)
          .to('#pre', { opacity: 0, duration: 0.75, delay: 0.5, ease: 'power2.inOut', onComplete() {
            const preEl = $('#pre');
            if (preEl) {
              preEl.classList.add('done');
              setTimeout(() => preEl.remove(), 200);
            }
            document.body.classList.remove('lock');
            heroIntro();
          }});
      } else {
        const preEl = $('#pre');
        if (preEl) preEl.remove();
        document.body.classList.remove('lock');
      }
    }
  })();

  /* ============================================================
     HERO INTRO
     ============================================================ */
  function heroIntro() {
    if (!window.gsap) return;
    const tl = window.gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.to('.hero-title .ln > span', { y: 0, duration: 1.25, stagger: 0.1 })
      .from('.hero-hindi', { opacity: 0, y: 20, duration: 0.9 }, '-=.9')
      .from('.hero-sub', { opacity: 0, y: 26, duration: 1 }, '-=.75')
      .from('.hero-cta .btn', { opacity: 0, y: 22, duration: 0.85, stagger: 0.09 }, '-=.7')
      .from('.hero-strip .hero-stat', { opacity: 0, y: 20, duration: 0.8, stagger: 0.07 }, '-=.65')
      .from('.trust-pills .t-pill', { opacity: 0, y: 14, duration: 0.8, stagger: 0.08 }, '-=.9')
      .from('.hero-side-card', { opacity: 0, x: 20, duration: 0.8 }, '-=.85')
      .from('.scroll-cue', { opacity: 0, duration: 0.8 }, '-=.6')
      .from('#header', { y: -40, opacity: 0, duration: 0.9 }, '-=1.1')
      .from('.announce', { y: -30, opacity: 0, duration: 0.8 }, '-=1');
    if (RM) tl.progress(1);
  }

  /* ============================================================
     LENIS SMOOTH SCROLL
     ============================================================ */
  let lenis = null;
  if (!RM && typeof window.Lenis !== 'undefined') {
    lenis = new window.Lenis({ duration: 1.15, easing: x => Math.min(1, 1.001 - Math.pow(2, -10 * x)), smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    if (window.ScrollTrigger && window.gsap) {
      lenis.on('scroll', window.ScrollTrigger.update);
      window.gsap.ticker.add(t => lenis.raf(t * 1000));
      window.gsap.ticker.lagSmoothing(0);
    }
  }

  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      closeDrawer();
      if (lenis) lenis.scrollTo(el, { offset: -70, duration: 1.3 });
      else el.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'start' });
    });
  });

  /* ============================================================
     HEADER & DRAWER
     ============================================================ */
  let lastY = 0;
  const header = $('#header');
  function onScroll() {
    if (!header) return;
    const y = window.scrollY;
    header.classList.toggle('solid', y > 40);
    if (y > 400 && y > lastY && !$('#drawer')?.classList.contains('open')) header.classList.add('hide');
    else header.classList.remove('hide');
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const burger = $('#burger'), drawer = $('#drawer');
  function closeDrawer() {
    if (burger) burger.classList.remove('open');
    if (drawer) drawer.classList.remove('open');
    document.body.classList.remove('lock');
  }
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      burger.classList.toggle('open', open);
      document.body.classList.toggle('lock', open);
    });
  }

  /* ============================================================
     CURSOR
     ============================================================ */
  (function () {
    if (RM || window.matchMedia('(hover:none)').matches) return;
    const dot = $('#curDot'), ring = $('#curRing');
    if (!dot || !ring) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    window.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px)`;
    });
    (function loop() {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px,${ry}px)`;
      requestAnimationFrame(loop);
    })();
    document.addEventListener('mouseover', e => {
      const el = e.target.closest('a,button,.g-item,.svc-card,input,select,textarea,[data-cursor]');
      if (el) {
        ring.classList.add('grow');
        ring.dataset.label = el.dataset.cursor || '';
      } else {
        ring.classList.remove('grow');
        ring.dataset.label = '';
      }
    });
  })();

  $$('[data-mag]').forEach(el => {
    if (RM || !window.gsap) return;
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.18;
      const y = (e.clientY - r.top - r.height / 2) * 0.3;
      window.gsap.to(el, { x, y, duration: 0.5, ease: 'power3.out' });
    });
    el.addEventListener('mouseleave', () => window.gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.5)' }));
  });

  /* ============================================================
     MARQUEE
     ============================================================ */
  (function () {
    const track = $('#mqTrack');
    if (!track) return;
    const words = ['Painless Treatment', 'Dental Implants', 'Root Canal', 'Braces & Aligners', 'Teeth Whitening', 'Zirconia Crowns', 'Kids Dentistry', 'Smile Design', 'Emergency Care', 'Digital X-Ray'];
    const html = words.map(w => `<span>${w}</span>`).join('');
    track.innerHTML = html + html;
  })();

  /* ============================================================
     RENDER: SERVICES
     ============================================================ */
  (function () {
    const list = getServices();
    const grid = $('#svcGrid');
    if (!grid) return;
    grid.innerHTML = list.map(s => `
      <div class="svc-card reveal">
        <div class="svc-ic" style="font-size:1.4rem">${s.icon || '🦷'}</div>
        <h3>${esc(s.name)}<br><span class="hindi" style="font-size:.72rem;color:rgba(248,246,241,.5);font-weight:400">${esc(s.hi || '')}</span></h3>
        <p>${esc(s.desc)}</p>
        ${s.tags && s.tags.length ? `<div class="svc-tags">${s.tags.map(tag => `<span>${esc(tag)}</span>`).join('')}</div>` : ''}
      </div>
    `).join('');
  })();

  /* ============================================================
     RENDER: GALLERY & LIGHTBOX
     ============================================================ */
  (function () {
    const galGrid = $('#galGrid');
    if (!galGrid) return;
    galGrid.innerHTML = GALLERY.map((g, i) => `
      <div class="g-item ${g.cls}" data-i="${i}" data-cursor="View">
        <div class="im" style="background-image:url('${g.img}')"></div>
        <span class="cap">${g.cap}</span>
      </div>
    `).join('');

    const lb = $('#lb'), lbImg = $('#lbImg');
    if (!lb || !lbImg) return;
    const open = i => {
      lbImg.style.backgroundImage = `url('${GALLERY[i].img}')`;
      lb.style.display = 'grid';
      requestAnimationFrame(() => lb.classList.add('open'));
      document.body.classList.add('lock');
    };
    const close = () => {
      lb.classList.remove('open');
      document.body.classList.remove('lock');
      setTimeout(() => lb.style.display = 'none', 400);
    };

    $$('#galGrid .g-item').forEach(el => el.addEventListener('click', () => open(+el.dataset.i)));
    const lbX = $('#lbX');
    if (lbX) lbX.addEventListener('click', close);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && lb.classList.contains('open')) close(); });
  })();

  /* ============================================================
     RENDER: REVIEWS
     ============================================================ */
  (function () {
    const revGrid = $('#revGrid');
    if (!revGrid) return;
    revGrid.innerHTML = REVIEWS.map(r => `
      <article class="rev-card reveal">
        <div class="stars">${'★'.repeat(r.stars)}</div>
        <p>${esc(r.text)}</p>
        <div class="rev-who">
          <div class="rev-av">${esc(r.name.charAt(0))}</div>
          <div>
            <b>${esc(r.name)}</b>
            <small>${esc(r.n)} · ${esc(r.when)}</small>
          </div>
        </div>
      </article>
    `).join('');
  })();

  /* ============================================================
     RENDER: FAQ
     ============================================================ */
  (function () {
    const list = $('#faqList');
    if (!list) return;
    list.innerHTML = FAQS.map((f, i) => `
      <div class="faq-item" data-i="${i}">
        <button class="faq-q" aria-expanded="false">
          <span>${esc(f.q)}</span>
          <span class="plus"></span>
        </button>
        <div class="faq-a"><div class="faq-a-inner">${esc(f.a)}</div></div>
      </div>
    `).join('');

    $$('.faq-item').forEach(item => {
      const q = item.querySelector('.faq-q');
      const a = item.querySelector('.faq-a');
      q.addEventListener('click', () => {
        const open = item.classList.toggle('open');
        q.setAttribute('aria-expanded', open);
        a.style.maxHeight = open ? a.scrollHeight + 'px' : '0px';
      });
    });
  })();

  /* ============================================================
     LANGUAGE SWITCHER
     ============================================================ */
  function applyLang() {
    document.documentElement.lang = LANG;
    $$('[data-i18n]').forEach(el => {
      const v = t(el.dataset.i18n);
      if (v !== undefined) el.innerHTML = v;
    });
    $$('[data-i18n-ph]').forEach(el => {
      const v = t(el.dataset.i18nPh);
      if (v) el.placeholder = v;
    });
    const s = getSettings();
    if (s.announce && LANG === 'en' && $('#announceBar')) {
      const span = $('#announceBar').querySelector('span');
      if (span) span.innerHTML = s.announce;
    }

    renderFooterHours();

    const waMsg = encodeURIComponent(t('wa.default'));
    const waFloat = $('#waFloat');
    if (waFloat) waFloat.href = `https://wa.me/${s.wa || CFG.wa}?text=${waMsg}`;
    const drawerWa = $('#drawerWa');
    if (drawerWa) drawerWa.href = `https://wa.me/${s.wa || CFG.wa}?text=${waMsg}`;

    const btns = $$('#lang button');
    const idx = LANG === 'hi' ? 1 : 0;
    btns.forEach((b, i) => b.classList.toggle('on', i === idx));
    const pill = $('#langPill');
    const target = btns[idx];
    if (pill && target) {
      pill.style.width = target.offsetWidth + 'px';
      pill.style.transform = `translateX(${target.offsetLeft - 3}px)`;
    }
  }

  $$('#lang button').forEach(b => {
    b.addEventListener('click', () => {
      LANG = b.dataset.lang;
      localStorage.setItem('rjdc_lang', LANG);
      applyLang();
    });
  });

  function renderFooterHours() {
    const now = new Date();
    const h = now.getHours() + now.getMinutes() / 60;
    const d = now.getDay();
    const open = d !== 0 && h >= 11 && h < 20.5;
    const el = $('#todayHours');
    if (el) {
      el.textContent = open ? '11:00 – 20:30 · Open' : '11:00 – 20:30 · Closed';
      el.style.color = open ? 'var(--teal-2)' : '#fca5a5';
    }
  }

  /* ============================================================
     APPOINTMENT FORM
     ============================================================ */
  (function () {
    const form = $('#apptForm');
    if (!form) return;
    const dateInput = form.querySelector('[name="date"]');
    const today = new Date().toISOString().split('T')[0];
    if (dateInput) dateInput.min = today;

    function setErr(field, msg) {
      const wrap = field.closest('.f-field');
      if (!wrap) return;
      wrap.classList.toggle('err', !!msg);
      const errEl = wrap.querySelector('.f-err');
      if (errEl) errEl.textContent = msg || '';
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      let ok = true;
      const data = Object.fromEntries(new FormData(form).entries());

      const nameF = form.querySelector('[name="name"]');
      if (!data.name || data.name.trim().length < 2) { setErr(nameF, t('err.name')); ok = false; }
      else setErr(nameF, '');

      const phoneF = form.querySelector('[name="phone"]');
      const digits = (data.phone || '').replace(/\D/g, '');
      if (digits.length !== 10) { setErr(phoneF, t('err.phone')); ok = false; }
      else setErr(phoneF, '');

      if (!data.date) { setErr(dateInput, t('err.required')); ok = false; }
      else if (data.date < today) { setErr(dateInput, t('err.past')); ok = false; }
      else setErr(dateInput, '');

      const timeF = form.querySelector('[name="time"]');
      if (!data.time) { setErr(timeF, t('err.required')); ok = false; }
      else setErr(timeF, '');

      const treatF = form.querySelector('[name="treatment"]');
      if (!data.treatment) { setErr(treatF, t('err.required')); ok = false; }
      else setErr(treatF, '');

      if (!ok) {
        if (window.gsap) window.gsap.fromTo(form, { x: -7 }, { x: 0, duration: 0.5, ease: 'elastic.out(1,.35)' });
        return;
      }

      const ref = 'RJDC-' + Date.now().toString().slice(-6);
      const entry = {
        id: ref,
        name: data.name.trim(),
        phone: digits,
        date: data.date,
        time: data.time,
        treatment: data.treatment,
        visit: data.visit || 'First Visit',
        notes: data.notes || '',
        status: 'NEW',
        createdAt: new Date().toISOString()
      };

      const all = getAppts();
      all.unshift(entry);
      DB.set(KEYS.appt, all);
      logActivity('New appointment received', ref);
      updateBadge();

      form.style.display = 'none';
      const refEl = $('#apptRef');
      if (refEl) refEl.textContent = ref;
      const successEl = $('#apptSuccess');
      if (successEl) successEl.classList.add('on');

      const msg = encodeURIComponent(
        `Hello Dr. Robin Jain Dental Care! 🙏\n\nI'd like to book an appointment.\n\n` +
        `*Ref:* ${ref}\n*Name:* ${entry.name}\n*Phone:* ${entry.phone}\n` +
        `*Date:* ${entry.date}\n*Time:* ${entry.time}\n` +
        `*Treatment:* ${entry.treatment}\n*Visit:* ${entry.visit}\n` +
        (entry.notes ? `*Notes:* ${entry.notes}\n` : '') +
        `\nPlease confirm. Thank you!`
      );
      const s = getSettings();
      const apptWa = $('#apptWa');
      if (apptWa) apptWa.href = `https://wa.me/${s.wa || CFG.wa}?text=${msg}`;

      toast('Appointment saved — ' + ref, 'ok');
    });

    const apptAgain = $('#apptAgain');
    if (apptAgain) {
      apptAgain.addEventListener('click', () => {
        form.reset();
        form.style.display = '';
        const successEl = $('#apptSuccess');
        if (successEl) successEl.classList.remove('on');
        $$('.f-field').forEach(f => f.classList.remove('err'));
      });
    }
  })();

  /* ============================================================
     SCROLL ANIMATIONS
     ============================================================ */
  if (window.ScrollTrigger && window.gsap && !RM) {
    window.gsap.registerPlugin(window.ScrollTrigger);

    $$('.reveal').forEach(el => {
      window.ScrollTrigger.create({
        trigger: el, start: 'top 88%', once: true,
        onEnter: () => el.classList.add('in')
      });
    });

    $$('.mask-line > span').forEach(el => {
      window.gsap.to(el, {
        y: 0, duration: 1.15, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });

    if ($('#heroBg')) {
      window.gsap.to('#heroBg', {
        yPercent: 14, ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
      });
    }
    if ($('.hero .wrap')) {
      window.gsap.to('.hero .wrap', {
        yPercent: -10, opacity: 0, ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
      });
    }

    if ($('.story-media')) {
      window.gsap.from('.story-media', {
        scale: 0.94, opacity: 0, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: '.story-media', start: 'top 85%', once: true }
      });
    }

    $$('.rev-bar .track i').forEach(el => {
      window.ScrollTrigger.create({
        trigger: el, start: 'top 92%', once: true,
        onEnter: () => el.style.width = el.dataset.w + '%'
      });
    });

    if ($('.mq-track')) {
      window.gsap.to('.mq-track', {
        xPercent: -6, ease: 'none',
        scrollTrigger: { trigger: '.marquee', start: 'top bottom', end: 'bottom top', scrub: true }
      });
    }
  }
  if (RM) {
    $$('.reveal').forEach(el => el.classList.add('in'));
  }

  /* ============================================================
     MISC INIT
     ============================================================ */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  renderFooterHours();
  setInterval(renderFooterHours, 60000);
  applyLang();

  /* ============================================================
     ADMIN SYSTEM (PASSWORD: robin9300)
     ============================================================ */
  const ADM = { MAX: 4, LOCK: 5 * 60 * 1000 };
  function weakHash(s) {
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h) ^ s.charCodeAt(i);
    return (h >>> 0).toString(36);
  }
  const PASS_HASH = weakHash('robin9300');

  function getAttempts() { return DB.get(KEYS.attempts, { count: 0, until: 0 }); }
  function setAttempts(a) { DB.set(KEYS.attempts, a); }
  function lockRemaining() {
    const a = getAttempts();
    const rem = a.until - Date.now();
    return rem > 0 ? rem : 0;
  }

  const admEl = $('#adm'), admLogin = $('#admLogin'), admShell = $('#admShell');
  const admMsg = $('#admMsg'), admForm = $('#admForm'), admBtn = $('#admBtn');

  function openAdmin() {
    if (!admEl) return;
    admEl.classList.add('open');
    requestAnimationFrame(() => admEl.classList.add('show'));
    document.body.classList.add('lock');
    if (DB.get(KEYS.session)) showShell();
    else {
      if (admLogin) admLogin.style.display = '';
      if (admShell) admShell.classList.remove('on');
      setTimeout(() => $('#admPass')?.focus(), 200);
    }
  }
  function closeAdmin() {
    if (!admEl) return;
    admEl.classList.remove('show');
    document.body.classList.remove('lock');
    setTimeout(() => admEl.classList.remove('open'), 400);
  }

  const openAdminBtn = $('#openAdmin');
  if (openAdminBtn) openAdminBtn.addEventListener('click', openAdmin);
  const admClose = $('#admClose');
  if (admClose) admClose.addEventListener('click', closeAdmin);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && admEl?.classList.contains('open')) closeAdmin();
  });

  function admMessage(text, type) {
    if (!admMsg) return;
    admMsg.className = 'adm-msg show ' + type;
    admMsg.textContent = text;
  }

  let lockTimer = null;
  function startLockCountdown() {
    clearInterval(lockTimer);
    const tick = () => {
      const rem = lockRemaining();
      if (rem <= 0) {
        clearInterval(lockTimer);
        admMessage('You may try again now.', 'ok');
        if (admBtn) {
          admBtn.disabled = false;
          admBtn.querySelector('span').textContent = 'Unlock Dashboard';
        }
        const a = getAttempts(); a.count = 0; a.until = 0; setAttempts(a);
        return;
      }
      const m = Math.floor(rem / 60000);
      const s = Math.floor((rem % 60000) / 1000);
      admMessage(`Too many failed attempts. Please try again in ${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.`, 'error');
      if (admBtn) {
        admBtn.disabled = true;
        admBtn.querySelector('span').textContent = `Locked · ${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      }
    };
    tick();
    lockTimer = setInterval(tick, 1000);
  }

  if (admForm) {
    admForm.addEventListener('submit', e => {
      e.preventDefault();
      if (lockRemaining() > 0) { startLockCountdown(); return; }
      const val = $('#admPass')?.value || '';
      if (weakHash(val) === PASS_HASH) {
        setAttempts({ count: 0, until: 0 });
        DB.set(KEYS.session, { at: Date.now() });
        logActivity('Admin signed in', 'session');
        admMessage('Access granted. Loading dashboard…', 'ok');
        setTimeout(() => { if (admLogin) admLogin.style.display = 'none'; showShell(); }, 450);
      } else {
        const a = getAttempts();
        a.count = (a.count || 0) + 1;
        if (a.count >= ADM.MAX) {
          a.until = Date.now() + ADM.LOCK;
          a.count = 0;
          setAttempts(a);
          startLockCountdown();
        } else {
          setAttempts(a);
          admMessage(`Incorrect password. ${ADM.MAX - a.count} attempt(s) remaining before lockout.`, 'error');
        }
        admForm.reset();
        if (window.gsap) window.gsap.fromTo('.adm-box', { x: -9 }, { x: 0, duration: 0.5, ease: 'elastic.out(1,.35)' });
      }
    });
  }
  if (lockRemaining() > 0) startLockCountdown();

  function showShell() {
    if (admLogin) admLogin.style.display = 'none';
    if (admShell) admShell.classList.add('on');
    renderView('dash');
    updateBadge();
  }

  const admLogout = $('#admLogout');
  if (admLogout) {
    admLogout.addEventListener('click', () => {
      localStorage.removeItem(KEYS.session);
      logActivity('Admin signed out', 'session');
      if (admShell) admShell.classList.remove('on');
      if (admLogin) admLogin.style.display = '';
      if (admMsg) admMsg.className = 'adm-msg';
      const pass = $('#admPass');
      if (pass) pass.value = '';
      toast('Signed out', 'ok');
    });
  }

  $$('.a-link').forEach(b => {
    b.addEventListener('click', () => {
      $$('.a-link').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      renderView(b.dataset.view);
      const side = $('#admSide');
      if (side) side.classList.remove('open');
    });
  });

  function updateBadge() {
    const n = getAppts().filter(e => e.status === 'NEW').length;
    const b = $('#badgeAppt');
    if (!b) return;
    b.textContent = n;
    b.style.display = n ? '' : 'none';
  }

  /* Admin Views */
  function renderView(v) {
    const main = $('#admMain');
    if (!main) return;
    main.scrollTop = 0;
    if (v === 'dash')     main.innerHTML = viewDash();
    if (v === 'appt')     main.innerHTML = viewAppt();
    if (v === 'services') main.innerHTML = viewServices();
    if (v === 'content')  main.innerHTML = viewContent();
    if (v === 'settings') main.innerHTML = viewSettings();
    if (v === 'security') main.innerHTML = viewSecurity();
    bindView(v);
    if (!RM && window.gsap) window.gsap.from('#admMain > *', { opacity: 0, y: 16, duration: 0.5, stagger: 0.06, ease: 'power2.out' });
  }

  function viewDash() {
    const appts = getAppts();
    const today = new Date().toISOString().split('T')[0];
    const todayAppts = appts.filter(e => (e.createdAt || '').startsWith(today));
    const newAppts = appts.filter(e => e.status === 'NEW');
    const confirmed = appts.filter(e => e.status === 'CONFIRMED');

    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const key = d.toISOString().split('T')[0];
      days.push({
        key,
        label: d.toLocaleDateString('en-IN', { weekday: 'short' }),
        count: appts.filter(e => (e.createdAt || '').startsWith(key)).length
      });
    }
    const maxC = Math.max(1, ...days.map(d => d.count));

    const treatCount = {};
    appts.forEach(a => {
      const k = a.treatment || 'Other';
      treatCount[k] = (treatCount[k] || 0) + 1;
    });
    const treatEntries = Object.entries(treatCount).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const totalTreat = Math.max(1, appts.length);
    const colors = ['#14b8a6', '#0d9488', '#5eead4', '#0f2a3f', '#7dd3c0'];
    const treatLegend = treatEntries.map(([label, n], i) => ({
      label, pct: Math.round((n / totalTreat) * 100), color: colors[i % colors.length]
    }));
    let acc = 0;
    const stops = treatLegend.map(l => {
      const from = acc; acc += l.pct;
      return `${l.color} ${from}% ${acc}%`;
    }).join(', ');

    const recent = appts.slice(0, 5);

    return `
      <div class="adm-head">
        <div><h2>Dashboard</h2><p>Live overview of Dr. Robin Jain Dental Care</p></div>
        <button class="mini gold" onclick="window.__admGoto('appt')">View all appointments →</button>
      </div>

      <div class="kpis">
        <div class="kpi"><small>New Appointments</small><b>${newAppts.length}</b><div class="sub">Awaiting confirmation</div></div>
        <div class="kpi"><small>Total Appointments</small><b>${appts.length}</b><div class="sub">All time</div></div>
        <div class="kpi"><small>Today</small><b>${todayAppts.length}</b><div class="sub">Received today</div></div>
        <div class="kpi"><small>Confirmed</small><b>${confirmed.length}</b><div class="sub">Booked slots</div></div>
        <div class="kpi"><small>Treatments Listed</small><b>${getServices().length}</b><div class="sub">Active services</div></div>
        <div class="kpi"><small>Google Rating</small><b>5.0★</b><div class="sub">22 reviews</div></div>
      </div>

      <div class="chart-row">
        <div class="panel">
          <div class="panel-head"><div><h3>Appointments — Last 7 Days</h3><p>Requests received per day</p></div></div>
          <div class="chart">
            ${days.map(d => `<div class="bar" style="height:${Math.max(4, (d.count / maxC) * 100)}%"><span>${d.count}</span></div>`).join('')}
          </div>
          <div class="chart-x">${days.map(d => `<span>${d.label}</span>`).join('')}</div>
        </div>

        <div class="panel">
          <div class="panel-head"><div><h3>Treatment Mix</h3><p>Most requested treatments</p></div></div>
          <div class="donut-wrap">
            <div class="donut" style="background:conic-gradient(${stops || 'rgba(248,246,241,.07) 0deg'});">
              <b>${appts.length}</b>
            </div>
            <div class="legend">
              ${treatLegend.length ? treatLegend.map(l => `<div><i style="background:${l.color}"></i>${esc(l.label)} <span style="margin-left:auto;color:rgba(248,246,241,.45)">${l.pct}%</span></div>`).join('')
                : '<div style="color:rgba(248,246,241,.45)">No appointments yet</div>'}
            </div>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-head"><div><h3>Recent Appointments</h3><p>Latest appointment requests</p></div></div>
        ${recent.length ? `
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Ref</th><th>Patient</th><th>Phone</th><th>Date</th><th>Treatment</th><th>Status</th></tr></thead>
            <tbody>
              ${recent.map(e => `
                <tr>
                  <td><b>${e.id}</b></td>
                  <td>${esc(e.name)}</td>
                  <td>${esc(e.phone)}</td>
                  <td>${esc(e.date)} ${esc(e.time)}</td>
                  <td>${esc(e.treatment)}</td>
                  <td><span class="st ${e.status.toLowerCase()}">${e.status}</span></td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>` : emptyState('📅', 'No appointments yet', 'Appointment requests from the website will appear here instantly.')}
      </div>
    `;
  }

  let apptFilter = 'ALL';
  function viewAppt() {
    const all = getAppts();
    const list = apptFilter === 'ALL' ? all : all.filter(e => e.status === apptFilter);
    return `
      <div class="adm-head">
        <div><h2>Appointments</h2><p>${all.length} total · ${all.filter(e => e.status === 'NEW').length} new</p></div>
        <button class="mini" onclick="window.__admExport()">⬇ Export CSV</button>
      </div>

      <div class="panel">
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px">
          ${['ALL', 'NEW', 'CONTACTED', 'CONFIRMED', 'CANCELLED'].map(s => `
            <button class="mini ${apptFilter === s ? 'gold' : ''}" onclick="window.__admFilter('${s}')">${s}</button>
          `).join('')}
        </div>
        ${list.length ? `
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Ref</th><th>Patient</th><th>Phone</th><th>Date & Time</th><th>Treatment</th><th>Visit</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              ${list.map(e => `
                <tr>
                  <td><b>${e.id}</b><br><span style="font-size:.66rem;color:rgba(248,246,241,.45)">${fmtDate(e.createdAt)}</span></td>
                  <td><b>${esc(e.name)}</b>${e.notes ? `<br><span style="font-size:.68rem;color:rgba(248,246,241,.5)">${esc(e.notes).slice(0, 42)}</span>` : ''}</td>
                  <td><a href="tel:${esc(e.phone)}" style="color:var(--teal-2)">${esc(e.phone)}</a></td>
                  <td>${esc(e.date)}<br><span style="font-size:.7rem;color:rgba(248,246,241,.5)">${esc(e.time)}</span></td>
                  <td>${esc(e.treatment)}</td>
                  <td>${esc(e.visit || '—')}</td>
                  <td><span class="st ${e.status.toLowerCase()}">${e.status}</span></td>
                  <td>
                    <div style="display:flex;gap:6px;flex-wrap:wrap">
                      <button class="mini" onclick="window.__admStatus('${e.id}','CONTACTED')">Contacted</button>
                      <button class="mini" onclick="window.__admStatus('${e.id}','CONFIRMED')">Confirm</button>
                      <button class="mini danger" onclick="window.__admStatus('${e.id}','CANCELLED')">Cancel</button>
                    </div>
                  </td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>` : emptyState('📭', 'No appointments in this view', 'Try a different filter, or wait for new requests.')}
      </div>
    `;
  }

  function viewServices() {
    const list = getServices();
    return `
      <div class="adm-head">
        <div><h2>Services Manager</h2><p>${list.length} treatments shown on the website</p></div>
        <button class="mini gold" onclick="window.__admAddService()">+ Add Service</button>
      </div>

      <div class="panel" id="addServicePanel" style="display:none">
        <div class="panel-head"><div><h3>Add / Edit Service</h3><p>Changes apply to the live website immediately</p></div></div>
        <form class="a-form" id="svcForm">
          <input type="hidden" name="id">
          <div><label>Icon (emoji)</label><input name="icon" placeholder="🦷" maxlength="4"></div>
          <div><label>Name (English)</label><input name="name" required></div>
          <div><label>Name (हिंदी)</label><input name="hi"></div>
          <div><label>Tags (comma separated)</label><input name="tags" placeholder="Painless, Single sitting"></div>
          <div class="full"><label>Description</label><textarea name="desc" required></textarea></div>
          <div class="full" style="display:flex;gap:10px">
            <button type="submit" class="mini gold">Save Service</button>
            <button type="button" class="mini" onclick="window.__admHideSvc()">Cancel</button>
          </div>
        </form>
      </div>

      <div class="panel">
        <div class="panel-head"><div><h3>All Services</h3><p>Edit or remove treatments</p></div></div>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Service</th><th>Tags</th><th>Actions</th></tr></thead>
            <tbody>
              ${list.map(s => `
                <tr>
                  <td><b>${esc(s.icon || '🦷')} ${esc(s.name)}</b><br><span style="font-family:var(--f-hindi);font-size:.72rem;color:rgba(248,246,241,.5)">${esc(s.hi || '')}</span></td>
                  <td>${(s.tags || []).map(tg => `<span class="st confirmed" style="font-size:.55rem">${esc(tg)}</span>`).join(' ') || '—'}</td>
                  <td>
                    <div style="display:flex;gap:6px;flex-wrap:wrap">
                      <button class="mini" onclick="window.__admEditSvc('${s.id}')">Edit</button>
                      <button class="mini danger" onclick="window.__admDelSvc('${s.id}')">Delete</button>
                    </div>
                  </td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function viewContent() {
    const s = getSettings();
    return `
      <div class="adm-head"><div><h2>Website Content</h2><p>Control what visitors see without touching code</p></div></div>

      <div class="panel">
        <div class="panel-head"><div><h3>Announcement Bar</h3><p>Shown at the very top of every page</p></div></div>
        <form class="a-form" id="contentForm">
          <div class="full"><label>Announcement Text (English)</label>
            <input name="announce" value="${esc(s.announce || '')}">
          </div>
          <div class="full" style="display:flex;gap:10px">
            <button type="submit" class="mini gold">Save Content</button>
          </div>
        </form>
      </div>

      <div class="panel">
        <div class="panel-head"><div><h3>Social Links</h3><p>Instagram & Facebook destinations</p></div></div>
        <div class="a-form">
          <div><label>Instagram URL</label><input id="igUrl" value="${esc(s.ig || '')}"></div>
          <div><label>Facebook URL</label><input id="fbUrl" value="${esc(s.fb || '')}"></div>
          <div class="full"><button class="mini gold" onclick="window.__admSaveSocial()">Save Social Links</button></div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-head"><div><h3>Content Inventory</h3><p>Live sections on the customer website</p></div></div>
        <div class="legend">
          <div><i style="background:var(--teal)"></i> Hero · Trust · About Doctor · Services · Process · Gallery · Reviews · FAQ · Appointment · Map · Footer</div>
          <div style="color:rgba(248,246,241,.5)">All sections active. Section-level toggling can be enabled from Settings.</div>
        </div>
      </div>
    `;
  }

  function viewSettings() {
    const s = getSettings();
    return `
      <div class="adm-head"><div><h2>Settings</h2><p>Clinic contact & integration configuration</p></div></div>

      <div class="panel">
        <div class="panel-head"><div><h3>Contact & WhatsApp</h3><p>Used across all website buttons and appointment messages</p></div></div>
        <form class="a-form" id="settingsForm">
          <div><label>WhatsApp Number (with country code)</label><input name="wa" value="${esc(s.wa || '')}" placeholder="919425387555"></div>
          <div><label>Clinic Phone</label><input name="phone" value="${esc(s.phone || '')}"></div>
          <div><label>Floating WhatsApp Button</label>
            <select name="floatWa">
              <option value="true" ${s.floatWa !== false ? 'selected' : ''}>Enabled</option>
              <option value="false" ${s.floatWa === false ? 'selected' : ''}>Disabled</option>
            </select>
          </div>
          <div class="full" style="display:flex;gap:10px">
            <button type="submit" class="mini gold">Save Settings</button>
            <button type="button" class="mini" onclick="window.__admReset()">Reset Demo Data</button>
          </div>
        </form>
      </div>

      <div class="panel">
        <div class="panel-head"><div><h3>Integration Status</h3><p>What is currently wired up</p></div></div>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Feature</th><th>Status</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td><b>WhatsApp Deep Links</b></td><td><span class="st confirmed">ACTIVE</span></td><td>Prefilled messages with appointment details</td></tr>
              <tr><td><b>Google Maps Embed</b></td><td><span class="st confirmed">ACTIVE</span></td><td>Live directions to Ukhri Main Road</td></tr>
              <tr><td><b>Appointment Storage</b></td><td><span class="st confirmed">ACTIVE</span></td><td>Stored in this browser's local database</td></tr>
              <tr><td><b>Instagram Live Feed API</b></td><td><span class="st pending">NOT CONFIGURED</span></td><td>Requires Instagram Graph API token</td></tr>
              <tr><td><b>Server Database Sync</b></td><td><span class="st pending">NOT CONFIGURED</span></td><td>Requires backend deployment</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function viewSecurity() {
    const logs = DB.get(KEYS.log, []);
    const a = getAttempts();
    return `
      <div class="adm-head"><div><h2>Security & Activity</h2><p>Recent administrative actions</p></div></div>

      <div class="kpis">
        <div class="kpi"><small>Failed Attempts</small><b>${a.count || 0}</b><div class="sub">Since last success</div></div>
        <div class="kpi"><small>Lock Status</small><b>${lockRemaining() > 0 ? 'LOCKED' : 'CLEAR'}</b><div class="sub">Max ${ADM.MAX} attempts</div></div>
        <div class="kpi"><small>Logged Actions</small><b>${logs.length}</b><div class="sub">Last 300 retained</div></div>
      </div>

      <div class="panel">
        <div class="panel-head"><div><h3>Activity Log</h3><p>Searchable history of admin actions</p></div></div>
        ${logs.length ? `
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>When</th><th>User</th><th>Action</th><th>Target</th></tr></thead>
            <tbody>
              ${logs.slice(0, 60).map(l => `
                <tr>
                  <td>${fmtDate(l.at, true)}</td>
                  <td><b>${esc(l.user)}</b></td>
                  <td>${esc(l.action)}</td>
                  <td style="color:var(--teal-2)">${esc(l.target)}</td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>` : emptyState('🔐', 'No activity recorded', 'Actions you take in this panel will be logged here.')}
      </div>

      <div class="panel">
        <div class="panel-head"><div><h3>Security Notes</h3><p>Important for production deployment</p></div></div>
        <div class="legend" style="gap:14px">
          <div>⚠️ This dashboard lock is <b style="color:var(--teal-2)">client-side demonstration lock</b> with password: <code>robin9300</code>.</div>
          <div>✅ For production: move authentication to a server, hash passwords with bcrypt/argon2, use httpOnly session cookies, and enforce the 4-attempt / 5-minute lockout on the server.</div>
          <div>✅ All admin write operations should be validated and authorised server-side per role.</div>
        </div>
      </div>
    `;
  }

  /* Admin form event binders */
  function bindView(v) {
    if (v === 'services') {
      const f = $('#svcForm');
      if (f) f.addEventListener('submit', e => {
        e.preventDefault();
        const d = Object.fromEntries(new FormData(f).entries());
        const list = getServices();
        const item = {
          id: d.id || ('sv' + Date.now()),
          icon: d.icon || '🦷',
          name: d.name.trim(),
          hi: d.hi.trim() || d.name,
          desc: d.desc.trim(),
          tags: d.tags ? d.tags.split(',').map(s => s.trim()).filter(Boolean) : []
        };
        if (d.id) {
          const i = list.findIndex(x => x.id === d.id);
          if (i > -1) list[i] = { ...list[i], ...item };
          logActivity('Updated service', item.name);
        } else {
          list.push(item);
          logActivity('Added service', item.name);
        }
        DB.set(KEYS.services, list);
        toast('Service saved', 'ok');
        renderView('services');
        rerenderServices();
      });
    }
    if (v === 'content') {
      const f = $('#contentForm');
      if (f) f.addEventListener('submit', e => {
        e.preventDefault();
        const s = getSettings();
        s.announce = new FormData(f).get('announce');
        DB.set(KEYS.settings, s);
        logActivity('Updated announcement bar', 'website');
        toast('Content saved', 'ok');
        applyLang();
      });
    }
    if (v === 'settings') {
      const f = $('#settingsForm');
      if (f) f.addEventListener('submit', e => {
        e.preventDefault();
        const d = Object.fromEntries(new FormData(f).entries());
        const s = getSettings();
        s.wa = (d.wa || '').replace(/\D/g, '') || CFG.wa;
        s.phone = d.phone || CFG.phone;
        s.floatWa = d.floatWa === 'true';
        DB.set(KEYS.settings, s);
        logActivity('Updated clinic settings', 'settings');
        toast('Settings saved', 'ok');
        applyLang();
        const waFloat = $('#waFloat');
        if (waFloat) waFloat.style.display = s.floatWa ? '' : 'none';
      });
    }
  }

  function rerenderServices() {
    const list = getServices();
    const grid = $('#svcGrid');
    if (!grid) return;
    grid.innerHTML = list.map(s => `
      <div class="svc-card reveal in">
        <div class="svc-ic" style="font-size:1.4rem">${s.icon || '🦷'}</div>
        <h3>${esc(s.name)}<br><span class="hindi" style="font-size:.72rem;color:rgba(248,246,241,.5);font-weight:400">${esc(s.hi || '')}</span></h3>
        <p>${esc(s.desc)}</p>
        ${s.tags && s.tags.length ? `<div class="svc-tags">${s.tags.map(tag => `<span>${esc(tag)}</span>`).join('')}</div>` : ''}
      </div>
    `).join('');
  }

  /* Global helpers on window */
  window.__admGoto = v => {
    $$('.a-link').forEach(x => x.classList.toggle('on', x.dataset.view === v));
    renderView(v);
  };
  window.__admFilter = s => { apptFilter = s; renderView('appt'); };
  window.__admStatus = (id, status) => {
    const all = getAppts();
    const e = all.find(x => x.id === id);
    if (!e) return;
    e.status = status;
    DB.set(KEYS.appt, all);
    logActivity('Changed appointment status to ' + status, id);
    toast(`${id} → ${status}`, 'ok');
    renderView('appt');
    updateBadge();
  };
  window.__admAddService = () => {
    const p = $('#addServicePanel');
    if (!p) return;
    p.style.display = 'block';
    const f = $('#svcForm');
    if (f) { f.reset(); f.querySelector('[name="id"]').value = ''; }
    p.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  window.__admHideSvc = () => {
    const p = $('#addServicePanel');
    if (p) p.style.display = 'none';
  };
  window.__admEditSvc = id => {
    const item = getServices().find(s => s.id === id);
    if (!item) return;
    const p = $('#addServicePanel');
    if (!p) return;
    p.style.display = 'block';
    const f = $('#svcForm');
    if (!f) return;
    f.querySelector('[name="id"]').value = item.id;
    f.querySelector('[name="icon"]').value = item.icon || '';
    f.querySelector('[name="name"]').value = item.name;
    f.querySelector('[name="hi"]').value = item.hi || '';
    f.querySelector('[name="desc"]').value = item.desc || '';
    f.querySelector('[name="tags"]').value = (item.tags || []).join(', ');
    p.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  window.__admDelSvc = id => {
    const list = getServices();
    const item = list.find(s => s.id === id);
    if (!item) return;
    if (!confirm(`Delete "${item.name}" permanently?`)) return;
    DB.set(KEYS.services, list.filter(s => s.id !== id));
    logActivity('Deleted service', item.name);
    toast('Service deleted', 'ok');
    renderView('services');
    rerenderServices();
  };
  window.__admSaveSocial = () => {
    const s = getSettings();
    s.ig = ($('#igUrl')?.value || '').trim();
    s.fb = ($('#fbUrl')?.value || '').trim();
    DB.set(KEYS.settings, s);
    logActivity('Updated social links', 'website');
    toast('Social links saved', 'ok');
  };
  window.__admReset = () => {
    if (!confirm('Reset all demo data (services, appointments, settings) back to defaults?')) return;
    localStorage.removeItem(KEYS.services);
    localStorage.removeItem(KEYS.appt);
    localStorage.removeItem(KEYS.settings);
    localStorage.removeItem(KEYS.log);
    DB.set(KEYS.services, SERVICES_SEED);
    DB.set(KEYS.settings, { wa: CFG.wa, phone: CFG.phone, announce: I18N.en.announce, floatWa: true, ig: 'https://instagram.com', fb: 'https://facebook.com' });
    toast('Demo data reset', 'ok');
    renderView('settings'); rerenderServices(); updateBadge(); applyLang();
  };
  window.__admExport = () => {
    const all = getAppts();
    if (!all.length) { toast('No appointments to export', 'err'); return; }
    const headers = ['Ref', 'Name', 'Phone', 'Date', 'Time', 'Treatment', 'Visit', 'Notes', 'Status', 'Created At'];
    const rows = all.map(e => [e.id, e.name, e.phone, e.date, e.time, e.treatment, e.visit || '', e.notes || '', e.status, e.createdAt]);
    const csv = [headers, ...rows]
      .map(r => r.map(c => `"${String(c == null ? '' : c).replace(/"/g, '""')}"`).join(','))
      .join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `RJDental_Appointments_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    logActivity('Exported appointments', `${all.length} rows`);
    toast(`Exported ${all.length} appointments`, 'ok');
  };

  /* Mobile admin sidebar toggle */
  (function () {
    const side = $('#admSide');
    if (!side) return;
    const btn = document.createElement('button');
    btn.className = 'burger adm-burger';
    btn.style.cssText = 'display:none;position:fixed;left:16px;top:16px;z-index:61;background:var(--ink-2);border-color:var(--line-light)';
    btn.innerHTML = '<i style="background:var(--cream)"></i>';
    btn.setAttribute('aria-label', 'Toggle admin menu');
    document.body.appendChild(btn);
    btn.addEventListener('click', () => side.classList.toggle('open'));
  })();

  window.RJDC = { getAppts, getServices, getSettings, toast };

})();
