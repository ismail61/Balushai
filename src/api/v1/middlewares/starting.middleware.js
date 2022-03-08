import rateLimit from 'express-rate-limit';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import compression from 'compression';
import helmet from 'helmet';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

function startingMiddleware(app) {
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 10000, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
        standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    });

    // Apply the rate limiting middleware to all requests
    app.use(limiter);
    app.use(xss());
    app.use(mongoSanitize());
    app.use(compression());
    app.use(helmet());
    app.use(cors());
    app.use(morgan('dev'));
    app.use('/public', express.static('public'));
    //app.use(cookieParser());
    app.use(bodyParser.json({ limit: '20mb' }));
    app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
    app.use(express.json({ limit: '10kb' }));
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST,PATCH');
        res.header("Access-Control-Allow-Headers", "Content-Type , Authorization");
        next();
    });
}

export { startingMiddleware }