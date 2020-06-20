import  styled  from  'styled-components';
import { NavLink } from 'react-router-dom';

export const BurgerSpan = styled.span`
    display: block;
    width: 31px;
    height: 3px;
    position: relative;
    background: #fff;
    border-radius: 7px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
    ${props => {
        if(props.toggle){
            return`
                transform: rotate(45deg) ;

                :nth-last-child(2){
                    opacity: 0;
                    transform: rotate(0deg) scale(0.2, 0.2);
                }
                :nth-last-child(1){
                    transform: rotate(-45deg) ;
                }
            `
        }
    }}
`

export const ViewNav = styled.div`
    display: none;
    @media (max-width: 1010px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 31px;
        height: 19px;
        margin-right: 28px;
    }
`

export const NavContainer = styled.div`
    background-color: #252529;
    width: 270px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    font-size: 14px;
    line-height: 22px;
    color: #fff;
    @media (max-width: 1010px) {
        width: 100vw;
        height: 70px;
    }
`

export const Span = styled.span`
    margin-left: 12px;
    line-height: 24px;
    font-size: 16px;
`

export const NavHeader = styled.div`
    background-color: #252529;
    height: 70px;
    display: flex;
    padding-left: 30px;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid #2e2e33;
    @media (max-width: 1010px) {
        width: 100vw;
    }
`
  
export const NavIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    background-color: rgba(255, 255, 255, 0);
`
  
export const NavMenu = styled.div`
    background-color: #252529;
    padding-left: 16px;
    @media (max-width: 1010px) {
        position: absolute;
        top: 70px;
        width: 270px;
        height: 0px;
        overflow: hidden;
        ${props => {
            if(props.toggle){
                return `
                    height: 100%;
                    width: 270px;
                ` 
            }
        }}
    }
`

export const NavMenuHeader = styled.div`
    color: #9ea0a5;
    font-size: 12px;
    margin-top: 24px;
    padding-left: 15px;
`
  
export const NavMenuLinkList = styled.ul`
    padding-left: 0;
    list-style: none;
`
  
export const NavMenuLink = styled.div`
    padding-left: 16px;
    height: 40px;
    width: 242px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position:relative;
    z-index: 1;
    cursor: pointer;
    :after {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 100%;
        height: 1px;
        content: '.';
        color: transparent;
        background: #1665d8;
        visibility: none;
        opacity: 0;
        z-index: -1;
        transition: all .5s;
        border-radius: 4px;
    }
    :hover:after {
        opacity: 1;
        visibility: visible;
        height: 100%;
    }
`

export const StyledNavLink = styled(NavLink)`
    &.nav-menu-link-active{
        ${NavMenuLink}{
            background-color: #1665d8;
            border-radius: 4px;
        }
    }
`

export const NavHr = styled.div`
    border-bottom: 1px solid #2e2e33;
    width: 210px;
    margin: auto;
    margin-top: 0;
    margin-bottom: 0;
`

export const ConvCount = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    color: #3e3f42;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`