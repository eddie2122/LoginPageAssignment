import { Types } from './actionsTypes';

export const LoginActions = {

  formSubmittionStatus: (status) => ({ type: Types.FORM_SUBMITION_STATUS, payload: { status }}),

  login: (user) => ({ type: Types.LOGIN, payload: { user } })
}