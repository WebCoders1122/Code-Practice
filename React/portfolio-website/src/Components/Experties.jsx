import React from "react";
import Heading from "./Small Components/Heading";
import backgroundImg from "../assets/banner_wallpaper.svg";
import Heading2 from "./Small Components/Heading2";
import ButtonLink from "./Small Components/ButtonLink";
import Experties_btn from "./Small Components/Experties_btn";
import experties from "../Data/experties";

const Experties = () => {
  return (
    <div className='experties_container pt-2'>
      <Heading text='My Experties' />
      <div
        className='experties-data flex justify-center items-center mt-3'
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}>
        {/* left box */}
        <div className='experties-text w-1/2 text-white text-center flex justify-center items-center'>
          <div className='w-2/3 m-20 space-y-3'>
            <Heading2 text='I love these Technologies...' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              delectus voluptatum, expedita quae atque, error eos iure harum
              dolores perferendis ex dolore officia natus quia dolorum
              perspiciatis eveniet tempora tempore?
            </p>
            <ButtonLink
              title='Hire me'
              url='/hire-me'
            />
          </div>
        </div>

        {/* right box */}
        <div className=' w-1/2 flex justify-center items-center'>
          <div className='w-2/3 space-x-3 space-y-2'>
            {experties.map((exp) => (
              <Experties_btn title={exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experties;
