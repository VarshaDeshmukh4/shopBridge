import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from '../class/item';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {
  productID: any;
  productData: any;
  constructor(
    private commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productID = this.route.snapshot.params.id;
    this.loadProductDetails(this.productID);
  }

  loadProductDetails(productID) {
    this.commonService.getProductDetails(productID).subscribe((res: any) => {
      this.productData = res;
    });
  }
  navigation(link) {
    this.router.navigate([link]);
  }
}
