import Paper from "@mui/material/Paper";
import {Divider} from "@mui/material";

const defaultRecipe = {
    "id": 1, "name": "Basic Sifter", "machine": {
        "name": "Crafting Table", "mod": "Minecraft"
    }, "item_inputs": [{
        "item": {
            "id": 5, "name": "1x Tin Cable", "icon": null, "recipe_inputs": ["http://127.0.0.1:8000/api/recipes/1/"]
        }, "amount": 2, "used": true
    }, {
        "item": {
            "id": 6, "name": "Item Filter", "icon": null, "recipe_inputs": ["http://127.0.0.1:8000/api/recipes/1/"]
        }, "amount": 1, "used": true
    }, {
        "item": {
            "id": 7,
            "name": "LV Electric Piston",
            "icon": null,
            "recipe_inputs": ["http://127.0.0.1:8000/api/recipes/1/"]
        }, "amount": 2, "used": true
    }, {
        "item": {
            "id": 8,
            "name": "LV Universal Circuit",
            "icon": null,
            "recipe_inputs": ["http://127.0.0.1:8000/api/recipes/1/"]
        }, "amount": 2, "used": true
    }, {
        "item": {
            "id": 9, "name": "LV Machine Hull", "icon": null, "recipe_inputs": ["http://127.0.0.1:8000/api/recipes/1/"]
        }, "amount": 1, "used": true
    }], "item_outputs": [{
        "item": {
            "id": 10,
            "name": "Basic Sifter",
            "icon": "http://127.0.0.1:8000/asset/icons/gtceu__lv_sifter.png",
            "recipe_inputs": []
        }, "amount": 1
    }], "crafting_time": 0, "process_energy": 0
}

export default function Recipe({recipe = defaultRecipe}) {
    const inputList = recipe.item_inputs.map((input, i) => {
        return <div key={i}> {input.item.icon ? <img className='itemImg' style={{
            width: 16 + 'px',
            float: 'left',
            verticalAlign: 'middle',
            margin: '5px'
        }} src={input.item.icon} alt={input.item.name}/> : ''} <p>{input.amount} x {input.item.name}</p></div>
    })

    return (<Paper>
        <div>
            {recipe.item_outputs[0].item.icon ? <img className="itemImg" style={{
                width: 16 + 'px', float: 'left', verticalAlign: 'middle', margin: '5px', // marginTop: '5px'
            }} src={recipe.item_outputs[0].item.icon} alt="item"/> : ''}
            <p style={{
                textAlign: 'right', marginRight: '10px', marginTop: '8px', marginBottom: '8px'
            }}>{recipe.item_outputs[0].item.name}</p>
        </div>
        <Divider/>
        {inputList}
    </Paper>);
}