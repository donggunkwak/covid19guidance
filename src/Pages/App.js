import React, { useState } from 'react';
import Header from '../Components/Header';
import Guidance from '../Components/Guidance';
import GuidanceKor from '../Components/GuidanceKor';
import GuidanceEs from '../Components/GuidanceEs';
import GuidanceZh from '../Components/GuidanceZh';
import SelfChecker from '../Components/SelfChecker';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import './App.scss';


const App = () => {
  const [lang, setLang] = useState('eng');
  const [menu, setMenu] = useState(false);
  const [status, setStatus] = useState('selfChecker') // guidance or selfChecker

  const onChangeLanguage = (l) => {
    setLang(l);
  };
  const toggleDrawer = () => {
    setMenu(!menu);
  };
  const changeStatus = (s) => {
    setMenu(false);
    if (s === 'GUIDANCE') {
      setStatus('guidance');
    } else if (s === 'SELF-CHECKER') {
      setStatus('selfChecker');
    }
  };
  const parseLang = (l) => {
    if (l === 'kor') {
      return 'ko-kr';
    } else if (l === 'zh') {
      return 'zh-cn';
    } else if (l === 'es') {
      return 'es-us';
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
      {(status === 'guidance' && lang === 'eng') &&
        <Guidance lang={ lang }/>
      }
      {(status === 'guidance' && lang === 'kor') &&
        <GuidanceKor lang={ lang }/>
      }
      {(status === 'guidance' && lang === 'es') &&
        <GuidanceEs lang={ lang }/>
      }
      {(status === 'guidance' && lang === 'zh') &&
        <GuidanceZh lang={ lang }/>
      }
      {status === 'selfChecker' && 
        <SelfChecker lang={ parseLang(lang) }/>
      }
      <Drawer anchor={ 'bottom' } open={ menu }
        onClose={ toggleDrawer }>
        <List>
          {['SELF-CHECKER', 'GUIDANCE'].map((item, idx) => (
              // <ListItem button key={item} onClick={ () => changeStatus(item) }>{ item }</ListItem>
              <div className="list-item" key="item" onClick={ () => changeStatus(item) }><span>{ item }</span>
                <div className="line"></div>
              </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default App;
