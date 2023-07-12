import React, {useEffect} from "react";
import { IMaskInput } from "react-imask";
import { Typography} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import {PlaceholderCustom, Wrapper} from './styled'
import { FC } from "react";
import {localization} from '../../localization'

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="+# (000) 000 00 00"
        definitions={{
          "#": /[1-9]/,
        }}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

interface State {
  textmask: string;
  numberformat: string;
}

interface Props {
  text?: string;
  values: State;
  setValues: React.Dispatch<React.SetStateAction<State>>;
  error: boolean;
  language: string,
}

export const PhoneCheckInput: FC<Props> = ({
  text,
  values,
  setValues,
  error,
  language,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (values.textmask.length < 3 && values.textmask !== '+7')
      setValues({
        ...values,
        textmask: "+7",
      });
  }, [values]);

  return (
    <Wrapper>
      {text && <InputLabel
        sx={{ margin: 0, color: "#2B2E33" }}
        htmlFor="formatted-text-mask-input"
      >
        {text}
      </InputLabel>}
      <FormControl fullWidth>
        <TextField
          fullWidth
          value={values.textmask}
          placeholder="+7 (111) 111 11 11"
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          InputProps={{
            inputComponent: TextMaskCustom as any,
          }}
        />
        <PlaceholderCustom>{localization.loanFormPhoneNumber[language]}</PlaceholderCustom>
        {error && 
          <Typography color='#FF421D'
            fontSize='12px'
            fontWeight={'600'}
            letterSpacing={0}
          >
            {localization.loanFormPhoneError[language]}
            
          </Typography>
        }
      </FormControl>
    </Wrapper>
  );
};
