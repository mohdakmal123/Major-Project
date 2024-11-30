"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function OrderForm() {
  const [items, setItems] = useState([{ description: "", qty: "", unitPrice: "", totalPrice: "" }])
  const [subtotal, setSubtotal] = useState(0)
  const [taxes, setTaxes] = useState(0)
  const [shipping, setShipping] = useState(0)

  const calculateTotal = () => {
    return (subtotal + taxes + shipping).toFixed(2)
  }

  const addItem = () => {
    setItems([...items, { description: "", qty: "", unitPrice: "", totalPrice: "" }])
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">ORDER FORM</CardTitle>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="date">Date:</Label>
            <Input id="date" type="date" />
          </div>
          <div>
            <Label htmlFor="order">Order #:</Label>
            <Input id="order" />
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
              <Input id="name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email:</Label>
                <Input id="email" type="email" />
              </div>
              <div>
                <Label htmlFor="phone">Phone #:</Label>
                <Input id="phone" type="tel" />
              </div>
            </div>
            <div>
              <Label htmlFor="address">Address:</Label>
              <Input id="address" />
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="space-y-4">
          <h2 className="font-semibold">Order Details</h2>
          <div className="space-y-2">
            {items.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-2">
                <Input placeholder="Description" />
                <Input placeholder="Qty" type="number" className="w-full" />
                <Input placeholder="Unit Price" type="number" step="0.01" />
                <Input placeholder="Total Price" type="number" step="0.01"  />
              </div>
            ))}
            <Button variant="outline" onClick={addItem} className="w-full mt-2">
              Add Item
            </Button>
          </div>
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <Label htmlFor="notes">Notes:</Label>
          <Textarea id="notes" />
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
                <Label htmlFor="ship-number">Ship N#:</Label>
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
                <RadioGroupItem value="check" id="check" />
                <label htmlFor="check">Check</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <label htmlFor="paypal">PayPal</label>
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
                <Label htmlFor="subtotal">Subtotal:</Label>
                <Input 
                  id="subtotal" 
                  type="number" 
                  step="0.01" 
                  value={subtotal} 
                  onChange={(e) => setSubtotal(parseFloat(e.target.value) || 0)} 
                />
              </div>
              <div>
                <Label htmlFor="taxes">Taxes:</Label>
                <Input 
                  id="taxes" 
                  type="number" 
                  step="0.01" 
                  value={taxes} 
                  onChange={(e) => setTaxes(parseFloat(e.target.value) || 0)} 
                />
              </div>
              <div>
                <Label htmlFor="shipping-cost">Shipping:</Label>
                <Input 
                  id="shipping-cost" 
                  type="number" 
                  step="0.01" 
                  value={shipping} 
                  onChange={(e) => setShipping(parseFloat(e.target.value) || 0)} 
                />
              </div>
              <div>
                <Label htmlFor="total">Total:</Label>
                <Input id="total" type="number" step="0.01" value={calculateTotal()}  />
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

