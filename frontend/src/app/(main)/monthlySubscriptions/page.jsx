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
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Users, UserPlus, UserMinus, Crown } from "lucide-react"

const monthlySubscriptionData = [
  { month: "Jan", newSubs: 245, canceledSubs: 32, netGrowth: 213, totalSubs: 2350 },
  { month: "Feb", newSubs: 312, canceledSubs: 45, netGrowth: 267, totalSubs: 2617 },
  { month: "Mar", newSubs: 189, canceledSubs: 67, netGrowth: 122, totalSubs: 2739 },
  { month: "Apr", newSubs: 423, canceledSubs: 23, netGrowth: 400, totalSubs: 3139 },
  { month: "May", newSubs: 356, canceledSubs: 89, netGrowth: 267, totalSubs: 3406 },
  { month: "Jun", newSubs: 478, canceledSubs: 34, netGrowth: 444, totalSubs: 3850 },
  { month: "Jul", newSubs: 523, canceledSubs: 56, netGrowth: 467, totalSubs: 4317 },
  { month: "Aug", newSubs: 389, canceledSubs: 78, netGrowth: 311, totalSubs: 4628 },
  { month: "Sep", newSubs: 445, canceledSubs: 43, netGrowth: 402, totalSubs: 5030 },
  { month: "Oct", newSubs: 567, canceledSubs: 67, netGrowth: 500, totalSubs: 5530 },
  { month: "Nov", newSubs: 634, canceledSubs: 89, netGrowth: 545, totalSubs: 6075 },
  { month: "Dec", newSubs: 712, canceledSubs: 45, netGrowth: 667, totalSubs: 6742 },
]

const subscriptionTiers = [
  { name: "Basic", value: 3245, color: "#8884d8" },
  { name: "Pro", value: 2156, color: "#82ca9d" },
  { name: "Enterprise", value: 1341, color: "#ffc658" },
]

const churnData = [
  { month: "Jan", churnRate: 1.4 },
  { month: "Feb", churnRate: 1.7 },
  { month: "Mar", churnRate: 2.4 },
  { month: "Apr", churnRate: 0.7 },
  { month: "May", churnRate: 2.6 },
  { month: "Jun", churnRate: 0.9 },
  { month: "Jul", churnRate: 1.3 },
  { month: "Aug", churnRate: 1.7 },
  { month: "Sep", churnRate: 0.9 },
  { month: "Oct", churnRate: 1.2 },
  { month: "Nov", churnRate: 1.5 },
  { month: "Dec", churnRate: 0.7 },
]

export default function MonthlySubscriptionsPage() {
  const totalNewSubs = monthlySubscriptionData.reduce((sum, month) => sum + month.newSubs, 0)
  const totalCanceled = monthlySubscriptionData.reduce((sum, month) => sum + month.canceledSubs, 0)
  const avgChurnRate = churnData.reduce((sum, month) => sum + month.churnRate, 0) / churnData.length
  const currentSubs = monthlySubscriptionData[monthlySubscriptionData.length - 1].totalSubs

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Monthly Subscriptions Analysis</h1>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentSubs.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Current active subscribers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Subscriptions</CardTitle>
            <UserPlus className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalNewSubs.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cancellations</CardTitle>
            <UserMinus className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCanceled.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Churn Rate</CardTitle>
            <Crown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgChurnRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">Monthly average</p>
          </CardContent>
        </Card>
      </div>

      {/* Subscription Growth Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Subscription Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlySubscriptionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="newSubs" fill="#82ca9d" name="New Subscriptions" />
              <Bar dataKey="canceledSubs" fill="#ff7c7c" name="Cancellations" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Subscription Tiers */}
        <Card>
          <CardHeader>
            <CardTitle>Subscription Tiers Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={subscriptionTiers}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {subscriptionTiers.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Churn Rate */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Churn Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={churnData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, "Churn Rate"]} />
                <Line type="monotone" dataKey="churnRate" stroke="#ff7c7c" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Total Subscribers Growth */}
      <Card>
        <CardHeader>
          <CardTitle>Total Subscribers Growth Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlySubscriptionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [value.toLocaleString(), "Total Subscribers"]} />
              <Line type="monotone" dataKey="totalSubs" stroke="#8884d8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
