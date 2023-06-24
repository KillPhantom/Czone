import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DEMO_PAGE } from "../../Routes";
import {
  Wrapper,
  Header,
  BodyItemWrapper,
  BodyItemText,
  WrapperLayer,
} from "@styles/desktop/ContentCard";

import Rects from "@assets/icons/Rects";
import Button, { BUTTON_TYPE } from "@common/Button";

type PropsType = {
  title: string;
  texts: Array<{ hint: string; body?: string }>;
  alignDirection?: string;
};

const ContentCard = ({ title, texts, alignDirection = "left" }: PropsType) => {
  const navigate = useNavigate();
  return (
    <Wrapper style={{ justifyContent: alignDirection }}>
      <WrapperLayer />
      <Header>{title}</Header>
      {texts.map((item) => (
        <BodyItemWrapper>
          <Rects overrideStyle={{ width: "20px", height: "20px" }} />
          <BodyItemText>{item.hint}</BodyItemText>
        </BodyItemWrapper>
      ))}
      <Button
        variant={BUTTON_TYPE.GHOST}
        overrideStyle={{ marginTop: "20px", maxWidth: "200px" }}
        onClick={() => {
          navigate(DEMO_PAGE);
        }}
      >
        参与内测
      </Button>
    </Wrapper>
  );
};

export default ContentCard;
