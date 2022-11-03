import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin: 0 auto;
  max-width: 1280px;
  padding: 30px;
  .section__title {
    align-items: center;
    display: flex;
    justify-content: space-between;
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
    border-radius: 5px;
    border-top: 2px solid #bbb;
    margin-top: 1rem;
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
