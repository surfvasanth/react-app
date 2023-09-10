import "./styles.css";

const Person = () => {
  return (
    <><h1>First Name : Raj</h1>
    <h1>Last Name : Kumar</h1>
    <h1>Age : 35</h1>
    </>
  )
}
const App = () => { 
  return (
    <div className="App">
      <Person />
           </div>
  );
}
export default App;