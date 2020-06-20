import React from 'react';
import { connect } from 'react-redux';

const Contact = () => { 
  return (
    <div className="placeholder">
      <h2>Contact Us</h2>
    </div>         
  );
}

const mapStateToProps = state => ({
  contact: state.contact
});

const mapDispatchToProps = {
  
};

const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);

export default ContactContainer;