import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsulmicroService {

  private apiUrl = 'https://tu-api.com';

  constructor(private http: HttpClient) { }


   // Operación de lectura (GET)
   getItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}/items`);
  }
  /*getEjec(curlText: string): Observable<any> {
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
        if (methodMatch) {
          curlData.method = "POST";
        }else {
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

   /* let res = this.sendHttpRequest(curlData);
    console.log(res);
    return this.http.request(curlData.method, curlData.url, { body: curlData.body }).pipe(
      catchError((error: any) => {
        console.error('Error en la solicitud HTTP:', error);
        return (error.status.toString());
      })
    );
  }*/

  /*async sendHttpRequest(curlData: any) {
    //const headers = new HttpHeaders(curlData.headers);
    let responseOp;
    responseOp = axios.post(curlData.url, curlData.data, {responseType: 'json',}).then((response) => {
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
      });
  }*/

  
  createItem(item: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/items`, item);
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
