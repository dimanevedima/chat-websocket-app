import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AddMessageComponent from '../components/AddMessage';
import {addMessage} from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatch : (message, author) => {
    dispatch(addMessage(message, author))
  }
})

const mapDispatchToProps2 = dispatch => {
  //const addM = bindActionCreators(addMessage, dispatch);
  return {
    dispatch: bindActionCreators(addMessage, dispatch)
  }
}

//export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent);
export const AddMessage = connect(() => ({}), mapDispatchToProps2)(AddMessageComponent);
//export const AddMessage = connect(() => ({}), {addMessage})(AddMessageComponent);
