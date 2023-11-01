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
  data: any = {};

  constructor(private _liveAnnouncer: LiveAnnouncer, private consulmicroService: ConsulmicroService) { }

  @ViewChild(MatSort)
  sort!: MatSort;



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.boxControl = ELEMENT_DATA;
    this.data = [
      {
        nameService: "MSCustomeBridgeTabCloud",
        curl: "curl --location 'http://mscustomebridgetabcloud-nm-salesforce-sales-dev.apps.r05oof71.eastus2.aroapp.io/MS/SVC/Service/MsCustomeBridGetabCloud/V1/Consult?tipoConsulta=1&datoBusqueda=0017800000GHJxcAAH' \
    --header 'Cookie: f46e840f28d4786aa7d60cd1c464dffd=1ef1af7a350a2046ed8cdc6c926352c0'" ,
        metodo: "Consult",
        Ambiente: "DEV"
      },
      {
        nameService: "MSCustomeBridgeTabCloud",
        curl: "curl --location 'http://mscustomebridgetabcloud-nm-salesforce-sales-qa.apps.r05oof71.eastus2.aroapp.io/MS/SVC/Service/MsCustomeBridGetabCloud/V1/Consult?tipoConsulta=1&datoBusqueda=0017800000GHJxcAAH' \
    --header 'Cookie: f46e840f28d4786aa7d60cd1c464dffd=1ef1af7a350a2046ed8cdc6c926352c0'" ,
        metodo: "Consult",
        Ambiente: "QA"
      },
      {
        nameService: "MSCustomeBridgeTableOp",
        curl: " curl --location 'http://mscustomebridgetableop-nm-salesforce-sales-dev.apps.claro.co/MS/CUS/CustomerAccount/RSCustomeBridgeTableOP/V1/Consult?tipoConsulta=13&datoBusqueda=12' \
    --header 'accept: application/json' \
    --header 'Content-Type: application/json' \
    --header 'Cookie: 8462980503615aa6d3733c266e4ab513=3b07e30c13a26b68abeef69eb92a5b23'",
        metodo: "Consult",
        Ambiente: "DEV"
      },
      {
        nameService: "MSCustomeBridgeTableOp",
        curl: " curl --location 'http://mscustomebridgetableop-nm-salesforce-sales-qa.apps.claro.co/MS/CUS/CustomerAccount/RSCustomeBridgeTableOP/V1/Consult?tipoConsulta=13&datoBusqueda=12' \
    --header 'accept: application/json' \
    --header 'Content-Type: application/json' \
    --header 'Cookie: 8462980503615aa6d3733c266e4ab513=3b07e30c13a26b68abeef69eb92a5b23'"  ,
        metodo: "Consult",
        Ambiente: "QA"
      },
      {
        nameService: "MSAutentiltoken",
        curl: "curl --location 'http://msautentiltoken-nm-salesforce-sales-dev.apps.r05oof71.eastus2.aroapp.io/MS/MsAuthentication/Authentication' \ --header 'accept: application/json' \ --header 'Content-Type: application/json' \ --header 'Cookie: 170751ca5dbdd2fc7b788ea00752648c=9cd1c813b3531903fbcf1203e950ec9c;9852ea517a763ff80f67b409a3a05176=8d78291174b3aac66d11a05f44139853' \ --data-raw '{ \"iss\": \"3MVG9qEXqmIutu_TwT3C7e5DLglHfznLNbZQYcQw2mFNAN8PtHZsu1vwcUF.3W_cdUXPULPXAckbagusIKdbw\", \"sub\": \"devops@clarosfi.com.co.ci03\", \"aud\": \"https://test.salesforce.com\", \"exp\": \"1696455546\" }' ",
        metodo: "Authentication",
        Ambiente: "DEV"
      },
      {
        nameService: "MSAutentiltoken",
        curl: "curl --location 'http://msautentiltoken-nm-salesforce-sales-qa.apps.r05oof71.eastus2.aroapp.io/MS/MsAuthentication/Authentication' \ --header 'accept: application/json' \ --header 'Content-Type: application/json' \ --header 'Cookie: 170751ca5dbdd2fc7b788ea00752648c=9cd1c813b3531903fbcf1203e950ec9c;9852ea517a763ff80f67b409a3a05176=8d78291174b3aac66d11a05f44139853' \ --data-raw '{ \"iss\": \"3MVG9qEXqmIutu_TwT3C7e5DLglHfznLNbZQYcQw2mFNAN8PtHZsu1vwcUF.3W_cdUXPULPXAckbagusIKdbw\", \"sub\": \"devops@clarosfi.com.co.ci03\", \"aud\": \"https://test.salesforce.com\", \"exp\": \"1696455546\" }' ",
        metodo: "Authentication",
        Ambiente: "QA"
      },
      {
        nameService: "MSComunicationSaleForce",
        curl: " curl --location 'http://mscomunicationsaleforce-nm-salesforce-sales-dev.apps.r05oof71.eastus2.aroapp.io/MS/SVC/Service/MSComunicationSaleforce/PaymentService/V1.0/getOrderPayment?identificationType=CC&identificationNumber=12345678' \
    --header 'Authorization: Bearer 00D780000008hLE!AREAQFAChMGl9_FKXmMQQi7RYmDcdBCGhWa3Nd26mTWytXFJeGX1i_oxD7KfdT6kHf2DDGqk.Ztn3Ru.sDDVQSllkvvAK3D_' \
    --header 'Cookie: 170751ca5dbdd2fc7b788ea00752648c=cf5bad62ce007ecf6d953fffef89fc4d'"  ,
        metodo: "GetOrderPayment",
        Ambiente: "DEV"
      },
      {
        nameService: "MSComunicationSaleForce",
        curl: " curl --location 'http://mscomunicationsaleforce-nm-salesforce-sales-qa.apps.r05oof71.eastus2.aroapp.io/MS/SVC/Service/MSComunicationSaleforce/PaymentService/V1.0/getOrderPayment?identificationType=CC&identificationNumber=12345678' \
    --header 'Authorization: Bearer 00D780000008hLE!AREAQFAChMGl9_FKXmMQQi7RYmDcdBCGhWa3Nd26mTWytXFJeGX1i_oxD7KfdT6kHf2DDGqk.Ztn3Ru.sDDVQSllkvvAK3D_' \
    --header 'Cookie: 170751ca5dbdd2fc7b788ea00752648c=cf5bad62ce007ecf6d953fffef89fc4d'",
        metodo: "GetOrderPayment",
        Ambiente: "QA"
      },
      {
        nameService: "MSComunicationSaleForce",
        curl: " curl --location 'http://mscomunicationsaleforce-nm-salesforce-sales-dev.apps.r05oof71.eastus2.aroapp.io/MS/SVC/Service/MSComunicationSaleforce/PaymentService/V1.0/VerifyOrderPayment?identificationType=CC&identificationNumber=1030588316' \
    --header 'accept: application/json' \
    --header 'Content-Type: application/json' \
    --header 'Cookie: 170751ca5dbdd2fc7b788ea00752648c=9cd1c813b3531903fbcf1203e950ec9c; 4478bc089c9d48de53802e305b954148=f974750df5a07f3d74c5b4bdab5c4f55'"  ,
        metodo: "VerifyOrderPayment",
        Ambiente: "DEV"
      },
      {
        nameService: "MSComunicationSaleForce",
        curl: " curl --location 'http://mscomunicationsaleforce-nm-salesforce-sales-qa.apps.r05oof71.eastus2.aroapp.io/MS/SVC/Service/MSComunicationSaleforce/PaymentService/V1.0/VerifyOrderPayment?identificationType=CC&identificationNumber=1030588316' \
    --header 'accept: application/json' \
    --header 'Content-Type: application/json' \
    --header 'Cookie: 170751ca5dbdd2fc7b788ea00752648c=9cd1c813b3531903fbcf1203e950ec9c; 4478bc089c9d48de53802e305b954148=f974750df5a07f3d74c5b4bdab5c4f55'" ,
        metodo: "VerifyOrderPayment",
        Ambiente: "QA"
      },
      {
        nameService: "MSComunicationsaleforce",
        curl: "curl --location ' http://mscomunicationsaleforce-nm-salesforce-sales-dev.apps.r05oof71.eastus2.aroapp.io/MS/SVC/Service/MSComunicationSaleforce/PaymentService/V1.0/IpmonSmilestone' \ --header 'accept: application/json' \ --header 'Content-Type: application/json' \ --header 'Cookie: 170751ca5dbdd2fc7b788ea00752648c=6e130ba0d9658c2589ef247ec1ec03ae' \ --data '{     \"orderOmsId\": \"64c2c41a2c132396cae64d09\",     \"orderSapId\": \"64b6a3c12c132396ca91b33e\",     \"orderProductItem\": {         \"status\": \"READY_FOR_PICKUP\",         \"deliveryOrderId\": \"F23071861004\",         \"serials\": \"571234567890\",         \"productType\": \"TV0003\"     } }'",
        metodo: "IpmonSmilestone",
        Ambiente: "DEV"
      },
      {
        nameService: "MSComunicationsaleforce",
        curl: "curl --location 'http://mscomunicationsaleforce-nm-salesforce-sales-qa.apps.r05oof71.eastus2.aroapp.io/MS/SVC/Service/MSComunicationSaleforce/PaymentService/V1.0/IpmonSmilestone' \ --header 'accept: application/json' \ --header 'Content-Type: application/json' \ --header 'Cookie: 170751ca5dbdd2fc7b788ea00752648c=6e130ba0d9658c2589ef247ec1ec03ae' \ --data '{     \"orderOmsId\": \"64c2c41a2c132396cae64d09\",     \"orderSapId\": \"64b6a3c12c132396ca91b33e\",     \"orderProductItem\": {         \"status\": \"READY_FOR_PICKUP\",         \"deliveryOrderId\": \"F23071861004\",         \"serials\": \"571234567890\",         \"productType\": \"TV0003\"     } }'",
        metodo: "IpmonSmilestone",
        Ambiente: "QA"
      },/*
      {
        nameService: "MSComunicationsaleforce",
        curl: "",
        metodo: "GetCaseInformation",
        Ambiente: "DEV"
      },
      {
        nameService: "MSComunicationsaleforce",
        curl: "",
        metodo: "GetCaseInformation",
        Ambiente: "QA"
      },
      {
        nameService: "MSComunicationsaleforce",
        curl: "",
        metodo: "ProductOrderPaymentConfirmation",
        Ambiente: "QA"
      },
      {
        nameService: "MSComunicationsaleforce",
        curl: "",
        metodo: "ProductOrderPaymentConfirmation",
        Ambiente: "DEV"
      },
      {
        nameService: "MSComunicationsaleforce",
        curl: "",
        metodo: "GetProductOrder",
        Ambiente: "DEV"
      },
      {
        nameService: "MSComunicationsaleforce",
        curl: "",
        metodo: "GetProductOrder",
        Ambiente: "QA"
      },*/
      {
        nameService: "MSComunicationsaleforce",
        curl: "curl --location 'http://mscomunicationsaleforce-nm-salesforce-sales-dev.apps.r05oof71.eastus2.aroapp.io/MS/SVC/Service/MSComunicationSaleforce/PaymentService/V1.0/ReversePaymentSvtas' \ --header 'accept: application/json' \ --header 'Content-Type: application/json' \ --header 'Cookie: 170751ca5dbdd2fc7b788ea00752648c=9cd1c813b3531903fbcf1203e950ec9c; 170751ca5dbdd2fc7b788ea00752648c=deb5a270f24adacf7f3f54597b28addd' \ --data '{     \"PaymentConfirmation\": [         {             \"CaseNumber\": \"00001015\",             \"paymentId\": \"123456788\",             \"companyId\": \"SICACOM\",             \"status\": \"Cerrado\",             \"SubState\": \"Dinero entregado\",             \"OrderPaymentInformation\": [                 {                     \"paymentMethod\": \"1\",                     \"amount\": 10.0,                     \"dateTime\": \"2021-04-16T00:00:00.000Z\"                 }             ]         }     ] }' ",
        metodo: "ReversePaymentSvtas",
        Ambiente: "DEV"
      },
      {
        nameService: "MSComunicationsaleforce",
        curl: "curl --location 'http://mscomunicationsaleforce-nm-salesforce-sales-qa.apps.r05oof71.eastus2.aroapp.io/MS/SVC/Service/MSComunicationSaleforce/PaymentService/V1.0/ReversePaymentSvtas' \ --header 'accept: application/json' \ --header 'Content-Type: application/json' \ --header 'Cookie: 170751ca5dbdd2fc7b788ea00752648c=9cd1c813b3531903fbcf1203e950ec9c; 170751ca5dbdd2fc7b788ea00752648c=deb5a270f24adacf7f3f54597b28addd' \ --data '{     \"PaymentConfirmation\": [         {             \"CaseNumber\": \"00001015\",             \"paymentId\": \"123456788\",             \"companyId\": \"SICACOM\",             \"status\": \"Cerrado\",             \"SubState\": \"Dinero entregado\",             \"OrderPaymentInformation\": [                 {                     \"paymentMethod\": \"1\",                     \"amount\": 10.0,                     \"dateTime\": \"2021-04-16T00:00:00.000Z\"                 }             ]         }     ] }' ",
        metodo: "ReversePaymentSvtas",
        Ambiente: "QA"
      },
      {
        nameService: "MSCusorderpubpaymentconfi",
        curl: "curl -X 'POST' \ 'http://mscusorderpubpaymentconfi-nm-salesforce-sales-dev.apps.r05oof71.eastus2.aroapp.io/MS/ENP/CustomerOrder/RSCusOrdePubPaymentConfig/V1/UPDATE/Payment' \ -H 'accept: application/json' \ -H 'Content-Type: application/json' \ -d '{          \"orderId\": \"12345\",  \"num_orden\": \"8888\",  \"id_process\": \"999\",  \"canal\": \"test_salesforce\",  \"tip_venta\": \"LIBRE\",  \"proceso_venta\": \"NAP\",  \"tip_entrega\": \"test\",  \"pago\": {  \"estado\": \"APROBADO\",  \"plataforma\": \"DEBITO\",  \"pasarela\": \"VISA\",  \"cus\": \"2980074\",  \"referencia\": \"1014022\",  \"valor_recaudo\": 797900,  \"fecha_recaudo\": \"2023-07-18\",  \"fecha_contable\": \"2023-07-18\"  }  }' ",
        metodo: "Payment",
        Ambiente: "DEV"
      },
      {
        nameService: "MSCusorderpubpaymentconfi",
        curl: "curl -X 'POST' \ 'http://mscusorderpubpaymentconfi-nm-salesforce-sales-qa.apps.r05oof71.eastus2.aroapp.io/MS/ENP/CustomerOrder/RSCusOrdePubPaymentConfig/V1/UPDATE/Payment' \ -H 'accept: application/json' \ -H 'Content-Type: application/json' \ -d '{          \"orderId\": \"12345\",  \"num_orden\": \"8888\",  \"id_process\": \"999\",  \"canal\": \"test_salesforce\",  \"tip_venta\": \"LIBRE\",  \"proceso_venta\": \"NAP\",  \"tip_entrega\": \"test\",  \"pago\": {  \"estado\": \"APROBADO\",  \"plataforma\": \"DEBITO\",  \"pasarela\": \"VISA\",  \"cus\": \"2980074\",  \"referencia\": \"1014022\",  \"valor_recaudo\": 797900,  \"fecha_recaudo\": \"2023-07-18\",  \"fecha_contable\": \"2023-07-18\"  }  }' ",
        metodo: "Payment",
        Ambiente: "QA"
      },
      {
        nameService: "MSCustomeBridgeTeqTec",
        curl: "Curl: curl --location 'http://mscustomebridgeteqtec-nm-salesforce-sales-dev.apps.r05oof71.eastus2.aroapp.io/MS/SVC/Service/MSCustomeBridgeTeqTec/V1/update' \ --header 'accept: application/json' \ --header 'Content-Type: application/json' \ --header 'Cookie: 170751ca5dbdd2fc7b788ea00752648c=9cd1c813b3531903fbcf1203e950ec9c; 94d0c25fe1a28fcf2dad56359cdd8d63=d9422f038f65f5e7121e9ad1921aaa88' \ --data '{     \"motivo\" : 1,     \"id_Cliente\" : \"417\",     \"datoBusqueda\" : \"1;123456789\",     \"datoActualizar\" : \"D\" }'",
        metodo: "update",
        Ambiente: "DEV"
      },
      {
        nameService: "MSCustomeBridgeTeqTec",
        curl: "Curl: curl --location 'http://mscustomebridgeteqtec-nm-salesforce-sales-qa.apps.r05oof71.eastus2.aroapp.io/MS/SVC/Service/MSCustomeBridgeTeqTec/V1/update' \ --header 'accept: application/json' \ --header 'Content-Type: application/json' \ --header 'Cookie: 170751ca5dbdd2fc7b788ea00752648c=9cd1c813b3531903fbcf1203e950ec9c; 94d0c25fe1a28fcf2dad56359cdd8d63=d9422f038f65f5e7121e9ad1921aaa88' \ --data '{     \"motivo\" : 1,     \"id_Cliente\" : \"417\",     \"datoBusqueda\" : \"1;123456789\",     \"datoActualizar\" : \"D\" }'",
        metodo: "update",
        Ambiente: "QA"
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
     element.respuesta='verde'
    /*  this.consulmicroService.createItem(element.curl).subscribe((response) => {
      console.log(response)      // Implementa la lógica de la acción que deseas realizar con el elemento seleccionado.
        console.log('Haciendo algo con el elemento:', element);
      });*/
  }
}

