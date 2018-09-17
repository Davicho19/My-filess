import { Component, OnInit } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-de-decision',
  templateUrl: './tabla-de-decision.component.html',
  styleUrls: ['./tabla-de-decision.component.css']
})
export class TablaDeDecisionComponent implements OnInit {

  constructor() { }

  precioUnitarioInicial = 150;
  produccionInicial = 500;
  inversionEnMarketingInicial = 3500;
  inversionEnInvestigacionInicial = 1500;
  inversionEnActivosInicial = 3500;

  precioUnitario = 150;
  produccion = 500;
  inversionEnMarketing = 3500;
  inversionEnInvestigacion = 1500;
  inversionEnActivos = 3500;

  // variables de PROYECCIONES
  capitalDisponible = 10000; // ver como utilizarlo la primera vez y luego actualizarlo
  ventas: number = this.produccion * this.precioUnitario;
  otrosIngresos = 10000;
  ingresos: number = this.ventas + this.otrosIngresos;
  costoProduccion = 0; // se necesita de otra pestaña
  marketing: number = this.inversionEnMarketing;
  invActivos: number = this.inversionEnActivos;
  invInvestigacion: number = this.inversionEnInvestigacion;
  gastos: number = this.costoProduccion + this.marketing + this.invActivos + this.invInvestigacion;
  efectivoDisponible: number = this.capitalDisponible + this.ingresos - this.gastos;
  utilidadEsperada: number = this.ingresos + this.gastos;
  resultado: number = this.efectivoDisponible + this.utilidadEsperada;

  ngOnInit() {
    this.decision();
  }

  // varibles pestana INFORMES DE COMPAÑIA
  // variables subpestana ESTADO DE RESULTADO
  // ver como diferenciar por bimestres

  /*
  ventas_EstadoDeResultados_InformesDeLaCompania:number;
  otroIngresoso-estadoDeResultados-informesDeLaCompania:number;
  otroIngresoso-estadoDeResultados-informesDeLaCompania:number;
  capitalPeriodoAnterior-estadoDeResultados-informesDeLaCompania:number;
  ingresos-estadoDeResultados-informesDeLaCompania:number;
  materiaPrima-estadoDeResultados-informesDeLaCompania:number;
  manoDeObra-estadoDeResultados-informesDeLaCompania:number;
  costosIndirectos-estadoDeResultados-informesDeLaCompania:number;
  costos-estadoDeResultados-informesDeLaCompania:number;
  utilidadBruta-estadoDeResultados-informesDeLaCompania:number;
  invMarketing-estadoDeResultados-informesDeLaCompania:number;
  invInvestigacion-estadoDeResultados-informesDeLaCompania:number;
  invActivos-estadoDeResultados-informesDeLaCompania:number;
  gastosOperativos-estadoDeResultados-informesDeLaCompania:number;
  utilidadNetaDelEjercicio-estadoDeResultados-informesDeLaCompania:number;
*/

