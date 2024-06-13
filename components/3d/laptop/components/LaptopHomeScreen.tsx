import { MouseEventHandler, useState } from "react";
import {
  LaptopNav,
  LaptopHero,
  LaptopTopBar,
} from "@components/3d/laptop/components";

export default function HomeScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <LaptopTopBar isOpen={isOpen} toggle={toggle} />
      <LaptopNav toggle={toggle} />
      <LaptopHero />
    </div>
  );
}
