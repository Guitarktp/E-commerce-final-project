import { getTemallcar } from "../API/API_TemporaryCar";

export const DataTem = async () => {
  try {
    const response = await getTemallcar();
    console.log('Fetched Data:', response); // Log the fetched data
    
    if (Array.isArray(response)) {
      return response; // If it's already an array, return it directly
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return [];
  }
};
