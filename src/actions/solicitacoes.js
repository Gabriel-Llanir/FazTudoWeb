"use server"

import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL +  "/publicacoes"

export async function create(formData){
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
    
    revalidatePath("/publicacoes")
    return {message: "ok"}
       
}

export async function getSolicitacoes() {
    const resp = await fetch(url)
    return resp.json()
  }
