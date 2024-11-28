import DecliciousCard from "@/components/DecliciousCard";
import HandPicked from "@/components/HandPicked";
import Hero from "@/components/Hero";
import Inbox from "@/components/Inbox";
import Latest from "@/components/Latest";
import PopularCatCard from "@/components/PopularCatCard";

export default function Home() {
  return (
    <div className="container mx-auto px-4 mt-[100px]">
      <Hero />

      {/* super delicious */ }
      <div className="mb-16" id="super_delicious">
        <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <DecliciousCard />
          <DecliciousCard />
          <DecliciousCard />
          <DecliciousCard/>
        </div>
      </div>

      {/* popular category section */ }
      <PopularCatCard />
      
      {/* inbox */ }
      <Inbox />
      
      {/* hand-picked collection */ }
      <HandPicked />
      
      {/* latest recipe */ }
      <Latest/>
   </div>
  );
}
