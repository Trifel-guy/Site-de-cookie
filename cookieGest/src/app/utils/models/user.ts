export interface User {
    _id?:number | string;
    name:string;
    firstname:string;
    group:string;
    options?:Array<string>;
    age?:number;
    gender?:string;
    description?:string;
    comments?:string;
    contract:boolean;
    picture?:string;
    token?:string | number;
}
