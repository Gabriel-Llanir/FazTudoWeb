import Link from "next/link";

export default function NotFound() {
    return (
        <main className="bg-slate-900 m-12 p-4 rounded">
            <h2>Página não encontrada</h2>
            <br/>
            <Link href="/">Voltar para Home</Link>
        </main>
    )
}