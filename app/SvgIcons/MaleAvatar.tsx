import * as React from "react"
import Svg, { Path, Ellipse, Circle } from "react-native-svg"

function MaleAvatar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg viewBox="0 0 198.496 198.496" width="1em" height="1em" {...props}>
      <Path fill="#fdcc9b" d="M84.55 148.231h29.395v32.922H84.55z" />
      <Path
        d="M84.551 152.108s12.365 7.874 29.395 6.05v-9.928H84.551v3.878z"
        fill="#fcbc85"
      />
      <Ellipse cx={42.164} cy={97.181} rx={14.343} ry={16.364} fill="#fcbc85" />
      <Ellipse
        cx={156.332}
        cy={97.181}
        rx={14.343}
        ry={16.364}
        fill="#fcbc85"
      />
      <Path
        d="M156.274 65.925c0-24.103-17.637-41.741-57.026-41.741S42.222 41.821 42.222 65.925s-4.115 87.597 57.026 87.597c61.141 0 57.026-63.493 57.026-87.597z"
        fill="#fdcc9b"
      />
      <Ellipse cx={71.472} cy={93.262} rx={6.173} ry={6.761} fill="#3b2519" />
      <Circle cx={68.781} cy={90.277} r={1.846} fill="#fff" />
      <Path
        d="M61.597 76.507c2.919 1.46 7.606-4.96 18.335.625 1.956 1.018 3.123-8.708-8.377-8.708-9.958 0-11.722 7.202-9.958 8.083z"
        fill="#51362a"
      />
      <Ellipse cx={127.786} cy={93.262} rx={6.173} ry={6.761} fill="#3b2519" />
      <Circle cx={125.095} cy={90.277} r={1.846} fill="#fff" />
      <Path
        d="M136.899 76.507c-2.919 1.46-7.606-4.96-18.335.625-1.956 1.018-3.123-8.708 8.378-8.708 9.957 0 11.72 7.202 9.957 8.083z"
        fill="#51362a"
      />
      <Path
        d="M99.248 117.043c-6.1 0-9.774-4.556-9.774-2.352 0 2.205 1.764 6.394 9.774 6.394s9.774-4.189 9.774-6.394-3.675 2.352-9.774 2.352zM99.248 137.313c-2.11 0-3.381-1.576-3.381-.813s.61 2.211 3.381 2.211 3.38-1.448 3.38-2.211-1.271.813-3.38.813z"
        fill="#fcbc85"
      />
      <Path
        d="M99.248 131.696c-9.668 0-15.493-3.937-15.493-2.939 0 .998 2.796 4.924 15.493 4.924 12.697 0 15.493-3.926 15.493-4.924-.001-.998-5.825 2.939-15.493 2.939z"
        fill="#f7945e"
      />
      <Path
        d="M99.248 161.458v37.038H27.821c0-14.992 37.623-37.038 71.427-37.038zM99.248 161.458v37.038h71.427c0-14.992-37.623-37.038-71.427-37.038z"
        fill="#f7941e"
      />
      <Path
        d="M99.248 161.458c-7.19 0-14.552 1.005-21.689 2.72.048.063 7.916 10.214 21.689 10.214 12.754 0 21.233-8.693 22.462-10.03-7.378-1.831-15.012-2.904-22.462-2.904z"
        fill="#f36c21"
      />
      <Path
        d="M84.55 162.74s4.299 5.332 14.697 5.332 14.698-5.332 14.698-5.332-15.248-5.551-29.395 0z"
        fill="#fdcc9b"
      />
      <Path
        d="M146.132 19.041S124.968-7.855 80.98 2.286c-43.987 10.14-47.283 36.596-45.96 62.335 1.323 25.74 4.85 40.84 9.022 38.974 4.172-1.867 2.001-18.857 2.442-22.778.441-3.921 4.409-21.653 31.162-19.007 26.752 2.646 49.296-7.055 49.296-7.055s9.075 11.471 15.047 13.669c11.934 4.391 8.02 33.67 12.696 33.67s27.603-67.621-8.553-83.053z"
        fill="#51362a"
      />
    </Svg>
  )
}

export default MaleAvatar
