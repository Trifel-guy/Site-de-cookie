export interface User {
    _id:number;
    identifiant:string;
    password:string;
    admin?:boolean;
    picture?:string;
    token?:string | number;
}
