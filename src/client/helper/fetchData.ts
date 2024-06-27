// fetchData.ts
export const fetchData = async (
  url: string,
  params?: { limit?: number; page?: number },
) => {
  try {
    const queryString = new URLSearchParams(
      params ? (Object.entries(params) as string[][]) : [],
    ).toString();

    const response = await fetch(
      `${process.env.API_URL}${url}?${queryString}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
