import Heading from "../Heading/Heading";

import { Item, Link } from "./PItem.styled";

export default function PItem({ id, title, img }) {
  return (
    <Item>
      <img src={img} alt="description" />
      <Link to={`detail/${id}`}>
        <Heading el="h4">{title}</Heading>
      </Link>
    </Item>
  );
}
