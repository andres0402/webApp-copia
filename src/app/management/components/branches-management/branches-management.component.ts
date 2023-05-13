import { Component } from '@angular/core';
import { Taller } from 'src/app/models/branches/taller';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BranchService} from 'src/app/shared/services/branchService/branch.service';

@Component({
  selector: 'app-branches-management',
  templateUrl: './branches-management.component.html',
  styleUrls: ['./branches-management.component.sass']
})
export class BranchesManagementComponent {
  constructor(
    private formBuilder: FormBuilder,
    private branchService: BranchService
  ){}
  labels: string[] = [];
  tallerList: Taller[] = [];
  tallerInfo: Taller = new Taller(0, '', '', '', );
  createLayoutActivate: boolean = false;
  updateLayoutActivate: boolean = false;
  formButtonLayoutTitle: string = '';

  createTallerForm = this.formBuilder.group({
    id: 0,
    name: '',
    ciudad: '',
    tipo: '',
  });

  ngOnInit(): void {
    this.labels = Taller.describe();
    this.branchService.getAllBranches().subscribe((data) => {
      this.tallerList = data;
    });
  }
  launchCreateFormLayout(){
    this.createLayoutActivate = true;
    this.formButtonLayoutTitle = 'Crear taller';
  }

  closeInputFormLayout(){
    this.createLayoutActivate = false;
    this.updateLayoutActivate = false;
    this.tallerInfo = new Taller(0, '', '','');
    this.createTallerForm.reset();
  }

  selectedService(taller: Taller): void {
    this.updateLayoutActivate = true;
    this.formButtonLayoutTitle = 'Actualizar servicio';
    this.tallerInfo = taller;
  }

  updateTaller(id: Number,taller: Taller): void {
    this.branchService.updateTaller(id, taller);
  }

  createTaller(taller: Taller){
    this.branchService.createTaller(taller);
  }

  deleteTaller(id: Number){
    this.tallerList = this.tallerList.filter((taller) => taller.id != id);
    this.branchService.deteleTaller(id).subscribe((data) => console.log(data))
  }

  onSubmit(): void {
    let id: Number = <Number>this.createTallerForm.value.id;
    let name: string = <string>this.createTallerForm.value.name;
    let ciudad: string = <string>this.createTallerForm.value.ciudad;
    let tipo: string = <string>this.createTallerForm.value.tipo;

    if(this.updateLayoutActivate) {
      let taller = new Taller(
        this.tallerInfo.id,
        name,
        ciudad,
        tipo,
      );
      this.updateTaller(this.tallerInfo.id, taller);
    }

    if(this.createLayoutActivate) {
      let taller = new Taller(
        id,
        name,
        ciudad,
        tipo,
      );
      this.createTaller(taller);
    }
  }
}

