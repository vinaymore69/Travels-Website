import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import FontProvider from "../components/FontProvider";

/* ─────────────────────────────────────────────────────────────────────────
   DESIGN TOKENS — extracted directly from Blog.jsx & About.jsx
   • Section headings: uppercase, letterSpacing 0.2rem, borderBottom rule
   • Accent: #FE2C55 | tint bg: rgba(254,44,85,0.13)
   • Filter pills: rounded-[0.6rem], uppercase tracking-wide
   • Transitions: cubic-bezier(0.45,0,0.55,1) and (0.22,1,0.36,1)
   • Rounded corners on cards: 0.6rem (matching ArticlePreview)
─────────────────────────────────────────────────────────────────────────── */
const T = {
  bg: "#ffffff",
  text: "#1a1a1a",
  textMuted: "rgba(26,26,26,0.42)",
  accent: "#FE2C55",
  accentBg: "rgba(254,44,85,0.13)",
  border: "rgba(0,0,0,0.13)",
};

/* ─── Categories ─────────────────────────────────────────────────────── */
const CATS = [
  { key: "All",       label: "All" },
  { key: "Hills",     label: "Hills" },
  { key: "Beaches",   label: "Beaches" },
  { key: "Heritage",  label: "Heritage" },
  { key: "Adventure", label: "Adventure" },
  { key: "Spiritual", label: "Spiritual" },
];

/* ─── Gallery Items ──────────────────────────────────────────────────── */
/*
  ratio: "landscape" | "portrait" | "square"
  CSS-columns + break-inside:avoid lets every ratio coexist
  inside the same masonry flow without any layout breakage.
*/
const ITEMS = [
  { id:1,  cat:"Hills",      title:"Misty Morning at Lonavala",      loc:"Maharashtra",    ratio:"landscape", g:"linear-gradient(135deg,#3d6b52,#7a9f8a)" },
  { id:2,  cat:"Beaches",    title:"Golden Hour in Goa",            loc:"Goa",            ratio:"portrait",  g:"linear-gradient(145deg,#b06a2a,#e8a96c)" },
  { id:3,  cat:"Heritage",   title:"Ajanta Caves at Dawn",          loc:"Aurangabad",     ratio:"square",    g:"linear-gradient(120deg,#6b4f35,#a8875e)" },
  { id:4,  cat:"Adventure",  title:"Rajmachi Peak Summit",          loc:"Sahyadri Range", ratio:"portrait",  g:"linear-gradient(150deg,#345230,#6b8e5a)" },
  { id:5,  cat:"Spiritual",  title:"Shirdi Temple Complex",         loc:"Shirdi",         ratio:"landscape", g:"linear-gradient(110deg,#a68332,#d9c06a)" },
  { id:6,  cat:"Hills",      title:"Mahabaleshwar Viewpoint",       loc:"Western Ghats",  ratio:"square",    g:"linear-gradient(135deg,#405a43,#7a9e7f)" },
  { id:7,  cat:"Beaches",    title:"Tarkarli Underwater World",     loc:"Sindhudurg",     ratio:"landscape", g:"linear-gradient(130deg,#275f7a,#5aaccc)" },
  { id:8,  cat:"Heritage",   title:"Raigad Fort at Sunset",         loc:"Raigad",         ratio:"portrait",  g:"linear-gradient(140deg,#7a4228,#bf7d55)" },
  { id:9,  cat:"Adventure",  title:"Kalsubai Trek Trail",           loc:"Nashik",         ratio:"landscape", g:"linear-gradient(125deg,#335040,#6b9360)" },
  { id:10, cat:"Spiritual",  title:"Trimbakeshwar Yatra",           loc:"Nashik",         ratio:"square",    g:"linear-gradient(115deg,#8f6e3a,#d4aa72)" },
  { id:11, cat:"Hills",      title:"Bhandardara Lake View",         loc:"Nashik",         ratio:"portrait",  g:"linear-gradient(145deg,#36594c,#6fa38a)" },
  { id:12, cat:"Beaches",    title:"Konkan Coastal Drive",          loc:"Konkan Coast",   ratio:"square",    g:"linear-gradient(130deg,#2f5a6b,#5f9aaf)" },
  { id:13, cat:"Heritage",   title:"Kolhapur Mahakaleshwar",        loc:"Kolhapur",       ratio:"landscape", g:"linear-gradient(120deg,#5c4225,#9e7d4f)" },
  { id:14, cat:"Adventure",  title:"Harishchandragad Fortress",     loc:"Ahmednagar",     ratio:"portrait",  g:"linear-gradient(140deg,#3f5038,#7d9468)" },
  { id:15, cat:"Spiritual",  title:"Pandharpur Wari Yatra",         loc:"Sangli",         ratio:"landscape", g:"linear-gradient(110deg,#956b2f,#d9b56a)" },
  { id:16, cat:"Hills",      title:"Matheran Hill Station",         loc:"Raigad",         ratio:"landscape", g:"linear-gradient(135deg,#435c3e,#819d7a)" },
];

