export const isEven = (value) => (value % 2 === 0 ? true : false);

export const getDomain = (url) =>
    url.replace("http://", "").replace("https://", "").split(/[/?#]/)[0];

export const convertDate = (date) => {
    const shortDate = new Date(date);
    return shortDate.toLocaleDateString();
};
