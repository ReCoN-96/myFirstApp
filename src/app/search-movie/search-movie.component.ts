import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
    searchForm: FormGroup;
    Type: any = ['movie', 'serie', 'episode'];
    Plug: any = ['complete', 'short'];
    submitted = false;


    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.searchForm = this.formBuilder.group({
        identifiant: [''],
        title: [''],
        typeName: ['', Validators.required],
        plugName: ['', Validators.required],
        date: ['', [Validators.required, this.rangeDateValidator]]
      }, {
          validator: this.isRequiredValidator('identifiant', 'title')
        });
    }

    get f() { return this.searchForm.controls; }

    isRequiredValidator(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }

        if (control.value === matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
     };
    }

    rangeDateValidator(control: AbstractControl) {
      if (control.value !== undefined && (isNaN(control.value) || control.value < 1899 || control.value > 2020)) {
        return { rangeDate: true };
      }
      return null;
    }

    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.searchForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n');
      console.log(JSON.stringify(this.searchForm.value));
    }
}
