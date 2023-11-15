import { Product } from "../../models/Product";
import { mongooseConnect } from "../../lib/mongoose";

export default async function handler(req, res) {
  const { method } = req;
  // console.log(req.method);
  await mongooseConnect();

  if (method === "GET") {
    res.json(await Product.find())
  }

  if (method === "POST") {
    const { title, description, price } = req.body;
    // console.log(req.body);
    const productDoc = await Product.create({
      title,
      description,
      price,
    });
    res.status(200).json(productDoc);
  }
}
