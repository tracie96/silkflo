import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Tables from "../../pages/apiData";
import Country from "../../pages/apiData/contryTable";
import CryptoTable from "../../pages/apiData/cryptoTable";

import Bored from "../../pages/finditem/bored";
import Findapet from "../../pages/finditem/findapet";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/tables" component={Tables} />
            <Route path="/app/crypto" component={CryptoTable} />
            <Route path="/app/population" component={Country} />
            <Route path="/app/bored" component={Bored} />
            <Route path="/app/findapet" component={Findapet} />
          </Switch>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
