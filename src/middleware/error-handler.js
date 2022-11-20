/**
 * author: Refaat
 * this middleware handles the all application errors
 * service functions throw errors for the controllers to handle
 * controller functions handle errors by calling next(error) to this middleware
 */
const errorHandler = async (error, request, response, next) => {
    console.error(error);
    try {
        switch (error.name) {
            // handle errors related to jwt
            case 'JsonWebTokenError':
                return response.status(400).json({ error: error.message });
                break;

            // handle custom errors
            case 'Error':
                return response.status(400).json({ error: error.message })
                break;

            default:
                return response.status(500).json({
                    error: 'something went wrong on our side...'
                });
                break;
        }
    } catch (error) {
        // i dont think this code can even be reached...
        console.error('CRITICAL', error);
        return response.status(500).json({
            error: 'something REALLY went wrong on our side...'
        });
    }
}


module.exports = errorHandler