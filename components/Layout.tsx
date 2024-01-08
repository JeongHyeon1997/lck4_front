import { Body } from "@/styles/globals";
import Footers from "./Footers";
import Headers from "./Headers";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Headers />
      <Body>{props.children}</Body>
      <Footers />
    </>
  );
};

export default Layout;
