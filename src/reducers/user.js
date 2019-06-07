import {
    GET_PROFILE_LOADING,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAIL,
    GET_REPOS_SUCCESS,
} from '../actions/user';

const initialState = {
    user: {},
    repos: [],
    loading: false,
    error: false,
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE_LOADING:
            return { loading: true }

        case GET_PROFILE_SUCCESS:
            const { name, login, avatar_url } = action.payload;

            return { 
                user: {
                    name,
                    login,
                    avatarUrl: avatar_url,
                },
                error: false,
                loading: false,
            }

        case GET_REPOS_SUCCESS:
            return { ...state, repos: action.payload }

        case GET_PROFILE_FAIL:
            return { user: {}, error: action.error, loading: false }

        default:
            return state
    }
}