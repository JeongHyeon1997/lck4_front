import { Body, Divider, Nav, Login } from "@/styles/headersStyles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoginModal from "./LoginModal";

const Headers = () => {
  const router = useRouter();
  const [location, setLocation] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  useEffect(() => {
    setLocation(router.pathname);
  }, []);

  return (
    <>
      <Body>
        <Nav
          style={{ fontWeight: location == "/" ? "700" : "400" }}
          onClick={() => {
            if (location !== "/") {
              router.push("/");
            }
          }}
        >
          LCK 4
        </Nav>
        <Divider />
        <Nav
          style={{
            fontWeight: location == "/plan" ? "700" : "400",
          }}
          onClick={() => {
            if (location !== "/plan") {
              router.push("/plan");
            }
          }}
        >
          일정
        </Nav>
        <Divider />
        <Nav
          style={{
            fontWeight:
              location == "/record" || location == "/[id]" ? "700" : "400",
          }}
          onClick={() => {
            if (location !== "/record") {
              router.push("/record");
            }
          }}
        >
          기록실
        </Nav>
        <Login
          style={{ fontWeight: "700" }}
          onClick={() => {
            handler();
          }}
        >
          로그인
        </Login>
      </Body>
      <LoginModal
        visible={visible}
        handler={handler}
        closeHandler={closeHandler}
      />
    </>
  );
};

export default Headers;
