$(document).ready(function() {
    logicaBodegas.initGetFormInfo();
})

var logicaBodegas = {
    initGetFormInfo: function() {
        $('#btnAgregar').on('click', function() {
            var warehouse_Code = $('#Code').val()
            var name = $('#Name').val()
            var short_Name = $('#Shortname').val()
            var nickname = $('#Nickname').val()
            var warehouse_Address = $('#Address').val()
            var measure_Unit = $('#Measure_Unit').val()
            var warehouse_Type = $('#Warehouse_Type').val()
            var warehouse_Slot = $('#Warehouse_Slot').val()

            logicaBodegas.postFormInfo(warehouse_Code,name,short_Name,nickname,warehouse_Address,measure_Unit,warehouse_Type,warehouse_Slot)
        });
    },

    postFormInfo:function(warehouse_Code,name,short_Name,nickname,warehouse_Address,measure_Unit,warehouse_Type,warehouse_Slot){
        const http = context.services.get("myHttp");
        return http.post({
        url: '../Rutas/WarehouseLogic',
        body: { msg: "This is in the body of a POST request!" },
        encodeBodyAsJSON: true
        })
        .then(response => {
        // The response body is encoded as raw BSON.Binary. Parse it to JSON.
        const ejson_body = EJSON.parse(response.body.text());
        return ejson_body;
      })
    }
}
