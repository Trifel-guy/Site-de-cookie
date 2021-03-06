export interface ICookie {
    _id:number;
    name:string;
    description?:string;
    ingredients?:Array<string>;
    realisation?:string;
    picture?:string;
    available:boolean;
    token?:string | number;
    price:number;
    quantity:number;
}
