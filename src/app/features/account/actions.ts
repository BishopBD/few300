import { createAction, props } from '@ngrx/store';
import { AccountState, OrderInfo } from './account-info.redux-feature';

export const loadAccountInformation = createAction('[account] load account information');

export const accountInformationLoaded = createAction(
  '[account] loaded account information',
  props<{ payload: AccountState }>(),
);

export const accountOrderInformationLoaded = createAction(
  '[account] loaded order information',
  props<{ payload: OrderInfo[] }>(),
);
