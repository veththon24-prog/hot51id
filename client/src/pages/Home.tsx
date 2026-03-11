import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, 
  Zap, 
  Shield, 
  Users, 
  Gift, 
  Smartphone,
  Play,
  Heart,
  MessageCircle,
  Star
} from "lucide-react";

/**
 * Design Philosophy: Modern Entertainment Platform
 * - Vibrant gradient backgrounds (purple to magenta to cyan)
 * - Bold, energetic typography with Poppins + Playfair Display
 * - Neon accents and glow effects for interactive elements
 * - Smooth transitions and hover animations
 * - Mobile-first responsive design
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Hot51
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-pink-400 transition">Fitur</a>
            <a href="#download" className="hover:text-pink-400 transition">Download</a>
            <a href="#faq" className="hover:text-pink-400 transition">FAQ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663282989537/HSFAJS4vFFfgsmYXfthAZa/hot51-hero-main-68iVrgzhM28229hKzj2wyw.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-slate-950 z-10" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold font-playfair leading-tight">
                Hot51 APK Terbaru 2026
              </h1>
              <p className="text-xl text-gray-300">
                Aplikasi live streaming bar bar nomor 1 di Indonesia dengan fitur HD, interaksi real-time, dan ribuan host berbakat.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://hot51.pet" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-full w-full"
                >
                  <Download className="mr-2" /> Download APK
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-full"
              >
                <Play className="mr-2" /> Pelajari Lebih Lanjut
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-pink-400">10M+</p>
                <p className="text-gray-400">Pengguna Aktif</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">4.8★</p>
                <p className="text-gray-400">Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">24/7</p>
                <p className="text-gray-400">Live Streaming</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden md:block">
            <div className="relative z-10">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663282989537/HSFAJS4vFFfgsmYXfthAZa/hot51-hero-main-68iVrgzhM28229hKzj2wyw.webp"
                alt="Hot51 Live Streaming Interface"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur-3xl opacity-20 -z-10 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663282989537/HSFAJS4vFFfgsmYXfthAZa/hot51-features-bg-nKwM9Spf3wMFrHATx6EGRn.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              Fitur Unggulan Hot51
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Nikmati pengalaman live streaming terbaik dengan teknologi terdepan dan fitur-fitur eksklusif
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Cards */}
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Streaming HD",
                description: "Kualitas video tinggi dengan resolusi HD tanpa buffering"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Chat Real-Time",
                description: "Berkomunikasi langsung dengan host dan penonton lainnya"
              },
              {
                icon: <Gift className="w-8 h-8" />,
                title: "Hadiah Virtual",
                description: "Kirim gift unik untuk mendukung host favorit Anda"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Komunitas Global",
                description: "Temukan teman baru dari berbagai belahan dunia"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Keamanan Data",
                description: "Enkripsi canggih untuk melindungi privasi Anda"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Event Spesial",
                description: "Tantangan harian dengan hadiah menarik setiap hari"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Konten Beragam",
                description: "Musik, tarian, gaming, talk show, dan banyak lagi"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Multi-Platform",
                description: "Tersedia untuk Android dan iOS dengan sinkronisasi sempurna"
              }
            ].map((feature, idx) => (
              <Card 
                key={idx}
                className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/30 hover:border-pink-500/60 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
              >
                <div className="text-pink-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hot51 MOD APK Section */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663282989537/HSFAJS4vFFfgsmYXfthAZa/hot51-cta-bg-XV6KhoGAjheAXsxHUgAc9T.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-purple-900/50 to-slate-950 z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair">
                Hot51 MOD APK
              </h2>
              <p className="text-xl text-gray-300">
                Nikmati semua fitur premium secara gratis dengan versi MOD yang dilengkapi fitur eksklusif
              </p>

              <div className="space-y-4">
                {[
                  "🔓 Unlock All Room - Akses semua ruang siaran tanpa batasan",
                  "🚫 No Ads - Streaming tanpa gangguan iklan",
                  "💰 Unlimited Coins - Koin gratis tanpa batas",
                  "👑 VIP Features - Semua fitur premium terbuka"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-purple-900/30 rounded-lg border border-purple-500/20">
                    <span className="text-2xl">{feature.split(' - ')[0]}</span>
                    <p className="text-gray-300">{feature.split(' - ')[1]}</p>
                  </div>
                ))}
              </div>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold rounded-full w-full"
              >
                Download Hot51 MOD APK
              </Button>
            </div>

            <div className="relative">
              <Card className="bg-gradient-to-br from-cyan-900/40 to-purple-900/40 border-cyan-500/30 p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-cyan-400">Perbandingan Versi</h3>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-purple-500/30">
                        <th className="text-left py-2">Fitur</th>
                        <th className="text-center py-2">Original</th>
                        <th className="text-center py-2">MOD</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      {[
                        ["Streaming HD", "✓", "✓"],
                        ["Chat Real-Time", "✓", "✓"],
                        ["Unlock All Room", "✗", "✓"],
                        ["No Ads", "✗", "✓"],
                        ["Unlimited Coins", "✗", "✓"],
                        ["VIP Access", "Berbayar", "✓"]
                      ].map((row, idx) => (
                        <tr key={idx} className="border-b border-purple-500/10">
                          <td className="py-2">{row[0]}</td>
                          <td className="text-center">{row[1]}</td>
                          <td className="text-center text-pink-400 font-bold">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold font-playfair mb-4">
              Siap Bergabung dengan Jutaan Pengguna?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Download Hot51 APK sekarang dan rasakan pengalaman live streaming yang tak terlupakan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://hot51.pet" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 font-bold rounded-full"
                >
                  <Download className="mr-2" /> Download untuk Android
                </Button>
              </a>
              <a href="https://mhot51.com" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="bg-white/20 text-white hover:bg-white/30 border border-white font-bold rounded-full"
                >
                  <Download className="mr-2" /> Download untuk iOS
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-400">
              Temukan jawaban untuk pertanyaan umum tentang Hot51
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="q1" className="w-full">
              <TabsList className="grid w-full grid-cols-1 bg-purple-900/30 border border-purple-500/30">
                <TabsTrigger value="q1" className="text-left">Apa itu Hot51 APK?</TabsTrigger>
              </TabsList>
              <TabsContent value="q1" className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-lg">
                <p className="text-gray-300">
                  Hot51 adalah aplikasi live streaming populer di Indonesia yang menawarkan hiburan interaktif, fitur live chat, dan pengalaman real-time dengan berbagai host berbakat dari seluruh dunia.
                </p>
              </TabsContent>

              <TabsList className="grid w-full grid-cols-1 bg-purple-900/30 border border-purple-500/30 mt-4">
                <TabsTrigger value="q2" className="text-left">Apa keunggulan Hot51 MOD APK?</TabsTrigger>
              </TabsList>
              <TabsContent value="q2" className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-lg">
                <p className="text-gray-300">
                  Hot51 MOD APK menawarkan fitur premium gratis seperti Unlock All Room (membuka semua ruang siaran), tanpa iklan (No Ads), dan koin gratis tanpa batas untuk pengalaman yang lebih maksimal.
                </p>
              </TabsContent>

              <TabsList className="grid w-full grid-cols-1 bg-purple-900/30 border border-purple-500/30 mt-4">
                <TabsTrigger value="q3" className="text-left">Bagaimana cara download Hot51 APK?</TabsTrigger>
              </TabsList>
              <TabsContent value="q3" className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-lg">
                <p className="text-gray-300">
                  Anda dapat mengunduh Hot51 APK melalui situs resmi Hot51 atau sumber pihak ketiga terpercaya. Pastikan mengaktifkan 'Sumber Tidak Dikenal' di pengaturan keamanan Android sebelum menginstal.
                </p>
              </TabsContent>

              <TabsList className="grid w-full grid-cols-1 bg-purple-900/30 border border-purple-500/30 mt-4">
                <TabsTrigger value="q4" className="text-left">Apakah Hot51 aman digunakan?</TabsTrigger>
              </TabsList>
              <TabsContent value="q4" className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-lg">
                <p className="text-gray-300">
                  Ya, Hot51 aman digunakan selama diunduh dari sumber resmi. Aplikasi ini menggunakan sistem enkripsi data untuk melindungi privasi dan informasi pribadi pengguna.
                </p>
              </TabsContent>

              <TabsList className="grid w-full grid-cols-1 bg-purple-900/30 border border-purple-500/30 mt-4">
                <TabsTrigger value="q5" className="text-left">Apakah Hot51 tersedia untuk iOS?</TabsTrigger>
              </TabsList>
              <TabsContent value="q5" className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-lg">
                <p className="text-gray-300">
                  Ya, Hot51 tersedia untuk pengguna iPhone/iOS. Anda dapat mengunduhnya melalui situs resmi dan mengikuti panduan instalasi profil konfigurasi di menu pengaturan perangkat.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-purple-500/20 bg-black/40 backdrop-blur-md py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Hot51
              </h3>
              <p className="text-gray-400 text-sm">
                Platform live streaming nomor 1 di Indonesia dengan jutaan pengguna aktif.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produk</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition">Hot51 APK</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Hot51 MOD APK</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Fitur</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Bantuan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#faq" className="hover:text-pink-400 transition">FAQ</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Panduan</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Dukungan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition">Privasi</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Syarat & Ketentuan</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Kontak</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Hot51 Official. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
