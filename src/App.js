import { SearchResults } from "./Templates/HomePage"
import { SearchResultsJson } from "./Templates/SearchResultsJson"
import HomePage from "./Templates/HomePageOld"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleBookPage from "./Templates/SingleBookPage"
import HomePagev1 from "./Templates/HomePage";
import SingleBook from "./Templates/SingleBookPagev1"
import { SeeAllReadingBooks } from "./Templates/SeeAllReadingBooks";

function App() {
  return (
    <div>
        {/* <SearchResults/> */}
        {/* <SearchResultsJson /> */}
        {/* <HomePage/> */}
        <Router>
          <Routes>
            <Route path="/" element={<HomePagev1/>} />
            <Route path="/searchresults" element={<SearchResultsJson/>} />
            <Route path="/bookdetails" element={<SingleBookPage/>}/>
            <Route path="/seeallreading" element={<SeeAllReadingBooks/>}/>
          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
