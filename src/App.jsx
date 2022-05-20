import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults'
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom'

// API KEY: AIzaSyD6V83HWQXqJmred1jXsXnPoeAMUJpvENA

//GET https://www.googleapis.com/customsearch/v1?key=AIzaSyD6V83HWQXqJmred1jXsXnPoeAMUJpvENA&cx=017576662512468239146:omuauf_lfve&q=lectures


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
