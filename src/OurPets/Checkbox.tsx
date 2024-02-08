import { MouseEventHandler } from "react";

export default function Checkbox(props: { place: string, onClick: MouseEventHandler<HTMLInputElement> }) {
  return (
    <div className="flex items-center">
      <input onClick={props.onClick} type="checkbox" value="" className="w-4 h-4" />
      <label className="ms-2 text-sm font-text font-light text-d">{props.place}</label>
    </div>
  );
}
