# Pre-Launch Fixes Report: Sutra Health

**Status after fixes: READY, with a short list of owner actions below (read section 4 first).**

How this was checked:
- Production build: `next build` passes, 87 pages generated.
- TypeScript check passes.
- I read the generated HTML of all 76 pages: **0 duplicate titles, every canonical matches its own URL, exactly one H1 per page** (except the noindex doctor dashboard).
- Lint: 12 errors before, 10 after. The remaining 10 were already there and do not stop the build.
- Not done: Lighthouse / real-phone test, and live Supabase checks. I cannot reach those from here.

---

## 1. What was fixed and where

| # | Issue | What I did | Files |
|---|---|---|---|
| 1 | Booking page had no metadata and inherited the homepage canonical | Page is now a small server file with its own title, description, canonical `/book-appointment` and share image. The form code stays in the existing client component. | `app/book-appointment/page.tsx` (rewritten), `components/booking/BookAppointmentClient.tsx` |
| 2 | Root layout set canonical `/` for every page | Removed it. Added a default share image instead. | `app/layout.tsx` |
| 3 | Fake-looking testimonials | Removed the 4 generic ones (Rahul Sharma, Priya Verma, Ankit Mehta, Neha Kapoor). 4 remain. | `app/patient-stories/page.tsx` |
| 4 | Patient data read from the browser | New server route checks the doctor's login, then reads appointments. Dashboard now calls it. The browser no longer queries the `appointments` table. | `app/api/doctor/appointments/route.ts` (new), `app/doctor-dashboard/page.tsx` |
| 5 | Dead link `/resources/health-guides` | Removed that card. It duplicated the "Health Articles" card, which already links to `/resources/articles`. | `app/resources/page.tsx` |
| 6 | Hero main button was the quiz | Main button is now **Book a Consultation**. Second button is **Take the Lifestyle Assessment**. | `app/page.tsx` |
| 7 | Hero did not say what, where, who | New H1: "Doctor-led lifestyle healthcare in Faridabad". Short line below says what the doctor looks at. Added "Led by Dr. Rakesh Sarwal · MBBS, MPH, DrPH (Johns Hopkins)" under the buttons. | `app/page.tsx` |
| 8 | Heavy hero video, no poster | Video 4.9 MB → 0.97 MB, added poster image (74 KB). Phones and "reduce motion" users never download the video. Same for the yoga page video (4.1 MB → 0.89 MB). | `components/shared/HeroVideo.tsx` (new), `public/videos/*`, `public/images/hero-poster.webp` (new), `app/page.tsx`, `app/services/therapeutic-yoga/yoga-asana-protocol/page.tsx` |
| 9 | Login/dashboard pages could be indexed | Added `noindex, nofollow`. Verified in built HTML. | `app/doctor-login/layout.tsx`, `app/doctor-dashboard/layout.tsx` (new) |
| 10 | Doctor email visible in browser code | Removed all use of `NEXT_PUBLIC_DOCTOR_EMAIL`. Server checks `DOCTOR_EMAIL` only. | `app/doctor-login/page.tsx`, `app/doctor-dashboard/page.tsx` |
| 11 | No spam protection on booking | Hidden honeypot field plus rate limit (5 tries per 10 minutes per visitor). | `app/api/appointments/route.ts`, `components/booking/BookAppointmentClient.tsx` |
| 12 | No local business schema | Added `MedicalClinic` (name, phone, address, social links) to the homepage. | `app/page.tsx` |
| 13 | No doctor schema | Dr. Sarwal is now `Physician` with credentials and Johns Hopkins. | `app/doctors/page.tsx` |
| 14 | Unknown slug `metabolic-health` | Replaced with `diabetes-blood-sugar` (duplicates removed). Deleted the unused duplicate subpages file. | `data/services.ts`, `data/conditions/subpages/metabolic-health.ts` (deleted) |
| 17 | Huge images | 13 images resized to max 1920px wide. **Public folder 21 MB → 8.1 MB.** Example: `about.webp` was 6000×4000. | `public/images/**` |
| 18 | Text at 9–11px | 200 uses changed to 12px minimum. | `app/**`, `components/**`, `app/globals.css` |
| 19 | Font Awesome loaded from a CDN | Removed CDN link. Footer icons now come from the npm packages (no extra network request). | `app/layout.tsx`, `components/layout/Footer.tsx`, `package.json`, `package-lock.json` |
| 20 | Weak share images | New real 1200×630 branded `og-image.webp`. Added images to Conditions and Retreat pages. | `public/images/og-image.webp`, `app/conditions/page.tsx`, `app/retreat-programs/page.tsx` |
| 22 | Menu typo | "Explore A Services" → "Explore All Services". | `components/layout/Header.tsx` |
| 23 | Commented-out paragraph | Deleted. | `app/page.tsx` |
| 24 | Stray files | Deleted `thumbnails.zip`, `services.zip`, 5 unused starter SVGs. | `public/`, `app/` |
| 25 | Same sitemap date on every page | Removed the fake date. Articles keep their real dates. | `app/sitemap.ts` |
| 28 | Named bots ignored the private-page rules | Disallow list now repeated for each bot. | `app/robots.ts` |
| 29 | Video label conflict | Gone with the new video component. | `components/shared/HeroVideo.tsx` |

