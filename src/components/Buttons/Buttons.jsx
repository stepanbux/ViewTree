import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

import { chooseNodeAndEffect } from "../../redux/nodeSlice";

import s from "./Buttons.module.css";

const Buttons = ({ item }) => {
  const popUp = useSelector((state) => state.mainReducer.popUp);
  const dispatch = useDispatch();
  const onClickButton = (type) => () => {
    // I didn't use useCallback here because this function uses currying and useCallback would be useless
    const data = {
      isShow: !popUp.isShow,
      id: item.id,
      type,
    };
    dispatch(chooseNodeAndEffect(data));
  };
  const typeOfPopUp = {
    delete: "Delete",
    add: "Add",
    edit: "Edit",
  };

  return (
    <div className={s.buttons}>
      <IconButton
        size="small"
        aria-label="delete"
        onClick={onClickButton(typeOfPopUp.delete)}
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        onClick={onClickButton(typeOfPopUp.add)}
        size="small"
        aria-label="add"
      >
        <AddIcon />
      </IconButton>
      <IconButton
        size="small"
        aria-label="edit"
        onClick={onClickButton(typeOfPopUp.edit)}
      >
        <EditIcon />
      </IconButton>
    </div>
  );
};

export default Buttons;
