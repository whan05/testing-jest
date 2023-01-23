function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

describe('Prueba a las funciones de suma y resta', () => { 
    test('suma de 20 y 30', () => { 
        expect( suma( 20, 30 ) ).toBe(50)
     })

    test('resta de 10 - 5', () => { 
        expect( resta( 10, 5 ) ).toBe(5)
     })

     test('Que la suma 10 y 10 no sea 10', () => { 
        expect( suma( 10, 10 ) ).not.toBe(10)
      })

     test('Que la resta 10 y 5 no sea otro valor', () => { 
        expect( resta( 10, 5 ) ).not.toBe(3)
      })
 })