import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, forkJoin, takeUntil } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tabla-generica',
  templateUrl: './tabla-generica.component.html',
  styleUrls: ['./tabla-generica.component.scss']
})
export class TablaGenericaComponent {
  private destroy$ = new Subject<void>();
  @Input() saberDeQueTipo: any;
  @Input() reload: any;

  dataGenerica: any = [];

  spinner = false;
  datos: any = [];
  displayedColumns: string[] = [];
  displayedColumnsNames: string[] = [];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService, private adminService: AdminService) { }
  ngOnInit() {
    this.spinner = true;
    this.Apis();
  }
  ngOnChanges(){
    if(this.reload = true){
      this.ngOnInit()
    }
  }

  Apis() {
    if (this.saberDeQueTipo == "ROL") {
      forkJoin([
        this.adminService.getRoles().pipe(takeUntil(this.destroy$)),
      ]).subscribe(([data]: any) => {
        this.displayedColumnsNames =['ID','DESCRIPCION']
        this.dataGenerica = data.data;
        this.dataForTable();
      });
    }
    if (this.saberDeQueTipo == "USER") {
      forkJoin([
        this.adminService.getUsers().pipe(takeUntil(this.destroy$)),
      ]).subscribe(([data]: any) => {
        this.displayedColumnsNames =['ID','USER_NAME','ID_ROL']
        this.dataGenerica = data.data;
        this.dataForTable();
      });
    }
    if (this.saberDeQueTipo == "MUNICIPIO") {
      forkJoin([
        this.userService.getMunicipios().pipe(takeUntil(this.destroy$)),
      ]).subscribe(([data]: any) => {
        this.displayedColumnsNames =['DESCRIPCION','ID']
        this.dataGenerica = data.data;
        this.dataForTable();
      });
    }
    if (this.saberDeQueTipo == "TIPO_VIVIENDA") {
      forkJoin([
        this.adminService.get_Tipo_Vivienda().pipe(takeUntil(this.destroy$)),
      ]).subscribe(([data]: any) => {
        this.displayedColumnsNames =['ID','DESCRIPCION']
        this.dataGenerica = data.data;
        this.dataForTable();
      });
    }
    if (this.saberDeQueTipo == "ACTIVIDAD_ECONOMICA") {
      forkJoin([
        this.adminService.get_Actividad_Economica().pipe(takeUntil(this.destroy$)),
      ]).subscribe(([data]: any) => {
        this.displayedColumnsNames =['ID','DESCRIPCION']
        this.dataGenerica = data.data;
        this.dataForTable();
      });
    }
    if (this.saberDeQueTipo == "VIVIENDA") {
      forkJoin([
        this.adminService.getVivienda().pipe(takeUntil(this.destroy$)),
      ]).subscribe(([data]: any) => {
        this.displayedColumnsNames =['ID','TIPO_VIVIENDA','MUNICIPIO','LOCALIDAD','CALLE','NUM_EXT','COLONIA','USER']
        this.dataGenerica = data.data;
        this.dataForTable();
      });
    }

    if (this.saberDeQueTipo == "ACTIVIDADES_VIVIENDAS") {
      forkJoin([
        this.adminService.get_Vivienda_Actividades().pipe(takeUntil(this.destroy$)),
      ]).subscribe(([data]: any) => {
        this.displayedColumnsNames =['NOMBRE','ID_VIVIENDA']
        this.dataGenerica = data.data;
        this.dataForTable();
      });
    }
    if (this.saberDeQueTipo == "PERSONAS") {
      forkJoin([
        this.adminService.get_Personas().pipe(takeUntil(this.destroy$)),
      ]).subscribe(([data]: any) => {
        this.displayedColumnsNames =['CURP','ID_VIVIENDA','NOMBRE','PATERNO','MATERNO','USER_NAME']
        this.dataGenerica = data.data;
        this.dataForTable();
      });
    }





  }


  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  dataForTable() {
    this.datos = this.dataGenerica;
    this.displayedColumns = this.getDisplayedColumns(this.datos);
    this.dataSource = new MatTableDataSource(this.datos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.spinner = false;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getDisplayedColumns(data: any[]): string[] {
    const columns: string[] = [];
    data.forEach((item: any) => {
      Object.keys(item).forEach((key, index) => {
        if (key !== '' && !columns.includes(key)) {
          columns.push(key);
        }
      });
    });
    return columns;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
