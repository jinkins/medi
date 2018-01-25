import { Connection } from './../connection';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { Router } from '@angular/router';
import { TP } from '../tp/tp';
import { TPService } from '../tp/tp.service';

@Component({
  selector: 'app-search-connections',
  templateUrl: './search-connections.component.html',
  styleUrls: ['./search-connections.component.css']
})
export class SearchConnectionsComponent implements OnInit {

  searchForm: FormGroup;
  connections: Connection[];
  tps: TP[];

  constructor(private fb: FormBuilder, private cs: ConnectionService, private ts:TPService, private router: Router) { }

  

  ngOnInit() {
    this.ts.getTPs().subscribe(
      // retrieve all TPS
      (data) => {
        this.tps = data;
    },
    error => {
      console.log(error);
      if (error.status === 401) {
        this.router.navigateByUrl('/login');
      }
    }); 

     // create the form. 
     this.searchForm = this.fb.group({
      lifnr: '',
      'suppliers.name': '',
      'connections.gln': '',
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
      data => {
        console.log(data);
        this.connections = [];
        data.forEach((e) => {
          this.connections.push(new Connection(e));
        });
        console.log(this.connections)
      },
      error => {
        console.log(error);
        if (error.status === 401) {
          this.router.navigateByUrl('/login');
        }
      }
    );
  }

  // Cards style
  getCardStyle(active) {
    if(active===1)
    {
      return "card-header text-white bg-success";
    }
    else{
      return "card-header text-black bg-default";
    }
  }

  displayTPCon(c:Connection){
    return c.displayTPCon(); 
  }

  styleDeckOrColumn() {
    if(this.connections && this.connections.length > 4) {
      return 'card-columns';
    } else {
      return 'card-deck';
    }
  }
  

}
