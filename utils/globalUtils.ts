export const debounce = (callback: () => any, wait: number) =>  {
    let timeout: any;

    return (...args) => {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(context, args), wait);
    };
}
