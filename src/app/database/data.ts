import React from 'react'
export type Products = {
    id: number,
    productName: string,
    price: number,
    image: string,
    quantity: number,
}

export const products: Products[] = [
  {
    id: 1,
    productName: 'Thanh long',
    price: 120000,
    image: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQpSEsQ6ikI2UGWJnirDqxoFgy40q_5ysWKeN9tVpqcjxKL-VrrUfImaj7ZGvsp7l0k',
    quantity: 12,
  },
  {
    id: 2,
    productName: 'Dua chuot',
    price: 150000,
    image: 'https://bactom.com/wp-content/uploads/2022/06/hat-giong-dua-chuot-leo.webp',
    quantity: 20,
  },
  {
    id: 3,
    productName: 'Nho',
    price: 25000,
    image: 'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/an_nho_co_tot_khong_thanh_phan_dinh_duong_trong_qua_nho_la_gi_1_9159e2dc25.jpg',
    quantity: 8,
  },
  {
    id: 4,
    productName: 'Rong bien',
    price: 1000000,
    image: 'https://sagiang.com.vn/wp-content/uploads/2022/05/20210510_085908_830780_an-rong-bien.max-1800x1800-1.jpg',
    quantity: 30,
  },
]
