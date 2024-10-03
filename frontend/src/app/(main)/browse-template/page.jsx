'use client'
import React from 'react'

const BrowseTemplate = () => {
  return (
    <div>
        
        <div classname="flex h-screen bg-background">
    {"{"}/* Sidebar */{"}"}
    <aside classname="w-64 border-r">
      <div classname="flex h-14 items-center border-b px-4">
        <button variant="ghost" size="icon" classname="mr-2">
          <menu classname="h-6 w-6">
            <span classname="sr-only">Toggle sidebar</span>
          </menu>
        </button>
        <h1 classname="text-lg font-semibold">Browse App</h1>
      </div>
      <scrollarea classname="h-[calc(100vh-3.5rem)]">
        <nav classname="space-y-2 p-2">
          <button variant="ghost" classname="w-full justify-start">
            <home classname="mr-2 h-4 w-4">Home</home>
          </button>
          <button variant="ghost" classname="w-full justify-start">
            <folder classname="mr-2 h-4 w-4">Projects</folder>
          </button>
          <button variant="ghost" classname="w-full justify-start">
            <settings classname="mr-2 h-4 w-4">Settings</settings>
          </button>
          <button variant="ghost" classname="w-full justify-start">
            <helpcircle classname="mr-2 h-4 w-4">Help</helpcircle>
          </button>
        </nav>
      </scrollarea>
    </aside>
    <div classname="flex flex-col flex-1">
      {"{"}/* Header */{"}"}
      <header classname="flex h-14 items-center gap-4 border-b px-6">
        <form classname="flex-1">
          <div classname="relative">
            <search classname="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
              <input
                classname="w-full bg-background pl-8 sm:w-[300px]"
                placeholder="Search..."
                type="search"
              />
            </search>
          </div>
        </form>
        <button variant="ghost" size="icon">
          <bell classname="h-4 w-4">
            <span classname="sr-only">Notifications</span>
          </bell>
        </button>
        <button variant="ghost" size="icon">
          <user classname="h-4 w-4">
            <span classname="sr-only">Profile</span>
          </user>
        </button>
      </header>
      {"{"}/* Main Content */{"}"}
      <main classname="flex-1 overflow-auto p-6">
        <h2 classname="text-2xl font-bold mb-4">Browse Content</h2>
        <div classname="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {"{"}[...Array(6)].map((_, i) =&gt; (
          <div
            key="{i}"
            classname="rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            <div classname="p-6">
              <h3 classname="text-lg font-semibold">
                Item {"{"}i + 1{"}"}
              </h3>
              <p classname="text-sm text-muted-foreground">
                This is a brief description of Item {"{"}i + 1{"}"}. Click to
                view more details.
              </p>
            </div>
            <div classname="flex items-center p-6 pt-0">
              <button variant="ghost">View Details</button>
            </div>
          </div>
          )){"}"}
        </div>
      </main>
      {"{"}/* Footer */{"}"}
      <footer classname="border-t py-4 px-6">
        <p classname="text-center text-sm text-muted-foreground">
          © 2024 Browse App. All rights reserved.
        </p>
      </footer>
    </div>
  </div>

    </div>
  )
}

export default BrowseTemplate;