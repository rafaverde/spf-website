import { NextResponse } from "next/server";

// FE-02 transition mode:
// Keep proxy in place, but do not rewrite routes yet.
// Route rewriting with next-intl middleware requires `app/[locale]/...` to exist.
export default function proxy() {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
