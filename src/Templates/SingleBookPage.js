import React from 'react'
import Navbar from 'ui-bookdiscoveryv2-42/dist/NavBarNewv1';
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
import { useState } from 'react';

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",

})

const BottomContainer = styled("div")({
    marginLeft:"250px"
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

const Book = () => {
    let navigate = useNavigate()
  
let seeAllResults = () => {
navigate('/searchresults')
}
let navigateHome = () => {
    navigate('/')
}
let [explore, setExplore]= useState(false)
  return (
    <Container>
      <Header>
      <Navbar overrides={{ "Button27082": { onClick: () => { explore ? setExplore(false) : setExplore(true); } }, "Button27078":{onClick:() =>{navigateHome()}}}}/>

      </Header>
      <BottomContainer>
      <BookDetails>
        <HeroBookImage />
      </BookDetails>
      <BookDescription>
        <HeroBodyContent />
      </BookDescription>
      <AuthorDescription>
        <MainBody />
      </AuthorDescription>
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
          <RecommendatedBooks overrides={{ "Biology": { children: "Basic Physics", }, }}/>
          <RecommendatedBooks overrides={{ "Biology": { children: "Bio Organic Chemistry", }, }}/>
          <RecommendatedBooks overrides={{ "Biology": { children: "Crystal Chemistry", }, }}/>
          <RecommendatedBooks />
        </RecommendationsBooks>
      </Recommendations>
      </BottomContainer>
    </Container>
  )
}

export default Book