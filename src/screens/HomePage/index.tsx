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
  },
  tableContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  table: {
    flex: 1,
    paddingLeft: 20,
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


export const HomePage = () => {
  const [tab, setTab] = React.useState(0);
  const handleChangeTab = (event: React.SyntheticEvent, value: number) => {
    setTab(value);
  };

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <DrawerMenu type={2} />
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
            subtitle='người'
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
          <div className={classes.tableContainer}>
            <div className={classes.table}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                <Tabs value={tab} onChange={handleChangeTab} aria-label="basic tabs example">
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                </Tabs>
              </Box>
              <TabPanel value={tab} index={0}>
                Tab 1
              </TabPanel>
              <TabPanel value={tab} index={1}>
                Tab 2
              </TabPanel>
              <TabPanel value={tab} index={2}>
                Tab 3
              </TabPanel>
            </div>
            <div className={classes.table}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                <Tabs value={tab} onChange={handleChangeTab} aria-label="basic tabs example">
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                </Tabs>
              </Box>
              <TabPanel value={tab} index={0}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, molestias officia alias distinctio corporis fuga suscipit, error saepe consectetur quo autem officiis nisi dicta illum eius blanditiis consequuntur accusamus voluptas?
              </TabPanel>
              <TabPanel value={tab} index={1}>
                Tab 2
              </TabPanel>
              <TabPanel value={tab} index={2}>
                Tab 3
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
