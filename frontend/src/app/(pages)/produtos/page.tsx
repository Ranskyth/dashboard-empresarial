import { DataTable } from "@/app/_components/data-table"



const teste = [{
    id: 1,
    header: "aaaa",
    type: "aaa",
    status: "aaa",
    target: "aaa",
    limit: "wwww",
    reviewer: "llll"
},
{
    id: 2,
    header: "aaaa",
    type: "aaa",
    status: "aaa",
    target: "aaa",
    limit: "wwww",
    reviewer: "llll"
},
{
    id: 3,
    header: "aaaa",
    type: "aaa",
    status: "aaa",
    target: "aaa",
    limit: "wwww",
    reviewer: "llll"
},
{
    id: 4,
    header: "aaaa",
    type: "aaa",
    status: "aaa",
    target: "aaa",
    limit: "wwww",
    reviewer: "llll"
},
{
    id: 5,
    header: "aaaa",
    type: "aaa",
    status: "aaa",
    target: "aaa",
    limit: "wwww",
    reviewer: "llll"
},


]

const Produtos = () => {
    return(
        <div className="mt-12">
            <DataTable data={teste}/>
        </div>
    )
}

export default Produtos