import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-emerald-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Готовы начать выращивать?
            </h2>
            <p className="text-emerald-100 text-xl mb-8">
              Оставьте заявку на бесплатную консультацию, и наш эксперт поможет
              выбрать идеальный набор для вас
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-emerald-100">
                <Icon name="Phone" size={20} className="mr-3" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center text-emerald-100">
                <Icon name="Mail" size={20} className="mr-3" />
                <span>info@bloombox.ru</span>
              </div>
              <div className="flex items-center text-emerald-100">
                <Icon name="MapPin" size={20} className="mr-3" />
                <span>Доставка по всей России</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-colors">
                Заказать звонок
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">
              Заявка на консультацию
            </h3>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-4 border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full p-4 border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <select className="w-full p-4 border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-500">
                  <option>Выберите интересующий набор</option>
                  <option>Starter Box - 2 990 ₽</option>
                  <option>Garden Box - 4 990 ₽</option>
                  <option>Master Box - 7 990 ₽</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Дополнительные вопросы"
                  rows={4}
                  className="w-full p-4 border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Icon name="Send" size={20} />
                <span>Отправить заявку</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-emerald-800 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <Icon name="Flower" size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">Bloom Box</span>
          </div>
          <p className="text-emerald-100">
            © 2024 Bloom Box. Все права защищены.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
