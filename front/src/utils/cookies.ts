import Cookies from "js-cookie"

export const setCookie = (
  name: string,
  value: string,
  expiresIn = 9999,
  path = "/",
  secure = true,
  sameSite: "strict" | "Strict" | "lax" | "Lax" | "none" | "None" | undefined = "strict"
) => {
  Cookies.set(name, value, {
    expires: expiresIn,
    secure,
    path,
    sameSite
  })
}

export const getCookie = (name: string) => {
  return Cookies.get(name)
}

export const setLocaleCookie = (locale: "ru" | "en" | string) => {
  setCookie(
    "NEXT_LOCALE",
    locale,
    999999
  )
}
