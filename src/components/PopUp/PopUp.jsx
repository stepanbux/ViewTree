import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";

import { setPopUpCondition } from "../../redux/nodeSlice";
import {
  useAddNodeMutation,
  useDeleteNodeMutation,
  useRenameNodeMutation,
} from "../../redux/api";

import s from "./PopUp.module.css";

const PopUp = () => {
  const [addItem] = useAddNodeMutation();
  const [deleteItem] = useDeleteNodeMutation();
  const [renameItem] = useRenameNodeMutation();

  const popUp = useSelector((state) => state.mainReducer.popUp);
  const [nodeName, setNodeName] = useState("");
  const dispatch = useDispatch();

  const onClickCancel = useCallback(() => {
    dispatch(setPopUpCondition(!popUp.isShow));
  }, [dispatch, popUp.isShow]);

  const onClickReturn = useCallback(async () => {
    const id = popUp.id;
    switch (popUp.type) {
      case "Add": {
        nodeName && (await addItem({ nodeName, id }).unwrap());
        setNodeName("");
        break;
      }

      case "Edit": {
        nodeName && (await renameItem({ nodeName, id }).unwrap());
        setNodeName("");
        break;
      }

      case "Delete": {
        await deleteItem(id).unwrap();
        break;
      }

      default:
        break;
    }
    onClickCancel();
  }, [
    addItem,
    deleteItem,
    popUp.id,
    popUp.type,
    nodeName,
    onClickCancel,
    renameItem,
  ]);

  const onChangeInput = (e) => {
    setNodeName(e.target.value);
  };

  return (
    <div className={s.popup__wrapper}>
      <div className={s.popup}>
        <span className={s.popup__title}>{popUp.type}</span>
        {popUp.type !== "Delete" ? (
          <input
            className={s.popup__input}
            value={nodeName}
            onChange={onChangeInput}
            placeholder={
              popUp.type === "Add"
                ? "Enter the name of node"
                : "Enter the new name of node"
            }
          />
        ) : (
          <span className={s.popup__text}>
            <span> Do you want to remove this node({popUp.id})?</span>
          </span>
        )}
        <div className={s.popup__buttons}>
          <Button size="small" onClick={onClickReturn} variant="outlined">
            {popUp.type === "Delete" ? "Yes" : "Enter"}
          </Button>
          <Button size="small" variant="outlined" onClick={onClickCancel}>
            <span>Cancel</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
