import React, {useState} from "react"
import * as React2 from "react";


type Props = {
    children?: React.ReactNode,
    mensaje: string,
  };

export const Form: React.FC<Props> = ({mensaje,children}) => {
const initialState ={nombre:"", edad:""}
const [form,setForm] = useState(initialState)
const {nombre,edad}=form

const onChangevalue = (e: { target: { value: any; name: any; }; }) => {
    console.log(e.target.value)
    setForm(prevState =>({
        ...prevState, 
        [e.target.name]:e.target.value
    }))
}

const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    console.log('valor del form: \n',form)
}

    return (
        <>
            <h1>{mensaje}</h1>
            {children}
            <form onSubmit={onSubmit}>
            <input name='nombre' value={nombre} onChange={onChangevalue}/>
            <input name='edad' value={edad} onChange={onChangevalue}/>
            <button type="submit">Enviar</button>
            </form>
        </>
    )
}