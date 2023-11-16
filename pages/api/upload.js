import multiparty from "multiparty";

export default async function handle(req, res) {
  const form = multiparty.Form();
  form.parse(req, async () => {});
}

export const config = {
  api: { bodyParser: false },
};
