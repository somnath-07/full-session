# Design System Inspired by Valley

## 1. Visual Theme & Atmosphere

Valley's design system embodies a clean, minimalist aesthetic paired with natural landscape imagery and subtle gradients. The visual identity balances professional B2B utility with an approachable, modern sensibility. The brand employs a restrained color palette dominated by blacks and whites, accented with intentional pops of LinkedIn blue, creating a sense of focus and trustworthiness. Layered hero imagery with soft gradient overlays evokes a sense of calm discovery—the "valley" metaphor comes alive through serene landscape photography that grounds the platform's automated intelligence features. The typography is modern and geometric, using PP Neue Montreal as the primary typeface alongside clean sans-serif fonts, reinforcing technical sophistication without coldness. Overall, the atmosphere is one of quiet confidence: a platform that works intelligently in the background while the user maintains control and authenticity.

**Key Characteristics**
- Minimal black, white, and blue color story
- Landscape photography with soft gradient overlays
- Modern geometric typography with tech-forward personality
- High contrast and clear visual hierarchy
- Calm, focused, and trustworthy aesthetic
- Natural spacing and breathing room

## 2. Color Palette & Roles

### Primary
- **Deep Black** (`#000000`): Primary text, UI elements, and core interactive surfaces; used extensively throughout the interface for maximum contrast and legibility
- **Pure White** (`#FFFFFF`): Primary background surface, card backgrounds, and container fills
- **Bright Blue** (`#0000EE`): Primary call-to-action links, active states, and interactive highlights; the dominant brand accent

### Accent Colors
- **LinkedIn Blue** (`#0076B5`): Secondary accent for LinkedIn-related content, partner integrations, and supportive UI elements
- **Light LinkedIn Blue** (`#0077B5`): Slightly warmer variant of LinkedIn blue for hover states and transitional emphasis
- **Sky Blue** (`#0099FF`): Tertiary accent for highlights, badges, and additional interactive affordances
- **Navy** (`#002669`): Deep blue for footer backgrounds and low-contrast zones

### Interactive
- **Link Blue** (`#0000EE`): Underlined links and text-based CTAs; maintains web-standard link color for predictable user behavior
- **Semi-Transparent Black** (`rgba(0, 0, 0, 0.2)`): Ghost buttons, hover overlays, and subtle interactive states

### Neutral Scale
- **Dark Gray** (`#222222`): Secondary heading text and supporting typography
- **Medium Gray** (`#767676`): Tertiary text, placeholder text, and disabled states
- **Light Gray** (`#E0E0E0`): Dividers, subtle borders, and inactive UI zones
- **Very Light Gray** (`#F8F8F8`): Subtle background tints and nested container backgrounds
- **Off White** (`#FDFDFD`): Barely-off-white for layered surfaces and alternative backgrounds

### Surface & Borders
- **Surface Light** (`#E9F5FF`): Soft blue-tinted background for highlighted sections or callout containers
- **Border Gray** (`#E0E0E0`): Hairline dividers and subtle edges
- **Semi-Transparent White** (`rgba(255, 255, 255, 0.6)`): Overlay and glass-morphism effects

## 3. Typography Rules

### Font Family
- **Primary:** PP Neue Montreal Medium, with fallback `system-ui, -apple-system, sans-serif`
- **Secondary:** `sans-serif` with fallback `Arial, Helvetica, sans-serif` for body and link text

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero | PP Neue Montreal | 56px | 500 | 56px | 0px | Large hero headlines; primary page title |
| Heading 1 | PP Neue Montreal | 20px | 500 | 24px | 0px | Section headings and top-level titles |
| Body / Paragraph | sans-serif | 14px | 400 | 16.8px | 0px | Default body copy and descriptive text |
| Input Placeholder | PP Neue Montreal | 16px | 500 | 19.2px | 0px | Form input fields and search boxes |
| Button / Label | sans-serif | 12px | 400 | normal | 0px | Button text, navigation items, and metadata |
| Link / Caption | sans-serif | 12px | 400 | normal | 0px | Inline links and fine-print text |

### Principles
- Hierarchy is conveyed through size and weight rather than multiple typeface families
- Body text maintains generous line-height (1.2x) for comfortable reading on screen
- Inputs use the bolder PP Neue Montreal to create subtle affordance distinction
- All text rendering favors clarity and contrast over decorative effects
- Links use the web-standard blue (`#0000EE`) for instant recognition

## 4. Component Stylings

### Buttons

