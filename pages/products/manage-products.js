import { Breadcrumbs, Link, Stack, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { SideNavigation, OrderOverview, TopNavigation } from "../../components";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function manage_account() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <div className="flex w-screen min-h-screen">
      <SideNavigation />
      <div className="w-full">
        <TopNavigation />
        <div className="p-6">
          <Stack spacing={2}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="/">
                Account
              </Link>
              <Typography color="text.primary">Profile & Account Setting</Typography>
            </Breadcrumbs>
          </Stack>
          <br />
          <Typography color="GrayText.primary" variant="h5" component="h2">
            Account Management
          </Typography>
          <br />
          <div className="bg-white">
            <Tabs
              onChange={handleChange}
              value={value}
              aria-label="Tabs where each tab needs to be selected manually"
            >
              <Tab label="General" />
              <Tab label="Account Setting" />
              <Tab label="Profile" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <div className="">
                Seller Account
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              More
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default manage_account;
