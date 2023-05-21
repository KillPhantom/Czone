import { useState } from "react";
import {
  Wrapper,
  Text,
  TextContainer,
  Divider,
  DetailText,
} from "@styles/desktop/DropdownSection";

type PropsType = { shouldRenderMobileComponent: boolean };

const DropdownSection = () => {
  const [detailText, setDetailText] = useState(0);

  return (
    <Wrapper>
      <TextContainer>
        <Divider />
        <Text
          onMouseEnter={() => setDetailText(1)}
          onMouseLeave={() => setDetailText(0)}
        >
          公司结构优化
        </Text>
        <Text
          onMouseEnter={() => setDetailText(2)}
          onMouseLeave={() => setDetailText(0)}
        >
          员工日常管理
        </Text>
        <Text
          onMouseEnter={() => setDetailText(3)}
          onMouseLeave={() => setDetailText(0)}
        >
          人员队伍扩张
        </Text>
      </TextContainer>
      {detailText === 1 && (
        <div style={{ display: "block" }}>
          <DetailText>岗位优化 - 甄别可以增加、兼并的岗位</DetailText>
          <DetailText>绩效对标 - 对标同行业同岗位绩效</DetailText>
          <DetailText>架构梳理 - 组织架构、汇报线梳理优化</DetailText>
        </div>
      )}
      {detailText === 2 && (
        <div style={{ display: "block" }}>
          <DetailText>绩效考核 - 提高日常绩效管理效率 </DetailText>
          <DetailText>
            薪酬管理 - 优化薪酬结构，充分调动员工积极性，以提高业绩和方便管理
          </DetailText>
          <DetailText>员工培训 - 员工日常技能培训，如干部夜校等</DetailText>
        </div>
      )}
      {detailText === 3 && (
        <div style={{ display: "block" }}>
          <DetailText>
            精准需求 - 精准识别人才需求，匹配相应人才以适应公司快速的业务扩张{" "}
          </DetailText>
          <DetailText>
            人才对接 - 缩短新员工适应时间，保证公司扩张过程中的平稳过度
          </DetailText>
          <DetailText>招聘加速 - 智能化提效简历初筛等招聘流程</DetailText>
        </div>
      )}
    </Wrapper>
  );
};

export default DropdownSection;
