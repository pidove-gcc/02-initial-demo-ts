import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";


const style: React.CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface Props{
  href: string,
  text:string,
}

export const ActiveLink: React.FC<Props> =({text,href}) => {


   const {asPath} =  useRouter(); //se desestructura el elemento en las llaves de la funcion useRouter
  return (
    <Link href={href}>
     <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
   
  )
}
