import { url } from "inspector";
import swaggerJSDoc, { Options } from "swagger-jsdoc";
const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backen Service API",
      version
      : "Beta",
      description: "API para catálogo de productos.",
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: [
    "./src/routes/productRoutes.ts",
  ],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
export default swaggerSpec;
