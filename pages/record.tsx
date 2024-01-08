import Layout from "@/components/Layout";
import {
  Month,
  MonthContainer,
  Years,
  RecordContainer,
  RecordDate,
  RecordTime,
  RecordTimeAndState,
  RecordState,
  RecordDetails,
  RecordFirstTeam,
  RecordFirstTeamScore,
  RecordColon,
  RecordSecondTeamScore,
  RecordSecondTeam,
} from "@/styles/recordStyles";
import { Record } from "@/utils/dataType";
import { Row } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getRecord } from "./api/getRecord";

const record = () => {
  const [year, setYear] = useState<Number>(0);
  const [month, setMonth] = useState<Number>(0);
  const [date, setDate] = useState<Number>(0);
  const [record, setRecord] = useState<Record[]>();

  useEffect(() => {
    const today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
    setDate(today.getDate());

    setRecord(getRecord(year, month));
  }, []);

  return (
    <Layout>
      <Years>{year.toString()}</Years>
      <MonthContainer>
        {Array.from({ length: 12 }).map((_, index) => (
          <Month
            key={index + 1}
            style={{
              borderBottom:
                month === index + 1 ? "solid 4px rgb(198, 243, 0)" : "",
            }}
            onClick={() => {
              setMonth(index + 1);
            }}
          >
            {index + 1}월
          </Month>
        ))}
      </MonthContainer>
      {record?.map((data, i) => {
        return (
          <RecordContainer key={i}>
            <RecordDate>{data.startDate}</RecordDate>

            <Row style={{ alignItems: "center" }}>
              <RecordTimeAndState>
                <RecordTime>{data.startTime}</RecordTime>
                <RecordState>{data.state}</RecordState>
              </RecordTimeAndState>

              <RecordDetails>
                <RecordFirstTeam win={data.firstTeamWin > data.secondTeamWin}>
                  {data.firstTeam}
                </RecordFirstTeam>
                <RecordFirstTeamScore
                  win={data.firstTeamWin > data.secondTeamWin}
                >
                  {data.firstTeamWin}
                </RecordFirstTeamScore>
                <RecordColon>:</RecordColon>
                <RecordSecondTeamScore
                  win={data.firstTeamWin > data.secondTeamWin}
                >
                  {data.secondTeamWin}
                </RecordSecondTeamScore>
                <RecordSecondTeam win={data.firstTeamWin > data.secondTeamWin}>
                  {data.secondTeam}
                </RecordSecondTeam>
              </RecordDetails>
            </Row>
          </RecordContainer>
        );
      })}
    </Layout>
  );
};

export default record;
