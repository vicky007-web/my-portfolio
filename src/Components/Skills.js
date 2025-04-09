import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faVideo,
  faMagic,
  faCube,
  faCubes,
  faClapperboard,
} from "@fortawesome/free-solid-svg-icons";
// import {faj} from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';
const Skills = () => {
  const [listSkills] = useState([
    {
      name: 'Motion Graphics',
      des: "Create engaging animations and visual effects using motion graphics techniques.",
      icon: faMagic,
    },
    {
      name: 'Storytelling',
      des: "Craft compelling narratives that capture and retain audience attention.",
      icon: faClapperboard,
    },
    {
      name: '3D Reels',
      des: 'Develop 3D animations and reels to showcase content in a visually immersive way.',
      icon: faCube,
    },
    {
      name: 'Video Editing',
      des: 'Edit, trim, and enhance video footage to create high-quality content.',
      icon: faVideo,
    },
    {
      name: '3D Modeling',
      des: 'Build realistic 3D models for animation and rendering.',
      icon: faCubes,
    },
    {
      name: 'Film Production',
      des: 'Manage all aspects of video production, from pre-production to post-production.',
      icon: faFilm,
    },
  ]);
  
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs)
  return (
    <section className='skills' ref={refTab}>
      <div className="title" ref={(eL) => eL && refDivs.current.push
        (eL)
      }>
        This is my Skills
      </div>
      <div className="des"  ref={(eL) => eL && refDivs.current.push
        (eL)
      }>
       I specialize in motion graphics, 3D reels, and video editing, transforming ideas into visually compelling content that captivates audiences. With expertise in color grading, dynamic transitions, and seamless animations, I craft high-quality promotional videos, social media content, and short films that leave a lasting impression.

My creative approach ensures that every project enhances brand identity and engages the target audience effectively. Whether it's crafting immersive 3D reels or designing captivating motion graphics, I’m dedicated to delivering polished and impactful content.


      </div>
      <div className="list" >
        {
          listSkills.map((value, key) => (
            <div key={key} className="item" ref={(eL) => eL && refDivs.current.push
              (eL)
            }>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills