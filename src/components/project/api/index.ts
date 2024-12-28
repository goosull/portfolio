import { supabase } from "@/shared";

interface props {
  size?: number;
  isCore?: boolean;
  orderBy?: string;
}

export const getProject = async ({ size, isCore, orderBy }: props) => {
  const query = supabase.from("Project").select("*");

  if (isCore) {
    query.eq("isCore", true);
  }

  if (size) {
    query.limit(size);
  }

  if (orderBy) {
    query.order(orderBy, { ascending: false });
  } else {
    query.order("id", { ascending: true });
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data;
};
