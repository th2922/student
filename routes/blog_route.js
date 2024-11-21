import express from "express";
import { addblog, blog } from "../controllers/blog_controller.js";

const blogRoute = express.Router();

blogRoute.get("/",blog);
blogRoute.post("/addblog",addblog);

export default blogRoute;
