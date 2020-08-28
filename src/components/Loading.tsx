import { Spinner } from "@chakra-ui/core";
import React from "react";

const Loading = () => {
  return (
    <>
      <br/>
      <Spinner size="lg"/>
      <br/>
      Loading...
    </>
  );
};

export default Loading;
