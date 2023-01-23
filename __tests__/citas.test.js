import expect from "expect";
import Citas from "../js/classes/Citas";

describe('Probar clases de citas', () => { 

    const citas =  new Citas()

    const id = Date.now()

    test("Agregar nuevas citas" , () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Whan',
            telefono: '86809168',
            fecha: '20-01-2023',
            hora:'10:30',
            sintomas: 'Solo duerme'
        }

        citas.agregarCita(citaObj)

        expect(citas).toMatchSnapshot()
    })

    test('actualizar cita', () => { 
        const citaActualizada = {
            id,
            mascota: 'Nuevo Nombre',
            propietario: 'Whan',
            telefono: '86809168',
            fecha: '20-01-2023',
            hora:'10:30',
            sintomas: 'Solo duerme'
        }

        citas.editarCita(citaActualizada)

        expect(citas).toMatchSnapshot()
     })

     test('Eliminar cita', () => { 
        citas.eliminarCita(id)

        expect(citas).toMatchSnapshot()
      })
    
 })