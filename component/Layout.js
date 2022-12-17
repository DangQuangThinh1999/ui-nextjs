import styles from "../styles/Layout.module.css";
import { server } from "../config";
import Grid from "@mui/material/Grid";

import DrawerAppBar from "./DrawerAppBar";

import SimpleBar from "./SimpleBar";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [navbars, setNavbar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${server}/api/navbars`);
      const data = await res.json();
      console.log(data);
      setNavbar(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <DrawerAppBar />
      <div className={styles.container}>
        <Grid container spacing={5}>
          <Grid item xs={2}>
            <SimpleBar navbars={navbars} />
          </Grid>
          <Grid item xs={10}>
            <main className={styles.main}>{children}</main>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
