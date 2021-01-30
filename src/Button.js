import React from "react";

import Button from "@material-ui/core/Button";

export default function ContainedButtons(props) {
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={props.onClick}>
        Search
      </Button>
    </div>
  );
}
