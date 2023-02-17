
import * as React from 'react';
import {Box,Tab,Stack} from '@mui/material';
import {TabContext,TabList,TabPanel} from '@mui/lab';
import ProductRow from './ProductRow';
import styled from 'styled-components';
import useApi from '../../components/Hooks/useApi';
import GetBestSellersProducts from './GetBestSellersProducts/GetBestSellersProducts';


const Wrapper = styled(Stack)`
    margin-top:50px;
    margin-left:10px;
    margin-bottom:50px;
    text-align:center;
`
const Panel = styled(TabPanel)`
  min-height:50px;
`

function CreateTabs(props){
  const d=props;
  const length = d.length;
  const tabs = [];
  for (let i = 0;i<length;i++){
    let id = d[i].id;
    let name = d[i].name;
    tabs.push(<Tab key={id} label={name} value={id.toString()}/>);
  }
  return tabs;
}
function CreateTabPanels(props){
  let generalCategoryData= props;
  const numberOfGeneralCategories = generalCategoryData.length;
  const tabPanels = [];
  for (let i=0;i<numberOfGeneralCategories;i++){
    let generalCategoryID = generalCategoryData[i].id;
    let NewTabPanel =(
      <TabPanel key={generalCategoryID} value={generalCategoryID.toString()}>
        <GetBestSellersProducts categoryID={generalCategoryID}/>
      </TabPanel>)
    tabPanels.push(NewTabPanel);
  }
  
  return tabPanels;
}




const BestSellersTable = () =>{
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    // The Following Gets the Names of the General Categories and their IDs

    const AllGeneralCategories = useApi('http://localhost:5000/general_category');
    let AllGeneralCategoriesData = [];
  
    if(AllGeneralCategories.success == true){
      AllGeneralCategoriesData=AllGeneralCategories.data;
    }

    // The Following code gets a list of the highest sellers for every Category


  
    return (
      <Wrapper 
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ borderRadius: '10px' ,border: 1,borderColor: 'secondary.main',borderTop:0,borderBottom:0}}
        >
            <Box sx={{ textAlign: 'left', fontSize: 'h4.fontSize', borderBottom: 1}}>Best Sellers</Box>

      <Box sx={{ width: '100%', typography: 'body1' }}>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
            {CreateTabs(AllGeneralCategoriesData)}

            </TabList>
          </Box>
            {CreateTabPanels(AllGeneralCategoriesData)}
        </TabContext>

          
      </Box>
      
      </Wrapper>
    );

}
export default BestSellersTable;