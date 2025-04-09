import React, { useState,useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import CustomHook from './CustomHook';

const Projects = () => {
  const [listProjects] = useState([
    {
      name: 'Motion Graphics & Animation',
      des: 'Motion Graphics & Animation is a project that showcases my expertise in creating fluid, visually appealing motion graphics and seamless transitions. This project focuses on precise timing, polished motion design, and engaging visuals to enhance storytelling and captivate the audience. With a combination of dynamic cuts, soft transitions, and refined keyframe animations, I ensure that every movement feels natural and professional.',
      mission: 'Smooth Transition, Amazing Motion Graphic Design',
      Software:'Davinci Resolve',
      image:`${process.env.PUBLIC_URL}/graph.jpg`

    },
    
    {
      name: 'Social Media & Promotional Content ',
      des: 'Instagram Reels & TikTok Edits-Trendy, fast-paced edits with effects. , YouTube Intro & Outro-Engaging branded intros and end screens., Advertisement Video-Short commercial with dynamic cuts and transitions., Product Showcase',
      mission: 'Trendy, fast-paced edits with effects.',
      Software:'Davinci Resolve',
      image: `${process.env.PUBLIC_URL}/model.jpg`

    },
    {
      name: 'Cinematic & Storytelling',
      des: 'Short Film Editing – Narrative-based storytelling with color grading.Travel Video Montage – Capturing scenic views with smooth transitions.Music Video Editing – Syncing visuals to music beats for an energetic feel.Before & After Edits – Showing raw vs. final color-graded footage.',
      mission: 'smooth transition, amazing motion graphic design',
      Software:'Davinci Resolve',
      image:`${process.env.PUBLIC_URL}/project3.jpg`

    },
  
  ]);
  const refTab = useRef();
  const refDivs= useRef([]);
  CustomHook (refTab, refDivs)
    return (
      <section className="projects" ref={refTab}>
        <div className="title" ref={(eL) => eL && refDivs.current.push
              (eL)
            }>This is my Projects</div>
        <div className="des" ref={(eL) => eL && refDivs.current.push
              (eL)
            }>
         Bringing stories to life through dynamic motion graphics, engaging 3D reels, and seamless video editing. My projects range from captivating social media content to high-impact promotional videos, all crafted to leave a lasting impression.
        </div>
        
        <div className="list">
          {listProjects.map((value, key) => (
            <div className="item" key={key}> {/* ✅ Added key prop */}
              <div className="images"  ref={(eL) => eL && refDivs.current.push
              (eL)
            }>
                <img src={value.image} alt='' />
              </div>
  
              <div className="content"  ref={(eL) => eL && refDivs.current.push
              (eL)
            }>
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
  
                {/* Mission Section */}
                <div className="mission">
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                  <h4>Mission</h4>
                  <div className="de">{value.mission}</div>
                </div>
  
                {/* Languages Section (was misplaced before) */}
                <div className="mission">
                  <FontAwesomeIcon icon={faEarthAmericas} />
                  <h4> Software</h4>
                  <div className="de">{value.Software}</div>
                </div>
  
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;