import Paper from "@mui/material/Paper";
import {Divider} from "@mui/material";

const defaultItem = {
    "id": 10,
    "name": "Basic Sifter",
    "icon": "http://127.0.0.1:8000/asset/icons/gtceu__lv_sifter.png"
}

export default function Item({item = defaultItem}) {
    return (
        <Paper>
            <div>
                {item.icon ? <img className="itemImg" style={{
                    width: 16 + 'px',
                    float: 'left',
                    verticalAlign: 'middle',
                    margin: '5px',
                    // marginTop: '5px'
                }} src={item.icon} alt="item"/> : ''}
                <p style={{
                    textAlign: 'right',
                    marginRight: '10px',
                    marginTop: '8px',
                    marginBottom: '8px'
                }}>{item.name}</p>
            </div>
            <Divider/>
        </Paper>
    );
}