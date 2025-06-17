import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Leaf",
      title: "100% Натуральные семена",
      description:
        "Только проверенные семена с высокой всхожестью от лучших поставщиков",
    },
    {
      icon: "BookOpen",
      title: "Подробные инструкции",
      description:
        "Пошаговые руководства с фотографиями для каждого этапа выращивания",
    },
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description:
        "Доставляем по всей России за 2-5 дней в экологичной упаковке",
    },
    {
      icon: "HeadphonesIcon",
      title: "Поддержка 24/7",
      description:
        "Наши эксперты всегда готовы помочь с любыми вопросами по выращиванию",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            Почему выбирают Bloom Box?
          </h2>
          <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
            Мы делаем выращивание цветов простым и увлекательным процессом для
            каждого
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon
                  name={benefit.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-emerald-700">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-900">🏆</div>
                <div className="text-sm text-emerald-700 mt-2">
                  Сертификат качества
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-900">🌱</div>
                <div className="text-sm text-emerald-700 mt-2">
                  Eco-friendly
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-900">✅</div>
                <div className="text-sm text-emerald-700 mt-2">
                  Гарантия всхожести
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
