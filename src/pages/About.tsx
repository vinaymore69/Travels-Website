import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import AppearOnScroll from "@/components/AppearOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, Palette, Heart, Users, FileText, Download } from "lucide-react";
import { useState } from "react";

import hero from "@/assets/malmo/about.jpg";

 const booklets = [
  {
    lang: "English",
    flag: "🇮🇳",
    label: "English",
    code: "EN",
    file: "/booklets/shree_mkb_tours_travels_en.pdf",
    color: "rgba(109, 185, 254, 0.15)",
    accent: "rgba(109, 185, 254, 0.35)",
  },
  {
    lang: "Hindi",
    flag: "🇮🇳",
    label: "हिन्दी",
    code: "HI",
    file: "/booklets/shree_mkb_tours_travels_hi.pdf",
    color: "rgba(197, 159, 255, 0.15)",
    accent: "rgba(197, 159, 255, 0.35)",
  },
  {
    lang: "Marathi",
    flag: "🇮🇳",
    label: "मराठी",
    code: "MR",
    file: "/booklets/shree_mkb_tours_travels_mr.pdf",
    color: "rgba(255, 149, 238, 0.15)",
    accent: "rgba(255, 149, 238, 0.35)",
  },
];


const BookletCard = ({ booklet }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? booklet.accent : booklet.color,
        transition: "background-color 0.3s ease",
      }}
      className="relative p-8 rounded-2xl flex flex-col justify-between gap-6 cursor-default"
    >
      {/* Top row: icon + language code badge */}
      <div className="flex items-start justify-between">
        <div
          style={{
            backgroundColor: hovered ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.1)",
            transition: "background-color 0.3s ease",
          }}
          className="w-[56px] h-[56px] rounded-xl flex items-center justify-center"
        >
          <FileText className="w-[28px] h-[28px] text-foreground" />
        </div>
        <span className="text-[1rem] font-semibold tracking-[0.08em] uppercase text-foreground opacity-50">
          {booklet.code}
        </span>
      </div>

      {/* Language label */}
      <div>
        <h3 className="text-[2.2rem] font-semibold text-foreground leading-[1.3]">
          {booklet.label}
        </h3>
        <p className="text-[1.3rem] text-foreground opacity-55 mt-1 leading-[1.5]">
          {booklet.lang} Booklet
        </p>
      </div>

      {/* Download button */}
      <a
  href={booklet.file}
  download={`shree_mkb_tours_travels_${booklet.code.toLowerCase()}.pdf`}
  className="inline-flex items-center gap-2.5 self-start px-5 py-3 rounded-xl text-foreground text-[1.2rem] font-semibold"
  style={{
    backgroundColor: hovered ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.12)",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    transform: hovered ? "translateY(-1px)" : "translateY(0)",
  }}
