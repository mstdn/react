import { Ground } from "./world/Ground"
import Ocean from "./world/Ocean"
import Platforms from "./world/Platforms"
import { GTA } from "./world/models/GTA"
import { PokeCity } from "./world/models/PokeCity"

export default function World(props)
{
    const { char, downgradedPerformance } = props
    
    return(
    <>
        <group>
            <PokeCity position={ [ 0, 0, 20 ] } />
            {/* <Platforms /> */}
            {/* <Ground /> */}
            {/* <Ocean /> */}
            {/* <Environment /> */}
        </group>
    </>
    )
}