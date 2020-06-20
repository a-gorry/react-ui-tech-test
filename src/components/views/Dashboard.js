import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
  return (
    <div className="placeholder">
      <h2>Dashboard</h2>
    </div>         
  );
};

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = {
  
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;