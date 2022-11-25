class Arguments {
    private static isParameterOption(argument?: string) : boolean {
        if(argument!=null && argument.length>0 && argument.charAt(0)=='-') {
            return true;
        }
        return false;
    }

    public static getString(args?: string[],defaultValue?: string,...options: string[]) : string | undefined {
        if(args!=null && args.length>0) {
            for(let i = 0,isz=args.length; i<isz; i++) {
                let para = args[i];
                for(let j=0; j<options.length; j++) {
                    if(para == options[j] && (args.length>(i+1)) 
                    && !this.isParameterOption(args[i+1])) {
                        return args[i+1];
                    }
                }
            }
        }
        return defaultValue;
    }

    public static getDate(args?: string[],defaultValue?: Date,...options: string[]) : Date | undefined {
        if(args!=null && args.length>0) {
            for(let i = 0,isz=args.length; i<isz; i++) {
                let para = args[i];
                for(let j=0; j<options.length; j++) {
                    if(para == options[j] && (args.length>(i+1)) 
                    && !this.isParameterOption(args[i+1])) {
                        //date in format : yyyy-MM-dd or yyyy-MM-ddTHH:mm:ss
                        return new Date(args[i+1]);
                    }
                }
            }
        }
        return defaultValue;
    }

    public static getInteger(args?: string[],defaultValue?: number,...options: string[]) : number | undefined {
        if(args!=null && args.length>0) {
            for(let i = 0,isz=args.length; i<isz; i++) {
                let para = args[i];
                for(let j=0; j<options.length; j++) {
                    if(para == options[j] && (args.length>(i+1)) 
                    && !this.isParameterOption(args[i+1])) {
                        return parseInt(args[i+1]);
                    }
                }
            }
        }
        return defaultValue;
    }

}
export {
    Arguments
}
