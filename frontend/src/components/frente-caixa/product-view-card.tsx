"use client"

import { ScrollArea } from "@radix-ui/react-scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Search } from "lucide-react"
import { useCategoria } from "@/hooks/use-categorias"
import { useContext, useState } from "react"
import { GetProducts } from "@/services/getProducts"
import { Product } from "@/types/ProductType"
import { CartContext } from "@/context/cart-context"

export const ProductView = () => {
    const { data } = GetProducts();
      const { addToCart } = useContext(CartContext)
      const { categories } = useCategoria(data);
    
      const [searchTerm, setSearchTerm] = useState("");
      const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
    
      const filteredProducts:Product[] = data.filter((product) => {
        const matchesSearch = product.nome
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesCategory =
          selectedCategory === "Todos" || product.categoria === selectedCategory;
        return matchesSearch && matchesCategory;
      });

    return (
              <div className="flex-1 flex flex-col">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Produtos
            </CardTitle>
            <div className="flex gap-2">
              <Input
                placeholder="Buscar produto ou código de barras..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="cursor-pointer p-2 hover:shadow-md transition-shadow"
                    onClick={() => addToCart(product)}
                    >
                    <CardContent className="p-0 m-0">
                      <div className="flex flex-col gap-5">
                        <img
                          className="w- rounded-sm h-28 object-cover"
                          src={product.imagem}
                          alt=""
                        />

                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-sm">
                              {product.nome}
                            </h3>
                            <Badge variant="secondary" className="text-xs">
                              {product.categoria}
                            </Badge>
                          </div>
                          <p className="text-lg font-bold text-green-600">
                            R$ {product.preco}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    )
}