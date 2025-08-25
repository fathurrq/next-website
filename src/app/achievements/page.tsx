import Cooperation from "@/components/achievements/CooperationSection";
import AwardSection from "@/components/achievements/AwardSection";
import PageTransition from "@/components/page-transition";

export default function Achievements() {

  return (
    <div id="achievements" className="pb-12 relative w-full min-h-screen overflow-hidden">
      
    <PageTransition />

    {/* cooperation section */}
    <Cooperation/>

    {/* award section */}
    <AwardSection/>
    </div>
  )
}