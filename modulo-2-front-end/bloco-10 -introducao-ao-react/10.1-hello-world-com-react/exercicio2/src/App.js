import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

class App extends React.Component {
  render(){
      return( 
        <div>
        <Header />
        <main>
          <Content />
        </main>
          <Footer />
        </div>
       );
  }
}

export default App;
