export interface Success<S> {
  status: number;
  ok: true;
  result: S;
}
export interface Failure<F> {
  status: number;
  ok: false;
  result: F | null;
}
