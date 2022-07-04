import { SearchResults } from "./Templates/SearchResults"
import { SearchResultsJson } from "./Templates/SearchResultsJson"
import HomePage from "./Templates/HomePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleBookPage from "./Templates/SingleBookPage"

function App() {
  return (
    <div>
        {/* <SearchResults/> */}
        {/* <SearchResultsJson /> */}
        {/* <HomePage/> */}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/searchresults" element={<SearchResultsJson/>} />
            <Route path="/singlebook" element={<SingleBookPage/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
