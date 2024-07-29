'use client';

import styles from '@Components/header/Header.module.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useRef } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { FormControlLabel, IconButton, ListItem } from '@mui/material';

const Header = () => {
  const headerRef: any = useRef(null);

  return (
    <AppBar ref={headerRef} className={styles.headerBarContainer}>
      <Toolbar className={styles.headerToolbar}>
        <Box className={styles.headerLeft}>
          Samson Portfolio
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box className={styles.headerRight}>
          <FormControlLabel
            control={
              <a target="_top"
                rel="noopener noreferrer"
                href="mailto:lyksamson@gmail.com">
                <IconButton color="primary">
                <EmailIcon /> 
                </IconButton>
              </a>
            }
            label={""}
            labelPlacement="end"
           />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
