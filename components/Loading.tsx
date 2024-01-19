import {
  LoadingText,
  NextUiFullScreen,
  NextUiFullScreenLoading,
  NextUiLoading,
} from "@/styles/loadingStyles";

export const Loading = () => {
  return <NextUiLoading size="xl" />;
};

export const FullScreenLoading = () => {
  return (
    <NextUiFullScreen>
      <NextUiFullScreenLoading size="xl" />
    </NextUiFullScreen>
  );
};

export const InspectionLoading = () => {
  return (
    <>
      <NextUiLoading size="xl" style={{ position: "absolute" }} />
      <LoadingText>Loading ...</LoadingText>
    </>
  );
};
