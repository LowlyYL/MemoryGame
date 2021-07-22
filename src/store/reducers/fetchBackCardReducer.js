const initialState = {
    url: 'https://i.picsum.photos/id/721/200/200.jpg?hmac=QLtStUqefglPXev8bwvDQ34SN-dSYO2_a299oUpbP7g'
}

function fetchBackImg() {
    return fetch('https://picsum.photos/200/200')
}

const GET_URL_BC = 'GET_URL_BC';

export function asyncGetUrlBC() {
    return function(dispatch) {
      return fetchBackImg().then(
        (data) => dispatch(newUrlBC(data.url)),
      );
    };
}

function newUrlBC(urlForApi) {
    return {
      type: GET_URL_BC,
      urlForApi,
    };
}

const fetchBCReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_URL_BC: {
            return {
                ...state,
                url: action.urlForApi,
            }
        }
        default: {
            return state
        }
    }
}

export default fetchBCReducer;