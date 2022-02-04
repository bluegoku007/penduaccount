export class Produit {
    id?:string;
    username?:string;
    followers?:string;
    prix?:number;
    image?:string;
    link?:string;
    linkaccount?:string;
    constructor(args:Produit={}){
        this.id=args.id;
        this.username=args.username;
        this.followers=args.followers;
        this.prix=args.prix;
        this.image=args.image;
        this.link=args.link;
        this.linkaccount=args.linkaccount;
}
}