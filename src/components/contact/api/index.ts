import { supabase } from "@/shared";

export const getAbout = async () => {
  const { data, error } = await supabase.from("About").select("*");
  if (error) {
    throw error;
  }

  return data;
};

export const getEducation = async () => {
  const { data, error } = await supabase.from("Education").select("*");
  if (error) {
    throw error;
  }

  return data;
};
