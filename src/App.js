import "./styles.css";

const App = () => {
  const name='vasanth';
  
  return (
    <div className="App">
      <h1>React </h1>
      {name ?
      (<>test</>):
      (<h1>No</h1>)}
     </div>
  );
}
export default App;