import React from 'react';
import { connect } from 'react-redux';
import { conversationCount } from '../../redux/actions';

const Conversations = (props) => {
  const increaseCount = () => {
    let newCount = (props.conversations +1) > 9 ? 9 : (props.conversations +1);
    props.conversationCount({count: newCount});
  }
  const decreaseCount = () => {
    let newCount = (props.conversations -1) < 1 ? 1 : (props.conversations -1);
    props.conversationCount({count: newCount});
  }

    return (
        <div className="placeholder">
          <h2>{props.conversations} Conversations</h2>
          <div>
            <button className="btn" onClick={decreaseCount} style={{width:"60px",height:"60px", margin:"10px", borderRadius:"4px"}}> - </button>
            <button className="btn" onClick={increaseCount} style={{width:"60px",height:"60px", margin:"10px", borderRadius:"4px"}}> + </button>
          </div>
        </div>        
    );
};

const mapStateToProps = state => ({
  conversations: state.conversations.count
});

const mapDispatchToProps = {
  conversationCount
};

const ConversationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversations);

export default ConversationsContainer;