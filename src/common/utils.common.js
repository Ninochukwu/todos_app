export const catchAsync = (func) => {
    return (req, res, next) => {
        Promise.resolve(func(req, res, next)).catch(next);
    }
}

export const sendResponse = (res, statusCode, success, message, data = null) => {
    return res.status(statusCode).json({
        success,
        message,
        data,
    });
}

export const generateUniqueId = () =>
{
    return Math.random().toString( 36 ).substring( 2, 15 ) + Math.random().toString( 36 ).substring( 2, 15 );
}