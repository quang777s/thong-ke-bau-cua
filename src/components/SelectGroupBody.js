import React from "react";
import GlobalContext from "../contexts/Global";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import { MAX_FACES } from "../constrains/global";

const SelectGroupBody = () => {
  const globalContext = React.useContext(GlobalContext);

  return (
    <TableBody>
      {globalContext.data.map((row) => (
        <TableRow key={row.name}>
          <TableCell component="th" scope="row">
            <Button variant="contained" color="primary" onClick={() => globalContext.addGameResult(row.id)}>
              {row.name}
            </Button>
          </TableCell>
          <TableCell align="right">{row.game_value}</TableCell>
          <TableCell align="right">
            {globalContext.gamesCount ? Math.round(row.total * 100 / globalContext.gamesCount / MAX_FACES) : 0}%
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default SelectGroupBody;