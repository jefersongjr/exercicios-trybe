import React from "react";
import conteudos from "./data";

class Content extends React.Component{
    render(){
        return(
          conteudos.map((item)=> (
            <div key = {item.conteudo} className='card'>
              <h2>{`O conteúdo é : ${item.conteudo}`}</h2>
              <p>{`Status: ${item.status}`}</p>
              <p>{`Bloco: ${item.bloco}`}</p>
            </div>
          ))
        );
    }
  }

export default Content;