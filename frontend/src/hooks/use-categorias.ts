interface ICategorias{
    categoria:string
}

export const useCategoria = (data?:ICategorias[]) => {
    const categories = ["Todos", ...Array.from(new Set(data?.map((p) => p.categoria)))]
    
    return {categories}
}