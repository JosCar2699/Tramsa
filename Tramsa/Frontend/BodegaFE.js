import '../Backend/Public/bodegas.html';


document.getElementById('Bodega-form').addEventListener('submit', e => {
    const Warehouse_Code = `BO${document.getElementById('Code').value}`;
    const Name = document.getElementById('Name');
    const Short_Name = document.getElementById('Shortname');
    const Nickname = document.getElementById('Nickname');
    const Warehouse_Address = document.getElementById('Address');
    const Measure_Unit = document.getElementById('Measure_Unit');
    const Warehouse_Type = document.getElementById('Warehouse_Type');
    const Warehouse_Slot = document.getElementById('Warehouse_Slot');

    console.log(Warehouse_Code, Name, Short_Name, Nickname, Warehouse_Address, Measure_Unit, Warehouse_Type, Warehouse_Slot);
})