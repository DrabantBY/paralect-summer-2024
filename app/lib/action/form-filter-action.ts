'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import formatFormData from '../utils/format-form-data';

const formFilterAction = async (formData: FormData) => {
  const urlSearchParams = formatFormData(formData);

  const url = `/movies?${urlSearchParams}`;

  revalidatePath(url);

  redirect(url);
};

export default formFilterAction;
