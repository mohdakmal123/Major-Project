"use client"

import React, { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ShoppingCart } from "lucide-react"

// Simulated data for browsing items
const items = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 50 },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 100 },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 150 },
  { id: 4, name: 'Product 4', description: 'Description of Product 4', price: 200 },
  { id: 5, name: 'Product 5', description: 'Description of Product 5', price: 250 },
]

export default function BrowseTemplate() {
  const [search, setSearch] = useState('')
  const [filteredItems, setFilteredItems] = useState(items)

  useEffect(() => {
    setFilteredItems(
      items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search])

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Browse Template</h1>
          <Button variant="secondary" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </Button>
        </div>
      </nav>

      {/* Search Bar and Items */}
      <main className="container mx-auto my-8 px-4">
        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search items"
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Browse Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-green-600 font-semibold">${item.price}</span>
                <Button>Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">No items found. Try a different search term.</p>
        )}
      </main>
    </div>
  )
}