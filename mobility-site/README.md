# Skipr mobility site (static)

Three standalone landing pages, no build step. Deploy the `mobility-site/`
folder as a static project (e.g. a dedicated Vercel project with its
**Root Directory** set to `mobility-site/`).

## Pages

| File | Page |
| ---- | ---- |
| `skipr-mobility-budget.html` | Federal mobility budget (landing, served at `/`) |
| `my-mobility-program.html` | User experiences, My mobility program |
| `my-payment-methods.html` | User experiences, My payment methods |

Shared assets: `skipr-logo.svg`, `card.svg`, `transaction.svg`.

## Notes

- Fonts (Inter) and icons (Lucide) load from CDN, internet access required.
- Demo CTAs point to the Tally form (`https://tally.so/r/w41pDd`).
- `transaction.svg` is a partial reconstruction, the mobility-program hero
  still uses its CSS phone mockup until the final artwork is dropped in.
