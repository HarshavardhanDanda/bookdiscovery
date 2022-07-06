import React from 'react'
//import Navbar from 'ui-bookdiscoveryv2-42/dist/NavBarNewv1';
import HeroBookImage from 'ui-bookdiscoveryv2-42/dist/HeroCard70v1'
import HeroBodyContent from 'ui-bookdiscoveryv2-42/dist/HeroBodyContent'
import HeroCard from 'ui-bookdiscoveryv2-42/dist/HeroCard90v1'
import MainBody from 'ui-bookdiscoveryv2-42/dist/MainBody'
import FollowersReviews from 'ui-bookdiscoveryv2-42/dist/ReviewCard1v1';
import OtherReviews from 'ui-bookdiscoveryv2-42/dist/HeroCrad100v1'
import RecommendatedBooks from 'ui-bookdiscoveryv2-42/dist/HeroCrad10v1'
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Navigate,useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';
import api from '../api/api';
import Suggestion from 'ui-component-bookdiscovery-42/dist/Organismscardsuggested';
import Navbar from "ui-bookdiscoveryv2-42/dist/NavBarNewv1"
import Suggested from "ui-bookdiscoveryv2-42/dist/HeroCard80v1"
import Organismscardrecommendations from "ui-bookdiscoveryv2-42/dist/HeroCrad10"


const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
})

const BottomContainer = styled("div")({
    marginLeft:"250px",
  })

const Header = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#884FC1"
})

const BookDetails = styled("div")({
  width: "610px",
  height: "301px",
  position: "relative",
  top: "124px",
  left: "100px",
  display: "flex"
})

const BookDescription = styled("div")({
  width: "767px",
  height: "164px",
  position: "relative",
  top: "150px",
  left: "100px",
})

const AuthorDescription = styled("div")({
  width: "769px",
  height: "200px",
  position: "relative",
  top: "160px",
  left: "100px",
  display: "flex",
  flexDirection: "column",
})

const BooksFollowedByAuthor = styled("div")({
  width: "768px",
  height: "174px",
  position: "relative",
  top: "210px",
  left: "100px"
})

const AuthorFollowedHeader = styled("div")({
  height: "24px",
  position: "relative",
  display: "flex",
  justifyContent: "space-between"
})

const FollowedAuthorsBooks = styled("div")({
  display: "flex",
  gap: "24px",
})

const ReviewsFromUsersYouFollow = styled("div")({
  width: "768px",
  height: "173px",
  position: "relative",
  left: "100px",
  top: "270px",
  display: "flex",
  flexDirection: "column",
})
const SuggestionComponent = styled('div')({
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-end",
    gap:30,
    marginRight:100,
    justifyContent:"space-between"
  });
  
  const SuggestionHeader = styled('div')({
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-end",
    marginRight:170,
    gap:30,
  });
const UsersYouFollowReviews = styled("div")({
  height: "132px",
  display: "flex",
})

const OtherReviewsHeader = styled("div")({
  width: "768px",
  height: "24px",
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  top: "330px",
  left: "100px",
})

const Reviews = styled("div")({
  marginTop: "50px",
  position: "relative",
  top: "280px",
  left: "100px",
  gap: "24px",
})

const Recommendations = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "1166px",
  height: "437px",
  position: "relative",
  top: "330px",
  left: "100px",
})

const RecommendationsBooks = styled("div")({
  display: "flex",
  position: "relative",
  gap: "24px",
})

const NewContainer=styled("div")({
    display:"flex",
  flexDirection:"column",
  gap:20,
})

const SuperContainer=styled("div")({
    display:"flex",
  flexDirection:"row",
  gap:200,
  marginRight:300
})

