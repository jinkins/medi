import { Component, OnInit } from '@angular/core';
import { TPService } from '../tp/tp.service';
import { TP } from '../tp/tp';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-connection',
  templateUrl: './edit-connection.component.html',
  styleUrls: ['./edit-connection.component.css']
})
export class EditConnectionComponent implements OnInit {

  constructor(private ts: TPService, private router: Router, private fb: FormBuilder) { }

  public tps: TP[];
  public selectedTP: string;
  public connectionForm: FormGroup;
  public editMode = false;

  ngOnInit() {
    if (this.editMode == true) {

    } else {
      this.connectionForm = this.fb.group({
        gln: '',
        message: '',
        actif: '0',
        copy: '',
        as2id: '',
        as2url: '',
        tpName: 'pending',
        c: '',
        admd: '',
        prmd: '',
        o: '',
        ou1: '',
        ou2: '',
        ou3: '',
        g: '',
        i: '',
        s: ''
      });
    }



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


  }

  displayAS2() {
    if (this.connectionForm.value['tpName'] == 'ATLAS') {
      return false;
    } else {
      return true;
    }
  }

}
