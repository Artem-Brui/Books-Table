const ClientURL1 = process.env.CLIENT_URL1;
const ClientURL2 = process.env.CLIENT_URL2;

type CorsAccessFunc = (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => void;

const URLs = [ClientURL1, ClientURL2]

const corsAccess: CorsAccessFunc = (origin, callback) => {
  if (origin && URLs.includes(origin)) {
    callback(null, true);
  } else {
    const error = new Error('Not allowed by CORS');
    (error as any).status = 403;
    callback(error);
  }
};

const corsOptions = {
  origin: corsAccess,
  credentials: true,
};

export default corsOptions;
