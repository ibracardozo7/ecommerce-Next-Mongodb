import { mongooseConnect } from "../../lib/mongoose";
import { Category } from "../../models/Category";
export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  if (method === "GET") {
    res.json(await Category.find());
  }

  if (method === "POST") {
    const { name } = req.body;
    const categotyDoc = await Category.create({ name });
    res.json(categotyDoc);
  }
}
