export interface RequestCancelable<T> {
    cancel: () => void;
    response: Promise<T>;
}
