import { supabase } from "@/shared";

interface Props {
  path?: string;
  size?: number;
  isCore?: boolean;
  orderBy?: string;
}

export const getProject = async ({ path, size, isCore, orderBy }: Props) => {
  let query = supabase.from("Project").select("*");

  if (isCore) {
    query = query.eq("isCore", true);
  }

  if (path) {
    query = query.eq("project_path", path);
  }

  if (size) {
    query = query.limit(size);
  }

  if (orderBy) {
    query = query.order(orderBy, { ascending: false });
  } else {
    query = query.order("id", { ascending: true });
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data;
};
