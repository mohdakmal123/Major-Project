"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, TrendingUp, TrendingDown } from "lucide-react"

const monthlyRevenueData = [
  { month: "Jan", revenue: 45231, growth: 12.5 },
  { month: "Feb", revenue: 52180, growth: 15.4 },
  { month: "Mar", revenue: 48920, growth: -6.2 },
  { month: "Apr", revenue: 61340, growth: 25.4 },
  { month: "May", revenue: 58750, growth: -4.2 },
  { month: "Jun", revenue: 67890, growth: 15.6 },
  { month: "Jul", revenue: 72450, growth: 6.7 },
  { month: "Aug", revenue: 69320, growth: -4.3 },
  { month: "Sep", revenue: 78560, growth: 13.3 },
  { month: "Oct", revenue: 82340, growth: 4.8 },
  { month: "Nov", revenue: 89750, growth: 9.0 },
  { month: "Dec", revenue: 95420, growth: 6.3 },
]

const quarterlyData = [
  { quarter: "Q1", revenue: 146331, target: 150000 },
  { quarter: "Q2", revenue: 187980, target: 180000 },
  { quarter: "Q3", revenue: 220330, target: 210000 },
  { quarter: "Q4", revenue: 267510, target: 250000 },
]

export default function MonthlyRevenuePage() {
  const totalRevenue = monthlyRevenueData.reduce((sum, month) => sum + month.revenue, 0)
  const avgGrowth = monthlyRevenueData.reduce((sum, month) => sum + month.growth, 0) / monthlyRevenueData.length

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Monthly Revenue Analysis</h1>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Annual Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all months</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Growth</CardTitle>
            {avgGrowth > 0 ? (
              <TrendingUp className="h-4 w-4 text-green-600" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-600" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgGrowth.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">Month over month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Best Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">December</div>
            <p className="text-xs text-muted-foreground">${monthlyRevenueData[11].revenue.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Average</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${Math.round(totalRevenue / 12).toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Per month</p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Revenue Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]} />
              <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Growth Rate Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Growth Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}%`, "Growth Rate"]} />
              <Line type="monotone" dataKey="growth" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Quarterly Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Quarterly Performance vs Targets</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={quarterlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, ""]} />
              <Bar dataKey="revenue" fill="#8884d8" name="Actual Revenue" />
              <Bar dataKey="target" fill="#82ca9d" name="Target Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
