"use server"

import { revalidatePath } from "next/cache"

export async function create(formData){
    const url = "http://localhost:8080/api/solicitacoes"
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const resp = await fetch(url, options)
    if (resp.status !== 201){
        return {message: "Erro ao cadastrar"}
    }
    
    revalidatePath("/solicitacoes")
    return {message: "ok"}
       
}
