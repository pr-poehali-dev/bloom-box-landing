import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-green-100 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
              <Icon name="Flower" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-emerald-800">
              Bloom Box
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#product"
              className="text-emerald-700 hover:text-emerald-600 transition-colors"
            >
              Товары
            </a>
            <a
              href="#benefits"
              className="text-emerald-700 hover:text-emerald-600 transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#reviews"
              className="text-emerald-700 hover:text-emerald-600 transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#contact"
              className="text-emerald-700 hover:text-emerald-600 transition-colors"
            >
              Контакты
            </a>
          </nav>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-emerald-900 leading-tight">
              Вырастите свой
              <span className="text-emerald-600"> домашний сад</span>
            </h1>

            <p className="text-xl text-emerald-700 leading-relaxed">
              Полные наборы для выращивания цветов дома. Семена, инструменты,
              подробные инструкции — всё в одной красивой коробке.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2">
                <Icon name="ShoppingCart" size={20} />
                <span>Заказать сейчас</span>
              </button>

              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-colors">
                Узнать больше
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-800">1000+</div>
                <div className="text-emerald-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-800">95%</div>
                <div className="text-emerald-600">Всхожесть семян</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
                alt="Домашние цветы"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-emerald-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
