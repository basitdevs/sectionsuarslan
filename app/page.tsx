import Hero from "@/components/Hero";
import MapComponent  from "@/components/Map";
import Question from "@/components/Question";
import Slider from "@/components/Slider";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Question />
      <Solutions />

      <MapComponent  />
      <Slider text="GET IN TOUCH" />
    </div>
  );
}
