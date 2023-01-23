const carrito = [ "Producto 1", "Producto 2", "Producto 3"]

describe('testing al carrito de compras', () => { 
    test("Probar que el Array tenga 3 elementos", () => {

        expect(carrito).toHaveLength(3)
    
    })

    test("verificar que el carrito no este vacio", () => {
        expect(carrito).not.toHaveLength(0)
    })

 })