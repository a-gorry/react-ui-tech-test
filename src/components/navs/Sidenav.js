import React from 'react';
import { connect } from 'react-redux';
import { navigate, showNavToggle } from '../../redux/actions';

import {
  BurgerSpan,
  ViewNav,
  NavContainer,
  NavHeader,
  NavIcon,
  NavMenu,
  NavMenuHeader,
  NavMenuLinkList,
  StyledNavLink,
  NavMenuLink,
  NavHr,
  Span,
  ConvCount
} from '../styles/Sidenav.js';

function Sidenav(props) {

  function navigate(e){
    const nextView = e.currentTarget.getAttribute('data-name');
    props.navigate({currentView: nextView});
    props.showNavToggle({toggle: !props.showNav});
  }

  function navToggle(){
    props.showNavToggle({toggle: !props.showNav});
  }
  
  return (
    <nav>
      <NavContainer >
        <NavHeader>
          <ViewNav onClick={navToggle} toggle={props.showNav}><BurgerSpan toggle={props.showNav}/><BurgerSpan toggle={props.showNav}/><BurgerSpan toggle={props.showNav}/></ViewNav>
          <NavIcon src="img/buildings-icon.svg" alt="icon"/> <Span>{props.currentView}</Span>
        </NavHeader>
        <NavMenu toggle={props.showNav}>
          <NavMenuHeader>MENU</NavMenuHeader>
          <NavMenuLinkList>
            <li><StyledNavLink data-name="Dashboard" activeClassName='nav-menu-link-active' to="/dashboard" onClick={navigate}><NavMenuLink>Dashboard</NavMenuLink></StyledNavLink></li>
            <li><StyledNavLink data-name="Buildings" activeClassName='nav-menu-link-active' to="/buildings" onClick={navigate}><NavMenuLink>Buildings</NavMenuLink></StyledNavLink></li>
            <li><StyledNavLink data-name="Posts" activeClassName='nav-menu-link-active' to="/posts" onClick={navigate}><NavMenuLink>Posts</NavMenuLink></StyledNavLink></li>
            <li><StyledNavLink data-name="Conversations" activeClassName='nav-menu-link-active' to="/conversations" onClick={navigate}><NavMenuLink>Conversations<ConvCount>{props.conversations}</ConvCount></NavMenuLink></StyledNavLink></li>
            <li><StyledNavLink data-name="Amenities" activeClassName='nav-menu-link-active' to="/amenities" onClick={navigate}><NavMenuLink>Amenities</NavMenuLink></StyledNavLink></li>
            <li><StyledNavLink data-name="Tenants" activeClassName='nav-menu-link-active' to="/tenants" onClick={navigate}><NavMenuLink>Tenants</NavMenuLink></StyledNavLink></li>
            <li><StyledNavLink data-name="Performance" activeClassName='nav-menu-link-active' to="/performance" onClick={navigate}><NavMenuLink>Performance</NavMenuLink></StyledNavLink></li>
            <li><StyledNavLink data-name="Users" activeClassName='nav-menu-link-active' to="/users" onClick={navigate}><NavMenuLink>Users</NavMenuLink></StyledNavLink></li>
          </NavMenuLinkList>
        
        <NavHr></NavHr>
        
          <NavMenuHeader>SUPPORT</NavMenuHeader>
          <NavMenuLinkList>
            <li><StyledNavLink data-name="Help" activeClassName='nav-menu-link-active' to="/help" onClick={navigate}><NavMenuLink>Need Help?</NavMenuLink></StyledNavLink></li>
            <li><StyledNavLink data-name="Contact" activeClassName='nav-menu-link-active' to="/contact" onClick={navigate}><NavMenuLink>Contact Us</NavMenuLink></StyledNavLink></li>
            <li><StyledNavLink data-name="Knowledge" activeClassName='nav-menu-link-active' to="/knowledge" onClick={navigate}><NavMenuLink>Knowledge Base</NavMenuLink></StyledNavLink></li>
          </NavMenuLinkList>
        </NavMenu>
      </NavContainer>
    </nav>
  );
}

const mapStateToProps = state => ({
  currentView: state.navigate.currentView,
  conversations: state.conversations.count,
  showNav: state.showNav.toggle
});

const mapDispatchToProps = {
  navigate,
  showNavToggle
};

const sidenavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidenav);

export default sidenavContainer;