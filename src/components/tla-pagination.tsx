import Pagination from "react-js-pagination";
import { Select, Typography } from "antd";
import { TableMeta } from "../types/common.ts";

/*type NavItemProps = {
  icon: React.ReactNode;
  title?: string;
  iconFirst?: boolean;
};*/

/*const NavItem = ({ icon, title, iconFirst }: NavItemProps) => (
  <div className={"flex items-center gap-2"}>
    {iconFirst ? (
      <React.Fragment>
        {icon} <span className={"hidden md:block"}>{title}</span>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <span className={"hidden md:block"}>{title}</span> {icon}
      </React.Fragment>
    )}
  </div>
);*/

type TlaPaginationProps = {
  meta: TableMeta;
  children: any;
  loadData: (pageNumber: number, perPage?: number) => void;
  showHeader?: boolean;
};

function TlaPagination(props: TlaPaginationProps) {
  const { meta, loadData, children, showHeader } = props;
  return (
    <div className={"mb-4"}>
      <div className={"flex items-center gap-2"}>
        {showHeader && (
          <div className={"p-3"}>
            <Typography.Text>
              {meta?.from} - {meta?.to} of {meta?.total}
            </Typography.Text>
          </div>
        )}
        <Select
          value={meta?.per_page}
          onChange={(value) => {
            loadData(meta?.current_page, value);
          }}
          placeholder={"Per page"}
          size={"large"}
        >
          <Select.Option value={"10"}>10</Select.Option>
          <Select.Option value={"50"}>50</Select.Option>
          <Select.Option value={"100"}>100</Select.Option>
          <Select.Option value={"150"}>150</Select.Option>
        </Select>
      </div>
      {children}
      <div style={{ marginTop: 10 }}>
        <Pagination
          activePage={meta?.current_page}
          itemsCountPerPage={meta?.per_page}
          totalItemsCount={meta?.total || 0}
          onChange={(pageNumber) => {
            loadData(pageNumber, meta?.per_page);
          }}
          pageRangeDisplayed={8}
          itemClass="page-item"
          linkClass="page-link"
          firstPageText="First"
          lastPageText="Last"
          hideFirstLastPages
          // nextPageText={<NavItem icon={<FiChevronRight />} iconFirst />}
          // prevPageText={<NavItem icon={<FiChevronLeft />} />}
        />
      </div>
    </div>
  );
}

export default TlaPagination;
