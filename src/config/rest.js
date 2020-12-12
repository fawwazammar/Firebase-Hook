export default {
  LOGIN: '/api/login',
  PRODUK: '/api/produk',
  REGISTER: 'auth/register',
  USERBYID: (userId) => {
    return `users/${userId}`;
  },
};
