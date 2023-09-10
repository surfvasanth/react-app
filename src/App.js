import "./styles.css";

const Person = (props) => {
  return (
    <>
    <h1>FirstName : {props.FirstName}</h1>
    <h1>LastName : {props.LastName}</h1>
    <h1>Age : {props.Age}</h1>
    </>
  )
}
const App = () => { 
  return (
    <div className="App">
      <Person FirstName='Kannan' LastName='Das' Age='26'/>
      <Person />
      <Person />
    </div>
  );
}
export default App;