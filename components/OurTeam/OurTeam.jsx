import React from "react";
import { Michroma } from "next/font/google";
import OurTeamCard from "./OurTeamCard";

const michroma = Michroma({ subsets: ["latin"], weight: "400" });

const teams = [
  {
    imgSrc: "/kal.png",
    name: "Kalin Tsekoff Kamenov",
    desc:
      "Kalin Tsekoff Kamenov is a well-known tech geek, entrepreneur, and crypto/defi/web3 evangelist. He owns a few crypto companies one of them is Navigato High Tech EU Funded startup that makes a bridge between decentralization and electric vehicles. Blockchain IoT of the year 2019 in Malta. Advisor, speaker, mentor. Also one of the top automation freaks in the DevSecOps area. Also now working for some big Enterprise companies.",
  },
  {
    imgSrc: "/ivan.png",
    name: "Ivan Vasilev",
    desc:
      "Ivan Vasilev works as a senior textile Artist with more than fifteen years of experience in the film industry. He has worked on over twenty productions including for Disney, Marvel, and Amazon.",
    external: {
      name: "IMDB PROFİLE",
      link: "https://m.imdb.com/name/nm6455349/",
    },
  },
  {
    imgSrc: "/zlatin.png",
    name: "Zlatin Orlov",
    desc:
      "Zlatin Orlov is a contemporary artist, entrepreneur, conceptualist, and co-founder of SETavers, with participation in a number of film productions",
  },
  {
    imgSrc: "/kadir.png",
    name: "Kadir Tamrak",
    desc:
      "Kadir Tamrak is a Strategic Marketing and Brand Management Specialist. He is the Co-founder of AivaSoft Software, which provides services with new technologies in the international arena. He is also an academic who teaches Blockchain technologies.",
  },
  {
    imgSrc: "/gokhan.png",
    name: "A. Gökhan Uluçay",
    desc:
      "A. Gökhan Uluçay is a Software developer, His expertise is in Metaverse platform development, and developing projects on game and gamification mechanics on Unity3d and Unreal.",
  },
  {
    imgSrc: "/fettah.png",
    name: "Fettah Kurtuluş",
    desc:
      "Fettah Kurtuluş (M.Sc.) is a Software Engineer, over 10+ years of experience in all phases of the Software development life cycle. Main research area is Web-Based Programming, Machine Learning and Process Mining.",
  },
  {
    imgSrc: "/erkan.png",
    name: "Erkan Çevik",
    desc:
      "Erkan Çevik is a System Administrator. His expertise, server cluster architecture on linux platform, and he is developing parallel running dockerise server infrastructures.",
  },
];

const OurTeam = () => {
  return (
    <div className="lg:mx-24 mx-2 py-32">
      <div className="pb-20">
        <h3 className={`${michroma.className} text-center text-5xl text-white`}>
          Our Team
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {teams.map((i, k) => (
          <OurTeamCard
            key={k}
            imgSrc={i.imgSrc}
            name={i.name}
            desc={i.desc}
            external={i.external}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
