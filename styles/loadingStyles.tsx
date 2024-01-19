import { Loading as NextUILoading } from "@nextui-org/react";
import styled from "styled-components";

export const LoadingText = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: calc(50% + 64px);
  left: 50%;
  color: #ffffff;
  font-size: 15px;
`;

export const NextUiLoading = styled(NextUILoading)`
  --nextui--loadingColor: #373944;
  position: fixed;
  z-index: 99999;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  & > span > i._2 {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const NextUiFullScreenLoading = styled(NextUILoading)`
  --nextui--loadingColor: #ffffff;
  position: fixed;
  z-index: 9999;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

export const NextUiFullScreen = styled.div`
  position: fixed;
  width: 100%;
  max-width: 500px;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #000000;
`;
