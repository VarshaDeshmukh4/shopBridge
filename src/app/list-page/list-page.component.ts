import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  products: [] = [];
  constructor(
    private commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this.commonService.getItem().subscribe((res: any) => {
      this.products = res;
    });
  }
  addInventoryItem() {
    this.router.navigate(['/add-item']);
  }
  viewProduct(item) {
    this.router.navigate(['/details', item]);
  }
  deleteProduct(item) {
    this.commonService.deleteItem(item).subscribe((res: any) => {
      this.loadProducts();
    });
  }
}
