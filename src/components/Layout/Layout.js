import React from 'react';
import Aux from '../../hoc/ReactAux';
import classes from './Layout.css';
const Layout = (props) => (
  <Aux>
    <div>Toolbar, SideDraw, Backdrop</div>
    <main className={classes.content}>
    </main>
  </Aux>
);
export default Layout;
