import React from 'react';
import Corona from '../icons/corona.png';
import Iframe from 'react-iframe';
import './styles/SelfChecker.scss';


const SelfChecker = (props) => {
  return (
    <div id="selfChecker">
      <img src={ Corona } width="40px" alt="corona"></img>
      {props.lang === 'ko-kr'
        ? <span id="title1-kr">코로나바이러스</span>
        : <span id="title1">CORONAVIRUS</span>
      }
      {props.lang === 'ko-kr'
        ? <span id="title2-kr">자가 진단</span>
        : <span id="title2">SELF-CHECKER</span>
      }
      <span id="title3">This self-checker is from the CDC and Prevention.
      Only the self-checker and guideline function in the iframe is from the CDC, while everything else is not.</span>
      <div id="iframe-box">
        <Iframe url={"https://covid19healthbot.cdc.gov/?language=" + props.lang }
          id="myId"
          width="100%"
          className="myClassname"
          display="initial"
          position="relative"
          height="500px"
        />
      </div>
    </div>
  );
};

export default SelfChecker;
