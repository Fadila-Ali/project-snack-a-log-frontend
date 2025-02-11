import React from "react";
import { useState } from "react";
import * as tailwind from "../css/styles";
import "../css/modal.css";
import { AiFillLinkedin } from "react-icons/ai"
import { FaGithubSquare } from "react-icons/fa"
import { MdEmail} from "react-icons/md"
import pic from "../assets/60a09d6a-d1ad-4feb-a935-994ca49cc05a.jpeg"

export default function Tony() {
  const [viewModal, setViewModal] = useState(false);

  return (
    <div className="flex flex-col p-4 m-4">
      <div className="flex">
        <img src={pic} alt="pic" className="w-20 h-20 rounded-full"></img>
        <div className="px-2">
          <h3 className="text-4xl">Tony Hoang</h3>
          <h5>Developer</h5>
        </div>
      </div>
      <div className="pt-2">
        <button
          className={tailwind.button}
          onClick={() => setViewModal(!viewModal)}
        >
          {viewModal ? "Close" : "Show More"}
        </button>
        {viewModal ? (
          <div className="dev">
            <p>
              Currently learning Fullstack Web Development at the Pursuit
              Institute.
            </p>
            <h4 className="p-4 text-center">
              Contact me <span>&#9786;</span>
            </h4>
            <div className="flex p-4 justify-center items-center">
              <a
                href="https://www.linkedin.com/in/tony-hoang-3a4907182/"
                target="_blank"
                rel="noreferrer"
                className="px-4 text-5xl text-blue-500"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/TonyH98"
                target="_blank"
                rel="noreferrer"
                className="px-4 text-5xl text-slate-800"
              >
                <FaGithubSquare />
              </a>
              <a
                href="mailto: tonyhoang@pursuit.org "
                target="_blank"
                rel="noreferrer"
                className="px-4 text-5xl text-red-500"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
