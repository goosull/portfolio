export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      About: {
        Row: {
          contact_email: string | null;
          contact_phone: string | null;
          profile_birth: string;
          profile_name: string;
          sns_github: string | null;
          sns_linkedin: string | null;
          sns_blog: string | null;
        };
        Insert: {
          contact_email?: string | null;
          contact_phone?: string | null;
          profile_birth: string;
          profile_name: string;
          sns_github?: string | null;
          sns_linkedin?: string | null;
        };
        Update: {
          contact_email?: string | null;
          contact_phone?: string | null;
          profile_birth?: string;
          profile_name?: string;
          sns_github?: string | null;
          sns_linkedin?: string | null;
        };
        Relationships: [];
      };
      Education: {
        Row: {
          edu_degree: string | null;
          edu_end: string | null;
          edu_institute: string;
          edu_major: string | null;
          edu_start: string | null;
          id: string;
        };
        Insert: {
          edu_degree?: string | null;
          edu_end?: string | null;
          edu_institute: string;
          edu_major?: string | null;
          edu_start?: string | null;
          id?: string;
        };
        Update: {
          edu_degree?: string | null;
          edu_end?: string | null;
          edu_institute?: string;
          edu_major?: string | null;
          edu_start?: string | null;
          id?: string;
        };
        Relationships: [];
      };
      Experience: {
        Row: {
          exp_company: string;
          exp_department: string | null;
          exp_description: {
            data: { header: string; body: string[] }[];
          };
          exp_end: number | null;
          exp_role: string | null;
          exp_start: number;
          exp_url: string;
          id: number;
        };
        Insert: {
          exp_company: string;
          exp_department?: string | null;
          exp_description: Json;
          exp_end?: number | null;
          exp_role?: string | null;
          exp_start: number;
          exp_url: string;
          id?: number;
        };
        Update: {
          exp_company?: string;
          exp_department?: string | null;
          exp_description?: Json;
          exp_end?: number | null;
          exp_role?: string | null;
          exp_start?: number;
          exp_url?: string;
          id?: number;
        };
        Relationships: [];
      };
      Project: {
        Row: {
          id: number;
          project_description: string | null;
          project_end: string | null;
          project_image: string | null;
          project_organization: string | null;
          project_path: string | null;
          project_role: string | null;
          project_stack: Json;
          project_start: string | null;
          project_title: string;
          project_url: string | null;
          project_icon: string | null;
        };
        Insert: {
          id?: number;
          project_description?: string | null;
          project_end?: string | null;
          project_image?: string | null;
          project_organization?: string | null;
          project_path?: string | null;
          project_role?: string | null;
          project_stack: Json;
          project_start?: string | null;
          project_title: string;
          project_url?: string | null;
        };
        Update: {
          id?: number;
          project_description?: string | null;
          project_end?: string | null;
          project_image?: string | null;
          project_organization?: string | null;
          project_path?: string | null;
          project_role?: string | null;
          project_stack?: Json;
          project_start?: string | null;
          project_title?: string;
          project_url?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;
