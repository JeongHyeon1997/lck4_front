import { onJoin } from "@/utils/onJoin";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { useState } from "react";
import { Loading } from "./Loading";
import { Mail } from "./Mail";
import { Password } from "./Password";

const JoinModal = (props: any) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <div>
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={props.visible}
          onClose={props.closeHandler}
          style={{ zIndex: "99998" }}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              회원가입
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="소환사명"
              contentLeft={<Mail fill="currentColor" />}
              onChange={(e) => {
                setUserName(e.currentTarget.value);
              }}
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Password"
              contentLeft={<Password fill="currentColor" />}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onPress={props.closeHandler}>
              닫기
            </Button>
            <Button
              auto
              onClick={async () => {
                setLoading(true);
                await onJoin(userName, password).then((res) => {
                  setLoading(false);
                  if (res === "success") {
                    props.closeHandler();
                  } else {
                    alert("회원가입에 실패했습니다.");
                  }
                });
              }}
            >
              회원가입
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {loading && <Loading />}
    </>
  );
};

export default JoinModal;
