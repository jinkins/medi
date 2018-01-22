import { Connection } from './../connection';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-connections',
  templateUrl: './search-connections.component.html',
  styleUrls: ['./search-connections.component.css']
})
export class SearchConnectionsComponent implements OnInit {

  searchForm: FormGroup;
  connections: Connection[];

  constructor(private fb: FormBuilder, private cs: ConnectionService, private router: Router) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      lifnr: '',
      name: '',
      gln: '',
      tva: '',
      tpName: '',
      as2id: '',
      as2url: '',
      c: '',
      admd: '',
      prmd: '',
      s: '',
      ars: ''
    });
  }

  onSearch() {
    this.cs.findConnection(this.searchForm.value).subscribe(
      data => this.connections = data,
      error => {
        console.log(error);
        if (error.status === 401) {
          this.router.navigateByUrl('/login');
        }
      }
    );
  }

}
