import { ApolloClient, gql } from 'react-apollo';
import * as consts from './constants';

// By default, this client will send queries to the '/graphql' endpoint on the same host
const client = new ApolloClient();

const defaultQueryParameters = {};

export const CAR_OF_WEEK_QUERY = gql`query {
  carofweek {
    id
    modelId
    review
  }
}`;

export const CAR_MAKES_QUERY = gql`query {
  makes {
    id
    makeId
    name
  }
}`;

export const CAR_QUERY = gql`query (
    $makeId: Int,
    $modelId: Int,
  ) {
    car(
      makeId: $makeId,
      modelId: $modelId,
    ) {
      id
      modelId
      makeId
      name
      price
      imageUrl
    }
  }
`;

export function receiveCarOfWeekDataError(request, response) {
  return {
    type: consts.IS_ERROR,
    request,
    response,
  };
}

export function requestCarOfWeekData(query = defaultQueryParameters) {
  return (dispatch) => {
    dispatch({
      type: consts.CAR_OF_WEEK_MODEL_LOAD,
      payload: client.query({
        query: CAR_OF_WEEK_QUERY,
      })
    })
      .then(response => dispatch(
        {
          type: consts.CAR_OF_WEEK_DETAIL_LOAD,
          payload: client.query({
            query: CAR_QUERY,
            variables: {
              modelId: response.value.data.carofweek.modelId,
            },
          })
        })
      )
      .catch(() => {
        dispatch(receiveCarOfWeekDataError(query, 'Something went wrong'));
      });
  };
}

export const receiveMakesDataError = (request, response) => ({
  type: consts.IS_ERROR,
  request,
  response,
});

export const requestMakesData = () => dispatch => dispatch({
  type: consts.CAR_MAKES_LOAD,
  payload: client.query({
    query: CAR_MAKES_QUERY,
  })
}).catch(() => dispatch(receiveMakesDataError(null, 'Something went wrong')));

export const receiveModelDataError = (request, response) => ({
  type: consts.IS_ERROR,
  request,
  response,
});

export const requestModelData = makeId => dispatch => dispatch({
  type: consts.CAR_MODELS_LOAD,
  payload: client.query({
    query: CAR_QUERY,
    variables: {
      makeId,
    },
  })
}).catch(() => dispatch(receiveModelDataError(null, 'Something went wrong')));

export const receiveCarDetailDataError = (request, response) => ({
  type: consts.IS_ERROR,
  request,
  response,
});

export const requestCarDetailData = (query = defaultQueryParameters) => dispatch => dispatch({
  type: consts.CAR_DETAIL_LOAD,
  payload: client.query({
    query: CAR_QUERY,
    variables: query,
  })
}).catch(() => dispatch(receiveCarDetailDataError(null, 'Something went wrong')));
