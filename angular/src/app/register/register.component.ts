import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],

  });

  hidden = false;

  
  

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
    
  }

  
  constructor(private _formBuilder: FormBuilder) {}
  myControl = new FormControl('');
  options: string[] = ['Gauteng', 'Eastern-Cape', 'Kwazulu-Natal'];
  filteredOptions: Observable<string[]> | undefined;
  startDate = new Date(1990, 0, 1);


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}


