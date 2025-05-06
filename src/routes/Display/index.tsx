import DisplayDesktop from "./DisplayDesktop";
import DisplayMobile from "./DisplayMobile";

export default function Display() {
  return (
    <>
      <div className="tablet:hidden">
        <DisplayMobile />
      </div>
      <div className="tablet:block hidden">
        <DisplayDesktop />
      </div>
    </>
  );
}
