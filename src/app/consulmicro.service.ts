import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ConsulmicroService {

  private apiUrl = 'http://msservicestateprovicional-nm-salesforce-sales-qa.apps.r05oof71.eastus2.aroapp.io/MS/SVC/Service';

  constructor(private http: HttpClient) { }


  // Operación de lectura (GET)
  getItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}/items`);
  }
  getEjec(curlText: string): Observable<any> {
    const lines = curlText.split('\n');

    const curlData = {
      url: '',
      method: '',
      headers: {},
      body: ''
    };

    lines.forEach(line => {
      line = line.trim();

      if (line.startsWith('curl')) {
        const urlMatch = line.match(/'(.*?)'/);
        if (urlMatch) {
          curlData.url = urlMatch[1];
        }
        const methodMatch = line.match(/--data-raw/);
        if (methodMatch != null) {
          curlData.method = "POST";
        } else {
          curlData.method = "GET";
        }
      }
      if (line.startsWith('--header')) {
        const headerMatch = line.match(/'([^:]+): (.+)'/);
        if (headerMatch) {
          const headerName = headerMatch[1];
          const headerValue = headerMatch[2];
          //curlData.headers[headerName] = headerValue;
        }
      }
      if (line.match('--data-raw')) {
        const bodyMatch = line.match(/--data-raw.+?({.+?})/);
        if (bodyMatch) {
          curlData.body = bodyMatch[1].replaceAll("\\\"", "\"");
        }
      }
    });

    let res = this.sendHttpRequest(curlData);
    console.log(res);
    if (curlData.method == "GET") {
      return this.http.get(curlData.url).pipe(
        catchError((error: any) => {
          console.error('Error en la solicitud HTTP:', error);
          return (error.status.toString());
        })
      );
    } else {
      return this.http.request(curlData.method, curlData.url, { body: curlData.body }).pipe(
        catchError((error: any) => {
          console.error('Error en la solicitud HTTP:', error);
          return (error.status.toString());
        })
      );
    }

  }

  async sendHttpRequest(curlData: any) {
    //const headers = new HttpHeaders(curlData.headers);
    let responseOp;
    responseOp = axios.post(curlData.url, curlData.data, { responseType: 'json', }).then((response) => {
      console.log(response);
      return response;
    })
      .catch((error) => {
        console.log(error);
        return error.response;
      })
    /*this.http.request(curlData.method, curlData.url, { body: curlData.body })
      .subscribe((response: any) => {
        console.log(response);
      });*/
  }


  public createItem(item: any) {
    item.ambiente=item.ambiente?null:item.ambiente;
    const url = `${this.apiUrl}/metodoConsulta/metodoConsulta?microservicio=${item.microservicio}&metodo=${item.metodo}&ambiente=${item.Ambiente}`;
    return this.http.get(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse): Observable<HttpErrorResponse> {
    return throwError(error); // Puedes personalizar el mensaje de error si lo deseas
  }

  createItem2(item: any): Observable<any> {
    let data = this.http.post(this.apiUrl, { curl: item });
    return data;
  }

  // Operación de actualización (PUT)
  updateItem(id: number, item: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/items/${id}`, item);
  }

  // Operación de eliminación (DELETE)
  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/items/${id}`);
  }

}