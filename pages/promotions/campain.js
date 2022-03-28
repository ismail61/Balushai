import React, { useState } from "react";
import {
  Breadcrumbs,
  Divider,
  Link,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import {
  CampainTable,
  SideNavigation,
  Table,
  TopNavigation,
} from "../../components";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box } from "@mui/system";

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

export default function Campain() {
  const [data, setData] = useState([1, 2, 3]);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
	if (newValue == 0) {
		setData([1])
	}
	if (newValue == 1) {
		setData([1, 2])
	}
	if (newValue == 2) {
		setData([1, 2, 3, 4, 5, 6])
	}
	if (newValue == 3) {
		setData([1, 2, 3])
	}
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
              <Typography color="text.primary">Campaign Management</Typography>
            </Breadcrumbs>
          </Stack>
          <br />
          <Typography color="GrayText.primary" variant="h5" component="h2">
            Campaign Management
          </Typography>
          <br />
          <div className="bg-white">
            <Tabs
              onChange={handleChange}
              value={value}
              aria-label="Tabs where each tab needs to be selected manually"
            >
              <Tab label="Special Invitation" />
              <Tab label="Available Campaign" />
              <Tab label="Registered Campaign" />
              <Tab label="Ineligible Campaign" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <CampainTable data={data} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <CampainTable data={data} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <CampainTable data={data} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <CampainTable data={data} />
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
}
