import { rest } from "msw";
import hackernewsResponse from "./hackernews.json";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    const { username } = req.body;

    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        username,
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),

  rest.get("http://hn.algolia.com/api/v1/items/1", (req, res, ctx) => {
    return res(ctx.json(hackernewsResponse));
  }),
];
