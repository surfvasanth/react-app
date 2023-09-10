import "./styles.css";

const App = () => {
  const name='vasanth';
  const isNameShowing=false;
  return (
    <div className="App">
      <h1>React {isNameShowing ? name : 'Ramesh'}</h1>
     </div>
  );
}
export default App;