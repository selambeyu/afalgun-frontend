import axios from "axios";

// process.env.NEXT_PUBLIC_EXPRESS_BASE_URL

export const getItemsApi = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_EXPRESS_BASE_URL}/items`
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`, // Example usage of token from token
      //     },
      //   }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error Fetching Items Data "
    );
  }
};

export const getItemByIdApi = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_EXPRESS_BASE_URL}/items/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error Fetching Items Data "
    );
  }
};

export const createPostItemApi = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_EXPRESS_BASE_URL}/items`,
      data
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error creating post item"
    );
  }
};

export const updatePostItemApi = async (id, data) => {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_EXPRESS_BASE_URL}/items/:${id}`,
      data
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error updating post item"
    );
  }
};

export const deletePostItemApi = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_EXPRESS_BASE_URL}/items/:${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error deleting post item"
    );
  }
};
