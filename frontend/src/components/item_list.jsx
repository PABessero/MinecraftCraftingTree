import Item from "./item.jsx";
import {useState} from "react";
import {Button} from "@mui/material";

const defaultItems = [
    {
        "id": 10,
        "name": "Basic Sifter",
        "icon": "http://127.0.0.1:8000/asset/icons/gtceu__lv_sifter.png"
    },
]



export default function ItemList() {
    const [items, setItems] = useState(defaultItems);

    const itemList = items.map((item, i) => {
        return <Item dataTest="Test" key={i} item={item} />
    })

    function loadItemList() {
        fetch("http://localhost:8000/api/items/").then(response => response.json().then(response => setItems(response)))
    }

    return (
        <>
            <Button variant="contained" onClick={loadItemList}>Load Item List</Button>
            { itemList }
        </>
    )
}