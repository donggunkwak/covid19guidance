import React, { useState } from 'react';
import Header from '../Components/Header';
import './App.scss';


const App = () => {
  const [lang, setLang] = useState('eng');
  const [menu, setMenu] = useState(false);

  const onChangeLanguage = (l) => {
    setLang(l);
  };
  const toggleDrawer = () => {
    setMenu(!menu);
  };

  return (
    <div className="App">
      <Header 
        onClickHam={ toggleDrawer }
        onChangeLanguage={ onChangeLanguage }
        lang={ lang }
      />
    </div>
  );
};

export default App;
