"use server"

import { revalidatePath } from "next/cache"
import { cookies } from 'next/headers'

const url = process.env.NEXT_PUBLIC_BASE_URL +  "/solicitacoes"

export async function create(formData){
    const token = cookies().get("faztudo_token")
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.value}`
        }
    }
    const resp = await fetch(url, options)
    if (resp.status !== 201){
        return {message: "Erro ao cadastrar"}
    }
    
    revalidatePath("/solicitacoes")
    return {message: "ok"}
       
}

export async function getSolicitacoes() {
    const resp = await fetch(url)
    return resp.json()
}

export async function apagar(id){
    const deleteUrl = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(deleteUrl, options)

    if (resp.status !== 204) return {error: "Erro ao apagar solicitacoes. "}

    revalidatePath("/solicitacoes")
}

export async function getSolicitacao(id){
    const getUrl =  url + "/" + id
    const resp = await fetch(getUrl)

    if (resp.status !== 200) return {error: "Erro ao carregar dados"}

    return await resp.json()

}

export async function update(solicitacao){
    const updateUrl =  url + "/" + solicitacao.id

    const options = {
        method: "PUT",
        body: JSON.stringify(solicitacao),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(updateUrl, options)

    if (resp.status !== 200) return {error: "Erro ao atualizar solicitação"}

    revalidatePath("/solicitacoes")
}
