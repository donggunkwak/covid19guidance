import React from 'react';
import IconsHamburger from '../icons/icon-ham.png';
import './styles/Header.scss';
import '../styles/Common.scss';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const Header = (props) => {
  const handleChange = (e) => {
    props.onChangeLanguage(e.target.value);
  };

  return (
    <div id="header-box">
      <div className="icon-btn" onClick={ props.onClickHam }>
        <img src={ IconsHamburger } alt="hamburger bar" width="20px"></img>
      </div>
      <Select
        id="demo-simple-select"
        value={ props.lang }
        onChange={ handleChange }
      >
        <MenuItem value={ 'eng' }>ENG</MenuItem>
        <MenuItem value={ 'kor' }>KOR</MenuItem>
      </Select>
    </div>
  );
};

export default Header;
