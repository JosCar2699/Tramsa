class WarehouseService {
    constructor() {
        this.URI = `/api/Warehouse`;
    }

    async getWarehouse() {
        const res = await fetch(this.URI);
        const Warehouses = await res.json();
        return Warehouses;
    }

    async postWarehouse(warehouse) {
        const res = await fetch(this.URI, {
            method: 'post',
            body: warehouse
        });
        const dato = await res.json();
    }

    async deleteWarehouse(WarehouseId) {
        const res = await fetch(`${this.URI}/${WarehouseId}`, {
            headers: {
                'Content-Type': 'aplication/json'
            },
            method: 'delete'
        });
        const dato = await res.json();
    }
}

export default WarehouseService;