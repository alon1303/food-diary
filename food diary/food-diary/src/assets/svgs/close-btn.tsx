import * as React from "react"
import { SVGProps } from "react"
const CloseBtn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
  
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    className="close-btn"
  >
    <circle cx={12} cy={12} r={10} stroke="#1C274C" strokeWidth={1.5} />
    <path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14.5 9.5-5 5m0-5 5 5"
    />
  </svg>
)
export default CloseBtn;
