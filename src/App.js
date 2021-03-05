import Navbar from './Navbar';
import Home from './Home';
// The App.js is where you put your components together and this Mother Component is being rendered to the index.js file
function App() {
 
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Home />
    
      </div>
    </div>
  );
}

export default App;
