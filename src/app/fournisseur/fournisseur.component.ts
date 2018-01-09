import { FormGroup } from '@angular/forms';
import { FournisseurService } from './fournisseur.service';
import { Component, OnInit } from '@angular/core';
import { Fournisseur } from './fournisseur';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  constructor(private fs: FournisseurService, private fb: FormBuilder, private router: Router) { }

  private suppliers: Fournisseur[];
  private searchForm: FormGroup;

  ngOnInit() {
    this.fs.getSuppliers().subscribe(
      data => this.suppliers = data,
      error => {
        console.log(error);
        if (error.status === 401) {
          this.router.navigateByUrl('/login');
        }
      }
    );
    this.searchForm = this.fb.group({
      lifnr: '',
      name: '',
      gln: '',
      tva: '',
      lang: ''
   });
  }

  onSearch() {
    this.fs.search(this.searchForm.value).subscribe(
      data => this.suppliers = data,
      error => {
        console.log(error);
        if (error.status === 401) {
          this.router.navigateByUrl('/login');
        }
      }
    );
  }

}
