import  styled  from  'styled-components';

export const TopNavContainer  =  styled.div`
    width: 100%;
    height: 70px;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TopNavLeftContainer = styled.div` 
    padding-left: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const TopNavRightContainer = styled.div`
    padding-right: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const TopNavIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 40px;
    height: 40px;
    overflow: hidden;
`

export const TopNavIcon = styled.img`
    width: 18px;
    height: 18px;
    margin: 1px;
`

export const TopNavHeader = styled.div`
    margin-left: 16px;
    margin-right: 14px;
    color: #3e3f42;
    font-size: 16px;
`

export const TopNavArrowsContainer = styled.div`
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    height: 15px;
    justify-content: space-between;
`

export const TopNavArrowUp = styled.div`
    width: 0; 
    height: 0; 
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #9ea0a5;
`
  
export const TopNavArrowDown = styled.div`
    width: 0; 
    height: 0; 
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #9ea0a5;
`

export const TopNavSearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 38px;
    border-radius: 4px;
    border: 1px solid #e2e5ed;
    padding-left: 16px;
    @media (max-width: 800px) {
        display: none;
      }
`
export const TopNavSearchInput = styled.input`
  width: 268px;
  height: 22px;
  border: none;
  color: #9ea0a5;
  font-size: 14px;
  font-family: Roboto;
  :focus {
      outline: none;
  }
`

export const TopNavSearchButton = styled.div`
    display: flex;
    align-items: center;
    margin-right: 12px;
`

export const TopNavDivider = styled.div`
    height: 38px;
    margin-left: 30px;
    border-left: 1px solid #e2e5ed;
    @media (max-width: 800px) {
        display: none;
      }
`

export const TopNavLanguage = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #e2e5ed;
    height: 38px;
    width: 114px;
    margin-left: 30px;
    border-radius: 4px;
`

export const TopNavLanguageIcon = styled.img`
    width: 18px;
    height: 14px;
    margin: 12px;;
`

export const BuildingsMain = styled.div`
    width: 100%;
    max-height: 1200px;
    display: flex;
    overflow: hidden;
`

export const BuildingsCards = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1), 1px 0 0 0 rgba(0, 0, 0, 0.06);
    @media (max-width: 800px){
        width: 100%;
    }
`

export const BuildingsCardsHeader = styled.div`
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 28px;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const BuildingsCardsHeaderTitle = styled.div`
    color: #3e3f42;
    font-size: 18px;
    @media (max-width: 1010px) {
        font-size: 14px;
    }
`

export const BuildingsCardsHeaderViewType = styled.div`
    display: flex;
    align-items: center;
`

export const BuildingsCardsHeaderViewTypeImg = styled.img`
    width: 18px;
    height: 14px;
`

export const Divider = styled.div`
    height: 18px;
    margin-left: 12px;
    margin-right: 12px;
    border-left: 1px solid #eaedf3;
`

export const BuildingsCardsBody = styled.div`
    width: 100%;
    height: 80vh;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 30px;
    padding-left: 30px
`

export const BuildingsCard = styled.div`
    width: 46%;
    margin-bottom: 42px;
    @media (max-width: 450px){
        width: 100%;
    }
`

export const BuildingCardThumbnail = styled.img`
    width: 100%;
    border-radius: 4px;
    margin-bottom: 20px;
    @media (max-width: 1000px) {
        width: 80%;
        display:block;
        margin:auto;
        margin-bottom: 20px;
    }
`

export const BuildingsCardTitle = styled.div`
    font-size: 16px;
    color: #3e3f42;
    margin-bottom: 5px;
    line-height: 24px;
    @media (max-width: 1010px) {
        font-size: 14px;
    }
`

export const BuildingsCardAddress = styled.div`
    font-size: 14px;
    color: #9ea0a5;
    line-height: 24px;
`

export const BuildingsCardStatsContainer = styled.div`
    color: #9ea0a5;
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 18px;
    border-bottom: 1px solid #eaedf3;
    margin-bottom: 12px;
    @media (max-width: 1000px) {
        justify-content: space-between;
    }
`

export const BuildingsCardStatsUsers = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
    margin-right: 28px;
`

export const BuildingsCardStatsOffices = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
`

export const BuildingsCardStatsImg = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 12px;
    @media (max-width: 1080px) {
        width: 16px;
        height: 16px;
    }
`

export const BuildingsCardAmounts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BuildingsCardAmountsCopy = styled.div`
    color: #1665d8;
    font-size: 14px;
`

export const BuildingsCardAmountsAmount = styled.div`
    color: #3e3f42;
    font-size: 18px;
    @media (max-width: 1080px) {
        font-size: 14px;
    }
`