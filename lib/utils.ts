import MobileDetect from 'mobile-detect';
import { GetServerSidePropsContext } from 'next';

export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }

  return message;
};

export const getIsSsrMobile = (context: GetServerSidePropsContext) => {
  const md = new MobileDetect(context.req.headers['user-agent'] as string);

  return Boolean(md.mobile());
};

export const debounce = (fn: Function, delay = 500) => {
  let timetoutId: NodeJS.Timeout;

  return (...args: any) => {
    clearTimeout(timetoutId);
    timetoutId = setTimeout(() => fn(...args), delay);
  };
};
