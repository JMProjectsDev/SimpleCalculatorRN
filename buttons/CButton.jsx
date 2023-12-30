import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
const CButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={78}
    height={78}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Circle
        cx={39}
        cy={35}
        r={35}
        fill="#B0B0B0"
        fillOpacity={0.21}
        shapeRendering="crispEdges"
      />
    </G>
    <Path
      fill="#000"
      d="M50.386 30.332h-3.989c-.153-.852-.439-1.602-.856-2.25a6.298 6.298 0 0 0-1.534-1.649 6.61 6.61 0 0 0-2.033-1.023 7.936 7.936 0 0 0-2.365-.345c-1.509 0-2.86.38-4.053 1.138-1.184.759-2.122 1.87-2.812 3.337-.682 1.466-1.023 3.255-1.023 5.37 0 2.13.341 3.928 1.023 5.394.69 1.466 1.632 2.574 2.825 3.324 1.193.75 2.536 1.125 4.027 1.125.827 0 1.61-.111 2.352-.333a6.776 6.776 0 0 0 2.033-1.01 6.12 6.12 0 0 0 2.416-3.848l3.989.013a10.68 10.68 0 0 1-1.24 3.554 9.809 9.809 0 0 1-2.34 2.787 10.58 10.58 0 0 1-3.247 1.803c-1.219.426-2.548.639-3.988.639-2.268 0-4.287-.537-6.06-1.61-1.773-1.083-3.17-2.63-4.193-4.642-1.015-2.01-1.522-4.41-1.522-7.197 0-2.795.512-5.194 1.534-7.197 1.023-2.012 2.42-3.554 4.194-4.628C35.296 22 37.312 21.46 39.57 21.46c1.389 0 2.684.2 3.886.601 1.21.392 2.297.972 3.26 1.739a9.564 9.564 0 0 1 2.39 2.787c.631 1.09 1.057 2.34 1.279 3.745Z"
    />
    <Defs></Defs>
  </Svg>
)
export default CButton
