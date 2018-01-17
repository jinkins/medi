import { X400Service } from './x400.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { X400 } from './x400';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-x400',
  templateUrl: './x400.component.html',
  styleUrls: ['./x400.component.css']
})
export class X400Component implements OnInit {

  constructor(private xs: X400Service, private router: Router, private fb: FormBuilder) { }

  x400s: X400[] = [];
  searchForm: FormGroup;

  ngOnInit() {
    this.xs.getAllX400().subscribe(
      data => {
        this.x400s = data;
      },
      error => {
        console.log(error);
        if (error.status === 401) {
          this.router.navigateByUrl('/login');
        }
      }
    );
    this.searchForm = this.fb.group({
      gln: '',
      c: '',
      admd: '',
      prmd: '',
      o: '',
      g: '',
      s: ''
    });
  }

  onSearch() {
    this.xs.searchX400(this.searchForm.value).subscribe(
      data => this.x400s = data,
      error => {
        console.log(error);
        if (error.status === 401) {
          this.router.navigateByUrl('/login');
        }
      }
    );
  }
}