**Primary Button**
- **Background:** `#000000`
- **Text Color:** `#FFFFFF`
- **Padding:** `12px 18px`
- **Border Radius:** `0px`
- **Font:** sans-serif, 12px, weight 400
- **Border:** none
- **Box Shadow:** none
- **Height:** 46px
- **Hover State:** `background-color: #222222; cursor: pointer;`
- **Active State:** `background-color: #000000; opacity: 0.85;`

**Secondary Button (Ghost)**
- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#000000`
- **Padding:** `12px 18px`
- **Border Radius:** `0px`
- **Font:** sans-serif, 12px, weight 400
- **Border:** `1px solid #000000`
- **Box Shadow:** none
- **Height:** 46px
- **Hover State:** `background-color: rgba(0, 0, 0, 0.05); border-color: #000000;`

**Icon Button (Circular)**
- **Background:** `rgba(0, 0, 0, 0.2)`
- **Text Color:** `#000000`
- **Padding:** `0px`
- **Border Radius:** `40px`
- **Width:** 40px
- **Height:** 40px
- **Font:** sans-serif, 12px, weight 400
- **Border:** none
- **Box Shadow:** none
- **Hover State:** `background-color: rgba(0, 0, 0, 0.3);`

**CTA Button (Primary Call-to-Action)**
- **Background:** `#000000`
- **Text Color:** `#FFFFFF`
- **Padding:** `12px 24px`
- **Border Radius:** `0px`
- **Font:** sans-serif, 12px, weight 600
- **Border:** none
- **Box Shadow:** none
- **Hover State:** `background-color: #222222;`
- **Arrow Suffix:** Include right-pointing arrow (→) after text

### Cards & Containers

**Card Surface**
- **Background:** `#FFFFFF`
- **Border Radius:** `10px`
- **Padding:** `24px`
- **Border:** `1px solid #E0E0E0`
- **Box Shadow:** none (or `0px 1px 3px rgba(0, 0, 0, 0.1)` for subtle lift)
- **Text Color:** `#000000`

**Highlight Container (Callout)**
- **Background:** `#E9F5FF`
- **Border Radius:** `10px`
- **Padding:** `16px 20px`
- **Border:** `1px solid #0099FF`
- **Text Color:** `#002669`

**Modal / Dialog**
- **Background:** `#FFFFFF`
- **Border Radius:** `10px`
- **Padding:** `28px`
- **Border:** `1px solid #E0E0E0`
- **Box Shadow:** `0px 10px 40px rgba(0, 0, 0, 0.15)`

### Inputs & Forms

**Text Input (Default)**
- **Background:** `#FFFFFF`
- **Text Color:** `#000000`
- **Border:** `2px solid #767676`
- **Border Radius:** `0px`
- **Padding:** `12px 16px`
- **Font:** PP Neue Montreal, 16px, weight 500
- **Height:** 44px
- **Line Height:** 19.2px
- **Focus State:** `border-color: #0000EE; outline: none; box-shadow: 0px 0px 0px 2px rgba(0, 0, 238, 0.1);`
- **Placeholder Color:** `#767676`
- **Placeholder Font Style:** italic

**Textarea**
- **Background:** `#FFFFFF`
- **Text Color:** `#000000`
- **Border:** `2px solid #767676`
- **Border Radius:** `0px`
- **Padding:** `12px 16px`
- **Font:** PP Neue Montreal, 14px, weight 400
- **Min Height:** 100px
- **Focus State:** `border-color: #0000EE; box-shadow: 0px 0px 0px 2px rgba(0, 0, 238, 0.1);`

**Form Label**
- **Font:** sans-serif, 12px, weight 600
- **Text Color:** `#000000`
- **Margin Bottom:** `8px`
- **Display:** block

**Form Error Message**
- **Text Color:** `#C00000`
- **Font:** sans-serif, 12px, weight 400
- **Margin Top:** `4px`

### Navigation

**Header Navigation**
- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Height:** 56px
- **Padding:** `0px 40px`
- **Display:** flex
- **Align Items:** center
- **Justify Content:** space-between
- **Border Bottom:** `1px solid #E0E0E0`

**Nav Link (Default)**
- **Text Color:** `#000000`
- **Font:** sans-serif, 12px, weight 400
- **Padding:** `8px 16px`
- **Border Radius:** `0px`
- **Hover State:** `text-decoration: underline; color: #0000EE;`
- **Active State:** `text-decoration: underline; color: #0000EE;`

**Nav Link (Highlighted / Affiliate)**
- **Text Color:** `#0000EE`
- **Font:** sans-serif, 12px, weight 600
- **Font Style:** uppercase (if used)

**Logo**
- **Height:** 24px
- **Aspect Ratio:** auto
- **Margin Right:** 40px

### Links