  iniciar() {
    alert('Iniciando inversion, preparando primer bimestre');
    const pu = document.getElementById('precioUnitario')  as HTMLInputElement;
    document.getElementById('pu1').innerText = pu.value;
    const p1 = document.getElementById('produccion') as HTMLInputElement;
    document.getElementById('p1').innerText = p1.value;
    const im = document.getElementById('inversionEnMarketing') as HTMLInputElement;
    document.getElementById('im1').innerText = im.value;
    const ii = document.getElementById('inversionEnInvestigacion') as HTMLInputElement;
    document.getElementById('ii1').innerText = ii.value;
    const ai = document.getElementById('inversionEnActivos') as HTMLInputElement;
    document.getElementById('ia1').innerText = ai.value;


  }
  decision() {
    document.getElementById('decisiones').style.display = 'block';
    document.getElementById('tabla-analisis').style.display = 'none';
    document.getElementById('informe').style.display = 'none';
    document.getElementById('analisis').style.display = 'none';
    document.getElementById('titulo').innerText = 'MIS DECISIONES';
  }
  tanalisis() {
    document.getElementById('decisiones').style.display = 'none';
    document.getElementById('tabla-analisis').style.display = 'block';
    document.getElementById('informe').style.display = 'none';
    document.getElementById('analisis').style.display = 'none';
    document.getElementById('titulo').innerText = 'ANALISIS DE LA INDUSTRIA';
    document.getElementById('ProduccionTablaAnalisisID').style.display = 'none';
    document.getElementById('VentasTablaAnalisisID').style.display = 'none';
    document.getElementById('EconomiaID').style.display = 'none';
    document.getElementById('PorcentajeMercado').style.display = 'none';


  }
  informe() {
    document.getElementById('decisiones').style.display = 'none';
    document.getElementById('tabla-analisis').style.display = 'none';
    document.getElementById('informe').style.display = 'block';
    document.getElementById('analisis').style.display = 'none';
    document.getElementById('titulo').innerText = 'INFORMES DE LA COMPAÑIA';
    document.getElementById('EstadoDeResultadosID').style.display = 'none';
    document.getElementById('BalanceGeneralID').style.display = 'none';
    document.getElementById('VentasID').style.display = 'none';
    document.getElementById('ProduccionID').style.display = 'none';
    document.getElementById('CompaniaID').style.display = 'none';

  }
  analisis() {
    document.getElementById('decisiones').style.display = 'none';
    document.getElementById('tabla-analisis').style.display = 'none';
    document.getElementById('informe').style.display = 'none';
    document.getElementById('analisis').style.display = 'block';
    document.getElementById('titulo').innerText = 'ANALISIS';
    document.getElementById('produccionvsventasID').style.display = 'none';
    document.getElementById('costovsprecioID').style.display = 'none';
    document.getElementById('capacidadvsproduccionID').style.display = 'none';
    document.getElementById('companiavscompetenciaID').style.display = 'none';
    document.getElementById('consejosID').style.display = 'none';
  }


