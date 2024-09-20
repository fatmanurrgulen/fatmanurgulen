import React from 'react';  
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './skills.css'; 
import proje1 from '../../assets/proje1.png'; 
import proje2 from '../../assets/proje2.png';
import proje3 from '../../assets/proje3.png';
import proje4 from '../../assets/proje4.png';
import proje5 from '../../assets/proje5.png';

// Örnek veri
const projectsData = [
  { id: 1, image: proje1 },
  { id: 2, image: proje2 },
  { id: 3, image: proje3 },
  { id: 4, image: proje4 },
  { id: 5, image: proje5 }
];

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    draggable: true, 
    swipe: true, 
    // Ok bileşenlerini kaldırdık
  };

  return (
    <div className="skills-section">
      <h2>My Projects</h2>
      <p>
        React.js, Material UI, Node.js ve MySQL kullanarak oluşturduğum bu projede
        kullanıcılar eşya ve araç ilanlarını ekleyebilir, silebilir ve listeleyebilir.
        Ayrıca kullanıcılar arası mesajlaşma ve ilanları favoriye alma gibi fonksiyonlar
        da bulunmaktadır. Bu proje, bir nakliye e-ticaret ve ilan web platformudur.
      </p>
      <Slider {...settings}>
        {projectsData.map(project => (
          <div key={project.id} className="project-slide">
            <img src={project.image} alt={`Project ${project.id}`} className="project-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Skills;
