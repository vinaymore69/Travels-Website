import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArticleContent } from "@/components/ArticleComponents";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { t } = useLanguage();
  const privacyContent = t("privacy.content");
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="box-content max-w-[80rem] px-6 md:px-[calc(18vw-10rem)] mx-auto mt-[4rem] mb-[8rem]">
        <header className="mb-[4rem] text-center">
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[5rem] font-semibold tracking-[-0.01em] leading-[1.2] mb-[1rem]">
            {t("privacy.title")}
          </h1>
          <p className="text-[1.6rem] text-muted-foreground">
            {t("privacy.lastUpdated")}
          </p>
        </header>

        <ArticleContent>
          {Array.isArray(privacyContent) && privacyContent.map((item, idx) => {
            // Headings
            if (["Information We Collect", "हम कौन सी जानकारी एकत्र करते हैं", "आम्ही कोणती माहिती गोळा करतो"].includes(item)) return <h2 key={idx}>{item}</h2>;
            if (["Personal Information", "व्यक्तिगत जानकारी", "वैयक्तिक माहिती"].includes(item)) return <h3 key={idx}>{item}</h3>;
            if (["Automatically Collected Information", "स्वचालित रूप से एकत्र की गई जानकारी", "स्वयंचलितपणे गोळा केलेली माहिती"].includes(item)) return <h3 key={idx}>{item}</h3>;
            if (["How We Use Your Information", "हम आपकी जानकारी का उपयोग कैसे करते हैं", "आम्ही तुमची माहिती कशी वापरतो"].includes(item)) return <h2 key={idx}>{item}</h2>;
            if (["Cookies and Tracking Technologies", "कुकीज़ और ट्रैकिंग तकनीक", "कुकीज आणि ट्रॅकिंग तंत्रज्ञान"].includes(item)) return <h2 key={idx}>{item}</h2>;
            if (["Types of Cookies We Use", "हम किस प्रकार की कुकीज़ का उपयोग करते हैं", "आम्ही कोणत्या प्रकारच्या कुकीज वापरतो"].includes(item)) return <h3 key={idx}>{item}</h3>;
            if (["Third-Party Services", "थर्ड-पार्टी सेवाएं", "तृतीय-पक्ष सेवा"].includes(item)) return <h2 key={idx}>{item}</h2>;
            if (["Data Security", "डेटा सुरक्षा", "डेटा सुरक्षा"].includes(item)) return <h2 key={idx}>{item}</h2>;
            if (["Your Rights", "आपके अधिकार", "तुमचे अधिकार"].includes(item)) return <h2 key={idx}>{item}</h2>;
            if (["Children's Privacy", "बच्चों की गोपनीयता", "मुलांची गोपनीयता"].includes(item)) return <h2 key={idx}>{item}</h2>;
            if (["International Data Transfers", "अंतर्राष्ट्रीय डेटा ट्रांसफर", "आंतरराष्ट्रीय डेटा ट्रान्सफर"].includes(item)) return <h2 key={idx}>{item}</h2>;
            if (["Changes to This Privacy Policy", "इस गोपनीयता नीति में परिवर्तन", "या गोपनीयता धोरणातील बदल"].includes(item)) return <h2 key={idx}>{item}</h2>;
            if (["Contact Us", "संपर्क करें", "संपर्क करा"].includes(item)) return <h2 key={idx}>{item}</h2>;
            // List items
            if (["Full name", "Phone number", "Email address", "Pickup and drop locations", "Travel dates and preferences", "Payment and billing details (for invoicing purposes)", "पूरा नाम", "फोन नंबर", "ईमेल पता", "पिकअप और ड्रॉप स्थान", "यात्रा तिथियां और प्राथमिकताएं", "भुगतान और बिलिंग विवरण (इनवॉइस के लिए)", "पूर्ण नाव", "फोन नंबर", "ईमेल पत्ता", "पिकअप आणि ड्रॉप स्थान", "प्रवासाच्या तारखा आणि प्राधान्यक्रम", "पेमेंट आणि बिलिंग तपशील (इनव्हॉइससाठी)"].includes(item)) return <li key={idx}>{item}</li>;
            if (["Browser type and version", "Operating system", "IP address", "Pages visited and time spent on pages", "Referring website addresses", "ब्राउज़र प्रकार और संस्करण", "ऑपरेटिंग सिस्टम", "आईपी पता", "देखे गए पृष्ठ और उन पर बिताया गया समय", "रेफरिंग वेबसाइट पते", "ब्राउझर प्रकार आणि आवृत्ती", "ऑपरेटिंग सिस्टम", "IP पत्ता", "पृष्ठे आणि त्यावर घालवलेला वेळ", "रेफरिंग वेबसाइट पत्ते"].includes(item)) return <li key={idx}>{item}</li>;
            if (["Process bookings and provide travel services", "Contact you regarding enquiries, confirmations, and trip support", "Send service updates and promotional offers (with your consent)", "Improve our website, services, and customer experience", "Maintain legal, accounting, and safety records", "Detect, prevent, and address technical or security issues", "बुकिंग प्रक्रिया और यात्रा सेवाएं प्रदान करने के लिए", "पूछताछ, पुष्टि और यात्रा सहायता के लिए आपसे संपर्क करने के लिए", "सेवा अपडेट और प्रचार ऑफर भेजने के लिए (आपकी सहमति से)", "हमारी वेबसाइट, सेवाओं और ग्राहक अनुभव को बेहतर बनाने के लिए", "कानूनी, लेखा और सुरक्षा रिकॉर्ड बनाए रखने के लिए", "तकनीकी या सुरक्षा समस्याओं का पता लगाने, रोकने और समाधान करने के लिए", "बुकिंग प्रक्रिया आणि प्रवास सेवा देण्यासाठी", "चौकशी, पुष्टीकरण आणि प्रवास सहाय्यासाठी तुमच्याशी संपर्क साधण्यासाठी", "सेवा अद्यतने आणि प्रमोशनल ऑफर पाठवण्यासाठी (तुमच्या संमतीने)", "आमची वेबसाइट, सेवा आणि ग्राहक अनुभव सुधारण्यासाठी", "कायदेशीर, लेखा आणि सुरक्षा नोंदी ठेवण्यासाठी", "तांत्रिक किंवा सुरक्षा समस्यांचे निदान, प्रतिबंध आणि निराकरण करण्यासाठी"].includes(item)) return <li key={idx}>{item}</li>;
            if (["Essential Cookies: Required for website operation and booking forms", "Analytics Cookies: Help us understand visitor behavior and improve services", "Preference Cookies: Remember language, location, and display settings", "आवश्यक कुकीज़: वेबसाइट संचालन और बुकिंग फॉर्म के लिए आवश्यक", "एनालिटिक्स कुकीज़: विज़िटर व्यवहार समझने और सेवाओं में सुधार के लिए", "प्रेफरेंस कुकीज़: भाषा, स्थान और डिस्प्ले सेटिंग्स याद रखने के लिए", "आवश्यक कुकीज: वेबसाइट ऑपरेशन आणि बुकिंग फॉर्मसाठी आवश्यक", "विश्लेषणात्मक कुकीज: वापरकर्ता वर्तन समजून घेण्यासाठी आणि सेवा सुधारण्यासाठी", "प्राधान्य कुकीज: भाषा, स्थान आणि डिस्प्ले सेटिंग्ज लक्षात ठेवण्यासाठी"].includes(item)) return <li key={idx}>{item}</li>;
            if (["Access your personal information", "Request correction of inaccurate data", "Request deletion of your information (subject to legal requirements)", "Withdraw consent for marketing communications", "Request data portability where applicable", "अपनी व्यक्तिगत जानकारी तक पहुँच प्राप्त करना", "गलत डेटा को सही करने का अनुरोध करना", "अपनी जानकारी को हटाने का अनुरोध करना (कानूनी आवश्यकताओं के अधीन)", "मार्केटिंग संचार के लिए सहमति वापस लेना", "जहां लागू हो डेटा पोर्टेबिलिटी का अनुरोध करना", "तुमची वैयक्तिक माहिती पाहण्याचा", "चुकीची माहिती दुरुस्त करण्याची विनंती करण्याचा", "तुमची माहिती हटवण्याची विनंती करण्याचा (कायदेशीर आवश्यकतेनुसार)", "मार्केटिंग कम्युनिकेशनसाठी संमती मागे घेण्याचा", "लागू असल्यास डेटा पोर्टेबिलिटीची विनंती करण्याचा"].includes(item)) return <li key={idx}>{item}</li>;
            if (["By email: Shreemkb@gmail.com", "By phone: +91 84338 94555", "Through our contact page: /contact", "ईमेल द्वारा: Shreemkb@gmail.com", "फोन द्वारा: +91 84338 94555", "हमारे संपर्क पेज के माध्यम से: /contact", "ईमेलद्वारे: Shreemkb@gmail.com", "फोनद्वारे: +९१ ८४३३८ ९४५५५", "आमच्या संपर्क पेजद्वारे: /contact"].includes(item)) return <li key={idx}>{item.includes("/contact") ? <a href="/contact">{item}</a> : item}</li>;
            // Paragraphs
            return <p key={idx}>{item}</p>;
          })}
        </ArticleContent>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
