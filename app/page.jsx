'use client';

import DecliciousCard from "@/components/home/DecliciousCard";
import HandPicked from "@/components/home/HandPicked";
import Hero from "@/components/home/Hero";
import Inbox from "@/components/home/Inbox";
import Latest from "@/components/home/Latest";
import PopularCatCard from "@/components/home/PopularCatCard";

export default function Home() {
  return (
    <div className="container mx-auto px-4 mt-[100px]">
      <Hero />

      {/* Super Delicious */ }
      <div className="mb-16" id="super_delicious">
        <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <DecliciousCard />
          <DecliciousCard />
          <DecliciousCard />
          <DecliciousCard />
        </div>
      </div>

      {/* Popular Category Section */ }
      <PopularCatCard />

      {/* Inbox */ }
      <Inbox />

      {/* Hand-picked Collection */ }
      <HandPicked />

      {/* Latest Recipe */ }
      <Latest />
    </div>
  );
}