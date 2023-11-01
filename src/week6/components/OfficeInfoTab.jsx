import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container } from '@mui/material';

export default function OfficeInfoTab({officeHour, classes}) {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <TabContext value={value}>
        <Container sx={{width: "300px"}}>
          <TabList id="tblist"
          onChange={(e,v)=>{
          console.log(e)
          console.log(v)
          setValue(v)
          }} aria-label="lab API tabs example">
            <Tab label="課表" value="1" onClick={(e,v)=>{
                console.log(e)
                console.log(v)
            }}/>
            <Tab label="Office Hours" value="2" />
          </TabList>
        </Container>
        <TabPanel value="1">{classes}</TabPanel>
        <TabPanel value="2">{officeHour}</TabPanel>
      </TabContext>        
  );
}