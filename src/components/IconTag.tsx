import styled from "styled-components";

const IconTagContainer = styled.div`
  display: flex;
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  .icon {
    font-size: 2rem;
    margin-right: 0.25rem;
    color: ${({ color }) => color};
  }
  .value {
    display: flex;
    align-items: center;
  }
`;

interface IconTagProps {
  value: number | string;
  icon: string;
  color?: string;
}

const IconTag = ({ value, icon, color }: IconTagProps) => (
  <IconTagContainer color={color}>
    <i className={`${icon} icon`}></i>
    <span className='value'>{value}</span>
  </IconTagContainer>
);

export default IconTag;
