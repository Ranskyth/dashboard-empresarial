import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CategoriaContext } from "@/context/categoria-context"

export function SelectDemo() {

    const {categoria} = React.useContext(CategoriaContext)

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categorias</SelectLabel>
          {categoria?.map((e) => 
              <SelectItem key={e} value={String(e)}>{e}</SelectItem>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