  produccionvsventas() {
    document.getElementById('produccionvsventasID').style.display = 'block';
    document.getElementById('costovsprecioID').style.display = 'none';
    document.getElementById('capacidadvsproduccionID').style.display = 'none';
    document.getElementById('companiavscompetenciaID').style.display = 'none';
    document.getElementById('consejosID').style.display = 'none';
    document.getElementById('titulo').innerText = 'ANALISIS';

    document.getElementById('boton-produccionvsventasID').style.backgroundColor = 'rgb(146,140, 142)';
    document.getElementById('boton-costovsprecioID').style.backgroundColor = 'rgb(0, 168, 233)';
    document.getElementById('boton-capacidadvsproduccionID').style.backgroundColor = 'rgb(0, 168, 233)';
    document.getElementById('boton-companiavscompetenciaID').style.backgroundColor = 'rgbrgb(0, 168, 233)';
    document.getElementById('boton-consejosI').style.backgroundColor = 'rgb(0, 168, 233)';

  }
  costovsprecio() {
    document.getElementById('produccionvsventasID').style.display = 'none';
    document.getElementById('costovsprecioID').style.display = 'block';
    document.getElementById('capacidadvsproduccionID').style.display = 'none';
    document.getElementById('companiavscompetenciaID').style.display = 'none';
    document.getElementById('consejosID').style.display = 'none';
    document.getElementById('titulo').innerText = 'ANALISIS';

    document.getElementById('boton-produccionvsventasID').style.backgroundColor = 'rgb(0, 168, 233)';
    document.getElementById('boton-costovsprecioID').style.backgroundColor = 'rgb(146, 140, 142)';
    document.getElementById('boton-capacidadvsproduccionID').style.backgroundColor = 'rgb(0, 168, 233)';
    document.getElementById('boton-companiavscompetenciaID').style.backgroundColor = 'rgb(0, 168, 233)';
    document.getElementById('boton-consejosID').style.backgroundColor = 'rgb(0, 168, 233)';

  }
  capacidadvsproduccion() {
    document.getElementById('produccionvsventasID').style.display = 'none';
    document.getElementById('costovsprecioID').style.display = 'none';
    document.getElementById('capacidadvsproduccionID').style.display = 'block';
    document.getElementById('companiavscompetenciaID').style.display = 'none';
    document.getElementById('consejosID').style.display = 'none';
    document.getElementById('titulo').innerText = 'ANALISIS';

    document.getElementById('boton-produccionvsventasID').style.backgroundColor = 'rgb(0, 168, 233)';
    document.getElementById('boton-costovsprecioID').style.backgroundColor = 'rgb(0, 168, 233)';
    document.getElementById('boton-capacidadvsproduccionID').style.backgroundColor = 'rgb(146, 140, 142)';
    document.getElementById('boton-companiavscompetenciaID').style.backgroundColor = 'rgb(0, 168, 233)';
    document.getElementById('boton-consejosID').style.backgroundColor = 'rgb(0, 168, 233)';
  }
  companiavscompetencia() {
    document.getElementById('produccionvsventasID').style.display = 'none';
    document.getElementById('costovsprecioID').style.display = 'none';
    document.getElementById('capacidadvsproduccionID').style.display = 'none';
    document.getElementById('companiavscompetenciaID').style.display = 'block';
    document.getElementById('consejosID').style.display = 'none';
    document.getElementById('titulo').innerText = 'ANALISIS';

    document.getElementById('boton-produccionvsventasID').style.backgroundColor = 'rgb(0, 168, 233)';
    document.getElementById('boton-costovsprecioID').style.backgroundColor = 'rgb(0, 168, 233)';
    document.getElementById('boton-capacidadvsproduccionID').style.backgroundColor = 'rgb(0, 168, 233)';
    document.getElementById('boton-companiavscompetenciaID').style.backgroundColor = 'rgb(146, 140, 142)';
    document.getElementById('boton-consejosID').style.backgroundColor = 'rgb(0, 168, 233)';

  }
  consejos() {
    document.getElementById('produccionvsventasID').style.display = 'none';
    document.getElementById('costovsprecioID').style.display = 'none';
    document.getElementById('capacidadvsproduccionID').style.display = 'none';
    document.getElementById('companiavscompetenciaID').style.display = 'none';
    document.getElementById('consejosID').style.display = 'block';
    document.getElementById('titulo').innerText = 'ANALISIS';

    document.getElementById('boton-produccionvsventasID').style.backgroundColor = 'rgb(0, 168, 233)';
    document.getElementById('boton-costovsprecioID').style.backgroundColor = 'rgb(0, 168, 233)';
    document.getElementById('boton-capacidadvsproduccionID').style.backgroundColor = 'rgb(0, 168, 233)';
    document.getElementById('boton-companiavscompetenciaID').style.backgroundColor = 'rgb(0, 168, 233)';
    document.getElementById('boton-consejosID').style.backgroundColor = 'rgb(146, 140, 142)';

  }


  EstadoDeResultados() {
    document.getElementById('EstadoDeResultadosID').style.display = 'block';
    document.getElementById('BalanceGeneralID').style.display = 'none';
    document.getElementById('VentasID').style.display = 'none';
    document.getElementById('ProduccionID').style.display = 'none';
    document.getElementById('CompaniaID').style.display = 'none';
    document.getElementById('titulo').innerText = 'INFORMES DE LA COMPAÑIA';

    document.getElementById('boton-EstadoDeResultadosID').style.backgroundColor = 'rgb(146, 140, 142)';
    document.getElementById('boton-BalanceGeneralID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-VentasID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-ProduccionID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-CompaniaID').style.backgroundColor = 'rgb(0, 197, 245)';


  }

