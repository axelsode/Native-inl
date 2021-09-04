import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer FMGflCtAwCv77soCZO6nNUkOTQxJhaOy-1HnDr6PC47l5VCBQ7yfG4SM2ec9cn9dMP-Nv8gWRLIpNTeVcF5kPVimTIng68_BabqLiASEuZ1HpuVPJcJVhT1C2RQuYXYx",
  },
});
