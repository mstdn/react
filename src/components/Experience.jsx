import { useRef } from 'react'
import Ecctrl from 'ecctrl'
import Lights from './Lights'
import World from './World'
import Effects from './Effects'
import Player from './Player'
import { Elon } from './world/models/Elon'
import { Ghost } from './world/models/ghost'

export default function Experience({ downgradedPerformance = false })
{
    const ref = useRef()

    return(
        <>
            {/* <Player ref={ ref } /> */}
            <Ecctrl 
                mode="PointToMove"
                // camInitDir={  }
                // camMinDis={ - 9 }
                maxVelLimit="5"
                position={ [ 0, 10, 0 ] }
            >
              <Ghost scale={ 0.5 } />
              {/* <Player ref={ ref } /> */}
            </Ecctrl>
            <World char={ ref } />
            <Lights 
                char={ ref }
                downgradedPerformance={ downgradedPerformance } 
            />
            { !downgradedPerformance && (
                <Effects />
            )}
        </>
    )
}