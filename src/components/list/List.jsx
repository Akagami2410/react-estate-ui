import { listData } from "../../lib/dummy";
import Card from "../card/card";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      {listData.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
};

export default List;
