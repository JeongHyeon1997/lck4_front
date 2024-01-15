import Layout from "@/components/Layout";
import { Match, Row, Team, Score, Win, Details } from "@/styles/idStyles";
import { Match as TypeMatch, Record } from "@/utils/dataType";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getRecordMatch } from "./api/getRecordMatch";
import { getRecordResults } from "./api/getRecordResults";

const id = () => {
  const [record, setRecord] = useState<Record>();
  const [match, setMatch] = useState<TypeMatch[]>();
  const [firstTeam, setFirstTeam] = useState<string>();
  const [secondTeam, setSecondTeam] = useState<string>();
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
      {match &&
        match.map((v, i) => {
          console.log(v);
          return (
            <Row key={i}>
              <img src="/svg/top_active.svg" />
            </Row>
          );
        })}
    </Layout>
  );
};
export default id;
