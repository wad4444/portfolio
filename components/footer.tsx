import React from 'react'

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small>
        &copy; {new Date().getFullYear()} wad4444. All rights reserved.
      </small>
      <p>Built with Next.Js, Typescript, Tailwind CSS and Lots Of ♥ ;)</p>
    </footer>
  )
}
