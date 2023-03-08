import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3002";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class RCAPI {

  // static async request( method = "get") {
  //   console.debug("API Call:", method);

  //   //there are multiple ways to pass an authorization token, this is how you pass it in the header.
  //   //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
  //   const url = `${BASE_URL}/`;
  //   const params = (method === "get")

  //   try {
  //     return (await axios({ url, method, params }));
  //   } catch (err) {
  //     console.error("API Error:", err.response);
  //   }
  // }

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getSearch(handle){
    let res = await this.request(`traxxas/${handle}`)
    console.log(res)
    return res
  }

  static async getAllProd(){
    let res = await this.request(`traxxas/all`)
    return res
  }
}

export default RCAPI