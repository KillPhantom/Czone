import Lottie from "lottie-react";
import JsonFile from "@assets/animation/lottie_efficiency.json";

type PropsType = {
  width?: string;
  marginTop?: string;
};

const EfficiencyGraph = ({
  width = "500px",
  marginTop = "100px",
}: PropsType) => {
  return (
    <div style={{ width, marginTop }}>
      <Lottie animationData={JsonFile} loop={true} />
    </div>
  );
};
export default EfficiencyGraph;
