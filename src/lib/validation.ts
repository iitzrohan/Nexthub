import { z } from "zod";

const requiredString = z.string().min(1, "Required");
const numericRequiredString = requiredString.regex(/^\d+$/, "Must be a number");

const productImageSchema = z
  .custom<File>()
  .refine((file) => !!file, "Required")
  .refine(
    (file) => !file || (file instanceof File && file.type.startsWith("image/")),
    "Must be an image file",
  )
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2;
  }, "File must be less than 2MB");

export const createProductSchema = z.object({
  name: requiredString.max(100),
  description: requiredString.max(5000),
  productImage: productImageSchema,
  price: numericRequiredString.max(9, "Number can't be longer than 9 digits"),
});

export type createProductValues = z.infer<typeof createProductSchema>;
