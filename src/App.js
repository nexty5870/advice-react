import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DataIsLoaded: false,
      items: {}
    };
  }

  componentDidMount() {
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        items: json,
        DataIsLoaded: true
      });
    })
  }

render() {
  const { DataIsLoaded, items } = this.state;
  if (!DataIsLoaded) return <div>
    <h1>Please wait while loading meta data...</h1></div>;
  
  return (
    <div className= "App">
      <h1>Fetching data from API</h1> {
          Object.values(items).map((item) => (
          <ol key = { item.id } >
            Advice: { item.advice }
          </ol>
        ))
      }
    </div>
  );
}
}

export default App;
