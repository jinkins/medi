import { ConnectionService } from './connection.service';
import { Component, OnInit } from '@angular/core';
import { Connection } from './connection';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  private connections: Connection[];

  private searchForm: FormGroup;

  constructor(private cs: ConnectionService, private fb: FormBuilder) { }

  ngOnInit() {
    this.cs.getConnections().subscribe(
      data => {
        console.log(data);
        this.connections = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.searchForm = this.fb.group({
       lifnr: '',
       name: '',
       gln: '',
       partner: '',
       activationDate: ''
    });
  }

  onSearch() {
    this.cs.searchConnection(this.searchForm.value);
  }

}
