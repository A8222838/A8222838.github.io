import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Chip from "@mui/material/Chip";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const labels = {
  1: "完全不會",
  2: "略懂",
  3: "中等",
  4: "高等",
  5: "精通",
};

function SkillLevel(props) {
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="text-feedback"
        value={props.value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[props.value]}</Box>
    </Box>
  );
}

function ExperienceTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          label="學歷"
          sx={{ typography: "h6", fontWeight: 400 }}
          {...a11yProps(0)}
        />
        <Tab
          label="駕照"
          sx={{ typography: "h6", fontWeight: 400 }}
          {...a11yProps(1)}
        />
        <Tab
          label="工作經歷"
          sx={{ typography: "h6", fontWeight: 400 }}
          {...a11yProps(2)}
        />
        <Tab
          label="專長"
          sx={{ typography: "h6", fontWeight: 400 }}
          {...a11yProps(3)}
        />
        <Tab
          label="語文能力"
          sx={{ typography: "h6", fontWeight: 400 }}
          {...a11yProps(4)}
        />
      </Tabs>
      <TabPanel className="experience-info" value={value} index={0}>
        <h3>大四就讀中</h3>
        <h4>中國文化大學</h4>
        <p>2019年9月 ~ 2023年9月</p>
        <div className="experience-desc">
          <Chip icon={<DoubleArrowIcon />} label="資訊工程學系" />
          <Chip icon={<DoubleArrowIcon />} label="參與intel DevCup競賽概念組" /><br/>
          <Chip icon={<DoubleArrowIcon />} label="畢業專題為[物聯網暨軟硬體整合應用之沉浸式體驗-密室逃脫遊戲]" />
        </div>
      </TabPanel>
      <TabPanel className="experience-info" value={value} index={1}>
        <div className="experience-desc">
          <Chip icon={<DoubleArrowIcon />} label="普通重型機車駕照" />
        </div>
      </TabPanel>
      <TabPanel className="experience-info" value={value} index={2}>
        <h3>內場PT</h3>
        <h4>涓豆腐統一時代店</h4>
        <p>2020年9月 ~ 2022年7月</p>
      </TabPanel>
      <TabPanel className="experience-info" value={value} index={3}>
        <h4>C++</h4>
        <SkillLevel value={3} />
        <h4>python</h4>
        <SkillLevel value={2} />
        <h4>JavaScript</h4>
        <SkillLevel value={3} />
        <h4>Git</h4>
        <SkillLevel value={3} />
      </TabPanel>
      <TabPanel className="experience-info" value={value} index={4}>
        <h4>英文</h4>
        <SkillLevel value={2} />
        <h4>日文</h4>
        <SkillLevel value={2} />
      </TabPanel>
    </Box>
  );
}

function Experience() {
  return (
    <section className="section experience">
      <div className="experience-center">
        <article className="experience-info">
          <div>
            <div className="head-name">
              <h2>經驗</h2>
            </div>
            <div className="underline"></div>
            <ExperienceTabs />
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;
