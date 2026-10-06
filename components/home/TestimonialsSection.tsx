"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  { name: "Ricardo S.", role: "Vendeu Honda Civic 2019", videoId: "dQw4w9WgXcQ", bg: "from-[#194D67] to-[#06709C]" },
  { name: "Fernanda M.", role: "Vendeu Toyota Corolla 2021", videoId: "dQw4w9WgXcQ", bg: "from-[#0C3144] to-[#06709C]" },
  { name: "Carlos A.", role: "Vendeu Jeep Compass 2020", videoId: "dQw4w9WgXcQ", bg: "from-[#194D67] to-[#0F3A50]" },
  { name: "Ana P.", role: "Vendeu Volkswagen T-Cross 2022", videoId: "dQw4w9WgXcQ", bg: "from-[#0F3A50] to-[#194D67]" },
  { name: "Paulo R.", role: "Vendeu Ford EcoSport 2018", videoId: "dQw4w9WgXcQ", bg: "from-[#06709C] to-[#0C3144]" },
  { name: "Juliana C.", role: "Vendeu Hyundai Creta 2020", videoId: "dQw4w9WgXcQ", bg: "from-[#194D67] to-[#06709C]" },
  { name: "Marcos L.", role: "Vendeu Chevrolet Tracker 2021", videoId: "dQw4w9WgXcQ", bg: "from-[#0C3144] to-[#194D67]" },
  { name: "Sandra O.", role: "Vendeu Renault Kwid 2022", videoId: "dQw4w9WgXcQ", bg: "from-[#0F3A50] to-[#06709C]" },
];

function PlayIcon() {
  return (
    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#06709C">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section
      id="depoimentos"
      className="py-20 overflow-hidden"
      style={{ background: "linear-gradient(300deg, #06709C 0%, #194D67 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <span className="eyebrow text-white text-center block mb-3 font-sora">Clientes reais</span>
        <h2 className="font-sora font-semibold text-3xl md:text-4xl text-white text-center mb-12">
          O que nossos clientes dizem
        </h2>

        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={20}
          grabCursor
          loop
          pagination={{ clickable: true }}
          breakpoints={{
            0:    { slidesPerView: 1.2 },
            600:  { slidesPerView: 2.2 },
            900:  { slidesPerView: 3.2 },
            1200: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div
                className={`group relative rounded-[10px] overflow-hidden cursor-pointer aspect-[9/16] max-h-80 bg-gradient-to-br ${t.bg} flex items-end`}
                onClick={() => setActiveVideo(t.videoId)}
                role="button"
                aria-label={`Assistir depoimento de ${t.name}`}
              >
                {/* Play icon centred */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayIcon />
                </div>
                {/* Info overlay */}
                <div className="relative z-10 w-full p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-sora font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-white/75 text-xs">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/85 z-[10000] flex items-center justify-center p-6"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Depoimento em vídeo"
        >
          <div
            className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-3xl leading-none"
              onClick={() => setActiveVideo(null)}
              aria-label="Fechar vídeo"
            >
              ✕
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="Depoimento 41 Repasse"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}
    </section>
  );
}
