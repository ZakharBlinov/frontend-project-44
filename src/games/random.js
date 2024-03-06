const getRandomNumber = (min, max) => {
    const getRandomNumber = Math.floor(Math.random() * (max - min) + min);
    return getRandomNumber;
  };
  
  export default getRandomNumber;