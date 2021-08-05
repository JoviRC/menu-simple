import React from 'react'
import "./PlatosComponent.css"

export const PlatosComponent = ({platos}) => {    
        
    return (
        <>
          {platos.map(p=>(
            <h3 key={p.nombre}>{p.nombre}</h3>
          ))}
        </>
    )
}
