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
    if (!parentCategory) {
      const categotyDoc = await Category.create({
        name,
      });
      res.json(categotyDoc);
    } else {
      const categotyDoc = await Category.create({
        name,
        parent: parentCategory,
      });
      res.json(categotyDoc);
    }
  }

  if (method === "PUT") {
    const { name, parentCategory, _id } = req.body;
    const update = await Category.updateOne(
      { _id },
      { name, parent: parentCategory }
    );
    res.json(update);
  }

  if (method === "DELETE") {
    const { _id } = req.query;
    await Category.deleteOne({ _id });
    res.json("ok");
  }
}
