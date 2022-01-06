export interface ICookie {
    _id?:number | string;
    name:string;
    description?:string;
    ingredients?:Array<string>;
    realisation?:string;
    picture?:string;
    available:boolean;
    token?:string | number;
    quantity:number;
}
