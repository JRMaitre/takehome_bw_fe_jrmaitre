import { RowAttributes } from "./styles";

export const ProductRow = ({
  data: { name, category, previewText, image },
}) => {
  return (
    <RowAttributes>
      <div>Product</div>
      <div>{name}</div>
      <div>{category}</div>
      <div>{previewText}</div>
      {image && <img height="32" width="32" src={image} alt={name} />}
    </RowAttributes>
  );
};
