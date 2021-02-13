function Hello(props) {
  return <h1>Hello,{props.name}</h1>;
}

class Welcome extends React.Component{
  render() {
  return <h1>Hello,{this.props.name}</h1>;
  }
}

function App() {
  return (
    <div>
      <Welcome name="saler"></Welcome>
      <Hello name="Mike"></Hello>
      <Welcome name="Jhon"></Welcome>
    </div>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)