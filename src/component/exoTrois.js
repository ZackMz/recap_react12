import React, { useState } from 'react'

function ExoTrois(){
    const [nom,setNom]=useState("inconnu")
    const [input,setInput]=useState("")
    let changeit = ()=>{  
        setNom(input)
        setInput('');
    }
    return(
    <div className='bbox'>
    <h1>Bonjour {nom}</h1>
    <p>écrivez dans l'input ci-dessous le nom de la personne que vous souhaitez accueillir</p>
    <input type="text"  value={input} onChange={el=>setInput(el.target.value)}/>
    <button onClick={changeit}>go</button>
    </div>
)
}export default ExoTrois