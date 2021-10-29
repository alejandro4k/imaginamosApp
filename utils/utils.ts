import {IProductionCompany} from '../interface/movie';

export const joinArrString = (
  arr: string[] | IProductionCompany[],
  separator: string = ',',
  containNameProperty = false,
) => {
  let finalStr = '';
  if (!containNameProperty) {
    arr.forEach((value, index) => {
      const str = index < arr.length - 1 ? `${value + separator} ` : value;
      finalStr += str;
    });
    return finalStr;
  }

  arr.forEach((value, index) => {
    const str =
      index < arr.length - 1
        ? `${(value as any).name + separator}`
        : (value as IProductionCompany).name;
    finalStr += str;
  });
  return finalStr;
};
