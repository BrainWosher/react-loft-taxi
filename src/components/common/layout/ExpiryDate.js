import React, {useState} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

function ExpiryDate(props) {
  const [expiryDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        clearable
        value={expiryDate}
        placeholder="10/10/2018"
        onChange={date => handleDateChange(date)}
        minDate={new Date()}
        format="MM/dd/yyyy"
      />
    </MuiPickersUtilsProvider>
  );
}
export default ExpiryDate;