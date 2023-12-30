import { useRouter } from "next/router"

export default function buscar(){
    const router = useRouter()
    const id = router.query.id

    function verificaId(){
        if (id === '123'){
            alert('O código confere')
        } else {
            alert('O código não confere')
        }
    }

    return(
        <div>
            Rotas / {id} / Buscar
            <button onClick={verificaId} className="border-1 bg-white text-red-600">Enviar</button>
        </div>
    )
}