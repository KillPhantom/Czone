import Lottie from "lottie-react";
import GraphJson from "@assets/animation/lottie_graph.json";

type PropsType = {
  width?: string;
};
const StaticGraph = ({ width = "500px" }: PropsType) => {
  return (
    <div style={{ width }}>
      <Lottie animationData={GraphJson} loop={true} />
    </div>
  );
};
export default StaticGraph;
