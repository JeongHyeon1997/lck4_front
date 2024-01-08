import styled from "styled-components";
import { Col as NextUICol } from "@nextui-org/react";

export const Body = styled(NextUICol)`
  background-color: #373944;
  height: 45px;
  float: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 15px;
`;

export const Divider = styled.div`
  background: hsla(0, 0%, 100%, 0.2);
  display: inline-flex;
  height: 8px;
  margin-left: 12px;
  margin-right: 12px;
  width: 1px;
`;

export const Title = styled.div`
  font-size: 14px;
  line-height: 100%;
  color: #ffffff;
  cursor: pointer;
`;

export const Nav = styled.div`
  font-size: 14px;
  line-height: 100%;
  color: #ffffff;
  cursor: pointer;
`;

export const Login = styled.div`
  font-size: 14px;
  line-height: 100%;
  color: #ffffff;
  cursor: pointer;
  margin-left: auto;
`;
