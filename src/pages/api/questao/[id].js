export default function questao(req, res){
    if (req.method === 'GET'){
        const id = req.query.id
        res.status(200).json({
            id,
            enunciado: 'Qual é a sua cor preferida?',
            respostas: [
                'Branca','Vermelha','Amarela','Verde'
            ]
        })
    } else {
        req.satus(405).send()
    }
}