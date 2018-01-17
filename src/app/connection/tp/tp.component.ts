import { TPService } from './tp.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TP } from './tp';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.component.html',
  styleUrls: ['./tp.component.css']
})
export class TpComponent implements OnInit {

  constructor(private ts: TPService , private router: Router, private fb: FormBuilder) { }

  private tps: TP[] = [];
  private searchForm: FormGroup;

  ngOnInit() {
    this.ts.getTPs().subscribe(
      data => {
        this.tps = data;
      },
      error => {
        console.log(error);
        if (error.status === 401) {
          this.router.navigateByUrl('/login');
        }
      }
    );
    this.searchForm = this.fb.group({
      id: '',
      name: '',
      type: '',
      as2id: '',
      as2url: ''
    });
  }

  onSearch() {
    this.ts.searchTP(this.searchForm.value).subscribe(
      data => this.tps = data,
      error => {
        console.log(error);
        if (error.status === 401) {
          this.router.navigateByUrl('/login');
        }
      }
    );
  }

}
