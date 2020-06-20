import React from 'react';
import { connect } from 'react-redux';

const Tenants = () => {
  return (
    <div className="placeholder">
      <h2>Tenants</h2>
    </div>         
  );
};

const mapStateToProps = state => ({
  tenants: state.tenants
});

const mapDispatchToProps = {
  
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tenants);

export default HomeContainer;