# IT Rehub - сайт

Next.js 16, статический экспорт. Сайт - одна страница на язык (`/ru/`, `/kk/`, `/en/`), меню прокручивает к блокам; корень `/` сам выбирает язык.

- Порядок блоков: `app/[lang]/page.tsx` (номера блоков считаются автоматически)
- Тексты всех языков: `lib/dictionaries/{ru,kk,en}.ts`
- Контакты (WhatsApp, телефон, почта, домен): `lib/site.ts`
- Стили и цвета бренда: `app/globals.css` (переменные в `:root`)
- Картинка превью ссылки (WhatsApp, Telegram): `app/[lang]/og.png/route.tsx`

## Команды

```bash
npm run dev       # локально
npm run package   # сборка в out/ + архив it-rehub-site.zip для загрузки на хостинг
```

## Выкладка

Содержимое `out/` (или распакованный `it-rehub-site.zip`) загружается в корень сайта как есть.

- **cPanel / ISPmanager (ps.kz, hoster.kz и т.п.)**: загрузить архив в `public_html`, распаковать там.
  Файл `.htaccess` уже внутри: 404-страница, кэш. После выпуска SSL раскомментировать в нём редирект на https.
- **Cloudflare Workers + GitHub** (автосборка при `git push`): настройки берутся из `wrangler.jsonc`.
  В Settings → Build: Build command `npm run build`, Deploy command `npx wrangler deploy`. Имя воркера должно совпадать с `name` в `wrangler.jsonc`.
- **Cloudflare Pages**: Create project → Direct Upload → папка `out`. Файл `_headers` подхватится сам.
- **nginx**: `root` на папку, `error_page 404 /404.html;`, `try_files $uri $uri/ =404;`.

Домен в метатегах, sitemap и превью: `https://it-rehub.tech` (меняется в `lib/site.ts`).
