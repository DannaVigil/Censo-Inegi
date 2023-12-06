import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subject, forkJoin, takeUntil } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-rol',
  templateUrl: './crud-rol.component.html',
  styleUrls: ['./crud-rol.component.scss']
})
export class CrudRolComponent {

  private destroy$ = new Subject<void>();

  @ViewChild('id', { read: ElementRef }) idI!: ElementRef
  @ViewChild('descripcion', { read: ElementRef }) descripcionI!: ElementRef

  @ViewChild('dato', { read: ElementRef }) datoI!: ElementRef;
  @ViewChild('formulario', { static: false }) formularioRefI!: NgForm;
  formulario: FormGroup;

  @ViewChild('formularioConsultar', { static: false }) formularioConsultarRefI!: NgForm;
  formularioConsultar: FormGroup;

  @ViewChild('formularioUpdate', { static: false }) formularioUpdateRefI!: NgForm;
  formularioUpdate: FormGroup;


  @ViewChild('idDelete', { read: ElementRef }) idDeleteI!: ElementRef;
  @ViewChild('formularioDelete', { static: false }) formularioDeleteRefI!: NgForm;
  formularioDelete: FormGroup;
  //Variables envio de datos
  idv: any = []
  descripcionv: any = [];
  idDeletev:any=[];

  dataRoles: any = [];
  roles: any = [];
  idRoles: any = [];

  spinner = false;

  reload = false;
  // //Variables envio de datos
  datov: any = [];
  constructor(private formBuilder: FormBuilder, private adminService: AdminService,
    private formBuilder2: FormBuilder, private formBuilder3: FormBuilder,private formBuilder4: FormBuilder) {
    this.formulario = this.formBuilder.group({
      dato: ['', [Validators.required, Validators.maxLength(25), Validators.pattern(/^[A-Za-z]+$/)]],
    });

    this.formularioConsultar = this.formBuilder2.group({
      id: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(/^\d{1,10}$/)]],
    });
    this.formularioUpdate = this.formBuilder3.group({
      descripcion: ['', [Validators.required, Validators.maxLength(25), Validators.pattern(/^[A-Za-z]+$/)]],
    });
    this.formularioDelete = this.formBuilder4.group({
      idDelete: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(/^\d{1,10}$/)]],
    });
  }
  onSubmit() {
    this.reload = false;
    if (this.formulario.valid) {
      this.Apis();
    }
  }
  Apis() {
    this.datov = this.datoI.nativeElement.value;
    const data = { "nombre": this.datov }
    const resp = [];
    forkJoin([
      this.adminService.insertRol(data).pipe(takeUntil(this.destroy$)),
    ]).subscribe(([data]: any) => {
      this.sweetAlert(data.error);
    });

  }
  sweetAlert(error: any) {
    if (error == false) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Elemento Guardado',
        showConfirmButton: false,
        timer: 2000
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error',
        timer: 1800
      })
    }
    this.reload = true;
  }

  async buscar(): Promise<any> {
    if (this.formularioConsultar.valid) {
      this.spinner = true;
      this.buscarUser();
      this.Update();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'ID Incorrecto',
        timer: 1800
      })
      //this.clear()
    }
  }

  buscarUser() {
    this.idv = this.idI.nativeElement.value;
    const data = { "id": this.idv }
    this.adminService.get_Unique_Rol(data).subscribe((response: any) => {
      if (response.data.iD_USER = this.idv) {
        const user = response.data;
        this.mapUserUpdate(user);
      }
    });
  }
  mapUserUpdate(data: any) {
    this.descripcionI.nativeElement.value = data[0].nombre;
    this.descripcionv = data[0].nombre;
  }
  Update() {
    forkJoin([
      this.adminService.getRoles().pipe(takeUntil(this.destroy$)),
    ]).subscribe(([rol]: any) => {
      this.dataRoles = rol.data;
    });
  }

  actualizar() {
    this.descripcionv =this.descripcionI.nativeElement.value;
    const a = { "id": parseInt(this.idv), "nombre": this.descripcionv}
    this.adminService.update_Roles(a).subscribe(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Elemento Actualizado',
        showConfirmButton: false,
        timer: 2000
      })
      this.reload =true
    })
  }




  validarFormDelete(){
    if(this.formularioDelete.valid){
      this.deleteUser();
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Id Invalido',
        timer: 1800
      })
    }
  }
  deleteUser(){
    this.idDeletev = this.idDeleteI.nativeElement.value;
    const data ={"ID": this.idDeletev}
    this.adminService.delete_Rol(data).subscribe((response: any) => {
      if (response.data == 1) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Elemento Eliminado',
          showConfirmButton: false,
          timer: 2000
        })
      }else if(response.data == 0){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No existe usuario con ese id',
          timer: 1800
        })
      }
    });
  }

}
