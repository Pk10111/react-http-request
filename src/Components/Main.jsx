import React from "react";
import styles from "./main.module.css";
import Card from "@mui/material/Card";

export const Main = ({ children }) => {
  return (
    <Card className={styles["gs-main-main-wrapper"]} variant="outlined">
      {children}
    </Card>
  );
};
