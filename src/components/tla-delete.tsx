import type { AsyncThunk } from "@reduxjs/toolkit";
import { unwrapResult } from "@reduxjs/toolkit";
import TlaConfirm from "./tla-confirm.tsx";
import { useAppDispatch } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TlaSuccess } from "../utils/messages.ts";

interface Props {
  callBack: AsyncThunk<any, any, any>;
  column: number | string;
  title?: string;
  isCandidate?: boolean;
  redirect?: string | null;
  text?: string | null;
  border?: string;
}

const TlaDelete = ({
  callBack,
  column,
  title,
  redirect = null,
  text = "",
  border = "border",
}: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  return (
    <TlaConfirm loading={loading}
      border={border}
      title={"Confirm Delete"}
      fullText={`Do you really want to delete this ${title}`}
      callBack={() => {
          setLoading(true);
          dispatch(callBack(column))
          .then(unwrapResult)
          .then(() => {
              TlaSuccess(`${title} Deleted Successfully`)
              setLoading(false);
              if(redirect) {
                  navigate(redirect)
              }
          })
          .catch(() => {
              setLoading(false);
          });
      }}
    >
        {text}
    </TlaConfirm>
  );
};

export default TlaDelete;
