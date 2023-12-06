import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase ='https://localhost:7022';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getActividad():any{
    return this.http.get(`${urlBase}/User/getActividad`);
  }
  getActividad_Vivienda():any{
    return this.http.get(`${urlBase}/User/getActividad_Vivienda`);
  }
  getLocalidad(data:any):any{
    return this.http.post(`${urlBase}/User/getLocalidad`,data);
  }
  getMunicipios():any{
    return this.http.get(`${urlBase}/User/getMunicipios`);
  }
  getPeronas():any{
    return this.http.get(`${urlBase}/User/getPeronas`);
  }
}
