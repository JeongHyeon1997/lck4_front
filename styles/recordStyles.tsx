import styled from "styled-components";
import { styledInterface } from "@/utils/dataType";
import { Button, Col as NextUICol } from "@nextui-org/react";
import { Row as NextUIRow } from "@nextui-org/react";

export const Years = styled(NextUICol)`
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 15px;
  float: none;
`;

export const Month = styled(NextUICol)`
  padding: 7px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  float: none;
`;

export const MonthContainer = styled(NextUIRow)`
  font-size: 16px;
  line-height: 24px;
  color: white;
  font-weight: 700;
  background-color: rgb(41, 41, 46);
  border-radius: 8px;
  padding: 0 15px;
  float: none;
  margin-bottom: 15px;
`;

export const RecordContainer = styled(NextUICol)`
  opacity: 0.87;
  background-color: rgb(41, 41, 46);
  padding: 10px 0;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const RecordDate = styled(NextUICol)`
  display: flex;
  column-gap: 8px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 700;
  padding: 12px 20px;
  opacity: 0.87;
  background-color: rgb(41, 41, 46);
  color: white;
  border-radius: 8px 8px 0px 0px;
  border-left: 0px solid transparent;
  font-size: 14px !important;
  line-height: 20px !important;
`;

export const RecordTimeAndState = styled(NextUICol)`
  padding: 0 15px;
  width: auto;
`;

export const RecordState = styled(NextUICol)`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 30px;
  height: 21px;
  border-radius: 4px;
  font-size: 10px;
  line-height: 21px;
  color: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  float: none;
`;

export const RecordTime = styled(NextUICol)`
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  opacity: 0.7;
  margin-bottom: 7px;
  float: none;
`;

export const RecordDetails = styled(NextUIRow)``;

export const RecordFirstTeam = styled(NextUICol)<
  styledInterface["styledInterface"]
>`
  opacity: ${(props) => (props.win === "true" ? "1" : "0.3")};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
`;

export const RecordFirstTeamScore = styled(NextUICol)<
  styledInterface["styledInterface"]
>`
  opacity: ${(props) => (props.win === "true" ? "1" : "0.3")};
  width: auto;
  font-weight: 700;
`;

export const RecordColon = styled(NextUICol)`
  width: auto;
  margin: 0 15px;
`;

export const RecordSecondTeamScore = styled(NextUICol)<
  styledInterface["styledInterface"]
>`
  opacity: ${(props) => (props.win === "true" ? "1" : "0.3")};
  width: auto;
  font-weight: 700;
`;

export const RecordSecondTeam = styled(NextUICol)<
  styledInterface["styledInterface"]
>`
  opacity: ${(props) => (props.win === "true" ? "1" : "0.3")};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
`;

export const ArrowButton = styled(Button)`
  width: 20px;
  background: transparent;
  min-width: auto;
`;
