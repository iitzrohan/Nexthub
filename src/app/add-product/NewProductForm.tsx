"use client";

import LoadingButton from "@/components/LoadingButton";
import { createProductValues, createProductSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateProductPosting } from "./actions";

export default function NewProductForm() {
  const form = useForm<createProductValues>({
    resolver: zodResolver(createProductSchema),
  });

  const {
    handleSubmit,
    setFocus,
    register,
    setValue,
    formState: { isSubmitting, errors },
  } = form;

  async function onSubmit(values: createProductValues) {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    try {
      await CreateProductPosting(formData);
    } catch (error) {
      alert("Something went wrong, please try again.");
    }
  }

  return (
    <main className="m-auto my-10 max-w-3xl space-y-2">
      <div>
        <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      </div>
      <form
        className="flex flex-col space-y-6"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2">
          <label
            className="label label-text font-semibold"
            onClick={() => setFocus("name")}
          >
            Product name
          </label>
          <input
            className="input input-bordered w-full"
            placeholder="Name"
            {...register("name")}
          />
          {errors.name && (
            <p className="font-semibold text-error">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label
            className="label label-text font-semibold"
            onClick={() => setFocus("description")}
          >
            Description
          </label>
          <textarea
            className="textarea textarea-bordered min-h-[150px] w-full"
            placeholder="Description"
            {...register("description")}
          ></textarea>
          {errors.description && (
            <p className="font-semibold text-error">
              {errors.description.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            className="label label-text font-semibold"
            htmlFor="productImage"
          >
            Product Image
          </label>
          <input
            id="productImage"
            className="file-input file-input-bordered w-full"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              file && setValue("productImage", file);
            }}
          />
          {errors.productImage && (
            <p className="font-semibold text-error">
              {errors.productImage.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            className="label label-text font-semibold"
            onClick={() => setFocus("price")}
          >
            Price
          </label>
          <input
            className="input input-bordered w-full"
            {...register("price")}
            type="number"
          />
          {errors.price && (
            <p className="font-semibold text-error">{errors.price.message}</p>
          )}
        </div>
        <LoadingButton type="submit" loading={isSubmitting}>
          Submit
        </LoadingButton>
      </form>
    </main>
  );
}
