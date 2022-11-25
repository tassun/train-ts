import path from 'path';
export class Utilities {
    public static getWorkingDir(dir: string) : string {
        let basename = path.basename(dir);
        if(basename=="src" || basename=="dist") {
            dir = path.dirname(dir);
        }
        return dir;
    }
}
