import * as consts from './constants';

const initialState = {
  carofweek: {}, // detail of car of the week
  makes: [], // car makes data
  list: [], // list of cars under specific makes
  detail: {}, // car details for specific make and model,
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
      break;
    case consts.CAR_LOAD_FULFILLED:
      cloneObj.carofweek = {
        ...cloneObj.carofweek,
        ...action.payload.data.car[0],
      };
      break;
    case consts.CAR_MAKES_LOAD_FULFILLED:
      cloneObj.makes = action.payload.data.makes;
      break;
    case consts.CAR_LIST_BY_MAKES_LOAD_FULFILLED:
      cloneObj.list = action.payload.data.car;
      break;
    case consts.IS_ERROR:
      // todo - error handling
      break;
    default:
      break;
  }

  return cloneObj;
}
