import React from 'react';
import { DispatchContext } from './DispatchContext';
import { GlobalStateContext } from './GlobalStateContext';

export const useGlobalState = () => React.useContext(GlobalStateContext);
export const useDispatch = () => React.useContext(DispatchContext);