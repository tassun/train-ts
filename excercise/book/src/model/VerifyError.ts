export class VerifyError extends Error {
    public readonly code : number;
    public readonly errno : number | undefined;
    constructor(code: number, message: string, errno?: number) {
        super(message);
        this.code = code;
        this.errno = errno;
        Object.setPrototypeOf(this, VerifyError.prototype);
    }
}
