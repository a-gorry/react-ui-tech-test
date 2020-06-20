import React from 'react';
import { connect } from 'react-redux';

const Amenities = () => {
    return (
        <div className="placeholder">
          <h2>Amenities</h2>
        </div>        
    );
};

const mapStateToProps = state => ({
  Amenities: state.Amenities
});

const mapDispatchToProps = {
  
};

const AmenitiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Amenities);

export default AmenitiesContainer;