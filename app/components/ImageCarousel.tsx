"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { EmblaCarouselType } from "embla-carousel";

import ImageCarouselDiv from "./ImageCarouselDiv";
import Button from "./Button";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const dotStyle =
  "w-2 h-2 bg-white rounded-[50%] inline-block opacity-35 shadow-md cursor-pointer";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false, delay: 3500 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div
        ref={emblaRef}
        className="relative overflow-hidden w-full rounded-2xl "
      >
        <div className="flex w-full">
          <ImageCarouselDiv
            image="/hero/slider-image-1.webp"
            linkText="View Quests"
            heading="Trade more. Earn mode."
            description="Earn daily rewards that scale with exchange volume."
          />
          <ImageCarouselDiv
            image="/hero/slider-image-2.webp"
            linkText="Lend SOL"
            heading="
Earn 8.02% APY on your SOL"
            description="Lend SOL to earn staking yield + lending yield, and use as collateral."
          />

          <ImageCarouselDiv
            image="/hero/slider-image-3.webp"
            linkText="Lend USD"
            heading="Get 5.36% APY on USD"
            description="Access boosted yields on your USD and use as collateral."
          />

          <ImageCarouselDiv
            image="/hero/slider-image-4.webp"
            linkText="Trade USDT"
            heading="Trade USDT"
            description="Convert to USD with 0 fees and start trading on Backpack!"
          />

          <ImageCarouselDiv
            image="/hero/slider-image-5.webp"
            linkText="Manage Referrals"
            heading="Refer and Earn"
            description="Refer a friend and earn a percentage of their trading fees."
          />

          <ImageCarouselDiv
            image="/hero/slider-image-6.webp"
            heading="Wire Transfers are Live"
            description="Deposit and withdraw USD with no fees."
          />
        </div>

        <Button
          icon={<ChevronLeft size={35} className="p-0 " />}
          type="button"
          onClick={scrollPrev}
          className="absolute left-0  -translate-y-[50%] top-[50%] opacity-60 hover:opacity-90 flex justify-end"
        />
        <Button
          icon={<ChevronRight size={35} />}
          type="button"
          onClick={scrollNext}
          className="absolute right-0  -translate-y-[50%] top-[50%] opacity-60 hover:opacity-90 "
        />

        <div className="absolute bottom-4 w-full">
          <ul className="flex gap-2  justify-center">
            {scrollSnaps.map((_, i) => (
              <li
                key={i}
                className={`${dotStyle} ${
                  selectedIndex === i ? "opacity-100" : null
                }`}
                onClick={() => onDotButtonClick(i)}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ImageCarousel;
