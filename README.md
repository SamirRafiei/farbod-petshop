# Farbod Pet — Budapest Pet Shop

A complete static showroom demo, with white, light blue and turquoise styling.

## Open the website

1. Extract the ZIP first.
2. Open `farbod-pet/index.html` in a current browser (Chrome, Edge, Firefox or Safari).
3. Keep `styles.css`, `script.js` and the `assets` folder beside `index.html`.

No installation, account, server or internet connection is needed. All images, branding, styles and scripts are included. The site uses system fonts and makes no external requests.

## What's included

- Four categories: dogs, cats, fish and birds.
- Twelve sample products, three per category.
- Category shortcuts, combined category/search filtering, sorting and a clear empty state.
- Product details with sample specifications and an inquiry shortcut.
- About, showroom and contact sections.
- A local inquiry preview with required-field/email validation. No messages are sent or saved.
- Responsive navigation, keyboard focus styles, Escape-to-close product dialogs and reduced-motion support.
- Original Farbod Pet logo concept and locally bundled illustrative product photography.

## Files

`index.html` — Page sections, navigation and contact form.

`styles.css` — Layout, colours, typography and responsive styles.

`script.js` — Product data, filtering, sorting, dialog and inquiry preview.

`assets/mark.svg` — Compact FP monogram and favicon.

`assets/logo.svg` — Standalone wordmark with Budapest Pet Shop descriptor.

`assets/hero.jpg` — Illustrative showroom image.

`assets/product-01.jpg` through `product-12.jpg` — Product images.

## Brand concept

**Farbod Pet** is the primary name. **Budapest Pet Shop** anchors the location and purpose. An interlocking F/P monogram creates a compact, professional mark. Turquoise (#087D75), deep green (#193D3B) and pale blue (#EDF5FA) carry the visual identity.

The original uploaded HTML informed the useful structure: a product-led hero, category navigation, catalog search, product dialogs, about and contact sections. The prior business branding, products, regional details, contacts and delivery claims have been replaced. Its external stylesheet, script and image files were not supplied, so this package includes newly built, complete replacements.

## Edit the demo

- Edit `products` near the top of `script.js` to change names, prices, images and specifications. Prices are integers in Hungarian forints; the display uses `Ft`.
- Each product needs a unique `id` and one of these pet values: `dogs`, `cats`, `fish`, `birds`.
- If the catalog size changes, update the three-essentials labels in the category tiles in `index.html`.
- Product data is trusted local source code, not a public data-entry surface. Escape quotation marks when editing JavaScript strings. Do not feed external untrusted content into the card templates without escaping it.
- Main colour variables are at the start of `styles.css`.
- Business copy and showroom/contact details are in `index.html`.

## Demo content to replace before public use

- The “6+ years” experience line is a proposed brand statement, not a verified business claim. Verify or replace it and remove the demo footnote only when accurate.
- All products, prices and specifications are samples. Product and showroom images are AI-generated concepts, not photos of actual inventory or premises. Replace them with accurate supplier/owned photos and confirmed product details for a live store.
- Budapest is the requested brand location. No street address, opening hours, email or telephone number has been invented. Add confirmed details when available.
- The inquiry form only displays a preview in the current browser. It has no mail, WhatsApp, database or form-service connection. Refreshing clears the current page state; no application storage is used.
- This is a showroom demo, with no checkout, payment, accounts or stock management.

## Verification

Checked by opening the site directly as a local file in Chromium-based Edge: all category filters, search, no-result reset, price sorting, details dialogs and Escape, product-to-inquiry prefill, form preview, mobile menu and local asset loading. Layout checked at widths of 320, 390, 768, 1024 and 1440 pixels. No horizontal page overflow or JavaScript errors were found in those checks.
