import { z } from "zod";

export const makeSearchSchema = (validIds: string[]) => {
  return z.object({
    id: z.string().refine((id) => validIds.includes(id), {
      message: "输入的 ID 不在可用范围内",
    }),
  });
};
