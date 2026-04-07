"use client";

import { motion } from "framer-motion";

const onomatopoeia = [
  { text: "ドドド", top: "8%", left: "2%", rotate: -15, color: "var(--cp-red)", size: "1.6rem" },
  { text: "ゴゴゴ", bottom: "12%", right: "3%", rotate: 12, color: "var(--cp-border)", size: "1.4rem" },
  { text: "ビリビリ", top: "55%", left: "1%", rotate: -8, color: "var(--cp-blue)", size: "1.1rem" },
  { text: "ズキュン", top: "20%", right: "2%", rotate: 10, color: "var(--cp-yellow)", size: "1.2rem" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 px-5 sm:px-8"
      style={{
        backgroundColor: "var(--cp-surface)",
        borderTop: "4px solid var(--cp-border)",
        borderBottom: "4px solid var(--cp-border)",
      }}
    >
      {/* Background halftone */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(26,26,26,0.05) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Onomatopoeia decorations */}
      {onomatopoeia.map((o, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none font-black select-none"
          style={{
            top: o.top,
            left: (o as { left?: string }).left,
            right: (o as { right?: string }).right,
            bottom: (o as { bottom?: string }).bottom,
            rotate: `${o.rotate}deg`,
            color: o.color,
            fontSize: o.size,
            WebkitTextStroke: "1px var(--cp-border)",
            opacity: 0.4,
            letterSpacing: "0.05em",
            writingMode: "vertical-rl",
          }}
          animate={{ opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {o.text}
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          className="mb-12 flex items-center gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="px-4 py-2"
            style={{
              backgroundColor: "var(--cp-blue)",
              border: "3px solid var(--cp-border)",
              boxShadow: "4px 4px 0 var(--cp-border)",
            }}
          >
            <span className="text-xs font-black uppercase tracking-widest text-white">
              Chapter 01
            </span>
          </div>
          <h2
            className="text-3xl font-black uppercase md:text-4xl"
            style={{
              color: "var(--cp-text)",
              WebkitTextStroke: "1px var(--cp-border)",
              textShadow: "3px 3px 0 rgba(26,26,26,0.12)",
            }}
          >
            ABOUT
          </h2>
          <div
            className="flex-1 h-[3px]"
            style={{ backgroundColor: "var(--cp-border)" }}
          />
        </motion.div>

        <div className="mx-auto max-w-xl">
          {/* Profile panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile image */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div
                  className="w-36 h-36 rounded-full overflow-hidden flex items-center justify-center"
                  style={{
                    border: "4px solid var(--cp-border)",
                    boxShadow: "6px 6px 0 var(--cp-border)",
                    background: "linear-gradient(135deg, #FFC107 0%, #E63946 100%)",
                  }}
                >
                  <span className="text-6xl" role="img" aria-label="作者">
                    🎨
                  </span>
                </div>
                {/* Status badge */}
                <div
                  className="absolute -bottom-2 -right-2 px-3 py-1 text-xs font-black text-white"
                  style={{
                    backgroundColor: "var(--cp-red)",
                    border: "2px solid var(--cp-border)",
                    borderRadius: "2px",
                    boxShadow: "2px 2px 0 var(--cp-border)",
                    transform: "rotate(3deg)",
                  }}
                >
                  Creator
                </div>
              </div>
            </div>

            {/* Bio — speech bubble */}
            <div className="relative">
              {/* Speech bubble pointer */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "14px solid transparent",
                  borderRight: "14px solid transparent",
                  borderBottom: "16px solid var(--cp-border)",
                }}
              />
              <div
                className="absolute -top-[13px] left-1/2 -translate-x-1/2"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "12px solid transparent",
                  borderRight: "12px solid transparent",
                  borderBottom: "14px solid var(--cp-surface)",
                  zIndex: 1,
                }}
              />
              {/* Speech bubble body */}
              <div
                className="relative px-6 py-5"
                style={{
                  backgroundColor: "var(--cp-surface)",
                  border: "3px solid var(--cp-border)",
                  borderRadius: "8px",
                  boxShadow: "5px 5px 0 var(--cp-border)",
                }}
              >
                <p
                  className="text-sm font-bold leading-relaxed"
                  style={{ color: "var(--cp-text)" }}
                >
                  漫画とイラストを描いています。AI画像生成を使って、新しい表現を探求中。
                </p>

                {/* Motto quote */}
                <div
                  className="mt-4 px-4 py-3"
                  style={{
                    borderLeft: "4px solid var(--cp-yellow)",
                    backgroundColor: "#f8f8f0",
                  }}
                >
                  <p
                    className="text-sm font-black italic"
                    style={{ color: "var(--cp-text-muted)" }}
                  >
                    &ldquo;描きたいものを、描きたいように&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
