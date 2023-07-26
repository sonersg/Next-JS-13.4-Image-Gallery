"use client";

import React from "react";
import { Button } from "react-bootstrap";

interface ErrorProps {
  error: Error;
  reset: () => void;
}
function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}

export default Error;
