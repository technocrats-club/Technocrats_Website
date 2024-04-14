import React from "react";
import title from "../../Assets/title.png";
import Card from "../../Components/Card";



const speaker_Data = [
  {
    id:1,
    name: "Love Babbar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIl5KodIShS8wCCHgTtBoQm8pHN8bVuq4zeEUqAjKtA&s",
    instagram: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIl5KodIShS8wCCHgTtBoQm8pHN8bVuq4zeEUqAjKtA&s",
    linkedin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIl5KodIShS8wCCHgTtBoQm8pHN8bVuq4zeEUqAjKtA&s"
}, {
  id:2,
  name: "Love Babbar",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIl5KodIShS8wCCHgTtBoQm8pHN8bVuq4zeEUqAjKtA&s",
  instagram: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIl5KodIShS8wCCHgTtBoQm8pHN8bVuq4zeEUqAjKtA&s",
  linkedin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIl5KodIShS8wCCHgTtBoQm8pHN8bVuq4zeEUqAjKtA&s"
}, {
  id:3,
  name: "Love Babbar",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIl5KodIShS8wCCHgTtBoQm8pHN8bVuq4zeEUqAjKtA&s",
  instagram: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIl5KodIShS8wCCHgTtBoQm8pHN8bVuq4zeEUqAjKtA&s",
  linkedin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIl5KodIShS8wCCHgTtBoQm8pHN8bVuq4zeEUqAjKtA&s"
}
]

const Hackers = () => {
  return (
    <div className="bg-transparent m-10">
      <div className="flex justify-center items-center ">
        <img src={title} alt="title" />
      </div>

      <div className="flex flex-wrap justify-between text-white m-5 my-24 ">
        <div className="w-full lg:w-1/2 p-5 border-r-3 border-white  ">
          <div> About me </div>
          <div> Welcome to [Club Name]! We're a vibrant community of [describe members, e.g., enthusiasts, professionals, students, etc.] united by our passion for [club's focus or mission]. Whether you're a seasoned [related field] expert or just starting to explore, there's a place for you here. Through engaging events, workshops, and networking opportunities, we aim to [club's objectives, e.g., foster learning, collaboration, skill development, etc.]. At [Club Name], we believe in the power of [key values or principles, e.g., creativity, inclusivity, innovation, etc.] to drive positive change in [relevant domain]. Join us in our journey to [club's overarching goal or vision, e.g., inspire, educate, empower, etc.], and let's make a difference together! </div>
        </div>
        <div className="w-full lg:w-1/2 p-5 border-r-3 border-white text-white justify-center items-center  rounded-xl ">
          <div className="font-bold text-4xl ">Event name: Technoverse</div>
          <div>Venue: KIET Group of INstitutions</div>
          <div>Time: 16th April - 23rd April </div>

        </div>
      </div>

      <div className="text-white text-center text-4xl m-10">
        <div>Our Sponsers </div>
        <div>sponser photo </div>
      </div>

      <div>
        <div className="text-center text-4xl text-white m-3">Speakers </div>
        <div className="flex justify-around ">
          {
            speaker_Data.map((hose) => {
              return (
                <Card name={hose.name} instagram={hose.instagram} linkedin_link={hose.linkedin} image={hose.image}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Hackers;
