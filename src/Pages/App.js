import React, { useState } from 'react';
import Header from '../Components/Header';
import SelfChecker from '../Components/SelfChecker';
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
  const parseLang = (l) => {
    if (l === 'kor') {
      return 'ko-kr';
    } else {
      return 'en-us';
    }
  }
  return (
    <div className="App">
      <Header 
        onClickHam={ toggleDrawer }
        onChangeLanguage={ onChangeLanguage }
        lang={ lang }
      />
      <SelfChecker lang={ parseLang(lang) }/>
    </div>
  );
};

export default App;
