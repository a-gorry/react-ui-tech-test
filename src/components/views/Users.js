import React from 'react';
import { connect } from 'react-redux';

const Users = () => {
  return (
    <div className="placeholder">
      <h2>Users</h2>
    </div>         
  );
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = {
  
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersContainer;