import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Выберите набор",
      description: "Подберите Bloom Box под ваш уровень опыта и предпочтения",
      icon: "ShoppingCart",
    },
    {
      step: "2",
      title: "Получите доставку",
      description:
        "Красивая коробка с семенами, инструментами и инструкцией придёт к вам домой",
      icon: "Package",
    },
    {
      step: "3",
      title: "Следуйте инструкции",
      description:
        "Пошаговое руководство поможет вырастить красивые цветы без ошибок",
      icon: "BookOpen",
    },
    {
      step: "4",
      title: "Наслаждайтесь результатом",
      description: "Через несколько недель ваш дом украсят прекрасные цветы",
      icon: "Flower2",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            Как это работает?
          </h2>
          <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
            Простой процесс от заказа до цветущего сада у вас дома
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-emerald-200 z-0"></div>
              )}

              <div className="relative z-10">
                <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <Icon
                    name={step.icon as any}
                    size={32}
                    className="text-white"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-emerald-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-emerald-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
