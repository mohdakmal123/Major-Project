'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, Download, Eye, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TemplateDetailsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="lg:w-2/3 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Template Name</h1>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(4.5 average, 24 ratings)</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Category 1</Badge>
            <Badge variant="secondary">Category 2</Badge>
            <Badge variant="secondary">Category 3</Badge>
          </div>

          <Card>
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Template Preview"
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-t-lg"
              />
              <div className="p-4 flex justify-between items-center">
                <Button variant="outline" className="text-blue-600">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="changelog">Changelog</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="text-sm text-muted-foreground">
              <p>
                This is a detailed description of the template. It includes information about its features,
                use cases, and any other relevant details that would help a potential user understand the
                template's capabilities and benefits.
              </p>
              <p className="mt-4">
                The description can be multiple paragraphs long, providing comprehensive information about
                the template's design, functionality, and potential applications.
              </p>
            </TabsContent>
            <TabsContent value="changelog" className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>Version 2.0: Added responsive design for mobile devices</li>
                <li>Version 1.5: Implemented dark mode support</li>
                <li>Version 1.2: Fixed minor bugs and improved performance</li>
                <li>Version 1.0: Initial release</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Template Details</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="font-medium">Created:</dt>
                  <dd>Jan 15, 2023</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Last Updated:</dt>
                  <dd>Mar 20, 2023</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Category:</dt>
                  <dd>Web Templates</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Compatible Browsers:</dt>
                  <dd>Chrome, Firefox, Safari</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Layout:</dt>
                  <dd>Responsive</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Files Included</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="list-disc pl-5 space-y-1">
                <li>HTML Files</li>
                <li>CSS Files</li>
                <li>JavaScript Files</li>
                <li>Documentation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Responsive</Badge>
                <Badge variant="outline">Bootstrap</Badge>
                <Badge variant="outline">Modern</Badge>
                <Badge variant="outline">Business</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Templates Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardContent className="p-0">
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=Template ${item}`}
                  alt={`Related Template ${item}`}
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Related Template {item}</h3>
                  <Link href="#" className="text-blue-600 hover:underline text-sm flex items-center">
                    View Details
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}