interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <a href="#">
          <img
            src="https://cdn.poehali.dev/projects/b45585d6-d5ca-4ffd-9da3-76a6b3051ea6/bucket/d0a8c286-ca75-4183-b15a-316bb19b2ebf.png"
            alt="Такси Ракета"
            className="h-16 w-auto"
            style={{ mixBlendMode: "screen" }}
          />
        </a>
        <nav className="flex gap-8">
          <a href="#fleet" className="text-white hover:text-[#38BDF8] transition-colors duration-300 uppercase text-sm">
            Автопарк
          </a>
          <a href="#contacts" className="text-white hover:text-[#38BDF8] transition-colors duration-300 uppercase text-sm">
            Контакты
          </a>
          <a href="#jobs" className="text-white hover:text-[#38BDF8] transition-colors duration-300 uppercase text-sm">
            Вакансии
          </a>
        </nav>
      </div>
    </header>
  );
}