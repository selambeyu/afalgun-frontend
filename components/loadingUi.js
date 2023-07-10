import { CircularProgress } from "@mui/material";
import styled from "@emotion/styled";
const CistomedCircularProgress = styled(CircularProgress)`
  color: #1c3879;
`;
export const LoadingUI = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
    <CistomedCircularProgress />
  </div>
);
