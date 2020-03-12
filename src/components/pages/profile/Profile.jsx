import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, styled } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import css from './style.module.css';
import ProfileContent from './profileContent';
import { add } from '../../../dugs/profile';

const FullContainer = styled(Paper)({
    height: '92vh',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const ProfileLayout = () => {
    const dispatch = useDispatch();
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cardName, setCardName] = useState('');
    const [cvc, setCvc] = useState('');

    const getBgStyle = useMemo(() => {
        return css.main__bg;
    }, [])

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch(add({cardNumber: cardNumber, expiryDate, cardName, cvc}))
    }, [cardNumber, expiryDate, cardName, cvc])
    const handleCardNumberChange = useCallback((e) => {
        setCardNumber(e.target.value);
    }, [])
    const handleExpiryDateChange = useCallback((e) => {
        setExpiryDate(e.target.value);
    }, [])
    const handleCardNameChange = useCallback((e) => {
        setCardName(e.target.value);
    }, [])
    const handleCvcChange = useCallback((e) => {
        setCvc(e.target.value);
    }, [])

    return (
        <FullContainer elevation={1} data-testid={'page-profile'} className={getBgStyle}>
            <Grid item xs={6}>
                <ProfileContent 
                    cardNumber={cardNumber}
                    expiryDate={expiryDate}
                    cardName={cardName}
                    cvc={cvc}
                    handleSubmit={handleSubmit}
                    handleCardNumberChange={handleCardNumberChange}
                    handleExpiryDateChange={handleExpiryDateChange}
                    handleCardNameChange={handleCardNameChange}
                    handleCvcChange={handleCvcChange}
                />
            </Grid>
        </FullContainer>
    )
}

ProfileLayout.prototype = {
    cardNumber: PropTypes.string.isRequired,
    expiryDate: PropTypes.string.isRequired,
    cardName: PropTypes.string.isRequired,
    cvc: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func,
    handleCardNumberChange: PropTypes.func,
    handleExpiryDateChange: PropTypes.func,
    handleCardNameChange: PropTypes.func,
    handleCvcChange: PropTypes.func
};

export default ProfileLayout;