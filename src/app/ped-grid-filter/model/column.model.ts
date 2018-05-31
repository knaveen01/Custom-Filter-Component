export class Column{
    name:string;
    header:string;
    type:string;
    constructor(options:{
        name?:string,
        header?:string,
        type?:string
    }={} ){
        this.name = options.name ||"";
        this.header = options.header || "";
        this.type = options.type || "";
    }
}