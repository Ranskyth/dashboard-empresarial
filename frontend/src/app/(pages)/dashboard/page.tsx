import { SectionCards } from "@/components/dashboard/dasboard-cards";
import { Component } from "@/components/dashboard/dasboard-grafico";
import { RecentSales } from "@/components/dashboard/dasboard-vendas";

export default function Page() {
  
  return (
    <div className="px-2 my-5">
      <div className="py-4">
        <SectionCards/>
      </div>
      <div className="flex items-center gap-5 w-full px-5">
        <RecentSales/>
        <div className="flex-1 h-full">
          <Component/>
        </div>
      </div>
    </div>
  );
}
