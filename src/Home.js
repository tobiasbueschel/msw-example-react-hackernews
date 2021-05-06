import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const Page = styled.div`
  background: #051c2c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  h2,
  p {
    color: white;
    border-color: white;
  }
`;

export const Home = ({ userData }) => {
  const [comment, setComment] = useState("");

  useEffect(() => {
    async function fetchHackerNews() {
      const response = await fetch("http://hn.algolia.com/api/v1/items/1");
      const news = await response.json();
      setComment(news.children[0].text);
    }

    fetchHackerNews();
  }, []);

  return (
    <Page>
      <Typography variant="h2">
        <span data-testid="firstName">{userData?.firstName}</span>{" "}
        <span data-testid="lastName">{userData?.lastName}</span>
      </Typography>
      <Typography data-testid="userId">{userData?.id}</Typography>
      <Typography>{comment}</Typography>
    </Page>
  );
};
