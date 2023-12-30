import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function buscar(){
    const router = useRouter()
    const id = router.query.id
    const nome = router.query.nome
    console.log(router);
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Você clicou ${count} vezes`
    })

    function verificaId(){
        if (id === '123' && nome == 'Guilherme'){
            alert('O código confere')
        } else {
            alert('O código não confere')
        }
    }

    return(
        <div>
            Rotas / {id} / {nome}
            <p>`Você clicou {count} vezes`</p>
            <button onClick={verificaId} className="border-1 bg-white text-red-600">Enviar</button>
            <button onClick={() => setCount(count + 1)}> Clique aqui</button>
        </div>
    )
}