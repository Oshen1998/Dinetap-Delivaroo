import { Dimensions } from "react-native";

export const screenWidth= Dimensions.get('window').width;
export const screenHeight= Dimensions.get('window').height;


export const generateRandomNumber = (
  start: number,
  between: number
): number => {
  return Math.floor(Math.random() * between + start);
};

