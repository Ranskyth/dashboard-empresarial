import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const controle = [
  {
    entradaType: {
      entrada: {
        id: 1,
        valor: 10,
        StatusPagamento: "Pago",
        MetodoPagamento: "Pix",
      },
      saida: {
        id: 1,
        valor: 10,
        StatusPagamento: "Pago",
        MetodoPagamento: "Pix",
      },
    },
  },
];

export const Content = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-center">Movi</h1>

      <div className="flex gap-5 p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Metodo</TableHead>
              <TableHead className="text-right">Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {controle.map((controle) => (
              <TableRow key={controle.entradaType.entrada.id}>
                <TableCell className="font-medium">
                  {controle.entradaType.entrada.id}
                </TableCell>
                <TableCell>
                  {controle.entradaType.entrada.StatusPagamento}
                </TableCell>
                <TableCell>
                  {controle.entradaType.entrada.MetodoPagamento}
                </TableCell>
                <TableCell className="text-right">
                  {controle.entradaType.entrada.valor}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>

        <Table>
          <TableHeader>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Metodo</TableHead>
            <TableHead className="text-right">Valor</TableHead>
          </TableHeader>
          <TableBody>
            {controle.map((controle) => (
              <TableRow key={controle.entradaType.saida.id}>
                <TableCell className="font-medium">
                  {controle.entradaType.saida.id}
                </TableCell>
                <TableCell>
                  {controle.entradaType.saida.StatusPagamento}
                </TableCell>
                <TableCell>
                  {controle.entradaType.saida.MetodoPagamento}
                </TableCell>
                <TableCell className="text-right">
                  {controle.entradaType.saida.valor}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};
