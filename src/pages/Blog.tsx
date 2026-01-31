import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ArticlePreview from "@/components/ArticlePreview";
import BlogHighlight from "@/components/BlogHighlight";
import { useLanguage } from "@/contexts/LanguageContext";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";
import blog7 from "@/assets/blog-7.jpg";
import blog8 from "@/assets/blog-8.jpg";
import blog9 from "@/assets/blog-9.jpg";
import blog10 from "@/assets/blog-10.jpg";
import blog11 from "@/assets/blog-11.jpg";
import blog12 from "@/assets/blog-12.jpg";
import blog13 from "@/assets/blog-13.jpeg";
import blog14 from "@/assets/blog-14.jpeg";
import blog15 from "@/assets/blog-15.jpg";
import blog16 from "@/assets/blog-16.jpg";
import blog17 from "@/assets/blog-17.jpg";
import blog18 from "@/assets/blog-18.jpg";

import malmoHero from "@/assets/malmo/malmo-hero.jpg";

const Blog = () => {
  const articlesRef = useRef<(HTMLElement | null)[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }, // Changed from 0.5 to 0.1 - triggers earlier
    );

    articlesRef.current.forEach((article) => {
      if (article) observer.observe(article);
    });

    return () => observer.disconnect();
  }, [selectedCategory]);

const featuredArticle = {
  title: "Discover India with Memorable Journeys",
  description:
    "Explore breathtaking destinations with our private tours, door-to-door pickup & drop, and fully customized travel packages designed for comfort and unforgettable experiences.",
  image: malmoHero,
  tag: "Travel",
  slug: "discover-india-private-tours",
};

const articles = [
  {
    titleKey: "blog.articles.hills.title",
    descriptionKey: "blog.articles.hills.desc",
    image: blog2,
    tag: "Hills",
    slug: "hill-stations-getaways",
  },
  {
    titleKey: "blog.articles.spiritual.title",
    descriptionKey: "blog.articles.spiritual.desc",
    image: blog3,
    tag: "Spiritual",
    slug: "spiritual-pilgrimage-tours",
  },
  {
    titleKey: "blog.articles.beach.title",
    descriptionKey: "blog.articles.beach.desc",
    image: blog4,
    tag: "Beaches",
    slug: "beach-coastal-holidays",
  },
  {
    titleKey: "blog.articles.heritage.title",
    descriptionKey: "blog.articles.heritage.desc",
    image: blog7,
    tag: "Heritage",
    slug: "heritage-cultural-tours",
  },
  {
    titleKey: "blog.articles.adventure.title",
    descriptionKey: "blog.articles.adventure.desc",
    image: blog8,
    tag: "Adventure",
    slug: "adventure-nature-tours",
  },
];

const opinions = [
  {
    titleKey: "blog.opinions.family",
    avatar: "../src/assets/malmo/profile2.png",
    author: "Rohit Sharma",
    slug: "family-tour-review",
  },
  {
    titleKey: "blog.opinions.pilgrimage",
    avatar: "../src/assets/malmo/profile1.png",
    author: "Anita Deshmukh",
    slug: "pilgrimage-tour-review",
  },
  {
    titleKey: "blog.opinions.hillStation",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    author: "Kunal Patil",
    slug: "hill-station-review",
  },
  {
    titleKey: "blog.opinions.service",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    author: "Priya Kulkarni",
    slug: "travel-service-review",
  },
];

