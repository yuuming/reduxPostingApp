import { FETCH_POSTS, FETCH_POST } from "../actions";
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
    return { ...state, };
    case FETCH_POSTS:
    // const post = action.payload.data;
    // const newState = { ...state };
    // newState[post.id] = post;
    // return newState;
    return { ...state, [action.payload.data.id]: action.payload.data };


      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
