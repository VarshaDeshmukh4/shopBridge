export class Items {
  id: number;
  name: string;
  description: string;
  price: number;
  uploadImg: any;
  constructor(id, name, description, price, uploadImg) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.uploadImg = uploadImg;
  }
}
