import { styled } from "@mui/styles";
import React, { useState,useEffect } from 'react';
import {Typography } from '@mui/material';
import Organismscardreport from 'ui-component-bookdiscovery-42/dist/Organismscardreport';
import Organismscardbooksreading from "ui-component-bookdiscovery-42/dist/Organismscardbooksreading";
import Bannernew from "ui-component-bookdiscovery-42/dist/Bannernew";
//import Organismscardrecommendations  from "ui-component-bookdiscovery-42/dist/Organismscardrecommendations";
import Organismscardtopics from "ui-component-bookdiscovery-42/dist/Organismscardtopics";
import Organismsalltopics from "ui-component-bookdiscovery-42/dist/Organismsalltopics";
import Header from "ui-bookdiscoveryv2-42/dist/NavBarNewv1"
import Moleculeslist1 from "ui-component-bookdiscovery-42/dist/Moleculeslist1";
import Atomsiconsmaths from "ui-component-bookdiscovery-42/dist/Atomsiconsmaths"
import api from "../api/api";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Navigate,useNavigate } from "react-router-dom";
import Organismscardrecommendations from "ui-bookdiscoveryv2-42/dist/HeroCrad10"

const BodyContainer = styled("div")({
  marginTop: 56,
  
})

const HeaderContainer = styled("div")({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
  marginBottom:56

})
const CardBody = styled("div")({
  // position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  marginTop: 64
})

const BooksCurrentlyReading = styled("div")({
  display: "flex",
  flexDirection: 'column',
  marginTop: 128,
  gap: 16,
})

const BooksCurrentlyReadingText = styled("div")({
  display: "flex",
  justifyContent: 'space-between',
})

const BooksCurrentlyReadingSection = styled("div")({
  display: "flex",
  gap: 25,
})

const BooksCurrentlyReadingSectionArrowSection = styled("div")({
  '&:hover': {
    cursor: 'pointer',
    'box-shadow': '5px 5px #e5ede4',
  },
})


