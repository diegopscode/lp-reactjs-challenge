import { Wrapper, Option } from "./style";

function ViewStyle({ onClick, value = "all" }) {
  return (
    <Wrapper>
      <Option onClick={() => onClick("all")} active={value === "all"}>
        All
      </Option>
      <Option onClick={() => onClick("section")} active={value === "section"}>
        Sections
      </Option>
    </Wrapper>
  );
}

export default ViewStyle;
