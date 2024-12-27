import { supabase } from "@/shared";

export const getExperience = async () => {
  const { data, error } = await supabase.from("Experience").select("*");
  if (error) {
    throw error;
  }

  return data;
};
