"use client"

import Hero from "@/components/Hero";
import Question from "@/components/Question";
import Slider from "@/components/Slider";
import Solutions from "@/components/Solutions";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative">
      <Hero />
        <Question />
        <Solutions />

        <MapComponent />
        <Slider text="GET IN TOUCH" />
    </div>
  );
}
