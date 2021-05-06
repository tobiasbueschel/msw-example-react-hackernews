import React, { useState, useCallback } from "react";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import { Home } from "./Home";

const Page = styled.div`
  background: #051c2c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  svg {
    width: 200px;
    margin-bottom: 20px;
  }

  button,
  label,
  fieldset,
  form,
  input,
  h2,
  p {
    color: white;
    border-color: white;
  }
`;

export const LoginForm = () => {
  // Store the username so we can reference it in a submit handler
  const [username, setUsername] = useState("");

  // Create a state for the user data we are going to receive
  // from the API call upon form submit.
  const [userData, setUserData] = useState(null);

  // Whenever we change our username input's value
  // update the corresponding state's value.
  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  // Handle a submit event of the form
  const handleFormSubmit = useCallback(
    async (event) => {
      // Prevent the default behavior, as we don't want
      // for our page to reload upon submit.
      event.preventDefault();

      // Perform a POST /login request and send the username
      const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({
          username,
        }),
      });

      // Update the state with the received response
      setUserData(await response.json());
    },
    [username]
  );

  if (userData) {
    return <Home userData={userData} />;
  }

  return (
    <Page>
      <form onSubmit={handleFormSubmit} autoComplete="off">
        <div>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            color="primary"
            onChange={handleUsernameChange}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Page>
  );
};
