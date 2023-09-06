import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { PlusIcon } from "@heroicons/react/24/outline";

async function getSolicitacoes() {
  const url = "http://localhost:8080/api/solicitacoes"
  const resp = await fetch(url)
  return resp.json()
}

export default async function Solicitacoes() {
  const data = await getSolicitacoes()

  return (
    <>
      <NavBar active={"solicitacoes"} />

      <main className="bg-slate-900 m-12 p-4 rounded">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Solicitacoes</h2>
          <Button 
            icon={<PlusIcon className="h6 w-6" />}
            href="/solicitacoes/form"
          >
            criar solicitação
          </Button>
        </div>

        <div id="data">
          {data.map(solicitacao => <DataRow solicitacao={solicitacao} />)}
        </div>
      </main>
    </>
  )
}
