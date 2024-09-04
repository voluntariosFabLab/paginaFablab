import React from 'react'
import CardMachines from './Components/CardMachines/CardMachines'
import printer from './assets/artillery.jpg'
import resinePrinter from './assets/impresoraResinaSLA.png'
import laser from './assets/laser.jpg'
import cnc from './assets/cnc.jpg'
import "./Services.css"

const Services = () => {
  return (
    <div className='container__cardsmachines'>
      <CardMachines image={printer} title="Impresora 3D FDM" status="Disponible"/>
      <CardMachines image={resinePrinter} title="Impresora Resina SLA" status="Disponible"/>
      <CardMachines image={laser} title="Cortadora Laser" status="Disponible"/>
      <CardMachines image={cnc} title="CNC Router" status="Disponible"/>
    </div>
  )
}

export default Services