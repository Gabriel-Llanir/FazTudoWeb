import { getSolicitacao } from "@/actions/solicitacoes";
import NavBar from "@/components/NavBar";
import FormSolicitacaoEdit from "./FormEdit";


export default async function FormSolicitacoes({params}){
    
    const solicitacao = await getSolicitacao(params.id)
   
    return (
        <>
            <NavBar active={"solicitacoes"} />
            <FormSolicitacaoEdit solicitacao={solicitacao} />
            
        </>

    )
}
