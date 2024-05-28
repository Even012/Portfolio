import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";

import Grid from "@/components/Grid";
import RecentProject from "@/components/RecentProject";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">

    <div className="w-full h-full">
      <FloatingNav navItems={navItems}/>
      <Hero />
      {/* <Grid /> */}
      <RecentProject />
      <Footer />

    </div>
   </main>
  );
}
