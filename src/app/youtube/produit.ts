export class Produit {
    id?:string;
    username?:string;
    subscribers?:string;
    prix?:number;
    image?:string;
    link?:string;
    linkaccount?:string;
    constructor(args:Produit={}){
        this.id=args.id;
        this.username=args.username;
        this.subscribers=args.subscribers;
        this.prix=args.prix;
        this.image=args.image;
        this.link=args.link;
        this.linkaccount=args.linkaccount;
}
}