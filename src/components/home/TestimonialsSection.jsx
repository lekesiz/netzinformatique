import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const TestimonialsSection = () => {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language

  return (
    <section className="py-20 gradient-purple text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.testimonialsTitle', 'Ils Nous Font')} <span className="text-accent">{t('home.testimonialsTitleHighlight', 'Confiance')}</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {t('home.testimonialsDescription', 'Découvrez les témoignages de nos clients satisfaits')}
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active bg-accent',
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                
                <Quote size={40} className="text-accent/50 mb-4" />
                
                <p className="text-white/90 mb-6 leading-relaxed min-h-[120px]">
                  "{testimonial.text[currentLang] || testimonial.text.fr}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/70">
                      {testimonial.role[currentLang] || testimonial.role.fr}
                    </div>
                    <div className="text-xs text-white/60">
                      {testimonial.company} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx>{`
          :global(.swiper-button-next),
          :global(.swiper-button-prev) {
            color: white;
          }
          :global(.swiper-pagination-bullet) {
            background: white;
            opacity: 0.5;
          }
          :global(.swiper-pagination-bullet-active) {
            opacity: 1;
            background: #10B981 !important;
          }
        `}</style>
      </div>
    </section>
  )
}

export default TestimonialsSection
