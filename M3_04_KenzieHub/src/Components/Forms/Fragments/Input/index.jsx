import { forwardRef } from "react";
import { Warning } from "../../styles";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <fieldset>
      <label htmlFor={label}>{label}</label>
      <input id={label} ref={ref} {...rest} />
      {error ? <Warning>{error.message}</Warning> : null}
    </fieldset>
  );
});
