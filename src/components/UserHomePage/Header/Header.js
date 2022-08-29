import React, { useState } from 'react';
import MenuMobi from '../MenuMobi/MenuMobi';
import HeaderTop from './HeaderTop';
import Menus from './Menus';
import './default.scss'

const Header = () => {
  const [visible, setVisible] = useState(false)
  const showMenu = () => {
    setVisible(!visible)
  }


  return (
    <>
      <HeaderTop showMenu={showMenu} />
      <Menus />
      {visible &&
        <div className="menu-mobi">
          <MenuMobi showMenu={showMenu} />
        </div>
      }

    </>
  );
};

export default Header;