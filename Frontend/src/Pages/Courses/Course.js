import React from "react";
import styles from "./Course.module.css";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { Link, useSearchParams } from "react-router-dom";
import html from "../../Assets/Courses/Web/sta-je-html.jpg";
import css from "../../Assets/Courses/Web/css.jpeg";
import js from "../../Assets/Courses/Web/js.jpeg";
import react from "../../Assets/Courses/Web/react.jpg";
import node from "../../Assets/Courses/Web/node.png";
import full from "../../Assets/Courses/Web/full.jpeg";
const data = {
  Web: [
    {
      name: "Html",
      img: "https://campus.w3schools.com/cdn/shop/products/EevyProduktbilder_11_1200x800.jpg?v=1681912971",
      id: "PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI",
      data: " HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation",
    },
    {
      name: "css",
      img: "https://i0.wp.com/www.tutorialbrain.com/wp-content/uploads/2019/02/CSS_tutorials_logo.jpg?fit=1024%2C768&ssl=1",
      id: "PL0b6OzIxLPbzDsI5YXUa01QzxOWyqmrWw",
      data: "CSS Mastery is a comprehensive course that explores the intricacies of Cascading Style Sheets. This course equips you with advanced CSS techniques for creating stunning, responsive web designs. It covers topics such as Flexbox, Grid, animations, and responsive layouts."
    },
    {
      name: "JavaScript",
      img: "https://cdn.mindmajix.com/courses/javascript-training-120620.png",
      id: "PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf",
      data:"The JavaScript (JS) Programming course is a comprehensive learning experience that introduces you to the world of web development and dynamic content creation. You'll explore the core concepts of JavaScript, including variables, functions, and control structures, enabling you to build interactive and engaging web applications."
    },
    {
      name: "ReactJs",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyR3yCsWsBHwyzGn-aFKtoQlGqgE2mMyUjvw&usqp=CAU",
      id: "PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
      data:"React Deep Dive is an in-depth course that delves into the world of React, a popular JavaScript library for building user interfaces. This comprehensive course covers React fundamentals, state management, routing, and component composition, enabling you to become a skilled React developer."
    },
    {
      name: "NodeJs",
      img: node,
      id: "PL8p2I9GklV456iofeMKReMTvWLr7Ki9At",
      data:"Node.js Fundamentals is a foundational course designed to provide a solid understanding of Node.js, a powerful runtime for building server-side and network applications. This course covers core concepts, asynchronous programming, package management, and building APIs, making you proficient in Node.js development."
    },
    {
      name: "Full-Stack",
      img: full,
      id: "PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc",
      data:"The Fullstack Web Development course is an extensive program that equips you with the skills and knowledge needed to become a proficient fullstack developer. You'll learn both frontend and backend technologies, databases, and frameworks to create dynamic web applications, making you well-rounded in the world of web development."
    },
  ],
  Machine: [
    {
      name: "Introduction to Python: ",
      img: "https://i.ytimg.com/vi/uYjRzbP5aZs/maxresdefault.jpg",
      id: "PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3",
      data: " Introduction to Python is a concise and beginner-friendly tutorial series that introduces the basics of Python programming, making it the perfect starting point for aspiring programmers.",
    },
    {
      name: "Numpy Library: ",
      img: "https://datascientest.com/en/wp-content/uploads/sites/9/2023/03/illu_numpy_blog-125.png",
      id: "PLKnIA16_Rmvb-ToL3RQ_bwxG4_ND-0-DT",
      data: "The Numpy Library tutorial is a brief yet comprehensive guide to NumPy,fundamental Python library for numerical computing. Ideal for data scientists and programmers, it explores essential NumPy functions and features.",
    },
    {
      name: "Pandas Library: ",
      img: "https://i.ytimg.com/vi/tfKkIugx3lQ/maxresdefault.jpg",
      id: "PLKnIA16_RmvbR85fgbfVRKOiMokUKVupy",
      data: " data:The Numpy Library tutorial is a brief yet comprehensive guide to NumPy fundamental Python library for numerical computing. Ideal for data scientists and programmers, it explores essential NumPy functions and features.",
    },
    {
      name: "Matplotlib Library: ",
      img: "https://miro.medium.com/v2/resize:fit:1400/1*00U3Mo80swQsUUV6MPvepg.png",
      id: "PL-osiE80TeTvipOqomVEeZ1HRrcEvtZB_",
      data: "The Matplotlib Library guide introduces the powerful Python library for data visualization. Explore how to create stunning charts, graphs, and plots for data representation, making data analysis more insightful and engaging. Perfect for data enthusiasts and analysts.",
    },
    {
      name: "Course for EDA ",
      img: "https://static-assets.codecademy.com/assets/course-landing-page/meta/4x3/eda-exploratory-data-analysis-python.jpg",
      id: "PLZoTAELRMXVPQyArDHyQVjQxjj_YmEuO9",
      data: "The EDA (Exploratory Data Analysis) is an in-depth learning experience focusing on techniques and tools to uncover hidden insights within datasets. Discover how to clean, visualize, and interpret data for better decision-making and gain valuable data analysis skills. Perfect for data enthusiasts and analysts.",
    },
    {
      name: "Machine Learning Playlist: ",
      img: "https://qph.cf2.quoracdn.net/main-qimg-0e9024d528d75c48f278a0636e8ed019",
      id: "PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH",
      data: "The Machine Learning Playlist is a comprehensive collection of tutorials and lectures that delve into the world of machine learning. Explore algorithms, model building, and real-world applications, equipping you with the knowledge and skills to tackle complex problems and make data-driven predictions. Ideal for aspiring data scientists and AI enthusiasts.",
    },
  ],
  Android: [
    {
      name: "Anddroid Basics ",
      img: "https://img.gadgethacks.com/img/55/89/63589063071656/0/android-basics-series-tutorials-for-beginners.1280x600.jpg",
      id: "PLQkwcJG4YTCSVDhww92llY3CAnc_vUhsm",
      data:"Android Basics is a comprehensive course designed to introduce you to the fundamentals of Android app development. This course covers key topics like app structure, user interfaces, interactions, and more. By the end, you'll have a strong foundation in creating Android applications, making it an ideal starting point for beginners in mobile app development."
    },
    {
      name: "Advanced Android ",
      img: "https://marketing-assets.teamtreehouse.com/meta_images/production/meta_images/Advanced_Android.png",
      id: "PLQkwcJG4YTCQxZMQdhR2_TNYa-jwnXUGJ",
      data:"Android Basics is a comprehensive course designed to introduce you to the fundamentals of Android app development. This course covers key topics like app structure, user interfaces, interactions, and more. By the end, you'll have a strong foundation in creating Android applications, making it an ideal starting point for beginners in mobile app development."
    },
  ],
  AR: [
    {
      name: "Spark AR Tutorial",
      img: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/265/510/datas/original.PNG",
      id: "PLk-TnRMdB7HBJG3qtcA1bayzoYW_eqLKx",
      data: "The Spark AR Tutorial series provides an exciting journey into augmented reality (AR) development. You'll learn to create captivating AR effects and experiences using Facebook's Spark AR Studio. Dive into the world of AR and turn your creative ideas into interactive reality."
    },
   
    {
        name: "Lens Studio Tutorial –  ",
        img: "https://i.ytimg.com/vi/vHmOCeK0hw8/maxresdefault.jpg",
        id: "PLxYBgWISsB9CD7Q2MmyAJX0sEgdREl9Tq",
        data:"The Lens Studio Tutorial series is your gateway to the world of augmented reality (AR) and interactive lens creation. Learn how to design and develop captivating AR lenses and experiences using Snap Inc.'s Lens Studio. Unleash your creativity and bring engaging AR content to life with this comprehensive tutorial series."
      },
      {
        name: "Marker-Based AR -  –  ",
        img: "https://miro.medium.com/v2/resize:fit:1400/1*fpTzZK1K3qPYqpRR_PXYHw.png",
        id: "PLb1h4A0yB97_TeFuf9TAEah3b-VyIYzF9",
        data:"Marker-Based Augmented Reality (AR) introduces you to the fascinating realm of AR experiences triggered by physical markers or images. Discover how to overlay digital content, 3D models, or information onto specific markers like QR codes or images, enhancing user interactions and merging the physical and digital worlds. Dive into this tutorial to explore the possibilities of marker-based AR."
      },
      {
        name: " Marker-less AR –",
        img: "https://i.ytimg.com/vi/T6bd_MQ2ass/maxresdefault.jpg",
        id: "PLb1h4A0yB97_TeFuf9TAEah3b-VyIYzF9",
        data:"Marker-less Augmented Reality (AR) eliminates the need for markers and relies on computer vision for real-world object recognition, enabling immersive digital experiences in various fields like gaming and navigation."
      },
      {
        name: " Unity Engine Game Tutorial –",
        img: "https://cdn-media-1.freecodecamp.org/ghost/2019/01/maxresdefault--1--1.jpg",
        id: "PLrnPJCHvNZuB5ATsJZLKX3AW4V9XaIV9b",
        data:"Unity Engine Game Tutorials offer comprehensive guidance on creating video games using Unity, a popular game development platform, covering topics like game design, scripting, and 3D graphics."
        
      },
      {
        name: "Unreal Engine Beginner Tutorial – ",
        img: "https://i.ytimg.com/vi/k-zMkzmduqI/maxresdefault.jpg",
        id: "PLncmXJdh4q88DFCEVuGpOY3AGQwBvoQnh",
        data:"Unreal Engine Beginner Tutorials provide foundational knowledge for newcomers, introducing them to the Unreal Engine for creating games, simulations, and interactive experiences with a focus on basics and initial steps."
      },
  ],
};
const Course = () => {
  const [params, setParams] = useSearchParams();
  let coursedata = [];
  switch (params.get("c")) {
    case "Web":
      coursedata = data.Web;
      break;
    case "Machine":
      coursedata = data.Machine;
      break;
      case  "Android":
        coursedata = data.Android;
        break;
    case "AR/VR":
      coursedata = data.AR;
    default:
    // code block
  }
  return (
    <div className={styles.corsecont}>
      {coursedata.map((e) => (
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to={"/videos?id=" + e.id}
        >
          <CourseCard data={e.data} img={e.img} name={e.name} />
        </Link>
      ))}
    </div>
  );
};

export default Course;
