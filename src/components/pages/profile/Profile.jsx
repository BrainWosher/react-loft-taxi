import React, { useCallback,useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import ProfileContent from './profileContent';
import { onProfile } from '../../../dugs/profile';
import FullContainer from '../../common/layout/FullContainer';

const ProfileLayout = () => {
  const dispatch = useDispatch();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardName, setCardName] = useState('');
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = useCallback(e => {
      e.preventDefault();
      if (cardNumber.length || expiryDate.length || cardName.length || cvc.length) {
        dispatch(onProfile({ cardNumber: cardNumber, expiryDate, cardName, cvc }));
        return;
      }
      setError('Одно из полей пустое!');
    },
    [cardNumber, expiryDate, cardName, cvc],
  );
  const handleCardNumberChange = useCallback(e => {
    setCardNumber(e.target.value);
  }, []);
  const handleExpiryDateChange = useCallback(e => {
    setExpiryDate(e.target.value);
  }, []);
  const handleCardNameChange = useCallback(e => {
    setCardName(e.target.value);
  }, []);
  const handleCvcChange = useCallback(e => {
    setCvc(e.target.value);
  }, []);

  return (
    <FullContainer>
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
          error={error}
        />
      </Grid>
    </FullContainer>
  );
};

ProfileLayout.prototype = {
  cardNumber: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cvc: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  handleCardNumberChange: PropTypes.func,
  handleExpiryDateChange: PropTypes.func,
  handleCardNameChange: PropTypes.func,
  handleCvcChange: PropTypes.func,
};

export default ProfileLayout;