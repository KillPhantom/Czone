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

{
  /* <CardWrapper>
<Card
  title="精简人力管理流程"
  body="AI自动化绩效管理、人才招聘、企业培训等流程, 提高管理效率，加强公司凝聚力"
  icon={<Rects />}
/>
<Card
  title="定制化提高人效"
  body="利用独有行业数据库，对标企业同行标杆，筛查低效人力、管理环节，精简企业人力结构，助力公利用最小人力成本实现最大营收回报"
  icon={<Earth />}
/>
<Card
  title="精准捕捉人才需求"
  body="根据企业发展阶段、利用AI定制化人才需求画像、筛选候选人，缩短招聘流程，提高招聘效率，帮助公司出海、转型、迈上行业新台阶"
  icon={<Circle />}
/>
</CardWrapper> */
}
