import { useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { $borderColor } from "../utils/config";

export function FormWrapper(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <FormStyled
      className={props.className}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      {props.children}
    </FormStyled>
  );
}

const FormStyled = styled(Form)`
  @media (min-width: 1400px) {
    flex-grow: 1;
  }

  input {
    height: 48px;
    border-radius: 0;
    border: 1px solid ${$borderColor};
  }

  .group {
    min-height: 76px;
  }

  .group.textarea {
    padding-bottom: 28px;

    @media (min-width: 1400px) {
      flex-grow: 1;
    }
  }

  .group.textarea textarea {
    resize: none;
    border-radius: 0;
    height: 300px;

    @media (min-width: 1400px) {
      height: 100%;
    }
  }
`;
