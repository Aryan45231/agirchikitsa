import styled from "styled-components";
import Fonts from "../../res/fonts";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 300px;
  padding: 12px;
  background: #f3f6f8;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  margin: 10px;
  transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    border: 2px solid #00c1a3;
    box-shadow: 0px 4px 12px rgba(0, 193, 163, 0.4); 
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-bottom: 9px;
`;
const StraightLine = styled.div`
  width: 80%;
  height: 0px;
  border: 1px solid #d1d5db;
`;
const Body = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 220px;
  background: #ffffff;
  border: 0.5px solid #d1d5db;
  border-radius: 6px;
  margin-bottom: 6px;
  overflow: auto;
`;
const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: #ffffff;
  border: 0.5px solid #d1d5db;
  border-radius: 6px;
`;
export default function CustomCard({ title, body, footer }) {
  return (
    <Container>
      <Header>
        <Fonts.RegularFont fontSize={20} lineHeight={30}>
          {title}
        </Fonts.RegularFont>
        <StraightLine />
      </Header>
      <Body>{body}</Body>
      <BottomContainer>{footer}</BottomContainer>
    </Container>
  );
}
