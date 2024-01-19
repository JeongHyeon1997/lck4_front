import Layout from "@/components/Layout";
import {
  Match,
  Row,
  Team,
  Score,
  Win,
  Details,
  UserName,
  LineImage,
  LineUpRow,
  Info,
  MvpSpan,
} from "@/styles/idStyles";
import { Match as TypeMatch, Record } from "@/utils/dataType";
import { lineImage } from "@/utils/lineImage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getRecordMatch } from "./api/getRecordMatch";
import { getRecordResults } from "./api/getRecordResults";

const id = () => {
  const [record, setRecord] = useState<Record>();
  const [match, setMatch] = useState<TypeMatch[]>();
  const [firstTeam, setFirstTeam] = useState<string>();
  const [secondTeam, setSecondTeam] = useState<string>();
  const [lineSVG, setLineSVG] = useState<string[]>([]);
  const router = useRouter();
  useEffect(() => {
    const id = Number(location.pathname.split("/")[1]);
    getRecordResults(id).then((res) => {
      setRecord(res[0]);
      setFirstTeam(res[0].firstTeam);
      setSecondTeam(res[0].secondTeam);
    });
    getRecordMatch(id).then((res) => {
      setMatch(res);
    });
    setLineSVG(lineImage());
  }, []);
  return (
    <Layout>
      <Match>MATCH</Match>
      {record && (
        <Row>
          <Team win={(record.firstTeamWin > record.secondTeamWin).toString()}>
            {record.firstTeam}
          </Team>
          <Score win={(record.firstTeamWin > record.secondTeamWin).toString()}>
            {record.firstTeamWin}
          </Score>
          <Win>WIN</Win>
          <Score win={(record.firstTeamWin < record.secondTeamWin).toString()}>
            {record.secondTeamWin}
          </Score>
          <Team win={(record.firstTeamWin < record.secondTeamWin).toString()}>
            {record.secondTeam}
          </Team>
        </Row>
      )}
      <Details>LINEUP</Details>
      <Info>
        * <MvpSpan>MVP</MvpSpan>는 황금색으로 표시됩니다.
      </Info>
      {match &&
        match.map((v, i) => {
          console.log(v);
          return (
            <LineUpRow key={i}>
              <img src={lineSVG[i]} />
              <UserName mvp={v.fristTeamUserMVP}>
                {v.fristTeamUserName}
              </UserName>
              <LineImage src={lineSVG[i]} />
              <UserName mvp={v.secondTeamUserMVP}>
                {v.secondTeamUserName}
              </UserName>
              <img src={lineSVG[i]} />
            </LineUpRow>
          );
        })}
    </Layout>
  );
};
export default id;
