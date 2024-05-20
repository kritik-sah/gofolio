import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";
import AdminLayout from "./AdminLayout";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/signin");
  }
  return <AdminLayout>{children}</AdminLayout>;
};

export default Layout;