**Inline Link**
- **Text Color:** `#0000EE`
- **Font:** sans-serif, 12px, weight 400
- **Text Decoration:** none (default), underline on hover
- **Hover State:** `text-decoration: underline; opacity: 0.8;`
- **Visited State:** `color: #002669;`

**Link with Arrow**
- **Text Color:** `#0000EE`
- **Font:** sans-serif, 12px, weight 600
- **Suffix:** ` →` (space + right arrow, color: inherit)
- **Hover State:** `text-decoration: underline;`

## 5. Layout Principles

### Spacing System
- **Base Unit:** `4px`
- **Scale:** `4px, 8px, 12px, 16px, 20px, 24px, 28px, 40px, 52px, 56px, 60px, 72px`
- **Usage Context:**
  - `4px, 8px`: Micro-spacing (button gaps, icon padding)
  - `12px, 16px`: Component internal padding (buttons, inputs)
  - `20px, 24px`: Card/container padding and section margins
  - `28px, 40px`: Medium spacing between content blocks
  - `52px, 56px, 60px, 72px`: Large section spacing and hero spacing

### Grid & Container
- **Max Width:** `1200px` for constrained content sections
- **Sidebar Width:** `320px` (if applicable)
- **Column Strategy:** 12-column responsive grid
- **Gutter Width:** `20px` (gap between columns)
- **Section Patterns:**
  - Hero section: full width with background image/gradient overlay
  - Content sections: centered container with 40px–60px vertical padding
  - Card grids: 3 columns on desktop, 1 column on mobile
  - CTA zones: centered, max-width 600px

### Whitespace Philosophy
Valley prioritizes breathing room and focus. Generous vertical spacing between sections (56px–72px) creates visual rest and emphasizes content hierarchy. Horizontal padding (40px–60px) prevents content from feeling cramped. Internal component spacing is tighter (12px–20px) to maintain visual cohesion. Empty space is intentional—it guides the eye and reduces cognitive load.

### Border Radius Scale
- **`0px`:** All default buttons, inputs, and cards (sharp, modern aesthetic)
- **`10px`:** Larger card containers and modal dialogs (subtle softness)
- **`40px`:** Circular icon buttons and avatar images (full roundness)
- **`950.93px`:** Extreme radius for organic, fully-rounded images (legacy data; typically use 50% for circles)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow; `box-shadow: none;` | Default cards, buttons, inputs, navigation |
| Subtle (Level 1) | `box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);` | Slightly raised cards, hovering elements |
| Raised (Level 2) | `box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);` | Hover states on cards, dropdown menus |
| Overlay (Level 3) | `box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.15);` | Modals, dialogs, popovers |
| Floating (Level 4) | `box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.2);` | Sticky headers, top-layer overlays |

Valley uses minimal shadows to maintain the clean, minimalist aesthetic. Shadows are employed sparingly, primarily on modals and elevated hover states. The shadow philosophy follows a soft, diffused approach: shadows should feel natural and atmospheric rather than sharp or dramatic. Layered content is distinguished primarily through color, borders, and positioning rather than heavy shadow depth. This restraint reinforces the calm, focused visual identity.

## 7. Do's and Don'ts

### Do
- **Use black (`#000000`) for primary text and interactive elements** — it maintains the stark, professional aesthetic
- **Maintain consistent spacing** from the scale (`4px, 8px, 12px, etc.`) to preserve visual rhythm
- **Apply the blue accent (`#0000EE`) to all primary CTAs and links** — users expect this standard web color
- **Use cards with subtle borders (`#E0E0E0`) rather than shadows** to define content zones
- **Keep button padding consistent at `12px 18px`** for a unified, modern button style
- **Reserve rounded corners (`10px`) for only large containers and modals** — sharp corners elsewhere maintain the tech-forward edge
- **Leverage PP Neue Montreal for headings and inputs** to create typographic distinction
- **Apply generous spacing (`56px–72px`) between major sections** for a breathing, premium feel
- **Use the light blue container (`#E9F5FF`) for highlighted or callout information**
- **Underline links only on hover** for a cleaner, less cluttered interface

