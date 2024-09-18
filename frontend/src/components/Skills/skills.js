import React from 'react';
import './skills.css';
import UIDesign from '../../assets/uı-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const skills = () => {
  return (
    <section id='skills'>
        <span className="skillTittle" >What ı do</span>
        <span className="skillDesc" >selamlar</span>
        <div className="skillBars">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>Responsive tasarımlar</h2>
                <p>harika şeyler yapıyorum</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>temiz kod içeriği</h2>
                <p>harika şeyler yapıyorum</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>en hızlısı</h2>
                <p>harika şeyler yapıyorum</p>
            </div>
            </div>
    </section>
  );
}
export default skills;
