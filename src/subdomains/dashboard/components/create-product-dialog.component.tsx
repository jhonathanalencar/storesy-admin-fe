import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Select from 'react-select';
import { XIcon } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { styles } from '@shared/configs/react-select-styles.config';
import type { TCategory, TDiscount } from '../types';

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

  function handleOnSubmit(data: FormInputs) {
    console.log(data);
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
        <form onSubmit={handleSubmit(handleOnSubmit)} action="">
          <div className="mt-3 flex flex-col gap-1">
            <label htmlFor="name" className="font-medium text-zinc-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              aria-invalid={!!errors.name}
              aria-describedby="name-hint"
              required
              disabled={isSubmitting}
              className="h-10 rounded bg-zinc-950 px-2 font-normal text-zinc-500 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              {...register('name')}
            />
            {errors.name ? (
              <p role="alert" id="name-hint" className="text-sm text-red-500">
                {errors.name.message}
              </p>
            ) : null}
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <label htmlFor="description" className="font-medium text-zinc-300">
              Description
            </label>
            <input
              id="description"
              type="text"
              aria-invalid={!!errors.description}
              aria-describedby="description-hint"
              required
              disabled={isSubmitting}
              className="h-10 rounded bg-zinc-950 px-2 font-normal text-zinc-500 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              {...register('description')}
            />
            {errors.description ? (
              <p
                role="alert"
                id="description-hint"
                className="text-sm text-red-500"
              >
                {errors.description.message}
              </p>
            ) : null}
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <label htmlFor="price" className="font-medium text-zinc-300">
              Price
            </label>
            <input
              id="price"
              type="text"
              aria-invalid={!!errors.price}
              aria-describedby="price-hint"
              required
              disabled={isSubmitting}
              className="h-10 rounded bg-zinc-950 px-2 font-normal text-zinc-500 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              {...register('price', { valueAsNumber: true })}
            />
            {errors.price ? (
              <p role="alert" id="price-hint" className="text-sm text-red-500">
                {errors.price.message}
              </p>
            ) : null}
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <label htmlFor="categories" className="font-medium text-zinc-300">
              Categories
            </label>
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
              <p
                role="alert"
                id="categories-hint"
                className="text-sm text-red-500"
              >
                {errors.categories.message}
              </p>
            ) : null}
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <label htmlFor="image-url" className="font-medium text-zinc-300">
              Image URL
            </label>
            <input
              id="image-url"
              type="url"
              aria-invalid={!!errors.imageUrl}
              aria-describedby="image-url-hint"
              required
              disabled={isSubmitting}
              className="h-10 rounded bg-zinc-950 px-2 font-normal text-zinc-500 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              {...register('imageUrl')}
            />
            {errors.imageUrl ? (
              <p
                role="alert"
                id="image-url-hint"
                className="text-sm text-red-500"
              >
                {errors.imageUrl.message}
              </p>
            ) : null}
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <label htmlFor="discount" className="font-medium text-zinc-300">
              Discount
            </label>
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
              <p
                role="alert"
                id="discount-hint"
                className="text-sm text-red-500"
              >
                {errors.discount.message}
              </p>
            ) : null}
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <label htmlFor="quantity" className="font-medium text-zinc-300">
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              aria-invalid={!!errors.quantity}
              aria-describedby="quantity-hint"
              required
              disabled={isSubmitting}
              className="h-10 rounded bg-zinc-950 px-2 font-normal text-zinc-500 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              {...register('quantity', { valueAsNumber: true })}
            />
            {errors.quantity ? (
              <p
                role="alert"
                id="quantity-hint"
                className="text-sm text-red-500"
              >
                {errors.quantity.message}
              </p>
            ) : null}
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="rounded bg-green-400 px-6 py-3 text-sm font-bold uppercase text-zinc-900 outline-none hover:bg-green-500 focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
            >
              Save
            </button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