### Don't
- **Don't mix multiple primary colors** — the black/white/blue trio is intentional and sufficient
- **Don't use shadows as the primary elevation method** — rely on borders and color instead
- **Don't add rounded corners to buttons or small inputs** — the sharp aesthetic is deliberate
- **Don't exceed the spacing scale** — consistency prevents a chaotic layout
- **Don't use more than two typeface families** — stick to PP Neue Montreal and sans-serif
- **Don't place text on low-contrast backgrounds** — maintain `#000000` text on white or light surfaces
- **Don't animate transitions longer than 300ms** — Valley feels snappy and responsive, not sluggish
- **Don't use the secondary LinkedIn blues without purpose** — they are supporting accents only
- **Don't reduce padding below `12px` in interactive elements** — minimum touch targets matter
- **Don't introduce drop shadows on non-modal elements** — keep the interface flat and clean

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | `< 640px` | Single-column layout; 20px padding; navigation collapses to hamburger; font sizes reduce by 2px |
| Tablet | `640px–1024px` | Two-column grid; 28px padding; larger buttons (56px height); simplified navigation |
| Desktop | `1024px–1440px` | Full 3-column grid; 40px padding; max-width 1200px applied; all features visible |
| Wide | `> 1440px` | 60px padding; centered content with max-width 1400px; spacious hero sections |

### Touch Targets
- **Minimum size:** `44px × 44px` for all interactive elements (buttons, links, icon buttons)
- **Minimum spacing:** `8px` between adjacent touch targets to prevent accidental overlap
- **Padding increase on mobile:** Increase button padding from `12px 18px` to `14px 24px` on devices ≤ 640px
- **Link underline thickness:** Increase from `1px` to `2px` on mobile for easier tapping

### Collapsing Strategy
- **Navigation:** Header nav items collapse into hamburger menu below 768px; show full menu above
- **Grid Layout:** 3-column grid → 2-column (tablet) → 1-column (mobile)
- **Sections:** Reduce max-width from 1200px to 100% on mobile; maintain margins
- **Typography:** Display heading shrinks from 56px (desktop) to 36px (tablet) to 24px (mobile)
- **Spacing:** Reduce vertical spacing from 72px (desktop) to 52px (tablet) to 40px (mobile)
- **Images:** Background images scale and reposition; use `background-size: cover; background-position: center;` to maintain aspect
- **Forms:** Input fields expand to full width on mobile; buttons become full-width at 50px height
- **Modals:** Full-screen on mobile (0px margin) with 20px padding; centered 80% width on desktop

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA:** Deep Black (`#000000`)
- **Link Text:** Bright Blue (`#0000EE`)
- **Background:** Pure White (`#FFFFFF`)
- **Heading Text:** Deep Black (`#000000`)
- **Secondary Accent:** LinkedIn Blue (`#0076B5`)
- **Tertiary Accent:** Sky Blue (`#0099FF`)
- **Body Text:** Deep Black (`#000000`)
- **Disabled/Placeholder:** Medium Gray (`#767676`)
- **Borders:** Light Gray (`#E0E0E0`)
- **Callout Container:** Light Blue Surface (`#E9F5FF`)
- **Ghost Overlay:** Semi-Transparent Black (`rgba(0, 0, 0, 0.2)`)

### Iteration Guide

1. **All buttons default to black background (`#000000`) with white text, no border radius, and 12px 18px padding** — this is the system's core affordance.

2. **Links are always bright blue (`#0000EE`) with no underline by default; underline appears on hover only** — predictable web behavior.

3. **Typography hierarchy uses three scales only: 56px for display, 20px for headings, 14px for body, 12px for UI labels** — no tweening between sizes.

4. **Cards and containers use sharp corners (`border-radius: 0px`) except for modals (`10px`) and circular buttons (`40px`)** — the sharp aesthetic is intentional.

5. **Spacing always comes from the approved scale (`4px, 8px, 12px, 16px, 20px, 24px, 28px, 40px, 52px, 56px, 60px, 72px`)** — never use arbitrary spacing.

6. **Shadows are rare; use only on modals (`0px 10px 40px rgba(0, 0, 0, 0.15)`) or subtle hover states (`0px 1px 3px rgba(0, 0, 0, 0.1)`)** — flatness is the default.

7. **Inputs use a `2px solid #767676` border with white background; on focus, add a blue border and `rgba(0, 0, 238, 0.1)` glow** — clear state indication.

8. **Form labels are always sans-serif 12px, weight 600, stacked above inputs with 8px margin** — consistent form structure.

9. **All text uses either PP Neue Montreal (headings, inputs) or sans-serif (body, buttons, nav) with no exceptions** — two-font system only.

10. **Responsive breakpoints are 640px, 1024px, and 1440px; always test at these thresholds and collapse the layout accordingly** — mobile-first thinking.

11. **The blue accent (`#0000EE`) is reserved for primary CTAs and links; secondary accents (`#0076B5`, `#0099FF`) support specific contexts only** — color restraint.

12. **Modals, cards, and containers maintain internal padding at 24px; external spacing between sections is 40px–72px** — rhythm through repetition.