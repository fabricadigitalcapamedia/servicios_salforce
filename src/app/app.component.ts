import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgFor } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ConsulmicroService } from './consulmicro.service';


export interface PeriodicElement {
  name: string;
  position: number;
  request: string;
  response: string;
  horainicial: string;
  horafinal: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Mspruba1', request: 'localhost:8080', response: 'reponse', horainicial: '', horafinal: '' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'action', 'name', 'request', 'response', 'horainicial', 'horafinal'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer, private consulmicroService: ConsulmicroService) { }

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  realizarAccion(element: any) {
    this.consulmicroService.getEjec("curl --location '\http://msautentiltoken-nm-salesforce-sales-qa.apps.r05oof71.eastus2.aroapp.io/MS/MsAuthentication/Authentication' \ --header 'accept: application/json' \ --header 'Content-Type: application/json' \ --header 'Cookie: 170751ca5dbdd2fc7b788ea00752648c=9cd1c813b3531903fbcf1203e950ec9c; 9852ea517a763ff80f67b409a3a05176=8d78291174b3aac66d11a05f44139853' \ --data-raw '{ \"iss\": \"3MVG9qEXqmIutu_TwT3C7e5DLglHfznLNbZQYcQw2mFNAN8PtHZsu1vwcUF.3W_cdUXPULPXAckbagusIKdbw\", \"sub\": \"devops@clarosfi.com.co.ci03\", \"aud\": \"\https://test.salesforce.com\", \"exp\": \"1696455546\" }' ").subscribe((response) => {
      // Implementa la lógica de la acción que deseas realizar con el elemento seleccionado.
      console.log('Haciendo algo con el elemento:', element);
    });
  }
}

