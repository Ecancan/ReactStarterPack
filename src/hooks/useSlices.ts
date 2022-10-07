import { useAppSelector } from './useRedux';

export const useGlobalLoading = () => useAppSelector((state) => state.loading);
