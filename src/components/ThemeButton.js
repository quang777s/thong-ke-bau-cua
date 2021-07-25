import React from "react";
import GlobalContext from "../contexts/Global";

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let global = this.context;
    return (
      <button
        {...props}
      >{global.test}</button>
    );
  }
}
ThemedButton.contextType = GlobalContext;

export default ThemedButton;