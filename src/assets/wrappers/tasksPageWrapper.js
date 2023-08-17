import { styled } from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: -10rem;
  .tasks-container {
  }
  .add-bar {
    position: relative;
  }
  .add-input {
    width: 540px;
    height: 64px;
    border-radius: 5px;
    background: var(--secondary-background);
    box-shadow: var(--task-shadow);
    font-family: inherit;
    font-size: var(--medium-text);
    color: var(--small-text-color);
    padding-left: 3rem;
  }
  .add-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    font-size: var(--large-text);
    color: var(--small-text-color);
  }
`;

export default Wrapper;