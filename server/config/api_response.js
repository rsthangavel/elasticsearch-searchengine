
const statusCode = {
    SUCCESS = '10000',
	FAILURE = '10001',
	RETRY = '10002',
	INVALID_ACCESS_TOKEN = '10003'
};

const responseStatus = {
    SUCCESS = 200,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	INTERNAL_ERROR = 500
}

function ApiResponse(statusCode, status, message) {
    this.statusCode = statusCode;
    this.status = status;
    this.message = message;
    function send() {
        return 
    }
    function prepare() {
        
    }
}

function SuccessMsgResponse() {

}