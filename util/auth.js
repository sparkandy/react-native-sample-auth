import axios from "axios";

const API_KEY = 'AIzaSyBYxJFemCsKJ_pNNSUdA4ghhWarMoBbnHw';

export async function createUser (email, password){
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY, {
      email: email,
      password: password,
      returnSecureToken: true  
    });
}