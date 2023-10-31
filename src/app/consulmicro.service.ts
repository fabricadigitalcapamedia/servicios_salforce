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
  getEjec(data: string): Observable<any> {
    return this.http.get(this.apiUrl + '/seguridad?usuario=' + data).pipe(
      catchError((error: any) => {
        // Manejar el error aquí, por ejemplo, registrándolo o devolviendo un error personalizado.
        console.error('Error en la solicitud HTTP:', error);
        
        // Devuelve un nuevo observable que emite el error
        debugger
        return (error.status.toString());
      })
    );
  }

  
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