const allArticles = [
  {
    titleKey: "blog.destinations.matheran.title",
    descriptionKey: "blog.destinations.matheran.desc",
    image: blog5,
    tag: "Hills & Getaways",
    slug: "matheran-hill-getaway",
  },
  {
    titleKey: "blog.destinations.mahabaleshwar.title",
    descriptionKey: "blog.destinations.mahabaleshwar.desc",
    image: blog6,
    tag: "Hills & Getaways",
    slug: "mahabaleshwar-tour",
  },
  {
    titleKey: "blog.destinations.shirdi.title",
    descriptionKey: "blog.destinations.shirdi.desc",
    image: blog7,
    tag: "Spiritual Tours",
    slug: "shirdi-pilgrimage",
  },
  {
    titleKey: "blog.destinations.trimbakeshwar.title",
    descriptionKey: "blog.destinations.trimbakeshwar.desc",
    image: blog8,
    tag: "Spiritual Tours",
    slug: "trimbakeshwar-yatra",
  },
  {
    titleKey: "blog.destinations.goa.title",
    descriptionKey: "blog.destinations.goa.desc",
    image: blog9,
    tag: "Beach Holidays",
    slug: "goa-beach-tour",
  },
  {
    titleKey: "blog.destinations.konkan.title",
    descriptionKey: "blog.destinations.konkan.desc",
    image: blog10,
    tag: "Beach Holidays",
    slug: "konkan-coast-tour",
  },
  {
    titleKey: "blog.destinations.ajanta.title",
    descriptionKey: "blog.destinations.ajanta.desc",
    image: blog1,
    tag: "Heritage Trails",
    slug: "ajanta-ellora-tour",
  },
  {
    titleKey: "blog.destinations.kolhapur.title",
    descriptionKey: "blog.destinations.kolhapur.desc",
    image: blog11,
    tag: "Heritage Trails",
    slug: "kolhapur-heritage-tour",
  },
  {
    titleKey: "blog.destinations.rajmachi.title",
    descriptionKey: "blog.destinations.rajmachi.desc",
    image: blog12,
    tag: "Adventure Tours",
    slug: "rajmachi-trek",
  },
  {
    titleKey: "blog.destinations.kalsubai.title",
    descriptionKey: "blog.destinations.kalsubai.desc",
    image: blog13,
    tag: "Adventure Tours",
    slug: "kalsubai-trek",
  },
  {
    titleKey: "blog.destinations.bhandardara.title",
    descriptionKey: "blog.destinations.bhandardara.desc",
    image: blog14,
    tag: "Hills & Getaways",
    slug: "bhandardara-tour",
  },
  {
    titleKey: "blog.destinations.pandharpur.title",
    descriptionKey: "blog.destinations.pandharpur.desc",
    image: blog15,
    tag: "Spiritual Tours",
    slug: "pandharpur-yatra",
  },
  {
    titleKey: "blog.destinations.tarkarli.title",
    descriptionKey: "blog.destinations.tarkarli.desc",
    image: blog16,
    tag: "Beach Holidays",
    slug: "tarkarli-beach",
  },
  {
    titleKey: "blog.destinations.raigad.title",
    descriptionKey: "blog.destinations.raigad.desc",
    image: blog17,
    tag: "Heritage Trails",
    slug: "raigad-fort-tour",
  },
  {
    titleKey: "blog.destinations.harishchandragad.title",
    descriptionKey: "blog.destinations.harishchandragad.desc",
    image: blog18,
    tag: "Adventure Tours",
    slug: "harishchandragad-trek",
  },
];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Section>
        <BlogHighlight
          title={t("blog.featuredTitle")}
          description={t("blog.featuredDesc")}
          href={`/article/${featuredArticle.slug}`}
          imageSrc={featuredArticle.image}
          imageAlt={t("blog.featuredTitle")}
        />
      </Section>

      {/* Articles Grid */}
      <Section
        className="relative overflow-x-scroll scroll-smooth snap-x snap-mandatory pb-28 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] 
  [&::-webkit-scrollbar]:hidden"
      >
        <div className="m-0 flex w-full list-none items-start overflow-x-visible after:ml-[-6.25%] after:block after:flex-[0_0_calc(50vw-50%)] after:content-[''] lg:after:ml-[-4.347826087%]">
          {articles.map((article, index) => (
            <div
              key={index}
              ref={(el) => (articlesRef.current[index] = el)}
              className="m-0 mr-[6.25%] inline-flex max-w-[42rem] flex-[0_0_80%] scroll-snap-align-center sm:flex-[0_0_43.75%] lg:mr-[4.347826087%] lg:flex-[0_0_30.434783%]"
            >
              <ArticlePreview
                title={t(article.titleKey)}
                slug={article.slug}
                image={article.image}
                imageAlt={t(article.titleKey)}
                category={article.tag}
                categorySlug={article.tag.toLowerCase()}
                teaser={t(article.descriptionKey)}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Opinions Section */}
      <Section>
        <h2
          className="text-[hsl(var(--travel-text))]"
          style={{
            width: "100%",
            marginBottom: "3rem",
            padding: "1rem 0",
            textAlign: "left",
            letterSpacing: "0.2rem",
            textTransform: "uppercase",
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
            fontSize: "1.6rem",
            fontWeight: 600,
            lineHeight: 1.5,
          }}
        >
          {t("blog.opinionsTitle")}
        </h2>
        <div className="m-0 grid w-full list-none gap-12 p-0 text-left sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] 2xl:gap-24">
          {opinions.map((opinion, index) => (
            <Link
              key={index}
              to={`/article/${opinion.slug}`}
              ref={(el) => (articlesRef.current[articles.length + index] = el)}
              className="group blog-feed__item"
              style={{
                flex: "0 0 calc(25% - 2.25rem)",
                animationDelay: `${index * 150}ms`,
              }}
            >
              <article className="h-full">
                <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden bg-muted mb-4">
                  <img
                    src={opinion.avatar}
                    alt={opinion.author}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h2 className="font-sans font-semibold text-[2.2rem] md:text-[2.7rem] leading-[1.4] text-[hsl(var(--travel-text))] text-left">
                  <span className="inline-block mb-[-0.3em] pb-[0.3em] [transition:background-position_600ms_cubic-bezier(0.45,0,0.55,1)] bg-current [background-image:linear-gradient(90deg,rgba(203,48,223,0.5)_0%,rgba(254,44,85,0.5)_46%,hsl(var(--foreground))_54%,hsl(var(--foreground))_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent group-hover:bg-[position:0%_0]">
                    {t(opinion.titleKey)}
                  </span>
                </h2>
              </article>
            </Link>
          ))}
        </div>
      </Section>

      {/* More Articles Section */}
      <Section>
        <h2
          className="text-[hsl(var(--travel-text))]"
          style={{
            width: "100%",
            marginBottom: "3rem",
            padding: "1rem 0",
            textAlign: "left",
            letterSpacing: "0.2rem",
            textTransform: "uppercase",
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
            fontSize: "1.6rem",
            fontWeight: 600,
            lineHeight: 1.5,
          }}
        >
          {t("blog.destinationsTitle")}
        </h2>

        {/* Category Filter Bar */}
        <div
          className="flex gap-4 mb-8 flex-wrap bg-background py-4 justify-center w-screen relative left-1/2 right-1/2 ml-0 mr-0"
          style={{
            position: "sticky",
            top: "72px",
            zIndex: 10,
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
          }}
        >
          {[
            { key: "All", label: "blog.filterAll" },
            { key: "Hills & Getaways", label: "blog.filterHills" },
            { key: "Spiritual Tours", label: "blog.filterSpiritual" },
            { key: "Beach Holidays", label: "blog.filterBeach" },
            { key: "Heritage Trails", label: "blog.filterHeritage" },
            { key: "Adventure Tours", label: "blog.filterAdventure" }
          ].map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`uppercase tracking-wide text-[1.6rem] leading-[2rem] font-normal px-4 py-2 rounded-[0.6rem] transition-all duration-300 ${
                selectedCategory === category.key
                  ? "bg-[rgba(254,44,85,0.15)] text-[#FE2C55]"
                  : "text-[hsl(var(--foreground))] hover:text-[#FE2C55]"
              }`}
            >
              {t(category.label)}
            </button>
          ))}
        </div>

        <div className="grid list-none gap-x-16 gap-y-24 py-8 text-left sm:grid-cols-2 lg:grid-cols-3">
          {allArticles
            .filter((article) => selectedCategory === "All" || article.tag === selectedCategory)
            .map((article, index) => (
              <div
                key={index}
                ref={(el) => (articlesRef.current[articles.length + opinions.length + index] = el)}
                className="blog-feed__item"
                style={{
                  animationDelay: `${(index % 3) * 150}ms`,
                }}
              >
                <ArticlePreview
                  title={t(article.titleKey)}
                  slug={article.slug}
                  image={article.image}
                  imageAlt={t(article.titleKey)}
                  category={article.tag}
                  categorySlug={article.tag.toLowerCase()}
                  teaser={t(article.descriptionKey)}
                />
              </div>
            ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Blog;
