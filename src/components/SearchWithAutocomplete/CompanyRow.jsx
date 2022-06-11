import { RowAttributes } from "./styles";
import { formatAddress } from "../../utils/formatAddress";

export const CompanyRow = ({ data: { name, description, address } }) => {
  return (
    <RowAttributes>
      <div>Company</div>
      <div>{name}</div>
      <div>{description}</div>
      <div>{formatAddress(address)}</div>
    </RowAttributes>
  );
};
