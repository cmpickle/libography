import * as React from "react";
import { Avatar, ListItemAvatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export const ListAvatar = (props) => {
  const style = useStyles();
  return (
    <ListItemAvatar source="picture">
      <Avatar className={style.avatar} src={props.record.picture} />
    </ListItemAvatar>
  );
};
