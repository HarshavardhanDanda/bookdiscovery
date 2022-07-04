import Header from "ui-bookdiscoveryv2-42/dist/NavBarNewv1"
import OrganismsheaderInactive3 from "ui-component-bookdiscovery-42/dist/OrganismsheaderInactive3"
//import books from "../data/books"
import { styled } from "@mui/styles";
import Organismscardsearchresults from "ui-bookdiscoveryv2-42/dist/HeroCrad60v1"
import Moleculesdropdown1 from "ui-component-bookdiscovery-42/dist/Moleculesdropdown1"
import Moleculespagination from "ui-component-bookdiscovery-42/dist/Moleculespagination"
import { useState,useEffect } from 'react';
import api from '../api/api';
import { Navigate,useNavigate } from "react-router-dom";
import Organismsalltopics from "ui-component-bookdiscovery-42/dist/Organismsalltopics";
import Headline from "ui-bookdiscoveryv2-42/dist/Headline"


const BooksContainer = styled("div")({
    display:"flex",
    flexDirection:"row",
    marginLeft:100,
    marginRight:100,
    flexWrap:"wrap",
    justifyContent:"center",
    postion:"relative",
    
})

const SingleBookContainer= styled("div")({
   marginTop:12,
   marginBottom:12,
   marginLeft:12,
   marginRight:12,
   '&:hover': {
    cursor: 'pointer',
    'box-shadow': '5px 5px #e5ede4',
  },
})

const WholeContainer=styled("div")({
   width:"100%"
})

const AllResults=styled("div")({
   display:"flex",
   flexDirection:"column"
})

const Pagination=styled("div")({
 marginLeft:1180,
 marginTop:40,
 marginBottom:46,
 marginRight:24,
 display:"flex",
 flexDirection:"row",
})

const Pages=styled("div")({
   marginLeft:24
 })

const Typo= styled("div")({
   display:"flex",
   flexDirection:"row",
   marginLeft:390,
   marginTop:59
})

export const SearchResultsJson = () => {

    const [books, setBooks] = useState([
        {
          id: 0,
          title: "",
          author: "",
          description:"",
          image: "",
          category: "",
          rating: 0,
          numberOfRatings:"",
          authorAvatar:""
        },
      ]);

      const getBooks = async () => {
        const response = await api.get("/books/");
        const data = response.data;
        console.log("working")
        setBooks(data);
      };

    useEffect(() =>{
        console.log("useEffect")
        getBooks();
    },[] )
      
    let navigate = useNavigate()
  
     let seeAllResults = () => {
    navigate('/searchresults')
    }
    let navigateHome = () => {
      navigate('/')
    }

      let [explore, setExplore]= useState(false)
      return (
          <WholeContainer>
              <Header overrides={{ "Button27082": { onClick: () => { explore ? setExplore(false) : setExplore(true); } }, "Button27078":{onClick:() =>{navigateHome()}}}}/>
              {/* {explore? <ExploreContainer><Organismsalltopics /> </ExploreContainer> : null} */}
              <AllResults>
                  <Typo>
                    <Headline/>
                  </Typo>
                  <BooksContainer>
                      {books.map((book) => {
                          return (
                              <SingleBookContainer>
                                  <Organismscardsearchresults overrides={{"Rectangle 13":{src:book.image}, "J D Lee":{children:book.author,onClick:() => { console.log("harsha")}},
                                  "Inorganic Chemistry":{children:book.title},"Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more":{children:book.description},
                                  "830 ratings":{children:book.numberOfRatings},"4.5":{children:book.rating},"Catergory - Humorous":{children:book.category},"atoms/icons/bookmark":{onClick:() => { console.log("harsha")}}}}/>
                              </SingleBookContainer>
                          );
                          })}
                  </BooksContainer>
              </AllResults>
              <Pagination>
                  <div style={{fontSize:"16px",fontWeight:"400px",fontFamily:"roboto"}}> 1 to 10 of 1228 results </div>
                  <Pages>
                     <Moleculespagination/>
                  </Pages>
              </Pagination>
              {explore ? <Organismsalltopics 
        overrides={{ "molecules/list11464298": {bgcolor:"#f5b942"},"Organismsalltopics":{position:"absolute",top:"56px",left:"390px",zIndex:"10000"}}}
        /> : null}
          </WholeContainer>
        );
}
