import axios from "axios";

export const getSubcategoriesApi = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_EXPRESS_BASE_URL}/subcategories`
        //   {
        //     headers: {
        //       Authorization: `Bearer ${token}`, // Example usage of token from token
        //     },
        //   }
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Error Fetching Subcategories Data "
      );
    }
  };

  