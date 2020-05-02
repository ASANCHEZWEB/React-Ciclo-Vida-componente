import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0,
        };
        //ESTE CONSTUCTOR ES LO PRIMERO QUE SE EJECUTA  DEL COMPONENTE
        console.log('I am in the CONSTRUCTOR of the Counter.js.');
    }

    counter = () =>{
        this.setState((prevState) => {
          return { 
            count: prevState.count + 1 
          };
        })
      }
  
      
    componentDidMount() {
        //se ejecuta despues del render
      //Aquí es donde haría cualquier llamada asincrónica a las bases de datos o
      // manipularía directamente el DOM si lo necesita. Solo así, nuestro 
      //componente nace.
      this.timer = setInterval(this.counter, 100);
      console.log('Component DID MOUNT.');
    }
    
    
    componentDidUpdate(prevProps, prevState) {
        //ESTE SE EJECUTA CUANDO SE ACTUALIZA EL STATE O LOS PROPS
        console.log('Component Counter UPDATED from: ', prevState.count);
    }

    componentWillUnmount() {
        //ESTE ES EL METODO QUE DESMONTA EL COMPONENTE
        // EN ESTE CASO CUANDO APP.JS ISRUNNIG DEJA DE SER TRUE
        console.log("======== Component COUNTER is UNMOUNTED! ========");
        clearInterval(this.timer); // !!!
    }
    
  
    render() {
       //se ejecuta despues del constructor  
       // Ahora llegamos al rendermétodo que devuelve su JSX.
       // Ahora reacciona "monturas" en el DOM.
        console.log('I am in the RENDER of the Counter.');
        return  (
            <h1> { this.state.count }</h1>
        ) 
    }
  }

  export default Counter;