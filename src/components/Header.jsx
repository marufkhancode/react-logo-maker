import React from 'react'
import { Button } from "./ui/button"
import { Download } from 'lucide-react'

function Header({ DownloadIcon }) {
  return (
    <div className='p-4 shadow-sm border flex justify-between items-center'>
      <h2>Logo Maker</h2>
      <img src="/logo.svg" alt="" />
      <Button className="flex gap-2 items-center" onClick={() => DownloadIcon(Date.now())}> <Download className='h-4 w-4'></Download>Download</Button>
    </div>
  )
}

export default Header