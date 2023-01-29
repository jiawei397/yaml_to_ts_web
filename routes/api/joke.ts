import { HandlerContext } from "$fresh/server.ts";
import { yamlToTS } from "yaml_to_ts";

interface Params {
  yaml: string;
}

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const body = await req.text();
  try {
    const data: Params = JSON.parse(body);
    const ts = yamlToTS(data.yaml);
    return new Response(ts.join("\n"));
  } catch (error) {
    console.error("body非法", body, error);
    return new Response("不是合法的Yaml", {
      status: 400,
    });
  }
};
