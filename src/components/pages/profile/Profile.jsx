import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, Box , Input, Button, FormControl,FormHelperText, FormLabel, Typography, styled } from '@material-ui/core';
import {MCLogo} from 'loft-taxi-mui-theme';

const PaperMainStyled = styled(Paper)({
    backgroundSize: 'cover',
    backgroundImage: 'url(./src/assets/login-background.jpg)'
});

const GridWrapperStyled = styled(Grid)({
    minHeight:'92vh'
});

const PaperStyled = styled(Paper)({
    padding: '74px 60px 76px 74px',
    marginTop: "48px",
    marginBottom: '48px'
});

const TypographyStyled = styled(Typography)({
    marginBottom: '40px'
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

class Profile extends React.Component { 
    static propTypes = {
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
    state = {cardNumber: '', validThru: '', nameOwner: '', cvc: ''};

    handleSubmit = event => {
        event.preventDefault();
        this.props.changePage('map');
    }
    handleCardNumberChange = event => {
        this.setState({cardNumber: event.target.value});
    }

    handleValidThruChange = event => {
        this.setState({validThru: event.target.value});
    }

    handleNameOwnerChange = event => {
        this.setState({nameOwner: event.target.value});
    }

    handleCvcChange = event => {
        this.setState({cvc: event.target.value});
    }

    render() {
        const {cardNumber, validThru, nameOwner, cvc} = this.state;
        return (
            <PaperMainStyled elevation={1} className="MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded">
                <GridWrapperStyled container direction="column"
                    justify="flex-start"
                    alignItems="center"
                    className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column MuiGrid-align-items-xs-center">
                    <Grid className="MuiGrid-root MuiGrid-item">
                        <PaperStyled elevation={1} className="MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded">
                            <Typography variant="h1" component="h1" className="MuiTypography-root MuiTypography-h4 MuiTypography-alignCenter">Profile</Typography >
                            <TypographyStyled align="center" className="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom MuiTypography-alignCenter">Способ оплаты</TypographyStyled >
                            <form onSubmit = {this.handleSubmit}>
                                <Grid className="MuiGrid-root MuiGrid-container MuiGrid-align-content-xs-center">
                                    <Grid className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <Grid className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4 MuiGrid-justify-xs-center">
                                            <Grid className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6">
                                                <GridStyled className="MuiPaper-root MuiPaper-elevation3 MuiCard-root MuiPaper-rounded">
                                                    <Box className="MuiBox-root">
                                                        <span></span>
                                                        <FormControlStyled className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                                            <FormLabel className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink Mui-required Mui-required">
                                                                Номер карты:
                                                            </FormLabel>
                                                            <Input
                                                                type="text"
                                                                name="cardNumber"
                                                                className=""
                                                                placeholder="0000 0000 0000 0000"
                                                                value = {cardNumber}
                                                                required
                                                                onChange = {this.handleCardNumberChange}
                                                            />
                                                            <FormHelperText className="MuiFormHelperText-root Mui-error Mui-required">
                                                                Это обязательное поле
                                                            </FormHelperText>
                                                        </FormControlStyled>
                                                        <FormControl className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth" format="MM/yy">
                                                            <FormLabel className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink Mui-required Mui-required">
                                                                Срок действия:
                                                            </FormLabel>
                                                            <Input
                                                                type="text"
                                                                name="validThru"
                                                                className=""
                                                                placeholder="02/20"
                                                                value = {validThru}
                                                                required
                                                                onChange = {this.handleValidThruChange}
                                                            />
                                                        </FormControl>
                                                    </Box>
                                                </GridStyled>

                                            </Grid>
                                            <Grid className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6">
                                                <GridStyled className="MuiPaper-root MuiPaper-elevation3 MuiCard-root MuiPaper-rounded">
                                                    <Box className="MuiBox-root">
                                                        <FormControlStyled className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                                            <FormLabel className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink Mui-required Mui-required">
                                                                Имя владельца:
                                                            </FormLabel>
                                                            <Input
                                                                type="text"
                                                                name="nameOwner"
                                                                className=""
                                                                placeholder="USER NAME"
                                                                value = {nameOwner}
                                                                onChange = {this.handleNameOwnerChange}
                                                            />
                                                            <FormHelperText className="MuiFormHelperText-root Mui-error Mui-required">
                                                                Это обязательное поле
                                                            </FormHelperText>
                                                        </FormControlStyled>
                                                        <FormControl className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                                            <FormLabel className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink Mui-required Mui-required">
                                                                CVC:
                                                            </FormLabel>
                                                            <Input
                                                                type="text"
                                                                name="cvc"
                                                                className=""
                                                                placeholder="CVC"
                                                                value = {cvc}
                                                                onChange = {this.handleCvcChange}
                                                            />
                                                        </FormControl>
                                                    </Box>
                                                </GridStyled>
                                            </Grid>
                                        </Grid>
                                        <Grid container justify="center" alignItems="center" className="MuiGrid-root">
                                            <ButtonStyled type="submit">Сохранить</ButtonStyled>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </form>
                        </PaperStyled>
                    </Grid>
                </GridWrapperStyled>
            </PaperMainStyled>
        );
    }
}

export default Profile;