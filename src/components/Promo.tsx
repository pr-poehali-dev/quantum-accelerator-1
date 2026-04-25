import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      id="contacts"
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/b45585d6-d5ca-4ffd-9da3-76a6b3051ea6/files/4da9f107-0e5a-4e8c-a0be-b62694425062.jpg"
            alt="Водитель такси"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg">
        Контакты
      </h3>

      <div className="absolute bottom-12 right-6 z-10 text-right">
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg z-10 mb-6">
          Работаем круглосуточно, без выходных. Свяжитесь с нами любым удобным способом.
        </p>
        <div className="flex flex-col gap-2 text-white/80 text-sm sm:text-base">
          <a href="tel:88000000000" className="hover:text-white transition-colors">📞 8 (800) 000-00-00 (бесплатно)</a>
          <a href="mailto:info@taxi.ru" className="hover:text-white transition-colors">✉️ info@taxi.ru</a>
          <p>📍 г. Москва, ул. Таксомоторная, 1</p>
        </div>
      </div>
    </div>
  );
}
