import Layout from "@/components/Layout";
import { Match, Row, Team, Score, Win } from "@/styles/idStyles";
import { Record } from "@/utils/dataType";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getRecordResults } from "./api/getRecordResults";

const id = () => {
  const [record, setRecord] = useState<Record>();
  const router = useRouter();
  useEffect(() => {
    const id = Number(location.pathname.split("/")[1]);
    getRecordResults(id).then((res) => {
      setRecord(res[0]);
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
    </Layout>
  );
};
export default id;
