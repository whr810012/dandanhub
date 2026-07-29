/** @deprecated 反代已迁至 workers/site.ts；此文件仅占位。 */
export async function onRequest(context: { next: () => Promise<Response> }) {
  return context.next()
}
