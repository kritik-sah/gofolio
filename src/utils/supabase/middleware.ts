import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          console.log(
            "name ==>",
            request.cookies.get(
              "sb-yelbdeiefeqnignhtxkc-auth-token-code-verifier"
            )
          );
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  const { data, error } = await supabase.auth.getUser();
  console.log("user : ", error);

  // refreshing the auth token
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (
    !user &&
    request.nextUrl.pathname !== "/signin" &&
    request.nextUrl.pathname !== "/"
  ) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  return NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
}
