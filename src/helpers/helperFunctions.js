export const apiRoot = 'https://loft-taxi.glitch.me';

export const putInLocallStarage = (paramName, data) => localStorage.setItem(paramName, JSON.stringify(data));

export const takeFromLocalStorage = (paramName) => JSON.parse(localStorage.getItem(paramName));