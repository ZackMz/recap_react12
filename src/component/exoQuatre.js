import React, { useState } from 'react'

function ExoQuatre(){
    const [nombre,setNombre]=useState(0)
    let moveit = ()=>{
        setNombre(nombre +1)
        if (nombre % 2 == 0) {

        } else {

        }
        
    }
return(
    <div className='bbox'>
        <div className="bigblock">
            <div className="bigblue">
                <div className="littleredUn">
                </div>
            </div>
            <div className="bigblue">
                <div className="littleredDeux">
                </div>
            </div>
        </div>
        <button className="button" onClick={moveit}>Deplacer le carre rouge</button>
        <button>Nombre de click :{nombre}</button>
    </div>
)
}export default ExoQuatre