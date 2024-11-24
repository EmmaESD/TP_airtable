import { Status } from "../../utils/types/client";

const Chip = ({ status }: { status: Status }) => {
  let style;
  switch (status) {
    case Status.CONTACTED:
      style = {
        backgroundColor: "#6FD195",
        color: "white",
      };
      break;
    case Status.NOT_CONTACTED:
      style = {
        backgroundColor: "#FF928A",
        color: "white",
      };
      break;
    case Status.CONTACT_IN_FUTUR:
      style = {
        backgroundColor: "#3CC3DF",
        color: "white",
      };
  }
  return (
    <div className="p-1 rounded-md text-xs w-fit" style={style}>
      {status}
    </div>
  );
};

export default Chip;
