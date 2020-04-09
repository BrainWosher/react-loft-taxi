import React, { memo } from 'react';
import { Grid, Input, Button, FormControl, InputLabel, Typography, styled,  Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import InputMask from "react-input-mask";

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
	color: 'rgba(0, 0, 0, 0.87)',
	boxShadow: 'none',
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
									{/* <InputMask mask="9999 9999 9999 9999" onChange={handleCardNumberChange} value={cardNumber} /> */}
									<Input
										type="text"
										name="cardNumber"                                        
										placeholder="0000 0000 0000 0000"
										value={cardNumber}
										required
										onChange={handleCardNumberChange}
									/>
								</FormControlStyled>
								<FormControl fullWidth format="MM/yy">
									<InputLabel required shrink animated>
											Срок действия:
									</InputLabel>
									<Input
										type="date"
										name="expiryDate"                                        
										placeholder="02/20"
										value={expiryDate}
										required
										onChange={handleExpiryDateChange}
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
										placeholder="USER NAME"
										value={cardName}
										required
										onChange={handleCardNameChange}
									/>
								</FormControlStyled>
								<FormControl fullWidth>
									<InputLabel required shrink animated>
										CVC:
									</InputLabel>
									<Input
										type="text"
										name="cvc"                                        
										placeholder="CVC"
										value={cvc}
										required
										onChange={handleCvcChange}
									/>
								</FormControl>
							</GridStyled>
						</Grid>
					</Grid>
					<Grid container justify="center" alignItems="center">
						<ButtonStyled type="submit" variant="contained" color="primary"  data-testid={'profile-submit'}>Сохранить</ButtonStyled>
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

export default memo(ProfileContent);