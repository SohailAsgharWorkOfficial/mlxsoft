// src/components/latestnews.tsx  (or LatestNewsSection.tsx)
import * as React from "react"
import type { FC } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../../../components/ui/Carousel"

import NewsImage1 from "../../../assets/images/news1.jpg"
import NewsImage2 from "../../../assets/images/news2.jpg"
import NewsImage3 from "../../../assets/images/news3.jpg"

type NewsItem = {
  id: number
  category: string
  title: string
  description: string
  date: string
  image: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    category: "UI/UX",
    title: "What Is User Experience (UX) Design? Everything You Need.",
    description:
      "The UX design process consists user research, wireframing and prototyping, and user testing. Let’s imagine...",
    date: "August 19, 2022",
    image: NewsImage1,
  },
  {
    id: 2,
    category: "Creative Agency",
    title: "How to Create a Useful & Excellent Optimized Section",
    description:
      "Let’s imagine an e-commerce startup we’ll call it Beautify. Beautify creates their own all-natural cosmetics and...",
    date: "August 19, 2022",
    image: NewsImage2,
  },
  {
    id: 3,
    category: "UI/UX",
    title: "What Is User Experience (UX) Design? Everything You Need.",
    description:
      "From research to high-fidelity interfaces, we’ll walk through the essential steps to craft delightful digital products.",
    date: "August 19, 2022",
    image: NewsImage3,
  },
]

const LatestNewsSection: FC = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined)
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="w-full bg-white py-20 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-block bg-[#F4DA68] text-[#1E1E1E] font-faroLucky font-semibold px-4 py-2 rounded-full text-xs md:text-sm">
            MARVELLEX
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center font-faroSad font-extrabold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] mb-16 md:mb-20">
          Leatest News Feeds
        </h2>

        {/* Carousel Container - exact width 1324px */}
        <div className="flex justify-center">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full "
            style={{ maxWidth: "1324px" }}
          >
            {/* Content with 244px gap between images, 274px gap between text */}
            <CarouselContent className="gap-[122px]">
              {newsItems.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-full md:basis-[calc(50%-61px)] shrink-0"
                >
                  {/* Card Container - image as background with overlay text box */}
                  <div className="relative w-[428px] h-70">
                    {/* Background image fills the container */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover "
                      loading="lazy"
                    />

                    {/* Desktop overlay: absolute positioned text box over the image */}
                    <article
                      className="hidden md:block rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                      style={{
                        background: '#F6FFFC',
                        width: '350px',
                        height: '277px',
                        top: '50px',
                        left: '252px',
                        position: 'absolute',
                        padding: '20px',
                        boxSizing: 'border-box',
                       
                      }}
                    >
                      {/* Category Tag */}
                      <p className="text-[10px] font-faroLucky font-semibold text-[#067a58] uppercase tracking-[0.08em] mb-2">
                        {item.category}
                      </p>

                      {/* Title */}
                      <h3 className="font-faroSad font-extrabold text-[16px] leading-[1.35] text-[#1E1E1E] mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[12px] text-[#666666] font-faroLucky leading-[1.6] mb-4 ">
                        {item.description}
                      </p>

                      {/* Date */}
                    <div className="flex items-center gap-2 text-[12px] text-[#999999] font-faroLucky">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{item.date}</span>
                      </div>
                  </article>

                  {/* Mobile overlay: visible under the image on small screens */}
                  <article
                    className="md:hidden bg-brand-surface rounded-lg px-6 py-6 mt-4"
                    style={{ width: '100%', height: 'auto' }}
                  >
                    <p className="text-[11px] font-faroLucky font-semibold text-[#067a58] uppercase tracking-[0.08em] mb-2">
                      {item.category}
                    </p>

                    <h3 className="font-faroSad font-extrabold text-[18px] leading-[1.35] text-[#1E1E1E] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-[13px] text-[#666666] font-faroLucky leading-[1.6] mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 text-[12px] text-[#999999] font-faroLucky">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>{item.date}</span>
                    </div>
                  </article>
                </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Pagination Dots */}
        <div className="mt-12 md:mt-16 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => {
            const isActive = index === current
            return (
              <button
                key={index}
                type="button"
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-8 h-2.5 bg-[#067a58]"
                    : "w-2.5 h-2.5 bg-[#D0D0D0]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LatestNewsSection
