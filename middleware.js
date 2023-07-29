import { NextResponse } from "next/server";
export default function middleware(req) {
  let verify = req.cookies.get("JobsonLoggedIn");
  console.log(verify);
  let url = req.url;
  if (!verify && url.includes("/profile")) {
    return NextResponse.redirect("/auth/login");
  }
  if (!verify && url.includes("/jobDetails")) {
    return NextResponse.redirect("/");
  }
  if (!verify && url.includes("/jobListings")) {
    return NextResponse.redirect("/");
  }
}
