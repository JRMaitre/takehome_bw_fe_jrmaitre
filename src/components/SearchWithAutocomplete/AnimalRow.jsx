import { RowAttributes } from "./styles";

export const AnimalRow = ({ data: { name, taxonomy, image } }) => {
  return (
    <RowAttributes>
      <div>Animal</div>
      <div>{name}</div>
      <div>{taxonomy?.scientificName}</div>
      {image && <img height="32" width="32" src={image} alt={name} />}
    </RowAttributes>
  );
};
