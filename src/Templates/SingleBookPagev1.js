//import Header from 'ui-component-bookdiscovery-42/dist/Header';
import CardByAuthor from 'ui-component-bookdiscovery-42/dist/Organismscardbyauthor';
import CardReview from 'ui-component-bookdiscovery-42/dist/Organismscardreview1';
import MoreReviews from 'ui-component-bookdiscovery-42/dist/Organismscardreview2';
import Recommendation from 'ui-component-bookdiscovery-42/dist/Organismscardrecommendations';
import Suggestion from 'ui-component-bookdiscovery-42/dist/Organismscardsuggested';
import { styled } from '@mui/styles';
import HeroBookImage from 'ui-bookdiscoveryv2-42/dist/HeroCard70v1'
import HeroBodyContent from 'ui-bookdiscoveryv2-42/dist/HeroBodyContent'
import MainBody from 'ui-bookdiscoveryv2-42/dist/MainBody'
import Header from "ui-bookdiscoveryv2-42/dist/NavBarNewv1"

const ComponentBody = styled('div')({
  display:"flex",
  flexDirection:"row",
  marginLeft:100,
  gap:50
});

const ComponentHeader = styled('div')({
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-around",
  marginRight:920,
  marginLeft:100
});

const RowTemplate = styled('div')({
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-around"
});

const ColumnTemplate = styled('div')({
  display:"flex",
  flexDirection:"column",
  gap:50
});

const BookDetails = styled("div")({
    width: "610px",
    height: "301px",
    position: "relative",
    top: "124px",
    left: "100px",
    display: "flex"
  })

const CustomComponent = styled('div')({
  display:"flex",
  flexDirection:"column",
  gap:20
});

const ReviewsComponent = styled('div')({
  display:"flex",
  flexDirection:"column",
  marginLeft:100,
  gap:30
});

const RecommendationsBody = styled('div')({
  display:"flex",
  flexDirection:"row",
  marginLeft:100,
  gap:30,
  marginRight:100,
  justifyContent:"space-between"
});

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
const RecommendationsHeader = styled('div')({
  display:"flex",
  flexDirection:"row",
  marginLeft:100,
  marginRight:100,
  gap:30,
  justifyContent:"space-between"
});

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

function App() {
  var str= 'See more >';
  return (
    <div>
      <Header/>
      <ColumnTemplate>
        <ColumnTemplate>
        <RowTemplate>
        <CustomComponent>
        <BookDetails>
            <HeroBookImage />
        </BookDetails>

      <BookDescription>
        <HeroBodyContent />
      </BookDescription>
      <AuthorDescription>
        <MainBody />
      </AuthorDescription>
        </CustomComponent>
            <CustomComponent>
            <SuggestionHeader>
                  <p>Your Batchmates Also Read</p>
            </SuggestionHeader>
            <SuggestionComponent>
              <Suggestion/>
              <Suggestion/>
              <Suggestion/>
              <Suggestion/>
            </SuggestionComponent>
            <SuggestionHeader>
                  <a href=''><p style={{color:"#FF725E"}}>{str}</p></a>
            </SuggestionHeader>
            </CustomComponent>
            </RowTemplate>      
        </ColumnTemplate>
              <ColumnTemplate>
                <CustomComponent>
                  <ComponentHeader>
                      <p>Books by JD Lee</p>
                      <a href=''><p style={{color:"#FF725E"}}>{str}</p></a>
                  </ComponentHeader>
                  <ComponentBody>
                    <CardByAuthor/>
                    <CardByAuthor/>
                    <CardByAuthor/>
                  </ComponentBody>  
                </CustomComponent>
                
                <CustomComponent>
                  <ComponentHeader>
                      <p>Reviews of People You are Following</p>
                      <a href=''><p style={{color:"#FF725E"}}>{str}</p></a>
                  </ComponentHeader>
                  <ComponentBody>
                    <CardReview/>
                    <CardReview/>
                    <CardReview/>
                  </ComponentBody>  
                </CustomComponent>

                <CustomComponent>
                  <ComponentHeader>
                        <p>Other Reviews</p>
                        <a href=''><p style={{color:"#FF725E"}}>{str}</p></a>
                  </ComponentHeader>
                  <ReviewsComponent>
                    <MoreReviews/>
                    <MoreReviews/>
                    <MoreReviews/>
                  </ReviewsComponent>
                </CustomComponent>

              </ColumnTemplate>

      <br/>
      <br/>
      <CustomComponent>
          <RecommendationsHeader>
                <p>Recommendations</p>
                <a href=''><p style={{color:"#FF725E"}}>{str}</p></a>
          </RecommendationsHeader>
          <RecommendationsBody>
            <Recommendation/>
            <Recommendation/>
            <Recommendation/>
            <Recommendation/>
          </RecommendationsBody>
        </CustomComponent>

      </ColumnTemplate>
    </div>
  );
}

export default App;
