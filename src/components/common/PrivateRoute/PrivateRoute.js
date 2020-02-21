
import React, {memo, useCallback, useContext} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
// import { getIsAuthSelector } from 'modules/auth';
import {Context} from '../../../Context/context';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({component: C, ...props}) => {
    const {isLoggedIn} = useContext(Context);
    // const isLoggin = useSelector(store => store.user.isLogged);

    const getComponent = useCallback((...a) => {
        if (isLoggedIn) {
            return <C {...props} />;
        }

        return <Redirect to={'login'} />
    }, [props]);
    return (
        <Route {...props} render={getComponent} />
    );
};

export default memo(PrivateRoute);