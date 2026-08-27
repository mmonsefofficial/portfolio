import { Hero } from "../components/home/Hero";
import { SelectedWork } from "../components/home/SelectedWork";
import { Activity } from "../components/home/Activity";
import { Currently } from "../components/home/Currently";
import { AboutPreview } from "../components/home/AboutPreview";

export function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Activity />
      <Currently />
      <AboutPreview />
    </>
  );
}