"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useFormik } from 'formik';
import { Button } from "@/components/ui/button"





const orderForm = useFormik({
  initialValues: {
    title: '',
    description: '',
    name: '',
    Date: '',
     price: '',
     
  },
  onSubmit: (values) => {
    console.log(values);

    axios.post('http://localhost:5000/order/add', values)
      .then((result) => {
        console.log(result.status);

        toast.success('Order placed Successfully')
      }).catch((err) => {
        toast.error('Some Error Occured')
      });
  },
})

  const [items, setItems] = useState([{ description: "", qty: "", unitPrice: "", totalPrice: "" }])
  const [total, setTotal] = useState(0)
  const [taxes, setTaxes] = useState(0)
  

  const calculateTotal = () => {
    return (total + taxes ).toFixed(2)
  }

  const addItem = () => {
    setItems([...items, { description: "", qty: "", unitPrice: "", totalPrice: "" }])
  }

  const OrderForm = useFormik({
    initialValues: {
      name: '',
      description: '',
      date: '',
      phone: '',
      email: '',
      payment: '',
      price: '',
      taxes: '',
      total: ''
    },
    onSubmit: (values) => {
      console.log(values);

      axios.post('http://localhost:5000/order/add', values)
        .then((result) => {
          console.log(result.status);

          toast.success('Template added Successfully')
        }).catch((err) => {
          toast.error('Some Error Occured')
        });
    },
  })



  return (
    
    <Card className="w-full max-w-4xl mx-auto">
      
      <CardHeader>
        
        <CardTitle className="text-2xl font-bold">ORDER FORM</CardTitle>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="date">Date:</Label>
            <Input 
            name="date"
            placeholder="date"
            id="date" 
            type="date"
            className="w-full mt-2 p-2 border rounded-2xl focus:outline-none bg-white border-gray-300  focus:ring-2 focus:ring-indigo-500"
            value={orderForm.values.date}
            onChange={orderForm.handleChange}
            required />
          </div>
          <div>
            <Label htmlFor="order">Order :</Label>
            <Input name="order"
            placeholder="order"
            id="order" 
            type="order"
            className="w-full mt-2 p-2 border rounded-2xl focus:outline-none bg-white border-gray-300  focus:ring-2 focus:ring-indigo-500"
            value={orderForm.values.order}
            onChange={orderForm.handleChange}
            required/>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Customer Details */}
        <div className="space-y-4">
          <h2 className="font-semibold">Customer Details</h2>
          <div className="grid gap-4">
            <div>
              <Label htmlFor="name">Name:</Label>
              <Input name="name"
              placeholder="name"
              id="name" 
              type="name"
              className="w-full mt-2 p-2 border rounded-2xl focus:outline-none bg-white border-gray-300  focus:ring-2 focus:ring-indigo-500"
              value={orderForm.values.name}
              onChange={orderForm.handleChange}
              required  />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email:</Label>
                <Input name="email"
                placeholder="email"
                id="email" 
                type="email"
                className="w-full mt-2 p-2 border rounded-2xl focus:outline-none bg-white border-gray-300  focus:ring-2 focus:ring-indigo-500"
              value={orderForm.values.email}
              onChange={orderForm.handleChange}
              required/>
              </div>
              <div>
                <Label htmlFor="phone">Phone :</Label>
                <Input name="phone"
                placeholder="phone"
                id="phone"
                type="tel"
                className="w-full mt-2 p-2 border rounded-2xl focus:outline-none bg-white border-gray-300  focus:ring-2 focus:ring-indigo-500"
              value={orderForm.values.phone}
              onChange={orderForm.handleChange}
              required/>
              </div>
            </div>

          </div>
        </div>

        {/* Order Details */}
        <div className="space-y-6">
          <h2 className="font-semibold">Order Details</h2>
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="grid grid-cols-2 gap-2">
                <Input placeholder="Description"
                id="details"
                value={orderForm.values.details}
                onChange={orderForm.handleChange}
                />
              </div>
            ))}

          </div>
        </div>



        {/* Bottom Sections */}
        <div className="grid grid-cols-3 gap-4">
          {/* Delivery */}
          <div className="space-y-2">
            <h3 className="font-semibold">Delivery</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="local-drop" />
                <label htmlFor="local-drop">Local Drop off</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="local-pickup" />
                <label htmlFor="local-pickup">Local Pick up</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="shipping" />
                <label htmlFor="shipping">Shipping</label>
              </div>
              <div>
                <Label htmlFor="ship-number">Ship N:</Label>
                <Input id="ship-number" />
              </div>
              <div>
                <Label htmlFor="ship-date">Ship Date:</Label>
                <Input id="ship-date" type="date" />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="space-y-2">
            <h3 className="font-semibold">Payment</h3>
            <RadioGroup defaultValue="cash">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cash" id="cash" />
                <label htmlFor="cash">Cash</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <label htmlFor="card">Card</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paytm" id="paytm" />
                <label htmlFor="paypal">Paytm</label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <label htmlFor="other">Other</label>
              </div>
            </RadioGroup>
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <h3 className="font-semibold">Amount</h3>
            <div className="space-y-2">

              <div>
                <Label htmlFor="taxes">Taxes:</Label>
                <Input
                  id="taxes"
                  type="number"
                  step="0.01"
                  value={orderForm.values.taxes}
                  onChange={orderForm.handleChange}
                  required
                
                />
              </div>

              <div>
                <Label htmlFor="total">Total:</Label>
                <Input id="total" type="number" step="0.01" 
                
                value={orderForm.values.total}
                onChange={orderForm.handleChange}
                required />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-2xl font-bold mt-6">
          Thank you
        </div>

        <Button className="w-full py-3 px-6 rounded-2xl text-lg font-semibold text-white  bg-lime-600 hover:bg-lime-700 transition-all duration-300 ">Submit Order</Button>
      </CardContent>
    </Card>
  )
}

