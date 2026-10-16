/** Process health only. This does not check database or authentication availability. */
export function GET() {
  return Response.json({ status: "ok", service: "courtwave-web" });
}
