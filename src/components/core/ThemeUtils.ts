const themeKey = "3edesign-theme";

export const isDarkMode = (() => {
  if (typeof localStorage !== "undefined" && localStorage.getItem(themeKey)) {
    return localStorage.getItem(themeKey) === "dark";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
})();

export function updateHTMLTheme(mode: "dark" | "light") {
  if (mode === "dark") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");

    document.head
      .querySelector('meta[name="color-scheme"]')
      ?.setAttribute("content", "dark light");
    document.head
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", "#1F2028");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    document.head
      .querySelector('meta[name="color-scheme"]')
      ?.setAttribute("content", "light dark");
    document.head
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", "#ffffff");
  }
}

export function updateStorageTheme(mode: "dark" | "light") {
  if (mode === "dark") {
    localStorage.setItem(themeKey, "dark");
  } else {
    localStorage.setItem(themeKey, "light");
  }
}
