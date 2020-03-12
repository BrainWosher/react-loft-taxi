import React from 'react';
import { Grid, Input, Button, FormControl, InputLabel, Typography, styled,  Card } from '@material-ui/core';
import PropTypes from 'prop-types';

const TypographyStyled = styled(Typography)({
    marginBottom: '40px'
});

const ProfileCard = styled(Card)({
    padding: '44px 60px',
    boxSizing: 'border-box',
});

const GridStyled = styled(Grid)({
    padding: '29px 37px 30px 29px',
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.15)'
});

const FormControlStyled = styled(FormControl)({
    marginBottom:'32px'
});

const ButtonStyled = styled(Button)({
    padding: '9px 50px',
    borderRadius: '4px',
    backgroundColor: '#ffc617',
    fontSize: '21px',
    fontWeight: 400,
    marginTop: '40px'
});

const ProfileContent = ({
    cardNumber,
    expiryDate,
    cardName,
    cvc,
    handleSubmit,
    handleCardNumberChange,
    handleExpiryDateChange,
    handleCardNameChange,
    handleCvcChange
}) => {
    return( 
        <ProfileCard>
            <Typography variant="h3" component="h1" align="center"  >Profile</Typography >
            <TypographyStyled align="center">Способ оплаты</TypographyStyled >
            <form onSubmit = {handleSubmit}>
                <Grid item xs={12}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <GridStyled elevation={3}>
                                <span></span>
                                <FormControlStyled fullWidth>
                                    <InputLabel required shrink animated>
                                        Номер карты:
                                    </InputLabel>
                                    <Input
                                        type="text"
                                        name="cardNumber"
                                        className=""
                                        placeholder="0000 0000 0000 0000"
                                        value = {cardNumber}
                                        required
                                        onChange = {handleCardNumberChange}
                                    />
                                </FormControlStyled>
                                <FormControl fullWidth format="MM/yy">
                                    <InputLabel required shrink animated>
                                        Срок действия:
                                    </InputLabel>
                                    <Input
                                        type="text"
                                        name="expiryDate"
                                        className=""
                                        placeholder="02/20"
                                        value = {expiryDate}
                                        required
                                        onChange = {handleExpiryDateChange}
                                    />
                                </FormControl>
                            </GridStyled>
                        </Grid>
                        <Grid item xs={6}>
                            <GridStyled elevation={3}>
                                <FormControlStyled fullWidth>
                                    <InputLabel required shrink animated>
                                        Имя владельца:
                                    </InputLabel>
                                    <Input
                                        type="text"
                                        name="cardName"
                                        className=""
                                        placeholder="USER NAME"
                                        value = {cardName}
                                        onChange = {handleCardNameChange}
                                    />
                                </FormControlStyled>
                                <FormControl fullWidth>
                                    <InputLabel required shrink animated>
                                        CVC:
                                    </InputLabel>
                                    <Input
                                        type="text"
                                        name="cvc"
                                        className=""
                                        placeholder="CVC"
                                        value = {cvc}
                                        onChange = {handleCvcChange}
                                    />
                                </FormControl>
                            </GridStyled>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                        <ButtonStyled type="submit"  data-testid={'profile-submit'}>Сохранить</ButtonStyled>
                    </Grid>
                </Grid>
            </form>
        </ProfileCard>
    )
}

ProfileContent.prototype = {
    cardNumber: PropTypes.number.isRequired,
    expiryDate: PropTypes.number.isRequired,
    cardName: PropTypes.string.isRequired,
    cvc: PropTypes.number.isRequired,
    handleCardNumberChange: PropTypes.func,
    handleExpiryDateChange: PropTypes.func,
    handleCardNameChange: PropTypes.func,
    handleCvcChange: PropTypes.func
}

export default ProfileContent;