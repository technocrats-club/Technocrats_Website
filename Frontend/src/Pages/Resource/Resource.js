import React from 'react'
import styles from './Resource.module.css'
import and from "../../Assets/android.png";
import webd from "../../Assets/webdev.png";
import cyber from "../../Assets/cyber.png";
import meta from "../../Assets/arvr.png";
import graphic from "../../Assets/graphics.png";
import ml from "../../Assets/ml.png";
import Domaincard from '../../Components/Domaincard/Domaincard';
import { Link } from 'react-router-dom';
const data = [
  { 
    name: "Web",
    addon: "Development",
    data: "Examined as an existence in the soul of the Internet age, Web Development is a professional field which has helped the world envision numerous aspects of E-shopping, E-transition and many more ",
    img: webd,
  },
  {
    name: "Machine ",
    addon: "Learning",
    data: "this is a web development ... ",
    img:ml
  },
  {
    name: "Android",
    addon: "Development",
    data: "this is a web development ... ",
    img: and,
  },
  {
    name: "AR/VR",
    addon: "",
    data: "this is a web development ... ",
    img: meta,
  },
  {
    name: "Cyber",
    addon: "Security",
    data: "this is a web development ... ",
    img: cyber,
  },
  {
    name: "Graphics",
    addon: "Design",
    data: "this is a web development ... ",
    img: graphic,
  },
  {
    name: "Content",
    addon: "Writing",
    data: "this is a web development ... ",
    img: cyber,
  }
];
const Resource = () => {
  return (
    <div className={styles.domain_wrapper}>
 <div className={styles.bgname}> RESOURCES</div>
      <div className={styles.test_text}>
      Maximize Efficiency with <div>Tech Resources </div>{" "}
      </div>
   <div className={styles.domain_container}>
          {data.map((e) => (
          <Link style={{textDecoration: 'none'}} to={"/course?c="+e.name}><Domaincard addon={e.addon} key={e} name={e.name} img={e.img} data={e.data} /></Link>
          ))}
        </div>
    </div>
  )
}



 




export default Resource
