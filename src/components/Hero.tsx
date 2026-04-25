import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Icon from "@/components/ui/icon";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/b45585d6-d5ca-4ffd-9da3-76a6b3051ea6/files/cc261d70-c7f6-4c5a-978d-3547774bed44.jpg"
          alt="Такси на ночном городе"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          ПОЕХАЛИ
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90 mb-10">
          Быстрое и комфортное такси по городу. Закажите поездку прямо сейчас.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Откуда"
            className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 outline-none focus:border-white transition-colors"
          />
          <input
            type="text"
            placeholder="Куда"
            className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 outline-none focus:border-white transition-colors"
          />
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#38BDF8] text-white px-6 py-3 font-bold uppercase tracking-wide hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap">
            <Icon name="Car" size={18} />
            Заказать
          </button>
        </div>

        <p className="mt-6 text-white/60 text-sm flex items-center justify-center gap-2">
          <Icon name="Phone" size={14} />
          Или позвоните: <span className="text-white font-semibold">8 (800) 000-00-00</span>
        </p>
      </div>
    </div>
  );
}