export interface User {
    _id:number;
    identifiant:string;
    password:string;
    picture?:string;
    token?:string | number;
}
