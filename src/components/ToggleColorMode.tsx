import useEditorStore from "../hooks/useEditorStore";

export default function ToggleColorMode() {
  const theme = useEditorStore((state) => state.theme);
  const setTheme = useEditorStore((state) => state.setTheme);
  const body = document.querySelector("body");
  body?.setAttribute("data-theme", theme);

  return (
    <div
      onClick={() => (theme == "light" ? setTheme("dark") : setTheme("light"))}
      className="absolute bottom-10 left-1/2 flex h-fit -translate-x-1/2 cursor-pointer items-center gap-2"
    >
      <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.7 9a.9.9 0 0 0-.9-.9H.9a.9.9 0 0 0 0 1.8h.9a.9.9 0 0 0 .9-.9Zm.576 4.5-.639.639a.9.9 0 0 0 0 1.269.9.9 0 0 0 1.269 0l.639-.639A.9.9 0 0 0 3.276 13.5ZM9 2.7a.9.9 0 0 0 .9-.9V.9a.9.9 0 0 0-1.8 0v.9a.9.9 0 0 0 .9.9Zm5.094 2.106a.9.9 0 0 0 .63-.261l.639-.639a.9.9 0 1 0-1.269-1.269l-.594.639a.9.9 0 0 0 0 1.269.9.9 0 0 0 .594.261Zm-10.8-.261a.9.9 0 0 0 1.269 0 .9.9 0 0 0 0-1.269l-.639-.639a.904.904 0 1 0-1.287 1.269l.657.639ZM17.1 8.1h-.9a.9.9 0 1 0 0 1.8h.9a.9.9 0 1 0 0-1.8Zm-2.376 5.4a.9.9 0 0 0-1.224 1.224l.639.639a.9.9 0 0 0 1.269 0 .9.9 0 0 0 0-1.269l-.684-.594ZM9 4.05A4.95 4.95 0 1 0 13.95 9 4.959 4.959 0 0 0 9 4.05Zm0 8.1a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3Zm0 3.15a.9.9 0 0 0-.9.9v.9a.9.9 0 1 0 1.8 0v-.9a.9.9 0 0 0-.9-.9Z"
          fill={`${theme == "light" ? "#ffffff" : "#5A6069"}`}
        />
      </svg>
      <div className="flex h-[1.5em] w-[3em] items-center rounded-full bg-gray-600 px-2">
        <div
          className={`${theme == "dark" ? "translate-x-[150%]" : ""} linear h-[.75em] w-[.75em] rounded-full bg-white transition-transform duration-200`}
        ></div>
      </div>
      <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.141 8.804a.823.823 0 0 0-.864-.115 6.622 6.622 0 0 1-2.772.6A6.704 6.704 0 0 1 5.81 2.626 7.066 7.066 0 0 1 6.015.981a.823.823 0 0 0-1.094-.93 8.341 8.341 0 1 0 11.516 9.617.823.823 0 0 0-.296-.864Zm-7.814 5.503A6.696 6.696 0 0 1 4.164 2.404v.222a8.35 8.35 0 0 0 10.069 8.16 6.671 6.671 0 0 1-5.906 3.554v-.033Z"
          fill={`${theme == "dark" ? "#ffffff" : "#5A6069"}`}
        />
      </svg>
    </div>
  );
}
