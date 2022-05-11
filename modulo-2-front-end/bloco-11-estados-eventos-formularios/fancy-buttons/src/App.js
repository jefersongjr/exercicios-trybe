import React from 'react';

class App extends React.Component {
  state = {
    chave1: 0,
    chave2: 0,
    chave3:0
  }

  handleClick1 = () => {
    this.setState({chave1: 1})
  }
  
  handleClick2 = () => {
    this.setState({chave2: 1})
  }
  
  handleClick3 = () => {
    this.setState({chave1: 1})
  }
  
  render(){
    return (
      <div>
        <button className='button' onClick={this.handleClick1}>Botão1</button>
        <button className='button' onClick={this.handleClick2}>Botão2</button>
        <button className='button' onClick={this.handleClick3}>Botão3</button>
      </div>
    );
  }
}

export default App;
