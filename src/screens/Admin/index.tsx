import React, { useState } from 'react'
import { DrawerMenu } from 'components/DrawerMenu';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { CustomCard } from 'components/CustomCard';

const useStyles = makeStyles(({
  root: {
    display: 'flex',
    flexFlow: 'row',
  },

  detailPage: {
    display: 'flex',
    flexFlow: 'row wrap',
    paddingLeft: 20,
    paddingTop: 30,
  }
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


export const AdminLayout = () => {
  const classes = useStyles();



  return (
    <div>
      <div className={classes.root}>
        <DrawerMenu />
        <div className={classes.detailPage}>
          <CustomCard
            heading="Số khóa học"
            title="20"
            subtitle='khóa'
            buttonText='Xem chi tiết'
            page='course'
          />
          <CustomCard
            heading="Số học sinh"
            title="20"
            subtitle='subtitle'
            buttonText='Xem chi tiết'
            page='course'
          />
          <CustomCard
            heading="Số khóa học"
            title="20"
            subtitle='subtitle'
            buttonText='Xem chi tiết'
            page='course'
          />
          <CustomCard
            heading="Số khóa học"
            title="20"
            subtitle='subtitle'
            buttonText='Xem chi tiết'
            page='course'
          />
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={1} onChange={() => console.log('hello')} aria-label="basic tabs example">
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Box>
          <TabPanel value={1} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={2} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={3} index={2}>
            Item Three
          </TabPanel>
        </div>
      </div>

    </div>
  )
}
