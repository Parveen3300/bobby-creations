import instance from "./axios";

const uri = {
  userLogin: "/api/profile/login/",
  userDetailsAPI: "/api/profile/create_profile/",
  companyDetailsAPI: "/api/profile/create_company/",
  getCountries: "/api/configurations/updated_records/",
};

export const userLogin = async (reqBody) => {
  return await instance.post(uri.userLogin, reqBody);
};

export const userDetailsAPI = async (reqBody) => {
  return await instance.post(uri.userDetailsAPI, reqBody);
};

export const companyDetailsAPI = async (reqBody) => {
  return await instance.post(uri.companyDetailsAPI, reqBody);
};

export const getCountries = async (reqBody) => {
  return await instance.get(uri.getCountries, reqBody);
};


export const configuration_update_records = async () => {
  var requestBody = {
    last_sync_datetime: "2017-10-22T10:06:50.120917",
    country_short_name: "IN",
    country_long_name: "India",
    location_timezone: "Asia/Kolkata",
  };
  return await instance.post(uri.getCountries, requestBody);
};
