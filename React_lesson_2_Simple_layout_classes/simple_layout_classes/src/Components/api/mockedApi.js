import { mockedResponce } from "./mockedResponce";

export const apiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ mockedResponce });
      } else {
        reject("No cards yet");
      }
    }, 1500);
  });
};
