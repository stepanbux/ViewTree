import React, { useCallback, useState } from "react";

import down from "../../assets/image/down.svg";
import right from "../../assets/image/right.svg";
import ItemsOfTree from "../ItemsOfTree/ItemsOfTree";
import Buttons from "../Buttons/Buttons";

import s from "./Item.module.css";

const Item = ({ item }) => {
  const [buttonsShow, setButtonsShow] = useState({});
  const [showNode, setShowNode] = useState({});
  const isHasChildren = item.children && item.children.length;

  const onMouseEnterAndLeaveName = useCallback(() => {
    setButtonsShow((prev) => {
      if (prev[item.id] !== undefined) {
        return { ...prev, [item.id]: !prev[item.id] };
      }
      return { ...prev, [item.id]: true };
    });
  }, [item.id, setButtonsShow]);

  const onClickItem = useCallback(() => {
    setShowNode((prev) => {
      if (prev[item.id] !== undefined) {
        return { ...prev, [item.id]: !prev[item.id] };
      }
      return { ...prev, [item.id]: true };
    });
  }, [item.id, setShowNode]);

  return (
    <li className={s.item} key={item.id}>
      <div
        className={s.item__body}
        onMouseEnter={onMouseEnterAndLeaveName}
        onMouseLeave={onMouseEnterAndLeaveName}
      >
        {isHasChildren ? (
          <img
            onClick={onClickItem}
            src={showNode[item.id] ? down : right}
            alt="img"
          />
        ) : null}
        <span className={s.item__name}>{item.name}</span>
        {buttonsShow[item.id] && <Buttons item={item} />}
      </div>
      {showNode[item.id] && isHasChildren ? (
        <ItemsOfTree items={item.children} />
      ) : null}
    </li>
  );
};

export default Item;
