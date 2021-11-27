import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.0.21:2000",
  // headers:{
  //     Authorization:''
  // }
});
