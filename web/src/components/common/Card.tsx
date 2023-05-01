/* Styles */
import { Wrapper, Title, Body, IconWrapper } from "@styles/common/Card";

type PropsType = {
  title: string;
  icon: any;
  body: string;
};

const Card = ({ title, icon, body }: PropsType) => {
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Wrapper>
  );
};

export default Card;
