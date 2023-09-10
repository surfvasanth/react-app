import "./styles.css";

const App = () => {
  const name=null;
  
  return (
    <div className="App">
      <h1>React </h1>
      {name ?
      (<>test</>):
      (<><h1>No</h1>
      <h1>There is no name</h1>
      </>)}
     </div>
  );
}
export default App;