  BalanceGeneral() {
    document.getElementById('EstadoDeResultadosID').style.display = 'none';
    document.getElementById('BalanceGeneralID').style.display = 'block';
    document.getElementById('VentasID').style.display = 'none';
    document.getElementById('ProduccionID').style.display = 'none';
    document.getElementById('CompaniaID').style.display = 'none';
    document.getElementById('titulo').innerText = 'INFORMES DE LA COMPAÑIA';

    document.getElementById('boton-EstadoDeResultadosID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-BalanceGeneralID').style.backgroundColor = 'rgb(146, 140, 142)';
    document.getElementById('boton-VentasID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-ProduccionID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-CompaniaID').style.backgroundColor = 'rgb(0, 197, 245)';
  }
  Ventas() {
    document.getElementById('EstadoDeResultadosID').style.display = 'none';
    document.getElementById('BalanceGeneralID').style.display = 'none';
    document.getElementById('VentasID').style.display = 'block';
    document.getElementById('ProduccionID').style.display = 'none';
    document.getElementById('CompaniaID').style.display = 'none';
    document.getElementById('titulo').innerText = 'INFORMES DE LA COMPAÑIA';

    document.getElementById('boton-EstadoDeResultadosID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-BalanceGeneralID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-VentasID').style.backgroundColor = 'rgb(146, 140, 142)';
    document.getElementById('boton-ProduccionID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-CompaniaID').style.backgroundColor = 'rgb(0, 197, 245)';
  }

  Produccion() {
    document.getElementById('EstadoDeResultadosID').style.display = 'none';
    document.getElementById('BalanceGeneralID').style.display = 'none';
    document.getElementById('VentasID').style.display = 'none';
    document.getElementById('ProduccionID').style.display = 'block';
    document.getElementById('CompaniaID').style.display = 'none';
    document.getElementById('titulo').innerText = 'INFORMES DE LA COMPAÑIA';

    document.getElementById('boton-EstadoDeResultadosID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-BalanceGeneralID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-VentasID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-ProduccionID').style.backgroundColor = 'rgb(146, 140, 142)';
    document.getElementById('boton-CompaniaID').style.backgroundColor = 'rgb(0, 197, 245)';
  }

  Compania() {
    document.getElementById('EstadoDeResultadosID').style.display = 'none';
    document.getElementById('BalanceGeneralID').style.display = 'none';
    document.getElementById('VentasID').style.display = 'none';
    document.getElementById('ProduccionID').style.display = 'none';
    document.getElementById('CompaniaID').style.display = 'block';
    document.getElementById('titulo').innerText = 'INFORMES DE LA COMPAÑIA';

    document.getElementById('boton-EstadoDeResultadosID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-BalanceGeneralID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-VentasID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-ProduccionID').style.backgroundColor = 'rgb(0, 197, 245)';
    document.getElementById('boton-CompaniaID').style.backgroundColor = 'rgb(146, 140, 142)';
  }


  VisionGeneral() {
    document.getElementById('VisionGeneralID').style.display = 'block';
    document.getElementById('ProduccionTablaAnalisisID').style.display = 'none';
    document.getElementById('VentasTablaAnalisisID').style.display = 'none';
    document.getElementById('EconomiaID').style.display = 'none';
    document.getElementById('PorcentajeMercado').style.display = 'none';
    document.getElementById('titulo').innerText = 'ANALISIS DE LA INDUSTRIA';

    document.getElementById('boton-VisionGeneralID').style.backgroundColor = 'rgb(146, 140, 142)';
    document.getElementById('boton-ProduccionTablaAnalisisID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-VentasTablaAnalisisID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-EconomiaID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-PorcentajeMercadoID').style.backgroundColor = 'rgb(0, 139, 208)';
  }

