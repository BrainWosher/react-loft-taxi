import React from "react";
import InputMask from "react-input-mask";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  root: {}
}));
function TextMaskCustom(props) {
  const { inputRef, ...other } = props;
  const handleChange = e => {
    console.log("INPUT MASK !", e.target.value);
    other.onChange({
      name: e.target.name,
      value: e.target.value
    });
  };
  return (
    <InputMask
      {...other}
      onChange={handleChange}
      mask={"9999 9999 9999 9999"}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

function FormattedInput() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    textmask: "Enter card number"
  });

  const handleChange = obj => {
    console.log("PARENT", obj, obj.value);
    setValues({
      ...values,
      [obj.name]: obj.value
    });
  };

  return (
    <div className={classes.root}>
      <FormControl fullWidth>
        <InputLabel htmlFor="formatted-text-mask-input">Card number</InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
    </div>
  );
}
export default FormattedInput;