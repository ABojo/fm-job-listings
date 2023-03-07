import jobs from "./data.json";

//mock api that could be replaced with another module that retrieves real data
const api = {
  getJobs: async function () {
    return jobs;
  },
};

export default api;
