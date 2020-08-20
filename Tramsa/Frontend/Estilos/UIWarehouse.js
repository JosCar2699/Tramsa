import WarehouseService from '../ServiciosFE/WarehouseService';
import Warehouse from '../../Backend/Modelos/Warehouse';
const warehouseService = new WarehouseService();

class UIWarehouse {
    async addNewWarehouse(warehouse) {
        await warehouseService.postWarehouse(warehouse);
    }

    async deleteWarehouse(warehouseId) {
        await warehouseService.deleteWarehouse(bookId)
    }
}

export default UIWarehouse;