import "bootstrap-icons/font/bootstrap-icons.css";
import "./Manage_Category.css";
import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/Button.css";
import { LiaUserEditSolid } from "react-icons/lia";
import { MdOutlineDeleteSweep } from "react-icons/md";
import DataTable from "react-data-table-component";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const columns = [
  { name: "Sr no.", selector: (row) => row.Srno, sortable: true },
  { name: "Blog Title", selector: (row) => row.BlogTitle, sortable: true },
  {
    name: "Category",
    selector: (row) => row.Category,
    sortable: true, // Enable sorting
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    cell: (row) => (
      <span
        className={`badge me-1 ${
          row.status === "Active" ? "bg-label-primary" : "bg-label-danger"
        }`}
      >
        {row.status}
      </span>
    ),
  },

  {
    name: "Action",
    cell: (row) => (
      <div className="flex space-x-3">
        <Link className="fs-5  px-lg-2">
          <LiaUserEditSolid />
        </Link>
        <Link className="fs-5 text-danger px-lg-2">
          <MdOutlineDeleteSweep />
        </Link>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const data = [
  { Srno: 1, BlogTitle: "JohnDoe", Category: "digital", status: "Active" },
  { Srno: 2, BlogTitle: "JohnDoe", Category: "a", status: "Active" },
  { Srno: 3, BlogTitle: "JohnDoe", Category: "baan", status: "Active" },
  { Srno: 4, BlogTitle: "JohnDoe", Category: "digibaantal", status: "Active" },
  { Srno: 5, BlogTitle: "JohnDoe", Category: "digital", status: "Active" },
  { Srno: 6, BlogTitle: "JohnDoe", Category: "digital", status: "Active" },
];
// Custom styles for header
const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#f1f5f9",
      color: "#000",
      fontSize: "14px",
      fontWeight: "bold",
      textAlign: "center",
    },
  },
};
export default function Blog_Review() {
  const [filteredData, setFilteredData] = useState(data);
  const [Query, setQuery] = useState("");
  const [form, setForm] = useState(false);

  const handleForm = () => {
    setForm(!form);
  };

  const handleFilter = (event) => {
    const query = event.target.value.toLowerCase();
    setQuery(query);

    if (query === "") {
      setFilteredData(data);
    } else {
      const filterdata = data.filter((item) =>
        item.Category.toLowerCase().startsWith(query)
      );
      setFilteredData(filterdata);
    }
  };

  return (
    <>
      <section>
        <h1 className="fs-4 ms-3 mb-4">Manage Category</h1>

        <div className="d-flex ">
          <div class="input-group mb-3 w-75 ms-3">
            <input
              type="text"
              className="form-control"
              placeholder="Serch here"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handleFilter}
              value={Query}
            />
            <span class="input-group-text" id="basic-addon2">
              <FaSearch />
            </span>
          </div>

          <button
            type="button"
            class="btn btn-light ms-auto me-3 mb-3 p-2 "
            onClick={handleForm}
          >
            {" "}
            Add Category <FaPlus />
          </button>
          {form && (
            <div
              className="modal fade show d-block"
              tabIndex="-1"
              role="dialog"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header border-0 " style={{ backgroundColor: "#f1f5f9" }}>
                    <h5 className="modal-title">Add Category</h5>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={handleForm}
                    ></button>
                  </div>
                  <div class="input-group mb-3 px-4 mt-3 py-3">
                    <input
                      type="text"
                      class="form-control "
                      placeholder="Add here"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="modal-footer border-0">
                    <button type="button" className="btn btn-primary">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="container">
          {/* Table Section */}
          <div className="table-responsive border rounded-lg">
            <DataTable
              title=""
              columns={columns}
              data={filteredData}
              pagination
              highlightOnHover
              customStyles={customStyles}
            />
          </div>
        </div>
      </section>
    </>
  );
}
