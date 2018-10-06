import { ApolloClient, gql } from 'react-apollo';
import * as consts from './constants';

// By default, this client will send queries to the '/graphql' endpoint on the same host
const client = new ApolloClient();

const defaultQueryParameters = {
  makeId: 10,
  modelId: 100,
};

export const CAR_OF_WEEK_QUERY = gql`query {
  carofweek {
    id
    modelId
    review
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

export function requestCarOfWeekData(query = defaultQueryParameters) {
  return (dispatch) => {
    dispatch({
      type: consts.CAR_OF_WEEK_LOAD,
      payload: client.query({
        query: CAR_OF_WEEK_QUERY,
      })
    })
    .then(response => dispatch(
      {
        type: consts.CAR_LOAD,
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

export function receiveCarOfWeekDataError(request, response) {
  return {
    type: consts.IS_ERROR,
    request,
    response,
  };
}
