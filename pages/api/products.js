import { Product } from "../../models/Product";
import { mongooseConnect } from "../../lib/mongoose";

export default async function handler(req, res) {
  const { method } = req;
  // console.log(req.method);
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }
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

  if (method === "PUT") {
    const { title, description, price, _id } = req.body;
    const productEdit = await Product.updateOne(
      { _id },
      { title, description, price }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Product.deleteOne({ _id: req.query.id });
      res.json(true)
    }
  }
}
