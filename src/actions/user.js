import API from '../api';

export const GET_PROFILE_LOADING = 'GET_PROFILE_LOADING'
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS'
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL'
export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS'

export function getProfile(username) {
    return function(dispatch) {
        dispatch({
            type: GET_PROFILE_LOADING,
        })

        API.fetchProfile(username)
            .then(data => {
                if (data.message === 'Not Found') {
                    dispatch({
                        type: GET_PROFILE_FAIL,
                        error: data.message,
                    })
                } else {
                    dispatch({
                        type: GET_PROFILE_SUCCESS,
                        payload: data,
                    })
                    API.fetchRepos(username).then(repos => {
                        dispatch({
                            type: GET_REPOS_SUCCESS,
                            payload: repos,
                        })
                    })
                }
            })
            .catch(error => console.warn('Error: ' + error))
    }
}