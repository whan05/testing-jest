const password = "123456"

describe('valida que el password no este vacio y tenga 6 caracteres', () => { 

    test("Valida que el password tenga 6 caracteres", () => {
        expect(password).toHaveLength(6);
    })

    test("Valida que el password no este vacio", () => {
        expect(password).not.toHaveLength(0)
    })

 })