import React from 'react'
import styles from './Testimonial.module.css'
import Testicard from '../../Components/Testicard/Testicard'
import ayush from '../../Assets/team/ayush.jpg'
import Saumya from '../../Assets/team/saumya.jpeg.jpg'
import anshul from '../../Assets/team/Aanshul.jpeg.jpg'
import anuj from '../../Assets/team/anuj.jpeg'

const data = [{
    name:"Ayush Singh",
    role:"Senior Data Scientist",
    img:ayush,
    desc: " I help data science learners grab high paying jobs and first pay checks | Experience at Replayed, ZenML, & Artifact",
    twitter:"https://x.com/AySh2218?t=h3YUEDp5mIcbKJQ6MWv2rQ&s=08",
    linkedin:"https://www.linkedin.com/in/ayush-singh488",
    instagram:""
},
{
    name:"Saumya Singh",
    role:"Red Hat",
    img:Saumya,
    desc:"Software Engineer helping you excel in Tech & Life | International Open Source Award finalist | Educator | Google Connect Winner'19 | Scholar GHCI'20 | Winner SIH, 21U21 Award",
    twitter:"https://x.com/saumya1singh?t=XUe5_gL1aSTyMwig7tR1Qg&s=08",
    linkedin:"https://www.linkedin.com/in/saumya1singh",
    instagram:""
},
{
    name:"Aanshul Sadaria",
    role:"Google",
    img:anshul,
    desc:"SWE III @ Google | Institute Gold Medalist @ IIITH | First Inventor @ Adobe | Ex-Researcher @ Precog | Mentored 1000+ Students | Speaker at 50+ Events",
    twitter:"https://x.com/AanshulSadaria?t=ZQ3J5Cs2_32Ev6t_sLdp3A&s=08",
    linkedin:"https://www.linkedin.com/in/aanshulsadaria"
}
,{
    name:"Ajay Suneja",
    role:"Adidas",
    img:anuj,
    desc:"Frontend Developer at @adidas | Ex- ITC Infotech | Ex- Coforge (NIIT) | GDSC’23 & Postman’23 Speaker ",
    twitter:"https://x.com/TechnicalSuneja?t=bxB7mCcPth0tJZZKvNkmOA&s=08",
    linkedin:"https://www.linkedin.com/in/ajaysuneja",
  instagram:""}
,
{
  name:"Nitish Agrawal",
  role:"Security @ V-Mart",
  img:"https://media.licdn.com/dms/image/D4D35AQG_a82f5NoWYA/profile-framedphoto-shrink_400_400/0/1691556161765?e=1698087600&v=beta&t=0BBT0YwBqfGHmDD5UXjVf6p_Nr9HMG3b61EQPt9AQGM",
  desc:"23| Security @ V-Mart | Cyber Security Enthusiastic| 10+ Talks | Master's Diploma in Cyber Security| Cyber Volunteer (UP POLICE) | Speaker | Teacher | Hacker ",
  twitter:"",
  linkedin:"",
instagram:""}
,{
  name:"Shreyansh Shukla",
  role:"Amazon",
  img:"https://media.licdn.com/dms/image/D5603AQFlRB2uwNJbFg/profile-displayphoto-shrink_400_400/0/1689147267253?e=1703116800&v=beta&t=HQYc2-8_6C7qY2fKNkfEop96uJ5ZDe6WkxO0H6GeS28",
  desc:"SDE @Amazon | Competitive Programmer",
  twitter:"",
  linkedin:"",
instagram:""}
]
const Testimonial = () => {
  return (
    <div className={styles.testimonial_wrapper}>
      <div className={styles.bgname}> SAY'S</div>
      <div className={styles.test_text}>
       Experience Our Excellence <div>Through Testimonials</div> </div>
<div className={styles.testimonial_container}>
  {data.map((e)=><Testicard key={e.name} desc={e.desc} img={e.img} role={e.role} name={e.name } linkedin={e.linkedin} instagram={e.instagram} twitter={e.twitter}/>)}
</div>

    </div>
  )
}

export default Testimonial
