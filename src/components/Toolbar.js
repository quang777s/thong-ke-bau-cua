import React from "react";
import GlobalContext from "../contexts/Global";
import { Button, Box } from '@material-ui/core';
import '../styles/toolbar.css'

const Toolbar = () => {
  const globalContext = React.useContext(GlobalContext);

  return (
    <div className="toolbar">
      <Box component="span" m={1}>
        <Button variant="contained" size="medium" color="default" onClick={() => globalContext.resetGame()}>
          Reset
        </Button>
      </Box>

      <Box component="span" m={1}>
        <Button variant="contained" size="medium" color="secondary" onClick={() => globalContext.deleteLastGame()}>
          Delete Last Game
        </Button>
      </Box>
    </div>
  );
}

export default Toolbar;