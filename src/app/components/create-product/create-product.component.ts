import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModalService } from "src/app/services/modal.service";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})

export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductsService, private modalService: ModalService) { }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ])
  })

  get title() {
    return this.form?.controls?.title as FormControl
  }

  ngOnInit(): void {

  }

  submit() {
    this.productService.create({
      id: 99,
      title: this.form.value.title as string,
      price: 13.5,
      description: 'Lorem',
      category: 'electronic',
      image: 'https://i.pravatar.cc',
      rating: {
        rate: 42,
        count: 1
      }
    }).subscribe(() => this.modalService.close())
  }
}
