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
      <span id="title1-kr">Guia</span>
      <span id="title2-kr">despues de la prueba</span>
      <span id="title3">Only the self-checker and guideline function in the iframe is from the CDC, while everything else is not.</span>
      {status==='first' &&
        <div id="guidance-first">
          <span className="sub-title">PRUEBA VIRAL</span>
          <div className="box-list">
            <div className="check-box" onClick={ () => onClickViral('Positive') }>
              positivo
              {viral==='Positive' &&
                <img src={ Check } width="20px" alt="check"></img>
              }
            </div>
            <div className="check-box" onClick={ () => onClickViral('Negative') }>
              negativo
              {viral==='Negative' &&
                <img src={ Check } width="20px" alt="check"></img>
              }
            </div>
            <div className="check-box" onClick={ () => onClickViral('Unknown') }>
              ignoto
              {viral==='Unknown' &&
                <img src={ Check } width="20px" alt="check"></img>
              }
            </div>
          </div>
          <span className="sub-title">PRUEBA DE ANTICUERPOS</span>
          <div className="box-list">
            <div className="check-box" onClick={ () => onClickAntibody('Positive') }>
              positivo
              {antibody==='Positive' &&
                <img src={ Check } width="20px" alt="check"></img>
              }
            </div>
            <div className="check-box" onClick={ () => onClickAntibody('Negative') }>
              negativo
              {antibody==='Negative' &&
                <img src={ Check } width="20px" alt="check"></img>
              }
            </div>
            <div className="check-box" onClick={ () => onClickAntibody('Unknown') }>
              ignoto
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
              PRUEBA VIRAL
            </span>
            <div className="radio-group">
              <span className="radio-menu">
                {
                  viral==='Positive'
                  ? (<img src={ RadioChecked } width="14px" alt="icon-radio-checked"></img>)
                  : (<img src={ Radio } width="14px" alt="icon-radio"></img>)
                }
                Positivo
              </span>
              <span className="radio-menu">
                {
                  viral==='Negative'
                  ? (<img src={ RadioChecked } width="14px" alt="icon-radio-checked"></img>)
                  : (<img src={ Radio } width="14px" alt="icon-radio"></img>)
                }
                Negativo
              </span>
              <span className="radio-menu">
                {
                  viral==='Unknown'
                  ? (<img src={ RadioChecked } width="14px" alt="icon-radio-checked"></img>)
                  : (<img src={ Radio } width="14px" alt="icon-radio"></img>)
                }
                Ignoto
              </span>
            </div>
          </div>
          <div className="category-box">
            <span className="category">
              PRUEBA DE ANTICUERPOS
            </span>
            <div className="radio-group">
              <span className="radio-menu">
                {
                  antibody==='Positive'
                  ? (<img src={ RadioChecked } width="14px" alt="icon-radio-checked"></img>)
                  : (<img src={ Radio } width="14px" alt="icon-radio"></img>)
                }
                Positivo
              </span>
              <span className="radio-menu">
                {
                  antibody==='Negative'
                  ? (<img src={ RadioChecked } width="14px" alt="icon-radio-checked"></img>)
                  : (<img src={ Radio } width="14px" alt="icon-radio"></img>)
                }
                Negativo
              </span>
              <span className="radio-menu">
                {
                  antibody==='Unknown'
                  ? (<img src={ RadioChecked } width="14px" alt="icon-radio-checked"></img>)
                  : (<img src={ Radio } width="14px" alt="icon-radio"></img>)
                }
                Ignoto
              </span>
            </div>
          </div>
          <div className="content-box" id="first-cotent-box">
            <div className="line1"></div>
            <span className="content-title">INTERPRETACIÓN</span>
            <div className="content">
              { interpretation }
            </div>
          </div>
          <div className="content-box">
            <div className="line1"></div>
            <span className="content-title">ACCIÓN SUGERIDA</span>
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
