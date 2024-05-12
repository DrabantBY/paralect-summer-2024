"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import formatSearchFormData from "../utils/format-search-form-data";

const formSearchAction = (formData: FormData) => {
  const search = <string>formData.get("search") ?? "";

  const url = formatSearchFormData(search);

  revalidatePath(url);
  redirect(url);
};

export default formSearchAction;