>

        <Download
          className="w-[18px] h-[18px]"
          style={{
            transform: hovered ? "translateY(2px)" : "translateY(0)",
            transition: "transform 0.3s ease",
          }}
        />
        Download PDF
      </a>
    </div>
  );
};

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Title */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mt-[4.5rem] xl:mt-[6rem]">
        <AppearOnScroll delay={0}>
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-semibold tracking-[-0.01em] leading-[1.2] md:leading-[1] text-center">
            {t("about.title")}
          </h1>
        </AppearOnScroll>
      </div>

      {/* Hero Image */}
      <AppearOnScroll delay={0}>
        <figure className="relative flex overflow-hidden w-full mt-[3rem] md:mt-[4.5rem] lg:mt-[6rem] mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
          <picture className="flex w-full justify-center">
            <img
              src={hero}
              alt={t("about.heroAlt")}
              className="top-0 left-0 max-w-full w-full aspect-[2/1] xl:aspect-[16/5] object-cover"
            />
          </picture>
        </figure>
      </AppearOnScroll>

      {/* Story Section */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
        <AppearOnScroll delay={0}>
          <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[3rem]">
            {t("about.storyTitle")}
          </h2>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground mb-6">
            {t("about.storyPara1")}
          </p>
        </AppearOnScroll>
        <AppearOnScroll delay={300}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground mb-6">
            {t("about.storyPara2")}
          </p>
        </AppearOnScroll>
        <AppearOnScroll delay={450}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground">
            {t("about.storyPara3")}
          </p>
        </AppearOnScroll>
      </div>

      {/* Mission Quote */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
        <AppearOnScroll delay={0}>
          <figure className="blockquote-big text-center mt-[1.25rem] mb-[0.9375rem] md:mt-[1.875rem] md:mb-[1.875rem] lg:mt-[3.75rem] lg:mb-[3.75rem] md:mx-[calc(-18vw+6.875rem)] xl:mx-[-12.5rem]">
            <blockquote className="font-sans text-[calc(5vw+0.6rem)] lg:text-[5.4rem] font-extrabold leading-[1.2]">
              "{t("about.missionQuote")}"
            </blockquote>
            <figcaption className="text-[calc(2.5vw+0.8rem)] lg:text-[3rem] font-semibold leading-[1.6] md:leading-[1.4] before:content-['―_']">
              {t("about.missionCaption")}
            </figcaption>
          </figure>
        </AppearOnScroll>
      </div>

      {/* Values Grid */}
      <Section>
        <div className="max-w-[110rem] mx-auto">
          <AppearOnScroll delay={0}>
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[4rem]">
              {t("about.valuesTitle")}
            </h2>
          </AppearOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AppearOnScroll delay={0}>
              <div className="lg:col-span-1 p-8 rounded-2xl bg-[rgba(197,159,255,0.15)]">
                <Sparkles className="w-[48px] h-[48px] text-foreground mb-4" />
                <h3 className="text-[2.2rem] font-semibold mb-3 text-foreground">{t("about.passionTitle")}</h3>
                <p className="text-[1.6rem] leading-[1.8] text-foreground">
                  {t("about.passionDesc")}
                </p>
              </div>
            </AppearOnScroll>

            <AppearOnScroll delay={150}>
              <div className="lg:col-span-2 p-8 rounded-2xl bg-[rgba(255,149,238,0.15)]">
                <Palette className="w-[48px] h-[48px] text-foreground mb-4" />
                <h3 className="text-[2.2rem] font-semibold mb-3 text-foreground">{t("about.excellenceTitle")}</h3>
                <p className="text-[1.6rem] leading-[1.8] text-foreground">
                  {t("about.excellenceDesc")}
                </p>
              </div>
            </AppearOnScroll>

            <AppearOnScroll delay={300}>
              <div className="lg:col-span-2 p-8 rounded-2xl bg-[rgba(255,207,109,0.15)]">
                <Heart className="w-[48px] h-[48px] text-foreground mb-4" />
                <h3 className="text-[2.2rem] font-semibold mb-3 text-foreground">{t("about.customerTitle")}</h3>
                <p className="text-[1.6rem] leading-[1.8] text-foreground">
                  {t("about.customerDesc")}
                </p>
              </div>
            </AppearOnScroll>

            <AppearOnScroll delay={450}>
              <div className="lg:col-span-1 p-8 rounded-2xl bg-[rgba(254,185,131,0.15)]">
                <Users className="w-[48px] h-[48px] text-foreground mb-4" />
                <h3 className="text-[2.2rem] font-semibold mb-3 text-foreground">{t("about.safetyTitle")}</h3>
                <p className="text-[1.6rem] leading-[1.8] text-foreground">
                  {t("about.safetyDesc")}
                </p>
              </div>
            </AppearOnScroll>
          </div>
        </div>
      </Section>

      {/* ─── Booklet Downloads ─── */}
      <Section>
        <div className="max-w-[110rem] mx-auto">
          {/* Heading block — mirrors the values section heading rhythm */}
          <AppearOnScroll delay={0}>
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[1.5rem]">
              {t("about.bookletsTitle")}
            </h2>
          </AppearOnScroll>
          <AppearOnScroll delay={150}>
            <p className="text-[1.6rem] leading-[1.8] text-foreground opacity-60 max-w-[56rem] mb-[4rem]">
              {t("about.bookletsDesc")}
            </p>
          </AppearOnScroll>

          {/* 3-column card grid — same gap & col structure as values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {booklets.map((booklet, i) => (
              <AppearOnScroll key={booklet.code} delay={i * 150}>
                <BookletCard booklet={booklet} />
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default About;