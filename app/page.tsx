"use client";

import CardsSlider from "@/components/CardsSlider";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Modernity from "@/components/Modernity";
import Question from "@/components/Question";
import Slider from "@/components/Slider";
import SliderHero from "@/components/SliderHero";
import Solutions from "@/components/Solutions";
import { useLenis } from "@/hooks/useLenis";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  useLenis();

  return (
    <div className="relative bg-[#f8f2eb]">
      {/* <Hero />
        <Question />
        <Solutions />

        <MapComponent />
        <Slider text="GET IN TOUCH" /> */}
      <CardsSlider />
      <SliderHero />
      <Modernity />
      <Form />
    </div>
  );
}
