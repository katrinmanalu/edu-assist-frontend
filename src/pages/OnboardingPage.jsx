import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function OnboardingPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nama: '',
    usia: '',
    levelPendidikan: '',
    preferensiTone: ''
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit() {
    localStorage.setItem('userProfile', JSON.stringify(form))
    navigate('/chat')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          {/* Font diperbesar sewajarnya (text-xl) dan semi-bold */}
          <CardTitle className="text-xl font-semibold">
            Hai! Kenalan dulu yuu 👋
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label>Nama</Label>
            <Input name="nama" placeholder="Nama kamu" onChange={handleChange} />
          </div>
          <div className="space-y-1.5">
            <Label>Usia</Label>
            <Input name="usia" type="number" placeholder="Usia kamu" onChange={handleChange} />
          </div>
          <div className="space-y-1.5">
            <Label>Level Pendidikan</Label>
            <Input name="levelPendidikan" placeholder="SMA / D3 / S1 / dst" onChange={handleChange} />
          </div>
          <div className="space-y-1.5">
            <Label>Preferensi Tone</Label>
            <Input name="preferensiTone" placeholder="Formal / Santai / Singkat" onChange={handleChange} />
          </div>
          <Button className="w-full mt-2" onClick={handleSubmit}>Mulai Belajar →</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default OnboardingPage
