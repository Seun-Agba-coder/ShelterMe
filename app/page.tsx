import { Hero } from "@/components/page/hero";
import { Features } from "@/components/page/features";
import { HowItWorks } from "@/components/page/how-it-works";
import { TrustIndicators } from "@/components/page/trust-indicators";


export default function Home() {
  return (
    <div>
       <Hero />
      <Features />
      <HowItWorks />
      <TrustIndicators />

    </div>
  );
}
