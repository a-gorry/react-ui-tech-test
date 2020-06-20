import React from 'react';
import { connect } from 'react-redux';

const KnowledgeBase = () => {
  return (
    <div className="placeholder">
      <h2>Knowledge Base</h2>
    </div>         
  );
};

const mapStateToProps = state => ({
  KnowledgeBase: state.KnowledgeBase
});

const mapDispatchToProps = {
  
};

const KnowledgeBaseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KnowledgeBase);

export default KnowledgeBaseContainer;