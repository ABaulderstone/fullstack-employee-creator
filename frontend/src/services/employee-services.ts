export const getAllEmployees = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/employees`
  );
  return await response.json();
};
