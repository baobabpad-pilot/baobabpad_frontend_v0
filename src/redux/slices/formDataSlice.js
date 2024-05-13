import { createSlice } from '@reduxjs/toolkit';

const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    frontend: [],
    backend: [],
    business: [],
    industry: [],
    company_type: [],
    product_type: [],
    trl: [],
    business_information: {
      company_name: "",
      business_type: "",
      phone_number: "",
      company_email: "",
      office_address: "",
      company_country: "",
      registration_number: "",
      city: "",
      password: "",
      confirm_password: ""
    }
  },
  reducers: {
    updateFormData(state, action) {
      return { ...state, ...action.payload };
    },
    resetFormData(state) {
      return {
        frontend: [],
        backend: [],
        business: [],
        industry: [],
        company_type: [],
        product_type: [],
        trl: [],
        business_information: {
          company_name: "",
          business_type: "",
          phone_number: "",
          company_email: "",
          office_address: "",
          company_country: "",
          registration_number: "",
          city: "",
          password: "",
          confirm_password: ""
        }
      };
    }
  }
});

export const { updateFormData, resetFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
