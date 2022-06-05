// @ts-nocheck
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import PropertyModal from "./PropertyModal";

import { Row, Col } from "react-bootstrap";
import { markAsSold, verifyProperty } from "../slices/adminSlice";

interface IData {
  data: any;
}
const PropertiesTable: React.FC<IData> = ({ data }) => {
  // const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [propertyModalShow, setPropertyModalShow] = useState(false);
  // const [deleteid, setDeleteid] = useState(null);
  const [userdata, setUserData] = useState(null);
  const dispatch = useDispatch();
  const { SearchBar } = Search;
  const sizePerPage = 10;
  const pageOptions = {
    sizePerPage: sizePerPage,
    totalSize: data?.length, // replace later with size(users),
    custom: true,
  };
  const defaultSorted = [
    {
      dataField: "_id", // if dataField is not match to any column you defined, it will be ignored.
      order: "desc", // desc or asc
    },
  ];
  const dataListColumns = [
    {
      text: "id",
      dataField: "_id",
      sort: true,
      hidden: true,
      formatter: (data: any) => <>{data._id}</>,
    },
    {
      dataField: "isVerify",
      text: "Verified",
      formatter: (cellContent: any, data: any) => (
        <div onClick={() => dispatch(verifyProperty(data._id))}>
          {data.isVerified ? (
            <span className='badge bg-success' role='button'>
              verified
            </span>
          ) : (
            <span className='badge bg-danger' role='button'>
              not verified
            </span>
          )}
        </div>
      ),
    },
    {
      dataField: "title",
      text: "Title",
      formatter: (cellContent: any, data: any) => (
        <>
          <span>{data.title}</span>
        </>
      ),
    },
    {
      dataField: "markAsSold",
      text: "Mark As Sold",
      formatter: (cellContent: any, data: any) => (
        <div onClick={() => dispatch(markAsSold(data._id))}>
          {data.isSold ? (
            <span className='badge bg-success' role='button'>
              sold
            </span>
          ) : (
            <span className='badge bg-danger' role='button'>
              not sold
            </span>
          )}
        </div>
      ),
    },
    {
      dataField: "data",
      text: "Full data",
      sort: true,
      formatter: (cellContent: any, data: any) => (
        <span
          className='badge bg-primary'
          role='button'
          onClick={() => {
            setPropertyModalShow(true);
            setUserData(data);
          }}
        >
          view
        </span>
      ),
    },
  ];

  const keyField = "_id";
  return (
    <div style={{ fontSize: "0.8rem" }}>
      <div>
        <h2 className='text-capitalize text-center text-secondary'>
          Properties
        </h2>
        <div>
          <PaginationProvider
            pagination={paginationFactory(pageOptions)}
            columns={dataListColumns}
            data={data}
          >
            {({ paginationProps, paginationTableProps }) => {
              return (
                <ToolkitProvider
                  keyField={keyField}
                  data={data}
                  columns={dataListColumns}
                  bootstrap4
                  search
                >
                  {(toolkitProps) => (
                    <div>
                      <div className='row mb-2'>
                        <div className='col-lg-6'>
                          <div className='search-box ms-2 mb-2 d-inline-block'>
                            <div className='position-relative'>
                              <SearchBar {...toolkitProps.searchProps} />
                              <i className='bx bx-search-alt search-icon' />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='table-responsive'>
                        <BootstrapTable
                          keyField={keyField}
                          {...toolkitProps.baseProps}
                          {...paginationTableProps}
                          defaultSorted={defaultSorted}
                          classes={
                            "table align-middle table-nowrap table-hover"
                          }
                          bordered={false}
                          striped={false}
                          // responsive
                        />
                        {!data.length ? (
                          <p>You currently do not have any user</p>
                        ) : null}
                        <PropertyModal
                          data={userdata}
                          show={propertyModalShow}
                          onHide={() => setPropertyModalShow(false)}
                        />
                      </div>
                      <Row className='align-items-md-center mt-30'>
                        <Col className='pagination pagination-rounded justify-content-end mb-2'>
                          <PaginationListStandalone {...paginationProps} />
                        </Col>
                      </Row>
                    </div>
                  )}
                </ToolkitProvider>
              );
            }}
          </PaginationProvider>
        </div>
      </div>
    </div>
  );
};

export default PropertiesTable;
