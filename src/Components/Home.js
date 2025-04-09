import React,{useRef} from 'react'
import CustomHook from './CustomHook'
const Home = () => {
  const refTab = useRef();
  CustomHook(refTab);
  return (
    <section className='home' ref={refTab}>
       <div className="content">
        <div className="name">
          MY NAME IS <span>VICKY</span>
        </div>
        <div className="des">
        I am a passionate video editor with over a year of experience creating engaging content for social media, promotional videos, and short films. I excel in video editing, color grading, and motion graphics, ensuring high-quality visuals that resonate with audiences.

During my time at Reel Cast, I helped grow their subscriber base from 20 to 25,000 in just three months by producing dynamic and engaging content. I am highly proficient in DaVinci Resolve, with a growing focus on mastering Fusion for motion graphics and adapting After Effects tutorials seamlessly.

With a strong eye for detail and a commitment to storytelling, I bring ideas to life while maintaining a sharp focus on visual aesthetics and audience engagement.




        </div>
        <a href={`${process.env.PUBLIC_URL}/Vicky Portfolio.pdf`} target="_blank" rel="noopener noreferrer">
  DOWNLOAD MY CV
</a>

       </div>
       <div className="avatar">
        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/card.jpg`} alt="" /> 
          <div className="info">
            <div>Video Editor</div>
            <div>Indian</div>
            <div>Web Devloper</div>
            <div>01/12</div>
            <div>Male</div>
          </div>
        </div>
       </div>

        </section>
  )
}

export default Home