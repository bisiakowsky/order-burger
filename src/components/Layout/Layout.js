import React from 'react';
import Aux from '../../hoc/ReactAux';
import classes from './Layout.module.css';
const Layout = (props) => (
  <Aux>
    <div>Toolbar, SideDraw, Backdrop</div>
    <main className={classes.content}>
    {props.children}
    </main>
  </Aux>
);
export default Layout;
