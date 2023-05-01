import { useState } from "react";
import {
  Wrapper,
  Text,
  TextContainer,
  Divider,
  DetailText,
} from "@styles/common/Dropdown";

type PropsType = {};

const FIRST_TEXT =
  "通过数字化管理，实现公司标准的落地，根据核心产出的内容物、质量、数量的不同，明确不同任职资格标准，并帮助企业将传统的“等级制”任职资格的能力要求升级为“行为指标”能力要求";

const SECOND_TEXT =
  "运用行业数据和人工智能进行员工效率分析,量身定制人才培养计划,提升员工效率,降低人员流失率,根据企业效能智能分析招聘需求，智能算法筛选简历";
const Dropdown = () => {
  const [detailText, setDetailText] = useState("");
  return (
    <Wrapper>
      <TextContainer>
        <Divider />
        <Text
          onMouseEnter={() => setDetailText(FIRST_TEXT)}
          onMouseLeave={() => setDetailText("")}
        >
          智能效率诊断
        </Text>
        <Text
          onMouseEnter={() => setDetailText(SECOND_TEXT)}
          onMouseLeave={() => setDetailText("")}
        >
          人才管理优化
        </Text>
      </TextContainer>
      {detailText && <DetailText>{detailText}</DetailText>}
    </Wrapper>
  );
};

export default Dropdown;
