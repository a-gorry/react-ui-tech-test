import React from 'react';
import { connect } from 'react-redux';
import { loadBuildings } from '../../redux/actions';
import '../styles/Map.css'
import GoogleMap from './Map';
import Loader from './Loader';

import  {  
  TopNavContainer,
  TopNavLeftContainer,
  TopNavIconsContainer,
  TopNavIcon,
  TopNavHeader,
  TopNavArrowsContainer,
  TopNavArrowUp,
  TopNavArrowDown,
  TopNavRightContainer,
  TopNavSearchContainer,
  TopNavSearchInput,
  TopNavSearchButton,
  TopNavDivider,
  TopNavLanguage,
  TopNavLanguageIcon,
  BuildingsMain,
  BuildingsCards,
  BuildingsCardsHeader,
  BuildingsCardsHeaderTitle,
  BuildingsCardsHeaderViewType,
  BuildingsCardsHeaderViewTypeImg,
  Divider,
  BuildingsCardsBody,
  BuildingsCard,
  BuildingCardThumbnail,
  BuildingsCardTitle,
  BuildingsCardAddress,
  BuildingsCardStatsContainer,
  BuildingsCardStatsUsers,
  BuildingsCardStatsImg,
  BuildingsCardStatsOffices,
  BuildingsCardAmounts,
  BuildingsCardAmountsCopy,
  BuildingsCardAmountsAmount,

}  from  "../styles/Buildings";

function Topnav() {
  return (
    <TopNavContainer>
      <TopNavLeftContainer>

        <TopNavIconsContainer>
          <TopNavIcon alt="Building icon" src="/img/building-icon-1.png"/>
          <TopNavIcon alt="Building icon" src="/img/building-icon-2.png"/>
          <TopNavIcon alt="Building icon" src="/img/building-icon-3.png"/>
          <TopNavIcon alt="Building icon" src="/img/building-icon-4.png"/>
        </TopNavIconsContainer>

        <TopNavHeader>
          All Buildings
        </TopNavHeader>

        <TopNavArrowsContainer>
          <TopNavArrowUp/>
          <TopNavArrowDown/>
        </TopNavArrowsContainer>

      </TopNavLeftContainer>
      <TopNavRightContainer>

        <TopNavSearchContainer>
          <TopNavSearchInput type="text" placeholder="Type to search..." name="search"/>
          <TopNavSearchButton>
            <img src="/img/search.svg" alt="search"/>
          </TopNavSearchButton>
        </TopNavSearchContainer>

        <TopNavDivider/>

        <TopNavLanguage>
          <TopNavLanguageIcon src="/img/uk-flag.png" alt="Unitied Kingdom"/>ENG

          <TopNavArrowsContainer>
            <TopNavArrowUp/>
            <TopNavArrowDown/>
          </TopNavArrowsContainer>
        </TopNavLanguage>

      </TopNavRightContainer>
    </TopNavContainer>
  );
}

class Buildings extends React.Component {
  callApi = async () => {
    const response = await fetch('/api/buildings');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  componentDidMount(){
    if(!this.props.buildings.list){
      const time = (Math.floor(Math.random() * 4) + 1)*1000;  
      setTimeout(()=>{
        this.callApi()
          .then(res => {
            this.props.loadBuildings({list: res})
          })
          .catch(err => console.log(err));
      }, time)
    }
  }

  render(){
    if(!this.props.buildings.list){
      return(
        <main>
          <Loader/>
        </main>
      )
    }else{
    return (
      <main>
        <Topnav />
        <BuildingsMain>
          <BuildingsCards>
            <BuildingsCardsHeader>
              <BuildingsCardsHeaderTitle>45 Buildings</BuildingsCardsHeaderTitle>
              <BuildingsCardsHeaderViewType>
                <BuildingsCardsHeaderViewTypeImg alt="list view" src="/img/list-view.png"/>
                <Divider/>
                <BuildingsCardsHeaderViewTypeImg alt="tile view" src="/img/tile-view.png"/>
              </BuildingsCardsHeaderViewType>
            </BuildingsCardsHeader>
            <BuildingsCardsBody>

              {
                this.props.buildings.list.map((building,i)=>{
                  return(
                    <BuildingsCard key={i}>
                      <BuildingCardThumbnail alt="building 1" src={building.thumbnail}/>
                      <BuildingsCardTitle>{building.title}</BuildingsCardTitle>
                      <BuildingsCardAddress>{building.address_line_1}</BuildingsCardAddress>
                      <BuildingsCardAddress>{building.address_line_2}</BuildingsCardAddress>
                      <BuildingsCardStatsContainer>
                        <BuildingsCardStatsUsers><BuildingsCardStatsImg alt="users" src="/img/users-icon.png"/>{building.users} Users</BuildingsCardStatsUsers>
                        <BuildingsCardStatsOffices><BuildingsCardStatsImg alt="Offices" src="/img/offices-icon.png"/>{building.offices} Offices</BuildingsCardStatsOffices>
                      </BuildingsCardStatsContainer>
                      <BuildingsCardAmounts>
                        <BuildingsCardAmountsCopy>For Rent</BuildingsCardAmountsCopy><BuildingsCardAmountsAmount>£{building.rent}/sqm</BuildingsCardAmountsAmount>
                      </BuildingsCardAmounts>
                    </BuildingsCard>
                  )
                })
              }
            </BuildingsCardsBody>
          </BuildingsCards>
          <div className="buildings-map">
            <GoogleMap buildings={this.props.buildings.list}/>
          </div>
        </BuildingsMain>
      </main>
    )};
  }
}

const mapStateToProps = state => ({
  buildings: state.buildings
});

const mapDispatchToProps = {
  loadBuildings
};

const BuildingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Buildings);

export default BuildingsContainer;