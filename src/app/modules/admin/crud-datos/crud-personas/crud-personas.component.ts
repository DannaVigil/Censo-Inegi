import { Component, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-personas',
  templateUrl: './crud-personas.component.html',
  styleUrls: ['./crud-personas.component.scss']
})
export class CrudPersonasComponent {

  private destroy$ = new Subject<void>();

  @ViewChild('curp', { read: ElementRef }) curpI!: ElementRef
  @ViewChild('nombre', { read: ElementRef }) nombreI!: ElementRef
  @ViewChild('paterno', { read: ElementRef }) paternoI!: ElementRef
  @ViewChild('materno', { read: ElementRef }) maternoI!: ElementRef
  @ViewChild('id_vivienda', { read: ElementRef }) id_viviendaI!: ElementRef
  @ViewChild('formulario', { static: false }) formularioRefI!: NgForm;
  formulario: FormGroup;

  //Obtener info para user
  User: any = [];
  nombre: any = [];
  idUser: any = [];
  //info del response
  dataNiveles: any = [];
  dataMunicipios: any = [];
  dataAuntos: any = [];
  //mapeo de datos
  niveles: any = [];
  idNiveles:any =[];
  municipios: any = [];
  idMunicipios:any =[];
  asuntos:any = [];
  idAsuntos:any = [];

  //Variables envio de datos
  curpv:any=[];
  nombrev:any=[];
  paternov:any=[];
  maternov:any=[];
  telefonov:any=[];
  nivelv:any=[];
  municipiov:any=[];
  asuntov:any=[];

  //Envio datos
  source:any=[];
  constructor(private adminService: AdminService, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      curp: ['', [Validators.required, this.regexValidator(/^[A-Z]{4}\d{6}[HM]{1}[A-Z]{6}\d{1}$/, 'curpInvalida')]],
      id_vivienda:[''],
      nombre: [''],
      paterno: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[A-Za-z]+$/)]],
      materno: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[A-Za-z]+$/)]],
    });
    this.User = localStorage.getItem('User');
    const parsedData = JSON.parse(this.User);
    this.nombre = parsedData.useR_NAME; // Obtener el valor de la propiedad "WIW"
    this.idUser = parsedData.iD_ROL;
  }

  regexValidator(regex: RegExp, errorKey: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      const isValid = regex.test(value);
  
      return isValid ? null : { [errorKey]: true };
    };
  }

  async validar(): Promise<any> {
    if(this.formulario.valid){
      this.getDatosCapturados();
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algun campo esta mal escrito o no fue seleccionado',
        timer: 1800
      })
    }
  }

  idv:any=[];
  getDatosCapturados(){
    this.curpv = this.curpI.nativeElement.value;
    this.idv = this.id_viviendaI.nativeElement.value;
    this.nombrev = this.nombreI.nativeElement.value;
    this.paternov = this.paternoI.nativeElement.value;
    this.maternov = this.maternoI.nativeElement.value;


    this.save();  
  }
  async save(): Promise<any> {
    this.source = {
      "curp": this.curpv, "nombre": this.nombrev, "paterno": this.paternov,
      "materno": this.maternov, "iD_VIVIENDA": parseInt(this.idv), 
      "iD_CAPTURA":this.idUser
    }
    console.log(this.source)
    this.adminService.insert_Personas(this.source).subscribe(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Persona Guardada',
        showConfirmButton: false,
        timer: 2000
      })
    })
  }
}
