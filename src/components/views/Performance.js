import React from 'react';
import { connect } from 'react-redux';

const Performance = () => {
  return (
    <div className="placeholder">
      <h2>Performance</h2>
    </div>         
  );
};

const mapStateToProps = state => ({
  performance: state.performance
});

const mapDispatchToProps = {
  
};

const PerformanceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Performance);

export default PerformanceContainer;