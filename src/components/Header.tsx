interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide font-bold">ТАКСИ</div>
        <nav className="flex gap-8">
          <a
            href="#fleet"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Автопарк
          </a>
          <a
            href="#contacts"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Контакты
          </a>
          <a
            href="#jobs"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Вакансии
          </a>
        </nav>
      </div>
    </header>
  );
}