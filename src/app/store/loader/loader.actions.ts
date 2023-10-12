import { createAction } from '@ngrx/store';

enum ELoaderActions {
  SHOW_LOADER = '[Loader] Show loader',
  HIDE_LOADER = '[Loader] Hide loader',
}

export const showLoader = createAction<ELoaderActions.SHOW_LOADER>(
  ELoaderActions.SHOW_LOADER
);

export const hideLoader = createAction<ELoaderActions.HIDE_LOADER>(
  ELoaderActions.HIDE_LOADER
);
