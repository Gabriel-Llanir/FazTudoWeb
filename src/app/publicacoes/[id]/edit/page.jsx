import { getSolicitacao } from "@/actions/publicacoes";
import NavBar from "@/components/NavBar";
import FormSolicitacaoEdit from "./FormEdit";


export default async function FormSolicitacoes({params}){
    
    const solicitacao = await getSolicitacao(params.id)
   
    return (
        <>
            <NavBar active={"publicacao"} />
            <FormSolicitacaoEdit solicitacao={solicitacao} />
            
        </>

    )
}
