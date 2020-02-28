import React, { useCallback,useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, Button, styled } from '@material-ui/core';

import css from './style.module.css';
import ProfileContent from './profileContent';

const FullContainer = styled(Paper)({
    height: '92vh',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const ProfileLayout = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [validThru, setValidThru] = useState('');
    const [nameOwner, setNameOwner] = useState('');
    const [cvc, setCvc] = useState('');

    const getBgStyle = useMemo(() => {
        return css.main__bg;
    }, [])

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

    }, [])
    const handleCardNumberChange = useCallback((e) => {
        setCardNumber(e.target.value);
    }, [])
    const handleValidThruChange = useCallback((e) => {
        setValidThru(e.target.value);
    }, [])
    const handleNameOwnerChange = useCallback((e) => {
        setNameOwner(e.target.value);
    }, [])
    const handleCvcChange = useCallback((e) => {
        setCvc(e.target.value);
    }, [])

    return (
        <FullContainer elevation={1} data-testid={'page-profile'} className={getBgStyle}>
            <Grid item xs={6}>
                <ProfileContent 
                    cardNumber={cardNumber}
                    validThru={validThru}
                    nameOwner={nameOwner}
                    cvc={cvc}
                    handleSubmit={handleSubmit}
                    handleCardNumberChange={handleCardNumberChange}
                    handleValidThruChange={handleValidThruChange}
                    handleNameOwnerChange={handleNameOwnerChange}
                    handleCvcChange={handleCvcChange}
                />
            </Grid>
        </FullContainer>
    )
}

ProfileLayout.prototype = {
    cardNumber: PropTypes.string.isRequired,
    validThru: PropTypes.string.isRequired,
    nameOwner: PropTypes.string.isRequired,
    cvc: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func,
    handleCardNumberChange: PropTypes.func,
    handleValidThruChange: PropTypes.func,
    handleNameOwnerChange: PropTypes.func,
    handleCvcChange: PropTypes.func
};

export default ProfileLayout;