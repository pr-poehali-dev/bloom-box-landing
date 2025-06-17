import Icon from "@/components/ui/icon";

const Product = () => {
  return (
    <section id="product" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            Наши Bloom Box наборы
          </h2>
          <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
            Каждый набор содержит всё необходимое для успешного выращивания
            красивых цветов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-emerald-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Sprout" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">
              Starter Box
            </h3>
            <p className="text-emerald-700 mb-6">
              Идеальный набор для начинающих садоводов
            </p>
            <ul className="text-left space-y-2 mb-8">
              <li className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-emerald-600 mr-2"
                />
                <span>5 видов семян цветов</span>
              </li>
              <li className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-emerald-600 mr-2"
                />
                <span>Торфяные горшочки</span>
              </li>
              <li className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-emerald-600 mr-2"
                />
                <span>Универсальный грунт</span>
              </li>
              <li className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-emerald-600 mr-2"
                />
                <span>Подробная инструкция</span>
              </li>
            </ul>
            <div className="text-3xl font-bold text-emerald-900 mb-4">
              2 990 ₽
            </div>
            <button className="w-full bg-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors">
              Заказать
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-100 to-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border-2 border-emerald-200">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="TreePine" size={32} className="text-white" />
            </div>
            <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              Популярный
            </div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">
              Garden Box
            </h3>
            <p className="text-emerald-700 mb-6">
              Расширенный набор для красивого сада
            </p>
            <ul className="text-left space-y-2 mb-8">
              <li className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-emerald-600 mr-2"
                />
                <span>10 видов семян цветов</span>
              </li>
              <li className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-emerald-600 mr-2"
                />
                <span>Керамические горшки</span>
              </li>
              <li className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-emerald-600 mr-2"
                />
                <span>Premium грунт</span>
              </li>
              <li className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-emerald-600 mr-2"
                />
                <span>Удобрения и подкормки</span>
              </li>
              <li className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-emerald-600 mr-2"
                />
                <span>Садовые инструменты</span>
              </li>
            </ul>
            <div className="text-3xl font-bold text-emerald-900 mb-4">
              4 990 ₽
            </div>
            <button className="w-full bg-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors">
              Заказать
            </button>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Crown" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">
              Master Box
            </h3>
            <p className="text-emerald-700 mb-6">
              Профессиональный набор для опытных садоводов
            </p>
            <ul className="text-left space-y-2 mb-8">
              <li className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-emerald-600 mr-2"
                />
                <span>20 видов редких семян</span>
              </li>
              <li className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-emerald-600 mr-2"
                />
                <span>Дизайнерские кашпо</span>
              </li>
              <li className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-emerald-600 mr-2"
                />
                <span>Органический грунт</span>
              </li>
              <li className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-emerald-600 mr-2"
                />
                <span>Полный набор инструментов</span>
              </li>
              <li className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-emerald-600 mr-2"
                />
                <span>Система полива</span>
              </li>
            </ul>
            <div className="text-3xl font-bold text-emerald-900 mb-4">
              7 990 ₽
            </div>
            <button className="w-full bg-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors">
              Заказать
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