  ProduccionTablaAnalisis() {
    document.getElementById('VisionGeneralID').style.display = 'none';
    document.getElementById('ProduccionTablaAnalisisID').style.display = 'block';
    document.getElementById('VentasTablaAnalisisID').style.display = 'none';
    document.getElementById('EconomiaID').style.display = 'none';
    document.getElementById('PorcentajeMercado').style.display = 'none';
    document.getElementById('titulo').innerText = 'ANALISIS DE LA INDUSTRIA';

    document.getElementById('boton-VisionGeneralID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-ProduccionTablaAnalisisID').style.backgroundColor = 'rgb(146, 140, 142)';
    document.getElementById('boton-VentasTablaAnalisisID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-EconomiaID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-PorcentajeMercadoID').style.backgroundColor = 'rgb(0, 139, 208)';
  }

  VentasTablaAnalisis() {
    document.getElementById('VisionGeneralID').style.display = 'none';
    document.getElementById('ProduccionTablaAnalisisID').style.display = 'none';
    document.getElementById('VentasTablaAnalisisID').style.display = 'block';
    document.getElementById('EconomiaID').style.display = 'none';
    document.getElementById('PorcentajeMercado').style.display = 'none';
    document.getElementById('titulo').innerText = 'ANALISIS DE LA INDUSTRIA';

    document.getElementById('boton-VisionGeneralID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-ProduccionTablaAnalisisID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-VentasTablaAnalisisID').style.backgroundColor = 'rgb(146, 140, 142)';
    document.getElementById('boton-EconomiaID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-PorcentajeMercadoID').style.backgroundColor = 'rgb(0, 139, 208)';
  }

  Economia() {
    document.getElementById('VisionGeneralID').style.display = 'none';
    document.getElementById('ProduccionTablaAnalisisID').style.display = 'none';
    document.getElementById('VentasTablaAnalisisID').style.display = 'none';
    document.getElementById('EconomiaID').style.display = 'block';
    document.getElementById('PorcentajeMercado').style.display = 'none';
    document.getElementById('titulo').innerText = 'ANALISIS DE LA INDUSTRIA';

    document.getElementById('boton-VisionGeneralID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-ProduccionTablaAnalisisID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-VentasTablaAnalisisID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-EconomiaID').style.backgroundColor = 'rgb(146, 140, 142)';
    document.getElementById('boton-PorcentajeMercadoID').style.backgroundColor = 'rgb(0, 139, 208)';
  }

  PorcentajeMercado() {
    document.getElementById('VisionGeneralID').style.display = 'none';
    document.getElementById('ProduccionTablaAnalisisID').style.display = 'none';
    document.getElementById('VentasTablaAnalisisID').style.display = 'none';
    document.getElementById('EconomiaID').style.display = 'none';
    document.getElementById('PorcentajeMercado').style.display = 'block';
    document.getElementById('titulo').innerText = 'ANALISIS DE LA INDUSTRIA';

    document.getElementById('boton-VisionGeneralID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-ProduccionTablaAnalisisID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-VentasTablaAnalisisID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-EconomiaID').style.backgroundColor = 'rgb(0, 139, 208)';
    document.getElementById('boton-PorcentajeMercadoID').style.backgroundColor = 'rgb(146, 140, 142)';
  }


  general() {}
  ingresoDiv() {
    if (document.getElementById('div-ingresos').style.display === 'none') {
      document.getElementById('div-ingresos').style.display = 'block';
    } else {
      document.getElementById('div-ingresos').style.display = 'none';
    }
  }
  gastosDiv() {
    if (document.getElementById('div-gastos').style.display === 'none') {
      document.getElementById('div-gastos').style.display = 'block';
    } else {
      document.getElementById('div-gastos').style.display = 'none';
    }
  }
  resultadosDiv() {
    if (document.getElementById('div-resultados').style.display === 'none') {
      document.getElementById('div-resultados').style.display = 'block';
    } else {
      document.getElementById('div-resultados').style.display = 'none';
    }
  }
}
