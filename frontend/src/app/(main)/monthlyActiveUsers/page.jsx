"use client"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Users, Activity } from "lucide-react"

const monthlyActiveUsersData = [
  { month: "Jan", mau: 12450, dau: 4200, wau: 8900, newUsers: 1200 },
  { month: "Feb", mau: 13780, dau: 4650, wau: 9800, newUsers: 1330 },
  { month: "Mar", mau: 15200, dau: 5100, wau: 10900, newUsers: 1420 },
  { month: "Apr", mau: 16890, dau: 5680, wau: 12100, newUsers: 1690 },
  { month: "May", mau: 18340, dau: 6200, wau: 13200, newUsers: 1450 },
  { month: "Jun", mau: 20150, dau: 6800, wau: 14500, newUsers: 1810 },
  { month: "Jul", mau: 22300, dau: 7500, wau: 16000, newUsers: 2150 },
  { month: "Aug", mau: 24680, dau: 8300, wau: 17700, newUsers: 2380 },
  { month: "Sep", mau: 26900, dau: 9100, wau: 19300, newUsers: 2220 },
  { month: "Oct", mau: 29450, dau: 9950, wau: 21100, newUsers: 2550 },
  { month: "Nov", mau: 32100, dau: 10800, wau: 23000, newUsers: 2650 },
  { month: "Dec", mau: 35200, dau: 11900, wau: 25200, newUsers: 3100 },
]

const deviceBreakdown = [
  { month: "Jan", mobile: 7470, desktop: 4980 },
  { month: "Feb", mobile: 8268, desktop: 5512 },
  { month: "Mar", mobile: 9120, desktop: 6080 },
  { month: "Apr", mobile: 10134, desktop: 6756 },
  { month: "May", mobile: 11004, desktop: 7336 },
  { month: "Jun", mobile: 12090, desktop: 8060 },
  { month: "Jul", mobile: 13380, desktop: 8920 },
  { month: "Aug", mobile: 14808, desktop: 9872 },
  { month: "Sep", mobile: 16140, desktop: 10760 },
  { month: "Oct", mobile: 17670, desktop: 11780 },
  { month: "Nov", mobile: 19260, desktop: 12840 },
  { month: "Dec", mobile: 21120, desktop: 14080 },
]

const engagementData = [
  { month: "Jan", avgSessionTime: 8.5, pageViews: 4.2, bounceRate: 35.2 },
  { month: "Feb", avgSessionTime: 9.1, pageViews: 4.6, bounceRate: 32.8 },
  { month: "Mar", avgSessionTime: 9.8, pageViews: 5.1, bounceRate: 30.5 },
  { month: "Apr", avgSessionTime: 10.2, pageViews: 5.4, bounceRate: 28.9 },
  { month: "May", avgSessionTime: 10.8, pageViews: 5.8, bounceRate: 27.3 },
  { month: "Jun", avgSessionTime: 11.3, pageViews: 6.2, bounceRate: 25.7 },
  { month: "Jul", avgSessionTime: 11.9, pageViews: 6.7, bounceRate: 24.1 },
  { month: "Aug", avgSessionTime: 12.4, pageViews: 7.1, bounceRate: 22.8 },
  { month: "Sep", avgSessionTime: 12.8, pageViews: 7.5, bounceRate: 21.5 },
  { month: "Oct", avgSessionTime: 13.2, pageViews: 7.9, bounceRate: 20.3 },
  { month: "Nov", avgSessionTime: 13.7, pageViews: 8.3, bounceRate: 19.1 },
  { month: "Dec", avgSessionTime: 14.1, pageViews: 8.7, bounceRate: 18.2 },
]

export default function MonthlyActiveUsersPage() {
  const currentMAU = monthlyActiveUsersData[monthlyActiveUsersData.length - 1].mau
  const currentDAU = monthlyActiveUsersData[monthlyActiveUsersData.length - 1].dau
  const totalNewUsers = monthlyActiveUsersData.reduce((sum, month) => sum + month.newUsers, 0)
  const avgEngagement = engagementData[engagementData.length - 1].avgSessionTime

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Monthly Active Users Analysis</h1>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentMAU.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Current month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Active Users</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentDAU.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Average this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Users</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalNewUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Session Time</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgEngagement.toFixed(1)}m</div>
            <p className="text-xs text-muted-foreground">Current month</p>
          </CardContent>
        </Card>
      </div>

      {/* MAU Growth Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Active Users Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={monthlyActiveUsersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [value.toLocaleString(), ""]} />
              <Area type="monotone" dataKey="mau" stackId="1" stroke="#8884d8" fill="#8884d8" name="MAU" />
              <Area type="monotone" dataKey="wau" stackId="2" stroke="#82ca9d" fill="#82ca9d" name="WAU" />
              <Area type="monotone" dataKey="dau" stackId="3" stroke="#ffc658" fill="#ffc658" name="DAU" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Device Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Device Usage Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={deviceBreakdown}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [value.toLocaleString(), ""]} />
                <Bar dataKey="mobile" fill="#8884d8" name="Mobile" />
                <Bar dataKey="desktop" fill="#82ca9d" name="Desktop" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* New Users */}
        <Card>
          <CardHeader>
            <CardTitle>New User Acquisition</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyActiveUsersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [value.toLocaleString(), "New Users"]} />
                <Line type="monotone" dataKey="newUsers" stroke="#82ca9d" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Engagement Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>User Engagement Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="avgSessionTime"
                stroke="#8884d8"
                strokeWidth={2}
                name="Avg Session Time (min)"
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="pageViews"
                stroke="#82ca9d"
                strokeWidth={2}
                name="Page Views per Session"
              />
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
  )
}
