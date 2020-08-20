import UIWarehouse from './UIWarehouse';
import Warehouse from '../ModelosFE/WarehouseFE';

$(document).ready(function() {
    logicaBodegas.initGetFormInfo();
})

var logicaBodegas = {
    initGetFormInfo: function() {
        $('#btnAgregar').on('click', function() {
            var warehouse_Code = 'BO' + $('#Code').val()
            var name = $('#Name').val()
            var short_Name = $('#Shortname').val()
            var nickname = $('#Nickname').val()
            var warehouse_Address = $('#Address').val()
            var measure_Unit = $('#Measure_Unit').val()
            var warehouse_Type = $('#Warehouse_Type').val()
            var warehouse_Slot = $('#Warehouse_Slot').val()

            const ui = new UIWarehouse();

            const book = new Warehouse(warehouse_Code, name, short_Name,
                nickname, warehouse_Address, measure_Unit, warehouse_Type, warehouse_Slot);

            ui.addNewWarehouse(book);



        });
    }
}