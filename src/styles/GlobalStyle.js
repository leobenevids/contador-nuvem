import styled from "styled-components";

export const Wrapper = styled.div`
  color: #fff;
  background: #6272a4;
  height: 100%;
  width: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Blanket = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 30px;
  height: 30px;
`;

export const Viewer = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  background: #50fa7b;
  color: black;
  font-size: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  box-shadow: 1px 1px 0px #44475a, 2px 2px 0px #44475a, 3px 3px 0px #44475a,
    4px 4px 0px #44475a, 5px 5px 0px #44475a, 6px 6px 0px #44475a;
`;

export const Title = styled.h1`
  font-weight: bold;
  color: black;
`;
