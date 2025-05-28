import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, EMPTY, retry } from 'rxjs';
import { ToastService } from '../services/toast.service';

// export const retryInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req).pipe(retry(1));
// };



export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);

  return next(req).pipe(
    retry(1),
    catchError((error) => {
      toastService.showError(error.message);
      return EMPTY;
    })
  );
};

