import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search/Search';
import Profile from '../components/Profile/Profile';
import Repositories from '../components/Repositories/Repositories';
import Commits from '../components/Commits/Commits';
import { getProfile } from '../actions/user';
import Context from '../context';

import './app.scss';

const App = (props) => {
    const [ rep, setRep ] = useState('');
    const [ isCommitsOpen, setCommitsOpen ] = useState(false);

    return (
        <Context.Provider value={{ setCommitsOpen, setRep }}>
            <Search fetchProfile={props.getProfileAction} />
            {
                props.loading
                    ? 'Loading...'
                    : props.error === 'Not Found'
                        ? <p>Username not found. Try again</p>
                        : props.user.login && (
                            <Fragment>
                                <Profile user={props.user} />
                                {
                                    isCommitsOpen
                                        ? <Commits rep={rep} username={props.user.login} />
                                        : <Repositories repos={props.repos} setRep={setRep} />
                                }
                            </Fragment>
                        )
            }
        </Context.Provider>
    )
}

const mapStateToProps = store => {
    return {
        user: store.user,
        error: store.error,
        loading: store.loading,
        repos: store.repos
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      getProfileAction: (username) => dispatch(getProfile(username))
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)