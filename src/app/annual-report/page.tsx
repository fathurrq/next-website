import Hero from "@/components/Hero";
import PageTransition from "@/components/page-transition";

export default function Page() {
  return (
    <div>
      <PageTransition />

      <Hero
        routes={[{ text: "Home", href: "/" }, { text: "Annual Report" }]}
        backgroundClass="bg-[url('/company-profile-bg.png')] bg-top"
        title={"Annual Report"}
        description={
          "A comprehensive overview of our company's performance and achievements over the past year."
        }
      />
      <section>
        <div className="text-bki-orange">
            Latest Annual Report
        </div>
        <div>
            


            
        </div>
      </section>
    </div>
  );
}
