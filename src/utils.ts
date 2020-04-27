export const safeParse = (payload: string): any => {
  try {
    return JSON.parse(payload)
  } catch (err) {
    return null
  }
}