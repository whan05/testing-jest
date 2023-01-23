const cliente = {
    nombre : "Whanderley Fonseca",
    balance : 500
}

describe('Testing al cliente', () => { 
    test('El cliente es premium', () => { 
        expect(cliente.balance).toBeGreaterThan(400)
     })

     test('Es Whanderley Fonseca el nombre del cliente', () => { 
        expect(cliente.nombre).toBe("Whanderley Fonseca")
      })

      test('No es otro cliente', () => { 
        expect(cliente.nombre).not.toBe("Alfonso Fonseca")
       })

      test('No tiene 500', () => { 
        expect(cliente.balance).not.toBe(600)
       })
 })