import React from 'react';
import { connect } from 'react-redux';

const Posts = () => {
    return (
      <div className="placeholder">
        <h2>Posts</h2>
      </div>         
    );
};

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = {
  
};

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

export default PostsContainer;