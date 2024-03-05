"use server";

import prisma from "@/lib/prisma";
import { toSlug } from "@/lib/utils";
import { createProductSchema } from "@/lib/validation";
import { put } from "@vercel/blob";
import { nanoid } from "nanoid";
import { redirect } from "next/navigation";
import path from "path";

export async function CreateProductPosting(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const { name, description, productImage, price } =
    createProductSchema.parse(values);

  const slug = `${toSlug(name)}-${Date.now()}-${nanoid(10)}`;

  const blob = await put(
    `product_images/${slug}${path.extname(productImage.name)}`,
    productImage,
    {
      access: "public",
      addRandomSuffix: false,
    },
  );
  let productImageUrl = blob.url;

  await prisma.product.create({
    data: {
      name: name.trim(),
      imageUrl: productImageUrl,
      description: description?.trim(),
      price: parseInt(price),
    },
  });

  redirect("/product-added");
}
