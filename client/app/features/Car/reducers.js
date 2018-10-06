import * as consts from './constants';

const initialState = {
  carofweek: null,
  list: [],
  error: '',
};

export default function CarReducer(state = initialState, action) {
  const cloneObj = Object.assign({}, state);

  switch (action.type) {
    case consts.CAR_OF_WEEK_LOAD_FULFILLED:
      cloneObj.carofweek = {
        ...cloneObj.carofweek,
        review: action.payload.data.carofweek.review,
      };
      console.log('CAR_OF_WEEK_LOAD_FULFILLED', cloneObj);
      break;
    case consts.CAR_LOAD_FULFILLED:
      cloneObj.carofweek = {
        ...cloneObj.carofweek,
        ...action.payload.data.car[0],
      };
      console.log('CAR_LOAD_FULFILLED', cloneObj);
      break;
    case consts.IS_ERROR:
      cloneObj.list = [];
      cloneObj.error = action.response;
      break;
    default:
      break;
  }

  return cloneObj;
}
