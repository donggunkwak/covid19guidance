import React, { useState, useEffect } from 'react';
import db from '../firebase.db';
import Corona from '../icons/corona.png';
import Next from '../icons/icon-next.png';
import Prev from '../icons/icon-prev.png';
import Check from '../icons/icon-check.png';
import Radio from '../icons/icon-radio.png';
import RadioChecked from '../icons/icon-radio-checked.png';
import './styles/Guidance.scss';
import '../styles/Common.scss';

const Guidance = (props) => {
  const [status, setStatus] = useState('first');
  const [viral, setViral] = useState('');
  const [antibody, setAntibody] = useState('');
  const [guidance, setGuidance] = useState('');
  const [interpretation, setInterpretation] = useState('');

  const onClickViral = (inp) => {
    setViral(inp);
  };
  const onClickAntibody = (inp) => {
    setAntibody(inp);
  };

  const onClickNext = async () => {
    if (viral !== '' && antibody !== '') {
      getDatas();
      setStatus('second');
    } else {
      alert("Please select both Viral and Antibody.");
    }
  };
  const onClickPrev = async () => {
    setViral('');
    setAntibody('');
    setStatus('first');
  };
  const getDatas = async () => {
    const g = await db.getRecommandedAction(viral, antibody, props.lang);
    const i = await db.getInterpretation(viral, antibody, props.lang);
    setGuidance(g);
    setInterpretation(i);
  };
  useEffect(() => {
    const runEffect = async () => {
      const g = await db.getRecommandedAction(viral, antibody, props.lang);
      const i = await db.getInterpretation(viral, antibody, props.lang);
      setGuidance(g);
      setInterpretation(i);
    };
    runEffect();
  }, [viral, antibody, props.lang]);
  return (
    <div id="guidance">
      <img src={ Corona } width="40px" alt="corona"></img>
      <span id="title1-kr">테스트 결과</span>
      <span id="title2-kr">안내 사항</span>
      {status==='first' &&
        <div id="guidance-first">
          <span className="sub-title">바이러스 검사</span>
          <div className="box-list">
            <div className="check-box" onClick={ () => onClickViral('Positive') }>
              양성
              {viral==='Positive' &&
                <img src={ Check } width="20px" alt="check"></img>
              }
            </div>
            <div className="check-box" onClick={ () => onClickViral('Negative') }>
              음성
              {viral==='Negative' &&
                <img src={ Check } width="20px" alt="check"></img>
              }
            </div>
            <div className="check-box" onClick={ () => onClickViral('Unknown') }>
              알 수 없음
              {viral==='Unknown' &&
                <img src={ Check } width="20px" alt="check"></img>
              }
            </div>
          </div>
          <span className="sub-title">항체 검사</span>
          <div className="box-list">
            <div className="check-box" onClick={ () => onClickAntibody('Positive') }>
              양성
              {antibody==='Positive' &&
                <img src={ Check } width="20px" alt="check"></img>
              }
            </div>
            <div className="check-box" onClick={ () => onClickAntibody('Negative') }>
              음성
              {antibody==='Negative' &&
                <img src={ Check } width="20px" alt="check"></img>
              }
            </div>
            <div className="check-box" onClick={ () => onClickAntibody('Unknown') }>
              알 수 없음
              {antibody==='Unknown' &&
                <img src={ Check } width="20px" alt="check"></img>
              }
            </div>
          </div>
          <img className="icon-next" src={ Next } width="40px" alt="icon-next" onClick={ () => onClickNext() }></img>
        </div>
      }
      {status==='second' &&
        <div id="guidance-second">
          <div className="category-box" id="first-category-box">
            <span className="category">
              VIRAL TESTING
            </span>
            <div className="radio-group">
              <span className="radio-menu">
                {
                  viral==='Positive'
                  ? (<img src={ RadioChecked } width="14px" alt="icon-radio-checked"></img>)
                  : (<img src={ Radio } width="14px" alt="icon-radio"></img>)
                }
                Positive
              </span>
              <span className="radio-menu">
                {
                  viral==='Negative'
                  ? (<img src={ RadioChecked } width="14px" alt="icon-radio-checked"></img>)
                  : (<img src={ Radio } width="14px" alt="icon-radio"></img>)
                }
                Negative
              </span>
              <span className="radio-menu">
                {
                  viral==='Unknown'
                  ? (<img src={ RadioChecked } width="14px" alt="icon-radio-checked"></img>)
                  : (<img src={ Radio } width="14px" alt="icon-radio"></img>)
                }
                Unknown
              </span>
            </div>
          </div>
          <div className="category-box">
            <span className="category">
              ANTIBODY TESTING
            </span>
            <div className="radio-group">
              <span className="radio-menu">
                {
                  antibody==='Positive'
                  ? (<img src={ RadioChecked } width="14px" alt="icon-radio-checked"></img>)
                  : (<img src={ Radio } width="14px" alt="icon-radio"></img>)
                }
                Positive
              </span>
              <span className="radio-menu">
                {
                  antibody==='Negative'
                  ? (<img src={ RadioChecked } width="14px" alt="icon-radio-checked"></img>)
                  : (<img src={ Radio } width="14px" alt="icon-radio"></img>)
                }
                Negative
              </span>
              <span className="radio-menu">
                {
                  antibody==='Unknown'
                  ? (<img src={ RadioChecked } width="14px" alt="icon-radio-checked"></img>)
                  : (<img src={ Radio } width="14px" alt="icon-radio"></img>)
                }
                Unknown
              </span>
            </div>
          </div>
          <div className="content-box" id="first-cotent-box">
            <div className="line1"></div>
            <span className="content-title">INTERPRETATION</span>
            <div className="content">
              { interpretation }
            </div>
          </div>
          <div className="content-box">
            <div className="line1"></div>
            <span className="content-title">RECOMMENDED ACTION</span>
            <div className="content">
              { guidance }
            </div>
          </div>
          <img className="icon-next" src={ Prev } width="40px" alt="icon-prev" onClick={ () => onClickPrev() }></img>
        </div>
      }
    </div>
  );
};

export default Guidance;
