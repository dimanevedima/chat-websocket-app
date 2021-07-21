import React from 'react';
import propTypes from 'prop-types';

const AddMessage = (props) => {
  let input;
  console.log(props);
   return (
     <section id="new-message">
        <input
          onKeyPress = { (e) => {
            if (e.key === 'Enter') {
             props.dispatch(input.value, 'Me');
            //  props.addMessage(input.value, 'Me');
              input.value =  '';
            }
          }}
          type = "text"
          ref = {(node) => {
            input = node
          }}>
          </input>
    </section>
   );
};

AddMessage.propTypes = {
  dispatch : propTypes.func.isRequired,
};


export default AddMessage;
