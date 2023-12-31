import Image from 'next/image'
import Presente from './components/Presente'
import Porta from './components/Porta'
import PortaModel from '../../model/porta'
import { useState } from 'react'


export default function Home(){
  const [p1, setp1] = useState(new PortaModel(1))
  const [texto, setTexto] = useState("...")

  return (
    <>
      <div style={{display: "flex", flexDirection:"column"}}>
        <input type="text" value={texto} onChange={e => setTexto(e.target.value)}/>
          <Porta value={p1} onChange={novaPorta =>  setp1(novaPorta)} />
      </div>
    </>
  )
}
