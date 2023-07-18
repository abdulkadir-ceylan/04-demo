import React from 'react';
import * as bootstrap from 'bootstrap';
import '../styless/page-style.css';
import { Menu } from './Menu';
import { Panel } from './Panel';

export const Demo = () => {    

  return (
    <div className="container special-container">
        <div className="row">
            <Menu />
            <Panel />
        </div>
    </div>
  )
}