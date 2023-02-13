import { Handlers } from "$fresh/server.ts";
import { yamlToTS } from "yaml_to_ts";

interface Params {
  yaml: string;
}

export const handler: Handlers = {
  async POST(req, _ctx) {
    const body = await req.text();
    try {
      const data: Params = JSON.parse(body);
      const arr = yamlToTS(data.yaml);
      return new Response(arr.join("\n"));
    } catch (error) {
      console.error("body invalid", body, error);
      return new Response("Not valid Yaml", {
        status: 400,
      });
    }
  },
};
