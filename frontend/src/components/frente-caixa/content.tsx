"use client"
/* eslint-disable @next/next/no-img-element */

import { ProductView } from "./product-view-card";
import { CarrinhoCard } from "./carrinho-card";

export function Content() {

  return (
    <div className="container mx-auto p-4 h-full flex gap-4">
      <ProductView />
      <CarrinhoCard/>
    </div>
  );
}
