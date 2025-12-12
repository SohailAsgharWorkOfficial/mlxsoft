"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"


function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}


type UseEmblaCarouselReturn = ReturnType<typeof useEmblaCarousel>
export type CarouselApi = UseEmblaCarouselReturn[1]

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: Parameters<typeof useEmblaCarousel>[0]
  plugins?: Parameters<typeof useEmblaCarousel>[1]
  setApi?: (api: CarouselApi | undefined) => void
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, opts, plugins, setApi, children, ...props }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(opts, plugins)

    React.useEffect(() => {
      if (setApi) setApi(emblaApi)
    }, [emblaApi, setApi])

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div className="overflow-hidden" ref={emblaRef}>
          {children}
        </div>
      </div>
    )
  }
)
Carousel.displayName = "Carousel"

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex touch-pan-y -ml-4", className)}
    {...props}
  />
))
CarouselContent.displayName = "CarouselContent"

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("min-w-0 shrink-0 grow-0 pl-4", className)}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={cn(
      "absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow hover:bg-white",
      className
    )}
    {...props}
  >
    ‹
  </button>
))
CarouselPrevious.displayName = "CarouselPrevious"

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={cn(
      "absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow hover:bg-white",
      className
    )}
    {...props}
  >
    ›
  </button>
))
CarouselNext.displayName = "CarouselNext"
