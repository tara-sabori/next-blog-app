export const shortDate = (date) => {
    return new Date(date).toLocaleDateString("fa-IR", {});
}