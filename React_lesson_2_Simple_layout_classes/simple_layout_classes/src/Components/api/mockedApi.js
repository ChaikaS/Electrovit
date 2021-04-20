import { mockedResponce } from "./mockedResponce";

export const apiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve({ mockedResponce });
      } else {
        reject(console.log("faled"));
      }
    }, 1500);
  });
};
apiCall();
