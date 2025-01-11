import { Computer } from "@/components/Computer";
import { Lamp } from "@/components/Lamp";
import { Phone } from "@/components/Phone";

export default function Home() {
  return (
    <div className="flex gap-4 justify-center items-center min-h-screen font-[family-name:var(--font-geist-sans)] px-2">
      <Lamp />
      <div className="w-[52.9rem]">
        <Computer />
      </div>
      <div className="w-64 xl:block hidden">
        <Phone />
      </div>
    </div>
  );
}
