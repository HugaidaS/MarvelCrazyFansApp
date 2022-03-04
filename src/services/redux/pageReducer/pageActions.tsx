import { page } from "./pageReducer";
import pageStore from "./pageStore";

export function setPage(currentPage: number) {
  return pageStore.dispatch(page.actions.setPage(currentPage));
}
export function navigateNextPage() {
  return pageStore.dispatch(page.actions.increment());
}
export function navigatePreviousPage() {
  return pageStore.dispatch(page.actions.decrement());
}
export function getCurrentPage() {
  return pageStore.getState();
}
