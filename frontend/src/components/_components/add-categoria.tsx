import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CategoriaContext } from "@/context/categoria-context"
import { ReactNode, useContext, useState } from "react"

export function AddCategoria({children}:{children:ReactNode}) {
  const [value, setValue] = useState<string>()
  const { CreateCategoria } = useContext(CategoriaContext)
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input value={value} onChange={(e) => setValue(e.target.value)}>
            </Input>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Sair
            </Button>
          </DialogClose>
            <Button onClick={() => CreateCategoria(value)} type="button" variant="secondary">
              Adicionar Categoria
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
