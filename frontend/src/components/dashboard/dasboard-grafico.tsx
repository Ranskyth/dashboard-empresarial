"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "Janeiro", vendas: 86 },
  { month: "Fevereiro", vendas: 305 },
  { month: "Marco", vendas: 237 },
  { month: "Abril", vendas: 73 },
  { month: "Maio", vendas: 209 },
  { month: "Junho", vendas: 214 },

  { month: "Julho", vendas: 86 },
  { month: "Agosto", vendas: 305 },
  { month: "Setembro", vendas: 237 },
  { month: "Outubro", vendas: 73 },
  { month: "Novembro", vendas: 209 },
  { month: "Dezembro", vendas: 514 },
];

const chartConfig = {
  vendas: {
    label: "Vendas",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <Card className="w-full h-[400px]">
      <CardHeader>
        <CardTitle>Grafico de Vendas</CardTitle>
        <CardDescription>Janeiro - Dezembro 2024</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-full">
        <ChartContainer className="w-full h-[80%]" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="vendas" fill="var(--color-vendas)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
