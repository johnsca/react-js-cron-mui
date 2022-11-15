import React from "react";
import { styled } from "@mui/material/styles";

const Container = styled("div")({
  display: "flex",
  alignItems: "center"
});

const Border = styled("div")({
  borderBottom: "2px solid lightgray",
  width: "100%"
});

const Content = styled("span")(({ theme }) => ({
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  fontWeight: 500,
  fontSize: 22,
  color: "lightgray"
}));

const DividerWithText = ({ children }:any) => {
 return (
  <Container>
    <Border />
    <Content>{children}</Content>
    <Border />
  </Container>
 );
};
export default DividerWithText;