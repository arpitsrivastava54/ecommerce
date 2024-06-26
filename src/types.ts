type ProductType = {
 _id: string;
 name: string;
 description: string;
 image:string;
 price: number;
 oldPrice: null | number;
 sizes: ["XS", "S", "M", "L", "XL", "XXL"];
 category:string;
 subCategory: string;
 sale: boolean;
 richCollection: boolean;
};

type CartItemType = ProductType & {
  quantity?: number;
}

type ApiResponseType = {
  success:boolean;
  message:string;
  data:any;
}

type UserInfo = {
  userId: string;
  email: string;
  idToken: string;
  photoUrl:null;
};