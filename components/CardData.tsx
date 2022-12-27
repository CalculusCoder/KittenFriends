import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  email: string;
  id: number;
}

const CardData: React.FC<Props> = ({ name, email, id }) => {
  return (
    <div>
      <div className="bg-violet-300 w-[350px] h-[420px] rounded-lg text-center flex flex-col justify-center items-center">
        <Image
          src={`https://robohash.org/${id}?set=set4`}
          alt="/"
          width={230}
          height={200}
        />
        <h1 className="text-3xl mt-4 mb-4">{name}</h1>
        <h1 className="text-xl">{email}</h1>
      </div>
    </div>
  );
};

export default CardData;
