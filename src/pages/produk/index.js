/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { authService } from '../../services';
import Item from '../../components/item/index';
import './style.css';
import { deleteCookie } from '../../utils/cookie';

const Produk = () => {
  const [dataProduk, setDataProduk] = useState([]);

  const getProduk = () => {
    authService.getProduk().then((res) => {
      console.log(res);
      setDataProduk(res.data);
    });
  };

  useEffect(() => {
    getProduk();
  }, []);

  const logoutClicked = () => {
    deleteCookie('userData');
    deleteCookie('token');
    window.location.replace('/');
  };

  return (
    <div>
      <button
        className="logout"
        onClick={() => {
          logoutClicked();
        }}
      >
        logout
      </button>
      <h2>Halaman Produk!</h2>
    </div>
  );
};

export default Produk;
