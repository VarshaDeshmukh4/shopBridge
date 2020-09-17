import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  addItemForm: FormGroup;
  paramsData: any;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.paramsData = this.route.snapshot.params.id;
    this.addItemForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', Validators.required],
      price: [
        '',
        [Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]
      ]
    });
  }
  ngOnInit(): void {}
  get f() {
    return this.addItemForm.controls;
  }
  addFormItem() {
    this.submitted = true;
    const data = {};
    if (this.addItemForm.invalid) {
      return;
    }
    data['name'] = this.addItemForm.value.name;
    data['description'] = this.addItemForm.value.description;
    data['price'] = this.addItemForm.value.price;
    this.commonService.createProduct(data).subscribe((res: any) => {
      this.addItemForm.reset();
      this.router.navigate(['']);
    });
  }
  /*  onSelectedFile(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0] as File;
      this.sanitizer.sanitize(
        SecurityContext.STYLE,
        'url(' + file + ')'
      );
      this.commonService.uploadImage(file).subscribe(res => {});
    }
  } */
}
