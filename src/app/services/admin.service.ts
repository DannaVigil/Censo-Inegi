import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase ='https://localhost:7022';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  insertRol(data:any):any{
    return this.http.post(`${urlBase}/Admin/insertRol`,data);
  }
  insertUser(data:any):any{
    return this.http.post(`${urlBase}/Admin/insertUser`,data);
  }
  insertMunicipio(data:any):any{
    return this.http.post(`${urlBase}/Admin/insertMunicipio`,data);
  }
  insertLocalidades(data:any):any{
    return this.http.post(`${urlBase}/Admin/insertLocalidades`,data);
  }
  insertTipoVivienda(data:any):any{
    return this.http.post(`${urlBase}/Admin/insertTipoVivienda`,data);
  }
  insertActividad_Economica(data:any):any{
    return this.http.post(`${urlBase}/Admin/insertActividad_Economica`,data);
  }
  insert_Vivienda(data:any):any{
    return this.http.post(`${urlBase}/Admin/insert_Vivienda`,data);
  }
  insert_Actividades_Viviendas(data:any):any{
    return this.http.post(`${urlBase}/Admin/insert_Actividades_Viviendas`,data);
  }
  insert_Personas(data:any):any{
    return this.http.post(`${urlBase}/Admin/insert_Personas`,data);
  }


  getRoles():any{
    return this.http.get(`${urlBase}/Admin/getRoles`);
  }
  getUsers():any{
    return this.http.get(`${urlBase}/Admin/getUsers`);
  }
  get_Tipo_Vivienda():any{
    return this.http.get(`${urlBase}/Admin/get_Tipo_Vivienda`);
  }
  get_Actividad_Economica():any{
    return this.http.get(`${urlBase}/Admin/get_Actividad_Economica`);
  }
  getVivienda():any{
    return this.http.get(`${urlBase}/Admin/getVivienda`);
  }
  get_Vivienda_Actividades():any{
    return this.http.get(`${urlBase}/Admin/get_Vivienda_Actividades`);
  }
  get_Personas():any{
    return this.http.get(`${urlBase}/Admin/get_Personas`);
  }

  get_Unique_Rol(data:any):any{
    return this.http.post(`${urlBase}/Admin/get_Unique_Rol`,data);
  }
  update_Roles(data:any):any{
    return this.http.post(`${urlBase}/Admin/update_Roles`,data);
  }
  get_Unique_User(data:any):any{
    return this.http.post(`${urlBase}/Admin/get_Unique_User`,data);
  }
  update_Users(data:any):any{
    return this.http.post(`${urlBase}/Admin/update_Users`,data);
  }
  get_Unique_Municipio(data:any):any{
    return this.http.post(`${urlBase}/Admin/get_Unique_Municipio`,data);
  }
  update_Municipio(data:any):any{
    return this.http.post(`${urlBase}/Admin/update_Municipio`,data);
  }
  get_Unique_Tipo_Vivienda(data:any):any{
    return this.http.post(`${urlBase}/Admin/get_Unique_Tipo_Vivienda`,data);
  }
  update_Tipo_Vivienda(data:any):any{
    return this.http.post(`${urlBase}/Admin/update_Tipo_Vivienda`,data);
  }
  get_Unique_Actividad_Economica(data:any):any{
    return this.http.post(`${urlBase}/Admin/get_Unique_Actividad_Economica`,data);
  }
  update_Actividad_Economica(data:any):any{
    return this.http.post(`${urlBase}/Admin/update_Actividad_Economica`,data);
  }
  get_Unique_Actividades_Viviendas(data:any):any{
    return this.http.post(`${urlBase}/Admin/get_Unique_Actividades_Viviendas`,data);
  }
  
  update_AActividad_Vivienda(data:any):any{
    return this.http.post(`${urlBase}/Admin/update_AActividad_Vivienda`,data);
  }
  get_Unique_Viviendas(data:any):any{
    return this.http.post(`${urlBase}/Admin/get_Unique_Viviendas`,data);
  }
  update_Vivienda(data:any):any{
    return this.http.post(`${urlBase}/Admin/update_Vivienda`,data);
  }
  get_Unique_Personas(data:any):any{
    return this.http.post(`${urlBase}/Admin/get_Unique_Personas`,data);
  }
  update_Persona(data:any):any{
    return this.http.post(`${urlBase}/Admin/update_Persona`,data);
  }



  delete_Rol(data:any):any{
    return this.http.post(`${urlBase}/Admin/delete_Rol`,data);
  }
  delete_Users(data:any):any{
    return this.http.post(`${urlBase}/Admin/delete_Users`,data);
  }
  delete_Municipios(data:any):any{
    return this.http.post(`${urlBase}/Admin/delete_Municipios`,data);
  }
  delete_Tipo_Vivienda(data:any):any{
    return this.http.post(`${urlBase}/Admin/delete_Tipo_Vivienda`,data);
  }
  delete_Actividad_Economica(data:any):any{
    return this.http.post(`${urlBase}/Admin/delete_Actividad_Economica`,data);
  }
  delete_Actividades_Viviendas(data:any):any{
    return this.http.post(`${urlBase}/Admin/delete_Actividades_Viviendas`,data);
  }
  delete_Viviendas(data:any):any{
    return this.http.post(`${urlBase}/Admin/delete_Viviendas`,data);
  }
  delete_Personas(data:any):any{
    return this.http.post(`${urlBase}/Admin/delete_Personas`,data);
  }







}
