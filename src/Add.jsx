import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Add = () => {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [oldPrice, setOldPrice] = useState()
    const [url, setUrl] = useState()
    const [description, setDescription] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        let obj = {
            name: name,
            price: price,
            oldPrice: oldPrice,
            url: url,
            description: description
        }

        try {
            const res = axios.post("http://localhost:5050/item", obj)
            console.log(res.data);
            Swal.fire({
                text: "Information Added Successfully",
                icon: "success"
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
        }
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='enetr name' onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder='enetr price' onChange={(e) => setPrice(e.target.value)} />
                <input type="number" placeholder='enetr oldprice' onChange={(e) => setOldPrice(e.target.value)} />
                <input type="url" placeholder='enetr url' onChange={(e) => setUrl(e.target.value)} />
                <textarea name="" id="" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)}></textarea>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Add