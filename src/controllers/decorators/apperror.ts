

export class AppError extends Error {


  constructor(public message: string, public statusCode: number) {
    super(message);
    this.statusCode = statusCode;
   

    // Maintain proper stack trace (only in V8 engines like Node.js)
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
