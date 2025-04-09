
import React,{useRef, useState} from 'react'
import CustomHook from './CustomHook'

const Contacts = () => {
  const [listContacts] = useState([
    {
      title: 'phone Number',
      value: '+91 92667 33903'
    },
    {
      title: 'Email',
      value: 'luckypandey0195@gmail.com'
    },
    {
      title: 'Youtube',
      value: '@ClipCast Hub',
      link: 'https://www.youtube.com/@Clip_Cast_Hub'

    },
    // {
    //   title: 'Instagram',
    //   value: '@ClipCast Hub',
    //   link: 'https://www.youtube.com/@Clip_Cast_Hub'

    // }

  ]);
  const refTab = useRef();
  const divs = useRef([]);
  CustomHook(refTab, divs);
  return (
    <section className='contacts' ref={refTab}>
      <div className="title" ref={(eL) => eL && divs.current.push(eL)}>
        This is my Contacts
      </div>
      <div className="des"  ref={(eL) => eL && divs.current.push(eL)}>
      For collaborations, freelance projects, or inquiries, feel free to reach out! I am always open to working on exciting video editing projects, whether it's for social media content, promotional videos, motion graphics, or cinematic storytelling.
      </div>
      <div className="list" ref={(eL) => eL && divs.current.push(eL)}>
  {listContacts.map((value, key) => (
    <div key={key} className="item">
      <h3>{value.title}</h3>
      {value.link ? (
        <a
          href={value.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1a73e8', textDecoration: 'none', fontWeight: 'bold' }}
        >
          {value.value}
        </a>
      ) : (
        <div>{value.value}</div>
      )}
    </div>
  ))}
</div>


    </section>
  )
}

export default Contacts