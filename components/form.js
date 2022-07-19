import { useContext } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import styled, { ThemeContext } from "styled-components";
import { $borderColor } from "../utils/config";

export function FormWrapper(props) {
  const [validated, setValidated] = useState(false);
  const mode = useContext(ThemeContext);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (form.checkValidity() === true) {
      event.preventDefault();
      props.afterValid(form);
    }

    setValidated(true);
  };

  return (
    <FormStyled
      className={props.className}
      style={props.style}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      mode={mode}
    >
      {props.children}
    </FormStyled>
  );
}

const FormStyled = styled(Form)`
  @media (max-width: 1399px) {
    min-height: auto !important;
  }

  @media (min-width: 1400px) {
    flex-grow: 1;
  }

  input {
    min-height: 48px;
    border-radius: 0;
    border: 1px solid ${$borderColor};
  }

  .group {
    min-height: 56px;

    @media (min-width: 1400px) {
      min-height: 76px;
    }
  }

  .group.textarea {
    @media (min-width: 1400px) {
      flex-grow: 1;
    }

    @media (max-width: 1399px) {
      min-height: 308px;
    }
  }

  .group.textarea textarea {
    resize: none;
    border-radius: 0;

    @media (min-width: 1400px) {
      flex-grow: 1;
    }

    @media (max-width: 1399px) {
      height: 300px;
    }
  }

  &:not(.was-validated) .group.textarea {
    padding-bottom: 8px;

    @media (min-width: 1400px) {
      padding-bottom: 28px;
    }
  }
`;
