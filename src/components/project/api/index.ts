import { supabase } from "@/shared";

export const getProject = async (size?: number) => {
  if (size) {
    const { data, error } = await supabase.from("Project").select("*").order("id", { ascending: true }).limit(size);
    if (error) {
      throw error;
    }
    return data;
  } else {
    const { data, error } = await supabase.from("Project").select("*").order("id", { ascending: true });
    if (error) {
      throw error;
    }
    return data;
  }
};
