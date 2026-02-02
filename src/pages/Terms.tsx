import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArticleContent } from "@/components/ArticleComponents";
import { useLanguage } from "@/contexts/LanguageContext";


const Terms = () => {
  const { t } = useLanguage();
  const termsContent = t("terms.content");
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="box-content max-w-[80rem] px-6 md:px-[calc(18vw-10rem)] mx-auto mt-[4rem] mb-[8rem]">
        <header className="mb-[4rem] text-center">
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[5rem] font-semibold tracking-[-0.01em] leading-[1.2] mb-[1rem]">
            {t("terms.title")}
          </h1>
          <p className="text-[1.6rem] text-muted-foreground">
            {t("terms.lastUpdated")}
          </p>
        </header>

        <ArticleContent>
          {Array.isArray(termsContent) && termsContent.map((item, idx) => {
            // Render headings and paragraphs based on content
            if (item === "Important Notice" || item === "महत्वपूर्ण सूचना" || item === "महत्वाची सूचना") {
              return <h2 key={idx}>{item}</h2>;
            }
            if (item === "Kilometre & Hour Limits" || item === "किलोमीटर और घंटे की सीमा" || item === "किलोमीटर आणि तास मर्यादा") {
              return <h2 key={idx}>{item}</h2>;
            }
            if (item === "Airport Entry Charges" || item === "एयरपोर्ट एंट्री चार्ज" || item === "एअरपोर्ट प्रवेश शुल्क") {
              return <h2 key={idx}>{item}</h2>;
            }
            if (item === "Additional Charges" || item === "अतिरिक्त शुल्क" || item === "अतिरिक्त शुल्क") {
              return <h2 key={idx}>{item}</h2>;
            }
            if (item === "Night Allowance" || item === "नाइट अलाउंस" || item === "नाईट अलाऊन्स") {
              return <h2 key={idx}>{item}</h2>;
            }
            if (item === "Itinerary Planning" || item === "यात्रा योजना" || item === "यात्रा नियोजन") {
              return <h2 key={idx}>{item}</h2>;
            }
            if (item === "Hill Station Travel" || item === "हिल स्टेशन यात्रा" || item === "हिल स्टेशन प्रवास") {
              return <h2 key={idx}>{item}</h2>;
            }
            if (item === "CNG Vehicles" || item === "सीएनजी वाहन" || item === "CNG वाहने") {
              return <h2 key={idx}>{item}</h2>;
            }
            if (item === "Pick-up & Drop Policy" || item === "पिकअप और ड्रॉप नीति" || item === "पिकअप आणि ड्रॉप धोरण") {
              return <h2 key={idx}>{item}</h2>;
            }
            if (item === "Service Coverage" || item === "सेवा कवरेज" || item === "सेवा क्षेत्र") {
              return <h2 key={idx}>{item}</h2>;
            }
            if (item === "One-Way Trips" || item === "वन-वे ट्रिप्स" || item === "वन वे ट्रिप्स") {
              return <h3 key={idx}>{item}</h3>;
            }
            if (item === "Round Trips" || item === "राउंड ट्रिप्स" || item === "राउंड ट्रिप्स") {
              return <h3 key={idx}>{item}</h3>;
            }
            if (item === "Governing Law" || item === "विधिक अधिकार क्षेत्र" || item === "कायदेशीर अधिकार क्षेत्र") {
              return <h2 key={idx}>{item}</h2>;
            }
            if (item === "Changes to Terms" || item === "नियमों में परिवर्तन" || item === "नियमांमध्ये बदल") {
              return <h2 key={idx}>{item}</h2>;
            }
            if (item === "Contact Information" || item === "संपर्क जानकारी" || item === "संपर्क माहिती") {
              return <h2 key={idx}>{item}</h2>;
            }
            if (item.startsWith("📞") || item.startsWith("✉️") || item.includes("/contact")) {
              // Render contact info as list
              return null;
            }
            return <p key={idx}>{item}</p>;
          })}
          {/* Render contact info as a list at the end */}
          <ul>
            {Array.isArray(termsContent) && termsContent.filter(item => item.startsWith("📞") || item.startsWith("✉️") || item.includes("/contact")).map((item, idx) => (
              <li key={"contact-"+idx}>
                {item.includes("/contact") ? <a href="/contact">{item}</a> : item}
              </li>
            ))}
          </ul>
        </ArticleContent>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
