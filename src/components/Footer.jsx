import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className=" bg-gray-200 py-[1em]">
      <div className="mx-auto container flex flex-col justify-center items-center gap-3 pb-4">
        <div>
          <p className="text-center">AppointCare</p>
          <p className="text-center">
            P.O.Box: 76393 - 00508 <br />
            Nairobi, Kenya
          </p>
          <p className="text-center">TEL: +254769661795</p>
        </div>
        <div className="flex gap-10">
          <div>
            <BsInstagram size={30} />
          </div>
          <div>
            <BsFacebook size={30} />
          </div>
          <div>
            <BsTwitter size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
