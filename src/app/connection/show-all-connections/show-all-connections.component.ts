import { Component, OnInit } from '@angular/core';
import { Connection } from '../connection';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-show-all-connections',
  templateUrl: './show-all-connections.component.html',
  styleUrls: ['./show-all-connections.component.css']
})
export class ShowAllConnectionsComponent implements OnInit {

  public connections: Connection[] = [];

  public searchForm: FormGroup;

  constructor(private cs: ConnectionService, private fb: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.cs.getConnections().subscribe(
      data => {
        console.log(data);
        this.connections = data;
        console.log(data);
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
       tp: '',
       message: '',
       copy: '',
       modate: ''
    });
  }

  onSearch() {
    this.cs.searchConnection(this.searchForm.value).subscribe(
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