function HomePage() {
  
    const [reading, setReading] = useState([
        {
          id: 0,
          title: "",
          author: "",
          image: "",
          category: "",
          rating: 0,
          pages:""

        },
      ]);
      const [recommends, setRecommends] = useState([
        {
          id: 0,
          title: "",
          author: "",
          image: "",
          category: "",
          rating:0,
          numberOfRatings:""
        },
      ]);
      const [readByOthers, setReadByOthers] = useState([
        {
          id: 0,
          title: "",
          author: "",
          image: "",
          category: "",
          rating:0,
          numberOfRatings:""

        },
      ]);
      const [topicsFollow, setTopicsFollow] = useState([
        {
          id: 0,
          image: "",
          category:"",
        },
      ]);
      const [topRatings, setTopRatings] = useState([
        {
          id: 0,
          title: "",
          author: "",
          image: "",
          category: "",
          rating: 0,
          numberOfRatings:""

        },
      ]);

    const BooksReading=async ()=>{
        const response= await api.get("/booksReading/")
        const data = response.data;
        setReading(data)
    }
    const Recommendations=async ()=>{
        const response= await api.get("/bookRecommendation/")
        const data = response.data;
        setRecommends(data)
    }
    const PeopleAlsoRead=async ()=>{
        const response= await api.get("/booksReadByOthers/")
        const data = response.data;
        setReadByOthers(data)
    }
    const TopicsToFollow=async ()=>{
        const response= await api.get("/TopicsYouFollow/")
        const data = response.data;
        setTopicsFollow(data)
    }
    const TopRatings=async ()=>{
        const response= await api.get("/TopRatings/")
        const data = response.data;
        setTopRatings(data)
    }

    useEffect(() => {
        BooksReading();
        Recommendations();
        PeopleAlsoRead();
        TopicsToFollow();
        TopRatings();
        console.log("yes working")
    },[])

    let [explore, setExplore] = useState();
    const expandExploreDropdown = () => {
      explore ? setExplore(false) : setExplore(true);
    }
  
  let navigate = useNavigate()
  
  let seeAllResults = () => {
    navigate('/searchresults')
  }

  return (
    <>
    
      <HeaderContainer>
        <Header
          overrides={{ "Button27082": { onClick: () => { explore ? setExplore(false) : setExplore(true); } } }}
        />
    
      
        <BodyContainer>
          <Bannernew  overrides={{"Button":{children:"Discover",backgroundColor:"#FF725E"}}}/>
        </BodyContainer>

        <CardBody>
          <Organismscardreport overrides={{"CURRENTLY READING":{children:"CURRENTLY READING"},"atoms/icons/currentreading":{color:"#8C52C6"}}} />
          <Organismscardreport overrides={{"CURRENTLY READING":{children:"BOOKS TO READ"}}}/>
          <Organismscardreport overrides={{"CURRENTLY READING":{children:"BOOKS READ"}}}/>
          <Organismscardreport overrides={{"CURRENTLY READING":{children:"TARGET PER YEAR"}}}/>
        </CardBody>

        <BooksCurrentlyReading>
          <BooksCurrentlyReadingText>
            <Typography variant='h6' fontWeight="bold">
              Books you are Reading
            </Typography>
            <Typography variant='h6' color="#FF725E" onClick={seeAllResults} >
              See more 
              <KeyboardArrowRightIcon/>
            </Typography>
          </BooksCurrentlyReadingText>

          <BooksCurrentlyReadingSection>
            {reading.map((book) => {
                return(
                    <BooksCurrentlyReadingSectionArrowSection>
                        <Organismscardbooksreading overrides={{"Rectangle 7":{src:book.image},"Three Men in a Boat":{children:book.title},
                          "By Jerome K. Jerome":{children:book.author},"Catergory - Humorous":{children:book.category},"20/250 pages left":{children:book.pages}}}/>
                    </BooksCurrentlyReadingSectionArrowSection>
                )
            })}

          </BooksCurrentlyReadingSection>
        </BooksCurrentlyReading>

        {/* recommendation */}
        <BooksCurrentlyReading>
          <BooksCurrentlyReadingText>
            <Typography variant='h6' fontWeight="bold">
              Recommendations
            </Typography>
            <Typography variant='h6' color="#FF725E" onClick={seeAllResults}>
              See more
              <KeyboardArrowRightIcon />
            </Typography>
          </BooksCurrentlyReadingText>
          <BooksCurrentlyReadingSection>
          {recommends.map((book) => {
                return(
                    <BooksCurrentlyReadingSectionArrowSection>
                        <Organismscardrecommendations overrides={{"Rectangle 18":{src:book.image},"Biology":{children:book.title},
                          "By SergeyVasutin":{children:book.author},"Category: Chemistry":{children:book.category},"530 ratings":{children:book.numberOfRatings},"3.5":{children:book.rating}}}/>
                    </BooksCurrentlyReadingSectionArrowSection>
                )
            })}
          </BooksCurrentlyReadingSection>
        </BooksCurrentlyReading>

        {/* People you follow also read */}
        <BooksCurrentlyReading>
          <BooksCurrentlyReadingText>
            <Typography variant='h6' fontWeight="bold">
              People you follow also read
            </Typography>
            <Typography variant='h6' color="#FF725E" onClick={seeAllResults}>
              See more
              <KeyboardArrowRightIcon/>
            </Typography>
          </BooksCurrentlyReadingText>
          <BooksCurrentlyReadingSection>
            {readByOthers.map((book) => {
                return(
                    <BooksCurrentlyReadingSectionArrowSection>
                        <Organismscardrecommendations overrides={{"Rectangle 18":{src:book.image},"Biology":{children:book.title},
                          "By SergeyVasutin":{children:book.author},"Category: Chemistry":{children:book.category},"530 ratings":{children:book.numberOfRatings},"3.5":{children:book.rating}}}/>
                    </BooksCurrentlyReadingSectionArrowSection>
                )
            })}
          </BooksCurrentlyReadingSection>
        </BooksCurrentlyReading>

        {/* Topics you follow */}
        <BooksCurrentlyReading>
          <BooksCurrentlyReadingText>
            <Typography variant='h6' fontWeight="bold">
              Topics you follow
            </Typography>
            <Typography variant='h6' color="#FF725E" onClick={seeAllResults}>
              See more
              <KeyboardArrowRightIcon/>
            </Typography>
          </BooksCurrentlyReadingText>
          <BooksCurrentlyReadingSection>
            {topicsFollow.map((book) => {
                return(
                    <BooksCurrentlyReadingSectionArrowSection>
                        <Organismscardtopics overrides={{"Rectangle 10":{src:book.image},
                          "GEOGRAPHY":{children:book.category}}}/>
                    </BooksCurrentlyReadingSectionArrowSection>
                )
            })}
          </BooksCurrentlyReadingSection>
        </BooksCurrentlyReading>

        {/* Top Rating */}
        <BooksCurrentlyReading>
          <BooksCurrentlyReadingText>
            <Typography variant='h6' fontWeight="bold">
              Top Rated
            </Typography>
            <Typography variant='h6' color="#FF725E" onClick={seeAllResults}>
              See more
              <KeyboardArrowRightIcon/>
            </Typography>
          </BooksCurrentlyReadingText>
          <BooksCurrentlyReadingSection>
            {topRatings.map((book) => {
                return(
                    <BooksCurrentlyReadingSectionArrowSection>
                        <Organismscardrecommendations overrides={{"Rectangle 18":{src:book.image},"Biology":{children:book.title},
                          "By SergeyVasutin":{children:book.author},"Category: Chemistry":{children:book.category},"530 ratings":{children:book.numberOfRatings},"3.5":{children:book.rating}}}/>
                    </BooksCurrentlyReadingSectionArrowSection>
                )
            })}
          </BooksCurrentlyReadingSection>
        </BooksCurrentlyReading>
        {explore ? <Organismsalltopics 
        overrides={{ "molecules/list11464298": {bgcolor:"#f5b942"},"Organismsalltopics":{position:"absolute",top:"56px",left:"390px",zIndex:"10000"}}}
        /> : null}
        </HeaderContainer>
   </>
  );
}

export default HomePage;
