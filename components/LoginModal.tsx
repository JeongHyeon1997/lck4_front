import { Modal, Button, Text, Input, Row } from "@nextui-org/react";
import { useState } from "react";
import { Password } from "./Password";
import JoinModal from "./JoinModal";
import { Mail } from "./Mail";

const LoginModal = (props: any) => {
  const [visible, setVisible] = useState<boolean>(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <div>
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={props.visible}
          onClose={props.closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              LCK 4부리그
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
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Password"
              contentLeft={<Password fill="currentColor" />}
            />
            <Row justify="space-between">
              <Text
                size={14}
                onClick={() => {
                  handler();
                  props.closeHandler();
                }}
              >
                회원가입
              </Text>
              <Text size={14}>Forgot password?</Text>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onPress={props.closeHandler}>
              닫기
            </Button>
            <Button auto onPress={props.closeHandler}>
              로그인
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <JoinModal
        visible={visible}
        handler={handler}
        closeHandler={closeHandler}
      />
    </>
  );
};

export default LoginModal;
