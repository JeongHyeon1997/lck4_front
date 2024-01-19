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
  ArrowButton,
  NotInfo,
} from "@/styles/recordStyles";
import { Record } from "@/utils/dataType";
import { Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getRecord } from "./api/getRecord";

const record = () => {
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [date, setDate] = useState<number>(0);
  const [record, setRecord] = useState<Record[]>();
  const router = useRouter();

  useEffect(() => {
    const today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
    setDate(today.getDate());

    getRecord(today.getFullYear(), today.getMonth() + 1).then((res) => {
      setRecord(res);
    });
  }, []);

  useEffect(() => {
    if (year !== 0 && month !== 0) {
      getRecord(year, month).then((res) => {
        setRecord(res);
      });
    }
  }, [year, month]);

  return (
    <Layout>
      <Years>
        <ArrowButton
          onClick={() => {
            setYear(year - 1);
          }}
        >
          {"<"}
        </ArrowButton>
        {year.toString()}
        <ArrowButton
          onClick={() => {
            setYear(year + 1);
          }}
        >
          {">"}
        </ArrowButton>
      </Years>
      <MonthContainer>
        {Array.from({ length: 12 }).map((_, index) => (
          <Month
            key={index + 1}
            style={{
              borderBottom:
                month === index + 1 ? "solid 4px rgb(198, 243, 0)" : "0px",
            }}
            onClick={() => {
              setMonth(index + 1);
            }}
          >
            {index + 1}월
          </Month>
        ))}
      </MonthContainer>

      {record && record?.length > 0 ? (
        record.map((data, i) => {
          const startData = data.startDate.match(/(\d{2}\.\d{2}\([^)]+\))/);
          return (
            <RecordContainer
              key={i}
              onClick={() => {
                router.push(`/${data.id}`);
              }}
            >
              <RecordDate>{startData && startData[1]}</RecordDate>

              <Row style={{ alignItems: "center" }}>
                <RecordTimeAndState>
                  <RecordTime>{data.startTime}</RecordTime>
                  <RecordState>{data.state}</RecordState>
                </RecordTimeAndState>

                <RecordDetails>
                  <RecordFirstTeam
                    onClick={() => {
                      console.log(data.firstTeam);
                    }}
                    win={(data.firstTeamWin > data.secondTeamWin).toString()}
                  >
                    {data.firstTeam}
                  </RecordFirstTeam>
                  <RecordFirstTeamScore
                    win={(data.firstTeamWin > data.secondTeamWin).toString()}
                  >
                    {data.firstTeamWin}
                  </RecordFirstTeamScore>
                  <RecordColon>:</RecordColon>
                  <RecordSecondTeamScore
                    win={(data.firstTeamWin < data.secondTeamWin).toString()}
                  >
                    {data.secondTeamWin}
                  </RecordSecondTeamScore>
                  <RecordSecondTeam
                    win={(data.firstTeamWin < data.secondTeamWin).toString()}
                  >
                    {data.secondTeam}
                  </RecordSecondTeam>
                </RecordDetails>
              </Row>
            </RecordContainer>
          );
        })
      ) : (
        <NotInfo>해당 날짜에 정보가 없습니다.</NotInfo>
      )}
    </Layout>
  );
};

export default record;
