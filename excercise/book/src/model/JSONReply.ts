
class JSONHeader {
	public model: String = '';
	public method: String = '';
	public errorcode: String = '';
	public errorflag: String = 'N';
	public errordesc: String = '';
    protected composeFailure(errorflag: String, errorcode: String, errordesc: String) : void {
        this.errorflag = errorflag;
        this.errorcode = errorcode;
        this.errordesc = errordesc;
    }
    public composeError(errorcode: String, errordesc: String) : void {
		this.composeFailure("Y",errorcode,errordesc);
	}
    public composeNoError() : void {
		this.composeFailure("N", "0", "");
	}
    public modeling(model: String, method: String) : void {
        this.model = model;
        this.method = method;
    }
}

class JSONReply {
    public head: JSONHeader = new JSONHeader();
    public body: Object = { };
}

export {
    JSONHeader,
    JSONReply
}
