import { AuthorList } from "./AuthorList";
import { AuthorEdit } from "./AuthorEdit";
import { AuthorCreate } from "./AuthorCreate";
import { Person } from "@material-ui/icons";

export default {
  list: AuthorList,
  edit: AuthorEdit,
  create: AuthorCreate,
  icon: Person,
  name: "author",
  label: "Authors",
};
