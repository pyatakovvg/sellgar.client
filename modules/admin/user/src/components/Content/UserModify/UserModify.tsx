import { CreateUserDto } from '@library/domain';

import React from 'react';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

import { FormModify } from './FormModify';

import { useUser } from '@/hooks/useUser.ts';
import { useCreateUser } from '@/hooks/useCreateUser.ts';
import { useUpdateUser } from '@/hooks/useUpdateUser.ts';

import s from './default.module.scss';

export const UserModify = observer(() => {
  const navigate = useNavigate();

  const user = useUser();
  const updateUser = useUpdateUser();
  const createUser = useCreateUser();

  const handleRedirectToUsersList = () => {
    navigate('/users');
  };

  return (
    <div className={s.wrapper}>
      <FormModify
        user={user}
        inProcess={false}
        onSubmit={async (value, { setValues }) => {
          if (!value.uuid) {
            await createUser(value as unknown as CreateUserDto);
            handleRedirectToUsersList();
          } else {
            await updateUser(value);
            await setValues(user);
          }
        }}
      />
    </div>
  );
});
