import './App.css'
import ItemList from "./components/items/item_list.jsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Tabs, Tab, Typography, Box} from "@mui/material";
import {useState} from "react";
import RecipeList from "./components/recipes/recipe_list.jsx";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function App() {
    const [value, setValue] = useState("itemList");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Item List" value="itemList" />
                <Tab label="Recipe List" value="recipeList"/>
            </Tabs>
            <TabPanel value={value} index="itemList"><ItemList /></TabPanel>
            <TabPanel value={value} index="recipeList"><RecipeList /></TabPanel>
        </>
    )
}

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    )
}

export default App