const Book = () => {
    // let[value]=props;
    let navigate = useNavigate()
  
let seeAllResults = () => {
navigate('/searchresults')
}
let navigateHome = () => {
    navigate('/')
}
let [explore, setExplore]= useState(false)

const [bookInfo, setBookInfo] = useState([
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
  const [allBooks, setAllBooks] = useState([
    {
      id: 1,
      title: "",
      author: "",
      image: "",
      category: "",
      rating: 0,
      pages:"",
      numberOfRatings:"",
      status:{
        isReading:true,
        isBookmarked:false,
        isRecommended:false,
        peopleAlsoRead:false,
        isTopRated:false
      }
    },
  ]);
  const queryParams = new URLSearchParams(window.location.search);
  const ID = queryParams.get('id');
  let getBookInfo = async () => {

    const response = await api.get(`/books/${ID}`)
    const data = response.data
    console.log(JSON.stringify(data))
    setBookInfo(data)
  }
  const AllBooks=async ()=>{
    const response= await api.get("/books/")
    const data = response.data;
    //console.log(JSON.stringify(data))
    setAllBooks(data)
}
let addToReading= async (num)=>{
    bookInfo.status.isReading=true
    await api.put(`/books/${num}`,bookInfo)
}
  useEffect(() =>{
    console.log("useEffect")
    getBookInfo();
    AllBooks();
},[] )
  return (
    
    <Container>
      <Header>
      <Navbar overrides={{ "Button27082": { onClick: () => { explore ? setExplore(false) : setExplore(true); } }, "Button27078":{onClick:() =>{navigateHome()}}}}/>

      </Header>
      <BottomContainer>
        <SuperContainer>
                <NewContainer>
                <BookDetails>
                    <HeroBookImage overrides={{"Rectangle 14":{src:bookInfo.image},"Concise Inorganic Chemistry":{children:bookInfo.title},"By J D Lee":{children:bookInfo.author},"Category: Chemistry":{children:bookInfo.category},"4.5":{children:bookInfo.rating},"830 reviews":{children:bookInfo.numberOfRatings},"Button":{onClick:() => {navigateHome();addToReading(bookInfo.id)}}}}/>
                </BookDetails>

            <BookDescription>
                <HeroBodyContent />
            </BookDescription>
            <AuthorDescription>
                <MainBody />
            </AuthorDescription>
        </NewContainer>
        <NewContainer>
        
            <SuggestionHeader>
                  <p>Your Batchmates Also Read</p>
            </SuggestionHeader>
            <SuggestionComponent>
              <Suggested/>
              <Suggested/>
              <Suggested/>
              <Suggested/>
              
            </SuggestionComponent>
            <SuggestionHeader>
                  <a href=''><p style={{color:"#FF725E"}}>See More</p></a>
            </SuggestionHeader>
            
        </NewContainer>
      </SuperContainer>
      <BooksFollowedByAuthor>
        <AuthorFollowedHeader>
          <Typography variant='subtitle2' color="#171717">
            Books by JD Lee
          </Typography>
          <Typography variant='body2' color="#FF725E">
            see more
          </Typography>
        </AuthorFollowedHeader>
        <FollowedAuthorsBooks>
          <HeroCard />
          <HeroCard />
          <HeroCard />
        </FollowedAuthorsBooks>
      </BooksFollowedByAuthor>
      <ReviewsFromUsersYouFollow>
        <AuthorFollowedHeader>
          <Typography variant='subtitle2' color="#171717">
            Reviews of People you follow
          </Typography>
          <Typography variant='body2' color="#FF725E">
            see more
          </Typography>
        </AuthorFollowedHeader>
        <UsersYouFollowReviews>
          <FollowersReviews />
        </UsersYouFollowReviews>
      </ReviewsFromUsersYouFollow>
      <OtherReviewsHeader>
        <Typography variant='subtitle2' color="#171717">
          Other reviews
        </Typography>
        <Typography variant='body2' color="#FF725E">
          see more
        </Typography>
      </OtherReviewsHeader>
      <Reviews>
        <OtherReviews />
        <OtherReviews overrides={{ "Radha": { children: "Mira", } }} />
        <OtherReviews overrides={{ "Radha": { children: "Mike", } }} />
        <OtherReviews overrides={{ "Radha": { children: "Ben", } }} />
        <OtherReviews overrides={{ "Radha": { children: "Azeem", } }} />
      </Reviews>
      <Recommendations>
        <AuthorFollowedHeader>
          <Typography variant='subtitle2' color="#171717">
            Recommendations
          </Typography>
          <Typography variant='body2' color="#FF725E">
            see more
          </Typography>
        </AuthorFollowedHeader>
        <RecommendationsBooks>
          {/* <RecommendatedBooks overrides={{ "Biology": { children: "Basic Physics", }, }}/>
          <RecommendatedBooks overrides={{ "Biology": { children: "Bio Organic Chemistry", }, }}/>
          <RecommendatedBooks overrides={{ "Biology": { children: "Crystal Chemistry", }, }}/>
          <RecommendatedBooks /> */}
          {allBooks.filter((book) => book?.status?.isRecommended).map((book) =>{
            return(
             <Organismscardrecommendations overrides={{"Rectangle 18":{src:book.image},"Biology":{children:book.title},
             "By SergeyVasutin":{children:book.author},"Category: Chemistry":{children:book.category},"530 ratings":{children:book.numberOfRatings},"3.5":{children:book.rating}}}/>
          )})}
        </RecommendationsBooks>
      </Recommendations>
      </BottomContainer>
    </Container>
  )
}

export default Book