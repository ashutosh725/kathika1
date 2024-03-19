import Image from "next/image";
import React from "react";
import Lovely1 from "../../public/team/lovely (1).png";
import Lovely2 from "../../public/team/lovely (2).png";
import Lovely3 from "../../public/team/lovely (3).png";
import Lovely4 from "../../public/team/lovely (4).png";
import Lovely5 from "../../public/team/lovely (5).png";
import Lovely6 from "../../public/team/founder.jpg";

const list = [
  {
    title: "Atul Khanna",
    post: "Founder & Curator",
    img: Lovely6,
  },
  {
    title: "Ashna Khanna",
    post: "Director",
    img: Lovely4,
  },

  {
    title: "Lovely Bhadra",
    post: "Research & Content Manager",
    img: Lovely1,
  },
  {
    title: "Tanuka Guria",
    post: "Research & Content Manager",
    img: Lovely2,
  },
  {
    title: "Meghna Mitra",
    post: "Museum Assistant",
    img: Lovely3,
  },

  {
    title: "David",
    post: "Relations Manager",
    img: Lovely5,
  },
  {
    title: "Atul Khanna",
    post: "Founder & Curator",
    img: Lovely5,
  },
  {
    title: "David",
    post: "Relations Manager",
    img: Lovely5,
  },
];

const TeamMember = () => {
  return (
    <div className="my-10">
      <div className="container mx-auto">
        <div className="flex  flex-col md:flex-row justify-center items-center gap-10">
          <div className="bg-white">
            <div>
              <Image
                src={Lovely6}
                className="h-[350px] w-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 py-4">
              <p className="md:text-[25px] text-[]16px">Atul Khanna</p>
              <p className="md:text-[25px] text-[]16px">Founder & Curator</p>
            </div>
          </div>
          <div className="bg-white">
            <div>
              <Image
                src={Lovely4}
                className="h-[350px] w-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 py-4">
              <p className="md:text-[25px] text-[]16px">Ashna Khanna</p>
              <p className="md:text-[25px] text-[]16px">Director</p>
            </div>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row justify-center items-center gap-10 py-10">
          <div className="bg-white">
            <div>
              <Image
                src={Lovely1}
                className="h-[350px] w-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 py-4">
              <p className="md:text-[25px] text-[]16px">Lovely Bhadra</p>
              <p className="md:text-[25px] text-[]16px ">Research & Content Manager</p>
            </div>
          </div>
          <div className="bg-white">
            <div>
              <Image
                src={Lovely2}
                className="h-[350px] w-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 py-4">
              <p className="md:text-[25px] text-[]16px">Tanuka Guria</p>
              <p className="md:text-[25px] text-[]16px">Research & Content Manager</p>
            </div>
          </div>
          <div className="bg-white">
            <div>
              <Image
                src={Lovely5}
                className="h-[350px] w-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 py-4">
              <p className="md:text-[25px] text-[]16px">David</p>
              <p className="md:text-[25px] text-[]16px">Relations Manager</p>
            </div>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row justify-center items-center gap-10">
          <div className="bg-white">
            <div>
              <Image
                src={Lovely3}
                className="h-[350px] w-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 py-4">
              <p className="md:text-[25px] text-[]16px">Meghna Mitra</p>
              <p className="md:text-[25px] text-[]16px">Museum Assistant</p>
            </div>
          </div>
          <div className="bg-white">
            <div>
              <Image
                src={Lovely4}
                className="h-[350px] w-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 py-4">
              <p className="md:text-[25px] text-[]16px">Faisal Saleem
</p>
              <p className="md:text-[25px] text-[]16px">Museum Educator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
