import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import AppearOnScroll from "@/components/AppearOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";
import { Car, Plane, MapPin, Landmark, ArrowRight } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Car,
      titleKey: "services.localRental.title",
      subtitleKey: "services.localRental.subtitle",
      descriptionKey: "services.localRental.description",
      featuresKeys: [
        "services.localRental.feature1",
        "services.localRental.feature2",
        "services.localRental.feature3"
      ],
      color: "rgba(197,159,255,0.15)",
    },
    {
      icon: Plane,
      titleKey: "services.airportTransfer.title",
      subtitleKey: "services.airportTransfer.subtitle",
      descriptionKey: "services.airportTransfer.description",
      featuresKeys: [
        "services.airportTransfer.feature1",
        "services.airportTransfer.feature2",
        "services.airportTransfer.feature3"
      ],
      color: "rgba(255,149,238,0.15)",
    },
    {
      icon: MapPin,
      titleKey: "services.outstationTravel.title",
      subtitleKey: "services.outstationTravel.subtitle",
      descriptionKey: "services.outstationTravel.description",
      featuresKeys: [
        "services.outstationTravel.feature1",
        "services.outstationTravel.feature2",
        "services.outstationTravel.feature3"
      ],
      color: "rgba(255,207,109,0.15)",
    },
    {
      icon: Landmark,
      titleKey: "services.mumbaiDarshan.title",
      subtitleKey: "services.mumbaiDarshan.subtitle",
      descriptionKey: "services.mumbaiDarshan.description",
      featuresKeys: [
        "services.mumbaiDarshan.feature1",
        "services.mumbaiDarshan.feature2",
        "services.mumbaiDarshan.feature3"
      ],
      color: "rgba(254,185,131,0.15)",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mt-[4.5rem] xl:mt-[6rem]">
        <AppearOnScroll delay={0}>
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-semibold tracking-[-0.01em] leading-[1.2] md:leading-[1] text-center mb-[2rem]">
            {t("services.title")}
          </h1>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <p className="text-[1.8rem] md:text-[2rem] leading-[1.6] text-center text-muted-foreground mb-[3rem]">
            {t("services.subtitle")}
          </p>
        </AppearOnScroll>
        <AppearOnScroll delay={300}>
          <p className="text-[1.6rem] md:text-[1.8rem] leading-[1.8] text-center text-foreground max-w-[56rem] mx-auto">
            {t("services.description")}
          </p>
        </AppearOnScroll>
      </div>

      {/* Services Grid */}
      <Section>
        <div className="w-full max-w-[110rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mt-[3rem] md:mt-[6rem]">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AppearOnScroll key={service.titleKey} delay={index * 150}>
                  <div 
                    className="group p-8 md:p-10 lg:p-12 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                    style={{ backgroundColor: service.color }}
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      <Icon className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] text-foreground" strokeWidth={1.5} />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-[2.4rem] md:text-[2.8rem] font-semibold mb-2 text-foreground">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-[1.6rem] md:text-[1.8rem] font-medium text-muted-foreground mb-4">
                      {t(service.subtitleKey)}
                    </p>

                    {/* Description */}
                    <p className="text-[1.6rem] leading-[1.8] text-foreground mb-6">
                      {t(service.descriptionKey)}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-8">
                      {service.featuresKeys.map((featureKey) => (
                        <li key={featureKey} className="flex items-center text-[1.5rem] text-foreground">
                          <span className="w-1.5 h-1.5 bg-foreground rounded-full mr-3"></span>
                          {t(featureKey)}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <button className="inline-flex items-center gap-2 text-[1.6rem] font-medium text-foreground hover:gap-3 transition-all duration-300">
                      {t("services.learnMore")}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </AppearOnScroll>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <div className="box-content max-w-[110rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
        <AppearOnScroll delay={0}>
          <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[3rem] text-center">
            {t("services.whyChooseTitle")}
          </h2>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[3rem]">
            <div className="space-y-4">
              <h3 className="text-[2rem] font-semibold text-foreground">{t("services.professionalTitle")}</h3>
              <p className="text-[1.6rem] leading-[1.8] text-foreground">
                {t("services.professionalDesc")}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-[2rem] font-semibold text-foreground">{t("services.flexibleTitle")}</h3>
              <p className="text-[1.6rem] leading-[1.8] text-foreground">
                {t("services.flexibleDesc")}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-[2rem] font-semibold text-foreground">{t("services.supportTitle")}</h3>
              <p className="text-[1.6rem] leading-[1.8] text-foreground">
                {t("services.supportDesc")}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-[2rem] font-semibold text-foreground">{t("services.pricingTitle")}</h3>
              <p className="text-[1.6rem] leading-[1.8] text-foreground">
                {t("services.pricingDesc")}
              </p>
            </div>
          </div>
        </AppearOnScroll>
      </div>

      {/* CTA Section */}
      <div className="box-content max-w-[110rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
        <AppearOnScroll delay={0}>
          <div className="text-center p-12 md:p-16 rounded-2xl bg-[rgba(203,48,223,0.1)]">
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-4">
              {t("services.ctaTitle")}
            </h2>
            <p className="text-[1.6rem] md:text-[1.8rem] leading-[1.8] text-muted-foreground mb-8">
              {t("services.ctaSubtitle")}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-[1.8rem] font-medium h-[60px] px-12 bg-[rgba(203,48,223,0.9)] text-white rounded-lg hover:bg-[rgba(203,48,223,1)] transition-all"
            >
              {t("services.ctaButton")}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </AppearOnScroll>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
