import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Select from 'react-select';
import { XIcon } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { styles } from '@shared/configs/react-select-styles.config';
import type { TCategory, TDiscount } from '../types';
import { addProductAction } from '../actions';

import { FormField } from './form-field.component';

const formSchema = z.object({
  name: z
    .string({ required_error: 'name is required' })
    .trim()
    .min(2, 'name must contain at least 2 characters'),
  description: z
    .string({ required_error: 'description is required' })
    .trim()
    .min(1, 'description is required'),
  price: z
    .number({
      required_error: 'price is required',
      invalid_type_error: 'price must be a number',
    })
    .positive(),
  categories: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
    }),
    { required_error: 'categories is required' }
  ),
  imageUrl: z
    .string({ required_error: 'imageUrl is required' })
    .url('invalid url'),
  quantity: z
    .number({
      required_error: 'quantity is required',
      invalid_type_error: 'quantity must be a number',
    })
    .int()
    .positive(),
  discount: z.object(
    {
      label: z.string(),
      value: z.string(),
    },
    { required_error: 'discount is required' }
  ),
});

type FormInputs = z.infer<typeof formSchema>;

interface CreateProductDialogProps {
  categories: TCategory[] | undefined;
  discounts: TDiscount[] | undefined;
}

export function CreateProductDialog({
  categories,
  discounts,
}: CreateProductDialogProps) {
  const categoriesOptions = categories?.map((category) => {
    return {
      value: category.categoryId,
      label: category.name,
    };
  });

  const discountOptions = discounts?.map((discount) => {
    return {
      value: discount.discountId,
      label: `${discount.discountPercent}%`,
    };
  });

  const {
    control,
    handleSubmit,
    register,
    setFocus,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      name: 'Golden Beats Headphones',
      description:
        'Beats Studio delivers the perfect blend of design culture, creative culture, and engineering coming together.',
      price: 30.0,
      categories: [categoriesOptions?.[0]],
      imageUrl:
        'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      discount: discountOptions?.[0],
      quantity: 10,
    },
  });
  const [nextInput, setNextInput] = useState<keyof FormInputs>('imageUrl');
  const [isReverse, setIsReverse] = useState(false);

  async function handleOnSubmit(data: FormInputs) {
    const categories = data.categories.map((category) => category.value);
    const discountId = data.discount.value;
    const result = await addProductAction({ ...data, categories, discountId });
    if (result?.error) {
      alert(result.error.message);
      return;
    }
    alert('Product created');
  }

  function handleFocusNextInput(nextInput: keyof FormInputs) {
    setFocus(nextInput);
  }

  function handleOnKeyDown(event: KeyboardEvent) {
    if (event.key === 'Shift') {
      setIsReverse(true);
    }
    if (event.key === 'Tab' && !event.shiftKey) {
      setIsReverse(false);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleOnKeyDown);
    return () => {
      window.removeEventListener('keydown', handleOnKeyDown);
    };
  }, []);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/80" />
      <Dialog.Content className="fixed bottom-0 left-0 right-0 top-0 mx-auto my-4 w-11/12 max-w-3xl overflow-y-scroll rounded border border-zinc-800 bg-zinc-900 p-2 shadow md:p-4 ">
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-lg font-semibold text-zinc-200">
            Create product
          </Dialog.Title>
          <Dialog.Close asChild>
            <button
              className="rounded-full border border-white/10 bg-black/50 p-2 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              aria-label="Close"
            >
              <XIcon className="h-6 w-6 text-red-500 hover:text-red-600" />
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Description className="mt-1 text-sm text-zinc-400">
          Create a new product here. Click save when you&apos;re done.
        </Dialog.Description>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <FormField.Root>
            <FormField.Label htmlFor="name">Name</FormField.Label>
            <FormField.Input
              id="name"
              type="text"
              aria-invalid={!!errors.name}
              aria-describedby="name-hint"
              required
              disabled={isSubmitting}
              {...register('name')}
            />
            {errors.name ? (
              <FormField.Error id="name-hint">
                {errors.name.message}
              </FormField.Error>
            ) : null}
          </FormField.Root>
          <FormField.Root>
            <FormField.Label htmlFor="description">Description</FormField.Label>
            <FormField.Input
              id="description"
              type="text"
              aria-invalid={!!errors.description}
              aria-describedby="description-hint"
              required
              disabled={isSubmitting}
              {...register('description')}
            />
            {errors.description ? (
              <FormField.Error id="description-hint">
                {errors.description.message}
              </FormField.Error>
            ) : null}
          </FormField.Root>
          <FormField.Root>
            <FormField.Label htmlFor="price">Price</FormField.Label>
            <FormField.Input
              id="price"
              type="text"
              aria-invalid={!!errors.price}
              aria-describedby="price-hint"
              required
              disabled={isSubmitting}
              {...register('price', { valueAsNumber: true })}
            />
            {errors.price ? (
              <FormField.Error id="price-hint">
                {errors.price.message}
              </FormField.Error>
            ) : null}
          </FormField.Root>
          <FormField.Root>
            <FormField.Label htmlFor="categories">Categories</FormField.Label>
            <Controller
              control={control}
              name="categories"
              render={({ field }) => (
                <Select
                  inputId="categories"
                  aria-invalid={!!errors.categories}
                  aria-errormessage="categories-hint"
                  required
                  isDisabled={isSubmitting}
                  isMulti
                  isSearchable
                  options={categoriesOptions}
                  styles={styles}
                  {...field}
                  onFocus={(event) => {
                    // Tab behavior
                    if (event.relatedTarget?.id === 'price') {
                      if (isReverse) {
                        setNextInput('price');
                      } else {
                        setNextInput('imageUrl');
                      }
                    }
                    if (event.relatedTarget?.id === 'image-url') {
                      if (isReverse) {
                        setNextInput('imageUrl');
                      } else {
                        setNextInput('price');
                      }
                    }
                  }}
                  onBlur={(event) => {
                    // Click behavior
                    if (
                      event.relatedTarget?.id !== 'price' &&
                      event.relatedTarget?.id !== 'image-url'
                    ) {
                      handleFocusNextInput(
                        event.relatedTarget?.id as keyof FormInputs
                      );
                      return;
                    }
                    if (event.relatedTarget?.id === 'price') {
                      handleFocusNextInput('price');
                      return;
                    }
                    if (event.relatedTarget?.id === 'image-url') {
                      handleFocusNextInput('imageUrl');
                      return;
                    }

                    // Tab behavior
                    if (isReverse) {
                      handleFocusNextInput('price');
                      return;
                    }
                    handleFocusNextInput(nextInput);
                  }}
                />
              )}
            />
            {errors.categories ? (
              <FormField.Error id="categories-hint">
                {errors.categories.message}
              </FormField.Error>
            ) : null}
          </FormField.Root>
          <FormField.Root>
            <FormField.Label htmlFor="image-url">Image URL</FormField.Label>
            <FormField.Input
              id="image-url"
              type="url"
              aria-invalid={!!errors.imageUrl}
              aria-describedby="image-url-hint"
              required
              disabled={isSubmitting}
              {...register('imageUrl')}
            />
            {errors.imageUrl ? (
              <FormField.Error id="image-url-hint">
                {errors.imageUrl.message}
              </FormField.Error>
            ) : null}
          </FormField.Root>
          <FormField.Root>
            <FormField.Label htmlFor="discount">Discount</FormField.Label>
            <Controller
              control={control}
              name="discount"
              render={({ field }) => (
                <Select
                  inputId="discount"
                  aria-invalid={!!errors.discount}
                  aria-errormessage="discount-hint"
                  required
                  isDisabled={isSubmitting}
                  isSearchable
                  options={discountOptions}
                  styles={styles}
                  {...field}
                  onFocus={(event) => {
                    // Tab behavior
                    if (event.relatedTarget?.id === 'image-url') {
                      if (isReverse) {
                        setNextInput('imageUrl');
                      } else {
                        setNextInput('quantity');
                      }
                    }
                    if (event.relatedTarget?.id === 'quantity') {
                      if (isReverse) {
                        setNextInput('quantity');
                      } else {
                        setNextInput('imageUrl');
                      }
                    }
                  }}
                  onBlur={(event) => {
                    // Click behavior
                    if (
                      event.relatedTarget?.id !== 'quantity' &&
                      event.relatedTarget?.id !== 'image-url'
                    ) {
                      handleFocusNextInput(
                        event.relatedTarget?.id as keyof FormInputs
                      );
                      return;
                    }
                    if (event.relatedTarget?.id === 'quantity') {
                      handleFocusNextInput('quantity');
                      return;
                    }
                    if (event.relatedTarget?.id === 'image-url') {
                      handleFocusNextInput('imageUrl');
                      return;
                    }

                    // Tab behavior
                    if (isReverse) {
                      handleFocusNextInput('imageUrl');
                      return;
                    }
                    handleFocusNextInput(nextInput);
                  }}
                />
              )}
            />
            {errors.discount ? (
              <FormField.Error id="discount-hint">
                {errors.discount.message}
              </FormField.Error>
            ) : null}
          </FormField.Root>
          <FormField.Root>
            <FormField.Label htmlFor="quantity">Quantity</FormField.Label>
            <FormField.Input
              id="quantity"
              type="number"
              aria-invalid={!!errors.quantity}
              aria-describedby="quantity-hint"
              required
              disabled={isSubmitting}
              {...register('quantity', { valueAsNumber: true })}
            />
            {errors.quantity ? (
              <FormField.Error id="quantity-hint">
                {errors.quantity.message}
              </FormField.Error>
            ) : null}
          </FormField.Root>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="rounded bg-green-400 px-6 py-3 text-sm font-bold uppercase text-zinc-900 outline-none hover:bg-green-500 focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-green-400"
            >
              Save
            </button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