## 2. New problems found while fixing (not in my first report)

| Issue | Severity | Fix | File(s) |
|---|---|---|---|
| **30 pages had a doubled brand in the title**, e.g. "Physician Consultation in Faridabad \| Sutra Health \| Sutra Health". The layout adds the suffix to titles that already had it. | High | Those pages now set the title as `{ absolute: ... }`. Verified: 0 left. | 30 files under `app/services/**`, `app/contact`, `app/retreat-programs` |
| **Wrong canonical on Yoga Asana page**: pointed to `/yoga-asana-protocol` (does not exist) instead of `/services/therapeutic-yoga/yoga-asana-protocol`. | High | Fixed. Also added breadcrumb schema (it had none). | `app/services/therapeutic-yoga/yoga-asana-protocol/page.tsx` |
| Retreat page had two H1 tags | Low | Page heading changed to H2. | `app/retreat-programs/page.tsx` |
| `.env.example` was missing | Low | Added, plus `.gitignore` exception. | `.env.example`, `.gitignore` |

## 3. Corrections to my first report

- **Weight Management and Women's Health are not thin.** I read them: both have a full introduction, concerns and lifestyle sections. They only lack deep-dive subpages. I left them live in the nav and sitemap. Issue 15 is closed.
- **The 3 pages I said had no H1 are fine.** The H1 sits inside their client components.
- Issue 26 (Lora font weight) I did not change. Check bold headings on a phone.

## 4. Owner actions before launch (I could not do these)

1. **Lock down the appointments table in Supabase.** The dashboard no longer reads it from the browser, so you can block public reads. Run in the Supabase SQL editor:
   ```sql
   alter table public.appointments enable row level security;
   -- Do NOT add any select policy for anon or authenticated users.
   -- Your server routes use the secret key, which bypasses these rules.
   ```
   Then log in to the dashboard and make a test booking. If both work, you are safe. Do the same check for `availability_schedule`, `availability_overrides` and `blocked_dates`.
2. **Set `DOCTOR_EMAIL` on your host** (Vercel etc.). Delete `NEXT_PUBLIC_DOCTOR_EMAIL`. Without `DOCTOR_EMAIL`, nobody can open the dashboard.
3. **Confirm consent for the 4 remaining testimonials** (Puneet Kulshrestha, Adheer Dixit, Sumit Kashyap, Flor Riboldi). If you have no permission, remove them.
4. **Pick one contact email.** The site uses `equal.society@gmail.com` in the footer and contact page, and `info@lifequality.org.in` on the volunteer page. A Gmail address on a medical site lowers trust. I did not change it because I cannot know which mailbox exists.
5. **Decide the domain.** Domain is `lifequality.org.in`, brand is "Sutra Health". Choose now. Changing later hurts SEO.
6. **Run Lighthouse on mobile** after deploying, and test the booking form on a real phone.
7. **Run `npm install`** once (packages changed: added `@fortawesome/free-brands-svg-icons`).

## 5. Known limits of what I did

- **Rate limit memory is per server instance.** It stops casual spam. For strong protection add Cloudflare Turnstile or Upstash Redis.
- **Opening hours are not in the schema.** Your contact page says "Hours of presence" (community hours), not clinic hours. I did not want to publish the wrong hours to Google. Add them once you confirm.
- **Raw `<img>` tags and CSS background images** on some pages still skip Next's image optimizer. I fixed the biggest cost (file size) but did not convert them. Lower priority.
- **Pre-existing lint errors (10)** remain, mostly an apostrophe rule and a setState-in-effect warning in `Header.tsx`. They do not affect the build.
- **API files read env vars when the build starts**, so a build without Supabase variables fails. This was already true. Make sure your host has them set at build time.
- **Fonts:** the sandbox could not reach Google Fonts, so I verified the build with the fonts stubbed in a throwaway copy. The deliverable still uses your real Google Fonts setup.