const RATIO_CSS = { landscape: "16 / 10", portrait: "3 / 4", square: "1 / 1" };

/* ─── Card ───────────────────────────────────────────────────────────── */
function Card({ item }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        aspectRatio: RATIO_CSS[item.ratio],
        position: "relative",
        overflow: "hidden",
        borderRadius: "0.55rem",
        cursor: "pointer",
      }}
    >
      {/* Gradient background — zooms on hover */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: item.g,
          transform: hov ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {/* Dark bottom overlay — fades in on hover */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.06) 48%, transparent 100%)",
          opacity: hov ? 1 : 0,
          transition: "opacity 0.38s cubic-bezier(0.45,0,0.55,1)",
        }}
      />

      {/* Text overlay — slides up on hover */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.3rem 1.2rem",
          zIndex: 2,
          transform: hov ? "translateY(0)" : "translateY(10px)",
          opacity: hov ? 1 : 0,
          transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1), opacity 0.34s cubic-bezier(0.45,0,0.55,1)",
        }}
      >
        <div style={{ color: "#fff", fontWeight: 600, fontSize: "clamp(1rem,2.1vw,1.35rem)", lineHeight: 1.3 }}>
          {item.title}
        </div>
        <div style={{ color: "rgba(255,255,255,0.66)", fontSize: "clamp(0.78rem,1.2vw,0.9rem)", marginTop: "0.22rem" }}>
          {item.loc}
        </div>
      </div>
    </div>
  );
}

/* ─── Responsive Masonry ─────────────────────────────────────────────── */
function Masonry({ items }) {
  const [cols, setCols] = useState(3);

  useEffect(() => {
    const upd = () => setCols(window.innerWidth < 560 ? 1 : window.innerWidth < 900 ? 2 : 3);
    upd();
    window.addEventListener("resize", upd);
    return () => window.removeEventListener("resize", upd);
  }, []);

  return (
    <div style={{ columnCount: cols, columnGap: "1.1rem" }}>
      {items.map(item => (
        <div key={item.id} style={{ breakInside: "avoid", marginBottom: "1.1rem" }}>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
}

/* ─── Load More Button ───────────────────────────────────────────────── */
function LoadMore({ onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "2.8rem" }}>
      <button
        onClick={onClick}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          fontSize: "0.82rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 600,
          padding: "0.72rem 2rem",
          borderRadius: "2rem",
          border: `1.5px solid ${T.accent}`,
          backgroundColor: hov ? T.accent : "transparent",
          color: hov ? "#fff" : T.accent,
          cursor: "pointer",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        Load More
      </button>
    </div>
  );
}

/* ─── Gallery Page ───────────────────────────────────────────────────── */
export default function Gallery() {
  const [sel, setSel] = useState("All");
  const [count, setCount] = useState(9);

  useEffect(() => { setCount(9); }, [sel]);

  const filtered = sel === "All" ? ITEMS : ITEMS.filter(i => i.cat === sel);
  const visible  = filtered.slice(0, count);
  const hasMore  = count < filtered.length;

  return (
    <ThemeProvider>
      <FontProvider>
        <div className="min-h-screen bg-background text-foreground font-sans">
          <Header />

          {/* ── Title — uppercase heading + muted subtitle (mirrors Blog heading rhythm) */}
          <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mt-[4.5rem] xl:mt-[6rem]">
            <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-semibold tracking-[-0.01em] leading-[1.2] md:leading-[1] text-center text-black dark:text-white">
              Our Gallery
            </h1>
            <p className="text-[1.3rem] text-foreground opacity-60 mt-2 text-center max-w-[40rem] mx-auto">
              Captured moments from unforgettable journeys across India
            </p>
          </div>

          {/* ── Sticky filter bar — same pill style as Blog category filters */}
          <div className="flex gap-4 mb-8 flex-wrap bg-background py-4 justify-center w-screen sticky top-[72px] z-10 left-1/2 right-1/2 ml-0 mr-0" style={{marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)"}}>
            {CATS.map(c => {
              const active = sel === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setSel(c.key)}
                  className={`uppercase tracking-wide text-[1.6rem] leading-[2rem] font-normal px-4 py-2 rounded-[0.6rem] transition-all duration-300 ${active ? "bg-[rgba(254,44,85,0.15)] text-[#FE2C55]" : "text-foreground hover:text-[#FE2C55]"}`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Thin rule — same as Blog.jsx section dividers */}
          <div className="max-w-[68rem] mx-auto mb-[1.8rem] h-[1px] bg-[rgba(0,0,0,0.13)]" />

          {/* ── Masonry Grid ── */}
          <div className="max-w-[68rem] mx-auto px-[1.1rem]">
            <Masonry items={visible} />
          </div>

          {/* ── Load More ── */}
          {hasMore && <LoadMore onClick={() => setCount(c => c + 6)} />}

          <div style={{ height: "3.5rem" }} />
          <Footer />
        </div>
      </FontProvider>
    </ThemeProvider>
  );
}