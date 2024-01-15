import styled from "styled-components";
import { Row as NextUIRow, Col as NextUICol } from "@nextui-org/react";
import { styledInterface } from "@/utils/dataType";
export const Match = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 16px;
  padding-right: 6px;

  font-size: 14px;
  line-height: 20px;
  color: var(--text-02);
  font-weight: 700;
`;

export const Row = styled(NextUIRow)`
  justify-content: center;
  align-items: center;
`;

export const Team = styled(NextUICol)<styledInterface["styledInterface"]>`
  opacity: ${(props) => (props.win === "true" ? "1" : "0.3")};
  float: none;
  width: auto;
  font-weight: 900;
  color: rgb(255, 255, 255);
  font-size: 29px;
  line-height: 32px;
  margin: 0 30px;
`;

export const Score = styled(NextUICol)<styledInterface["styledInterface"]>`
  opacity: ${(props) => (props.win === "true" ? "1" : "0.3")};
  float: none;
  width: auto;
  font-weight: 900;
  color: rgb(255, 255, 255);
  font-size: 32px;
  line-height: 32px;
  margin: 0 30px;
`;

export const Win = styled(NextUICol)`
  float: none;
  width: auto;
  position: relative;
  font-size: 20px;
  line-height: 28px;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 700;
  color: white;
  background-color: rgb(0, 0, 0);
  margin: 0 30px;
`;

export const Details = styled.h3`
  font-size: 16px;
  line-height: 24px;
  font-family: gmarket, sans-serif;
  margin-top: 64px;
  margin-bottom: 44px;
  font-weight: 900;
`;
