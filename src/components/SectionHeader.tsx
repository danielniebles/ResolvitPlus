import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 30px;
  .section__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    display: flex;
    h1 {
      font-size: var(--h1-font-size);
    }
  }
  i {
    font-size: 2rem;
    margin-right: 1rem;
  }
  hr.rounded {
    margin-top: 1rem;
    border-top: 2px solid #bbb;
    border-radius: 5px;
  }
`;

interface HeaderProps {
  title: string;
  icon: string;
  onClick: (arg: any) => void;
}

const SectionHeader = ({ title, icon, onClick }: HeaderProps) => (
  <>
    <Container>
      <div className="section__title">
        <div className="title">
          <i className={icon}></i>
          <h1>{title}</h1>
        </div>
        <PrimaryButton text="See more" onClick={onClick} border="10px" />
      </div>
      <hr className="rounded"></hr>
    </Container>
  </>
);

export default SectionHeader;
