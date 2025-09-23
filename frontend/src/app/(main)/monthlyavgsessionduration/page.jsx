"use client"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, TrendingUp, Users, Target } from "lucide-react"

const sessionDurationData = [
  { month: "Jan", avgDuration: 5.2, sessions: 45200, totalTime: 235040, bounceRate: 35.2 },
  { month: "Feb", avgDuration: 5.8, sessions: 52100, totalTime: 302180, bounceRate: 32.1 },
  { month: "Mar", avgDuration: 6.1, sessions: 48900, totalTime: 298290, bounceRate: 30.8 },
  { month: "Apr", avgDuration: 6.7, sessions: 61300, totalTime: 410710, bounceRate: 28.5 },
  { month: "May", avgDuration: 6.3, sessions: 58700, totalTime: 369810, bounceRate: 29.2 },
  { month: "Jun", avgDuration: 7.2, sessions: 67800, totalTime: 488160, bounceRate: 26.7 },
  { month: "Jul", avgDuration: 7.8, sessions: 72400, totalTime: 564720, bounceRate: 24.3 },
  { month: "Aug", avgDuration: 7.1, sessions: 69300, totalTime: 492030, bounceRate: 25.8 },
  { month: "Sep", avgDuration: 8.2, sessions: 78500, totalTime: 643700, bounceRate: 22.1 },
  { month: "Oct", avgDuration: 8.6, sessions: 82300, totalTime: 707780, bounceRate: 20.9 },
  { month: "Nov", avgDuration: 9.1, sessions: 89700, totalTime: 816270, bounceRate: 19.4 },
  { month: "Dec", avgDuration: 9.8, sessions: 95400, totalTime: 934920, bounceRate: 17.8 },
]

const deviceSessionData = [
  { month: "Jan", mobile: 4.8, desktop: 6.2, tablet: 5.5 },
  { month: "Feb", mobile: 5.3, desktop: 6.9, tablet: 6.1 },
  { month: "Mar", mobile: 5.6, desktop: 7.2, tablet: 6.4 },
  { month: "Apr", mobile: 6.1, desktop: 7.8, tablet: 6.9 },
  { month: "May", mobile: 5.8, desktop: 7.4, tablet: 6.6 },
  { month: "Jun", mobile: 6.6, desktop: 8.3, tablet: 7.4 },
  { month: "Jul", mobile: 7.1, desktop: 9.0, tablet: 8.0 },
  { month: "Aug", mobile: 6.5, desktop: 8.2, tablet: 7.3 },
  { month: "Sep", mobile: 7.5, desktop: 9.4, tablet: 8.4 },
  { month: "Oct", mobile: 7.8, desktop: 9.9, tablet: 8.8 },
  { month: "Nov", mobile: 8.3, desktop: 10.5, tablet: 9.3 },
  { month: "Dec", mobile: 8.9, desktop: 11.2, tablet: 10.0 },
]

const pageTypeData = [
  { month: "Jan", homepage: 3.2, product: 6.8, blog: 8.5, checkout: 4.1 },
  { month: "Feb", homepage: 3.5, product: 7.2, blog: 9.1, checkout: 4.4 },
  { month: "Mar", homepage: 3.8, product: 7.6, blog: 9.4, checkout: 4.7 },
  { month: "Apr", homepage: 4.1, product: 8.2, blog: 10.2, checkout: 5.1 },
  { month: "May", homepage: 3.9, product: 7.8, blog: 9.8, checkout: 4.9 },
  { month: "Jun", homepage: 4.4, product: 8.9, blog: 11.1, checkout: 5.6 },
  { month: "Jul", homepage: 4.8, product: 9.6, blog: 12.0, checkout: 6.1 },
  { month: "Aug", homepage: 4.3, product: 8.7, blog: 10.9, checkout: 5.5 },
  { month: "Sep", homepage: 5.0, product: 10.2, blog: 12.8, checkout: 6.5 },
  { month: "Oct", homepage: 5.2, product: 10.7, blog: 13.4, checkout: 6.8 },
  { month: "Nov", homepage: 5.6, product: 11.4, blog: 14.2, checkout: 7.3 },
  { month: "Dec", homepage: 6.0, product: 12.1, blog: 15.1, checkout: 7.8 },
]

export default function MonthlyAvgSessionDurationPage() {
  const currentDuration = sessionDurationData[sessionDurationData.length - 1].avgDuration
  const yearStart = sessionDurationData[0].avgDuration
  const improvement = ((currentDuration - yearStart) / yearStart) * 100
  const totalSessions = sessionDurationData.reduce((sum, month) => sum + month.sessions, 0)
  const avgBounceRate =
    sessionDurationData.reduce((sum, month) => sum + month.bounceRate, 0) / sessionDurationData.length

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Monthly Average Session Duration Analysis</h1>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Avg Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentDuration.toFixed(1)}m</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Year-over-Year Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{improvement.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">Since January</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalSessions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Bounce Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgBounceRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">Monthly average</p>
          </CardContent>
        </Card>
      </div>

      {/* Session Duration Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Average Session Duration Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={sessionDurationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} minutes`, "Avg Duration"]} />
              <Area type="monotone" dataKey="avgDuration" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Device Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Session Duration by Device</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={deviceSessionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value} minutes`, ""]} />
                <Line type="monotone" dataKey="desktop" stroke="#8884d8" strokeWidth={2} name="Desktop" />
                <Line type="monotone" dataKey="mobile" stroke="#82ca9d" strokeWidth={2} name="Mobile" />
                <Line type="monotone" dataKey="tablet" stroke="#ffc658" strokeWidth={2} name="Tablet" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Sessions vs Bounce Rate */}
        <Card>
          <CardHeader>
            <CardTitle>Sessions vs Bounce Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sessionDurationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="sessions" fill="#8884d8" name="Sessions" />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="bounceRate"
                  stroke="#ff7c7c"
                  strokeWidth={2}
                  name="Bounce Rate (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Page Type Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Session Duration by Page Type</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={pageTypeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} minutes`, ""]} />
              <Bar dataKey="homepage" fill="#8884d8" name="Homepage" />
              <Bar dataKey="product" fill="#82ca9d" name="Product Pages" />
              <Bar dataKey="blog" fill="#ffc658" name="Blog Posts" />
              <Bar dataKey="checkout" fill="#ff7c7c" name="Checkout" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Total Time Spent */}
      <Card>
        <CardHeader>
          <CardTitle>Total Time Spent on Site</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={sessionDurationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${Math.round(value / 60).toLocaleString()} hours`, "Total Time"]} />
              <Area type="monotone" dataKey="totalTime" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
