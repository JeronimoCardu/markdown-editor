import { dataProps } from "../hooks/useEditorStore";
import data from "../../data.json";

export default function setLocalStorage(data: dataProps | dataProps[]) {
  localStorage.setItem("files", JSON.stringify(data));
}
setLocalStorage(data);
