document.getElementById('Bodega-form')
    .addEventListener('Enviar', e => {
        const Warehouse_Code = `BO${document.getElementById('Code').value}`;
        const Name = document.getElementById('Name').value;
        const Short_Name = document.getElementById('Shortname').value;
        const Nickname = document.getElementById('Nickname').value;
        const Warehouse_Address = document.getElementById('Address').value;
        const Measure_Unit = document.getElementById('Measure_Unit').value;
        const Warehouse_Type = document.getElementById('Warehouse_Type').value;
        const Warehouse_Slot = document.getElementById('Warehouse_Slot').value;

        console.log(Warehouse_Code, Name, Short_Name, Nickname, Warehouse_Address, Measure_Unit, Warehouse_Type, Warehouse_Slot);
    })