import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import GlobalContext from '../contexts/Global';
import SelectGroupBody from './SelectGroupBody';
import BauCuaInitState from '../contexts/initState/BauCuaInitState';
import { MAX_FACES } from '../constrains/global';
import Toolbar from './Toolbar';


class SelectGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      global: BauCuaInitState,
    };

    this.addGameResult = this.addGameResult.bind(this);
    this.finishGame = this.finishGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.deleteLastGame = this.deleteLastGame.bind(this);
  }

  resetGame() {
    let data = this.state.global.data;
    for (let index = 0; index < data.length; index++) {
      data[index]["game_value"] = 0;
    }

    this.setState(prevState => {
      return {
        global: {
          ...prevState.global,
          data: data,
          gameClick: 0,
        }
      }
    });
  }

  finishGame(value) {
    if (this.state.global.gameClick < MAX_FACES - 1) {
      return;
    }

    let data = this.state.global.data;
    for (let index = 0; index < data.length; index++) {
      data[index]["total"] += data[index]["game_value"];
      data[index]["game_value"] = 0;
    }

    this.setState(prevState => {
      return {
        global: {
          ...prevState.global,
          data: data,
          gamesCount: this.state.global.gamesCount + 1,
          gameClick: 0,
          currentGame: [],
          lastGame: [...this.state.global.currentGame, value],
        }
      }
    });
  }

  addGameResult(value) {
    if (this.state.global.gameClick === MAX_FACES) {
      return;
    }

    let data = this.state.global.data;
    for (let index = 0; index < data.length; index++) {
      if (data[index]["id"] === value) {
        data[index]["game_value"] += 1;
      }
    }

    this.setState(prevState => {
      return {
        global: {
          ...prevState.global,
          data: data,
          gameClick: this.state.global.gameClick + 1,
          currentGame: [...this.state.global.currentGame, value],
        }
      }
    });
    this.finishGame(value);
  }

  deleteLastGame() {
    if (this.state.global.lastGame.length < MAX_FACES) {
      return;
    }

    const lastGame = this.state.global.lastGame;
    let data = this.state.global.data;
    for (let index = 0; index < data.length; index++) {
      for (let lastGameIndex = 0; lastGameIndex < lastGame.length; lastGameIndex++) {
        if (lastGame[lastGameIndex] === data[index]["id"]) {
          data[index]["total"] -= 1;
        }
      }
      data[index]["game_value"] = 0;
    }

    this.setState(prevState => {
      return {
        global: {
          ...prevState.global,
          data: data,
          gameClick: 0,
          gamesCount: this.state.global.gamesCount - 1,
          currentGame: [],
          lastGame: [],
        }
      }
    });
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        global: {
          ...prevState.global,
          addGameResult: this.addGameResult,
          resetGame: this.resetGame,
          deleteLastGame: this.deleteLastGame,
        }
      }
    });
  }

  render() {
    return (
      <GlobalContext.Provider value={this.state.global}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <SelectGroupBody />
          </Table>
        </TableContainer>
        <Toolbar />
      </GlobalContext.Provider>
    );
  }
}

export default SelectGroup;
