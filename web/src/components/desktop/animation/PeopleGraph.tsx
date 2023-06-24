import Lottie from "lottie-react";
import PeopleJson from "@assets/animation/lottie_people.json";

type PropsType = {
  width?: string;
};

const PeopleGraph = ({ width = "500px" }: PropsType) => {
  return (
    <div style={{ width }}>
      <Lottie animationData={PeopleJson} loop={true} />
    </div>
  );
};
export default PeopleGraph;
