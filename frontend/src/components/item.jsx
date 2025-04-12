const defaultItem = {
    "id": 10,
    "name": "Basic Sifter",
    "icon": "http://127.0.0.1:8000/asset/icons/gtceu__lv_sifter.png"
}

export default function Item({item = defaultItem}) {
    return (
        <div>
            {item.icon ? <img className="itemImg" src={item.icon} alt="item"/> : ''}

            <p>I'm a {item.name}!</p>
        </div>
    );
}