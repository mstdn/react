import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { KeyboardControls, PointerLockControls, Preload, PerformanceMonitor } from '@react-three/drei'
import { Perf } from "r3f-perf"
import { isMobile, isDesktop } from "react-device-detect"
import { LoadingScreen } from "./components/Loadingscreen"
import Experience from "./components/Experience"
import { Physics } from "@react-three/rapier"
import Joystick from "./components/Joystick"
import Interface from "./components/Interface"
import MobileInterface from "./components/MobileInterface"

export default function App()
{
  const [ downgradedPerformance, setDowngradedPerformance ] = useState(false)
  const [ started, setStarted ] = useState(false)
  
  const keyboardMap = 
    [
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        { name: "jump", keys: ["Space"] },
        { name: "run", keys: ["Shift"] },
        // { name: "up", keys: ["KeyQ"] },
        // { name: "down", keys: ["KeyE"] },
        // Optional animation key map
        { name: "action4", keys: ["1"] },
        { name: "action2", keys: ["2"] },
        { name: "action3", keys: ["3"] },
        // { name: "action4", keys: ["4"] },
    ]

  return (
  <>
    { !started && (
      <LoadingScreen 
          started={ started } 
          setStarted={ setStarted }
      />
    ) }
    {/* { isMobile && started && (
        <Joystick />
    ) } */}
    {/* <KeyboardControls map={ keyboardMap }> */}
        <Canvas
          shadows={ !downgradedPerformance }
          // camera={ { fov: 80, far: 800, near: 0.1, } }
          // dpr={ [ 1, 1.5 ] }
        >
          <fog attach="fog" args={["#ffffff", 20, 500]} />
          <Physics
            timeStep="vary"
          >
            <Suspense>
            { started && (
                <>
                    <Experience downgradedPerformance={ downgradedPerformance } />
                    <Preload all />
                </>
            )}
            </Suspense>
          </Physics>
          {/* <Perf /> */}
        </Canvas>
        {/* { isDesktop && started && (
           <Interface />
        ) }
        { isMobile && started && (
            <MobileInterface />
        )} */}
    {/* </KeyboardControls> */}
  </>
  );
}
