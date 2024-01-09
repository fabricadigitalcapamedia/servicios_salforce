import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgFor } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ConsulmicroService } from './consulmicro.service';
import { NgClass } from '@angular/common';


export interface PeriodicElement {
  name: string;
  position: number;
  request: string;
  response: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Mspruba1', request: 'localhost:8080', response: 'reponse' },
  { position: 2, name: 'Mspruba2', request: 'localhost:8081', response: 'reponse' },
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'action', 'name', 'request', 'response'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  buttonClasses: string = '';
  boxControl: any;
  data: any;
  response: any;

  constructor(private _liveAnnouncer: LiveAnnouncer, private consulmicroService: ConsulmicroService) { }

  @ViewChild(MatSort)
  sort!: MatSort;



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.boxControl = ELEMENT_DATA;
    this.data = [
      {
        nameService: "MSCustomeBridgeTabCloud",
        metodo: "Consult",
        Ambiente: "dev"
      },
      {
        nameService: "MSCustomeBridgeTabCloud",
        metodo: "Consult",
        Ambiente: "qa"
      },
      {
        nameService: "MSCustomeBridgeTabCloud",
        metodo: "Consult",
        Ambiente: "prod"
      },
      {
        nameService: "MSCustomeBridgeTableOp",
        metodo: "Consult",
        Ambiente: "dev"
      },
      {
        nameService: "MSCustomeBridgeTableOp",
        metodo: "Consult",
        Ambiente: "qa"
      },
      {
        nameService: "MSCustomeBridgeTableOp",
        metodo: "Consult",
        Ambiente: "prod"
      },
      {
        nameService: "msautentiltoken",
        metodo: "Authentication",
        Ambiente: "dev"
      },
      {
        nameService: "msautentiltoken",
        metodo: "Authentication",
        Ambiente: "qa"
      },
      {
        nameService: "mscomunicationsaleforce",
        metodo: "GetOrderPayment",
        Ambiente: "dev"
      },
      {
        nameService: "mscomunicationsaleforce",
        metodo: "GetOrderPayment",
        Ambiente: "qa"
      },
      {
        nameService: "mscomunicationsaleforce",
        metodo: "GetOrderPayment",
        Ambiente: "prod"
      },
      {
        nameService: "mscomunicationsaleforce",
        metodo: "VerifyOrderPayment",
        Ambiente: "dev"
      },
      {
        nameService: "mscomunicationsaleforce",
        metodo: "VerifyOrderPayment",
        Ambiente: "qa"
      },
      {
        nameService: "mscomunicationsaleforce",
        metodo: "VerifyOrderPayment",
        Ambiente: "prod"
      },
      {
        nameService: "mscomunicationsaleforce",
        metodo: "IpmonSmilestone",
        Ambiente: "dev"
      },
      {
        nameService: "mscomunicationsaleforce",
        metodo: "IpmonSmilestone",
        Ambiente: "qa"
      },
      
      {
        nameService: "mscomunicationsaleforce",        
        metodo: "Reversepaymentsvtas",
        Ambiente: "dev"
      },
      {
        nameService: "mscomunicationsaleforce",
        metodo: "Reversepaymentsvtas",
        Ambiente: "qa"
      },

      {
        nameService: "ImeiV2.0",
        metodo: "bdoNegativo",
        Ambiente: "dev"
      },
      {
        nameService: "ImeiV2.0",
        metodo: "cambioTitularidad",
        Ambiente: "dev"
      },
      {
        nameService: "ImeiV2.0",
        metodo: "bdoPositivo",
        Ambiente: "dev"
      },
      {
        nameService: "ImeiV2.0",
        metodo: "bdaPositivo",
        Ambiente: "dev"
      },
      {
        nameService: "AddressV2.1",
        metodo: "consultaDireccionGeneral",
        Ambiente: "dev"
      },
      {
        nameService: "AddressV2.1",
        metodo: "consultaDireccion",
        Ambiente: "dev"
      },
      {
        nameService: "AddressV2.1",
        metodo: "construirDireccionHhpp",
        Ambiente: "dev"
      },
      {
        nameService: "AddressV2.1",
        metodo: "obtenerConfiguracionComponenteDireccion",
        Ambiente: "dev"
      },
      {
        nameService: "AddressV2.1",
        metodo: "obtenerBarrioListHhpp",
        Ambiente: "dev"
      },
      {
        nameService: "WSIMEIDualSIM",
        metodo: "ConsultaIMEIDualSIM",
        Ambiente: "dev"
      },
      {
        nameService: "UnifiedListsV1.0",
        metodo: "UnifiedLists",
        Ambiente: "dev"
      },
      {
        nameService: "ReconocerV1.0",
        metodo: "getInformacion",
        Ambiente: "dev"
      },
      {
        nameService: "msnotificationcuschannel",
        metodo: "V1",
        Ambiente: "dev"
      },
      {
        nameService: "msdcpoffeschedul",
        metodo: "queryOrderSchedule",
        Ambiente: "dev"
      },
      {
        nameService: "msdcpoffeschedul",
        metodo: "ProductListPromise",
        Ambiente: "dev"
      },
      {
        nameService: "mscustomerorderdelivery",
        metodo: "order",
        Ambiente: "dev"
      },
      {
        nameService: "mscustomerordershipmentoms",
        metodo: "reject",
        Ambiente: "dev"
      },
      {
        nameService: "mscustomerordershipmentoms",
        metodo: "confirm",
        Ambiente: "dev"
      },
      {
        nameService: "mscusorderpubpaymentconfig",
        metodo: "Payment",
        Ambiente: "dev"
      },
      {
        nameService: "mscusorderpubpaymentconfig",
        metodo: "Payment",
        Ambiente: "qa"
      },
      {
        nameService: "SAPInventoryV1.0",
        metodo: "queryByImei",
        Ambiente: "dev"
      },
      {
        nameService: "PostSaleInspODSV1.0",
        metodo: "GetODS",
        Ambiente: "dev"
      },
      {
        nameService: "PostSaleInspODSV1.0",
        metodo: "UpdateODS",
        Ambiente: "dev"
      },
      {
        nameService: "PostSaleInspODSV1.0",
        metodo: "CreateODS",
        Ambiente: "dev"
      },
      {
        nameService: "PaymentServiceV1.0",
        metodo: "ConfirmOrderPayment",
        Ambiente: "dev"
      },
      {
        nameService: "PaymentServiceV1.0",
        metodo: "ReversePaymentsvtas",
        Ambiente: "dev"
      },
      {
        nameService: "PaymentServiceV1.0",
        metodo: "ReversePaymentsvtas",
        Ambiente: "dev"
      },  
      
      {
        nameService: "MSCustomeBridgeTeqTec",
        metodo: "Insert",
        Ambiente: "dev"
      },
      {
        nameService: "MSCustomeBridgeTeqTec",
        metodo: "Insert",
        Ambiente: "qa"
      }
    ]
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  realizarAccion(element: any) {
    let hora: Date = new Date();
    element.disabled = true;
    let totaltime = 0;
    this.consulmicroService.createItem(element).subscribe(
      (response) => {
        totaltime = new Date().getTime() - hora.getTime();
        element.totaltime = totaltime.toString() + ' ms.'
        this.response = response;
        element.responseCode = this.response.responseCode;
        element.disabled = false;
        element.respuesta = 'verde'
      },
      (error) => {
        totaltime = new Date().getTime() - hora.getTime();
        element.totaltime = totaltime.toString() + ' ms.';
        element.disabled = false;
        element.respuesta = 'rojo';
        if (error.error.responseCode) {
          element.responseCode = error.error.responseCode;
        } else {
          element.responseCode = 'REVISA VPN';
        }
      }
    );
  }
}

