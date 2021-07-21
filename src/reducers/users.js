import {ADD_USER, USER_LIST} from '../constants/ActionTypes';

const users = (state = [], action) => {
    switch (action.type) {
      case ADD_USER:
        return state.concat([
          { name: action.name, id: action.id }
        ]);
      case USER_LIST:
        return action.users;
      default:
        return state;
    }
};

export default users;
