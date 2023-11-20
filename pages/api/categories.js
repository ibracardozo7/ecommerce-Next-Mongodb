import { mongooseConnect } from "../../lib/mongoose";
import { Category } from "../../models/Category";
export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  if (method === "GET") {
    res.json(await Category.find().populate("parent"));
  }

  if (method === "POST") {
    console.log(req.body);
    const { name, parentCategory } = req.body;
    const categotyDoc = await Category.create({
      name,
      parent: parentCategory,
    });
    res.json(categotyDoc);
  }
}
