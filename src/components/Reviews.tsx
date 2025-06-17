import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Потрясающий набор! Даже я, у которой никогда не росли цветы, смогла вырастить красивые петунии. Инструкция очень подробная.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b12ccc5e",
    },
    {
      name: "Михаил Соколов",
      rating: 5,
      text: "Заказал Garden Box для жены на день рождения. Теперь весь подоконник в цветах! Отличное качество семян и упаковки.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    {
      name: "Елена Васильева",
      rating: 5,
      text: "Уже третий раз заказываю разные наборы. Всхожесть семян действительно высокая, цветы получаются как на картинке!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-emerald-700">
            Узнайте, что говорят о нас те, кто уже выращивает цветы с Bloom Box
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-emerald-900">{review.name}</h4>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-emerald-700 italic">"{review.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-900">4.9</div>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <div className="text-emerald-700">Средняя оценка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-900">500+</div>
                <div className="text-emerald-700">Отзывов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
