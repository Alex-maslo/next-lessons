export const getData = async () => {
  const response = await fetch("http://185.69.152.209/carsAPI/v1/cars", {
    next: { revalidate: 0 }, // Добавляем это сюда для ISR
  });
  return response.json();
};
