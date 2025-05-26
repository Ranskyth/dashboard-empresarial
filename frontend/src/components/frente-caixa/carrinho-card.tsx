"use client"

import { CreditCard, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { Badge } from "../ui/badge";
import { useContext } from "react";
import { CartContext } from "@/context/cart-context";

export const CarrinhoCard = () => {
  const { cart, clearCart, removeFromCart ,updateQuantity } = useContext(CartContext)

  console.log(cart)

  const total = cart.reduce((sum, item) => sum + item.preco * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const finalizeSale = () => {
    if (cart.length === 0) return;

    alert(`Venda finalizada! Total: R$ ${total}`);
    clearCart();
  };
  return (
    <div className="w-96 flex flex-col">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Carrinho
            </div>
            <Badge variant="secondary">
              {itemCount} {itemCount === 1 ? "item" : "itens"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <ScrollArea className="flex-1 mb-4">
            {cart.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">
                Carrinho vazio
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 p-2 border rounded"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.nome}</h4>
                      <p className="text-sm text-muted-foreground">
                        R$ {item.preco} cada
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="space-x-1 flex items-center">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            updateQuantity(String(item.id), item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-center text-sm">
                          {item.quantity}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            updateQuantity(String(item.id), item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => removeFromCart(String(item.id))}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        R$ {item.preco * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>

          <div className="space-y-4">
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-green-600">R$ {total}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Button
                className="w-full"
                size="lg"
                onClick={finalizeSale}
                disabled={cart.length === 0}
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Finalizar Venda
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={clearCart}
                disabled={cart.length === 0}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Limpar Carrinho
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
