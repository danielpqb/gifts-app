import { Elysia, t } from "elysia";
import { giftServices } from "../services";
import { TCreateGift } from "../services/gifts";

export const giftsApi = new Elysia({ prefix: "/gifts" })
  .get("/", () => {
    return giftServices.findAll();
  })
  .post(
    "/",
    (body: TCreateGift) => {
      giftServices.create(body);
    },
    { body: t.Object({ title: t.String(), value: t.Number() }) }
  );
