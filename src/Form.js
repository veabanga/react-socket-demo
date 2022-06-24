import React from "react";
import { Formik } from "formik";
import { endpoints } from "./api/endpoints";
import api from "./api";

export const Form = () => {
  const initialState = {
    name: "Vishwas",
    company: "Focus",
    profession: "Developer",
  };

  const fetchApi = async(data) => {
    try{
        const res = await api.post(endpoints.demoform, {data});
        console.log(res);
    }
   catch (e){
    console.log("Error: ",e);
   }
  }

  
  return (
    <div>
      <div>FORM</div>
      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          console.log(values);
          fetchApi(values);
        }}
      >
        {
        ({ handleSubmit, handleBlur, handleChange, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <input
                type="text"
                name="company"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.company}
              />
              <input
                type="text"
                name="profession"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.profession}
              />
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          );
        }
        }
      </Formik>
    </div>
  );
};
