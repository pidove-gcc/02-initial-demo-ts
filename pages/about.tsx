import React, { useState, useEffect } from 'react';
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Form } from '../components/Form'
import { Navbar } from '../components/Navbar';

export default function Home( ) {
    const [count, setCount] = useState(0);
    const [nombre, setNombre] = useState("name");
    const [array, setArray] = useState([1,2,3,4,5]);
    
    const agregarelementos = () => {
        const newarray = [...array]
    newarray.push(9,8,7,6)
    setArray(newarray)

    }
    let x = <button onClick={agregarelementos}>boton</button>
    if (count < 3) {
        x =     <p>Hola</p>
    }
    useEffect(() => {
        setNombre(count + nombre);
    }, [count]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main}>
        <button onClick={() => setCount(prevState => prevState + 1)} >+</button>
        <button onClick={() => setCount(prevState => prevState - 1)} >-</button>
        <h1 className={styles.title}>
          {count}
        </h1>
        <h1 className={styles.title}>
          {nombre}
        </h1>
        <ul>
            {array.map(item => <li key={item}>{item === 2? "dos" : item}</li>)}
        </ul>
         <h1 className={styles.title}>
            {nombre === "0name" ? "es nombre" : "no es nombre" } 
        </h1>
        {x}
        <Form mensaje='hola'><p>Esta es una etiqueta Children</p></Form>
      </main>
    </div>
  );
}
