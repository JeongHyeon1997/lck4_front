import { Body, Divider, Nav, Login } from "@/styles/headersStyles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Headers = () => {
  const router = useRouter();
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    setLocation(router.pathname);
  }, []);

  return (
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
        style={{ fontWeight: location == "/plan" ? "700" : "400" }}
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
        style={{ fontWeight: location == "/record" ? "700" : "400" }}
        onClick={() => {
          if (location !== "/record") {
            router.push("/record");
          }
        }}
      >
        기록실
      </Nav>
      <Login
        style={{ fontWeight: location == "/record" ? "700" : "400" }}
        onClick={() => {
          console.log("login");
        }}
      >
        로그인
      </Login>
    </Body>
  );
};

export default Headers;
