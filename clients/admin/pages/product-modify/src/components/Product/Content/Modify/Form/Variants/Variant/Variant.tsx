import { Field, Icon, Input, Underlay } from '@library/kit';

import React from 'react';
import { useFormState, useFormContext } from 'react-hook-form';

import { CreateProductDto } from '../../../../../../../classes/store/form/dto/create-product.dto.ts';
import { UpdateProductDto } from '../../../../../../../classes/store/form/dto/update-product.dto.ts';
import { ProductVariantDto } from '../../../../../../../classes/store/form/dto/product-variant.dto.ts';

import s from './default.module.scss';

interface IProps {
  index: number;
  field: Partial<ProductVariantDto>;
  onDelete(): void;
}

export const Variant: React.FC<IProps> = (props) => {
  const { control, register } = useFormContext<CreateProductDto | UpdateProductDto>();
  const state = useFormState({
    control,
  });

  return (
    <Underlay>
      <div className={s.wrapper}>
        <div className={s.delete}>
          <span onClick={props.onDelete}>
            <Icon icon={'clear'} size={18} />
          </span>
        </div>
        <div className={s.content}>
          <div className={s.field}>
            <div className={s.fields}>
              <div className={s.field}>
                <Field label={'Артикул'} error={state.errors.variants?.[props.index]?.message}>
                  <Input {...register(`variants.${props.index}.article`)} placeholder={'Артикул'} />
                </Field>
              </div>
              <div className={s.field}>
                <Field label={'Название'} error={state.errors.variants?.[props.index]?.message}>
                  <Input {...register(`variants.${props.index}.name`)} placeholder={'Наименование'} />
                </Field>
              </div>
            </div>
          </div>
          <div className={s.field}>
            <Field label={'Описание'} error={''}>
              <Input {...register(`variants.${props.index}.description`)} placeholder={'Описание'} />
            </Field>
          </div>
        </div>
      </div>
    </Underlay>
  );
};