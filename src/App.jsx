import "./App.css";
import { Axe } from "./components/Axe";

import {
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Suspense } from "react";


function App() {
  return (
    <>
      <ambientLight color="green" intensity={60} />
      <pointLight position={[2, 3, 7]} intensity={20} color={"white"} />
      <color attach="background" args={["#111"]} />
      <ScrollControls pages={6} damping={0.3} distance={1}>
        <Suspense fallback={null}>
          <Axe scale={2} />
        </Suspense>
        <Scroll html style={{ width: "100%" }}>
          <div className="relative h-[600vh]">
            <main className="flex flex-col relative min-h-[500vh]">
              <section className="h-[100vh] w-[100vw] flex items-end justify-center mb-[900px]">
                <div className="pb-[100px]">
                  <h1 className="text-[100px] text-[#fff] uppercase text-center font-[700] leading-[120%]">
                    Magic axe
                  </h1>
                  <p className="text-center text-[#ffffff81] text-[20px]">
                    prepared for everything.
                  </p>
                </div>
              </section>
              <section className="relative w-[100%] mb-[1100px]">
                <div className="max-w-[1240px] mt-[0px] mb-[0px] ml-[auto] mr-[auto] ">
                  <h2 className="text-[#fff] text-[50px] sticky top-[0] mb-[10px]">
                    About our product
                  </h2>
                  <p className="max-w-[500px] text-[#e4e4e4]">
                    A magic axe is a mystical weapon imbued with supernatural
                    powers, often found in fantasy worlds. Its blade gleams with
                    an otherworldly light, sometimes glowing with runes or
                    enchanted symbols etched into the metal. The handle may be
                    crafted from ancient wood, dragon bone, or rare enchanted
                    materials, granting the wielder enhanced strength,
                    precision, or magical abilities.
                  </p>
                </div>
              </section>
              <section className=" relative">
                <div className="max-w-[1240px] mt-[0px] mb-[0px] ml-[auto] mr-[auto] w-[100%] flex items-end flex-col">
                  <h2 className="text-[#fff] text-[50px] sticky top-[0] mb-[10px]">
                    What we do
                  </h2>
                  <p className="max-w-[500px] text-[#e4e4e4] text-right">
                    We create different kinds of weapons for our clients. Since
                    2002 we left 1000+ clients satisfied. Our mission is to make
                    a weapon world better and fullfilled with more quality. You
                    can help us do this! Order your personal axe right now!
                  </p>
                </div>
              </section>
            </main>
            <footer className="bg-[#29292949] h-[100vh] [backdrop-filter:blur(10px)] absolute bottom-[0] left-[0] w-[100%]">
              <div className="max-w-[1400px] m-[0_auto] flex justify-between items-center h-[100%]">
                <div>
                  <h2 className="text-[#fff] text-[50px] mb-[20px]">
                    Contact us
                  </h2>
                  <form className="flex flex-col gap-[10px] w-[400px]">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-[100%] p-[5px_10px] h-[40px] text-[green] bg-[#29292949] border-[1px] [outline:none] border-[#ffffff81] text-[18px]"
                    />
                    <input
                      type="text"
                      placeholder="Your email"
                      className="w-[100%] p-[5px_10px] h-[40px] text-[green] bg-[#29292949] border-[1px] [outline:none] border-[#ffffff81] text-[18px]"
                    />
                    <textarea
                      type="text"
                      placeholder="Your message"
                      className="w-[100%] p-[5px_10px] text-[green] bg-[#29292949] border-[1px] [outline:none] border-[#ffffff81] text-[18px] [resize:none]"
                      rows={10}
                    />
                    <div className="w-[100%] bg-[green] text-center h-[60px] flex items-center justify-center text-[#fff] text-[20px] cursor-pointer">
                      Send message
                    </div>
                  </form>
                </div>
                <div>
                  <div className="text-[#fff]">
                    <h2 className="text-[100px] text-right leading-[100%]">
                      Made
                    </h2>
                    <h2 className="text-[70px] text-right leading-[110%]">
                      by
                    </h2>
                    <h2 className="text-[120px] font-[500] uppercase text-right leading-[90%] [-webkit-text-stroke:2px_white] text-[#29292949]">
                      Ocean
                    </h2>
                    <h2 className="text-[120px] font-[500] uppercase text-right leading-[90%] [-webkit-text-stroke:2px_white] text-[#29292949]">
                      Studio
                    </h2>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
