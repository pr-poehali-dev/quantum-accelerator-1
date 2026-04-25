const cars = [
  {
    name: "Эконом",
    desc: "Hyundai Solaris, Kia Rio",
    price: "от 149 ₽",
    emoji: "🚕",
  },
  {
    name: "Комфорт",
    desc: "Toyota Camry, Skoda Octavia",
    price: "от 249 ₽",
    emoji: "🚗",
  },
  {
    name: "Бизнес",
    desc: "Mercedes E-Class, BMW 5",
    price: "от 499 ₽",
    emoji: "🖤",
  },
];

export default function Featured() {
  return (
    <div id="fleet" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/b45585d6-d5ca-4ffd-9da3-76a6b3051ea6/files/3264fd55-13d6-4e13-a376-5a1b64e07ecd.jpg"
          alt="Автопарк такси"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Наш автопарк</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Более 200 автомобилей для любой поездки — от эконома до премиума. Все авто проходят техосмотр каждые 3 месяца.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          {cars.map((car) => (
            <div key={car.name} className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{car.emoji}</span>
                <div>
                  <p className="font-semibold text-neutral-900">{car.name}</p>
                  <p className="text-sm text-neutral-500">{car.desc}</p>
                </div>
              </div>
              <span className="font-bold text-neutral-900">{car.price}</span>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Заказать поездку
        </button>
      </div>
    </div>
  );
}
