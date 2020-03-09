import React, { useState } from 'react'

function ExoUn(){
const [titre,setTitre] = useState("first thing first")
const changeIt = () =>{
    let copieTitre = "le deuxieme est tjr mieux"
    setTitre(copieTitre)
}
return(
    <div className='bbox'>
        <h1>{titre}</h1>
        <button onClick={changeIt}>Changer titre</button>
    </div>
)
}export default ExoUn