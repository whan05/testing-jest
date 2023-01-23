const cliente = {
    nombre: "Whanderley",
    balance: 500,
    tipo: "Premium"
}

describe('testing al cliente', () => { 
    test("El nombre es Whanderley", () => {
        expect(cliente).toMatchSnapshot();
    })
 })