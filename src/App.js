import { SearchResults } from "./Templates/HomePage"
import { SearchResultsJson } from "./Templates/SearchResultsJson"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleBookPage from "./Templates/SingleBookPage"
import HomePagev1 from "./Templates/HomePage";
import { SeeAllReadingBooks } from "./Templates/SeeAllReadingBooks";
import{ MyLibrary} from "./Templates/MyLibrary"

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
            <Route path="/mylibrary" element={<MyLibrary/>}/>
          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
