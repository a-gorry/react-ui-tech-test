import React from 'react';
import { connect } from 'react-redux';

const NeedHelp = () => {
  return (
    <div className="placeholder">
      <h2>Need Help?</h2>
    </div>         
  );
};

const mapStateToProps = state => ({
  needHelp: state.needHelp
});

const mapDispatchToProps = {
  
};

const NeedHelpContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NeedHelp);

export default NeedHelpContainer;