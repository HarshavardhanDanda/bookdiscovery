import Header from "ui-component-bookdiscovery-42/dist/Header"
import OrganismsheaderInactive3 from "ui-component-bookdiscovery-42/dist/OrganismsheaderInactive3"
import books from "../data/books"
import { styled } from "@mui/styles";
import Organismscardsearchresults from "ui-component-bookdiscovery-42/dist/Organismscardsearchresults"
import Moleculesdropdown1 from "ui-component-bookdiscovery-42/dist/Moleculesdropdown1"
import Moleculespagination from "ui-component-bookdiscovery-42/dist/Moleculespagination"
import { useState } from "react";

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
    marginRight:12
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
    marginLeft:380,
    marginTop:59
})

export const SearchResults = () => {
    let [explore, setExplore]= useState(false)
    const data= books;
    const pathdata="M 32.00,16.00C 32.00,24.84 24.84,32.00 16.00,32.00 7.16,32.00 0.00,24.84 0.00,16.00 0.00,7.16 7.16,0.00 16.00,0.00 24.84,0.00 32.00,7.16 32.00,16.00 Z";
    return (
        <WholeContainer>
            <Header overrides={{ "Button11423814": { onClick: () => { explore ? setExplore(false) : setExplore(true); } } }}/>
            {/* {explore? <ExploreContainer><Organismsalltopics /> </ExploreContainer> : null} */}
            <AllResults>
                <Typo>
                  <div style={{fontSize:"24px",fontWeight:"500px",fontFamily:"roboto"}}> Search Results for J D Lee </div>
                  <Moleculesdropdown1 style={{marginLeft:"580px"}} ></Moleculesdropdown1>
                  <Moleculesdropdown1 style={{marginLeft:"20px"}} overrides={{"Categories":{children:"Sort by"}}}></Moleculesdropdown1>
                </Typo>
                <BooksContainer>
                    {data.map((book) => {
                        return (
                            <SingleBookContainer>
                                <Organismscardsearchresults overrides={{"Rectangle 13":{src:book.image},
                                "atoms/avatar":{pathData:pathdata},"atoms/icons/bookmark":{onclick:() => { console.log("harsha")}}}}/>
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
        </WholeContainer>
      );
}
