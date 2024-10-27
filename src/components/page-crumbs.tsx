import { Breadcrumb } from "antd";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import MenuLinks from "../utils/menu-links.ts";
import { capitalize } from "../utils";

/*const GlobalStyles = createGlobalStyle`
  .ant-breadcrumb ol li {
    display: flex;
    height: 15px;
    align-items: center;
  }
`;*/

const PageCrumbs = () => {
  const { pathname } = useLocation();
  const pathSnippets = pathname.split("/").filter((i: any) => i);
  const items = [
    {
      title: (
        <Link to={"/" + MenuLinks.dashboard}>
         Dashboard
        </Link>
      ),
    },
  ];

  pathSnippets.map((_: any, index: number) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    if(isNaN(parseInt(pathSnippets[index]))){
      items.push({
        title: (
            <Link to={url}>
              {capitalize(
                  decodeURIComponent(pathSnippets[index]).replace("-", " "),
              )}
            </Link>
        ),
      });
    }
  });
  return (
    <div className={"m-3"}>
      <Breadcrumb
        items={items}
        className={"flex"}
        // separator={<ArrowRightOutlined />}
      />
    </div>
  );
};

export default PageCrumbs;
