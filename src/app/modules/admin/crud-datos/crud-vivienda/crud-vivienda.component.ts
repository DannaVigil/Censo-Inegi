import { Component, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-vivienda',
  templateUrl: './crud-vivienda.component.html',
  styleUrls: ['./crud-vivienda.component.scss']
})
export class CrudViviendaComponent {
  private destroy$ = new Subject<void>();

  @ViewChild('tipo_vivienda', { read: ElementRef }) curpI!: ElementRef
  @ViewChild('municipio', { read: ElementRef }) nombreI!: ElementRef
  @ViewChild('localidad', { read: ElementRef }) paternoI!: ElementRef
  @ViewChild('calle', { read: ElementRef }) maternoI!: ElementRef
  @ViewChild('num_ext', { read: ElementRef }) id_viviendaI!: ElementRef
  @ViewChild('colonia', { read: ElementRef }) coloniaI!: ElementRef
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
      tipo_vivienda: [''],
      municipio:[''],
      localidad: [''],
      calle: [''],
      num_ext: [''],
      colonia: [''],
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
      "iD_TIPO_VIVIENDA": parseInt(this.curpv), "iD_MUNICIPIO": this.nombrev, "iD_LOCALIDAD": this.paternov,
      "calle": this.maternov, "nuM_EXT": this.idv, "colonia": this.coloniaI.nativeElement.value,
      "iD_CAPTURA":this.idUser
    }
    console.log(this.source)
    this.adminService.insert_Vivienda(this.source).subscribe(() => {
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
