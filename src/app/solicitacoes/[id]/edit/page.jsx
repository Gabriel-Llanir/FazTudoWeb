import { getSolicitacao } from "@/actions/publicacoes";
import NavBar from "@/components/NavBar";
import FormSolicitacaoEdit from "./FormEdit";


export default async function FormSolicitacao({params}){
    
    const solicitacao = await getSolicitacao(params.id)
   
    return (
        <>
            <NavBar active={"solicitacao"} />
            <FormSolicitacaoEdit solicitacao={solicitacao} />
            
        </>

    )
}
