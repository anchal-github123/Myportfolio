import Lottie from "lottie-react";
import Animation from "../assets/girl on computer.json";
import Typewriter from "typewriter-effect";
export default function Heropage() {
  return (
    <div className="grid lg:grid-cols-2 lg:px-20 overflow-hidden">
<div className="flex flex-col items-center  justify-center lg:items-start  font-heading ">
  <h1 className="text-3xl lg:text-6xl " >Hii, I'm Anchal 🖐️</h1>
  <h2 className="text-3xl mt-2 text-gray-200">
  <Typewriter
    options={{
      strings: ["Frontend Developer", "Freelancer"],
      autoStart: true,
      loop: true,
    }}
  />
</h2>
</div>
     <div className="flex items-center justify-center ">
     <Lottie animationData={Animation}></Lottie>
    </div>
    </div>
  );
}
