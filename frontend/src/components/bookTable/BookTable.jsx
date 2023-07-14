import React, { useEffect, useState } from "react";
import "./bookTable.scss";
import { useDispatch, useSelector } from "react-redux";
import { setData, setTable } from "../../redux/user";
import { Navigate } from "react-router-dom";
import { baseUrl } from "../../App";
import Spinner from "../spinner/Spinner";
import axios from "axios";
import { toast } from "react-toastify";
import ShowRefrence from "../showRefrenceNo/ShowRefrence";

const InputElement = ({ name, type, placeholder, compulsory }) => {
  const { data } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="input">
      <label htmlFor={name}>
        {placeholder}
        <span
          style={{
            color: "rgb(250 38 38)",
            fontSize: "1.4rem",
            marginLeft: "2px",
          }}
        >
          {compulsory ? "*" : ""}
        </span>
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        onChange={(e) => {
          dispatch(setData({ ...data, [name]: e.target.value }));
        }}
      />
    </div>
  );
};

export default function BookTable() {
  const tableNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const slots = [
    { slot: "9:00 am - 10:00 am", staus: false },
    { slot: "10:00 am - 11:00 am", staus: false },
    { slot: "11:00 am - 12:00 pm", staus: false },
    { slot: "12:00 pm - 1:00 pm", staus: false },
    { slot: "1:00 pm - 2:00 pm", staus: false },
    { slot: "2:00 pm - 3:00 pm", staus: false },
    { slot: "3:00 pm - 4:00 pm", staus: false },
    { slot: "4:00 pm - 5:00 pm", staus: false },
    { slot: "5:00 pm - 6:00 pm", staus: false },
    { slot: "6:00 pm - 7:00 pm", staus: false },
    { slot: "7:00 pm - 8:00 pm", staus: false },
    { slot: "8:00 pm - 9:00 pm", staus: false },
  ];
  const [unreserved, setUnreserved] = useState([]);
  const [selected, setSelected] = useState(0);
  const { data, table } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [booked, setBooked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.date || !data.tableNo || !data.slot) {
      setError("Please fill all required fields");
      return;
    }
    setLoading(true);
    try {
      const { data: res } = await axios.post(
        `${baseUrl}/tables/reserve`,
        {
          ...data,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setLoading(false);
      setBooked(true);
      dispatch(setTable(res.tableDetails));
      toast.success(res.msg);
    } catch (error) {
      setBooked(false);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const fetcher = async () => {
      setLoading(true);
      try {
        const { data: res } = await axios.post(
          `${baseUrl}/tables/slots/available`,
          {
            date: data.date,
            tableNo: data.tableNo,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        setLoading(false);
        // console.log(res);
        const tem = [],
          tem2 = res.slots;
        slots.forEach((item, i) => {
          if (!tem2.includes(item.slot)) tem.push(item.slot);
        });
        setUnreserved(tem);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    if (data.tableNo && data.date) {
      fetcher();
    }
  }, [data?.tableNo, data?.date]);

  const BookSlot = (slot) => {
    setSelected(slot);
    dispatch(setData({ ...data, slot: slot }));
  };

  if (!data.name) return <Navigate to={"/register"} />;

  return (
    <div className="container book">
      <div className="main">
        <h2>Book Table</h2>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <InputElement
          name={"date"}
          type={"date"}
          placeholder={"Booking Date"}
          compulsory={true}
        />
        <div className="input">
          <label htmlFor="tableNo">
            Table Number:
            <span
              style={{
                color: "rgb(250 38 38)",
                fontSize: "1.4rem",
                marginLeft: "2px",
              }}
            >*</span>
          </label>
          <select
            name="tableNo"
            id="tabelNo"
            defaultValue={"none"}
            onChange={(e) =>
              dispatch(setData({ ...data, tableNo: Number(e.target.value) }))
            }
          >
            <option value="">Select</option>
            {tableNo.map((num, i) => {
              return (
                <option value={num} key={i}>
                  {num}
                </option>
              );
            })}
          </select>

          <div style={{ margin: "0.5rem 0" }}>Slots: </div>
          {loading ? (
            <Spinner />
          ) : (
            <div className="slot">
              {unreserved.map((item, i) => {
                return (
                  <div
                    className={`item ${selected === item ? "selected" : ""}`}
                    key={i}
                    onClick={() => BookSlot(item)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <button className="btn" onClick={handleSubmit}>
          Next
        </button>
        {booked && <ShowRefrence />}
      </div>
    </div>
  );
}
